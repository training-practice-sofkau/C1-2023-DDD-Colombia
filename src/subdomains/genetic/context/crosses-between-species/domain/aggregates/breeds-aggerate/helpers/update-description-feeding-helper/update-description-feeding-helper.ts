import { AggregateRootException } from 'src/shared/sofka';
import { UpdatedDescriptionFeedingEventPublisher } from '../../../../events/publishers/updated-description-feeding.event-publisher';
import { IFeedingDomainService } from '../../../../services/feeding.domain-service';

export const UpdateDescriptionFeedingHelper = async (
  descriptionFeeding: string,
  entity: string,
  id: string,
  serviceDescriptionFeeding?: IFeedingDomainService,
  descriptionFeedingUpdated?: UpdatedDescriptionFeedingEventPublisher,
) => {
  if (!serviceDescriptionFeeding) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!descriptionFeeding) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!descriptionFeedingUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceDescriptionFeeding.updateDescriptionFeeding(
    entity,
    id,
    descriptionFeeding,
  );
  descriptionFeedingUpdated.response = answer;
  descriptionFeedingUpdated.publish();
  return answer;
};
