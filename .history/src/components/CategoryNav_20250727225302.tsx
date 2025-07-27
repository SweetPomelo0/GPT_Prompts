'use client';

import { Category } from '@/types/prompt';
import { Tag } from 'lucide-react';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-wrap gap-3 py-4">
          <Tag className="w-5 h-5 text-blue-500 mr-1 shrink-0" />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`group h-9 text-sm rounded-full border font-medium transition-all duration-200 whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center px-4 py-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200/50'
                    : 'bg-white text-gray-700 border-gray-200 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-200" />
      </div>
    </nav>
  );
}