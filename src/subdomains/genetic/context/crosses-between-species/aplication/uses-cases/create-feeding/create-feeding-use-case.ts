import { ValueObjectException } from './../../../../../../../shared/sofka/exceptions/object-value.exception';
import { IUseCase } from 'src/shared/sofka/interface/use-case.interface';
import { ValueObjectErrorHandler } from '../../../../../../../shared/sofka/bases/value-object-error-handler.base';
import { ICreateFeedingCommand } from '../../../domain/interfaces/commands/create-feeding/create-feeding-command';
import { ICreatedFeedingResponse } from '../../../domain/interfaces/responses/created-feeding/created-feeding-response';
import { BreedsAgreggate } from '../../../domain/aggregates/breeds-aggerate/breeds-aggregate';
import { IFeedingDomainService } from '../../../domain/services/feeding.domain-service';
import { RegisteredFeedingEventPublisher } from '../../../domain/events/publishers/registered-feeding.event-publisher';
import { FeedingIdValueObject } from '../../../domain/value-objects/feeding/feeding-Id/feeding-Id.value-object';
import { FeedingDomainEntity } from '../../../domain/entities/feeding.domain';
export class CreateFeedingQualityUsesCase
  extends ValueObjectErrorHandler
  implements IUseCase<ICreateFeedingCommand, ICreatedFeedingResponse>
{
  private readonly breedsAgreggate: BreedsAgreggate;
  constructor(
    private readonly feedingDomain: IFeedingDomainService,
    private readonly eventPublisher: RegisteredFeedingEventPublisher,
  ) {
    super();
    this.breedsAgreggate = new BreedsAgreggate({
      feedingDomain: this.feedingDomain,
      RegisteredFeedingEventPublisher: this.eventPublisher,
    });
  }
  async execute(
    command?: ICreateFeedingCommand | undefined,
  ): Promise<ICreatedFeedingResponse> {
    //validaciones
    const Feeding = new FeedingIdValueObject(command?.Feeding);
    const FoodPermitedFeeding = new FeedingIdValueObject(
      command?.FoodPermitedFeeding,
    );
    const DescriptionFeeding = new FeedingIdValueObject(
      command?.DescriptionFeeding,
    );
    const FoodQuality = new FeedingIdValueObject(command?.FoodQuality);

    //capturar errores
    if (Feeding.hasErrors() === true) this.setErrors(Feeding.getErrors());
    if (FoodPermitedFeeding.hasErrors() === true)
      this.setErrors(FoodPermitedFeeding.getErrors());
    if (DescriptionFeeding.hasErrors() === true)
      this.setErrors(DescriptionFeeding.getErrors());
    if (FoodQuality.hasErrors() === true)
      this.setErrors(FoodQuality.getErrors());

    //validar errores
    if (this.hasErrors() === true)
      throw new ValueObjectException(
        'se han presentado errores en los value objects',
        this.getErrors(),
      );
    //crear el objeto
    const foodtype = new FeedingDomainEntity();

    const feeding = new FeedingDomainEntity();
    feeding.feedingId = Feeding.valueOf();

    foodtype.foodPermittedFeeding = FoodPermitedFeeding.valueOf();

    foodtype.descriptionFeeding = DescriptionFeeding.valueOf();

    foodtype.foodQualityFeeding = FoodQuality.valueOf();

    //retornar respuesta
    const answer = await this.feedingDomain.registerFeeding(feeding);
    return {
      responseFeedingQuality: answer,
      message: 'Se ha registrado la alimentación',
    };
  }
}
