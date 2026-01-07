import Link from "next/link";
import { LIMIT } from "@/libs/constants";
import styles from "./pagination.module.css";

type PaginationProps = {
  totalCount: number;
  currentPage?: number;
};

export default function Pagination(props: PaginationProps) {
  const pageCount = Math.ceil(props.totalCount / LIMIT);
  const currentPage = props.currentPage ?? 1;

  return (
    <div className={styles.paginationContainer}>
      {Array.from({ length: pageCount }).map((_, i) => {
        const pageNumber = i + 1;
        const isCurrentPage = pageNumber === currentPage;
        const href = pageNumber === 1 ? "/" : `/pages/${pageNumber}`;

        return (
          <Link key={i} href={href} className={`${styles.pageLink} ${isCurrentPage ? styles.active : ""}`}>
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}
