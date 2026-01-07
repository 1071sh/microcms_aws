import { getNewsPosts } from "@/libs/news";
import styles from "@/app/page.module.css";
import NewsList from "./components/NewsList";
import Pagination from "./components/pagination";

export default async function Home() {
  const { contents, totalCount } = await getNewsPosts({
    offset: 0,
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>お知らせ</h1>
      <NewsList lists={contents} />
      <Pagination totalCount={totalCount} currentPage={1} />
    </main>
  );
}
