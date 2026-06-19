import { Component } from '@angular/core';

// Interfaz para asegurar la estructura limpia de cada artículo
interface PostBlog {
  id: number;
  titulo: string;
  extracto: string;
  fecha: string;
  categoria: string;
  imagen: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  // Listado de artículos del blog de la entrenadora/nutricionista
  blogPosts: PostBlog[] = [
    {
      id: 1,
      titulo: 'Mitos del cardio en ayunas: ¿Realidad o marketing?',
      categoria: 'Entrenamiento',
      fecha: '18 Jun, 2026',
      extracto: 'Analizamos la evidencia científica actual detrás de la quema de grasa a primera hora de la mañana. ¿Es realmente superior?',
      imagen: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500'
    },
    {
      id: 2,
      titulo: 'Cómo calcular tus macronutrientes sin obsesionarte',
      categoria: 'Nutrición',
      fecha: '12 Jun, 2026',
      extracto: 'Una guía paso a paso para aprender a distribuir tus proteínas, grasas y carbohidratos de forma flexible y saludable.',
      imagen: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=500'
    },
    {
      id: 3,
      titulo: 'El descanso: El factor olvidado en la ganancia muscular',
      categoria: 'Bienestar',
      fecha: '05 Jun, 2026',
      extracto: 'Si entrenas duro pero no duermes lo suficiente, estás limitando tus resultados. Descubre qué pasa en tu cuerpo mientras duermes.',
      imagen: 'https://images.unsplash.com/photo-1511295742364-92b9345f6852?q=80&w=500'
    }
  ];

  /**
   * Controla la redirección al artículo completo seleccionado
   * @param id Identificador único del post
   */
  leerArticulo(id: number) {
    console.log(`Navegando al artículo con ID: ${id}`);
    // Aquí integrarás el Router de Angular en el futuro (ej: this.router.navigate(['/blog', id]))
  }
}