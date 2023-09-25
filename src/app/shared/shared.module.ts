import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalculatePipe } from './pipes/calculate.pipe';


@NgModule({
  declarations: [
    CalculatePipe
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
    CalculatePipe
  ],

})
export class SharedModule { }
