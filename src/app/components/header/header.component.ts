import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  terminoBusqueda: string = '';
  constructor(private router: Router) { }

  buscarProducto() {
    if (this.terminoBusqueda.trim() ) {
      this.router.navigate(['/buscar'],{ queryParams: {q: this.terminoBusqueda}});
    }
  }
}
