const ArrayEviroment = ['templado', 'caliente', 'frio'];

/**
 *
 *
 * @param {string} enviroment
 * @return {boolean}
 */
export const Enviroment = (enviroment: string): boolean => {
  enviroment = enviroment.toLowerCase();
  if (ArrayEviroment.find((type) => type === enviroment)) return true;
  else return false;
};
