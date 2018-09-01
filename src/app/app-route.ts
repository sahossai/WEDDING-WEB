import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'file-upload', component: FileUploadComponent},
  // {path: 'users', component: UsersComponent, children: [
  //   {path: 'user-list', component: UserListComponent},
  //   {path: ':user', component: UserDetailComponent},
  // ]},
  // {path: 'data', component: DataComponent, children: [
  //   {path: ':month', component: ItemListComponent, children: [
  //     {path: 'scorecard', component: ScoreListComponent},
  //     {path: 'parameter', component: ParameterListComponent},
  //     {path: 'month-data', component: MonthYearListComponent}
  //   ]}
  // ]}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouteModule {

}
