import { Component, OnInit } from '@angular/core';
import employeeData from '../../assets/EmployeeData.json';

@Component({
  selector: 'god-father',
  templateUrl: './god-father.component.html',
  styleUrls: ['./god-father.component.css']
})
export class GodFatherComponent implements OnInit {

  godFatherData: any = employeeData.employees;
  selectedGodFather: any = employeeData.employees[0];
  constructor() {
  
   }

  ngOnInit() {

  }

  getClass(currentUserDetails) {
    let className = 'god-father-listing-item';
    if(currentUserDetails == this.selectedGodFather) {
      className = className+' selected';
    }
    if((this.selectedGodFather.colleagues).includes(currentUserDetails.name)) {
      className = className+' active';
    }
    return className;
  }

  onSelect(selectedGodFather: any): void {
    this.selectedGodFather = selectedGodFather;
  }
}

