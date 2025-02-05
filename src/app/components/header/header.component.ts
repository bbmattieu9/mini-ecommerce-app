import {Component, inject, signal, WritableSignal} from '@angular/core';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';
import {CartService} from '../../data-access/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PrimaryButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

cartSrv = inject(CartService);
}
