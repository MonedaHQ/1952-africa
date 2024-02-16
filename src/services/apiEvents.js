import { BASE_URL } from '@/utils/config';

export async function getEvents({ rangeStatus, searchQuery, sortMethod }) {
  let url = `${BASE_URL}/event`;

  if (rangeStatus) {
    url = `${url}?${rangeStatus.field}=${rangeStatus.value}`;
  }

  if (searchQuery) {
    url = `${url}?${searchQuery.field}=${searchQuery.value}`;
  }

  if (sortMethod) {
    sortMethod.field === 'sortOrder'
      ? (url = `${url}?sort=title&${sortMethod.field}=${sortMethod.value}`)
      : (url = `${url}?${sortMethod.field}=${sortMethod.value}`);
    console.log(url);
  }

  try {
    const response = await fetch(`${url}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch events');
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
}

export async function getEvent(id) {
  const url = `${BASE_URL}/event/${id}`;

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
