export interface IBreedService<Entity> {
  createBreed(Entity: Entity): Promise<Entity>;
  updateBreed(breedId: string, Entity: Entity): Promise<Entity>;
  deleteBreed(breedId: string): Promise<boolean>;
  findAllBreed(): Promise<Entity[]>;
  findOneByIdBreed(id: string): Promise<Entity>;
}
