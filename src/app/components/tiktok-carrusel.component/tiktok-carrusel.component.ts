import { Component, OnInit, inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


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
  
  // IDs extraídos directamente de publicaciones reales del perfil de @ainoamore_
  tiktokVideos = [
    { id: 1, url: 'https://www.tiktok.com/player/v1/7365691060939984161' }, 
    { id: 2, url: 'https://www.tiktok.com/player/v1/7352341984252349729' }, 
    { id: 3, url: 'https://www.tiktok.com/player/v1/7339810245819321633' }
  ];
  
  visibleVideos: any[] = [];
  currentIndex = 0;

  /**
   * Inicializa la vista mostrando los primeros videos correspondientes
   */
  ngOnInit(): void {
    this.updateVisibleVideos();
  }

  /**
   * Actualiza dinámicamente los elementos que se renderizan en el DOM
   */
  updateVisibleVideos(): void {
    this.visibleVideos = [
      this.tiktokVideos[this.currentIndex],
      this.tiktokVideos[(this.currentIndex + 1) % this.tiktokVideos.length]
    ];
  }

  /**
   * Pasa al siguiente elemento del set de datos de videos
   */
  nextVideo(): void {
    this.currentIndex = (this.currentIndex + 1) % this.tiktokVideos.length;
    this.updateVisibleVideos();
  }

  /**
   * Retrocede una posición dentro del set de datos de videos
   */
  prevVideo(): void {
    this.currentIndex = (this.currentIndex - 1 + this.tiktokVideos.length) % this.tiktokVideos.length;
    this.updateVisibleVideos();
  }
}