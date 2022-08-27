import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService {

  private userLogged: boolean =  false;

  constructor() { }

  checkUser(){
    return this.userLogged;
  }

  userLoggedIn(){
    this.userLogged = true;
  }

  userLoggedOut(){
    this.userLogged = false;
  }
}
