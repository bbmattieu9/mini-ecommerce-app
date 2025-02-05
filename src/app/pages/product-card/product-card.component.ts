import {Component, input} from '@angular/core';
import {Product} from '../../types/product.interface';
import {PrimaryButtonComponent} from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    PrimaryButtonComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  product = input.required<Product>();

}
