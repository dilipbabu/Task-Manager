import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  lists: any;
  //tasks: any;
  tasks: any[] = [];
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //console.log(params);
      //delete this if something goes wrong !!!

      this.taskService.getTasks(params['listId']).subscribe((tasks: any) => {
        this.tasks = tasks;
      });
    });
    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    });
  }
}
