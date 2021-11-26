import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmModal } from '@app/components/modals';

import { FormValidatorDirective, NgLetDirective } from '../directives';
import { MaterialModule } from './material.module';

const CORE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const EXTERNAL_MODULES = [MaterialModule];

const DIRECTIVES = [NgLetDirective, FormValidatorDirective];

const MODALS = [ConfirmModal];

@NgModule({
  declarations: [DIRECTIVES, MODALS],
  imports: [CORE_MODULES, EXTERNAL_MODULES],
  exports: [CORE_MODULES, EXTERNAL_MODULES, DIRECTIVES, MODALS]
})
export class SharedModule {}
