import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as authUser from 'features/user';
import * as types from './types';

export const toggleFollowing = createEvent<React.MouseEvent>();

export const fetchProfileFx = createEffect((username: string) =>
  api
    .get<types.GetProfileFxDone>(`/profiles/${username}`)
    .then<types.Profile>((x) => x.profile),
);

export const subscribeFx = createEffect((username: string) =>
  api
    .post<types.GetProfileFxDone>(`/profiles/${username}/follow`)
    .then<types.Profile>((x) => x.profile),
);

export const unsubscribeFx = createEffect((username: string) =>
  api
    .del<types.GetProfileFxDone>(`/profiles/${username}/follow`)
    .then<types.Profile>((x) => x.profile),
);

export const PageGate = createGate<types.PageGateType>();

export const $username = createStore<string>('');
export const $profile = createStore<types.Profile>({
  bio: '',
  following: false,
  image: '',
  username: '',
});

export const $following = $profile.map((x) => x.following);
export const $thenSubscribed = $profile.map((x) => x.following === true);
export const $thenUnsubscribed = $profile.map((x) => x.following === false);

export const $isCurrentUser = combine(
  $profile,
  authUser.model.$user,
  (profile, user) => profile.username === user.username,
);

export const $isAnotherUser = $isCurrentUser.map((x) => !x);