import { SharedModule } from '@app/shared/modules';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeamRoutingModule } from './team-routing.module';
import { AddPlayerModal } from './components/modals';
import { TeamListPage } from './pages';

const PAGES = [TeamListPage];

const MODALS = [AddPlayerModal];

@NgModule({
  declarations: [PAGES, MODALS],
  imports: [CommonModule, TeamRoutingModule, SharedModule]
})
export class TeamModule {}
