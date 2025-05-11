import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'colecciones', component: ColeccionesComponent },
    { path: 'promociones', component: PromocionesComponent },
    { path: '**', redirectTo: '' }
];
