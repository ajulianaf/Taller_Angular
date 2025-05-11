import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule aquí

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  standalone: true, // Esto marca el componente como standalone
  imports: [CommonModule]  // Asegúrate de importar CommonModule aquí
})
export class CarritoComponent implements OnInit {
  carrito: Producto[] = [];
  total: number = 0;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {  // Verifica si está en el navegador
      const datos = localStorage.getItem('carrito');
      this.carrito = datos ? JSON.parse(datos) : [];
      this.actualizarTotal();
    }
  }

  actualizarTotal(): void {
    this.total = this.carrito.reduce((suma, p) => suma + p.precio * p.cantidad, 0);
    if (typeof window !== 'undefined') {  // Verifica si está en el navegador
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  actualizarCantidad(event: Event, producto: Producto): void {
    const input = event.target as HTMLInputElement;
    const cantidad = parseInt(input.value, 10);
    if (!isNaN(cantidad) && cantidad >= 1) {
      producto.cantidad = cantidad;
      this.actualizarTotal();
    }
  }

  eliminarProducto(producto: Producto): void {
    this.carrito = this.carrito.filter(p => p.id !== producto.id);
    this.actualizarTotal();
  }

  finalizarCompra(): void {
    alert('¡Gracias por tu compra!');
    this.carrito = [];
    this.total = 0;
    if (typeof window !== 'undefined') {  // Verifica si está en el navegador
      localStorage.removeItem('carrito');
    }
  }
}
