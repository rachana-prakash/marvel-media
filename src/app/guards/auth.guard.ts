import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {LoginState} from '../state/app.reducer';
import {Store} from '@ngrx/store';
import {getLoggedInStatus} from '../state/app.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private _loginStore: Store<LoginState>, private _router: Router) {
    this._loginStore.select(getLoggedInStatus).subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.isLoggedIn) {
      this._router.navigate(['/marvelNews/home']).then(() => {
        this._router.navigate([{outlets: {popup: ['login']}}]);
      });
    }
    return this.isLoggedIn;
  }

}
