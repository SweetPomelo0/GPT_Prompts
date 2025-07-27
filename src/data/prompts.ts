import { Prompt, Category, extractCategoriesFromPrompts } from "@/types/prompt";

// 基础分类（始终包含"全部"选项）
const baseCategories: Category[] = [
  {
    id: "all",
    name: "全部",
    description: "所有提示词模板",
  },
];

// 动态生成分类的函数
export function generateCategoriesFromPrompts(prompts: Prompt[]): Category[] {
  const uniqueCategories = extractCategoriesFromPrompts(prompts);
  const dynamicCategories: Category[] = uniqueCategories.map((category) => ({
    id: category.toLowerCase().replace(/\s+/g, "-"),
    name: category,
    description: `${category}相关的提示词模板`,
  }));

  return [...baseCategories, ...dynamicCategories];
}

export const prompts: Prompt[] = [
  {
    id: "2",
    title: "中文写作改进专家",
    description: "优化文章句子的语法、清晰度和简洁度，提高可读性",
    content: "", // 内容将通过API从md文件加载
    categories: ["写作"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "3",
    title: "软件功能命名专家",
    description: "根据功能描述，设计符合软件界面语言风格和行业标准的功能名称",
    content: "", // 内容将通过API从md文件加载
    categories: ["功能命名"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "4",
    title: "词条英译中的翻译专家",
    description:
      "将英文软件词条或句子翻译成简体中文，风格贴近苹果和微软中文软件的表达方式",
    content: "", // 内容将通过API从md文件加载
    categories: ["翻译"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "5",
    title: "提示词写作专家",
    description: "将自然语言提示转化为结构清晰、标准化的AI提示词结构",
    content: "", // 内容将通过API从md文件加载
    categories: ["提示词"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "6",
    title: "词条中译英的翻译专家",
    description:
      "将简体中文软件词条或句子翻译成英文，风格贴近苹果和微软英文软件的表达方式",
    content: "", // 内容将通过API从md文件加载
    categories: ["翻译"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "7",
    title: "Midjourney提示词生成专家",
    description: "根据用户输入的描述，生成符合Midjourney AI要求的提示词",
    content: "", // 内容将通过API从md文件加载
    categories: ["绘画", "Midjourney"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "8",
    title: "英文翻译专家",
    description: "将其他语言翻译成英文，或改进你提供的英文句子",
    content: "", // 内容将通过API从md文件加载
    categories: ["翻译"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "9",
    title: "英汉双向翻译器",
    description: "实现中英文双向翻译，支持词组、普通词汇、句子等",
    content: "", // 内容将通过API从md文件加载
    categories: ["翻译"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "10",
    title: "内容摘要器",
    description: "将长文本摘要为 100 个字内，使其易于阅读和理解",
    content: "", // 内容将通过API从md文件加载
    categories: ["摘要"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "11",
    title: "代码解释器",
    description: "解释代码的语法和语义，逐行分析",
    content: "", // 内容将通过API从md文件加载
    categories: ["代码"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "12",
    title: "ChatGPT 提示工程师",
    description: "与用户协作创建最优质的 ChatGPT 提示词",
    content: "", // 内容将通过API从md文件加载
    categories: ["提示词"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "13",
    title: "文章润色",
    description:
      "提升文本的逻辑性、通俗性和论证充分性，使内容更清晰易懂、结构严谨",
    content: "", // 内容将通过API从md文件加载
    categories: ["写作"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "14",
    title: "职位描述生成",
    description:
      "根据输入的职位相关信息，自动生成一份详细的职位描述，涵盖岗位职责、招聘要求",
    content: "", // 内容将通过API从md文件加载
    categories: ["招聘"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "15",
    title: "岗位职责生成",
    description:
      "根据标准模板以及向用户收集需求，帮助从事人力资源岗位的用户快速生成岗位职责",
    content: "", // 内容将通过API从md文件加载
    categories: ["招聘"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "16",
    title: "简历筛选师",
    description:
      "基于结构化标准与职位要求，从多份求职简历中高效筛选出最符合条件的人选",
    content: "", // 内容将通过API从md文件加载
    categories: ["招聘"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "17",
    title: "面试题出题大师",
    description: "面试题出题大师，能够根据要求输出符合要求的面试题",
    content: "", // 内容将通过API从md文件加载
    categories: ["招聘"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "18",
    title: "六顶思考帽",
    description: "根据用户输入的问题进行六顶思考帽的思考",
    content: "", // 内容将通过API从md文件加载
    categories: ["思维模型"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "19",
    title: "竞品分析",
    description: "明确产品定位和优化营销策略",
    content: "", // 内容将通过API从md文件加载
    categories: ["产品"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "20",
    title: "邮件优化大师",
    description:
      "根据用户提供的邮件基本信息，生成一个优化后的邮件标题和邮件内容，提高邮件的开信率和回复率。",
    content: "", // 内容将通过API从md文件加载
    categories: ["邮件"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "21",
    title: "Prompt 分析器",
    description: "分析用户的 Prompt 并进行评分和改进建议",
    content: "", // 内容将通过API从md文件加载
    categories: ["提示词"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "22",
    title: "文字排版大师",
    description:
      "使用 ASCII 符号和 Emoji 表情符号来优化排版已有信息, 提供更好的阅读体验",
    content: "", // 内容将通过API从md文件加载
    categories: ["排版"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
  {
    id: "23",
    title: "产品起名器",
    description: "分析产品的核心卖点和理解用户心智，生成产品名称",
    content: "", // 内容将通过API从md文件加载
    categories: ["产品"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-27",
  },
];

// 导出动态生成的分类
export const categories = generateCategoriesFromPrompts(prompts);
