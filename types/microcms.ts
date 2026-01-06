import type { MicroCMSImage } from "microcms-js-sdk";

export type NewsPosts = {
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

export type NewsPost = {
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
