import React from 'react';
import type { SearchType } from '../types/search';
import { Search, Image, Video, Newspaper } from 'lucide-react';

interface SearchTypeSelectorProps {
  selectedType: SearchType;
  onTypeChange: (type: SearchType) => void;
}

const searchTypes: { type: SearchType; icon: React.ReactNode; label: string }[] = [
  { type: 'text', icon: <Search className="w-4 h-4" />, label: 'All' },
  { type: 'images', icon: <Image className="w-4 h-4" />, label: 'Images' },
  { type: 'videos', icon: <Video className="w-4 h-4" />, label: 'Videos' },
  { type: 'news', icon: <Newspaper className="w-4 h-4" />, label: 'News' },
];

export function SearchTypeSelector({ selectedType, onTypeChange }: SearchTypeSelectorProps) {
  return (
    <div className="flex gap-2">
      {searchTypes.map(({ type, icon, label }) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            selectedType === type
              ? 'bg-blue-100 text-blue-700'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}