import { TypefoodPermittedValueObject } from '../../value-objects/feeding/food-permitted/food-permitted.feeding.value-object';
import { TypeFeedingValueObject } from '../../value-objects/feeding/description/type-feeding.description.value-object';
import { FoodQualityValueObject } from '../../value-objects/feeding/food-quality/food-quality.feeding.value-object';
export interface IFeedingDomainEntity {
  feedingId: string;
  foodPermitted: string | TypefoodPermittedValueObject;
  description: string | TypeFeedingValueObject;
  foodQuality: string | FoodQualityValueObject;
}
