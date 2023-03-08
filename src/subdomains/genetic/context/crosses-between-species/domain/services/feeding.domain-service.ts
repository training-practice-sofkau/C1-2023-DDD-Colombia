import { IFeedingDomainEntity } from './../entities/interfaces/feeding.domain-entity.interface';
import { feedingDomainEntity } from '../entities/feeding.domain';
export interface IFeedingDomainService<
  Entity extends IFeedingDomainEntity = IFeedingDomainEntity,
> {
  registerFeeding(feeding: feedingDomainEntity): Promise<Entity>;
  registerFoodPermittedFeeding(foodPermitted: string): Promise<Entity>;
  updateFoodPermittedFeeding(foodPermitted: string): Promise<Entity>;
  createDescriptionFeeding(description: string): Promise<Entity>;
  updateDescriptionFeeding(description: string): Promise<Entity>;
  registerFoodComponentFeeding(foodComponent: string): Promise<Entity>;
  updateFoodComponentFeeding(foodComponent: string): Promise<Entity>;
}
