const ArrayFoodQuality = ['mala', 'buena', 'excelente'];

/**
 *
 *
 * @param {string} foodQuality
 * @return {boolean}
 */
export const FoodQuality = (foodQuality: string): boolean => {
  foodQuality = foodQuality.toLowerCase();

  if (ArrayFoodQuality.find((type) => type === foodQuality)) return true;
  else return false;
};
