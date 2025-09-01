import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="cursor-pointer text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate-50"
      (click)="btnClicked.emit()"
      rou
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class Button {
  label = input('');
  btnClicked = output();
}
