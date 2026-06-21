import { Component } from '@angular/core';


import { TiktokCarruselComponent } from './components/tiktok-carrusel.component/tiktok-carrusel.component';
import { RecetasComponent } from './components/recetas.component/recetas.component';
import { BlogComponent } from './components/blog.component/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [TiktokCarruselComponent, RecetasComponent, BlogComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  /**
   * Redirige al sistema de reservas oficial
   */
  agendarCita(): void {
    window.open('https://wa.me/tu-numero-de-whatsapp', '_blank');
  }
}