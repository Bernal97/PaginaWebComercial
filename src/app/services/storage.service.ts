import { CartItemModel } from '../models/cart-item-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean{
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): void{
    const date = localStorage.getItem('cart');
    if (date) this.getCart = JSON.parse(date);
  }

  clear(): void{
    localStorage.removeItem('cart');
  }
}
