import {ChangeDetectorRef, Component} from '@angular/core';
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

  constructor(private _loginStore: Store<LoginState>, private _communicationService: CommunicationService, private _cd: ChangeDetectorRef) {
    this._communicationService.notificationShowSubject$.subscribe((showNotification) => {
      this.showNotification = showNotification;
      this._cd.detectChanges();


    });
    this._communicationService.notificationDataSubject$.subscribe((data: NotificationMessage) => {
      this.notificationMessage = data;
      this._cd.detectChanges();
    });
    this._communicationService.showLoaderSubject$.subscribe((showLoader) => {
      this.showLoader = showLoader;
      this._cd.detectChanges();
    });
    this.setUserInfo();
  }

  setUserInfo(): void {
    const jsonString = localStorage.getItem('isLoggedInStatus') || 'false';
    const isLoggedInStatus = JSON.parse(jsonString);
    const username = localStorage.getItem('username') || '';
    if (username && isLoggedInStatus) {
      this._loginStore.dispatch(new SetLoggedInStatus(true));
      this._loginStore.dispatch(new SetUserName(username));
    }
  }

}
