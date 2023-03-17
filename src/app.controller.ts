import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BreedEntity } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/entities/breeds.entity';
import { BreedService } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/services/breed.service';
import { FeedingService } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/services/feeding.service';
import { FeedingEntity } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/entities/feeding.entity';
import { HybridVigorService } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/services/hybrid-vigor.service';
import { HybridVigorEntity } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/entities/hybrid-vigor.entity';

@Controller('breed')
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly breedService: BreedService,
    private readonly feedingService: FeedingService,
    private readonly hybridVigorService: HybridVigorService,
  ) {}

  @Get('get-all-breed')
  getAllBreeds(): Promise<BreedEntity[]> {
    return this.breedService.findAllBreed();
  }

  @Post('createBreed')
  createBreed(@Body() breed: BreedEntity): Promise<BreedEntity> {
    return this.breedService.createBreed(breed);
  }

  @Get('get-all-feeding')
  findAllFeeding(): Promise<FeedingEntity[]> {
    return this.feedingService.findAllFeeding();
  }

  @Post('createFeeding')
  createFeeding(@Body() feeding: FeedingEntity): Promise<FeedingEntity> {
    return this.feedingService.createFeeding(feeding);
  }

  @Get('get-all-hybrid-vigor')
  findAllHybridVigor(): Promise<HybridVigorEntity[]> {
    return this.hybridVigorService.findAllHybridVigor();
  }

  @Post('createHybridVigor')
  createHybridVigor(
    @Body() hybridVigor: HybridVigorEntity,
  ): Promise<HybridVigorEntity> {
    return this.hybridVigorService.createHybridVigor(hybridVigor);
  }
}
