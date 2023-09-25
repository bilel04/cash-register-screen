import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/classes/menu';
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

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {

  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(r => {
      this.products = r.categories;
    });
  }

  addToCart(product: Product) {
    product.quantity = 1;
    this.cartService.addNewProduct(product);
  }

  addProductQuantity(product: Product) {
    product.quantity += 1;
    this.cartService.editPoductQuantity(product);
  }

  reduceProductQuantity(product: Product) {
    product.quantity -= 1;
    if (product.quantity != 0) {
      this.cartService.editPoductQuantity(product);
      return;
    }
    this.cartService.retrieveProduct(product.id);
  }

  data() {
    this.cartService.order$.subscribe(r => {
      console.log(r)
    })
  }

  ngOnInit() {
    this.getAllProducts();
  }
}
