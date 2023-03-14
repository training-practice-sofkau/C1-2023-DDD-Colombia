import { AggregateRootException } from 'src/shared/sofka';
import { IBreedDomainEntity } from '../../../../entities/interfaces/breed.domain-entity.interface';
import { UpdatedEnviromentBreedEventPublisher } from '../../../../events/publishers/updated-enviroment-breed.event-publisher';
import { IBreedDomainService } from '../../../../services/breed.domain-service';
export const UpdateEnviromentBreedHelper = async (
  breed: IBreedDomainEntity,
  id: string,
  enviromentBreed: string,
  serviceDescriptionBreed?: IBreedDomainService,
  enviromentBreedUpdated?: UpdatedEnviromentBreedEventPublisher,
) => {
  if (!serviceDescriptionBreed) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!breed) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!enviromentBreedUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceDescriptionBreed.updateEnviromentBreed(
    breed,
    id,
    enviromentBreed,
  );
  enviromentBreedUpdated.response = answer;
  enviromentBreedUpdated.publish();
  return answer;
};
