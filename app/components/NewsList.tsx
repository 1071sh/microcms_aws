import Link from "next/link";
import React from "react";
import styles from "@/app/page.module.css";
import { NewsLists } from "@/types/microcms";

type NewsListProps = {
  lists: NewsLists[];
};

const NewsList = ({ lists }: NewsListProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <ul className={styles.newsList}>
      {lists.map((item) => (
        <li key={item.id} className={styles.newsItem}>
          <Link href={`/news/${item.id}`} className={styles.newsLink}>
            <time className={styles.date}>{formatDate(item.publishedAt)}</time>
            <span className={`category ${item.category.id}`}>{item.category.name}</span>
            <span className={styles.newsTitle}>{item.title}</span>
            <span className={styles.arrow}>›</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
