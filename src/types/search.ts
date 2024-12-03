export type SearchType = 'text' | 'images' | 'videos' | 'news';

export interface SearchParams {
  query: string;
  page: number;
  type: SearchType;
}

export interface SearchResult {
  snippet: string;
  title: string;
  url: string;
}

export interface SearchResponse {
  cached: boolean;
  limit: number;
  page: number;
  query: string;
  region: string;
  results: SearchResult[];
  safesearch: string;
  total_results: number;
  type: string;
}