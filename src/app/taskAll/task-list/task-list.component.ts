import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from 'app/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '' };
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    this.taskService.addTask(this.newTask);
    this.newTask = { id: 0, title: '', description: '' };
  }

  editTask(task: Task): void {
    this.editingTask = { ...task };
  }

  updateTask(): void {
    if (this.editingTask) {
      this.taskService.updateTask(this.editingTask);
      this.editingTask = null;
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
