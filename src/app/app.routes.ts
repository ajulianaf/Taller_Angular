import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductListComponent },
    { path: 'producto/:id', component: ProductDetailComponent },
    { path: 'carrito', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'crear-producto', component: CreateProductComponent },
    { path: '**', redirectTo: '' }
];
