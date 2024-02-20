export async function submitFormData(data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DONATION_URL}/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.log('Failed to submit');
      throw new Error('Failed to submit');
    }
  } catch (error) {
    console.error('Error submitting:', error);
    throw error;
  }
}
