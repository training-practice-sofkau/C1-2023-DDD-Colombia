import { AggregateRootException } from 'src/shared/sofka';
import { HybridVigorDomainEntity } from '../../../../entities/hybrid-vigor.domain-entity';
import { RegisteredHybridVigorEventPublisher } from '../../../../events/publishers/registered-hybrid-vigor.event-publisher';
import { IHybridVigorDomainService } from '../../../../services/hybrid-vigor.domain-service';

export const RegisterHybridVigorHelper = async (
  hybridVigor: HybridVigorDomainEntity,
  serviceHybridVigor?: IHybridVigorDomainService,
  hybridVigorRegistered?: RegisteredHybridVigorEventPublisher,
) => {
  if (!serviceHybridVigor) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!hybridVigor) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!hybridVigorRegistered) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceHybridVigor.registerHybridVigor(hybridVigor);
  hybridVigorRegistered.response = answer;
  hybridVigorRegistered.publish();
  return answer;
};
