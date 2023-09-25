import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: Product[] = [];
  total!: number;
  constructor(
    private cartService: CartService,
    private router: Router
  ) {

  }

  getOrder() {
    this.cartService.getOrder().subscribe(r => {
      this.products = r;
    })
  }

  ngOnInit() {
    this.getOrder();
    if (this.products.length === 0) {
      this.router.navigate(['products']).then(); // Dans une situation avancée, on implémente un Guard pour résoudre cette navigation
    }
  }
}
