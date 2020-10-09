import { types } from 'modules/feed';

export type Feed = Readonly<Record<string, types.Feed>>;

export type GetFeedByTagArgs = Readonly<{
  tag: string;
  page: number;
  pageSize: number;
}>;
