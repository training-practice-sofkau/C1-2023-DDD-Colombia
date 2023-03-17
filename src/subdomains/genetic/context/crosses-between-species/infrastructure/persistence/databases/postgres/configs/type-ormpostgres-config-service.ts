import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm/dist';
import { BreedEntity } from '../entities/breeds.entity';
import { FeedingEntity } from '../entities/feeding.entity';

@Injectable()
export class TypeOrmPostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [BreedEntity, FeedingEntity],
      synchronize: true,
      logging: true,
    };
  }
}
