export const decodedValue = (array) => {
  const firstNum = COLORS.indexOf(array[0])
  const secondNum = COLORS.indexOf(array[1])

  return Number([firstNum, secondNum].join(''))
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
