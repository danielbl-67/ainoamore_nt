import { Component } from '@angular/core';

@Component({
  selector: 'app-recetas',
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  
  // Listado de recetas saludables
  recipes = [
    {
      title: 'Pancakes de Avena y Plátano',
      category: 'Desayuno',
      description: 'Altos en fibra, sin azúcar añadida y listos en 10 minutos.',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400'
    },
    {
      title: 'Bowl de Pollo y Quinoa',
      category: 'Almuerzo',
      description: 'Cargado de proteína de calidad y grasas saludables ideales para recuperar.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400'
    }
  ];

  /**
   * Abre los detalles ampliados de una receta específica
   */
  verDetalle(recipeTitle: string) {
    console.log(`Detalles cargados para: ${recipeTitle}`);
  }
}