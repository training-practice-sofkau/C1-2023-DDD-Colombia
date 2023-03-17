import { FeedingRepository } from './../repositories/feeding.repository';
import { Injectable } from '@nestjs/common';
import { FeedingPostgresEntity } from '../entities/feeding-postgres.entity';
import { IFeedingService } from './interface/feeding-service-interface';
@Injectable()
export class FeedingService implements IFeedingService<FeedingPostgresEntity> {
  constructor(private readonly feedingRepository: FeedingRepository) {}

  createFeeding(Entity: FeedingPostgresEntity): Promise<FeedingPostgresEntity> {
    return this.feedingRepository.create(Entity);
  }
  updateFeeding(
    feedingId: string,
    Entity: FeedingPostgresEntity,
  ): Promise<FeedingPostgresEntity> {
    return this.feedingRepository.update(feedingId, Entity);
  }
  deleteFeeding(feedingId: string): Promise<boolean> {
    return this.feedingRepository.delete(feedingId);
  }
  findAllFeeding(): Promise<FeedingPostgresEntity[]> {
    return this.feedingRepository.findAll();
  }
  findOneByIdFeeding(id: string): Promise<FeedingPostgresEntity> {
    return this.feedingRepository.findOneById(id);
  }
}
