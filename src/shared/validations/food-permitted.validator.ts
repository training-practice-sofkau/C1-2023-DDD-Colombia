const ArrayFoodPermitted = [
  'leguminosas',
  'pastos mejorados',
  'brecharia',
  'radica',
  'grama',
  'pasto de corte',
  'aleman',
];

/**
 *
 *
 * @param {string} foodPermitted
 * @return {boolean}
 */
export const FoodPermitted = (foodPermitted: string): boolean => {
  foodPermitted = foodPermitted.toLowerCase();

  if (ArrayFoodPermitted.find((type) => type === foodPermitted)) return true;
  else return false;
};
