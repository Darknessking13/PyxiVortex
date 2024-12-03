import type { SearchParams, SearchResponse } from '../types/search';

const API_BASE_URL = 'https://pyxilab-pyxivortex.hf.space';

export async function searchApi({ query, page, type }: SearchParams): Promise<SearchResponse> {
  const params = new URLSearchParams({
    query: query,
    page: String(page),
    type: type,
  });

  const response = await fetch(`${API_BASE_URL}/search?${params}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Search failed with status: ${response.status}`);
  }

  return response.json();
}