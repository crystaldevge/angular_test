import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';

bootstrapApplication(HelloWorldComponent, appConfig)
  .catch((err) => console.error(err));
