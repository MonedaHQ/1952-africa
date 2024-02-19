import ItemList from '@/components/ItemList';
import Loader from '@/components/Loader';

function Programs({ programs, isLoading }) {
  if (isLoading) return <Loader />;
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
