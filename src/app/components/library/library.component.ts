import {Component, EventEmitter, Output} from '@angular/core';
import {CloudService} from '../../services/cloud.service';
import {Observable} from 'rxjs';
import {Song} from '../../interfaces/song';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponentComponent} from '../dialog-component/dialog-component.component';
import {SongsListFacadeService} from '../../store/songs-list-facade.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  songsList$: Observable<Song[]>;
  @Output() selectedOption: EventEmitter<Song> = new EventEmitter();
  @Output() toggleAdd: EventEmitter<boolean> = new EventEmitter();
  @Output() toggleUpdate: EventEmitter<boolean> = new EventEmitter();
  toggleAddAvailable: boolean = false;
  toggleUpdateAvailable: boolean = false;
  isSelectedSong: boolean = false;
  loader: boolean = false;

  constructor(private Cloud: CloudService, private dialog: MatDialog, private songsListFacadeService: SongsListFacadeService) {
    this.songsList$ = this.songsListFacadeService.songs$;
  }

  loadSongs() {
    this.loader = true;
    this.songsList$.subscribe((data) => {
      if (data.length) {
        this.loader = false;
      }
    });
    this.songsListFacadeService.loadSongs();
  }

  addSongs() {
    this.toggleAdd.emit(this.toggleAddAvailable);
    this.toggleAddAvailable = !this.toggleAddAvailable;
  }

  updateSong() {
    if (this.isSelectedSong) {
      this.toggleUpdate.emit(this.toggleUpdateAvailable);
      this.toggleUpdateAvailable = !this.toggleUpdateAvailable;
    } else {
      alert('please select a song to edit');
    }
  }

  delete(songId: number) {
    const dialogRef = this.dialog.open(DialogComponentComponent);
    dialogRef.afterClosed().subscribe(
      (data) => data ? this.songsListFacadeService.deleteSong(songId) : null
    );
  }

  selectedSong(song) {
    this.selectedOption.emit(song);
    this.isSelectedSong = true;
  }
}
