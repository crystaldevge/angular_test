import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';

const bootstrap = () => bootstrapApplication(HelloWorldComponent, config);

export default bootstrap;
