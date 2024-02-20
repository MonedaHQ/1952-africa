import ItemList from '@/components/ItemList';

function Exhibitions({ exhibitions }) {
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
