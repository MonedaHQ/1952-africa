export async function donate(data) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DONATION_URL}/donation`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      return await res.json();
    } else {
      console.log('Failed to donate');
      throw new Error('Failed to donate');
    }
  } catch (error) {
    console.error('Error donating:', error);
    throw error;
  }
}
