import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HybridVigorEntity } from '../entities/hybrid-vigor.entity';
import { IBaseRepository } from './interfaes/base.interface';

export class HybridVigorRepository
  implements IBaseRepository<HybridVigorEntity>
{
  constructor(
    @InjectRepository(HybridVigorEntity)
    private hybridVigorRepository: Repository<HybridVigorEntity>,
  ) {}
  create(Entity: HybridVigorEntity): Promise<HybridVigorEntity> {
    return this.hybridVigorRepository.save(Entity);
  }
  async update(
    id: string,
    Entity: HybridVigorEntity,
  ): Promise<HybridVigorEntity> {
    const data = await this.hybridVigorRepository.findOneBy({
      hybridVigorId: id,
    });
    if (data) {
      const newEntity = {
        ...data,
        ...Entity,
        hybridVigorId: id,
      };
      return this.hybridVigorRepository.save(newEntity);
    }
    throw new Error('hybridVigorId not found');
  }
  async delete(id: string): Promise<boolean> {
    const data = await this.hybridVigorRepository.findOneBy({
      hybridVigorId: id,
    });
    if (data) {
      await this.hybridVigorRepository.delete(data);
      return true;
    }
    throw new Error('hybridVigorId not found');
  }
  async findAll(): Promise<HybridVigorEntity[]> {
    return this.hybridVigorRepository.find();
  }
  async findOneById(id: string): Promise<HybridVigorEntity> {
    const data = await this.hybridVigorRepository.findOneBy({
      hybridVigorId: id,
    });
    if (data) return data;
    throw new Error('hybridVigorId not found');
  }
}
