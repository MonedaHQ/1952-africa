import ItemList from '@/components/ItemList';
import { useActivities } from '@/components/features/programs/useActivities';

function Activities({ programId }) {
  const { activities, isLoading } = useActivities({ program_id: programId });

  if (isLoading) return;

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
