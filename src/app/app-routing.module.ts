import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AudioComponent } from './audio/audio.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:"mobile",
    component:MobileComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"audio",
    component:AudioComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
{
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
