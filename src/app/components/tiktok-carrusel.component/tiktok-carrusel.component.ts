import { Component, OnInit, inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Pipe que marca los enlaces de TikTok como seguros para evitar bloqueos del navegador.
 */
@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-tiktok-carrusel',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './tiktok-carrusel.component.html',
  styleUrls: ['./tiktok-carrusel.component.css']
})
export class TiktokCarruselComponent implements OnInit {
  
  // Repositorio de vídeos del perfil de @ainoamore_ utilizando reproductores embebidos v1
  tiktokVideos = [
    { id: 1, url: 'https://www.tiktok.com/player/v1/7123456789012345678' },
    { id: 2, url: 'https://www.tiktok.com/player/v1/7123456789012345679' },
    { id: 3, url: 'https://www.tiktok.com/player/v1/7123456789012345680' },
    { id: 4, url: 'https://www.tiktok.com/player/v1/7123456789012345681' }
  ];
  
  visibleVideos: any[] = [];
  currentIndex = 0;

  /**
   * Carga inicial al cargar el carrusel en pantalla
   */
  ngOnInit() {
    this.updateVisibleVideos();
  }

  /**
   * Refresca los vídeos que se muestran simultáneamente (de 2 en 2)
   */
  updateVisibleVideos() {
    this.visibleVideos = [
      this.tiktokVideos[this.currentIndex],
      this.tiktokVideos[(this.currentIndex + 1) % this.tiktokVideos.length]
    ];
  }

  /**
   * Desplaza el carrusel hacia adelante
   */
  nextVideo() {
    this.currentIndex = (this.currentIndex + 1) % this.tiktokVideos.length;
    this.updateVisibleVideos();
  }

  /**
   * Desplaza el carrusel hacia atrás
   */
  prevVideo() {
    this.currentIndex = (this.currentIndex - 1 + this.tiktokVideos.length) % this.tiktokVideos.length;
    this.updateVisibleVideos();
  }
}