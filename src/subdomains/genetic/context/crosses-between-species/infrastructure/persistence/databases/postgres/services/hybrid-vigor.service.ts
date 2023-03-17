import { HybridVigorRepository } from './../repositories/hybrid-vigor.repository';
import { HybridVigorEntity } from './../entities/hybrid-vigor.entity';
import { Injectable } from '@nestjs/common';
import { IHybridVigorService } from './interface/hybrid-vigor.interface';
@Injectable()
export class HybridVigorService
  implements IHybridVigorService<HybridVigorEntity>
{
  constructor(private readonly hybridVigorRepository: HybridVigorRepository) {}
  createHybridVigor(Entity: HybridVigorEntity): Promise<HybridVigorEntity> {
    return this.hybridVigorRepository.create(Entity);
  }
  updateHybridVigor(
    hybridVigorId: string,
    Entity: HybridVigorEntity,
  ): Promise<HybridVigorEntity> {
    return this.hybridVigorRepository.update(hybridVigorId, Entity);
  }
  deleteHybridVigor(hybridVigorId: string): Promise<boolean> {
    return this.hybridVigorRepository.delete(hybridVigorId);
  }
  findAllHybridVigor(): Promise<HybridVigorEntity[]> {
    return this.hybridVigorRepository.findAll();
  }
}
