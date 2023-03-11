import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maPropriete: number;

  constructor() {
    this.maPropriete = 0;
  }

  onSubmit() {
    console.log(this.maPropriete);
  }
  
}
