import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginState} from './state/app.reducer';
import {SetLoggedInStatus, SetUserName} from './state/app.actions';
import {CommunicationService} from './service/communication.service';
import {NotificationMessage} from './models/communication-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationMessage: NotificationMessage = {
    message: '',
    type: ''
  };
  showNotification = false;
  showLoader = false;

  constructor(private _loginStore: Store<LoginState>, private _communicationService: CommunicationService) {
    this._communicationService.notificationShowSubject$.subscribe((showNotification) => {
      this.showNotification = showNotification;
    });
    this._communicationService.notificationDataSubject$.subscribe((data: NotificationMessage) => {
      this.notificationMessage = data;
    });
    this._communicationService.showLoaderSubject$.subscribe((showLoader) => {
      this.showLoader = showLoader;
    });
    const jsonString = localStorage.getItem('isLoggedInStatus') || '';
    const isLoggedInStatus = JSON.parse(jsonString) || false;
    const username = localStorage.getItem('username') || '';
    if (username && isLoggedInStatus) {
      this._loginStore.dispatch(new SetLoggedInStatus(true));
      this._loginStore.dispatch(new SetUserName(username));
    }
  }

}
