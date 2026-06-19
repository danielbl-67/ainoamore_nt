import { Component } from '@angular/core';

@Component({
  selector: 'app-recetas', // <- Este selector debe coincidir con tu app.html
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  
  // Datos simulados de las recetas de cocina de la nutricionista
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
      description: 'Cargado de proteína de calidad y grasas saludables.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400'
    }
  ];

  /**
   * Abre la información extendida de una receta seleccionada
   */
  verDetalle(recipeTitle: string) {
    console.log(`Abriendo detalles de: ${recipeTitle}`);
  }
}