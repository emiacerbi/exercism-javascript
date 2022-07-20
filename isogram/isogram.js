export const isIsogram = (phrase) => {
  if(!phrase) return true

  const regex = /[A-Za-z0-9]/g
  const filtered = phrase.toLowerCase().match(regex)

  for (let letter of filtered) {
    if (filtered.indexOf(letter) !== filtered.lastIndexOf(letter)) {
      return false
    }
  }

  return true
}