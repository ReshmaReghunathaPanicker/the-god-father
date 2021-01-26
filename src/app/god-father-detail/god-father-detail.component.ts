import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'god-father-detail',
  templateUrl: './god-father-detail.component.html',
  styleUrls: ['./god-father-detail.component.css']
})
export class GodFatherDetailComponent implements OnInit {
  @Input() selectedData: any;

  constructor() { 
    
  }

  ngOnInit() {
    this.selectedData.image = '../../assets/_images/profile-pics/'+this.selectedData.image;
  }

}
