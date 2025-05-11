import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  terminoBusqueda: string = '';

  constructor(private router: Router) { }

  buscarProducto() {
    console.log('Buscando:', this.terminoBusqueda);
    // Aquí se implementará la lógica de búsqueda
  }
}
