import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-colecciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent {
  // Aquí puedes agregar la lógica para manejar las colecciones
  // Por ejemplo, cargar las colecciones desde un servicio
}
