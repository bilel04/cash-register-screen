import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  transform(price: number, tva: number): number {
    return price / tva + price;
  }

}
