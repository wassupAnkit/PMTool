import { Injectable } from '@angular/core';
import { Sprint } from './sprint-list/sprint';


@Injectable({
  providedIn: 'root'
})

export class SprintService {
  private sprints: Sprint[] = [];
  private currentId = 1;
  private localStorageKey = 'sprints';

  constructor() {
    const storedSprints = localStorage.getItem(this.localStorageKey);
    if (storedSprints) {
      this.sprints = JSON.parse(storedSprints);
    }
  }

  getSprints(): Sprint[] {
    return this.sprints;
  }

  saveSprints(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.sprints));
  }

  addSprint(sprint: Sprint): void {
    sprint.id = this.currentId++;
    this.sprints.push(sprint);
    this.saveSprints();
  }

  updateSprint(updatedSprint: Sprint): void {
    const index = this.sprints.findIndex((s) => s.id === updatedSprint.id);
    if (index !== -1) {
      this.sprints[index] = { ...updatedSprint };
      this.saveSprints();
    }
  }

  deleteSprint(id: number): void {
    const index = this.sprints.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.sprints.splice(index, 1);
      this.saveSprints();
    }
  }
}