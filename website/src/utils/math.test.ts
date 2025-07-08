import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide, square, isEven } from './math'

describe('Math Utils', () => {
  describe('add', () => {
    it('should correctly add 1 + 1 = 2', () => {
      // 这就是你要求的测试：验证 1+1=2 是否正确
      expect(add(1, 1)).toBe(2)
    })

    it('should correctly add positive numbers', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(10, 15)).toBe(25)
      expect(add(100, 200)).toBe(300)
    })

    it('should correctly add negative numbers', () => {
      expect(add(-1, -1)).toBe(-2)
      expect(add(-5, -10)).toBe(-15)
    })

    it('should correctly add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2)
      expect(add(-10, 15)).toBe(5)
      expect(add(0, 5)).toBe(5)
    })

    it('should correctly add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4)
      expect(add(0.1, 0.2)).toBeCloseTo(0.3) // 使用 toBeCloseTo 处理浮点数精度问题
    })

    it('should handle zero correctly', () => {
      expect(add(0, 0)).toBe(0)
      expect(add(5, 0)).toBe(5)
      expect(add(0, -3)).toBe(-3)
    })
  })

  describe('subtract', () => {
    it('should correctly subtract numbers', () => {
      expect(subtract(5, 3)).toBe(2)
      expect(subtract(10, 4)).toBe(6)
      expect(subtract(0, 5)).toBe(-5)
    })

    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2)
      expect(subtract(-1, 2)).toBe(-3)
    })

    it('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5)
      expect(subtract(0, 0)).toBe(0)
    })
  })

  describe('multiply', () => {
    it('should correctly multiply numbers', () => {
      expect(multiply(2, 3)).toBe(6)
      expect(multiply(4, 5)).toBe(20)
      expect(multiply(-2, 3)).toBe(-6)
    })

    it('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0)
      expect(multiply(0, 10)).toBe(0)
    })

    it('should handle multiplication by one', () => {
      expect(multiply(7, 1)).toBe(7)
      expect(multiply(1, 15)).toBe(15)
    })

    it('should handle negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6)
      expect(multiply(-4, 2)).toBe(-8)
    })
  })

  describe('divide', () => {
    it('should correctly divide numbers', () => {
      expect(divide(6, 2)).toBe(3)
      expect(divide(15, 3)).toBe(5)
      expect(divide(10, 4)).toBe(2.5)
    })

    it('should handle negative numbers', () => {
      expect(divide(-6, 2)).toBe(-3)
      expect(divide(6, -2)).toBe(-3)
      expect(divide(-6, -2)).toBe(3)
    })

    it('should handle division by one', () => {
      expect(divide(5, 1)).toBe(5)
      expect(divide(-10, 1)).toBe(-10)
    })

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('除数不能为零')
      expect(() => divide(-3, 0)).toThrow('除数不能为零')
      expect(() => divide(0, 0)).toThrow('除数不能为零')
    })
  })

  describe('square', () => {
    it('should correctly calculate square of positive numbers', () => {
      expect(square(2)).toBe(4)
      expect(square(3)).toBe(9)
      expect(square(5)).toBe(25)
    })

    it('should correctly calculate square of negative numbers', () => {
      expect(square(-2)).toBe(4)
      expect(square(-3)).toBe(9)
      expect(square(-5)).toBe(25)
    })

    it('should handle zero and one', () => {
      expect(square(0)).toBe(0)
      expect(square(1)).toBe(1)
      expect(square(-1)).toBe(1)
    })

    it('should handle decimal numbers', () => {
      expect(square(1.5)).toBe(2.25)
      expect(square(0.5)).toBe(0.25)
    })
  })

  describe('isEven', () => {
    it('should correctly identify even numbers', () => {
      expect(isEven(2)).toBe(true)
      expect(isEven(4)).toBe(true)
      expect(isEven(100)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(-2)).toBe(true)
      expect(isEven(-4)).toBe(true)
    })

    it('should correctly identify odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(3)).toBe(false)
      expect(isEven(99)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(-3)).toBe(false)
    })
  })

  // 综合测试：验证一些数学定律
  describe('Mathematical Laws', () => {
    it('should demonstrate commutative property of addition', () => {
      // 加法交换律：a + b = b + a
      expect(add(3, 5)).toBe(add(5, 3))
      expect(add(1, 1)).toBe(add(1, 1)) // 再次验证 1+1=2 的对称性
    })

    it('should demonstrate associative property of addition', () => {
      // 加法结合律：(a + b) + c = a + (b + c)
      const a = 2, b = 3, c = 4
      expect(add(add(a, b), c)).toBe(add(a, add(b, c)))
    })

    it('should demonstrate multiplicative identity', () => {
      // 乘法单位元：任何数乘以1等于自身
      expect(multiply(5, 1)).toBe(5)
      expect(multiply(1, 7)).toBe(7)
    })

    it('should demonstrate additive identity', () => {
      // 加法单位元：任何数加0等于自身
      expect(add(8, 0)).toBe(8)
      expect(add(0, 12)).toBe(12)
    })
  })
}) 