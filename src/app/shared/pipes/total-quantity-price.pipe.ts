import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'totalQuantityPrice'
})
export class TotalQuantityPricePipe implements PipeTransform {

  transform(product: Product[], type: string): number {
    if (type === 'quantity') {
      return product.reduce((acc, curr) => acc + curr.quantity, 0);
    }
    return product.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  }

}
