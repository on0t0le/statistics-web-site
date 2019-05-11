import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { GetStatService } from '../get-stat.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private datePipe: DatePipe, private statService: GetStatService) { }

  startDate: Date = new Date(Date.now());
  selectedOperator: any;
  operatorsList: string[] = ['1206','1207','1238'];

  getDate(){
    let tmpDate = this.datePipe.transform(this.startDate,'yyyy-MM-dd')
    console.log('You choose: ', tmpDate);    
    console.log('You chose such operators: ',this.selectedOperator);
    
  }

  getData(){
    this.statService.getStatistics().subscribe(data =>{
      console.log('Get this data: ',data);
      
    },
    err =>{
      console.error('Houston, we have a problem: ',err);      
    })
  }
  
}
