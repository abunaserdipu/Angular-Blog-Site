import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
const material = [MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
