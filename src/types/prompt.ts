export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

// 工具函数：从提示词数据中提取所有唯一的分类
export function extractCategoriesFromPrompts(prompts: Prompt[]): string[] {
  const categories = new Set(prompts.flatMap((prompt) => prompt.categories));
  return Array.from(categories).sort();
}

// 动态类型：基于实际数据的分类类型
export type PromptCategory = string;

// 动态类型：基于实际数据的标签类型
export type PromptTag = string;
