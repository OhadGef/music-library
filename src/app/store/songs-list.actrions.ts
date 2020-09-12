import {createAction, props} from '@ngrx/store';
import {Song} from '../interfaces/song';

export const loadSongs = createAction(
  '[MusicLibrary] loadSongs'
);

export const addSongs = createAction(
  '[MusicLibrary] addSongs',
  props<{ payload: Array<Song> }>()
);

export const addOrUpdateSong = createAction(
  '  [MusicLibrary] addOrUpdateSong',
  props<{ payload: Song }>()
);
export const deleteSong = createAction(
  '  [MusicLibrary] deleteSong',
  props<{ id: number }>()
);
