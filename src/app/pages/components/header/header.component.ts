import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LANG } from 'src/app/@core/language';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  total!: number;
  languages = LANG;
  form!: FormGroup<{ language: any; }>;
  languageControl!: FormControl<string | null>;


  constructor(
    public _translate: TranslateService,
    private _cartService: CartService,
    private _router: Router
  ) {
    if (this._translate.getBrowserLang() !== undefined) {
      this._translate.use(this._translate.getBrowserLang() ?? '');
    } else {
      this._translate.use('fr');
    }
    this.setLanguageForm();
  }

  setLanguageForm() {
    this.languageControl = new FormControl(this._translate.currentLang);
    this.form = new FormGroup({
      language: this.languageControl,
    });
  }

  navigateCart() {
    this._router.navigate(['cart']).then();
  }

  selectLanguage(e: any) {
    console.log(e)
  }

  ngOnInit() {
    this._cartService.order$.subscribe(r => {
      this.total = r.reduce((acc, curr) => acc + curr.quantity, 0)
    });
  }
}
