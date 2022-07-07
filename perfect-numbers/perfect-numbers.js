export const classify = (num) => {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.")
  }

  if (num === 1) {
    return "deficient"
  }

  let nums = []
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      nums.push(i)
    }
  }

  const sumOfNums = nums.reduce((acc, el) => (acc += el))

  if (sumOfNums === num) {
    return "perfect"
  }

  if (sumOfNums < num) {
    return "deficient"
  }

  return "abundant"
}
