import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private WebReqService: WebRequestService) {}
  createList(title: string) {
    // We want to send a web request to create a list

    return this.WebReqService.post('list', { title });
  }
}
