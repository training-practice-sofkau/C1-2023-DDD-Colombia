import { Module } from '@nestjs/common';
import { BreedTypeValueObject } from './subdomains/genetic/context/crosses-between-species/domain/value-objects/breeds/breed-type/breed-type.breeds.value-object';

@Module({
  imports: [],
  controllers: [],
  providers: [BreedTypeValueObject],
})
export class AppModule {}
