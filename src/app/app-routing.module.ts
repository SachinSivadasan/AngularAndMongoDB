import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
{
  path: 'registration',
  component: RegistrationComponent
},
{
  path: 'search',
  component: SearchComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
