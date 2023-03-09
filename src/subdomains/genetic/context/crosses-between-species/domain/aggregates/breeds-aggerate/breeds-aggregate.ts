/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFeedingDomainService } from '../../services/feeding.domain-service';
import { IBreedDomainService } from '../../services/breed.domain-service';
import { IHybridVigorDomainService } from '../../services/hybrid-vigor.domain-service';
import { CreatedDescriptionBreedEventPublisher } from '../../events/publishers/created-description-breed.event-publisher';
import { IBreedDomainEntity } from '../../entities/interfaces/breed.domain-entity.interface';
import { BreedDomainEntity } from '../../entities/breed.domain';
import { FeedingDomainEntity } from '../../entities/feeding.domain';
import { IFeedingDomainEntity } from '../../entities/interfaces/feeding.domain-entity.interface';
import { HybridVigorDomainEntity } from '../../entities/hybrid-vigor.domain-entity';
import { IHybridVigorDomainEntity } from '../../entities/interfaces/hybrid-vigor.domain-entity.interface';
import { CreatedDescriptionFeedingEventPublisher } from '../../events/publishers/created-description-feeding.event-publisher';
import { RegisteredAgeHybridVigorEventPublisher } from '../../events/publishers/registered-age-hybrid-vigor.event-publisher';
import { RegisteredBreedEventPublisher } from '../../events/publishers/registered-breed.event-publisher';
import { RegisteredFeedingEventPublisher } from '../../events/publishers/registered-feeding.event-publisher';
import { RegisteredFoodComponentFeedingEventPublisher } from '../../events/publishers/registered-food-component-feeding.event-publisher';
import { RegisteredFoodPermitedEventPublisher } from '../../events/publishers/registered-food-permited.event-publisher';
import { RegisteredWeigthHybridVigorEventPublisher } from '../../events/publishers/registered-weigth-hybrid-vigor.event-publisher';
import { UpdatedAgeHybridVigorEventPublisher } from '../../events/publishers/updated-age-hybrid-vigor.event-publisher';
import { UpdatedDescriptionBreedEventPublisher } from '../../events/publishers/updated-description-breed.event-publisher';
import { UpdatedDescriptionFeedingEventPublisher } from '../../events/publishers/updated-description-feeding.event-publisher';
import { UpdatedEnviromentEventPublisher } from '../../events/publishers/updated-enviroment.event-publisher';
import { UpdatedFoodComponentFeedingEventPublisher } from '../../events/publishers/updated-food-component-feeding.event-publisher';
import { UpdatedFoodPermitedEventPublisher } from '../../events/publishers/updated-food-permited.event-publisher';
import { UpdatedWeigthHybridVigorEventPublisher } from '../../events/publishers/updated-weigth-hybrid-vigor.event-publisher';
import { ValidationRangeParentsBreedEventPublisher } from '../../events/publishers/validation-range-parents-breed.event-publisher';

