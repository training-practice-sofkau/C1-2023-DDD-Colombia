export const ContentDiferentBoolean = (value: boolean): boolean => {
  const stringBoolean = value.toString();
  return stringBoolean != 'true' && stringBoolean != 'false' ? true : false;
};
