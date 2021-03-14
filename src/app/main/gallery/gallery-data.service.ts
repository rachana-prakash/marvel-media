import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {

  constructor(private _httpClient: HttpClient) {
  }

  getMarvelCharacters(): Observable<any> {
    return this._httpClient.get(`https://gateway.marvel.com:443/v1/public/comics/1158/characters?apikey=${environment.apiKey}`);
  }
}
