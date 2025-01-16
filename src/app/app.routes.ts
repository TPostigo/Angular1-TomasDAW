import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { OchoComponent } from './ocho/ocho.component';
import { ContactoTDComponent } from './contacto-td/contacto-td.component';
import { ContactoReactiveComponent } from './contacto-reactive/contacto-reactive.component';
import { ConsumirImagenComponent } from './consumir-imagen/consumir-imagen.component';

export const routes: Routes = [
    {path:"primero",component:FirstComponentComponent},
    {path:"segundo",component:SecondComponentComponent},
    {path:"tercero",component:ThirdComponentComponent},
    {path:"cuarto",component:CuartoComponent},
    {path:"quinto",component:QuintoComponent},
    {path:"ocho",component:OchoComponent},
    {path:"contacto-td",component:ContactoTDComponent},
    {path:"contacto-reactive",component:ContactoReactiveComponent},
    {path:"consumir-imagen",component:ConsumirImagenComponent},
    
];
