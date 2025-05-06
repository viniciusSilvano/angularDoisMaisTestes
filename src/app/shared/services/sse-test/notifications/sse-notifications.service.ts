import { Injectable } from '@angular/core';
import { SseService } from '../sse-service.service';

@Injectable({
  providedIn: 'root'
})
export class SseNotificationsService extends SseService {

  protected getUrl(): string {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }
}
