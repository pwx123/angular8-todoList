import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';

import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {AppPipeModule} from '../pipes';


@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipeModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipeModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})

export class SharedModule {

}
