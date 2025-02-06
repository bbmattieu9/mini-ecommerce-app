import {Component, inject, signal, WritableSignal} from '@angular/core';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';
import {CartService} from '../../data-access/cart.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PrimaryButtonComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

cartSrv = inject(CartService);
}
