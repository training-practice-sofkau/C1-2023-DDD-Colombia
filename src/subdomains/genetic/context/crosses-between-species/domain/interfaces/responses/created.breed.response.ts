import { BreedDomainEntity } from '../../entities/breed.domain';
export interface ICreatedBreedResponse {
  responseBreed: BreedDomainEntity;
  message: string;
}
