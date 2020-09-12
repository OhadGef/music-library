import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../interfaces/song';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private  httpClient: HttpClient) {
  }

  getSongsList() {
    return this.httpClient.get('assets/data.json');
  }
}

