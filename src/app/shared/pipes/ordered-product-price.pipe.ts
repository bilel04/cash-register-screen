import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderedProductPrice'
})
export class OrderedProductPricePipe implements PipeTransform {

  transform(price: number, quantity: number): number {
    return price * quantity;
  }

}
