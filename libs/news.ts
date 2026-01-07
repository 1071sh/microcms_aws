import { client } from "@/libs/microcms";
import { NewsLists, NewsItem } from "@/types/microcms";
import { LIMIT } from "@/libs/constants";

export const getNewsPosts = async (options?: { offset?: number }): Promise<{ contents: NewsLists[]; totalCount: number }> => {
  const data = await client.get({
    endpoint: "news",
    queries: {
      fields: "id,title,publishedAt,category,type",
      limit: LIMIT,
      offset: options?.offset || 0,
    },
  });
  return {
    contents: data.contents,
    totalCount: data.totalCount,
  };
};

export const getNewsPost = async (id: string): Promise<NewsItem> => {
  const data = await client.get({
    endpoint: `news/${id}`,
  });
  return data;
};
