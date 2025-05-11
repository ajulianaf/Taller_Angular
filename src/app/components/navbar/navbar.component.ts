import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" routerLink="/">E-Commerce</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/productos" routerLinkActive="active">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contacto" routerLinkActive="active">Contacto</a>
            </li>
          </ul>
          <div class="d-flex">
            <a class="btn btn-outline-light me-2" routerLink="/carrito">
              <i class="bi bi-cart"></i> Carrito
            </a>
            <a class="btn btn-outline-light" routerLink="/login">
              <i class="bi bi-person"></i> Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .nav-link {
      font-weight: 500;
    }
    .nav-link.active {
      font-weight: 600;
    }
  `]
})
export class NavbarComponent {} 