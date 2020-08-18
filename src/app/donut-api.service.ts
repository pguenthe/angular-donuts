import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut } from './interfaces/donut';
import { DonutList } from './interfaces/donut-list';
import { DonutDetail } from './interfaces/donut-detail';

@Injectable({
  providedIn: 'root'
})

export class DonutApiService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts';
  constructor(private http:HttpClient) { }

  getDonutList() {
    return this.http.get<DonutList>(`${this.apiUrl}.json`);
  }

  getDonutDetail(id:number) {
    return this.http.get<DonutDetail>(`${this.apiUrl}/${id}.json`);
  }
}
