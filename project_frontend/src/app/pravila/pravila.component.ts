import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './../config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pravila',
  templateUrl: './pravila.component.html',
  styleUrls: ['./pravila.component.css'],
  providers: [Config]
})
export class PravilaComponent implements OnInit {
  vjerovatnoca1: any;
  vjerovatnoca2: any;
  vjerovatnoca3: any;
  vjerovatnoca4: any;
  vjerovatnoca5: any;
  vjerovatnoca6: any;
  vjerovatnoca7: any;
  vjerovatnoca8: any;
  

  constructor(public http: HttpClient, public config: Config) { }

  ngOnInit() {
     this.http.get(this.config.URL+"pravila/proracunClose", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca1 = data;
      console.log(data);


    })

     this.http.get(this.config.URL+"pravila/proracunVrednost", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca2 = data;
      console.log(data);
    })

    this.http.get(this.config.URL+"pravila/proracunCloseOpada", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca3 = data;
      console.log(data);
    })

    this.http.get(this.config.URL+"pravila/proracunPrometOpada", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca4 = data;
      console.log(data);
    })

    this.http.get(this.config.URL+"RSI/RSIPraviloM", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca5 = data;
      console.log(data);
    })

    this.http.get(this.config.URL+"RSI/RSIPravilo", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca6 = data;
      console.log(data);
    })

     this.http.get(this.config.URL+"moving/SMAClose", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca7 = data;
      console.log(data);
    })

    this.http.get(this.config.URL+"moving/SMAPromet", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.vjerovatnoca8 = data;
      console.log(data);
    })




  }



}
