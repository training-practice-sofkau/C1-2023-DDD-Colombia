import { BreedRepository } from './../repositories/breed.repository';
import { Injectable } from '@nestjs/common';
import { BreedPostgresEntity } from '../entities/breeds-postgre.entity';
import { IBreedService } from './interface/breed-service.interface';

@Injectable()
export class BreedService implements IBreedService<BreedPostgresEntity> {
  constructor(private readonly breedRepository: BreedRepository) {}
  createBreed(Entity: BreedPostgresEntity): Promise<BreedPostgresEntity> {
    return this.breedRepository.create(Entity);
  }
  updateBreed(
    breedId: string,
    Entity: BreedPostgresEntity,
  ): Promise<BreedPostgresEntity> {
    return this.breedRepository.update(breedId, Entity);
  }
  deleteBreed(breedId: string): Promise<boolean> {
    return this.breedRepository.delete(breedId);
  }
  findAllBreed(): Promise<BreedPostgresEntity[]> {
    return this.breedRepository.findAll();
  }
  findOneByIdBreed(id: string): Promise<BreedPostgresEntity> {
    return this.breedRepository.findOneById(id);
  }
}
