import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './pages/components/products/products.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SharedModule } from "./shared/shared.module";

registerLocaleData(localeFr, 'fr'); // Définier la langue fr comme étant langue locale, je l'utilise dans le but d'afficher le currency code après le montant de produit.

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        CartComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        NgbModule,
        FormsModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'fr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient],
            }
        }),
        AppRoutingModule,
        MatTabsModule,
        MatCardModule,
        SharedModule
    ]
})
export class AppModule { }
