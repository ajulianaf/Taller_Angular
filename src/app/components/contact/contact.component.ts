import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">Contacto</h2>
              <form (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="name" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="name" [(ngModel)]="contact.name" name="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" [(ngModel)]="contact.email" name="email" required>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Mensaje</label>
                  <textarea class="form-control" id="message" rows="4" [(ngModel)]="contact.message" name="message" required></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                </div>
              </form>
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
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Aquí se implementaría la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contact);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.contact = { name: '', email: '', message: '' };
  }
} 