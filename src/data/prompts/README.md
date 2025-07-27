# 提示词管理说明

本目录用于存放所有提示词的 Markdown 文件，每个提示词对应一个独立的 `.md` 文件。

## 文件命名规范

- 使用英文小写字母和连字符
- 文件名应该简洁明了，能够反映提示词的用途
- 例如：`wechat-article-polish.md`、`code-review.md`、`email-writing.md`

## 添加新提示词的步骤

1. **创建 MD 文件**：在此目录下创建新的 `.md` 文件，文件名遵循命名规范

2. **编写提示词内容**：在 MD 文件中编写完整的提示词内容，支持 Markdown 格式

3. **更新 prompts.ts**：在 `/src/data/prompts.ts` 文件中：
   - 在 `prompts` 数组中添加新的提示词对象
   - 设置 `content: ''`（内容将通过 API 加载）

4. **更新 API 路由**：在 `/src/app/api/prompts/route.ts` 文件中：
   - 在 `promptsWithContent` 映射中添加新的条件
   - 指定对应的 MD 文件名

## 示例

### 1. 创建 MD 文件 (`email-writing.md`)
```markdown
你是一位专业的商务邮件写作专家。请帮我写一封专业的商务邮件，要求：

## 写作要求：
1. **语言正式**：使用正式的商务语言
2. **结构清晰**：包含问候、正文、结尾
3. **目的明确**：清楚表达邮件目的

请根据以下信息写邮件：
[在此处描述邮件背景和要求]
```

### 2. 更新 prompts.ts
```typescript
{
  id: "2",
  title: "商务邮件写作助手",
  description: "专业的商务邮件写作工具",
  content: '', // 内容将通过API从md文件加载
  categories: ["写作", "商务", "邮件"],
  createdAt: "2024-01-15T10:00:00Z",
  updatedAt: "2024-01-15T10:00:00Z",
}
```

### 3. 更新 API 路由
```typescript
const promptsWithContent = prompts.map(prompt => {
  if (prompt.id === '1') {
    return {
      ...prompt,
      content: readPromptContent('wechat-article-polish.md')
    };
  }
  if (prompt.id === '2') {
    return {
      ...prompt,
      content: readPromptContent('email-writing.md')
    };
  }
  return prompt;
});
```

## 注意事项

- MD 文件中的内容会直接显示在前端，请确保格式正确
- 支持所有标准的 Markdown 语法
- 文件编码请使用 UTF-8
- 避免在 MD 文件中使用过长的行，建议适当换行以提高可读性