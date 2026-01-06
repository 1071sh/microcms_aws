import { client } from "@/libs/microcms";
import { NewsPosts, NewsPost } from "@/types/microcms";

export const getNewsPosts = async (): Promise<NewsPosts[]> => {
  const data = await client.get({
    endpoint: "news",
    queries: {
      fields: "id,title,publishedAt,category,type",
      limit: 5,
    },
  });
  return data.contents;
};

export const getNewsPost = async (id: string): Promise<NewsPost> => {
  const data = await client.get({
    endpoint: `news/${id}`,
  });
  return data;
};

export const getAllNewsIds = async (): Promise<string[]> => {
  const data = await client.get({
    endpoint: "news",
    queries: {
      fields: "id",
    },
  });
  return data.contents.map((content: { id: string }) => content.id);
};
