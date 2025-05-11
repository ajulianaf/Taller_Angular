import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body p-5">
              <h2 class="text-center mb-4">Crear Cuenta</h2>
              <form (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="name" class="form-label">Nombre Completo</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    [(ngModel)]="registerData.name" 
                    name="name" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    [(ngModel)]="registerData.email" 
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
                    [(ngModel)]="registerData.password" 
                    name="password" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="confirmPassword" 
                    [(ngModel)]="registerData.confirmPassword" 
                    name="confirmPassword" 
                    required
                  >
                </div>
                <div class="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    class="form-check-input" 
                    id="terms" 
                    [(ngModel)]="registerData.acceptTerms" 
                    name="terms" 
                    required
                  >
                  <label class="form-check-label" for="terms">
                    Acepto los términos y condiciones
                  </label>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Registrarse</button>
                </div>
              </form>
              <div class="text-center mt-4">
                <p>¿Ya tienes una cuenta? <a routerLink="/login">Inicia Sesión</a></p>
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
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  };

  onSubmit(): void {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.registerData.acceptTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    // Aquí se implementaría la lógica de registro
    console.log('Datos de registro:', this.registerData);
    alert('Registro exitoso');
  }
}
