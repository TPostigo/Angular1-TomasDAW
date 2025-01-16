import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quinto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './quinto.component.html',
  styleUrl: './quinto.component.css'
})
export class QuintoComponent {


  constructor(private servicio:DataService) { }
  data:any[]=[];
  ngOnInit(): void {
    this.servicio.getData().subscribe((data:any[])=>{
      this.data = data;
      console.log(this.data);
    });
  }

}
