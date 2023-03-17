import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BreedPostgresEntity } from '../entities/breeds-postgre.entity';
import { IBaseRepository } from './interfaes/base.interface';

export class BreedRepository implements IBaseRepository<BreedPostgresEntity> {
  constructor(
    @InjectRepository(BreedPostgresEntity)
    private breedRepository: Repository<BreedPostgresEntity>,
  ) {}
  create(Entity: BreedPostgresEntity): Promise<BreedPostgresEntity> {
    return this.breedRepository.save(Entity);
  }
  async update(
    id: string,
    entity: BreedPostgresEntity,
  ): Promise<BreedPostgresEntity> {
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

  async findAll(): Promise<BreedPostgresEntity[]> {
    return this.breedRepository.find();
  }
  async findOneById(id: string): Promise<BreedPostgresEntity> {
    const data = await this.breedRepository.findOneBy({
      breedId: id,
    });
    if (data) return data;
    throw new Error('breedId not found');
  }
}
