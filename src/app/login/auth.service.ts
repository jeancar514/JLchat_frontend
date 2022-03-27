import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}
  registrarse(email:string,contraseña:string){
    this.auth.createUserWithEmailAndPassword(email,contraseña);
    return this.auth.user
  }
  login(email:string,contraseña:string){
    this.auth.signInWithEmailAndPassword(email,contraseña);
  }
}
