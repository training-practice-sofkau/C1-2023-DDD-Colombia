import { AgeValueObject } from '../value-objects/hybrid-vigor/age/age.hybrid-vigor.value-object';
import { StrongerWeigthValueObject } from '../value-objects/hybrid-vigor/weight/weight.hybrid-vigor.value-object';
import { IHybridVigorDomainEntity } from './interfaces/hybridVigor.domain-entity.interface';

export class hybridVigorDomainEntity implements IHybridVigorDomainEntity {
  hibrydVigorID: string;
  age: number | AgeValueObject;
  weight: number | StrongerWeigthValueObject;

  constructor(data?: IHybridVigorDomainEntity) {
    if (data?.age) this.age = data.age;
    if (data?.hibrydVigorID) this.hibrydVigorID = data.hibrydVigorID;
    if (data?.weight) this.weight = data.weight;
  }
}
