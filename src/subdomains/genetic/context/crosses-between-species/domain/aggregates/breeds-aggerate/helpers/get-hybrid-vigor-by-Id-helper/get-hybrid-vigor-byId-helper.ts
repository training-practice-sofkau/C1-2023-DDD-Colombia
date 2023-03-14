import { AggregateRootException } from 'src/shared/sofka';
import { GotHybridVigorByIdEventPublisher } from '../../../../events/publishers/got-hybrid-vigor-by-Id-publisher';
import { IHybridVigorDomainService } from '../../../../services/hybrid-vigor.domain-service';

export const GetHybridVigorByIdHelper = async (
  hybridVigorId: string,
  serviceHybridVigor?: IHybridVigorDomainService,
  hybridVigorFound?: GotHybridVigorByIdEventPublisher,
) => {
  if (!serviceHybridVigor) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!hybridVigorId) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!hybridVigorFound) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceHybridVigor.getHybridVigorById(hybridVigorId);
  hybridVigorFound.response = answer;
  hybridVigorFound.publish();
  return answer;
};
