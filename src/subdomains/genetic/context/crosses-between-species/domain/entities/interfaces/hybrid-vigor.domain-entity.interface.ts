import { AgeValueObject } from '../../value-objects/hybrid-vigor/age-hybrid-vigor/age.hybrid-vigor.value-object';
import { StrongerWeigthValueObject } from '../../value-objects/hybrid-vigor/weight-hybrid-vigor/weight.hybrid-vigor.value-object';
import { HybridVigorDomainEntity } from '../hybrid-vigor.domain-entity';
export interface IHybridVigorDomainEntity {
  hibrydVigorID: string;
  ageHybridVigor?: number | AgeValueObject;
  weigthHybridVigor?: number | StrongerWeigthValueObject;
  weigth: HybridVigorDomainEntity;
}
