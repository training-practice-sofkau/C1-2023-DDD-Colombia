import { DescriptionValueObject } from '../../value-objects/breeds/description-breed/description.breeds.value-object';
import { BreedTypeValueObject } from '../../value-objects/breeds/breed-type/breed-type.breeds.value-object';
import { IFeedingDomainEntity } from './feeding.domain-entity.interface';
import { IHybridVigorDomainEntity } from './hybrid-vigor.domain-entity.interface';
export interface IBreedDomainEntity {
  breedId?: string;
  breedDescription?: string | DescriptionValueObject;
  breedFeeding?: IFeedingDomainEntity;
  breedType?: string | BreedTypeValueObject;
  breedEviroment?: string | BreedTypeValueObject;
  breedHybridVigor?: IHybridVigorDomainEntity;
}
