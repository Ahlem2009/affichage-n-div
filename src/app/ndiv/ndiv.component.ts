import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ndiv',
  templateUrl: './ndiv.component.html',
  styleUrls: ['./ndiv.component.css']
})
export class NdivComponent implements OnInit{
  @Input() maPropriete:number=0;
  
 tableau:number[] =[] 
constructor()  {  }
    ngOnInit(){
      console.log(this.maPropriete);
    }
    ndiv(){
      this.tableau = Array(this.maPropriete).fill(this.maPropriete);
    }
  }
