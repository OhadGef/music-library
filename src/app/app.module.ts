import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {LibraryComponent} from './components/library/library.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {SongsListEffect} from './store/songs-list-effect';
import {SongDetailsComponent} from './components/song-details/song-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogComponentComponent} from './components/dialog-component/dialog-component.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    SongDetailsComponent,
    DialogComponentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([SongsListEffect]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
