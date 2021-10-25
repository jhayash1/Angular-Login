import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './popup/popup.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path : '' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent},
  { path: '', component: SidebarComponent, children: [
    { path : 'dashboard' , component: DashboardComponent },
    { path : 'service' , component: ServiceComponent},
    { path : 'teams' , component: TeamsComponent},
    { path : 'popup' , component: PopupComponent},
    { path : 'api' , component: ApiComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
