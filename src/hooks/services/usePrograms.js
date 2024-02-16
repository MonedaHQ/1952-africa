import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getPrograms } from '@/services/apiPrograms';

export function usePrograms() {
  const router = useRouter();

  // Search
  const searchValues = router.query.name || '';
  const searchQuery =
    !searchValues || searchValues === ''
      ? null
      : { field: 's', value: searchValues };

  // FilterByRange
  const range = router.query.range || '';
  const rangeStatus = !range
    ? null
    : { field: 'title', value: range.toLowerCase() };

  // Sort
  const sortBy = router.query.sortBy || '';
  const sortMethod = !sortBy
    ? null
    : {
        field: sortBy === 'name' ? 'sort' : 'sortOrder',
        value:
          sortBy === 'name' ? 'title' : sortBy === 'earliest' ? 'ASC' : 'DESC',
      };

  const { isLoading, data: programs } = useQuery({
    queryKey: ['programs', rangeStatus, searchQuery, sortMethod],
    queryFn: () => getPrograms({ rangeStatus, searchQuery, sortMethod }),
  });

  return { isLoading, programs };
}
