import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';


const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'users', component: UserPageComponent },
	{ path: 'users/:id/:login', component: UserEditPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
