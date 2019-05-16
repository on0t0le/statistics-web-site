import { Component, OnInit } from '@angular/core';
import { GetStatService } from '../get-stat.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TestPageComponent implements OnInit {
  statisticsDataSource: any;

  displayedColumns = ['src', 'dstchannel', 'disposition'];
  //expandedDisplayedRow = ['start', 'disposition', 'diff', 'userfield'];

  expandedElement: any | null;
  math: Math;

  constructor(private callsService: GetStatService) { }

  ngOnInit() {
  }

  getCalls() {
    let sd = '2019-05-12'
    let ed = '2019-05-12'
    let op = '1250'
    let st = 'ANSWERED'

    this.callsService.getStatistics(sd, ed, op, st).subscribe((data: any) => {
      console.log(data);
      this.statisticsDataSource = data;
    },
      err => {
        console.error(err);
      })
  }
}
