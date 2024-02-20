import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles/searchbar.module.css';

function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      {
        pathname: router.pathname,
        query: { search: searchQuery },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Artists"
        className={styles.searchbar}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
