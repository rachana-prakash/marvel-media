import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {NotificationMessage} from '../models/communication-data.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  notificationDataSubject$: Subject<NotificationMessage> = new Subject<NotificationMessage>();
  notificationShowSubject$: Subject<boolean> = new Subject<boolean>();
  showLoaderSubject$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }
}
