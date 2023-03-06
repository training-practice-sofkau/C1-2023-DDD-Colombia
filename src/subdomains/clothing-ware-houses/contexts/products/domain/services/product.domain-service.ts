import { ProductDomainEntity } from '../entities/product/product.domain-entity';
export interface IProductDomainService<Entity extends ProductDomainEntity> {
  addProduct(): Promise<Entity>;
  getProduct(productId: string): Promise<Entity>;
  getAllProducts(): Promise<Entity[]>;
  updateName(): Promise<Entity>;
  updatePrice(): Promise<Entity>;
  updateDescription(): Promise<Entity>;
  updateState(): Promise<Entity>;
}
