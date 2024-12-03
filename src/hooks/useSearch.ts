import { useState } from 'react';
import type { SearchResponse, SearchType } from '../types/search';
import { searchApi } from '../services/api';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [type, setType] = useState<SearchType>('text');
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchApi({ query, page, type });
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    performSearch();
  };

  const handleTypeChange = (newType: SearchType) => {
    setType(newType);
    setPage(1);
    performSearch();
  };

  return {
    query,
    setQuery,
    page,
    type,
    results,
    isLoading,
    error,
    performSearch,
    handlePageChange,
    handleTypeChange,
  };
}