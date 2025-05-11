import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styles: [`
    .card {
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchQuery: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.loadProducts();
      return;
    }

    this.productService.searchProducts(this.searchQuery).subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    console.log(`Producto añadido al carrito: ${product.name}`);
  }
}