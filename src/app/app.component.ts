import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica_10';

  isvisible:boolean=true;
  toggle():void{
    this.isvisible=!this.isvisible;
  }

  /*-----------------------------*/

  Lenguajes:string[]=['C++','Java','Phyton'];
  nuevo:string='';
  
  addItem():void{
    this.Lenguajes.push(this.nuevo);
    this.nuevo='';
  }

  selectedOption:string='deafault';

}
