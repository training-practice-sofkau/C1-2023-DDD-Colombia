import { AggregateRootException } from 'src/shared/sofka';
import { BreedDomainEntity } from '../../../../entities/breed.domain';
import { RegisteredBreedEventPublisher } from '../../../../events/publishers/registered-breed.event-publisher';
import { IBreedDomainService } from '../../../../services/breed.domain-service';

export const RegisterBreedHelper = async (
  breed: BreedDomainEntity,
  serviceBreed?: IBreedDomainService,
  breedRegistered?: RegisteredBreedEventPublisher,
) => {
  if (!serviceBreed) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!breed) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!breedRegistered) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceBreed.registerBreed(breed);
  breedRegistered.response = answer;
  breedRegistered.publish();
  return answer;
};
