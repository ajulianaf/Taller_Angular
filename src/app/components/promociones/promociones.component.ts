import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Promocion {
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: number;
  precioDescuento: number;
  fechaFin: Date;
}

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {
  promociones: Promocion[] = [
    {
      titulo: 'Pack Premium',
      descripcion: 'Colección completa de licores premium con 20% de descuento',
      imagen: 'assets/img/promo-premium.jpg',
      precio: 299.99,
      precioDescuento: 239.99,
      fechaFin: new Date('2024-12-31')
    },
    {
      titulo: 'Oferta Clásica',
      descripcion: '3 botellas de nuestra colección clásica al precio de 2',
      imagen: 'assets/img/promo-clasica.jpg',
      precio: 180.00,
      precioDescuento: 120.00,
      fechaFin: new Date('2024-06-30')
    },
    {
      titulo: 'Edición Limitada',
      descripcion: 'Licor artesanal de edición limitada con regalo exclusivo',
      imagen: 'assets/img/promo-limitada.jpg',
      precio: 89.99,
      precioDescuento: 69.99,
      fechaFin: new Date('2024-05-15')
    }
  ];
}
