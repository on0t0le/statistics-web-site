import { Component, OnInit } from '@angular/core';
import { GetStatService } from '../get-stat.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  selectedStartDate: Date = new Date(Date.now());
  selectedEndDate: Date = new Date(Date.now());

  constructor(private callsService: GetStatService) { }

  ngOnInit() {
  }

  getCalls(){
    let sd = '2019-05-12'
    let ed = '2019-05-12'
    let op = '1250'
    let st = 'BUSY'

    this.callsService.getStatistics(sd,ed,op,st).subscribe((data: any) =>{      
      console.log(data);      
    },
    err =>{
      console.error(err);
    })
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
