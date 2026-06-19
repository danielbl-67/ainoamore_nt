import { Component, OnInit, inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Pipe interno para limpiar de forma segura las URLs de los iframes de TikTok.
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
  selector: 'app-tiktok-carrusel', // <- Este selector debe coincidir con tu app.html
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './tiktok-carrusel.component.html',
  styleUrls: ['./tiktok-carrusel.component.css']
})
export class TiktokCarruselComponent implements OnInit {
  
  // Lista de URLs de ejemplo para tus videos de TikTok
  tiktokVideos = [
    { id: 1, url: 'https://www.tiktok.com/@ainoamore_/video/7630906029307333910' },
    { id: 2, url: 'https://www.tiktok.com/@ainoamore_/video/7630906029307333911' },
    { id: 3, url: 'https://www.tiktok.com/@ainoamore_/video/7630906029307333912' }
  ];
  
  visibleVideos: any[] = [];
  currentIndex = 0;

  /**
   * Inicializa los videos visibles al arrancar el componente
   */
  ngOnInit() {
    this.updateVisibleVideos();
  }

  /**
   * Refresca los videos que se renderizan en el carrusel cíclico
   */
  updateVisibleVideos() {
    this.visibleVideos = [
      this.tiktokVideos[this.currentIndex],
      this.tiktokVideos[(this.currentIndex + 1) % this.tiktokVideos.length]
    ];
  }

  /**
   * Pasa al siguiente video
   */
  nextVideo() {
    this.currentIndex = (this.currentIndex + 1) % this.tiktokVideos.length;
    this.updateVisibleVideos();
  }

  /**
   * Vuelve al video anterior
   */
  prevVideo() {
    this.currentIndex = (this.currentIndex - 1 + this.tiktokVideos.length) % this.tiktokVideos.length;
    this.updateVisibleVideos();
  }
}