import { Component, OnInit, Input } from '@angular/core';
import { DonutDetail } from '../interfaces/donut-detail';
import { Donut } from '../interfaces/donut';
import { DonutApiService } from '../donut-api.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  @Input() donut:Donut;
  detail:DonutDetail;

  constructor(private donutService:DonutApiService) { }

  ngOnInit(): void {
    this.donutService.getDonutDetail(this.donut.id).subscribe(
      (data:DonutDetail) => this.detail = { ...data },
      error => console.error(error)
    );
  }

}
