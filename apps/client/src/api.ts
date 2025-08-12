export async function fetchHealth(baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000') {
  const res = await fetch(`${baseUrl}/api/health`);
  if (!res.ok) throw new Error('Health check failed');
  return res.json();
}
