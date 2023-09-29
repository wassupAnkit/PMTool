import { Component,OnInit } from '@angular/core';
import { SprintDataService } from 'app/sprint-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  sprintPoints: number =0;

  constructor(private sprintDataService: SprintDataService) {}

  ngOnInit(): void {
    this.sprintDataService.sprintPoints$.subscribe((points) => {
      this.sprintPoints = points;
    });  }
  currentDate: Date = new Date();


}
