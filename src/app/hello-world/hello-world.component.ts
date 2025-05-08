import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


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
    this.isVisible = !this.isVisible;
  }

}
