import { Component } from '@angular/core';
import { Subject, combineLatest, filter, map, takeUntil } from 'rxjs';
import { RouterEnum } from 'src/app/@core/router-enum';
import { Category } from 'src/app/shared/interfaces/category';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: []
})
export class ProductsComponent {
  products: Category[] = [];
  private destroy$ = new Subject<void>();
  title = RouterEnum.PRODUCTS;

  constructor(
    private _productsService: ProductsService,
    private _cartService: CartService
  ) {
  }

  getAllProducts() {
    combineLatest([this._productsService.getAllProducts(), this._cartService.order$])
      .pipe(
        map(([data, order]) => {
          data.categories.forEach(category => {
            category.products = category.products.filter((product: Product) => {
              order.some((element) => {
                if (product.id === element.id) {
                  product.quantity = element.quantity;
                }
              })
              return product;
            })
          });
          return data;
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe(r => {
        this.products = r.categories;
      });
  }

  addToCart(product: Product) {
    product.quantity = 1;
    this._cartService.addNewProduct(product);
  }

  addProductQuantity(product: Product) {
    product.quantity += 1;
    this._cartService.editPoductQuantity(product);
  }

  reduceProductQuantity(product: Product) {
    product.quantity -= 1;
    if (product.quantity != 0) {
      this._cartService.editPoductQuantity(product);
      return;
    }
    this._cartService.retrieveProduct(product.id);
  }

  ngOnInit() {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
