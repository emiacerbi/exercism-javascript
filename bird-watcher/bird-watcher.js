// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let result = 0

  for (let i = 0; i < birdsPerDay.length; i++) {
    result += birdsPerDay[i]
  }

  return result
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdCount = 0
  
  for (let i = 0; i < birdsPerDay.length; i++) {
    if(week === 1 && i < 7) {
      birdCount += birdsPerDay[i]
    }
    
    if(week !== 1 && i >= (7 * week) - 7 && i < 7 * week) {
      birdCount += birdsPerDay[i]
    }
  }

  return birdCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if(i === 0 || i % 2 === 0) {
      birdsPerDay[i] += 1
    }
  }

  return birdsPerDay
}
