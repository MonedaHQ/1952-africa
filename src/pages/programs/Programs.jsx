import ItemList from '@/components/ItemList';

function Programs({ programs, isLoading }) {
  if (isLoading) return;
  return (
    <ItemList
      title="Explore our programs"
      data={programs.data}
      paginationCount={programs.meta.totalItems}
      isLoading={isLoading}
      navigateTo="programs"
    />
  );
}

export default Programs;
