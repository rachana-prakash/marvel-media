import {Component, Input, OnInit} from '@angular/core';
import {NotificationMessage} from '../../models/communication-data.model';
import {CommunicationService} from '../../service/communication.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {
  @Input() notificationData: NotificationMessage = {
    message: '',
    type: ''
  };

  constructor(private _communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._communicationService.notificationShowSubject$.next(false);
    }, 1500);
  }

  closeNotification(): void {
    this._communicationService.notificationShowSubject$.next(false);
  }
}
