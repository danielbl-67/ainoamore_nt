import { Component } from '@angular/core';

// IMPORTACIONES: Apuntando exactamente a la estructura de tus carpetas reales
import { TiktokCarruselComponent } from './components/tiktok-carrusel.component/tiktok-carrusel.component';
import { RecetasComponent } from './components/recetas.component/recetas.component';
import { BlogComponent } from './components/blog.component/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Registramos los tres subcomponentes para que el HTML global los reconozca
  imports: [TiktokCarruselComponent, RecetasComponent, BlogComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
  /**
   * Acción principal de la web.
   * Simula la redirección para agendar una asesoría de entrenamiento/nutrición.
   */
  agendarCita() {
    alert('Redirigiendo a tu pasarela de Calendly o WhatsApp para agendar asesoría...');
  }
}