import { HybridVigorDomainEntity } from '../entities/hybrid-vigor.domain-entity';
import { IHybridVigorDomainEntity } from '../entities/interfaces/hybrid-vigor.domain-entity.interface';
export interface IHybridVigorDomainService<
  Entity extends IHybridVigorDomainEntity = IHybridVigorDomainEntity,
> {
  registerHybridVigor(HybridVigor: HybridVigorDomainEntity): Promise<Entity>;
  registerAgeHybridVigor(age: number): Promise<Entity>;
  updateAgeHybridVigor(age: number): Promise<Entity>;
  registerWeigthHybridVigor(weigth: number): Promise<Entity>;
  updateWeigthHybridVigor(weith: number): Promise<Entity>;
}
