import { FeedingRepository } from './../repositories/feeding.repository';
import { Injectable } from '@nestjs/common';
import { FeedingEntity } from '../entities/feeding.entity';
import { IFeedingService } from './interface/feeding-service-interface';
@Injectable()
export class FeedingService implements IFeedingService<FeedingEntity> {
  constructor(private readonly feedingRepository: FeedingRepository) {}

  createFeeding(Entity: FeedingEntity): Promise<FeedingEntity> {
    return this.feedingRepository.create(Entity);
  }
  updateFeeding(
    feedingId: string,
    Entity: FeedingEntity,
  ): Promise<FeedingEntity> {
    return this.feedingRepository.update(feedingId, Entity);
  }
  deleteFeeding(feedingId: string): Promise<boolean> {
    return this.feedingRepository.delete(feedingId);
  }
  findAllFeeding(): Promise<FeedingEntity[]> {
    return this.feedingRepository.findAll();
  }
  findOneByIdFeeding(id: string): Promise<FeedingEntity> {
    return this.feedingRepository.findOneById(id);
  }
}
