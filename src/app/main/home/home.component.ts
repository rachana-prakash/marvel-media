import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {LoginState} from '../../state/app.reducer';
import {getLoggedInStatus} from '../../state/app.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedInStatus = false;

  constructor(private _router: Router, private _loginStore: Store<LoginState>) {
  }

  ngOnInit(): void {
    this._loginStore.pipe(select(getLoggedInStatus)).subscribe((status: boolean) => {
      this.loggedInStatus = status;
    });
  }

  openLoginModal(): void {
    this._router.navigate(['/marvelNews']).then(() => {
      this._router.navigate([{outlets: {popup: ['login']}}]);
    });
  }

  routeToGallery(): void {
    this._router.navigate(['/marvelNews/gallery']);
  }

  streamNow(): void {
    window.open('https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH?cid=DTCI-Synergy-Marvel-Site-Acquisition-Originals-US-Marvel-WandaVision-EN-HomeScreenHero-Marvel_WandaVision_HomescreenHero_Jan15-NA', '_blank');
  }

  learnMore(): void {
    window.open('https://www.marvel.com/tv-shows/wandavision/1', '_blank');
  }
}
