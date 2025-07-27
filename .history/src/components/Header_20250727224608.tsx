'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // 处理输入变化，实时搜索
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    onSearch(newQuery); // 实时触发搜索
  };

  // 处理表单提交（防止页面刷新）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
        {/* 网站标题 */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-slate-900 truncate">
            GPT Prompts
          </h1>
          <p className="text-sm text-gray-600 leading-tight truncate mt-1">
            专为工作提效打造的 AI 提示词分享平台
          </p>
        </div>

        {/* 搜索框 */}
        <div className="flex-1 max-w-xl">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="搜索提示词模板..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-0 rounded-full pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-500"
            />
          </form>
        </div>
      </div>
      </div>
    </header>
  );
}