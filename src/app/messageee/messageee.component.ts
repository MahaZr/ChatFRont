import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../shared/services/commentaire.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-messageee',
  templateUrl: './messageee.component.html',
  styleUrls: ['./messageee.component.css']
})
export class MessageeeComponent implements OnInit {
  public idArt = "";
  public art;
  public status = false;
  public corp:string;
  public corpss = { corps : ""};
  public mesge;
  public user;
  public userName;
  
  constructor( private message: CommentaireService ,  private routes: ActivatedRoute, private rt : Router, private auth : LoginService) { }

  ngOnInit() {
    //let id = this.routes.snapshot.paramMap.get('id');
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.idArt = id;
      this.user = this.auth.getUser();
      console.log(this.user);
      console.log(this.idArt);
    });


   

    this.message.listerComment( ).subscribe(file => {
      this.message = file;
      console.log(file);
    });
    

  

}
onSelect(aut){

  this.rt.navigate(['/artbyaut',aut]); 

}

submit(){

  this.userName = this.user.user.name + ' '+this.user.user.lastname ;
  this.corpss.corps= this.corp;
  this.message.addComment(this.userName,this.idArt,this.corpss).subscribe(file => {
    console.log(file);
    console.log(this.corpss);
    this.listermsg();
 
  });
}

listermsg(){

  this.message.listerComment( ).subscribe(file => {
  this.message = file;
  console.log(file);

});

}


}





