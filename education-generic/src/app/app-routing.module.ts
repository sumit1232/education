import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomapageComponent } from './homapage/homapage.component';
import { AssetsComponent } from './assets/assets.component';
import { RegistrationComponent } from './registration/registration.component';
import { MemberformComponent } from './memberform/memberform.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path: 'home',component: HomapageComponent },
  {path: 'assets',component: AssetsComponent },
  {path: 'registration',component: RegistrationComponent },
  {path: 'member',component:  MemberformComponent},
  {path: 'createacc',component:  SignupComponent},
  {path: 'todolist',component:  TodolistComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
