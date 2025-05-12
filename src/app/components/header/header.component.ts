import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  terminoBusqueda: string = '';

  constructor(private router: Router) {}

buscarProducto(): void {
  if (this.terminoBusqueda.trim()) {
    this.router.navigate(['/colecciones'], {
      queryParams: { q: this.terminoBusqueda }
    });
  }
}
}
