import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

const material = [MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatTableModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
