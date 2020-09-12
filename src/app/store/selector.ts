import {adapter, SongsListState} from './reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export const {selectAll, selectEntities} = adapter.getSelectors();

export const selectSongsState = createFeatureSelector<SongsListState>('songsList');
export const selectAllSongs = createSelector(selectSongsState, selectAll);
