import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  selectedStartDate: Date = new Date(Date.now());
  selectedEndDate: Date = new Date(Date.now());

  constructor() { }

  ngOnInit() {
  }

  startFilter = (d: Date): boolean => {
    if (d > this.selectedEndDate || d < new Date('2016-08-19')) {
      return false
    }
    return true;    
  }
  
  endFilter = (d: Date): boolean => {
    let date = d.getDate()
    if (date > (new Date(Date.now())).getDate() || date < this.selectedStartDate.getDate()) {
      return false
    }
    return true;    
  }
}
