import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BreedEntity } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/entities/breeds.entity';
import { BreedService } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/services/breed.service';

@Controller('breed')
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly breedService: BreedService,
  ) {}

  @Get('get-all')
  getAllBreeds(): Promise<BreedEntity[]> {
    return this.breedService.findAllBreed();
  }

  @Post('createBreed')
  createBreed(@Body() breed: BreedEntity): Promise<BreedEntity> {
    return this.breedService.createBreed(breed);
  }
}
