import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colecciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {
  terminoBusqueda: string = '';
  
  colecciones = [
    {
      nombre: 'Colección Premium',
      descripcion: 'Licores artesanales de edición limitada',
      imagen: 'assets/colecciones/Premium.jpg'
    },
    {
      nombre: 'Colección Clásica',
      descripcion: 'Sabores tradicionales con toque moderno',
      imagen: 'assets/colecciones/Clasica.jpg'
    },
    {
      nombre: 'Colección Frutal',
      descripcion: 'Licores naturales con frutas selectas',
      imagen: 'assets/colecciones/Frutal.jpg'
    },
    {
      nombre: 'Colección Especias',
      descripcion: 'Mezclas exóticas y aromáticas',
      imagen: 'assets/colecciones/Especiales.jpg'
    },
    {
      nombre: 'Edición Limitada',
      descripcion: 'Creaciones exclusivas y numeradas',
      imagen: 'assets/colecciones/Edicion.jpg'
    }
  ];

  coleccionesFiltradas = [...this.colecciones];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.terminoBusqueda = (params['q'] || '').toLowerCase();
      this.filtrarColecciones();
    });
  }

  filtrarColecciones(): void {
    if (this.terminoBusqueda) {
      this.coleccionesFiltradas = this.colecciones.filter(c =>
        c.nombre.toLowerCase().includes(this.terminoBusqueda) ||
        c.descripcion.toLowerCase().includes(this.terminoBusqueda)
      );
    } else {
      this.coleccionesFiltradas = [...this.colecciones];
    }
  }
}
