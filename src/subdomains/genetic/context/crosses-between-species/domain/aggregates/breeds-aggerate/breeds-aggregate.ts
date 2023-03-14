/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IBreedDomainService } from '../../services/breed.domain-service';
import { IFeedingDomainService } from '../../services/feeding.domain-service';
import { IHybridVigorDomainService } from '../../services/hybrid-vigor.domain-service';
import { GotBreedByIdEventPublisher } from '../../events/publishers/got-breed-by-id-event-publisher';
import { GotFeedingByIdEventPublisher } from '../../events/publishers/got-feeding-byId.event-publisher';
import { GotHybridVigorByIdEventPublisher } from '../../events/publishers/got-hybrid-vigor-by-Id-publisher';
import { RegisteredBreedEventPublisher } from '../../events/publishers/registered-breed.event-publisher';
import { RegisteredFeedingEventPublisher } from '../../events/publishers/registered-feeding.event-publisher';
import { UpdatedAgeHybridVigorEventPublisher } from '../../events/publishers/updated-age-hybrid-vigor.event-publisher';
import { UpdatedAgeEventPublisher } from '../../events/publishers/updated-age.event-publisher';
import { UpdatedDescriptionFeedingEventPublisher } from '../../events/publishers/updated-description-feeding.event-publisher';
import { UpdatedEnviromentBreedEventPublisher } from '../../events/publishers/updated-enviroment-breed.event-publisher';
import { UpdatedFoodComponentBreedEventPublisher } from '../../events/publishers/updated-food-component-breed-event-publisher';
import { UpdatedFoodPermitedEventPublisher } from '../../events/publishers/updated-food-permited.event-publisher';
import { UpdatedWeigthHybridVigorEventPublisher } from '../../events/publishers/updated-weigth-hybrid-vigor.event-publisher';
import { ValidationRangeParentsBreedEventPublisher } from '../../events/publishers/validation-range-parents-breed.event-publisher';
import { BreedDomainEntity } from '../../entities/breed.domain';
import { IBreedDomainEntity } from '../../entities/interfaces/breed.domain-entity.interface';
import { IFeedingDomainEntity } from '../../entities/interfaces/feeding.domain-entity.interface';
import { FeedingDomainEntity } from '../../entities/feeding.domain';
import { HybridVigorDomainEntity } from '../../entities/hybrid-vigor.domain-entity';
import { GetBreedByIdHelper } from './helpers/get-breed-by-id-helper/get-breed-by-id-helper';
import { GetFeedingByIdHelper } from './helpers/get-feeding-byId-helper/get-feeding-byId-helper';
import { GetHybridVigorByIdHelper } from './helpers/get-hybrid-vigor-by-Id-helper/get-hybrid-vigor-byId-helper';
import { RegisterBreedHelper } from './helpers/register-breed.event-helper/register-breed-helper';
import { RegisterFeedingHelper } from './helpers/register-feeding-helper/register-feeding-helper';
import { RegisterHybridVigorHelper } from './helpers/register-hybrid-vigor-helper/register-hybrid-vigor-helper';
import { RegisteredHybridVigorEventPublisher } from '../../events/publishers/registered-hybrid-vigor.event-publisher';
import { UpdateAgeHybridVigorHelper } from './helpers/update-age-hybrid-vigor-helper/update-age-hybrid-vigor-helper';
import { UpdateAgeHelper } from './helpers/update-age-helper/update-age-helper';
import { UpdateDescriptionFeedingHelper } from './helpers/update-description-feeding-helper/update-description-feeding-helper';
import { UpdateEnviromentBreedHelper } from './helpers/update-enviroment-breed-helper/update-enviroment-breed-helper';
import { UpdateFoodComponentBreedHelper } from './helpers/update-food-component-breed-helper/update-food-component-breed-helper';
import { UpdateFoodComponentFeedingHelper } from './helpers/update-food-component-feeding-helper/update-food-component-feeding-helper';
import { UpdatedFoodComponentFeedingEventPublisher } from '../../events/publishers/updated-food-component-feeding-event-publisher';
import { UpdateFoodPermitedHelper } from './helpers/update-food-permited-helper/update-food-permited-helper';
import { UpdateWeigthHybridVigorHelper } from './helpers/update-weigth-hybrid-vigor-helper/update-weigth-hybrid-vigor-helper';
import { ValidationRangeParentsBreedHelper } from './helpers/validation-range-parents-breed-helper/validation-range-parents-breed-helper';

