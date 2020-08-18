import { Component, OnInit } from '@angular/core';
import {DonutApiService} from '../donut-api.service';
import { DonutList } from '../interfaces/donut-list';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts:DonutList;

  constructor(private donutService:DonutApiService) { }

  ngOnInit(): void {
    this.donutService.getDonutList().subscribe(
      (data:DonutList) => this.donuts = { ...data },
      error => console.error(error)
    );
  }

}
