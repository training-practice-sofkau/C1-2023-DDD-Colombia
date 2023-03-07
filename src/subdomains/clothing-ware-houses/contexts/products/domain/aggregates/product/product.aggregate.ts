import { response } from 'express';
import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { InventoryDomainEntity } from '../../entities/inventory/inventory.domain-entity';
import { ProductDomainEntity } from '../../entities/product/product.domain-entity';
import { AddedProductEventPublisher } from '../../events/publishers/product/added-product.event-publisher';
import { GotProductEventPublisher } from '../../events/publishers/product/got-product.event-publisher';
import { GotProductsEventPublisher } from '../../events/publishers/product/got-products.event-publisher';
import { UpdatedDescriptionEventPublisher } from '../../events/publishers/product/updated-description.event-publisher';
import { UpdatedNameEventPublisher } from '../../events/publishers/product/updated-name.event-publisher';
import { UpdatedPriceEventPublisher } from '../../events/publishers/product/updated-price.event-publisher';
import { UpdatedStateEventPublisher } from '../../events/publishers/product/updated-state.event-publisher';
import { IInventoryDomainService } from '../../services/inventory.domain-service';
import { IProductDomainService } from '../../services/product.domain-service';
import { AddProductHelper } from '../helpers/product/add-product.helper';
import { GetAllProductsHelper } from '../helpers/product/get-all-products.helper';
import { GetProductHelper } from '../helpers/product/get-product.helper';
import { UpdateDescriptionHelper } from '../helpers/product/update-description.helper';
import { UpdateNameHelper } from '../helpers/product/update-name.helper';
import { UpdatePriceHelper } from '../helpers/product/update-price.helper';
import { UpdateStateHelper } from '../helpers/product/update-state.helper';

export class ProductAggregateRoot
  implements IInventoryDomainService, IProductDomainService
{
  private readonly productService?: IProductDomainService | undefined;
  private readonly inventoryService?: IInventoryDomainService;
  private readonly addedProductEventPublisher: AddedProductEventPublisher;
  private readonly gotProductsEventPublisher: GotProductsEventPublisher;
  private readonly gotProductEventPublisher: GotProductEventPublisher;
  private readonly updatedDescriptionEventPublisher: UpdatedDescriptionEventPublisher;
  private readonly updatedNameEventPublisher: UpdatedNameEventPublisher;
  private readonly updatedPriceEventPublisher: UpdatedPriceEventPublisher;
  private readonly updatedStateEventPublisher: UpdatedStateEventPublisher;

  constructor({
    productService,
    inventoryService,
    addedProductEventPublisher,
    gotProductsEventPublisher,
    gotProductEventPublisher,
    updatedDescriptionEventPublisher,
    updatedNameEventPublisher,
    updatedPriceEventPublisher,
    updatedStateEventPublisher,
  }: {
    productService?: IProductDomainService;
    inventoryService?: IInventoryDomainService;
    addedProductEventPublisher: AddedProductEventPublisher;
    gotProductsEventPublisher: GotProductsEventPublisher;
    gotProductEventPublisher: GotProductEventPublisher;
    updatedDescriptionEventPublisher: UpdatedDescriptionEventPublisher;
    updatedNameEventPublisher: UpdatedNameEventPublisher;
    updatedPriceEventPublisher: UpdatedPriceEventPublisher;
    updatedStateEventPublisher: UpdatedStateEventPublisher;
  }) {
    this.productService = productService;
    this.inventoryService = inventoryService;
    this.addedProductEventPublisher = addedProductEventPublisher;
    this.gotProductsEventPublisher = gotProductsEventPublisher;
    this.gotProductEventPublisher = gotProductEventPublisher;
    this.updatedDescriptionEventPublisher = updatedDescriptionEventPublisher;
    this.updatedNameEventPublisher = updatedNameEventPublisher;
    this.updatedPriceEventPublisher = updatedPriceEventPublisher;
    this.updatedStateEventPublisher = updatedStateEventPublisher;
  }

  async addProduct(product: ProductDomainEntity): Promise<ProductDomainEntity> {
    return AddProductHelper(
      product,
      this.addedProductEventPublisher,
      this.productService,
    );
  }

  async getProduct(productId: string): Promise<ProductDomainEntity> {
    return GetProductHelper(
      productId,
      this.gotProductEventPublisher,
      this.productService,
    );
  }
  getAllProducts(): Promise<ProductDomainEntity[]> {
    return GetAllProductsHelper(
      this.gotProductsEventPublisher,
      this.productService,
    );
  }
  updateName(
    productId: string,
    productName: string,
  ): Promise<ProductDomainEntity> {
    return UpdateNameHelper(
      productId,
      productName,
      this.updatedNameEventPublisher,
      this.productService,
    );
  }
  updatePrice(
    productId: string,
    productPrice: string,
  ): Promise<ProductDomainEntity> {
    return UpdatePriceHelper(
      productId,
      productPrice,
      this.updatedPriceEventPublisher,
      this.productService,
    );
  }
  updateDescription(
    productId: string,
    productDescription: string,
  ): Promise<ProductDomainEntity> {
    return UpdateDescriptionHelper(
      productId,
      productDescription,
      this.updatedDescriptionEventPublisher,
      this.productService,
    );
  }

  updateState(
    productId: string,
    productState: boolean,
  ): Promise<ProductDomainEntity> {
    return UpdateStateHelper(
      productId,
      productState,
      this.updatedDescriptionEventPublisher,
      this.productService,
    );
  }

  addInventory(): Promise<InventoryDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateAvailableQuantity(): Promise<InventoryDomainEntity> {
    throw new Error('Method not implemented.');
  }
  updateMiniumQuantityRequired(): Promise<InventoryDomainEntity> {
    throw new Error('Method not implemented.');
  }

  updateStateInv(): Promise<InventoryDomainEntity> {
    throw new Error('Method not implemented.');
  }
}
