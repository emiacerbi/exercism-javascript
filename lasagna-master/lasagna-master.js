/// <reference path="./global.d.ts" />

// @ts-check

/**
 * @param {number} time
 * @returns {string} cooking status
 */
export function cookingStatus(time) {
  if(time === 0) {
    return 'Lasagna is done.'
  } else if (time > 0) {
    return 'Not done, please wait.'
  } else {
    return 'You forgot to set the timer.'
  }
}

/**
 * @param {string[]} layers
 * @returns {number} preparation time
 */
export function preparationTime(layers, minutes = 2) {
  return layers.length * minutes
}

/**
 * @param {string[]} layers
 * @returns {object} preparation time
 */
export function quantities(layers) {
  const obj = {
    noodles: 0,
    sauce: 0
  }

  layers.forEach(ing => {
    ing === 'noodles' ? 
      obj.noodles += 50 :
    ing === 'sauce' ? 
      obj.sauce += 0.2 :
      obj
  })
  
  return obj
}

/**
 * @param {string[]} friendsList
 * @param {string[]} myList
 * @returns {object} preparation time
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

/**
 * @param {object} recipe
 * @param {number} portions
 * @returns {object} preparation time
 */
export function scaleRecipe(recipe, portions = 2) {
  const recipeCopy = { ...recipe }

  for(let key in recipeCopy) {
    recipeCopy[key] *= (portions / 2)
  }

  return recipeCopy
}