import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>([
    { id: 1, name: 'Whisky Artesanal', price: 120000, category: 'Edición Limitada', imageUrl: 'assets/whisky.jpg' },
    { id: 2, name: 'Gin Premium', price: 95000, category: 'Premium', imageUrl: 'assets/gin.jpg' },
    { id: 3, name: 'Ron Añejo', price: 80000, category: 'Tradicional', imageUrl: 'assets/ron.jpg' },
  ]);

  getProducts() {
    return this.products.asObservable();
  }
}
