export const ContentDiferentReferenceNumber = (value: string): boolean => {
  const regex = /^[A-Z]{3}-\d{4}$/;
  return regex.test(value) ? false : true;
};
