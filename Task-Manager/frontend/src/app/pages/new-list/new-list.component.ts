import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit() {}
  createList(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);

      // Now we navigate to /lists/response._id
    });
  }

  onNewClick() {
    console.log('Button clicked');
    this.router.navigate(['']);
  }
}
