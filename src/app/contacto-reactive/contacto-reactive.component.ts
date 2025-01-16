import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-Reactive.component.html'
})
export class ContactoReactiveComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      alert('Datos enviados correctamente.');
      console.log(this.contactoForm.value);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
