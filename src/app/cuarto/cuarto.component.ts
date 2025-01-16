import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Cliente } from '../cliente';



@Component({
  selector: 'app-cuarto',
  standalone: true,
  imports: [FormsModule,NgFor,NgStyle],
  templateUrl: './cuarto.component.html',
  styleUrl: './cuarto.component.css'
})
export class CuartoComponent {


  mensaje:string="Hola Mundo";
  currentStyles:Record<string, string>={
    'font-style': 'italic',
    'font-weight':'bold',
    'font-size':'24xp'
  }

  productos = ['camisa','pepe','anuel'];


  clientes:Cliente[] =[
    {id:1, nombre:'Tomas', apellidos:'Garcia', direccion:'Calle 12', telefono:'666666666', email:'tomas@gmail.com'},
    {id:2, nombre:'Juan', apellidos:'Perez', direccion:'Calle 34', telefono:'777777777', email:'juan@gmail.com'},
    {id:3, nombre:'Pedro', apellidos:'Martin', direccion:'Calle 56', telefono:'888888888', email:'pedro@gmail.com'}
  ];
}
