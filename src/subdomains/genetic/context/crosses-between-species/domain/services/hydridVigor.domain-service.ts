import { hybridVigorDomainEntity } from './../entities/hybridVigor.domain';
import { IHybridVigorDomainEntity } from './../entities/interfaces/hybridVigor.domain-entity.interface';
export interface IHybridVigorDomainService<
  Entity extends IHybridVigorDomainEntity = IHybridVigorDomainEntity,
> {
  registerHybridVigor(HybridVigor: hybridVigorDomainEntity): Promise<Entity>;
  registerAge(age: number): Promise<Entity>;
  updateAge(age: number): Promise<Entity>;
  registerWeigth(weigth: number): Promise<Entity>;
  updateWeigth(weith: number): Promise<Entity>;
}
