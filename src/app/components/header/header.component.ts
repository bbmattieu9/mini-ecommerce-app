import {Component, signal, WritableSignal} from '@angular/core';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';

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


}
