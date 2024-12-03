import React from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { SearchTypeSelector } from './components/SearchTypeSelector';
import { Pagination } from './components/Pagination';
import { useSearch } from './hooks/useSearch';
import { Search } from 'lucide-react';

function App() {
  const {
    query,
    setQuery,
    type,
    results,
    isLoading,
    error,
    performSearch,
    handlePageChange,
    handleTypeChange,
  } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Search className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">PyxiVortex</h1>
            </div>
            <p className="text-gray-600">Search anything you want to know</p>
          </div>

          {/* Search Controls */}
          <div className="w-full max-w-2xl space-y-4">
            <SearchBar
              query={query}
              setQuery={setQuery}
              onSearch={performSearch}
              isLoading={isLoading}
            />
            <SearchTypeSelector
              selectedType={type}
              onTypeChange={handleTypeChange}
            />
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center text-gray-600">
              <div className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent rounded-full" />
              <p className="mt-2">Searching...</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center">
              <p>{error}</p>
            </div>
          )}

          {/* Search Results */}
          {results && (
            <>
              <SearchResults results={results.results} />
              <Pagination
                currentPage={results.page}
                totalResults={results.total_results}
                resultsPerPage={results.limit}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;