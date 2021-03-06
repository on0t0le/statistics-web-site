import { Component, ViewChild, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GetStatService } from '../get-stat.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HomePageComponent implements OnInit {

  startDate: Date = new Date(Date.now());
  endDate: Date = new Date(Date.now());

  selectedOperator: string = 'all';
  operatorsList: Operator[] = operators;

  selectedStatus: string = 'all';
  statusList: Status[] = statuses;

  //statisticsData: any;
  statisticsDataSource: any;
  resultsLength: number;
  maxPageAll: number = 20;

  displayedColumns: string[] = ['src', 'dstchannel', 'disposition'];
  expandedElement: any | null;


  constructor(private datePipe: DatePipe, private statService: GetStatService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }


  testForm() {
    console.log('You choose: start date ' + this.startDate + ', end date ' + this.endDate + ', operator ' + this.selectedOperator + ', status ' + this.selectedStatus);
  }

  getData() {
    let _startDate = this.datePipe.transform(this.startDate, 'yyyy-MM-dd');
    let _endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd')
    this.statService.getStatistics(_startDate, _endDate, this.selectedOperator, this.selectedStatus).subscribe((data: any) => {
      console.log('Get this data: ', data);
      //this.statisticsDataSource = data;
      this.resultsLength = data.length;
      this.statisticsDataSource = new MatTableDataSource(data);
      this.statisticsDataSource.paginator = this.paginator;
      this.statisticsDataSource.sort = this.sort;
    },
      err => {
        console.error('Houston, we have a problem: ', err);
      })
  }

  startDateFilter = (d: Date): boolean => {

    if (d > this.endDate || d < new Date('2018-09-06')) {
      return false;
    }
    return true;
  }

  endDateFilter = (d: Date): boolean => {
    let enddate = d.getDate()
    if (enddate > (new Date(Date.now())).getDate() || enddate < this.startDate.getDate()) {
      return false;
    }
    return true;
  }

  getPageSizeOptions(): number[] {
    if (this.resultsLength > this.maxPageAll)
      return [5, 10, 20, this.resultsLength];
    else
      return [5, 10, this.maxPageAll];
  }

  applyFilter(filterValue: string) {
    this.statisticsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.statisticsDataSource.paginator) {
      this.statisticsDataSource.paginator.firstPage();
    }
  }
}


const statuses: Status[] = [
  { id: 'all', name: 'Everything' },
  { id: 'ANSWERED', name: 'Answered' },
  { id: 'BUSY', name: 'Busy' },
  { id: 'NO ANSWER', name: 'Not answered' }
]

const operators: Operator[] = [
  { name: 'All', number: 'all' },
  { name: 'Ira Novak', number: '1204' },
  { name: 'Alexander Bulitko', number: '1206' },
  { name: 'Liuda Savisko', number: '1207' },
  { name: 'Yana Antonenko', number: '1238' },
  { name: 'Natalia Chychai', number: '1239' },
  { name: 'Oksana Dromashko', number: '1246' },
  { name: 'Andrey Lukomskiy', number: '1250' }
]

interface Status {
  id: string,
  name: string
}

interface Operator {
  name: string,
  number: string
}