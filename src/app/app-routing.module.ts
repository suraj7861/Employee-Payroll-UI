import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from "./components/home/home.component"
import {DashboardComponent} from "./components/dashboard/dashboard.component"
import { LoginPageComponent } from './components/login-page/login-page.component';

// {path:'', component:HomeComponent},
const routes: Routes = [
{path:'dashboard', component : DashboardComponent},
{path:'home', component : HomeComponent},
{path:'loginPage', component : LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
