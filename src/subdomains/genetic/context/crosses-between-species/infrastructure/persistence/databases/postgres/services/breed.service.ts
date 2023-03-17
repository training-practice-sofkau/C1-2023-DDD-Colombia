import { BreedRepository } from './../repositories/breed.repository';
import { Injectable } from '@nestjs/common';
import { BreedEntity } from '../entities/breeds.entity';
import { IBreedService } from './interface/breed-service.interface';

@Injectable()
export class BreedService implements IBreedService<BreedEntity> {
  constructor(private readonly breedRepository: BreedRepository) {}
  createBreed(Entity: BreedEntity): Promise<BreedEntity> {
    return this.breedRepository.create(Entity);
  }
  updateBreed(breedId: string, Entity: BreedEntity): Promise<BreedEntity> {
    return this.breedRepository.update(breedId, Entity);
  }
  deleteBreed(breedId: string): Promise<boolean> {
    return this.breedRepository.delete(breedId);
  }
  findAllBreed(): Promise<BreedEntity[]> {
    return this.breedRepository.findAll();
  }
  findOneByIdBreed(id: string): Promise<BreedEntity> {
    return this.breedRepository.findOneById(id);
  }
}
