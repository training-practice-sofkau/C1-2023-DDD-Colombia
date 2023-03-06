export const WrongDateFormat = (date: string): boolean => {
  const currentDate = new Date();
  const dateValidate = new Date(date);

  return dateValidate.getTime() >= currentDate.getTime() ? true : false;
};