export class BreedsAgreggate
  implements
    IBreedDomainService,
    IFeedingDomainService,
    IHybridVigorDomainService
{
  private readonly breedDomain?: IBreedDomainService;
  private readonly feedingDomain?: IFeedingDomainService;
  private readonly hybridVigorDomain?: IHybridVigorDomainService;
  private readonly GotBreedByIdEventPublisher?: GotBreedByIdEventPublisher;
  private readonly GotFeedingByIdEventPublisher?: GotFeedingByIdEventPublisher;
  private readonly GotHybridVigorByIdEventPublisher?: GotHybridVigorByIdEventPublisher;
  private readonly RegisteredBreedEventPublisher?: RegisteredBreedEventPublisher;
  private readonly RegisteredFeedingEventPublisher?: RegisteredFeedingEventPublisher;
  private readonly RegisteredHybridVigorEventPublisher?: RegisteredHybridVigorEventPublisher;
  private readonly UpdatedAgeHybridVigorEventPublisher?: UpdatedAgeHybridVigorEventPublisher;
  private readonly UpdatedAgeEventPublisher?: UpdatedAgeEventPublisher;
  private readonly UpdatedDescriptionFeedingEventPublisher?: UpdatedDescriptionFeedingEventPublisher;
  private readonly UpdatedEnviromentBreedEventPublisher?: UpdatedEnviromentBreedEventPublisher;
  private readonly UpdatedFoodComponentBreedEventPublisher?: UpdatedFoodComponentBreedEventPublisher;
  private readonly UpdatedFoodComponentFeedingEventPublisher?: UpdatedFoodComponentFeedingEventPublisher;
  private readonly UpdatedFoodPermitedEventPublisher?: UpdatedFoodPermitedEventPublisher;
  private readonly UpdatedWeigthHybridVigorEventPublisher?: UpdatedWeigthHybridVigorEventPublisher;
  private readonly ValidationRangeParentsBreedEventPublisher?: ValidationRangeParentsBreedEventPublisher;

  constructor({
    breedDomain,
    feedingDomain,
    hybridVigorDomain,
    GotBreedByIdEventPublisher,
    GotFeedingByIdEventPublisher,
    GotHybridVigorByIdEventPublisher,
    RegisteredBreedEventPublisher,
    RegisteredFeedingEventPublisher,
    RegisteredHybridVigorEventPublisher,
    UpdatedAgeHybridVigorEventPublisher,
    UpdatedAgeEventPublisher,
    UpdatedDescriptionFeedingEventPublisher,
    UpdatedEnviromentBreedEventPublisher,
    UpdatedFoodComponentBreedEventPublisher,
    UpdatedFoodComponentFeedingEventPublisher,
    UpdatedFoodPermitedEventPublisher,
    UpdatedWeigthHybridVigorEventPublisher,
    ValidationRangeParentsBreedEventPublisher,
  }: {
    breedDomain?: IBreedDomainService;
    feedingDomain?: IFeedingDomainService;
    hybridVigorDomain?: IHybridVigorDomainService;
    GotBreedByIdEventPublisher?: GotBreedByIdEventPublisher;
    GotFeedingByIdEventPublisher?: GotFeedingByIdEventPublisher;
    GotHybridVigorByIdEventPublisher?: GotHybridVigorByIdEventPublisher;
    RegisteredBreedEventPublisher?: RegisteredBreedEventPublisher;
    RegisteredFeedingEventPublisher?: RegisteredFeedingEventPublisher;
    RegisteredHybridVigorEventPublisher?: RegisteredFeedingEventPublisher;
    UpdatedAgeHybridVigorEventPublisher?: UpdatedAgeHybridVigorEventPublisher;
    UpdatedAgeEventPublisher?: UpdatedAgeEventPublisher;
    UpdatedDescriptionFeedingEventPublisher?: UpdatedDescriptionFeedingEventPublisher;
    UpdatedEnviromentBreedEventPublisher?: UpdatedEnviromentBreedEventPublisher;
    UpdatedFoodComponentBreedEventPublisher?: UpdatedFoodComponentBreedEventPublisher;
    UpdatedFoodComponentFeedingEventPublisher?: UpdatedFoodComponentFeedingEventPublisher;
    UpdatedFoodPermitedEventPublisher?: UpdatedFoodPermitedEventPublisher;
    UpdatedWeigthHybridVigorEventPublisher?: UpdatedWeigthHybridVigorEventPublisher;
    ValidationRangeParentsBreedEventPublisher?: ValidationRangeParentsBreedEventPublisher;
  }) {
    this.breedDomain = breedDomain;
    this.feedingDomain = feedingDomain;
    this.hybridVigorDomain = hybridVigorDomain;
    this.GotBreedByIdEventPublisher = GotBreedByIdEventPublisher;
    this.GotFeedingByIdEventPublisher = GotFeedingByIdEventPublisher;
    this.GotHybridVigorByIdEventPublisher = GotHybridVigorByIdEventPublisher;
    this.RegisteredBreedEventPublisher = RegisteredBreedEventPublisher;
    this.RegisteredFeedingEventPublisher = RegisteredFeedingEventPublisher;
    this.UpdatedAgeHybridVigorEventPublisher =
      UpdatedAgeHybridVigorEventPublisher;
    this.UpdatedAgeEventPublisher = UpdatedAgeEventPublisher;
    this.UpdatedDescriptionFeedingEventPublisher =
      UpdatedDescriptionFeedingEventPublisher;
    this.UpdatedEnviromentBreedEventPublisher =
      UpdatedEnviromentBreedEventPublisher;
    this.UpdatedFoodComponentBreedEventPublisher =
      UpdatedFoodComponentBreedEventPublisher;
    this.UpdatedFoodComponentFeedingEventPublisher = UpdatedFoodComponentFeedingEventPublisher;
    this.UpdatedFoodPermitedEventPublisher = UpdatedFoodPermitedEventPublisher;
    this.UpdatedWeigthHybridVigorEventPublisher =
      UpdatedWeigthHybridVigorEventPublisher;
    this.ValidationRangeParentsBreedEventPublisher =
      ValidationRangeParentsBreedEventPublisher;
  }
  registerBreed(breed: BreedDomainEntity): Promise<BreedDomainEntity> {
    return RegisterBreedHelper(
        breed,
        this.breedDomain,
        this.RegisteredBreedEventPublisher,
        );
  }
  getBreedById(id: string): Promise<BreedDomainEntity> {
    return GetBreedByIdHelper(
      id,
      this.breedDomain,
      this.GotBreedByIdEventPublisher,
    );
  }
  updateEnviromentBreed(
    breed: IBreedDomainEntity,
    id: string,
    enviromentBreed: string,
  ): Promise<BreedDomainEntity> {
    return UpdateEnviromentBreedHelper(
      breed,
      id,
      enviromentBreed,
      this.breedDomain,
      this.UpdatedEnviromentBreedEventPublisher,
    );
  }
  validationRangeParentsBreed(rangeParents: string, id: string): Promise<HybridVigorDomainEntity> {
    return ValidationRangeParentsBreedHelper(
      rangeParents,
      id,
      this.breedDomain,
      this.ValidationRangeParentsBreedEventPublisher,
    );
  }
  updateFoodComponentBreed(
    foodComponent: IFeedingDomainEntity,
    id: string,
    breed: IBreedDomainEntity,
  ): Promise<BreedDomainEntity> {
    return UpdateFoodComponentBreedHelper(
      foodComponent,
      id,
      breed,
      this.breedDomain,
      this.UpdatedFoodComponentBreedEventPublisher,
    );
  }
  getFeedingById(id: string): Promise<IFeedingDomainEntity> {
    return GetFeedingByIdHelper(
      id,
      this.feedingDomain,
      this.GotFeedingByIdEventPublisher,
    );
  }
  registerFeeding(feeding: FeedingDomainEntity): Promise<IFeedingDomainEntity> {
    return RegisterFeedingHelper(
      feeding,
      this.feedingDomain,
      this.RegisteredFeedingEventPublisher,
    );
  }
  updateFoodPermitted(foodPermitted: string): Promise<IFeedingDomainEntity> {
    return UpdateFoodPermitedHelper(
      foodPermitted,
      this.feedingDomain,
      this.UpdatedFoodPermitedEventPublisher,
    );
  }
  updateDescriptionFeeding(
    entity: string,
    id: string,
    descriptionFeeding: string,
  ): Promise<IFeedingDomainEntity> {
    return UpdateDescriptionFeedingHelper(
      entity,
      id,
      descriptionFeeding,
      this.feedingDomain,
      this.UpdatedDescriptionFeedingEventPublisher,
    );
  }
  updateFoodComponentFeeding(
    foodComponent: string,
    feeding: IFeedingDomainEntity
  ): Promise<IFeedingDomainEntity> {
    return UpdateFoodComponentFeedingHelper(
      foodComponent,
      feeding,
      this.feedingDomain,
      this.UpdatedFoodComponentFeedingEventPublisher,
    );
  }
  updateAge(registerAgeHybridVigor: number): Promise<HybridVigorDomainEntity> {
    return UpdateAgeHelper(
      registerAgeHybridVigor,
      this.hybridVigorDomain,
      this.UpdatedAgeEventPublisher,
    );
  }
  registerHybridVigor(
    HybridVigor: HybridVigorDomainEntity,
  ): Promise<HybridVigorDomainEntity> {
    return RegisterHybridVigorHelper(
      HybridVigor,
      this.hybridVigorDomain,
      this.RegisteredHybridVigorEventPublisher,
    );
  }
  updateAgeHybridVigor(age: number): Promise<HybridVigorDomainEntity> {
    return UpdateAgeHybridVigorHelper(
      age,
      this.hybridVigorDomain,
      this.UpdatedAgeHybridVigorEventPublisher,
    );
  }
  updateWeigthHybridVigor(
    weigth: string,
    id: string,
  ): Promise<HybridVigorDomainEntity> {
    return UpdateWeigthHybridVigorHelper(
      weigth,
      id,
      this.hybridVigorDomain,
      this.UpdatedWeigthHybridVigorEventPublisher,
    );
  }
  getHybridVigorById(id: string): Promise<HybridVigorDomainEntity> {
    return GetHybridVigorByIdHelper(
        id,
        this.hybridVigorDomain,
        this.GotHybridVigorByIdEventPublisher,

    );
  }
}
