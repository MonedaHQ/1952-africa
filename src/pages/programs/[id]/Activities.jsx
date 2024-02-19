import Empty from '@/components/Empty';
import ItemList from '@/components/ItemList';
import Loader from '@/components/Loader';
import { useActivities } from '@/components/features/programs/useActivities';

function Activities({ programId }) {
  const { activities, isLoading } = useActivities({ program_id: programId });

  if (isLoading) return <Loader />;

  if (!activities.data.length) return <Empty resourceName="activities" />;

  return (
    <div>
      <ItemList
        title="All Activities"
        data={activities.data}
        paginationCount={activities.meta.totalItems}
        navigateTo={'activities'}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Activities;
