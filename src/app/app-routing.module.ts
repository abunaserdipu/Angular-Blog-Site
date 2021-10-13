import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';

const routes: Routes = [
  {path:"blog-cards", component:BlogCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
