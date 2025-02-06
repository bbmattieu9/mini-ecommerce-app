import {Component, inject, input} from '@angular/core';
import {Product} from '../../types/product.interface';
import {ButtonComponent} from '../../components/button/button.component';
import {CartService} from '../../data-access/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  cartSrv = inject(CartService);
  cartItem = input.required<Product>();

}
