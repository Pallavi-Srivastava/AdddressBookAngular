import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookFormComponent } from './components/address-book-form/address-book-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'addressBook-form',
    component: AddressBookFormComponent
  },
  {
    path: 'addressBook-form/:id',
    component: AddressBookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
