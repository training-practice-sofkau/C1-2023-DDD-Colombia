import { TypeFeedingValueObject } from '../value-objects/feeding/description-feeding/type-feeding.description.value-object';
import { TypefoodPermittedValueObject } from '../value-objects/feeding/food-permitted-feeding/food-permitted.feeding.value-object';
import { FoodQualityValueObject } from '../value-objects/feeding/food-quality-feeding/food-quality.feeding.value-object';
import { IFeedingDomainEntity } from './interfaces/feeding.domain-entity.interface';
export class FeedingDomainEntity implements IFeedingDomainEntity {
  foodComponentBreed?: string;
  feedingId: string;
  foodPermittedFeeding?: string | TypefoodPermittedValueObject;
  descriptionFeeding?: string | TypeFeedingValueObject;
  foodQualityFeeding?: string | FoodQualityValueObject;

  constructor(data?: IFeedingDomainEntity) {
    if (data?.foodComponentBreed)
      this.foodComponentBreed = data.foodComponentBreed;
    if (data?.descriptionFeeding)
      this.descriptionFeeding = data.descriptionFeeding;
    if (data?.feedingId) this.feedingId = data.feedingId;
    if (data?.foodPermittedFeeding)
      this.foodPermittedFeeding = data.foodPermittedFeeding;
    if (data?.foodQualityFeeding)
      this.foodQualityFeeding = data.foodQualityFeeding;
  }
}
