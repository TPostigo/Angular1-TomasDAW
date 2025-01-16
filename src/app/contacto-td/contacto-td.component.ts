import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto-td',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto-td.component.html'
})
export class ContactoTDComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Datos enviados correctamente.');
      console.log(form.value);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
