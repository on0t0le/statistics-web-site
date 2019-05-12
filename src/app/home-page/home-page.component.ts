import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GetStatService } from '../get-stat.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private datePipe: DatePipe, private statService: GetStatService) { }

  startDate: Date = new Date(Date.now());
  endDate: Date = new Date(Date.now());

  selectedOperator: string = 'all';
  operatorsList: string[] = ['all','1206','1207','1238'];

  selectedStatus: string = 'all';
  statusList = statuses;

  testForm(){
    console.log('You choose: start date '+this.startDate+', end date '+this.endDate+', operator '+this.selectedOperator+', status '+this.selectedStatus); 
  }

  getData(){
    let _startDate = this.datePipe.transform(this.startDate,'yyyy-MM-dd');
    let _endDate = this.datePipe.transform(this.endDate,'yyyy-MM-dd')
    this.statService.getStatistics(_startDate,_endDate,this.selectedOperator,this.selectedStatus).subscribe(data =>{
      console.log('Get this data: ',data);      
    },
    err =>{
      console.error('Houston, we have a problem: ',err);      
    })
  }
  
}


const statuses = [
  {id: 'all', name:'Everything'},
  {id: 'ANSWERED', name:'Answered'},
  {id: 'BUSY', name:'Busy'},
  {id: 'NO ANSWER', name:'Not answered'}
]