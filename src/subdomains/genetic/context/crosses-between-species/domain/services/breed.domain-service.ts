import { IBreedDomainEntity } from './../entities/interfaces/breed.domain-entity.interface';
export interface IBreedDomainService<
  Entity extends IBreedDomainEntity = IBreedDomainEntity,
> {
  registerBreed(breed: IBreedDomainEntity): Promise<Entity>;
  registerEviromentBreed(enviroment: string): Promise<Entity>;
  updateEviromentBreed(enviroment: string): Promise<Entity>;
  validationRangeParentsBreed(rangeParents: string): Promise<boolean>;
}
