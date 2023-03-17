import { IBaseRepository } from './interfaes/base.interface';
import { FeedingPostgresEntity } from '../entities/feeding-postgres.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
export class FeedingRepository
  implements IBaseRepository<FeedingPostgresEntity>
{
  constructor(
    @InjectRepository(FeedingPostgresEntity)
    private feedingRepository: Repository<FeedingPostgresEntity>,
  ) {}
  create(Entity: FeedingPostgresEntity): Promise<FeedingPostgresEntity> {
    return this.feedingRepository.save(Entity);
  }
  async update(
    id: string,
    Entity: FeedingPostgresEntity,
  ): Promise<FeedingPostgresEntity> {
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
  async findAll(): Promise<FeedingPostgresEntity[]> {
    return this.feedingRepository.find();
  }
  async findOneById(id: string): Promise<FeedingPostgresEntity> {
    const data = await this.feedingRepository.findOneBy({
      feedingId: id,
    });
    if (data) return data;
    throw new Error('feedingId not found');
  }
}
