import { IFeedingDomainEntity } from './../entities/interfaces/feeding.domain-entity.interface';
import { feedingDomainEntity } from '../entities/feeding.domain';
export interface IFeedingDomainService<
  Entity extends IFeedingDomainEntity = IFeedingDomainEntity,
> {
  regusterFeeding(feeding: feedingDomainEntity): Promise<Entity>;
  registerFoodPermitted(foodPermitted: string): Promise<Entity>;
  updateFoodPermitted(foodPermitted: string): Promise<Entity>;
  createDescription(description: string): Promise<Entity>;
  updateDescription(description: string): Promise<Entity>;
  registerFoodComponent(foodComponent: string): Promise<Entity>;
  updateFoodComponent(foodComponent: string): Promise<Entity>;
}
