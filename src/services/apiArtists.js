import { BASE_URL, PAGE_SIZE } from '@/utils/config';
import { addQueryParam } from '@/utils/helpers';

export async function getSpecificArtists({ program_id, activity_id, search }) {
  let url = `${BASE_URL}/artist`;

  url = addQueryParam(url, 'program_id', program_id);
  url = addQueryParam(url, 'activity_id', activity_id);
  url = addQueryParam(url, 's', search);
  url = addQueryParam(url, 'limit', PAGE_SIZE);

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch artists');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
}

export async function getArtist(id) {
  const url = `${BASE_URL}/artist/${id}`;

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
