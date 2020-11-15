import { CreateGroupComponent } from './components/Chama/create-group/create-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full' },
  { path: 'login', component: LoginComponent,pathMatch: 'full' },
  { path: 'register', component: RegisterComponent,pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,pathMatch: 'full' },
  { path: 'creategroup', component: CreateGroupComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
