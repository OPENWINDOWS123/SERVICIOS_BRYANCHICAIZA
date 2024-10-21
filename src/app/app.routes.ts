import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MedioComponent } from './pages/inicio/medio/medio.component';
import { FinComponent } from './pages/inicio/fin/fin.component';


// Asegúrate de que la ruta sea correcta

export const routes: Routes = [
    
    {
        path: 'pages/inicio',
        component: InicioComponent
    },
    {
        path: 'pages/inicio/medio',
        component: MedioComponent
    },
    {
        path: 'pages/inicio/fin',
        component: FinComponent
    }
   
];
