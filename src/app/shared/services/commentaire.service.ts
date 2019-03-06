import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) {}
    public addComment(idEnv, idDest, corp){
      return this.http.post<any>('http://localhost:3003/message/ajoutmsg/'+ idEnv +'/'+ idDest,corp);
      
    }
    
    listerComment(idEnv, idDest) {
      return this.http.get<any>('http://localhost:3003/message/listermsg/'  +idEnv+'/'+ idDest); 

    }

   
   }


  
   
