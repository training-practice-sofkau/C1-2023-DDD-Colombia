import { BreedTypeValueObject } from '../value-objects/breeds/breed-type/breed-type.breeds.value-object';
import { DescriptionValueObject } from '../value-objects/breeds/description-breed/description.breeds.value-object';
import { IBreedDomainEntity } from './interfaces/breed.domain-entity.interface';
import { IFeedingDomainEntity } from './interfaces/feeding.domain-entity.interface';
import { EnviromentValueObject } from '../value-objects/breeds/environment-breed/enviroment.breeds.value-object';
import { IHybridVigorDomainEntity } from './interfaces/hybrid-vigor.domain-entity.interface';
export class BreedDomainEntity implements IBreedDomainEntity {
  breedId?: string;
  breedDescription?: string | DescriptionValueObject;
  breedFeeding?: IFeedingDomainEntity;
  breedType?: string | BreedTypeValueObject;
  breedEviroment?: string | EnviromentValueObject;
  breedHybridVigor?: IHybridVigorDomainEntity;
  breedFeedingComponent?: IFeedingDomainEntity;
  breedFoodComponent?: IFeedingDomainEntity;

  constructor(data?: IBreedDomainEntity) {
    if (data?.breedDescription) this.breedDescription = data.breedDescription;
    if (data?.breedEviroment) this.breedEviroment = data.breedEviroment;
    if (data?.breedFeeding) this.breedFeeding = data.breedFeeding;
    if (data?.breedHybridVigor) this.breedHybridVigor = data.breedHybridVigor;
    if (data?.breedId) this.breedId = data.breedId;
    if (data?.breedType) this.breedType = data.breedType;
    if (data?.breedFoodComponent)
      this.breedFoodComponent = data.breedFoodComponent;
    if (data?.breedFeedingComponent)
      this.breedFeeding = data.breedFeedingComponent;
  }
}
