import { combine, forward, attach } from 'effector';
import { createGate } from 'effector-react';
import { request } from 'api';
import * as router from 'library/router';
import { types } from 'modules/feed';
import * as user from 'modules/user';
import { root } from '../../../root';
import { GateState } from './types';

export const articleDeleted = root.createEvent<React.MouseEvent>();
export const fetchArticleFx = root.createEffect((slug: string) =>
  request
    .get<{ article: types.Article }>(`articles/${slug}`)
    .then((x) => x.data.article)
    .then(({ createdAt, ...article }) => ({
      ...article,
      createdAt: new Date(createdAt).toDateString(),
    })),
);

export const deleteArticleFx = root.createEffect((slug: string) =>
  request.delete<void>(`articles/${slug}`),
);

export const fetchPageDataFx = root.createEffect((slug: string) =>
  Promise.all([fetchArticleFx(slug)]),
);

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.id);

export const $article = root
  .createStore<types.Article>({
    title: '',
    slug: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    tagList: [],
    description: '',
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
    },
    favorited: false,
    favoritesCount: 0,
  })
  .on(fetchArticleFx.doneData, (_, payload) => payload);

export const $canModify = combine(
  $article,
  user.model.$user,
  ({ author }, authUser) => author.username === authUser.username,
);

forward({
  from: Gate.open,
  to: attach({
    source: $slug,
    effect: fetchArticleFx,
  }),
});

forward({
  from: articleDeleted,
  to: attach({
    source: $slug,
    effect: deleteArticleFx,
  }),
});

deleteArticleFx.done.watch(() => {
  router.model.history.push('/');
});
