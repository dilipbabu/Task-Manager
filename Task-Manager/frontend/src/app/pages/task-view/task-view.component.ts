import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent implements OnInit {
  constructor(private TaskService: TaskService) {}

  ngOnInit() {}

  createNewList() {
    this.TaskService.createList('Testing').subscribe((response: any) => {
      console.log(response);
    });
  }
}
