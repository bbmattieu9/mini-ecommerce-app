import {Component, inject} from '@angular/core';
import {CartService} from '../../data-access/cart.service';
import {CommonModule} from '@angular/common';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {OrderSummaryComponent} from '../order-summary/order-summary.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartSrv = inject(CartService);


}
