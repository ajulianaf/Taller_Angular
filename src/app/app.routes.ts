import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactoComponent } from './components/contacto/contacto.component'; // <--- Importación agregada

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'colecciones', component: ColeccionesComponent },
    { path: 'promociones', component: PromocionesComponent },
    { path: 'contacto', component: ContactoComponent }, // <--- Ruta agregada
    { path: '**', redirectTo: '' }
];
