import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: '¿Los planes incluyen comidas restrictivas?',
      answer: 'No. Mi método se basa en la alimentación flexible. Comerás alimentos que te gusten y que puedas encontrar en cualquier supermercado.',
      open: false
    },
    {
      question: '¿Puedo entrenar desde casa?',
      answer: '¡Por supuesto! Adapto las rutinas al material que tengas disponible, ya sea un gimnasio completo o solo unas bandas elásticas en casa.',
      open: false
    },
    {
      question: '¿Cómo funcionan las revisiones?',
      answer: 'Cada 15 días analizaremos tu progreso mediante un formulario de seguimiento donde evaluamos peso, medidas, fotos y, sobre todo, tus sensaciones.',
      open: false
    }
  ];

  /**
   * Abre o cierra una pregunta al hacer clic
   * @param index Índice de la pregunta en el array
   */
  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}