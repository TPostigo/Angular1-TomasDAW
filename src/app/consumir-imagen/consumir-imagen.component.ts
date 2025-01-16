import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importamos CommonModule
import { HttpClientModule } from '@angular/common/http';  // Importamos HttpClientModule para realizar peticiones HTTP

@Component({
  selector: 'app-consumir-imagen',
  standalone: true,  // Esto indica que es un componente autónomo
  imports: [CommonModule, HttpClientModule],  // Agregamos CommonModule y HttpClientModule
  templateUrl: './consumir-imagen.component.html',
  styleUrls: ['./consumir-imagen.component.css']
})
export class ConsumirImagenComponent {
  carts: any[] = [];  // Array para almacenar los datos de los carritos

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Realizamos la petición HTTP para obtener los datos de los carritos
    this.http.get<any>("https://dummyjson.com/carts").subscribe((data: any) => {
      this.carts = data.carts;  // Asignamos los datos de los carritos a la propiedad 'carts'
    });
  }
}
