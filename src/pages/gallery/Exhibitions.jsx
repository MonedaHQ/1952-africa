import ItemList from '@/components/ItemList';
import Loader from '@/components/Loader';

function Exhibitions({ exhibitions }) {
  if (!exhibitions) return <Loader />;
  return (
    <ItemList
      title={`Exhibitions`}
      data={exhibitions.data}
      paginationCount={exhibitions.meta.totalItems}
      isLoading={false}
      navigateTo={'gallery'}
    />
  );
}

export default Exhibitions;