export class BreedsAgreggate
  implements
    IBreedDomainService,
    IFeedingDomainService,
    IHybridVigorDomainService
{
  private readonly breedDomain?: IBreedDomainService;
  private readonly feedingDomain?: IFeedingDomainService;
  private readonly hybridVigorDomain?: IHybridVigorDomainService;
  private readonly createdDescriptionBreedEventPublisher?: CreatedDescriptionBreedEventPublisher<BreedDomainEntity>;
  private readonly createdDescriptionFeedingEventPublisher?: CreatedDescriptionFeedingEventPublisher<FeedingDomainEntity>;
  private readonly registeredAgeHybridVigorEventPublisher?: RegisteredAgeHybridVigorEventPublisher<IHybridVigorDomainEntity>;
  private readonly registeredBreedEventPublisher?: RegisteredBreedEventPublisher<IBreedDomainEntity>;
  private readonly registeredFeedingEventPublisher?: RegisteredFeedingEventPublisher<IFeedingDomainEntity>;
  private readonly registeredFoodComponentFeedingEventPublisher?: RegisteredFoodComponentFeedingEventPublisher<IFeedingDomainEntity>;
  private readonly registeredFoodPermitedEventPublisher?: RegisteredFoodPermitedEventPublisher<IFeedingDomainEntity>;
  private readonly registeredWeigthHybridVigorEventPublisher?: RegisteredWeigthHybridVigorEventPublisher<IHybridVigorDomainEntity>;
  private readonly updatedAgeHybridVigorEventPublisher?: UpdatedAgeHybridVigorEventPublisher<IHybridVigorDomainEntity>;
  private readonly updatedDescriptionBreedEventPublisher?: UpdatedDescriptionBreedEventPublisher<IBreedDomainEntity>;
  private readonly updatedDescriptionFeedingEventPublisher?: UpdatedDescriptionFeedingEventPublisher<IFeedingDomainEntity>;
  private readonly updatedEnviromentEventPublisher?: UpdatedEnviromentEventPublisher<IBreedDomainEntity>;
  private readonly updatedFoodComponentFeedingEventPublisher?: UpdatedFoodComponentFeedingEventPublisher<IFeedingDomainEntity>;
  private readonly updatedFoodPermitedEventPublisher?: UpdatedFoodPermitedEventPublisher<IFeedingDomainEntity>;
  private readonly updatedWeigthHybridVigorEventPublisher?: UpdatedWeigthHybridVigorEventPublisher<IHybridVigorDomainEntity>;
  private readonly validationRangeParentsBreedEventPublisher?: ValidationRangeParentsBreedEventPublisher<IBreedDomainEntity>;

  constructor({
    breedDomain,
    feedingDomain,
    hybridVigorDomain,
    createdDescriptionBreedEventPublisher,
    createdDescriptionFeedingEventPublisher,
    registeredAgeHybridVigorEventPublisher,
    registeredBreedEventPublisher,
    registeredFeedingEventPublisher,
    registeredFoodComponentFeedingEventPublisher,
    registeredFoodPermitedEventPublisher,
    registeredWeigthHybridVigorEventPublisher,
    updatedAgeHybridVigorEventPublisher,
    updatedDescriptionBreedEventPublisher,
    updatedDescriptionFeedingEventPublisher,
    updatedEnviromentEventPublisher,
    updatedFoodComponentFeedingEventPublisher,
    updatedFoodPermitedEventPublisher,
    updatedWeigthHybridVigorEventPublisher,
    validationRangeParentsBreedEventPublisher,
  }: {
    breedDomain?: IBreedDomainService;
    feedingDomain?: IFeedingDomainService;
    hybridVigorDomain?: IHybridVigorDomainService;
    createdDescriptionBreedEventPublisher?: CreatedDescriptionBreedEventPublisher<BreedDomainEntity>;
    createdDescriptionFeedingEventPublisher?: CreatedDescriptionFeedingEventPublisher<FeedingDomainEntity>;
    registeredAgeHybridVigorEventPublisher?: RegisteredAgeHybridVigorEventPublisher<IHybridVigorDomainEntity>;
    registeredBreedEventPublisher?: RegisteredBreedEventPublisher<IBreedDomainEntity>;
    registeredFeedingEventPublisher?: RegisteredFeedingEventPublisher<IFeedingDomainEntity>;
    registeredFoodComponentFeedingEventPublisher?: RegisteredFoodComponentFeedingEventPublisher<IFeedingDomainEntity>;
    registeredFoodPermitedEventPublisher?: RegisteredFoodPermitedEventPublisher<IFeedingDomainEntity>;
    registeredWeigthHybridVigorEventPublisher?: RegisteredWeigthHybridVigorEventPublisher<IHybridVigorDomainEntity>;
    updatedAgeHybridVigorEventPublisher?: UpdatedAgeHybridVigorEventPublisher<IHybridVigorDomainEntity>;
    updatedDescriptionBreedEventPublisher?: UpdatedDescriptionBreedEventPublisher<IBreedDomainEntity>;
    updatedDescriptionFeedingEventPublisher?: UpdatedDescriptionFeedingEventPublisher<IFeedingDomainEntity>;
    updatedEnviromentEventPublisher?: UpdatedEnviromentEventPublisher<IBreedDomainEntity>;
    updatedFoodComponentFeedingEventPublisher?: UpdatedFoodComponentFeedingEventPublisher<IFeedingDomainEntity>;
    updatedFoodPermitedEventPublisher?: UpdatedFoodPermitedEventPublisher<IFeedingDomainEntity>;
    updatedWeigthHybridVigorEventPublisher?: UpdatedWeigthHybridVigorEventPublisher<IHybridVigorDomainEntity>;
    validationRangeParentsBreedEventPublisher?: ValidationRangeParentsBreedEventPublisher<IBreedDomainEntity>;
  }) {
    this.breedDomain = breedDomain;
    this.feedingDomain = feedingDomain;
    this.hybridVigorDomain = hybridVigorDomain;
    this.createdDescriptionBreedEventPublisher = createdDescriptionBreedEventPublisher;
    this.createdDescriptionFeedingEventPublisher = createdDescriptionFeedingEventPublisher;
    this.registeredAgeHybridVigorEventPublisher = registeredAgeHybridVigorEventPublisher;
    this.registeredBreedEventPublisher = registeredBreedEventPublisher;
    this.registeredFeedingEventPublisher = registeredFeedingEventPublisher;
    this.registeredFoodComponentFeedingEventPublisher = registeredFoodComponentFeedingEventPublisher;
    this.registeredFoodPermitedEventPublisher = registeredFoodPermitedEventPublisher;
    this.registeredWeigthHybridVigorEventPublisher = registeredWeigthHybridVigorEventPublisher;
    this.updatedAgeHybridVigorEventPublisher = updatedAgeHybridVigorEventPublisher;
    this.updatedDescriptionBreedEventPublisher = updatedDescriptionBreedEventPublisher;
    this.updatedDescriptionFeedingEventPublisher = updatedDescriptionFeedingEventPublisher;
    this.updatedEnviromentEventPublisher = updatedEnviromentEventPublisher;
    this.updatedFoodComponentFeedingEventPublisher = updatedFoodComponentFeedingEventPublisher;
    this.updatedFoodPermitedEventPublisher = updatedFoodPermitedEventPublisher;
    this.updatedWeigthHybridVigorEventPublisher = updatedWeigthHybridVigorEventPublisher;
    this.validationRangeParentsBreedEventPublisher = validationRangeParentsBreedEventPublisher;
  }
  
  registerBreed(breed: IBreedDomainEntity): Promise<IBreedDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerEviromentBreed(enviroment: string): Promise<IBreedDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateEviromentBreed(enviroment: string): Promise<IBreedDomainEntity> {
    throw new Error('Method not implemented.');
  }
  validationRangeParentsBreed(rangeParents: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  registerFeeding(feeding: FeedingDomainEntity): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerFoodPermittedFeeding(foodPermitted: string,): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateFoodPermittedFeeding(foodPermitted: string,): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  createDescriptionFeeding(description: string): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateDescriptionFeeding(description: string): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerFoodComponentFeeding(foodComponent: string,): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateFoodComponentFeeding(foodComponent: string, ): Promise<IFeedingDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerHybridVigor(HybridVigor: HybridVigorDomainEntity,): Promise<IHybridVigorDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerAgeHybridVigor(age: number): Promise<IHybridVigorDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateAgeHybridVigor(age: number): Promise<IHybridVigorDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerWeigthHybridVigor(weigth: number): Promise<IHybridVigorDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateWeigthHybridVigor(weith: number): Promise<IHybridVigorDomainEntity> {
    throw new Error('Method not implemented.');
  } 
}
