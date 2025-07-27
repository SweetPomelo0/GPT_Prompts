'use client';

import { useState } from 'react';
import { Prompt } from '@/types/prompt';
import { categories } from '@/data/prompts';
import { X, Copy, Check, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PromptModalProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PromptModal({ prompt, isOpen, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  
  if (!isOpen || !prompt) return null;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-gray-900/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ease-in-out transform scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 模态框内容 */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
          {/* 标题和描述区域 */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{prompt.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-3">{prompt.description}</p>
            
            {/* 分类标签 */}
            <div className="flex flex-wrap gap-2">
              {prompt.categories.map((category: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          {/* 提示词内容 */}
          <div className="pt-0 px-6 pb-6">
            <div className="rounded-lg overflow-hidden relative">
              {/* 复制按钮 - 右上角 */}
              <div className="absolute top-2 right-8 z-10">
                <button
                  onClick={copyToClipboard}
                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 shadow-sm ${
                    copied 
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                  title={copied ? '已复制' : '复制内容'}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      复制
                    </>
                  )}
                </button>
              </div>
              
              <div className="p-0">
                <div className="text-sm leading-relaxed text-gray-800 bg-white rounded-lg p-4 border border-gray-200 min-h-[200px] max-h-[50vh] overflow-y-auto custom-scrollbar prose prose-sm max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                      h1: ({ children }) => <h1 className="text-xl font-bold mb-4 text-gray-900">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-lg font-bold mb-3 text-gray-900">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-base font-semibold mb-2 text-gray-900">{children}</h3>,
                      h4: ({ children }) => <h4 className="text-sm font-semibold mb-2 text-gray-900">{children}</h4>,
                      code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">{children}</code>,
                      pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto font-mono border">{children}</pre>,
                      ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                      li: ({ children }) => <li className="mb-1">{children}</li>,
                      blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-blue-50 py-2 my-3">{children}</blockquote>,
                      strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      a: ({ children, href }) => <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                      table: ({ children }) => <table className="min-w-full border-collapse border border-gray-300 my-3">{children}</table>,
                      thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
                      tbody: ({ children }) => <tbody>{children}</tbody>,
                      tr: ({ children }) => <tr className="border-b border-gray-200">{children}</tr>,
                      th: ({ children }) => <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{children}</th>,
                      td: ({ children }) => <td className="border border-gray-300 px-4 py-2">{children}</td>,
                    }}
                  >
                    {prompt.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}