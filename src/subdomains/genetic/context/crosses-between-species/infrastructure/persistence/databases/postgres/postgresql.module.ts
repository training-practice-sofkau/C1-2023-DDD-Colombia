import { HybridVigorService } from './services/hybrid-vigor.service';
import { HybridVigorRepository } from './repositories/hybrid-vigor.repository';
import { HybridVigorEntity } from './entities/hybrid-vigor.entity';
import { FeedingRepository } from './repositories/feeding.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TypeOrmPostgresConfigService } from './configs/type-ormpostgres-config-service';
import { BreedPostgresEntity } from './entities/breeds-postgre.entity';
import { BreedRepository } from './repositories/breed.repository';
import { BreedService } from './services/breed.service';
import { FeedingService } from './services/feeding.service';
import { FeedingPostgresEntity } from './entities/feeding-postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([
      BreedPostgresEntity,
      FeedingPostgresEntity,
      HybridVigorEntity,
    ]),
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
