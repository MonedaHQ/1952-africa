import { BASE_URL } from '@/utils/config';
import { addQueryParam } from '@/utils/helpers';

export async function getSpecificArtists({ program_id, activity_id }) {
  let url = `${BASE_URL}/artist`;

  //   url = addQueryParam(url, 'program_id', program_id);
  url = addQueryParam(url, 'activity_id', activity_id);

  console.log(url);

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
