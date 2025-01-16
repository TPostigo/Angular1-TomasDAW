import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Marcar la clase como inyectable para usarlo en otros componentes
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // URL de la API
  private dataUrl = 'https://dummyjson.com/carts';

  // Inyectamos HttpClient en el constructor
  constructor(private http: HttpClient) { }

  // Método para obtener los datos desde la API
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);  // Retorna los datos como un Observable
  }
}
