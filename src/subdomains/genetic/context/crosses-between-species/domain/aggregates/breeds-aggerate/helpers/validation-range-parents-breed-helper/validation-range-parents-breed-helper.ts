import { AggregateRootException } from 'src/shared/sofka';
import { UpdatedWeigthHybridVigorEventPublisher } from '../../../../events/publishers/updated-weigth-hybrid-vigor.event-publisher';
import { IBreedDomainService } from '../../../../services/breed.domain-service';

export const ValidationRangeParentsBreedHelper = async (
  rangeParents: string,
  id: string,
  serviceHybridVigor?: IBreedDomainService,
  weigthHybridVigorUpdated?: UpdatedWeigthHybridVigorEventPublisher,
) => {
  if (!serviceHybridVigor) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!weigthHybridVigorUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceHybridVigor.validationRangeParentsBreed(
    rangeParents,
    id,
  );
  weigthHybridVigorUpdated.response = answer;
  weigthHybridVigorUpdated.publish();
  return answer;
};
