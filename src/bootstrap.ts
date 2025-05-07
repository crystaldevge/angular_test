// bootstrap.ts
import '@angular/compiler'
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';

export const mount = (el: Element) => {
  const hostElem = document.createElement('app-hello-world');
  el.appendChild(hostElem);

  bootstrapApplication(HelloWorldComponent, appConfig)
    .catch((err) => console.error(err));
};

// Standalone mode
if (document.querySelector('app-hello-world')) {
  mount(document.querySelector('app-hello-world')!);
}
