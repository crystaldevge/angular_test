import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createHtml } from 'native_app/NativeElement';



@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hello">
      This is Angular Page!
      <button
        (click)="toggle()"
        class="btn btn-primary" 
        type="button"
      >
        Click
      </button>
      <div id="app"></div>
      <div *ngIf="isVisible">
        <message-component message="Hello from Angular!" type="success"></message-component>
      </div>
    </div>
  `,
  styles: [`
    .hello {
      color: blue;
      font-size: 24px;
    }
  `],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelloWorldComponent {
  title = 'Hello World!';

  isVisible = false;  // ✅ Bool ტიპის state

  toggle() {
    setTimeout(() => {
    createHtml(); // დამაჯერებლად დარწმუნდით, რომ DOM უკვე გამზადებულია
  }, 0);
    // ✅ State-ის შეცვლა
    this.isVisible = !this.isVisible;
  }


}
