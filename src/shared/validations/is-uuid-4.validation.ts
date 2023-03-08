import { validate as uuidValidate, version as uuidVersion } from 'uuid';

export const IsUUID4 = (value: string): boolean => {
  return uuidValidate(value) && uuidVersion(value) === 4;
  // const regex = new RegExp(
  //   /[0-9A-Za-z]{8}-[0-9A-Za-z]{4}-4[0-9A-Za-z]{3}-[89ABab][0-9A-Za-z]{3}-[0-9A-Za-z]{12}/,
  // );
  // return regex.test(value);
};
