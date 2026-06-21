import { Component } from '@angular/core';


import { TiktokCarruselComponent } from './components/tiktok-carrusel.component/tiktok-carrusel.component';
import { RecetasComponent } from './components/recetas.component/recetas.component';
import { BlogComponent } from './components/blog.component/blog.component';
// NUEVOS IMPORTS:
import { ServiciosComponent } from './components/servicios.component/servicios.component';
import { FaqComponent } from './components/faq.component/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TiktokCarruselComponent, 
    RecetasComponent, 
    BlogComponent,
    ServiciosComponent, 
    FaqComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  agendarCita() {
    window.open('https://wa.me/34600000000', '_blank');
  }
}