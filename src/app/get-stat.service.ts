import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStatService {

  BASE_URL = 'http://newstatistics.intra'
  constructor(private http: HttpClient) { }

  public getStatistics(_startDate: string, _endDate: string, _operator: string, _status: string) {
    let body = {
      startDate: _startDate,
      endDate: _endDate,
      operator: _operator,
      status: _status
    }
    return this.http.post(this.BASE_URL + '/api/calls', body);
  }
}
