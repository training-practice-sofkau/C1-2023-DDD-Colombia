import { UsuarioDomainEntity } from '../entities/usuario.domain-entity';

export interface IUsuarioDomainService<Entity extends UsuarioDomainEntity> {
  getUser(userId: string): Promise<Entity>;
  getAllUsers(): Promise<Entity[]>;
}
