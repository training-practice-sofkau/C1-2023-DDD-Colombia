import { DateValueObject } from '../../value-objects/inventory/date/date.value-object';
import { CategoryValueObject } from '../../value-objects/product/category/category.value.object';
import { DescriptionValueObject } from '../../value-objects/product/description/description.value-object';
import { GenderValueObject } from '../../value-objects/product/gender/gender.value-object';
import { NameValueObject } from '../../value-objects/product/name/name.value-object';
import { PriceValueObject } from '../../value-objects/product/price/price.value-object';
import { ProductIdValueObject } from '../../value-objects/product/product-id/product-id.value.object';
import { ReferenceNumberValueObject } from '../../value-objects/product/reference-number/reference-number-object';
import { StateValueObject } from '../../value-objects/product/state/state.value-object';
import { IInventoryDomainEntity } from '../inventory/interfaces/inventory.domain-entity.interface';
import { IProductDomainEntity } from './interfaces/product.domain-entity.interface';

/**
 * Entidad de dominio para el producto
 *
 * @export
 * @class ProductDomainEntity
 * @implements {IProductDomainEntity}
 */
export class ProductDomainEntity implements IProductDomainEntity {
  /**
   * Identificador del producto
   *
   * @type {(string | ProductIdValueObject)}
   * @memberof InventoryDomainEntity
   */
  productId?: string | ProductIdValueObject;

  /**
   * Inventario
   *
   * @type {(number | AvailableQuantityValueObject)}
   * @memberof InventoryDomainEntity
   */
  inventories?: IInventoryDomainEntity[];

  /**
   * Fecha del inventario
   *
   * @type {(string | DateValueObject)}
   * @memberof InventoryDomainEntity
   */
  date?: string | DateValueObject;

  /**
   * Precio del producto
   *
   * @type {(number | PriceValueObject)}
   * @memberof InventoryDomainEntity
   */
  price?: number | PriceValueObject;

  /**
   * Nombre del producto
   *
   * @type {(string | NameValueObject)}
   * @memberof InventoryDomainEntity
   */
  name?: string | NameValueObject;

  /**
   * Categoria del producto
   *
   * @type {(string | CategoryValueObject)}
   * @memberof ProductDomainEntity
   */
  category?: number | CategoryValueObject;

  /**
   * Descripcion del producto
   *
   * @type {(string | DescriptionValueObject)}
   * @memberof InventoryDomainEntity
   */
  description?: string | DescriptionValueObject;

  /**
   * Estado del producto
   *
   * @type {(string | StateValueObject)}
   * @memberof InventoryDomainEntity
   */
  state?: boolean | StateValueObject;

  /**
   * Genero del producto
   *
   * @type {(string | GenderValueObject)}
   * @memberof InventoryDomainEntity
   */
  gender?: string | GenderValueObject;

  /**
   * Numero de referencia de un producto
   *
   * @type {(string | ReferenceNumberValueObject)}
   * @memberof InventoryDomainEntity
   */
  referenceNumber?: string | ReferenceNumberValueObject;

  /**
   * Crea una instancia de ProductoDomainEntity
   *
   * @param {IProductDomainEntity} [data] Datos para inicializar la entidad
   * @memberof ProductDomainEntity
   */
  constructor(data?: IProductDomainEntity) {
    if (data?.productId) this.productId = data.productId;
    if (data?.inventories) this.inventories = data.inventories;
    if (data?.price) this.price = data.price;
    if (data?.name) this.name = data.name;
    if (data?.category) this.category = data.category;
    if (data?.description) this.description = data.description;
    if (data?.state) this.state = data.state;
    if (data?.gender) this.gender = data.gender;
    if (data?.referenceNumber) this.referenceNumber = data.referenceNumber;
  }
}
