import { BASE_URL, PAGE_SIZE } from '@/utils/config';
import { addQueryParam } from '@/utils/helpers';

export async function getEvents({
  start_date = null,
  start_date_running = null,
  end_date = null,
  end_date_running = null,
  sponsored = null,
}) {
  let url = `${BASE_URL}/event`;

  url = addQueryParam(url, 'start_date_gte', start_date);
  url = addQueryParam(url, 'start_date_lte', start_date_running);
  url = addQueryParam(url, 'end_date_lte', end_date);
  url = addQueryParam(url, 'end_date_gte', end_date_running);
  url = addQueryParam(url, 'limit', PAGE_SIZE);

  if (sponsored) {
    url = addQueryParam(url, 'sponsored', sponsored);
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
    return responseData;
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
