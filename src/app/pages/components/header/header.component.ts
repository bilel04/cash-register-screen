import { Component } from '@angular/core';
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
    private cartService: CartService
  ) {

  }

  ngOnInit() {
    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang() ?? '');
    } else {
      this.translate.use('fr');
    }
    this.cartService.order$.subscribe(r => {
      this.total = r.length;
    });
  }
}
