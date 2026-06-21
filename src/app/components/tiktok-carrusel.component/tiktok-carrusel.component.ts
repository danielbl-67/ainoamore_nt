import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-tiktok-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './tiktok-carrusel.component.html',
  styleUrls: ['./tiktok-carrusel.component.css']
})
export class TiktokCarruselComponent implements OnInit {
  // 1. Inyectamos el desinfectante de Angular
  private sanitizer = inject(DomSanitizer);

  // 2. Definimos la propiedad con tipado permisivo para que el HTML la detecte sí o sí
  public urlPerfilSegura: any;

  ngOnInit(): void {
    // 3. Desinfectamos la URL oficial del feed de Ainoa
    this.urlPerfilSegura = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.tiktok.com/embed/@ainoamore_'
    );
  }
}