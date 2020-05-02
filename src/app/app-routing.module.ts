import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardViewComponent } from './components/card-view/card-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'love',
    pathMatch: 'prefix'
  }, {
    path: ':typeOfCards',
    component: CardsComponent
  }, {
    path: ':typeOfCards/:id/:name',
    component: CardViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
