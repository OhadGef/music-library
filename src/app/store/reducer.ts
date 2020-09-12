import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Song} from '../interfaces/song';
import {addOrUpdateSong, addSongs, deleteSong} from './songs-list.actrions';

export interface SongsListState extends EntityState<Song> {
}

export const adapter: EntityAdapter<Song> = createEntityAdapter<Song>(
  {selectId: (song) => song.id}
);

export const initialState: SongsListState = adapter.getInitialState();

const userReducer = createReducer(
  initialState,
  on(addOrUpdateSong, (state, {payload}) => {
    if (state.ids.length > 0) {
      if (payload.id !== null) {
        const existSong = state.entities[payload.id];
        payload = {...payload, id: existSong.id};
      } else {
        payload = {...payload, id: state.ids.length + 1};
      }
    }
    return adapter.upsertOne(payload, state);

  }),
  on(addSongs, (state, {payload}) => {
    return adapter.addMany(payload, state);
  }),
  on(deleteSong, (state, {id}) => {
    return adapter.removeOne(id, state);
  }),
);

export function songsListReducer(state: SongsListState, action: Action) {
  return userReducer(state, action);
}
