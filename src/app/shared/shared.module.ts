import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalculatePipe } from './pipes/calculate.pipe';
import { OrderedProductPricePipe } from './pipes/ordered-product-price.pipe';
import { TotalQuantityPricePipe } from './pipes/total-quantity-price.pipe';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';


@NgModule({
  declarations: [
    CalculatePipe,
    TotalQuantityPricePipe,
    OrderedProductPricePipe,
    BreadcumbComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    CurrencyMaskModule,
  ],
  exports: [
    TranslateModule,
    FormsModule,
    NgbModule,
    CurrencyMaskModule,
    CalculatePipe,
    OrderedProductPricePipe,
    TotalQuantityPricePipe,
    BreadcumbComponent
  ],

})
export class SharedModule { }
