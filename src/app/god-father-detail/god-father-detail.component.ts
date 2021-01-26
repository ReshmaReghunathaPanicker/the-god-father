import { Component, Input } from '@angular/core';


@Component({
  selector: 'god-father-detail',
  templateUrl: './god-father-detail.component.html',
  styleUrls: ['./god-father-detail.component.css']
})
export class GodFatherDetailComponent {
  @Input() selectedData: any;

  constructor() { 
    
  }

  getMargin() {
    return ((this.selectedData.popularity/10)*100)+"%";
  }

}
