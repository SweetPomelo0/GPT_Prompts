'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import PromptList from '@/components/PromptList';
import { categories } from '@/data/prompts';
import { Prompt } from '@/types/prompt';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  // 获取提示词数据
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch('/api/prompts');
        if (response.ok) {
          const data = await response.json();
          setPrompts(data);
        } else {
          console.error('Failed to fetch prompts');
        }
      } catch (error) {
        console.error('Error fetching prompts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  // 根据分类过滤提示词
  const filteredPrompts = activeCategory === 'all' 
    ? prompts 
    : prompts.filter(prompt => {
        // 根据分类ID匹配提示词的categories数组
        const category = categories.find(cat => cat.id === activeCategory);
        return category ? prompt.categories.includes(category.name) : false;
      });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部：网站标题和搜索框 */}
      <Header onSearch={setSearchQuery} />
      
      {/* 分类导航栏 */}
      <CategoryNav 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      {/* 提示词列表 */}
      <main>
        <PromptList 
          prompts={filteredPrompts}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
}
