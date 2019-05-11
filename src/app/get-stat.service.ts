import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStatService {

  BASE_URL = 'http://192.168.88.100:3000'
  constructor(private http: HttpClient) { }

  public getStatistics(){
    return this.http.get(this.BASE_URL+'/api/calls');
  }
}
