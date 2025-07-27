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
        <div className="flex items-center flex-wrap gap-2 py-4">
          <Tag className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`group h-9 text-sm rounded-full border font-medium transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center px-4 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-500 shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-800 border-gray-300/50 hover:text-blue-700 hover:border-blue-500 hover:bg-blue-50/80'
                }`}
                style={{letterSpacing: '0.01em', minWidth: 56, minHeight: 32, padding: '0 12px', boxShadow: activeCategory === category.id ? '0 2px 8px 0 rgba(24, 80, 255, 0.08)' : undefined}}
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