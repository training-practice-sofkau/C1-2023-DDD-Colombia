import { ProductDomainEntity } from '../entities/product/product.domain-entity';
export interface IProductDomainService<
  Entity extends ProductDomainEntity = ProductDomainEntity,
> {
  addProduct(product: Entity): Promise<Entity>;
  getProduct(productId: string): Promise<Entity>;
  getAllProducts(): Promise<Entity[]>;
  updateName(productId: string, productName: string): Promise<Entity>;
  updatePrice(productId: string, productPrice: string): Promise<Entity>;
  updateDescription(
    productId: string,
    productDescription: string,
  ): Promise<Entity>;
  updateState(productId: string, productState: boolean): Promise<Entity>;
}
