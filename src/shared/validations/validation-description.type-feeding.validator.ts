const ArrayTypeFeeding = ['suplementos', 'concentrado', 'forraje', 'pastoreo'];

export const descriptionTypeFeeding = (descriptionTypeFeeding: string) => {
  descriptionTypeFeeding = descriptionTypeFeeding.toLowerCase();
  if (ArrayTypeFeeding.find((type) => type === descriptionTypeFeeding))
    return true;
  else return false;
};
