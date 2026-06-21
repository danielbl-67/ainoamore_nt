import { Component } from '@angular/core';


@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {


  blogPosts = [
    {
      id: 1,
      titulo: 'Mitos del cardio en ayunas: ¿Es superior para perder grasa?',
      fecha: '18 Jun, 2026',
      categoria: 'Ciencia Deportiva',
      extracto: 'Desmentimos la creencia popular analizando la evidencia científica real detrás de la oxidación de lípidos a primera hora.',
      imagen: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400'
    },
    {
      id: 2,
      titulo: 'La importancia crítica del NEAT en tu déficit calórico',
      fecha: '14 Jun, 2026',
      categoria: 'Nutrición',
      extracto: 'Descubre por qué la actividad diaria no asociada al ejercicio físico es tu mejor aliada para acelerar resultados.',
      imagen: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400'
    }
  ];
  
}