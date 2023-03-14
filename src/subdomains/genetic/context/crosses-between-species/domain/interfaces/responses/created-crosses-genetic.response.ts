import { BreedDomainEntity } from '../../entities/breed.domain';

/**
 *
 *
 * @export
 * @interface ICreatedCrossesGeneticResponse
 */
export interface ICreatedCrossesGeneticResponse {
  success: boolean;
  message: string;
  data: BreedDomainEntity | null;
}
