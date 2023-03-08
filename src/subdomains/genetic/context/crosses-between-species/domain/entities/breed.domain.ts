import { BreedTypeValueObject } from '../value-objects/breeds/breed-type/breed-type.breeds.value-object';
import { DescriptionValueObject } from '../value-objects/breeds/description-breed/description.breeds.value-object';
import { IBreedDomainEntity } from './interfaces/breed.domain-entity.interface';
import { IFeedingDomainEntity } from './interfaces/feeding.domain-entity.interface';
import { HybridVigorDomainEntity } from './hybrid-vigor.domain-entity';
export class BreedDomainEntity implements IBreedDomainEntity {
  breedId?: string;
  breedDescription?: string | DescriptionValueObject;
  breedFeeding?: IFeedingDomainEntity;
  breedType?: string | BreedTypeValueObject;
  breedEviroment?: string | BreedTypeValueObject;
  breedHybridVigor?: HybridVigorDomainEntity;

  constructor(data?: IBreedDomainEntity) {
    if (data?.breedDescription) this.breedDescription = data.breedDescription;
    if (data?.breedEviroment) this.breedEviroment = data.breedEviroment;
    if (data?.breedFeeding) this.breedFeeding = data.breedFeeding;
    if (data?.breedHybridVigor) this.breedHybridVigor = data.breedHybridVigor;
    if (data?.breedId) this.breedId = data.breedId;
    if (data?.breedType) this.breedType = data.breedType;
  }
}
