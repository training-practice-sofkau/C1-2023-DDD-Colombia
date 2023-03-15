import { IUseCase, ValueObjectErrorHandler } from 'src/shared/sofka';
import { ICreaterBreedCommand } from '../../../domain/interfaces/commands/create-breed.command';
import { BreedsAgreggate } from '../../../domain/aggregates/breeds-aggerate/breeds-aggregate';
import { RegisteredBreedEventPublisher } from '../../../domain/events/publishers/registered-breed.event-publisher';
import { IBreedDomainService } from '../../../domain/services/breed.domain-service';
import { ICreatedBreedResponse } from '../../../domain/interfaces/responses/created.breed.response';
import { HybridVigorId } from '../../../domain/value-objects/hybrid-vigor/bybrid-vigor-Id/hybrid-vigor-Id.value-object';
import { DescriptionValueObject } from '../../../domain/value-objects/breeds/description-breed/description.breeds.value-object';
import { FeedingIdValueObject } from '../../../domain/value-objects/feeding/feeding-Id/feeding-Id.value-object';
import { EnviromentValueObject } from '../../../domain/value-objects/breeds/environment-breed/enviroment.breeds.value-object';
import { BreedTypeValueObject } from '../../../domain/value-objects/breeds/breed-type/breed-type.breeds.value-object';
import { ValueObjectException } from '../../../../../../../shared/sofka/exceptions/object-value.exception';
import { BreedDomainEntity } from '../../../domain/entities/breed.domain';
import { HybridVigorDomainEntity } from '../../../domain/entities/hybrid-vigor.domain-entity';
import { FeedingDomainEntity } from '../../../domain/entities/feeding.domain';

export class CreateBreedUsesCase
  extends ValueObjectErrorHandler
  implements IUseCase<ICreaterBreedCommand, ICreatedBreedResponse>
{
  private readonly breedsAgreggate: BreedsAgreggate;
  constructor(
    private readonly breedDomain: IBreedDomainService,
    private readonly eventPublisher: RegisteredBreedEventPublisher,
  ) {
    super();
    this.breedsAgreggate = new BreedsAgreggate({
      breedDomain: this.breedDomain,
      RegisteredBreedEventPublisher: this.eventPublisher,
    });
  }
  async execute(
    command?: ICreaterBreedCommand | undefined,
  ): Promise<ICreatedBreedResponse> {
    //validaciones
    const HybridVigor = new HybridVigorId(command?.HybridVigor);
    const DescriptionBreed = new DescriptionValueObject(
      command?.DescriptionBreed,
    );
    const Feeding = new FeedingIdValueObject(command?.Feeding);
    const EnviromentBreed = new EnviromentValueObject(command?.EnviromentBreed);
    const BreedType = new BreedTypeValueObject(command?.BreedType);

    //captura de errores
    if (HybridVigor.hasErrors() === true)
      this.setErrors(HybridVigor.getErrors());
    if (DescriptionBreed.hasErrors() === true)
      this.setErrors(DescriptionBreed.getErrors());
    if (Feeding.hasErrors() === true) this.setErrors(Feeding.getErrors());
    if (EnviromentBreed.hasErrors() === true)
      this.setErrors(EnviromentBreed.getErrors());
    if (BreedType.hasErrors() === true) this.setErrors(BreedType.getErrors());

    // validar errores
    if (this.hasErrors() === true)
      throw new ValueObjectException(
        'se cuentran errores en los value object',
        this.getErrors(),
      );
    //crear entidad
    const breed = new BreedDomainEntity();

    const hybridVigor = new HybridVigorDomainEntity();
    hybridVigor.hibrydVigorID = HybridVigor.valueOf();
    breed.breedHybridVigor = hybridVigor;

    breed.breedDescription = DescriptionBreed.valueOf();

    const feeding = new FeedingDomainEntity();
    feeding.feedingId = Feeding.valueOf();

    breed.breedEviroment = EnviromentBreed.valueOf();

    breed.breedType = BreedType.valueOf();

    //retornar respuesta
    const answer = await this.breedDomain.registerBreed(breed);
    return {
      responseBreed: answer,
      message: 'se creo la raza correctamente',
    };
  }
}
