import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JlchatComponent } from './jlchat/jlchat.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'jlchat', component:JlchatComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
