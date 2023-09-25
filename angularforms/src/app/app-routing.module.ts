import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UserDetailsComponent } from './page/user-details/user-details.component';
import { EditProfileComponent } from './page/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path:'',component: LoginComponent
  },{
    path:'userDetails',component: UserDetailsComponent
  },
  {
    path:'editProfile',component: EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
