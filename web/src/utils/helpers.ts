/**
 * 格式化用户名
 * @param name 原始用户名
 * @returns 格式化后的用户名
 */
export function formatUserName(name: string): string {
  if (!name || name.trim() === '') {
    return '匿名用户'
  }
  
  const trimmedName = name.trim()
  
  // 如果名字太长，截断并添加省略号
  if (trimmedName.length > 20) {
    return trimmedName.substring(0, 17) + '...'
  }
  
  return trimmedName
}

/**
 * 检查是否是有效的邮箱地址
 * @param email 邮箱地址
 * @returns 是否有效
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * 计算文本的阅读时间（分钟）
 * @param text 文本内容
 * @param wordsPerMinute 每分钟阅读字数，默认为 200
 * @returns 预估阅读时间（分钟）
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  if (!text || text.trim() === '') {
    return 0
  }
  
  // 简单的字数统计（中英文混合）
  const wordCount = text.trim().split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  return Math.max(1, readingTime) // 至少 1 分钟
}

/**
 * 生成随机 ID
 * @param length ID 长度，默认为 8
 * @returns 随机 ID 字符串
 */
export function generateRandomId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return result
}

/**
 * 格式化数字为千分位格式
 * @param num 数字
 * @returns 格式化后的字符串
 */
export function formatNumber(num: number): string {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0'
  }
  
  return num.toLocaleString('zh-CN')
} 