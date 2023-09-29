import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintDataService {
  private sprintPointsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public sprintPoints$: Observable<number> = this.sprintPointsSubject.asObservable();

  constructor() {}

  setSprintPoints(points: number): void {
    this.sprintPointsSubject.next(points);
  }

  getSprintPoints(): number {
    return this.sprintPointsSubject.value;
  }
}
