import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ocho',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ocho.component.html',
  styleUrl: './ocho.component.css'
})
export class OchoComponent {

  onSubmit(f:NgForm){
    console.log('formulario enviado');
    console.log(f.valid);
  }
}
