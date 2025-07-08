import { describe, it, expect, vi } from 'vitest'
import {
  formatUserName,
  isValidEmail,
  calculateReadingTime,
  generateRandomId,
  formatNumber
} from './helpers'

describe('helpers', () => {
  describe('formatUserName', () => {
    it('returns "匿名用户" for empty string', () => {
      expect(formatUserName('')).toBe('匿名用户')
    })

    it('returns "匿名用户" for whitespace only', () => {
      expect(formatUserName('   ')).toBe('匿名用户')
    })

    it('trims whitespace from name', () => {
      expect(formatUserName('  张三  ')).toBe('张三')
    })

    it('returns name as-is for normal length', () => {
      expect(formatUserName('张三')).toBe('张三')
      expect(formatUserName('John Doe')).toBe('John Doe')
    })

    it('truncates long names and adds ellipsis', () => {
      const longName = '这是一个非常非常非常长的用户名'
      const result = formatUserName(longName)
      expect(result).toBe('这是一个非常非常非常长的用户名')
      expect(result.length).toBe(15) // 17 chars + '...'
    })

    it('handles exactly 20 characters', () => {
      const exactName = '12345678901234567890'
      expect(formatUserName(exactName)).toBe(exactName)
    })

    it('handles 21 characters (should truncate)', () => {
      const longName = '123456789012345678901'
      const result = formatUserName(longName)
      expect(result).toBe('12345678901234567...')
    })
  })

  describe('isValidEmail', () => {
    it('returns true for valid emails', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'firstname+lastname@example.com',
        'email@123.123.123.123', // IP地址格式
        '1234567890@example.com',
        'email@example-one.com',
        '_______@example.com',
        'email@example.name'
      ]

      validEmails.forEach(email => {
        expect(isValidEmail(email)).toBe(true)
      })
    })

    it('handles whitespace in email', () => {
      expect(isValidEmail('  test@example.com  ')).toBe(true)
      expect(isValidEmail('test @example.com')).toBe(false)
      expect(isValidEmail('test@ example.com')).toBe(false)
    })

    it('returns false for non-string inputs', () => {
      expect(isValidEmail(null as unknown as string)).toBe(false)
      expect(isValidEmail(undefined as unknown as string)).toBe(false)
      expect(isValidEmail(123 as unknown as string)).toBe(false)
      expect(isValidEmail({} as unknown as string)).toBe(false)
    })
  })

  describe('calculateReadingTime', () => {
    it('returns 0 for empty text', () => {
      expect(calculateReadingTime('')).toBe(0)
      expect(calculateReadingTime('   ')).toBe(0)
    })

    it('calculates reading time correctly', () => {
      // 200 words should take 1 minute
      const words200 = Array(200).fill('word').join(' ')
      expect(calculateReadingTime(words200)).toBe(1)

      // 400 words should take 2 minutes
      const words400 = Array(400).fill('word').join(' ')
      expect(calculateReadingTime(words400)).toBe(2)

      // 300 words should take 2 minutes (rounded up)
      const words300 = Array(300).fill('word').join(' ')
      expect(calculateReadingTime(words300)).toBe(2)
    })

    it('uses custom words per minute', () => {
      const words100 = Array(100).fill('word').join(' ')
      expect(calculateReadingTime(words100, 100)).toBe(1)
      expect(calculateReadingTime(words100, 50)).toBe(2)
    })

    it('returns at least 1 minute for very short text', () => {
      expect(calculateReadingTime('hello')).toBe(1)
      expect(calculateReadingTime('a')).toBe(1)
    })

    it('handles text with multiple spaces', () => {
      const textWithSpaces = 'word1   word2     word3'
      expect(calculateReadingTime(textWithSpaces)).toBe(1)
    })
  })

  describe('generateRandomId', () => {
    it('generates ID with default length', () => {
      const id = generateRandomId()
      expect(id).toHaveLength(8)
    })

    it('generates ID with custom length', () => {
      expect(generateRandomId(5)).toHaveLength(5)
      expect(generateRandomId(12)).toHaveLength(12)
      expect(generateRandomId(1)).toHaveLength(1)
    })

    it('generates different IDs each time', () => {
      const id1 = generateRandomId()
      const id2 = generateRandomId()
      expect(id1).not.toBe(id2)
    })

    it('only contains valid characters', () => {
      const id = generateRandomId(100)
      const validChars = /^[A-Za-z0-9]+$/
      expect(validChars.test(id)).toBe(true)
    })

    it('handles zero length', () => {
      expect(generateRandomId(0)).toBe('')
    })

    // Mock Math.random for predictable testing
    it('generates predictable ID with mocked random', () => {
      const mockRandom = vi.spyOn(Math, 'random')
      mockRandom.mockReturnValue(0) // Always return first character
      
      const id = generateRandomId(3)
      expect(id).toBe('AAA') // Should be first character repeated
      
      mockRandom.mockRestore()
    })
  })

  describe('formatNumber', () => {
    it('formats numbers with thousand separators', () => {
      expect(formatNumber(1000)).toBe('1,000')
      expect(formatNumber(1234567)).toBe('1,234,567')
      expect(formatNumber(123456789)).toBe('123,456,789')
    })

    it('handles small numbers', () => {
      expect(formatNumber(0)).toBe('0')
      expect(formatNumber(42)).toBe('42')
      expect(formatNumber(999)).toBe('999')
    })

    it('handles negative numbers', () => {
      expect(formatNumber(-1000)).toBe('-1,000')
      expect(formatNumber(-123456)).toBe('-123,456')
    })

    it('handles decimal numbers', () => {
      expect(formatNumber(1000.5)).toBe('1,000.5')
      expect(formatNumber(123456.789)).toBe('123,456.789')
    })

    it('returns "0" for invalid inputs', () => {
      expect(formatNumber(NaN)).toBe('0')
      expect(formatNumber('not a number' as unknown as number)).toBe('0')
      expect(formatNumber(null as unknown as number)).toBe('0')
      expect(formatNumber(undefined as unknown as number)).toBe('0')
      expect(formatNumber({} as unknown as number)).toBe('0')
    })
  })

  // 测试多个函数协同工作
  describe('integration tests', () => {
    it('can chain helper functions', () => {
      const email = '  test@example.com  '
      const isValid = isValidEmail(email)
      const formattedUser = formatUserName('Test User')
      
      expect(isValid).toBe(true)
      expect(formattedUser).toBe('Test User')
    })

    it('handles edge cases together', () => {
      const longText = Array(1000).fill('word').join(' ')
      const readingTime = calculateReadingTime(longText)
      const formattedTime = formatNumber(readingTime)
      
      expect(readingTime).toBe(5) // 1000 words / 200 wpm = 5 minutes
      expect(formattedTime).toBe('5')
    })
  })
}) 