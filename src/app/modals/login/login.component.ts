import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {userDatabase} from '../../../assets/userDatabase';
import {Store} from '@ngrx/store';
import {LoginState} from '../../state/app.reducer';
import {SetLoggedInStatus, SetUserName} from '../../state/app.actions';
import {UserDB} from '../../models/user-database.model';
import {CommunicationService} from '../../service/communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup = new UntypedFormGroup({});
  logoPath = '../../../assets/images/marvel-logo.png';

  constructor(private _formBuilder: UntypedFormBuilder, private _router: Router,
              private _loginStore: Store<LoginState>, private _communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    // add validators??? with error messages?
    this.loginForm = this._formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
    const usernameControlName = 'username';
    const passwordControlName = 'password';
    const validUser = userDatabase.filter((item) =>
      ((item.userId === this.loginForm.controls[usernameControlName].value
        && item.password === this.loginForm.controls[passwordControlName].value)));
    this.redirectUser(!!validUser.length, validUser);
  }

  redirectUser(validUserFlag: boolean, validUser: UserDB[]): void {
    if (validUserFlag) {
      this._loginStore.dispatch(new SetLoggedInStatus(true));
      this._loginStore.dispatch(new SetUserName(validUser[0].username));
      localStorage.setItem('username', validUser[0].username);
      localStorage.setItem('isLoggedInStatus', 'true');
      this._router.navigate([{outlets: {popup: null}}]);
      this._communicationService.notificationShowSubject$.next(true);
      this._communicationService.notificationDataSubject$.next({
        message: 'You have logged in successfully!',
        type: 'success'
      });
    } else {
      this._communicationService.notificationShowSubject$.next(true);
      this._communicationService.notificationDataSubject$.next({
        message: 'Invalid username or password, please try again.',
        type: 'error'
      });
      this.loginForm.reset();
    }
  }

  cancel(): void {
    this._router.navigate([{outlets: {popup: null}}]);
  }
}
