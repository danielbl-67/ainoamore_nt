import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  // Definición de los planes de asesoría
  services = [
    {
      title: 'Plan Nutrición',
      price: 'Desde 49€/mes',
      description: 'Optimiza tu alimentación según tus objetivos sin sufrir restricciones extremas.',
      features: ['Plan nutricional 100% personalizado', 'Revisiones quincenales', 'Resolución de dudas por WhatsApp']
    },
    {
      title: 'Plan Asesoría Premium',
      price: 'Desde 79€/mes',
      description: 'La combinación perfecta. Ajustamos tu dieta y tus entrenamientos para maximizar resultados.',
      features: ['Plan nutricional + Rutina entrenamiento', 'Vídeos explicativos de técnica', 'Contacto prioritario 24/7'],
      highlight: true // Marca esta tarjeta como la destacada
    },
    {
      title: 'Plan Entrenamiento',
      price: 'Desde 45€/mes',
      description: 'Rutinas inteligentes basadas en ciencia para ganar masa muscular o tonificar.',
      features: ['Planificación de entrenamiento a medida', 'Optimización de volumen e intensidad', 'Soporte técnico para dudas']
    }
  ];

  /**
   * Redirige al contacto para contratar un plan
   * @param plan Nombre del servicio seleccionado
   */
  contratar(plan: string) {
    const msg = encodeURIComponent(`Hola Ainoa, me interesa el ${plan}. ¡Quiero empezar!`);
    window.open(`https://wa.me/34600000000?text=${msg}`, '_blank');
  }
}