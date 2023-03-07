const ArrayFoodPermitted = [
  'leguminosas',
  'pastos mejorados',
  'brecharia',
  'radica',
  'grama',
  'pasto de corte',
  'aleman',
];

export const foodPermitted = (foodPermitted: string) => {
  foodPermitted = foodPermitted.toLowerCase();

  if (
    ArrayFoodPermitted.find((type) => {
      type === foodPermitted;
    })
  )
    return true;
  else return false;
};
