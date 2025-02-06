import {Component, computed, inject} from '@angular/core';
import {CartService} from '../../data-access/cart.service';
import {PrimaryButtonComponent} from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    PrimaryButtonComponent
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

  cartSrv = inject(CartService);
  total = computed(() => {
    let total = 0;
    for (const item of this.cartSrv.cart()) {
      total += item.price;
    }
    return total;
  })

}
