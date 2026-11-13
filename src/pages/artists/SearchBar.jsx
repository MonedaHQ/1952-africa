import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles/searchbar.module.css';
import { PiMagnifyingGlass } from 'react-icons/pi';

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
      <button type="submit" aria-label="Search artists"><PiMagnifyingGlass /></button>
    </form>
  );
}

export default SearchBar;
