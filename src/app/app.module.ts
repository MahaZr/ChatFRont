import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/Http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import {AuthGuard} from './auth.guard'
import { MessageeeComponent } from './messageee/messageee.component';

  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    HomeComponent,
       
 
    GestionutilisateurComponent,
    MessageeeComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    HttpModule,
    HttpClientModule
    
    
  



  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
