import { AggregateRootException } from 'src/shared/sofka';
import { GotFeedingByIdEventPublisher } from '../../../../events/publishers/got-feeding-byId.event-publisher';
import { IFeedingDomainService } from '../../../../services/feeding.domain-service';

export const GetFeedingByIdHelper = async (
  feedingId: string,
  serviceFeeding?: IFeedingDomainService,
  feedingFound?: GotFeedingByIdEventPublisher,
) => {
  if (!serviceFeeding) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!feedingId) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!feedingFound) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceFeeding.getFeedingById(feedingId);
  feedingFound.response = answer;
  feedingFound.publish();
  return answer;
};
