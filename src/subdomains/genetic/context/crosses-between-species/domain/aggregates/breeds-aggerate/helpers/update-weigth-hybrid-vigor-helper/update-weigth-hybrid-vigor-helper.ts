import { AggregateRootException } from 'src/shared/sofka';
import { UpdatedWeigthHybridVigorEventPublisher } from '../../../../events/publishers/updated-weigth-hybrid-vigor.event-publisher';
import { IHybridVigorDomainService } from '../../../../services/hybrid-vigor.domain-service';
import { HybridVigorDomainEntity } from '../../../../entities/hybrid-vigor.domain-entity';

export const UpdateWeigthHybridVigorHelper = async (
  weigth: string,
  id: string,
  serviceHybridVigor?: IHybridVigorDomainService,
  weigthHybridVigorUpdated?: UpdatedWeigthHybridVigorEventPublisher,
): Promise<HybridVigorDomainEntity> => {
  if (!serviceHybridVigor) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!weigthHybridVigorUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceHybridVigor.updateWeigthHybridVigor(weigth, id);
  weigthHybridVigorUpdated.response = answer;
  weigthHybridVigorUpdated.publish();
  return answer;
};
