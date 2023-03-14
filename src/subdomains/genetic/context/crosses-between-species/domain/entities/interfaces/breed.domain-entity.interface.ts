import { DescriptionValueObject } from '../../value-objects/breeds/description-breed/description.breeds.value-object';
import { BreedTypeValueObject } from '../../value-objects/breeds/breed-type/breed-type.breeds.value-object';
import { IFeedingDomainEntity } from './feeding.domain-entity.interface';
import { IHybridVigorDomainEntity } from './hybrid-vigor.domain-entity.interface';
import { EnviromentValueObject } from '../../value-objects/breeds/environment-breed/enviroment.breeds.value-object';
export interface IBreedDomainEntity {
  breedId?: string;
  breedDescription?: string | DescriptionValueObject;
  breedFeeding?: IFeedingDomainEntity;
  breedType?: string | BreedTypeValueObject;
  breedEviroment?: string | EnviromentValueObject;
  breedHybridVigor?: IHybridVigorDomainEntity;
  breedFeedingComponent?: IFeedingDomainEntity;
  breedFoodComponent?: IFeedingDomainEntity;
}
