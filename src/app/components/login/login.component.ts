import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body p-5">
              <h2 class="text-center mb-4">Iniciar Sesión</h2>
              <form (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    [(ngModel)]="loginData.email" 
                    name="email" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    [(ngModel)]="loginData.password" 
                    name="password" 
                    required
                  >
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="remember" [(ngModel)]="loginData.remember" name="remember">
                  <label class="form-check-label" for="remember">Recordarme</label>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                </div>
              </form>
              <div class="text-center mt-4">
                <p>¿No tienes una cuenta? <a routerLink="/registro">Regístrate</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border-radius: 10px;
    }
    .form-control:focus {
      border-color: #0d6efd;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
  `]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
    remember: false
  };

  onSubmit(): void {
    // Aquí se implementaría la lógica de autenticación
    console.log('Datos de inicio de sesión:', this.loginData);
    alert('Inicio de sesión exitoso');
  }
}
