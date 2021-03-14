import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {GalleryDataService} from './gallery-data.service';
import {CommunicationService} from '../../service/communication.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryDataResolver implements Resolve<any> {

  constructor(private _galleryDataService: GalleryDataService, private _communicationService: CommunicationService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this._communicationService.showLoaderSubject$.next(true);
    const results = 'results';
    return this._galleryDataService.getMarvelCharacters().pipe(map(response => ({characters: response.data[results]})),
      catchError(error => this.handleError(error)));
  }

  handleError(error?: string): Observable<any> {
    const message = `Retrieval Error: ${error}`;
    return of({characters: [], error: message});
  }

}
