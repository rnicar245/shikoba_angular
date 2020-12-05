import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fire:AngularFireAuth) {}

  login(){
    this.fire.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then(res => {
      console.log("Logeado");
      this.fire.user.subscribe(lg => {
        console.log(lg.email)
      })
      
      }, err => {
        console.log("Error al logearse");
      })
  }

  logout(){
    this.fire.signOut().then(res => {
      console.log("Deslogeado");
      }, err => {
        console.log("Error al deslogearse");
      })
  }
}
