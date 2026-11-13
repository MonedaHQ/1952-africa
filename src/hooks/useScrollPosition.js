import { useState, useEffect } from 'react';

/**
 * Returns the scroll offset, capped just past `position`.
 * Capping means components only re-render while the page is near the top,
 * not on every scroll event further down.
 */
function useScrollPosition(position = 200) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(Math.min(Math.round(window.scrollY), position + 1));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [position]);

  return scrollY;
}

export default useScrollPosition;
