import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TypeOrmPostgresConfigService } from './configs/type-ormpostgres-config-service';
import { BreedEntity } from './entities/breeds.entity';
import { BreedRepository } from './repositories/breed.repository';
import { BreedService } from './services/breed.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([BreedEntity]),
  ],
  controllers: [],
  providers: [TypeOrmPostgresConfigService, BreedRepository, BreedService],
  exports: [BreedService, BreedRepository],
})
export class PostgreSQLModule {}
