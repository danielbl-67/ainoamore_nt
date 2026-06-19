import { Component } from '@angular/core';



@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  // Artículos informativos del perfil clínico/deportivo
  blogPosts = [
    {
      id: 1,
      titulo: 'Mitos del cardio en ayunas: ¿Realidad o marketing?',
      categoria: 'Entrenamiento',
      fecha: '18 Jun, 2026',
      extracto: 'Analizamos la evidencia científica actual detrás de la quema de grasa a primera hora de la mañana.',
      imagen: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500'
    },
    {
      id: 2,
      titulo: 'Cómo calcular tus macronutrientes sin obsesionarte',
      categoria: 'Nutrición',
      fecha: '12 Jun, 2026',
      extracto: 'Una guía paso a paso para aprender a distribuir tus macros de forma flexible.',
      imagen: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=500'
    }
  ];

  /**
   * Carga el enrutamiento hacia la lectura completa de un post
   */
  leerArticulo(id: number) {
    console.log(`Abriendo post informativo: ${id}`);
  }
}