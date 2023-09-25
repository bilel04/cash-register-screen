import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { RouterEnum } from 'src/app/@core/router-enum';
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
  private destroy$ = new Subject<void>();
  title = RouterEnum.CART;
  
  constructor(
    private _cartService: CartService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {

  }

  getOrder() {
    this._cartService.getOrder()
      .pipe(takeUntil(this.destroy$))
      .subscribe(r => {
        this.products = r;
      })
  }

  payOrder(content: any) {
    this._cartService.payOrder();
    this._snackBar.openFromComponent(content, {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'pay-cart-snack-bar'
    });
  }

  goBack() {
    this._router.navigate(['products']).then();
  }

  ngOnInit() {
    this.getOrder();
    if (this.products.length === 0) {
      this._router.navigate(['products']).then(); // Dans une situation avancée, on implémente un Guard pour résoudre ce routage
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
