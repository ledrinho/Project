import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Config]
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup;
  constructor(public fb:FormBuilder, public http:HttpClient, public config:Config,public _router:Router) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({

      email:["", Validators.required],
      sifra:["", Validators.required]
    });
  }
LogujSe(){
  
  this.http.post(this.config.URL + "login/login",this.LoginForm.value,{
    headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
  }).subscribe(data=>{
    console.log(data);
    localStorage.setItem("user",JSON.stringify(data));
    this._router.navigate(['/upload'])
    window.location.reload()
  })
}

}
