import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServ : HomeService, private routes : Router, private log : LoginService) { }
public articles;
  ngOnInit() {


  }
 

}
