import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TEAM_OPTIONS } from '@app/shared/constants';
import { TeamService } from '@app/shared/services';
import { POSITION } from '@app/shared/enums';
import { finalize } from 'rxjs';

@Component({
  templateUrl: './add-player.modal.html',
  styleUrls: ['./add-player.modal.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlayerModal implements OnInit {
  public playerForm!: FormGroup;

  public teamOptions: Array<string> = TEAM_OPTIONS;
  public positionOptions = Object.values(POSITION);

  constructor(
    private _formBuilder: FormBuilder,
    private _teamSvc: TeamService,
    private _matDialogRef: MatDialogRef<AddPlayerModal>,
    @Inject(MAT_DIALOG_DATA) private data: { year: number }
  ) {}

  public ngOnInit(): void {
    this.playerForm = this._formBuilder.group({
      number: [null, Validators.required],
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      position: [null, Validators.required],
      year: [this.data.year, Validators.required],
      is_capitain: [false, Validators.required]
    });
  }

  public addPlayer(): void {
    if (this.playerForm.invalid) {
      return;
    }

    const { year, ...player } = this.playerForm.value;

    this._teamSvc
      .addPlayer(year, player)
      .pipe(finalize(() => this._matDialogRef.close(true)))
      .subscribe();
  }
}
