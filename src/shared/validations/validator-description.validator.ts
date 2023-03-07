export const description = (description: string) => {
  if (description.length >= 25 && description.length <= 70) return true;
  else return false;
};
