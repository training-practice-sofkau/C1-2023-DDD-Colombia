import { AggregateRootException } from 'src/shared/sofka';
import { GotBreedByIdEventPublisher } from '../../../../events/publishers/got-breed-by-id-event-publisher';
import { IBreedDomainService } from '../../../../services/breed.domain-service';

export const GetBreedByIdHelper = async (
  breedId: string,
  serviceBreed?: IBreedDomainService,
  breedFound?: GotBreedByIdEventPublisher,
) => {
  if (!serviceBreed) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!breedId) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!breedFound) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceBreed.getBreedById(breedId);
  breedFound.response = answer;
  breedFound.publish();
  return answer;
};
