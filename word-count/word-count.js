//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Get

export const countWords = (phrase) => {
  const regex = /\b[\w']+\b/g
  const filteredPhrase = phrase.match(regex)

  const result = {}

  filteredPhrase.forEach((word) => {
    let lowerCaseWord = word.toLowerCase()

    result[lowerCaseWord] = result[lowerCaseWord]
      ? result[lowerCaseWord] + 1
      : 1
  })

  return result
}
