const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const isPangram = (phrase) => {
  return LETTERS.every(letter => phrase.toLowerCase().includes(letter))
}