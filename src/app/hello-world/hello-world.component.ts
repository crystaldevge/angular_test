import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `
    <div class="hello">
      Hello World Component Works!
      <button
        (click)="title = 'Hello Angular Standalone!'"
        class="btn btn-primary" 
        type="button"
      >
        Click
      </button>
    </div>
  `,
  styles: [`
    .hello {
      color: blue;
      font-size: 24px;
    }
  `],
})
export class HelloWorldComponent {
  title = 'Hello World!';
}
