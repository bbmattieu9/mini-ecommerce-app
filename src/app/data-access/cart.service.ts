import {Injectable, signal} from '@angular/core';
import {Product} from '../types/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
}
