import { Component } from '@angular/core';

@Component({
  selector: 'app-recetas',
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  
  // Filtro activo actual ('todos', 'desayuno', 'almuerzo')
  categoriaActiva = 'todos';

  recetasCompletas = [
    {
      title: 'Pancakes de Avena y Plátano',
      category: 'desayuno',
      categoryLabel: 'Desayuno',
      description: 'Altos en fibra, sin azúcares añadidos y perfectos para aportar energía estable previa al entreno.',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400'
    },
    {
      title: 'Bowl de Pollo, Quinoa y Aguacate',
      category: 'almuerzo',
      categoryLabel: 'Almuerzo',
      description: 'Combinación óptima de aminoácidos esenciales, carbohidratos complejos y ácidos grasos saludables.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400'
    },
    {
      title: 'Salmón al Horno con Espárragos',
      category: 'cena',
      categoryLabel: 'Cena',
      description: 'Cena ligera rica en Omega-3 y proteínas de alta absorción biológica para reparar tejidos.',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400'
    }
  ];

  /**
   * Retorna las recetas filtradas basándose en la selección del usuario
   */
  get recetasFiltradas() {
    if (this.categoriaActiva === 'todos') {
      return this.recetasCompletas;
    }
    return this.recetasCompletas.filter(r => r.category === this.categoriaActiva);
  }

  /**
   * Cambia la categoría de filtrado del menú interactivo
   * @param categoria Nueva categoría seleccionada
   */
  cambiarFiltro(categoria: string): void {
    this.categoriaActiva = categoria;
  }
}