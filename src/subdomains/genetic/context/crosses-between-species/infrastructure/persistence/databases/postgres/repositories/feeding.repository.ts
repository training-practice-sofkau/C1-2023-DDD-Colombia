import { IBaseRepository } from './interfaes/base.interface';
import { FeedingEntity } from './../entities/feeding.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
export class FeedingRepository implements IBaseRepository<FeedingEntity> {
  constructor(
    @InjectRepository(FeedingEntity)
    private feedingRepository: Repository<FeedingEntity>,
  ) {}
  create(Entity: FeedingEntity): Promise<FeedingEntity> {
    return this.feedingRepository.save(Entity);
  }
  async update(id: string, Entity: FeedingEntity): Promise<FeedingEntity> {
    const data = await this.feedingRepository.findOneBy({ feedingId: id });
    if (data) {
      const newEntity = {
        ...data,
        ...Entity,
        feedingId: id,
      };
      return this.feedingRepository.save(newEntity);
    }
    throw new Error('feedingId not found');
  }
  async delete(id: string): Promise<boolean> {
    const data = await this.feedingRepository.findOneBy({ feedingId: id });
    if (data) {
      await this.feedingRepository.delete(data);
      return true;
    }
    throw new Error('feedingId not found');
  }
  async findAll(): Promise<FeedingEntity[]> {
    return this.feedingRepository.find();
  }
  async findOneById(id: string): Promise<FeedingEntity> {
    const data = await this.feedingRepository.findOneBy({
      feedingId: id,
    });
    if (data) return data;
    throw new Error('feedingId not found');
  }
}
