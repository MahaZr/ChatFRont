import { Component, OnInit } from '@angular/core';
import { GesUserService } from 'src/app/shared/services/ges-user.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionutilisateur',
  templateUrl: './gestionutilisateur.component.html',
  styleUrls: ['./gestionutilisateur.component.css']
})
export class GestionutilisateurComponent implements OnInit {

  constructor(private userServ : GesUserService, private membre : LoginService,private routes : Router) { }

 public users ;
 public id;

  ngOnInit() {

    
this.getuserss();


  }

  getuserss(){

    this.id = this.membre.userrr.user._id;
    

    this.userServ.getUsers(this.id).subscribe(file => {
      this.users = file;
    })

  }

chat()
{
  this.routes.navigate(['/message']);
}
  

 

}
