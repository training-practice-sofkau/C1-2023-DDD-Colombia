import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { IEventPublisher } from 'src/shared/sofka';
import { RegisteredBreedEventPublisher } from '../../../domain/events/publishers/registered-breed.event-publisher';
import { BreedPostgresEntity } from '../../persistence/databases/postgres/entities/breeds-postgre.entity';
@Injectable()
export class RegisteredBreedPublisher extends RegisteredBreedEventPublisher<BreedPostgresEntity> {
  constructor(@Inject('BREED_SERVICE') private readonly proxy: ClientProxy) {
    super(proxy as unknown as IEventPublisher);
  }

  emit<Result = any, Input = BreedPostgresEntity>(
    pattern: any,
    data: Input,
  ): Promise<Result> {
    return lastValueFrom(this.proxy.emit(pattern, data));
  }
}
