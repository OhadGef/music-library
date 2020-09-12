import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {addOrUpdateSong} from '../../store/songs-list.actrions';
import * as moment from 'moment';
import {SongsListFacadeService} from '../../store/songs-list-facade.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnChanges {
  profileForm;
  @Input() selectedSong;
  @Input() toggleAddSong;
  @Input() toggleUpdateSong;
  disabledEditForm: boolean = true;
  submitted: boolean = false;

  constructor(private store: Store, private songsListFacadeService: SongsListFacadeService) {
    this.profileForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl({value: '', disabled: this.disabledEditForm}, Validators.required),
      artist: new FormControl({value: '', disabled: this.disabledEditForm}, Validators.required),
      genre: new FormControl({value: '', disabled: this.disabledEditForm}, Validators.required),
      coverUrl: new FormControl({value: '', disabled: this.disabledEditForm}, Validators.required),
      releaseData: new FormControl({value: '', disabled: this.disabledEditForm},
        Validators.compose([Validators.required, this.dateVaidator]))
    });
  }

  dateVaidator(AC: AbstractControl) {
    if (AC && AC.value && !moment(AC.value, 'YYYY-MM-DD', true).isValid()) {
      return {'dateVaidator': true};
    }
    return null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.toggleAddSong && changes.toggleAddSong.currentValue !== null) {
      changes.toggleAddSong.currentValue ? this.disableForme() : this.enableForm();
      this.profileForm.reset();
    }
    if (changes.toggleUpdateSong && changes.toggleUpdateSong.currentValue !== null) {
      changes.toggleUpdateSong.currentValue ? this.disableForme() : this.enableForm();
    }
    if (changes.selectedSong && changes.selectedSong.currentValue !== null) {
      const {id, name, artist, genre, coverUrl, releaseData} = changes.selectedSong.currentValue;
      this.profileForm.patchValue({id, name, artist, genre, coverUrl, releaseData});
    }
  }

  cancel() {
    this.profileForm.reset();
    this.disableForme();
    this.submitted = false;
  }

  submit() {
    this.submitted = true;
    if (!this.profileForm.invalid) {
      this.disableForme();
      this.songsListFacadeService.addOrUpdateSong(this.profileForm.value);
      this.profileForm.reset();
    }
  }

  disableForme() {
    Object.keys(this.profileForm.controls)
      .forEach(val => this.profileForm.controls[val].disable());
    this.disabledEditForm = true;
  }

  enableForm() {
    Object.keys(this.profileForm.controls)
      .forEach(val => this.profileForm.controls[val].enable());
    this.disabledEditForm = false;
  }
}
