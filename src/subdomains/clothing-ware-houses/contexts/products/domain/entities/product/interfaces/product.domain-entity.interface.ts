import { CategoryValueObject } from '../../../value-objects/product/category/category.value.object';
import { DescriptionValueObject } from '../../../value-objects/product/description/description.value-object';
import { GenderValueObject } from '../../../value-objects/product/gender/gender.value-object';
import { NameValueObject } from '../../../value-objects/product/name/name.value-object';
import { PriceValueObject } from '../../../value-objects/product/price/price.value-object';
import { ProductIdValueObject } from '../../../value-objects/product/product-id/product-id.value.object';
import { ReferenceNumberValueObject } from '../../../value-objects/product/reference-number/reference-number-object';
import { StateValueObject } from '../../../value-objects/product/state/state.value-object';
import { IInventoryDomainEntity } from '../../inventory/interfaces/inventory.domain-entity.interface';

export interface IProductDomainEntity {
  productId?: string | ProductIdValueObject;
  inventories?: IInventoryDomainEntity[];
  price?: number | PriceValueObject;
  name?: string | NameValueObject;
  category?: number | CategoryValueObject;
  description?: string | DescriptionValueObject;
  state?: boolean | StateValueObject;
  gender?: string | GenderValueObject;
  referenceNumber?: string | ReferenceNumberValueObject;
}
