import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getActivities as getActivitiesApi } from '@/services/apiPrograms';

export function useActivities({ program_id }) {
  const router = useRouter();

  //search;
  const searchValues = router.query.name;
  const searchQuery =
    !searchValues || searchValues === ''
      ? null
      : { field: 's', value: searchValues };

  //filterByRange;
  const range = router.query.range;
  const rangeStatus = !range
    ? null
    : { field: 'title', value: range.toLowerCase() };

  //sort;
  const sortBy = router.query.sortBy;
  const sortMethod = !sortBy
    ? null
    : {
        field: sortBy === 'name' ? 'sort' : 'sortOrder',
        value:
          sortBy === 'name' ? 'title' : sortBy === 'earliest' ? 'ASC' : 'DESC',
      };

  const { isLoading, data: activities } = useQuery({
    queryKey: ['activities', searchQuery, rangeStatus, sortMethod],
    queryFn: () =>
      getActivitiesApi({
        program_id,
        searchQuery,
        rangeStatus,
        sortMethod,
      }),
  });

  return { isLoading, activities };
}
