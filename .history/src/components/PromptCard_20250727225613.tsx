'use client';

import { useState } from 'react';
import { Copy, Check, Tag } from 'lucide-react';
import { Prompt } from '@/types/prompt';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PromptCardProps {
  prompt: Prompt;
  onCardClick?: (prompt: Prompt) => void;
}

export default function PromptCard({ prompt, onCardClick }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(prompt);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-3 transition-shadow duration-200 cursor-pointer flex flex-col h-full"
      onClick={handleCardClick}
      style={{ minHeight: '320px', display: 'flex', flexDirection: 'column' }} // 设置最小高度以确保卡片高度基本一致，并强制使用flex布局
    >
      {/* 标题和复制按钮 */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1 mr-2">
          <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            {prompt.title}
          </h3>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          className={`p-1.5 rounded-lg transition-colors duration-200 ${
            copied
              ? 'bg-green-100 text-green-600'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
          aria-label="复制提示词"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* 描述 - 固定两行高度 */}
      <p className="text-xs text-gray-600 leading-relaxed mb-2 line-clamp-2 h-[2.5rem] overflow-hidden">
        {prompt.description}
      </p>

      {/* 内容显示区域 */}
      <div className="mb-2 flex-grow relative">
        {/* 背景层 */}
        <div className="bg-gray-50 rounded-lg absolute inset-0"></div>
        {/* 内容层 - 位于背景层之上 */}
        <div className="p-3 h-full relative z-10">
          <div className="text-xs text-gray-700 leading-relaxed max-h-48 overflow-y-auto custom-scrollbar prose prose-xs max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                h1: ({ children }) => <h1 className="text-sm font-bold mb-1">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xs font-bold mb-1">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xs font-semibold mb-1">{children}</h3>,
                code: ({ children }) => <code className="bg-gray-200 px-1 py-0.5 rounded text-xs">{children}</code>,
                pre: ({ children }) => <pre className="bg-gray-200 p-2 rounded text-xs overflow-x-auto">{children}</pre>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-1">{children}</ol>,
                li: ({ children }) => <li className="mb-0.5">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-2 border-gray-300 pl-2 italic">{children}</blockquote>,
              }}
            >
              {prompt.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* 标签 */}
      <div className="flex items-center justify-between gap-2 mt-auto pt-2">
        <div className="flex flex-wrap gap-1 flex-1">
          {prompt.categories.slice(0, 3).map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full"
            >
              <Tag className="w-2.5 h-2.5" />
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}