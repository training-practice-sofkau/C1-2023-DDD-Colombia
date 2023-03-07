import { IBreedDomainEntity } from './../entities/interfaces/breed.domain-entity.interface';
export interface IBreedDomainService<
  Entity extends IBreedDomainEntity = IBreedDomainEntity,
> {
  registerBreed(breed: IBreedDomainEntity): Promise<Entity>;
  createDescription(description: string): Promise<Entity>;
  registerEviroment(enviroment: string): Promise<Entity>;
  updateEviroment(enviroment: string): Promise<Entity>;
  validationRangeParents(rangeParents: string): Promise<Entity>;
}
