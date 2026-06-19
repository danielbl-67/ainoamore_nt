import { Component } from '@angular/core';
import { TiktokCarruselComponent } from './components/tiktok-carrusel.component/tiktok-carrusel.component';
import { RecetasComponent } from './components/recetas.component/recetas.component';
import { BlogComponent } from './components/blog.component/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Añadimos tus nuevos componentes aquí para poder usarlos en el archivo HTML global
  imports: [TiktokCarruselComponent, RecetasComponent, BlogComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
  /**
   * Método disparador para la acción principal de conversión de la web
   */
  agendarCita() {
    alert('Redirigiendo a tu pasarela de Calendly o WhatsApp para agendar asesoría...');
  }
}