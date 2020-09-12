import {ActionReducer, ActionReducerMap} from '@ngrx/store';
import * as songs from './reducer';

export interface State {
  songsList: songs.SongsListState
}

export const reducers: ActionReducerMap<State> = {
  songsList: songs.songsListReducer
};
