export const findAnagrams = (word, wordList) => {
  let result = []

  for (let item of wordList) {
    if (
      item.toLowerCase().split('').sort().join('') ===
        word.toLowerCase().split('').sort().join('') &&
      item.toLowerCase() !== word.toLowerCase()
    ) {
      result.push(item)
    }
  }
  return result
}
