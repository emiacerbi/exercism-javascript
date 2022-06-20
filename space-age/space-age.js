export const age = (planet, seconds) => {
  const result = ((seconds / SECONDS_IN_YEAR) / (PLANETS_CONVERTION[planet])).toFixed(2)
  return Number(result)
}

const SECONDS_IN_YEAR = 31557600

const PLANETS_CONVERTION = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}