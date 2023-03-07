import { AgeValueObject } from './../../value-objects/hybrid-vigor/age/age.hybrid-vigor.value-object';
import { StrongerWeigthValueObject } from '../../value-objects/hybrid-vigor/weight/weight.hybrid-vigor.value-object';
export interface IHybridVigorDomainEntity {
  hibrydVigorID: string;
  age: number | AgeValueObject;
  weight: number | StrongerWeigthValueObject;
}
