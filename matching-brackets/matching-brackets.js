export const isPaired = (string) => {
  let stack = []
  for (let bracket of string) {
    switch (bracket) {
      case '(':
        stack.push(bracket)
        break
      case ')':
        if (stack.pop() !== '(') return false
        break
      case '[':
        stack.push(bracket)
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
      case '{':
        stack.push(bracket)
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
    }
  }
  return stack.length === 0
}
