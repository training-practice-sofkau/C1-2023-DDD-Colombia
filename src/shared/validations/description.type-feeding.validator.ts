const ArrayTypeFeeding = ['suplementos', 'concentrado', 'forraje', 'pastoreo'];

/**
 *
 *
 * @param {string} descriptionTypeFeeding
 * @return {boolean}
 */
export const DescriptionTypeFeeding = (
  descriptionTypeFeeding: string,
): boolean => {
  descriptionTypeFeeding = descriptionTypeFeeding.toLowerCase();
  if (ArrayTypeFeeding.find((type) => type === descriptionTypeFeeding))
    return true;
  else return false;
};
