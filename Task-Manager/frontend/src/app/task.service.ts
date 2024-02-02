import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { List } from './models/list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
  // createList(title: string) {
  //   // We want to send a web request to create a list

  //   return this.webReqService.post('lists', { title }) as Observable<List>;
  // }

  createList(title: string, listId?: string) {
    // If listId is provided, associate the task with the specified list
    const body = listId ? { title, listId } : { title };
    return this.webReqService.post('lists', body) as Observable<List>;
  }

  getLists() {
    return this.webReqService.get('lists');
  }
}
