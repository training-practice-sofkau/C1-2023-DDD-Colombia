export interface IBaseRepository<Entity> {
  create(Entity: Entity): Promise<Entity>;
  update(id: string, Entity: Entity): Promise<Entity>;
  delete(id: string): Promise<boolean>;
  findAll(): Promise<Entity[]>;
  findOneById(id: string): Promise<Entity>;
}
