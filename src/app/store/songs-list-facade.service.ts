import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Song} from '../interfaces/song';
import {addOrUpdateSong, deleteSong, loadSongs} from './songs-list.actrions';
import {selectAllSongs} from './selector';

@Injectable({
  providedIn: 'root'
})
export class SongsListFacadeService {

  songs$: Observable<Array<Song>>;

  constructor(private store: Store) {
    this.songs$ = this.store.pipe(select(selectAllSongs));
  }

  loadSongs() {
    this.store.dispatch(loadSongs());
  }

  deleteSong(id: number) {
    this.store.dispatch(deleteSong({id}));
  }

  addOrUpdateSong(song: Song) {
    this.store.dispatch(addOrUpdateSong({payload: {...song}}));
  }

}
