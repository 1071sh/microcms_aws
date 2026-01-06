import Link from "next/link";
import { getNewsPosts } from "@/libs/news";
import styles from "@/app/page.module.css";

export default async function Home() {
  const posts = await getNewsPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>お知らせ</h1>
      <ul className={styles.newsList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.newsItem}>
            <Link href={`/news/${post.id}`} className={styles.newsLink}>
              <time className={styles.date}>{formatDate(post.publishedAt)}</time>
              <span className={`category ${post.category.id}`}>{post.category.name}</span>
              <span className={styles.newsTitle}>{post.title}</span>
              <span className={styles.arrow}>›</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
