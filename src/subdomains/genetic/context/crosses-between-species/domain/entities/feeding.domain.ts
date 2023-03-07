import { TypeFeedingValueObject } from '../value-objects/feeding/description/type-feeding.description.value-object';
import { TypefoodPermittedValueObject } from '../value-objects/feeding/food-permitted/food-permitted.feeding.value-object';
import { FoodQualityValueObject } from '../value-objects/feeding/food-quality/food-quality.feeding.value-object';
import { IFeedingDomainEntity } from './interfaces/feeding.domain-entity.interface';
export class feedingDomainEntity implements IFeedingDomainEntity {
  feedingId: string;
  foodPermitted: string | TypefoodPermittedValueObject;
  description: string | TypeFeedingValueObject;
  foodQuality: string | FoodQualityValueObject;

  constructor(data?: IFeedingDomainEntity) {
    if (data?.description) this.description = data.description;
    if (data?.feedingId) this.feedingId = data.feedingId;
    if (data?.foodPermitted) this.foodPermitted = data.foodPermitted;
    if (data?.foodQuality) this.foodQuality = data.foodQuality;
  }
}
