import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { ModalsCreditCardComponent } from './components/modals-credit-card/modals-credit-card.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductMainComponent } from './components/product-main/product-main.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-item', component: ProductItemComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart-item/:id', component: CartItemComponent},
  {path: 'product-main', component: ProductMainComponent},
  {path: 'modal', component: ModalsComponent},
  {path: 'modal2', component: ModalsCreditCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
