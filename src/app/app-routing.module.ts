
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { CustomizeComponent } from './customize/customize.component';

const routes: Routes = [
  {path:"blog-cards", component:BlogCardsComponent},
  {path:"customize", component:CustomizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
