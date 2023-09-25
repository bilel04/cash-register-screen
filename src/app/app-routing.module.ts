import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
type PathMatch = "full" | "prefix" | undefined;

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./pages/modules/cart/cart.module').then(m => m.CartModule) },
  { path: '', redirectTo: 'products', pathMatch: 'full' as PathMatch },
  { path: '**', redirectTo: 'products' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
