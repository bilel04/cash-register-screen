import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  order: Product[] = [];

  constructor(
    private _router: Router,
  ) { }

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

  payOrder() {
    setTimeout(() => {
      this.order = [];
      this.order$.next(this.order);
      this._router.navigate(['products']).then();
    }, 1000)
  }

}
