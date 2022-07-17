//
export const parse = (phrase) => {
  const regex = /[A-Z']+/g
  return phrase
    .toUpperCase()
    .match(regex)
    .map((word) => word[0])
    .join("")
}
