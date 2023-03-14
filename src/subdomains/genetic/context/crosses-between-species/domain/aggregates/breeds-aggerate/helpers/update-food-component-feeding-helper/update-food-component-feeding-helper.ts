import { AggregateRootException } from 'src/shared/sofka';
import { IFeedingDomainEntity } from '../../../../entities/interfaces/feeding.domain-entity.interface';
import { UpdatedFoodComponentFeedingEventPublisher } from '../../../../events/publishers/updated-food-component-feeding-event-publisher';
import { IFeedingDomainService } from '../../../../services/feeding.domain-service';

export const UpdateFoodComponentFeedingHelper = async (
  foodComponent: string,
  feeding: IFeedingDomainEntity,
  serviceDescriptionFeeding?: IFeedingDomainService,
  foodComponentFeedingUpdated?: UpdatedFoodComponentFeedingEventPublisher,
) => {
  if (!serviceDescriptionFeeding) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!feeding) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!foodComponentFeedingUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceDescriptionFeeding.updateFoodComponentFeeding(
    foodComponent,
    feeding,
  );
  foodComponentFeedingUpdated.response = answer;
  foodComponentFeedingUpdated.publish();
  return answer;
};
