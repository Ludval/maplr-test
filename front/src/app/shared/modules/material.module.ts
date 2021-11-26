import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule {}
