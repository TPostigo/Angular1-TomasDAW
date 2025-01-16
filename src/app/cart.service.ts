import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  mostrar(): void {
    console.log('Mostrar método llamado');
  }
}