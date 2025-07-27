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
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-wrap gap-2 py-4">
          <Tag className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`group h-8 text-xs rounded-md border font-semibold transition-all duration-200 whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center justify-center ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white/90 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
                style={{letterSpacing: '0.01em', minWidth: 56, minHeight: 32, padding: '0 12px', boxShadow: activeCategory === category.id ? '0 2px 8px 0 rgba(24, 80, 255, 0.08)' : undefined}}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-200 dark:border-gray-700" />
      </div>
    </nav>
  );
}