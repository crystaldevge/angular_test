// bootstrap.ts
import '@angular/compiler'
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';
import { UsersComponent } from './app/users/users.component';


export const mount = (el: Element) => {
  const hostElem = document.createElement('app-hello-world');
  el.appendChild(hostElem);

  bootstrapApplication(HelloWorldComponent, appConfig)
    .catch((err) => console.error(err));

};


// export const mount = (el: Element) => {

//   const userElem = document.createElement('app-users');
//   el.appendChild(userElem);

//   bootstrapApplication(UsersComponent, appConfig)
//     .catch((err) => console.error(err));


// };

// Standalone mode
if (document.querySelector('app-hello-world')) {
  mount(document.querySelector('app-hello-world')!);
  // mount(document.querySelector('app-hello-world')!);
}


// if (document.querySelector('app-users')) {
//   mount(document.querySelector('app-users')!);
// }