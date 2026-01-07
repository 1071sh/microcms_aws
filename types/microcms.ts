import type { MicroCMSImage } from "microcms-js-sdk";

export type NewsLists = {
  body?: string;
  id: string;
  title: string;
  type: string[];
  publishedAt: string;
  category: {
    id: string;
    name: string;
  };
};

export type NewsItem = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  category: {
    id: string;
    name: string;
  };
  thumbnail: MicroCMSImage;
};
