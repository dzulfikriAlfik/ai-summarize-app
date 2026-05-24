export async function summarizeText(text: string) {
  const response = await fetch(
    'http://localhost:3000/summarize',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    },
  )

  if (!response.ok) {
    throw new Error('Failed to summarize text');
  }

  return response.json();
}