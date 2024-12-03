import React from 'react';
import type { SearchResult } from '../types/search';
import { ExternalLink } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="w-full max-w-2xl space-y-6">
      {results.map((result, index) => (
        <article
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h2 className="text-xl font-semibold text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
              {result.title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h2>
            <p className="text-sm text-green-600 truncate mt-1">{result.url}</p>
            <p className="mt-2 text-gray-600 line-clamp-3">{result.snippet}</p>
          </a>
        </article>
      ))}
    </div>
  );
}