const ArrayEviroment = ['templado', 'caliente', 'frio'];

export const enviroment = (enviroment: string) => {
  enviroment = enviroment.toLowerCase();
  if (
    ArrayEviroment.find((type) => {
      type === enviroment;
    })
  )
    return true;
  else return false;
};
