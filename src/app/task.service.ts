import { Injectable } from '@angular/core';
import { Task } from '../app/taskAll/task.model';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private currentId = 1;
  private localStorageKey = 'tasks';

  constructor() {
    // Load tasks from localStorage when the service is initialized
    const storedTasks = localStorage.getItem(this.localStorageKey);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  saveTasks(): void {
    // Save tasks to localStorage whenever the data changes
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  addTask(task: Task): void {
    task.id = this.currentId++;
    this.tasks.push(task);
    this.saveTasks();
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
      this.saveTasks();
    }
  }

  deleteTask(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }
}

