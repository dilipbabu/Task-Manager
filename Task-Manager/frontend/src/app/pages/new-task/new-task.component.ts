import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit() {}
  createTask(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);

      // Now we navigate to /lists/response._id
    });
  }
}
