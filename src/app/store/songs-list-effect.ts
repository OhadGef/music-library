import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addSongs, loadSongs} from './songs-list.actrions';
import {CloudService} from '../services/cloud.service';
import {map, mergeMap} from 'rxjs/operators';
import {Song} from '../interfaces/song';

@Injectable()
export class SongsListEffect {
  constructor(private actions$: Actions, private cloud: CloudService) {
  }
  LoadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSongs),
      mergeMap(() => this.cloud.getSongsList()),
      map((songs: Array<Song>) => addSongs({payload: songs}))
    )
  );

}
