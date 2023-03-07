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

export const breeds = (typeBreed: string) => {
  typeBreed = typeBreed.toLowerCase();
  if (
    ArrayBreeds.find((type) => {
      type === typeBreed;
    })
  )
    return true;
  else return false;
};
