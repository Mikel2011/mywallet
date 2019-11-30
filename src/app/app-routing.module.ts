import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
// import { UnderHeaderComponent } from './under-header/under-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [

  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: '', component:HeaderComponent },
  { path: 'about', component: AboutComponent},
  { path: 'main-body', component: MainBodyComponent},
  { path: 'user-list', component: UsersListComponent},
  { path: 'user-list/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
