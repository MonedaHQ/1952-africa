import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getArtworkSlides } from '@/services/apiArtworks';
import { slideshowImages as fallbackSlides } from '@/data/slideshowImages';

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Artworks from the gallery, in a fresh random order on every page visit.
 * Any newly uploaded work joins automatically.
 * Returns null until loaded; falls back to a curated set if the API fails.
 */
export function useArtworks() {
  const { data, isError } = useQuery({
    queryKey: ['artwork-slides'],
    queryFn: getArtworkSlides,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  // shuffling only happens client-side after data arrives, so the
  // server-rendered markup stays deterministic
  return useMemo(() => {
    if (data?.length) return shuffle(data);
    if (isError) return shuffle(fallbackSlides);
    return null;
  }, [data, isError]);
}
