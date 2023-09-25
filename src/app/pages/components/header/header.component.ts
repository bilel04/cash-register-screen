import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  total!: number;

  constructor(
    public translate: TranslateService,
    private cartService: CartService,
    private router: Router
  ) {
    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang() ?? '');
    } else {
      this.translate.use('fr');
    }
  }

  navigateCart() {
    this.router.navigate(['cart']).then();
  }

  ngOnInit() {
    this.cartService.order$.subscribe(r => {
      this.total = r.reduce((acc, curr) => acc + curr.quantity, 0)
    });
  }
}
