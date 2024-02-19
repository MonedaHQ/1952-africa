import { BASE_URL, PAGE_SIZE } from '@/utils/config';
import { addQueryParam } from '@/utils/helpers';

export async function getSpecificWorks({
  artist_id,
  exhibition_id,
  rangeStatus,
  searchQuery,
  sortMethod,
  page,
}) {
  let url = `${BASE_URL}/work`;

  url = addQueryParam(url, 'page', page);
  url = addQueryParam(url, 'limit', PAGE_SIZE);

  url = addQueryParam(url, 'artist_id', artist_id);
  url = addQueryParam(url, 'exhibition_id', exhibition_id);
  url = addQueryParam(url, rangeStatus?.field, rangeStatus?.value);
  url = addQueryParam(url, searchQuery?.field, searchQuery?.value);

  if (sortMethod) {
    const sortParam =
      sortMethod.field === 'sortOrder'
        ? 'sort=created_at&sortOrder'
        : sortMethod.field;
    url = addQueryParam(url, sortParam, sortMethod.value);
  }

  try {
    const response = await fetch(`${url}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch works');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
}

export async function getWork(id) {
  const url = `${BASE_URL}/work/${id}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch data');
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
}
