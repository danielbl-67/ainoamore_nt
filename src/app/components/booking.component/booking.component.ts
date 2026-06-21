import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  horaInicio = 9;
  horaFin = 20;
  
  diasFestivos: string[] = ['2026-01-01', '2026-01-06', '2026-05-01', '2026-12-25'];
  precios: { [key: string]: number } = {
    'nutricion': 50,
    'entrenamiento': 45,
    'premium': 75
  };

  razonSeleccionada = 'nutricion';
  fechaSeleccionada = '';
  horaSeleccionada = '';
  
  nombreCliente = '';
  emailCliente = '';

  horasBase: string[] = [];
  horasFiltradas: string[] = [];
  costeActual = 50;
  errorMensaje = '';

  // Diccionario global en memoria para guardar las citas ocupadas por fecha
  citasReservadas: { [fecha: string]: string[] } = {};

  ngOnInit(): void {
    this.generarTramosBase();
  }

  generarTramosBase(): void {
    this.horasBase = [];
    for (let i = this.horaInicio; i <= this.horaFin; i++) {
      this.horasBase.push(`${i.toString().padStart(2, '0')}:00`);
    }
  }

  actualizarHorasDisponibles(): void {
    if (!this.fechaSeleccionada) {
      this.horasFiltradas = [];
      return;
    }

    const ocupadas = this.citasReservadas[this.fechaSeleccionada] || [];
    this.horasFiltradas = this.horasBase.filter(hora => !ocupadas.includes(hora));

    if (this.horasFiltradas.length > 0) {
      this.horaSeleccionada = this.horasFiltradas[0];
    } else {
      this.horaSeleccionada = '';
      this.errorMensaje = 'No quedan tramos horarios disponibles para este día.';
    }
  }

  cambiarServicio(): void {
    this.costeActual = this.precios[this.razonSeleccionada];
  }

  validarFecha(): void {
    this.errorMensaje = '';
    if (!this.fechaSeleccionada) {
      this.horasFiltradas = [];
      return;
    }

    const partes = this.fechaSeleccionada.split('-');
    const fechaObj = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    
    const hoy = new Date();
    hoy.setHours(0,0,0,0);

    if (fechaObj < hoy) {
      this.errorMensaje = 'Por favor, selecciona una fecha futura.';
      this.fechaSeleccionada = '';
      this.horasFiltradas = [];
      return;
    }

    if (this.diasFestivos.includes(this.fechaSeleccionada)) {
      this.errorMensaje = 'Día festivo no laborable.';
      this.fechaSeleccionada = '';
      this.horasFiltradas = [];
      return;
    }

    const dia = fechaObj.getDay();
    if (dia === 0 || dia === 6) {
      this.errorMensaje = 'Fines de semana no disponibles para citas.';
      this.fechaSeleccionada = '';
      this.horasFiltradas = [];
      return;
    }

    this.actualizarHorasDisponibles();
  }

  confirmarReserva(): void {
    if (!this.fechaSeleccionada || !this.horaSeleccionada || !this.nombreCliente || !this.emailCliente) {
      return;
    }

    // 1. Bloqueamos localmente la hora en el registro
    if (!this.citasReservadas[this.fechaSeleccionada]) {
      this.citasReservadas[this.fechaSeleccionada] = [];
    }
    if (!this.citasReservadas[this.fechaSeleccionada].includes(this.horaSeleccionada)) {
      this.citasReservadas[this.fechaSeleccionada].push(this.horaSeleccionada);
    }

    const nombres: { [key: string]: string } = {
      'nutricion': 'Asesoría Nutricional',
      'entrenamiento': 'Entrenamiento Personal',
      'premium': 'Pack Full Premium'
    };
    const detalleServicio = nombres[this.razonSeleccionada];

    const templateParams = {
      to_email: 'burdallolopezdev@gmail.com',
      cliente_nombre: this.nombreCliente,
      cliente_email: this.emailCliente,
      servicio: detalleServicio,
      fecha: this.fechaSeleccionada,
      hora: this.horaSeleccionada,
      coste: this.costeActual
    };
    
    // 2. Envío con la configuración robusta (Clave pública directa)
    emailjs.send(
      'service_wexnhod',   
      'template_p3xt48r',  
      templateParams,
      {
        publicKey: '6T8HKxvPJsmu7-SR2', // Tu clave pública inyectada directamente aquí
      }
    )
    .then((response) => {
       console.log('CORREO ENVIADO CON ÉXITO', response.status, response.text);
       alert('¡Reserva confirmada con éxito! Se ha enviado un email de notificación.');
       this.reiniciarFormularioCompleto();
    })
    .catch((err) => {
       console.error('FALLO EN EMAILJS', err);
       alert(`Error de EmailJS: ${err.text || err.message || JSON.stringify(err)}`);
       
       // Si el envío falla, liberamos la hora
       const index = this.citasReservadas[this.fechaSeleccionada].indexOf(this.horaSeleccionada);
       if (index > -1) {
         this.citasReservadas[this.fechaSeleccionada].splice(index, 1);
       }
       this.actualizarHorasDisponibles();
    });
  }

  private reiniciarFormularioCompleto(): void {
    this.nombreCliente = '';
    this.emailCliente = '';
    this.fechaSeleccionada = '';   // Al vaciar la fecha, se corta cualquier bucle reactivo del HTML
    this.horaSeleccionada = '';
    this.horasFiltradas = [];      // Dejamos el select del HTML totalmente vacío y limpio
    this.errorMensaje = '';
  }
}