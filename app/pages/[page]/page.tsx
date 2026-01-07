import { getNewsPosts } from "@/libs/news";
import styles from "@/app/page.module.css";
import NewsList from "@/app/components/NewsList";
import Pagination from "@/app/components/pagination";
import { LIMIT } from "@/libs/constants";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const currentPage = parseInt(page, 10);
  const offset = (currentPage - 1) * LIMIT;

  const { contents, totalCount } = await getNewsPosts({
    offset,
  });

  // ページ数を計算
  const totalPages = Math.ceil(totalCount / LIMIT);

  // ページ番号が無効な場合は404を返す
  if (currentPage < 1 || currentPage > totalPages || isNaN(currentPage)) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>お知らせ</h1>
      <NewsList lists={contents} />
      <Pagination totalCount={totalCount} currentPage={currentPage} />
    </main>
  );
}
