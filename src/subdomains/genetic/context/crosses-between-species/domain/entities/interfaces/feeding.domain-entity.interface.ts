import { TypefoodPermittedValueObject } from '../../value-objects/feeding/food-permitted-feeding/food-permitted.feeding.value-object';
import { TypeFeedingValueObject } from '../../value-objects/feeding/description-feeding/type-feeding.description.value-object';
import { FoodQualityValueObject } from '../../value-objects/feeding/food-quality-feeding/food-quality.feeding.value-object';
export interface IFeedingDomainEntity {
  feedingId: string;
  foodPermittedFeeding?: string | TypefoodPermittedValueObject;
  descriptionFeeding?: string | TypeFeedingValueObject;
  foodQualityFeeding?: string | FoodQualityValueObject;
}
