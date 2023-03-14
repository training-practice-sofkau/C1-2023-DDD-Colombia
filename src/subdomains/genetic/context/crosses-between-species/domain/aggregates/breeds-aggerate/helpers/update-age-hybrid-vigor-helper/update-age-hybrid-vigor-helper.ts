import { AggregateRootException } from 'src/shared/sofka';
import { UpdatedAgeHybridVigorEventPublisher } from '../../../../events/publishers/updated-age-hybrid-vigor.event-publisher';
import { IHybridVigorDomainService } from '../../../../services/hybrid-vigor.domain-service';

export const UpdateAgeHybridVigorHelper = async (
  hybridVigor: number,
  serviceHybridVigor?: IHybridVigorDomainService,
  hybridVigorUpdated?: UpdatedAgeHybridVigorEventPublisher,
) => {
  if (!serviceHybridVigor) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!hybridVigor) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!hybridVigorUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceHybridVigor.updateAgeHybridVigor(hybridVigor);
  hybridVigorUpdated.response = answer;
  hybridVigorUpdated.publish();
  return answer;
};
