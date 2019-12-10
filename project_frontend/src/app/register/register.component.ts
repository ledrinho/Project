import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Config } from '../config';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [Config]
  
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(public fb:FormBuilder,public http:HttpClient,public config:Config) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      ime: ["", Validators.required],
      prezime: ["", Validators.required],
      email: ["", Validators.required],
      datumRodjenja: ["", Validators.required],
      adresa: ["", Validators.required],
      grad: ["", Validators.required],
      sifra: ["", Validators.required],
      potvrdiSifru: ["", Validators.required],
      pozicija: ["", Validators.required]
    });
  }

  registrujSe(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid)
    {
      if(this.registerForm.value.sifra == this.registerForm.value.potvrdiSifru){
        this.http.post(this.config.URL + "register/save",this.registerForm.value,{
          headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
        }).subscribe(data=>{
          alert("Korisnik je uspesno registrovan");
          console.log(data);
        })
      } else {
        alert("Sifre se ne podudaraju")
      }
      
    } else {
      alert("Popuni sva polja");
    }
    
  }

}
