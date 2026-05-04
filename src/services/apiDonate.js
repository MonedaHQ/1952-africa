export async function donate(data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_1952_API}/donation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await res.json();

    if (res.ok) {
      return responseData;
    } else {
      const message = Array.isArray(responseData.message)
        ? responseData.message.join(', ')
        : responseData.message || 'Failed to donate';
      console.log(message);
      throw new Error(message);
    }
  } catch (error) {
    console.error('Error donating:', error);
    throw error;
  }
}
