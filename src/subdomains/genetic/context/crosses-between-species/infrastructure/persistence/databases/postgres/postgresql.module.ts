import { HybridVigorService } from './services/hybrid-vigor.service';
import { HybridVigorRepository } from './repositories/hybrid-vigor.repository';
import { HybridVigorEntity } from './entities/hybrid-vigor.entity';
import { FeedingRepository } from './repositories/feeding.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TypeOrmPostgresConfigService } from './configs/type-ormpostgres-config-service';
import { BreedEntity } from './entities/breeds.entity';
import { BreedRepository } from './repositories/breed.repository';
import { BreedService } from './services/breed.service';
import { FeedingService } from './services/feeding.service';
import { FeedingEntity } from './entities/feeding.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([BreedEntity, FeedingEntity, HybridVigorEntity]),
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    BreedRepository,
    BreedService,
    FeedingRepository,
    FeedingService,
    HybridVigorRepository,
    HybridVigorService,
  ],
  exports: [
    BreedService,
    BreedRepository,
    FeedingService,
    FeedingRepository,
    HybridVigorService,
    HybridVigorRepository,
  ],
})
export class PostgreSQLModule {}
