export interface IFeedingService<Entity> {
  createFeeding(Entity: Entity): Promise<Entity>;
  updateFeeding(feedingId: string, Entity: Entity): Promise<Entity>;
  deleteFeeding(feedingId: string): Promise<boolean>;
  findAllFeeding(): Promise<Entity[]>;
  findOneByIdFeeding(id: string): Promise<Entity>;
}
