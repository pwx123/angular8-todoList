import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-task-dialog',
  template: `
    <h3 mat-dialog-title>{{title}}</h3>
    <div mat-dialog-content>
      <form [formGroup]="form">
        <mat-form-field class="full-width">
          <input type="text" formControlName="content" matInput placeholder="请输入待办内容">
          <mat-error>请输入待办内容</mat-error>
        </mat-form-field>
        <mat-form-field class="full-width">
          <input matInput formControlName="dueTime" [matDatepicker]="datePicker" placeholder="请选择到期时间">
          <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>
          <mat-datepicker #datePicker disabled="false"></mat-datepicker>
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button type="button"
          mat-dialog-close
          mat-button
          (click)="onCloseClick()">取消
      </button>
      <button type="button"
          mat-raised-button
          color="primary"
          (click)="onClick()">确定
      </button>
    </div>
  `,
  styles: [`
      .mat-dialog-actions {
        justify-content: flex-end;
      }
  `]
})
export class NewTaskDialogComponent implements OnInit {

  title = '';
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewTaskDialogComponent>
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      content: ['', Validators.required],
      dueTime: [{value: '', disabled: true}]
    });
    this.title = this.data.title;
  }

  onClick() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.getRawValue());
    }
  }

  onCloseClick() {
    this.dialogRef.close(false);
  }
}
