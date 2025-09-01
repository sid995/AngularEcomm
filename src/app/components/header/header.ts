import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">My Store</span>
      <app-primary-button
        [label]="'Cart(' + cartService.cart().length + ')'"
        (btnClicked)="showButtonClicked()"
      />
    </div>
  `,
})
export class Header {
  cartService = inject(CartService);
  showButtonClicked() {
    console.log('Button clicked');
  }
}
