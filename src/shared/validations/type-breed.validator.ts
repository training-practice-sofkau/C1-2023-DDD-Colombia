const ArrayBreeds = [
  'hostin',
  'cebu',
  'bom',
  'jersey',
  'normando',
  'angus',
  'brangus',
  'pardo',
];

/**
 *
 *
 * @param {string} typeBreed
 * @return {boolean}
 */
export const Breeds = (typeBreed: string): boolean => {
  typeBreed = typeBreed.toLowerCase();
  if (ArrayBreeds.find((type) => type === typeBreed)) return true;
  else return false;
};
