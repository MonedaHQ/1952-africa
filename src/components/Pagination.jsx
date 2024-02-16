import { useRouter } from 'next/router';
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from 'react-icons/pi';
import styles from './styles/pagination.module.css';
import { PAGE_SIZE } from '@/utils/config';

function Pagination({ count }) {
  const router = useRouter();
  const currentPage = !router.query.page ? 1 : +router.query.page;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: next },
    });
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: prev },
    });
  }

  if (pageCount <= 1) return null;

  return (
    <div className={styles.container}>
      <p className={styles.results}>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>
      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <PiCaretCircleLeftFill />
        </button>
        <button
          disabled={currentPage === pageCount}
          className={styles.btn}
          onClick={nextPage}
        >
          <PiCaretCircleRightFill />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
