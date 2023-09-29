import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sprint } from './sprint';
import { SprintService } from 'app/sprint.service';
import { SprintDataService } from 'app/sprint-data.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  sprints: Sprint[] = [];
  newSprint: Sprint = {isEditing:true, id: 0, name: '', startDate: new Date(), endDate: new Date(), points: 0 };

  @Output() sprintDone: EventEmitter<Sprint> = new EventEmitter<Sprint>();
  sprintDataService: any;
  constructor(private sprintService: SprintService) {}

  ngOnInit(): void {
    this.sprints = this.sprintService.getSprints();
  }

  addSprint(): void {
    this.sprintService.addSprint(this.newSprint);
    this.newSprint = {isEditing:true, id: 0, name: '', startDate: new Date(), endDate: new Date(), points: 0 };
  }

  editSprint(sprint: Sprint): void {
    sprint.isEditing = true;
    sprint.name = sprint.name;
    sprint.startDate = sprint.startDate;
    sprint.endDate = sprint.endDate;
  }

  updateSprint(updatedSprint: Sprint): void {
    if (updatedSprint.isEditing) {
      updatedSprint.isEditing = false;
      this.sprintService.updateSprint(updatedSprint);
    }
  }

  deleteSprint(id: number): void {
    const sprintIndex = this.sprints.findIndex((sprint) => sprint.id === id);
    if (sprintIndex !== -1) {
      if (this.sprints[sprintIndex].isEditing) {
        this.sprints[sprintIndex].isEditing = false;
      }
      this.sprints.splice(sprintIndex, 1);
      this.sprintService.saveSprints();
    }
  }

  SprintPoints(sprint: Sprint): void {
    
    this.sprintService.updateSprint(sprint);
  }

  toggleSprintDone(sprint: Sprint): void {
    sprint.points = sprint.points === 0 ? 1 : 0;
    // Emit the "Done" event with the sprint points
    this.sprintService.updateSprint(sprint);
    this.sprintDataService.setSprintPoints(sprint.points);
  }

}
