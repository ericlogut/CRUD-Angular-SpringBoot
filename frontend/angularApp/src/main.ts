import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig, // Los ... expanden el objeto appConfig y añade sus propiedades al objeto
  providers: [
    provideHttpClient(),      // Ya no es necesario HttpClientModule, permite inyectar servicios standalone
    provideRouter(routes),    // Permite usar rutas sin necesidad de NgModule
    ...(appConfig.providers || []) // Para no perder otros providers que pueda haber configurados
  ]
})
.catch((err) => console.error(err));
