import { BreedDomainEntity } from '../entities/breed.domain';
import { HybridVigorDomainEntity } from '../entities/hybrid-vigor.domain-entity';
import { IFeedingDomainEntity } from '../entities/interfaces/feeding.domain-entity.interface';
import { IBreedDomainEntity } from './../entities/interfaces/breed.domain-entity.interface';
export interface IBreedDomainService<
  Entity extends BreedDomainEntity = BreedDomainEntity,
> {
  registerBreed(breed: BreedDomainEntity): Promise<Entity>;
  getBreedById(id: string): Promise<Entity>;
  updateEnviromentBreed(
    breed: IBreedDomainEntity,
    id: string,
    enviromentBreed: string,
  ): Promise<Entity>;
  validationRangeParentsBreed(
    rangeParents: string,
    id: string,
  ): Promise<HybridVigorDomainEntity>;
  updateFoodComponentBreed(
    foodComponent: IFeedingDomainEntity,
    id: string,
    breed: IBreedDomainEntity,
  ): Promise<Entity>;
}
