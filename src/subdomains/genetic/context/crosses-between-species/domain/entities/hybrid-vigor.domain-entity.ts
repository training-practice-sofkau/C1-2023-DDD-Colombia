import { AgeValueObject } from '../value-objects/hybrid-vigor/age-hybrid-vigor/age.hybrid-vigor.value-object';
import { StrongerWeigthValueObject } from '../value-objects/hybrid-vigor/weight-hybrid-vigor/weight.hybrid-vigor.value-object';
import { IHybridVigorDomainEntity } from './interfaces/hybrid-vigor.domain-entity.interface';

export class HybridVigorDomainEntity implements IHybridVigorDomainEntity {
  weigth: HybridVigorDomainEntity;
  hibrydVigorID: string;
  ageHybridVigor?: number | AgeValueObject;
  weigthHybridVigor?: number | StrongerWeigthValueObject;

  constructor(data?: IHybridVigorDomainEntity) {
    if (data?.ageHybridVigor) this.ageHybridVigor = data.ageHybridVigor;
    if (data?.hibrydVigorID) this.hibrydVigorID = data.hibrydVigorID;
    if (data?.weigthHybridVigor)
      this.weigthHybridVigor = data.weigthHybridVigor;
    if (data?.weigth) this.weigth = data.weigth;
  }
}
