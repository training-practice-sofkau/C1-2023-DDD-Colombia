import { AggregateRootException } from 'src/shared/sofka';
import { IBreedDomainEntity } from '../../../../entities/interfaces/breed.domain-entity.interface';
import { IFeedingDomainEntity } from '../../../../entities/interfaces/feeding.domain-entity.interface';
import { UpdatedFoodComponentBreedEventPublisher } from '../../../../events/publishers/updated-food-component-breed-event-publisher';
import { IBreedDomainService } from '../../../../services/breed.domain-service';

export const UpdateFoodComponentBreedHelper = async (
  foodComponent: IFeedingDomainEntity,
  id: string,
  breed: IBreedDomainEntity,
  serviceDescriptionBreed?: IBreedDomainService,
  foodComponentBreedUpdated?: UpdatedFoodComponentBreedEventPublisher,
) => {
  if (!serviceDescriptionBreed) {
    throw new AggregateRootException('el servicio no es valido');
  }
  if (!breed) {
    throw new AggregateRootException('el registro no es valido');
  }
  if (!foodComponentBreedUpdated) {
    throw new AggregateRootException('el servicio publicador no es valido');
  }

  const answer = await serviceDescriptionBreed.updateFoodComponentBreed(
    foodComponent,
    id,
    breed,
  );
  foodComponentBreedUpdated.response = answer;
  foodComponentBreedUpdated.publish();
  return answer;
};
