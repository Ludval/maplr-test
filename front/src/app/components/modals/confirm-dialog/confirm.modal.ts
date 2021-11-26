import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './confirm.modal.html',
  styleUrls: ['./confirm.modal.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmModal implements OnInit {
  public message!: string;
  public header!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { message: string; header: string }) {}

  public ngOnInit(): void {
    this.header = this.data?.header || 'Confirmation';
    this.message = this.data?.message;
  }
}
