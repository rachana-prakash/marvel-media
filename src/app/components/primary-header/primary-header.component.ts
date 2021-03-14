import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginState} from '../../state/app.reducer';
import {select, Store} from '@ngrx/store';
import {getLoggedInStatus, getUsername} from '../../state/app.selector';
import {SetLoggedInStatus, SetUserName} from '../../state/app.actions';
import {CommunicationService} from '../../service/communication.service';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {
  loggedInStatus = false;
  username = '';

  constructor(private _router: Router, private _loginStore: Store<LoginState>, private _communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    this._loginStore.pipe(select(getLoggedInStatus)).subscribe((status: boolean) => {
      this.loggedInStatus = status;
    });
    this._loginStore.pipe(select(getUsername)).subscribe((name: string) => {
      this.username = name.charAt(0).toUpperCase() + name.slice(1);
    });
  }

  openLoginModal(): void {
    this._router.navigate(['/marvelNews']).then(() => {
      this._router.navigate([{outlets: {popup: ['login']}}]);
    });
  }

  logout(): void {
    this._loginStore.dispatch(new SetLoggedInStatus(false));
    this._loginStore.dispatch(new SetUserName(''));
    localStorage.setItem('username', '');
    localStorage.setItem('isLoggedInStatus', 'false');
    this._router.navigate(['/marvelNews/home']).then(() => {
      this._communicationService.notificationShowSubject$.next(true);
      this._communicationService.notificationDataSubject$.next({
        message: 'You have been logged out successfully!',
        type: 'success'
      });
    });
  }

  navigateTo(path: string): void {
    if (path) {
      this._router.navigate([`/marvelNews/${path}`]);
    } else {
      this._router.navigate([`/marvelNews`]);
    }
  }

}
