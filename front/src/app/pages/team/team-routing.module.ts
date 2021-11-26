import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamListPage } from './pages';

const routes: Routes = [{ path: '', component: TeamListPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {}
