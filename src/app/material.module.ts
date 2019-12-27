import { NgModule } from '@angular/core';
import {
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTableModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatButtonModule,
  MatProgressBar,
  MatProgressBarModule
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

const modules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatLineModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatTableModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatProgressBarModule
];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
