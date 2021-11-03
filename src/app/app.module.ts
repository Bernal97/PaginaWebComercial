import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ModalsCreditCardComponent } from './components/modals-credit-card/modals-credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductMainComponent,
    ModalsComponent,
    ModalsCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
