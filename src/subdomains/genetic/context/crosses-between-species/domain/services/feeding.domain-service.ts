import { IFeedingDomainEntity } from './../entities/interfaces/feeding.domain-entity.interface';
import { FeedingDomainEntity } from '../entities/feeding.domain';
export interface IFeedingDomainService<
  Entity extends IFeedingDomainEntity = IFeedingDomainEntity,
> {
  getFeedingById(id: string): Promise<Entity>;
  registerFeeding(feeding: FeedingDomainEntity): Promise<Entity>;
  updateFoodPermitted(foodPermitted: string): Promise<Entity>; //modificar a aupdate
  updateDescriptionFeeding(
    entity: string,
    id: string,
    descriptionFeeding: string,
  ): Promise<Entity>;
  updateFoodComponentFeeding(
    foodComponent: string,
    feeding: IFeedingDomainEntity,
  ): Promise<Entity>; //modificar a aupdate
}
