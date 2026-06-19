import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

// Inicializa de forma limpia la aplicación llamando a tu clase raíz "App"
bootstrapApplication(App)
  .catch((err) => console.error(err));