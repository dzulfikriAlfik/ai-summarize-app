const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function summarizeText(text: string) {
  const response = await fetch(
    `${API_BASE_URL}/summarize`,
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