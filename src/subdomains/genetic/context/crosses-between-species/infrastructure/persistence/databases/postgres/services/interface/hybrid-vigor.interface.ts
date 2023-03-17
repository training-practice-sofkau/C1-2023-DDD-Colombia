export interface IHybridVigorService<Entity> {
  createHybridVigor(Entity: Entity): Promise<Entity>;
  updateHybridVigor(hybridVigorId: string, Entity: Entity): Promise<Entity>;
  deleteHybridVigor(hybridVigorId: string): Promise<boolean>;
  findAllHybridVigor(): Promise<Entity[]>;
}
