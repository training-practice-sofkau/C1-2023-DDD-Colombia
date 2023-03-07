const ArrayFoodQuality = ['mala', 'buena', 'excelente'];

export const foodQuality = (foodQuality: string) => {
  foodQuality = foodQuality.toLowerCase();

  if (ArrayFoodQuality.find((type) => type === foodQuality)) return true;
  else return false;
};
