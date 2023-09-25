import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  order: Product[] = [];

  constructor() { }

  getOrder() {
    return this.order$.asObservable();
  }

  addNewProduct(product: Product) {
    this.order.push(product)
    this.order$.next(this.order);
  }

  editPoductQuantity(product: Product) {
    this.order.filter(prod => {
      if (prod.id === product.id) {
        prod.quantity = product.quantity;
      }
    });
    this.order$.next([...this.order]);
  }

  retrieveProduct(id: number) {
    this.order = this.order.filter(r => r.id != id);
    this.order$.next(this.order);
  }

}