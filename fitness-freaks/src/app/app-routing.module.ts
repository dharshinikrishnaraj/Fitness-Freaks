import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'sign-in', component: SignInComponent},
    {path: 'register', component: RegisterComponent},

  ])],

  exports: [RouterModule]

})
export class AppRoutingModule { }
