/**
 *
 *
 * @param {string} description
 * @return {boolean}
 */
export const Description = (description: string): boolean => {
  if (description.length >= 25 && description.length <= 70) return true;
  else return false;
};
