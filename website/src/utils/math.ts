/**
 * 加法运算
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之和
 */
export function add(a: number, b: number): number {
  return a + b
}

/**
 * 减法运算
 * @param a 被减数
 * @param b 减数
 * @returns 两数之差
 */
export function subtract(a: number, b: number): number {
  return a - b
}

/**
 * 乘法运算
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之积
 */
export function multiply(a: number, b: number): number {
  return a * b
}

/**
 * 除法运算
 * @param a 被除数
 * @param b 除数
 * @returns 两数之商
 * @throws 当除数为0时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为零')
  }
  return a / b
}

/**
 * 计算数字的平方
 * @param num 要计算平方的数字
 * @returns 数字的平方
 */
export function square(num: number): number {
  return num * num
}

/**
 * 判断数字是否为偶数
 * @param num 要判断的数字
 * @returns 如果是偶数返回 true，否则返回 false
 */
export function isEven(num: number): boolean {
  return num % 2 === 0
} 