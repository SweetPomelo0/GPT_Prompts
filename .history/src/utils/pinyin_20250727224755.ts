import pinyin from 'tiny-pinyin';

/**
 * 检查字符串是否包含指定的搜索查询（支持拼音搜索）
 * @param text 要搜索的文本
 * @param query 搜索查询
 * @returns 是否匹配
 */
export function matchPinyin(text: string | undefined | null, query: string): boolean {
  if (!text || !query) return false;
  
  // 转换为小写以进行不区分大小写的搜索
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  // 直接匹配原文本
  if (lowerText.includes(lowerQuery)) return true;
  
  // 检查拼音支持
  if (!pinyin.isSupported()) return false;
  
  // 将文本转换为拼音
  const textPinyin = pinyin.convertToPinyin(lowerText, '', true);
  
  // 将查询转换为拼音（如果查询本身包含中文）
  const queryPinyin = pinyin.convertToPinyin(lowerQuery, '', true);
  
  // 匹配完整拼音
  if (textPinyin.includes(queryPinyin)) return true;
  
  // 匹配拼音首字母
  const textInitials = getInitials(lowerText);
  if (textInitials.includes(lowerQuery)) return true;
  
  return false;
}

/**
 * 获取文本中汉字的拼音首字母
 * @param text 输入文本
 * @returns 拼音首字母字符串
 */
function getInitials(text: string): string {
  if (!pinyin.isSupported()) return '';
  
  const tokens = pinyin.parse(text);
  let initials = '';
  
  for (const token of tokens) {
    if (token.type === 2) { // 汉字
      initials += token.target.charAt(0).toLowerCase();
    }
  }
  
  return initials;
}