import React from 'react';
import { useGate, useList, useStore } from 'effector-react';
import { ArticlesWrapper, ArticlePreview } from 'features/feed';
import { Pagination, Spinner } from 'ui';
import { model } from './model';
import './model/init';

export const GlobalFeedPage: React.FC = () => {
  useGate(model.PageGate);
  const loading = useStore(model.fetchFeedFx.pending);
  const { totalPages, currentPage, pageSize } = model.useModel();

  return (
    <>
      <ArticlesWrapper>
        {useList(model.$articles, (article) => (
          <li>
            <ArticlePreview
              data={article}
              onClick={() => model.favoriteToggled(article)}
            />
          </li>
        ))}
      </ArticlesWrapper>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalPages}
        onItemClick={model.currentPageWasSet}
      />
      <Spinner loading={loading} />
    </>
  );
};