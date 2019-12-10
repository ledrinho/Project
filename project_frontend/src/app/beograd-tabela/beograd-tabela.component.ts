import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-beograd-tabela',
  templateUrl: './beograd-tabela.component.html',
  styleUrls: ['./beograd-tabela.component.css'],
  providers:[Config]
})
export class BeogradTabelaComponent implements OnInit {


  beogradTable:any;
  constructor(public http:HttpClient, public config:Config) { }

  ngOnInit() {

    this.http.get(this.config.URL+"table/beograd", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data=>{
      this.beogradTable = data;
      console.log(data);
    })
  }

}
