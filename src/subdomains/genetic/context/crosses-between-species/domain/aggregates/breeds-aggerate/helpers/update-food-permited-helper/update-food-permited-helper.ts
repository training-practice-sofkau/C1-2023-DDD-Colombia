import { AggregateRootException } from 'src/shared/sofka';
import { UpdatedFoodPermitedEventPublisher } from '../../../../events/publishers/updated-food-permited.event-publisher';
import { IFeedingDomainService } from '../../../../services/feeding.domain-service';

export const UpdateFoodPermitedHelper = async (
  foodPermitted: string,
  serviceDescriptionFeeding?: IFeedingDomainService,
  foodPermitedUpdated?: UpdatedFoodPermitedEventPublisher,
) => {
  if (!serviceDescriptionFeeding) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!foodPermitedUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceDescriptionFeeding.updateFoodPermitted(
    foodPermitted,
  );
  foodPermitedUpdated.response = answer;
  foodPermitedUpdated.publish();
  return answer;
};
