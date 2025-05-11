import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Licor de Rosas',
      description: 'Delicado y aromático. Ideal para regalar.',
      price: 89.99,
      imageUrl: 'assets/img/producto1.jpg'
    },
    {
      id: 2,
      name: 'Licor de Cítricos',
      description: 'Fresco, vibrante y perfecto para días cálidos.',
      price: 79.99,
      imageUrl: 'assets/img/producto2.jpg'
    },
    {
      id: 3,
      name: 'Licor de Menta',
      description: 'Un toque refrescante y sofisticado.',
      price: 84.99,
      imageUrl: 'assets/img/producto3.jpg'
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  searchProducts(query: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    return new Observable(subscriber => {
      subscriber.next(filteredProducts);
      subscriber.complete();
    });
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
