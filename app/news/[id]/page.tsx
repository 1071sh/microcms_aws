import { getNewsPost } from "@/libs/news";
import { formatDate } from "@/utils/format";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default async function NewsPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getNewsPost(id);

  // YY.MM.DD形式に変換
  const formattedDate = formatDate(post.publishedAt);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <time dateTime={post.publishedAt} className={styles.date}>
          {formattedDate}
        </time>
        {post.category && <span className={`category ${post.category.id}`}>{post.category.name}</span>}
      </div>
      {post.thumbnail && (
        <div className={styles.thumbnail}>
          <Image src={post.thumbnail.url} alt={post.title} width={post.thumbnail.width} height={post.thumbnail.height} />
        </div>
      )}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body }} />
      <div className={styles.backLink}>
        <Link href="/">お知らせ一覧に戻る</Link>
      </div>
    </main>
  );
}
