import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button routerLink="/" class="text-xl cursor-pointer">My Store</button>
      <app-primary-button [label]="'Cart(' + cartService.cart().length + ')'" routerLink="/cart" />
    </div>
  `,
})
export class HeaderComponent {
  cartService = inject(CartService);
}
