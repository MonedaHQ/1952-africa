import { getPrograms } from '@/services/apiPrograms';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function usePrograms() {
  const router = useRouter();

  //search
  const searchValues = router.query.name;
  const searchQuery =
    !searchValues || searchValues === ''
      ? null
      : { field: 's', value: searchValues };

  //filterByRange
  const range = router.query.range;
  const rangeStatus = !range
    ? null
    : { field: 'title', value: range.toLowerCase() };

  //sort
  const sortBy = router.query.sortBy;
  const sortMethod = !sortBy
    ? null
    : {
        field: sortBy === 'name' ? 'sort' : 'sortOrder',
        value:
          sortBy === 'name' ? 'title' : sortBy === 'earliest' ? 'ASC' : 'DESC',
      };

  //pagination
  const page = !router.query.page ? 1 : +router.query.page;

  const { isLoading, data: programs } = useQuery({
    queryKey: ['programs', rangeStatus, searchQuery, sortMethod, page],
    queryFn: () => getPrograms({ rangeStatus, searchQuery, sortMethod, page }),
  });

  return { isLoading, programs };
}
