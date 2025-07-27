'use client';

import { useState } from 'react';
import { Prompt } from '@/types/prompt';
import PromptCard from './PromptCard';
import PromptModal from './PromptModal';

interface PromptListProps {
  prompts: Prompt[];
  searchQuery: string;
}

export default function PromptList({ prompts, searchQuery }: PromptListProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPrompt(null);
  };

  // 过滤提示词
  const filteredPrompts = prompts.filter(prompt => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      prompt.title.toLowerCase().includes(query) ||
      prompt.description.toLowerCase().includes(query) ||
      prompt.categories.some(category => category.toLowerCase().includes(query)) ||
      (prompt.content && prompt.content.toLowerCase().includes(query))
    );
  });

  if (filteredPrompts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">
          {searchQuery ? '未找到相关提示词' : '暂无提示词'}
        </div>
        {searchQuery && (
          <p className="text-gray-500">
            尝试使用其他关键词搜索
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredPrompts.map((prompt) => (
            <PromptCard 
              key={prompt.id} 
              prompt={prompt} 
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      
      <PromptModal 
        prompt={selectedPrompt}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}