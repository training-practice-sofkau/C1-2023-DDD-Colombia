import { AggregateRootException } from 'src/shared/sofka';
import { FeedingDomainEntity } from '../../../../entities/feeding.domain';
import { RegisteredFeedingEventPublisher } from '../../../../events/publishers/registered-feeding.event-publisher';
import { IFeedingDomainService } from '../../../../services/feeding.domain-service';

export const RegisterFeedingHelper = async (
  feeding: FeedingDomainEntity,
  serviceFeeding?: IFeedingDomainService,
  feedingRegistered?: RegisteredFeedingEventPublisher,
) => {
  if (!serviceFeeding) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!feeding) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!feedingRegistered) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceFeeding.registerFeeding(feeding);
  feedingRegistered.response = answer;
  feedingRegistered.publish();
  return answer;
};
