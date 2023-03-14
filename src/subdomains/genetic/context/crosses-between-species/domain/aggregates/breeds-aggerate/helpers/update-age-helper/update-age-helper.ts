import { AggregateRootException } from 'src/shared/sofka';
import { UpdatedAgeEventPublisher } from '../../../../events/publishers/updated-age.event-publisher';
import { IHybridVigorDomainService } from '../../../../services/hybrid-vigor.domain-service';

export const UpdateAgeHelper = async (
  age: number,
  serviceAge?: IHybridVigorDomainService,
  ageUpdated?: UpdatedAgeEventPublisher,
) => {
  if (!serviceAge) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!age) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!ageUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceAge.updateAge(age);
  ageUpdated.response = answer;
  ageUpdated.publish();
  return answer;
};
