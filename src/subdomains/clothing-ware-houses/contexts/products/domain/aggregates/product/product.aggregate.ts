import { InventoryDomainEntity } from '../../entities/inventory/inventory.domain-entity';
import { ProductDomainEntity } from '../../entities/product/product.domain-entity';
import { AddedInventoryEventPublisher } from '../../events/publishers/inventory/added-inventory.event-publisher';
import { UpdatedAvailableQuantityEventPublisher } from '../../events/publishers/inventory/update-available-quantity';
import { AddedProductEventPublisher } from '../../events/publishers/product/added-product.event-publisher';
import { GotProductEventPublisher } from '../../events/publishers/product/got-product.event-publisher';
import { GotProductsEventPublisher } from '../../events/publishers/product/got-products.event-publisher';
import { UpdatedDescriptionEventPublisher } from '../../events/publishers/product/updated-description.event-publisher';
import { UpdatedNameEventPublisher } from '../../events/publishers/product/updated-name.event-publisher';
import { UpdatedPriceEventPublisher } from '../../events/publishers/product/updated-price.event-publisher';
import { UpdatedStateEventPublisher } from '../../events/publishers/product/updated-state.event-publisher';
import { IInventoryDomainService } from '../../services/inventory.domain-service';
import { IProductDomainService } from '../../services/product.domain-service';
import { AddInventoryHelper } from '../helpers/inventory/add-inventory.helper';
import { UpdateAvailableQuantityHelper } from '../helpers/inventory/update-available-quantity.helper';
import { UpdateMiniumAvailableQuantityHelper } from '../helpers/inventory/update-minium-quantity-required';
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
  private readonly addedInventorytEventPublisher: AddedInventoryEventPublisher;
  private readonly updatedAvailableQuantityEventPublisher: UpdatedAvailableQuantityEventPublisher;

  constructor({
    productService,
    inventoryService,
    addedProductEventPublisher,
    addedInventoryEventPublisher,
    gotProductsEventPublisher,
    gotProductEventPublisher,
    updatedDescriptionEventPublisher,
    updatedNameEventPublisher,
    updatedPriceEventPublisher,
    updatedStateEventPublisher,
    updatedAvailableQuantityEventPublisher,
  }: {
    productService?: IProductDomainService;
    inventoryService?: IInventoryDomainService;
    addedProductEventPublisher: AddedProductEventPublisher;
    addedInventoryEventPublisher: AddedInventoryEventPublisher;
    gotProductsEventPublisher: GotProductsEventPublisher;
    gotProductEventPublisher: GotProductEventPublisher;
    updatedDescriptionEventPublisher: UpdatedDescriptionEventPublisher;
    updatedNameEventPublisher: UpdatedNameEventPublisher;
    updatedPriceEventPublisher: UpdatedPriceEventPublisher;
    updatedStateEventPublisher: UpdatedStateEventPublisher;
    updatedAvailableQuantityEventPublisher: UpdatedAvailableQuantityEventPublisher;
  }) {
    this.productService = productService;
    this.inventoryService = inventoryService;
    this.addedProductEventPublisher = addedProductEventPublisher;
    this.addedInventorytEventPublisher = addedInventoryEventPublisher;
    this.gotProductsEventPublisher = gotProductsEventPublisher;
    this.gotProductEventPublisher = gotProductEventPublisher;
    this.updatedDescriptionEventPublisher = updatedDescriptionEventPublisher;
    this.updatedNameEventPublisher = updatedNameEventPublisher;
    this.updatedPriceEventPublisher = updatedPriceEventPublisher;
    this.updatedStateEventPublisher = updatedStateEventPublisher;
    this.updatedAvailableQuantityEventPublisher =
      updatedAvailableQuantityEventPublisher;
  }

  async addProduct(product: ProductDomainEntity): Promise<ProductDomainEntity> {
    return AddProductHelper(
      product,
      this.addedProductEventPublisher,
      this.productService,
    );
  }

  getProduct(productId: string): Promise<ProductDomainEntity> {
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
      this.updatedStateEventPublisher,
      this.productService,
    );
  }

  addInventory(
    inventory: InventoryDomainEntity,
  ): Promise<InventoryDomainEntity> {
    return AddInventoryHelper(
      inventory,
      this.addedInventorytEventPublisher,
      this.inventoryService,
    );
  }
  updateAvailableQuantity(
    inventoryId: string,
    availableQuantity: number,
  ): Promise<InventoryDomainEntity> {
    return UpdateAvailableQuantityHelper(
      inventoryId,
      availableQuantity,
      this.updatedAvailableQuantityEventPublisher,
      this.inventoryService,
    );
  }
  updateMiniumQuantityRequired(
    inventoryId: string,
    miniumQuantityRequired: number,
  ): Promise<InventoryDomainEntity> {
    return UpdateMiniumAvailableQuantityHelper(
      inventoryId,
      miniumQuantityRequired,
      this.updatedAvailableQuantityEventPublisher,
      this.inventoryService,
    );
  }
}
