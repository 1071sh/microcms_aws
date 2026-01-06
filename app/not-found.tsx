import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 - ページが見つかりません</h2>
      <p className={styles.description}>お探しのページは存在しないか、移動された可能性があります。</p>
      <Link href="/" className={styles.link}>
        ホームに戻る
      </Link>
    </div>
  );
}
