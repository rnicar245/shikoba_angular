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
      console.log("Oh sí señor cangrejo");
      this.fire.user.subscribe(flamingo => {
        console.log(flamingo.email)
      })
      
      }, err => {
        console.log("Cagaste mi rey");
      })
  }

  logout(){
    this.fire.signOut().then(res => {
      console.log("Adiós chulo");
      }, err => {
        console.log("There is no scape");
      })
  }
}
