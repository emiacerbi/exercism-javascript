export const toRna = (letters) => {
  const splittedLetters = letters.split('')
  const result = []

  if (!letters) return ''
  
  splittedLetters.forEach(letter => {
    keys[letter] && result.push(keys[letter]) 
  })

  return result.join('')
}

const keys = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U'
}