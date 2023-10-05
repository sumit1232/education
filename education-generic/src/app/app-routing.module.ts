import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomapageComponent } from './homapage/homapage.component';
import { AssetsComponent } from './assets/assets.component';
import { RegistrationComponent } from './registration/registration.component';
import { MemberformComponent } from './memberform/memberform.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PostApiComponent } from './post-api/post-api.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path: 'home',component: HomapageComponent },
  {path: 'assets',component: AssetsComponent },
  {path: 'registration',component: RegistrationComponent },
  {path: 'member',component:  MemberformComponent},
  {path: 'createacc',component:  SignupComponent},
  {path: 'todolist',component:  TodolistComponent},
  {path: 'postapi',component:  PostApiComponent},
  {path: 'login',component:  LoginComponent},
  {path: 'dashboard',component:  DashboardComponent},
  {path: 'staff',component:  StaffComponent},



  {path: 'test',component:  TestComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
