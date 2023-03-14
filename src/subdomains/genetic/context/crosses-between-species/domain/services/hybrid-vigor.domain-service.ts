import { HybridVigorDomainEntity } from '../entities/hybrid-vigor.domain-entity';
export interface IHybridVigorDomainService<
  Entity extends HybridVigorDomainEntity = HybridVigorDomainEntity,
> {
  updateAge(registerAgeHybridVigor: number): Promise<Entity>; //modificar a aupdate
  registerHybridVigor(HybridVigor: HybridVigorDomainEntity): Promise<Entity>;
  updateAgeHybridVigor(age: number): Promise<Entity>; //modificar a aupdate
  updateWeigthHybridVigor(weith: string, id: string): Promise<Entity>;
  getHybridVigorById(id: string): Promise<Entity>;
}
