import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageeeComponent} from './messageee/messageee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'article/:id', component: ArticleComponent, canActivate: [AuthGuard] },
 
  { path: 'register', component: RegisterComponent },
  { path: 'message', component: MessageeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'guser', component: GestionutilisateurComponent },
      { path: "**", component: HomeComponent }
  /*{
     path: '', redirectTo: 'home'
  //   //path:'**' , redirectTo: 'register'
  //   path:'', redirectTo: 'login'
   }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MessageeeComponent, RegisterComponent, LoginComponent, NavbarComponent]
