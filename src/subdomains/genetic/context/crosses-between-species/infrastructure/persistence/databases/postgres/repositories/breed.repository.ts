import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BreedEntity } from '../entities/breeds.entity';
import { IBaseRepository } from './interfaes/base.interface';

export class BreedRepository implements IBaseRepository<BreedEntity> {
  constructor(
    @InjectRepository(BreedEntity)
    private breedRepository: Repository<BreedEntity>,
  ) {}
  create(Entity: BreedEntity): Promise<BreedEntity> {
    return this.breedRepository.save(Entity);
  }
  async update(id: string, entity: BreedEntity): Promise<BreedEntity> {
    const data = await this.breedRepository.findOneBy({ breedId: id });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        breedId: id,
      };
      return this.breedRepository.save(newEntity);
    }
    throw new Error('breedId not found');
  }
  async delete(id: string): Promise<boolean> {
    const data = await this.breedRepository.findOneBy({ breedId: id });
    if (data) {
      await this.breedRepository.delete(data);
      return true;
    }
    throw new Error('breedId not found');
  }

  async findAll(): Promise<BreedEntity[]> {
    return this.breedRepository.find();
  }
  async findOneById(id: string): Promise<BreedEntity> {
    const data = await this.breedRepository.findOneBy({
      breedId: id,
    });
    if (data) return data;
    throw new Error('breedId not found');
  }
}
