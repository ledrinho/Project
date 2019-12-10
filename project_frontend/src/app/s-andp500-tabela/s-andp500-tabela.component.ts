import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-s-andp500-tabela',
  templateUrl: './s-andp500-tabela.component.html',
  styleUrls: ['./s-andp500-tabela.component.css'],
  providers:[Config]
})
export class SAndp500TabelaComponent implements OnInit {
  
  sandp500Table:any;
  constructor(public http:HttpClient, public config:Config) { }

  ngOnInit() {
    this.http.get(this.config.URL+"table/sandp500", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.sandp500Table = data;
      console.log(data);
    })
  }

}
