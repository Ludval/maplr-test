import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { PlayerService, TeamService } from '@app/shared/services';
import { Player, Team } from '@app/shared/interfaces';
import { ConfirmModal } from '@app/components/modals';
import { TEAM_OPTIONS } from '@app/shared/constants';

import { AddPlayerModal } from '../../components/modals';

@Component({
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListPage implements OnInit, AfterViewInit, OnDestroy {
  public displayedColumns: string[] = ['number', 'name', 'position', 'isCaptain', 'action'];
  public dataSource = new MatTableDataSource<Player>([]);

  @ViewChild(MatPaginator) public matPaginator!: MatPaginator;

  public teamOptions: Array<string> = TEAM_OPTIONS;
  public teamYear: FormControl = new FormControl();
  public team$!: Observable<Team>;

  private subscription = new Subject();

  constructor(
    private readonly _teamSvc: TeamService,
    private _matDialog: MatDialog,
    private _playerSvc: PlayerService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.teamYear.valueChanges.pipe(takeUntil(this.subscription)).subscribe(year => this.getTeamData(year));

    this.teamYear.setValue('2021');
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator;
  }

  public ngOnDestroy(): void {
    if (!this.subscription) {
      return;
    }

    this.subscription.next(null);
    this.subscription.complete();
  }

  public setPlayerCaptain(player: Player): void {
    const dialogRef = this._matDialog.open(ConfirmModal, {
      autoFocus: false,
      data: { message: 'Do you want this player as captain ?' }
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.subscription))
      .subscribe((isConfirmed: boolean) => {
        if (!isConfirmed) {
          return;
        }

        this._playerSvc
          .setCaptain(player.id)
          .pipe(takeUntil(this.subscription))
          .subscribe(() => this.getTeamData(this.teamYear.value));
      });
  }

  public addPlayer(): void {
    const dialogRef = this._matDialog.open(AddPlayerModal, {
      autoFocus: false,
      data: { year: this.teamYear.value }
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.subscription))
      .subscribe((reload: boolean) => {
        if (!reload) {
          return;
        }

        this.getTeamData(this.teamYear.value);
      });
  }

  private getTeamData(year: string): void {
    this.team$ = this._teamSvc.getOneByYear(year).pipe(tap(team => (this.dataSource.data = team?.players || [])));

    this._changeDetectorRef.detectChanges();
  }
}
