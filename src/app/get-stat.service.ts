import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStatService {

  BASE_URL = 'http://192.168.88.100:3000'
  constructor(private http: HttpClient) { }

  public getStatistics(_startDate: string,_operator: string){
    let body = {
      startDate:_startDate,
	    endDate:"2019-05-10",
	    operator:_operator,
	    status:"BUSY"
    }
    return this.http.post(this.BASE_URL+'/api/calls',body);
  }
}
