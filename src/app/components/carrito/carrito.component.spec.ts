import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoComponent } from './carrito.component';
import { CommonModule } from '@angular/common';  // Importar CommonModule si usas *ngIf o *ngFor

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoComponent],  // Debería estar en 'declarations'
      imports: [CommonModule],  // Si usas *ngIf o *ngFor, necesitarás CommonModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
