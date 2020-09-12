import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
