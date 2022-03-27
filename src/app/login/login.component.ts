import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'JLchat';
  public registro:boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email] ),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })
  registroForm = new FormGroup({
    nombreCompleto : new FormControl(''),
    email: new FormControl(''),
    usuario: new FormControl(''),
    contraseña: new FormControl('')
  });
  get emailLogin(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get contrasenaLogin():FormControl{
    return this.loginForm.get('contraseña') as FormControl;
  }
  get nombreCompletoRegistrar(): FormControl{
    return this.loginForm.get('nombreCompleto') as FormControl;
  }
  get emailRegistrar(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get usuarioRegistrar(): FormControl{
    return this.loginForm.get('usuario') as FormControl;
  }
  get contraseñaRegistrar():FormControl{
    return this.loginForm.get('contraseña') as FormControl;
  }
  
  
  cambiarFormulario():void{
    this.registro = (this.registro===true) ?false :true
  }
}
