import { PapaParseService } from 'ngx-papaparse';
import { Config } from './../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-aplikacija',
  templateUrl: './aplikacija.component.html',
  styleUrls: ['./aplikacija.component.css'],
  providers: [Config]
})
export class AplikacijaComponent implements OnInit {

 procitanJson: any;

  show1: Boolean = false;

  counter: Number = 0;
  

  json: any[] = [];

  event2: EventEmitter<any> = new EventEmitter;

  vjerovatnoca1: any;
  vjerovatnoca2: any;
  vjerovatnoca3: any;
  vjerovatnoca4: any;
  vjerovatnoca5: any;
  vjerovatnoca6: any;
  vjerovatnoca7: any;
  vjerovatnoca8: any;

  constructor(public http: HttpClient, public config: Config, public papa: PapaParseService) { }

  ngOnInit() {


  }

  readJsonForZagreb(event) {
    var file = event.srcElement.files[0];

    this.papa.parse(file, {
      complete: (results, file) => {
        console.log(results);
          results.data.forEach(element => {
            if (this.counter != 0) {
              console.log(element[0]);
              console.log(element[5]);
              let json1 = {'Datum': element[0], 'Najniža': element[3], 'Najviša': element[2], 'Promjena': element[5], 'Prva': element[1], 'Zadnja': element[4], 'Promet_dionica_u_sastavu_indeksa': element[6]}

              this.json.push(json1);
            }
            this.counter = 1;
          });
      }
  });

  }

  readJsonForSandP500(event){
    var file = event.srcElement.files[0];

    this.papa.parse(file, {
      complete: (results, file) => {
        console.log(results);
          results.data.forEach(element => {
            if (this.counter != 0)
            {
              console.log(element);
              let json1 = {'Date': element[0], 'Open': element[1], 'High': element[2], 'Low': element[3], 'Close': element[4], 'Adj_Close': element[5], 'Volume': element[6]}

              this.json.push(json1);
            }
            this.counter = 1;
          });
      }
    });
  }

  readJsonForBeograd(event){
    var file = event.srcElement.files[0];

    this.papa.parse(file, {
      complete: (results, file) => {
        console.log(results);
          results.data.forEach(element => {
            if (this.counter != 0)
            {
              // console.log(element);
              let json1 = {'Datum_Trgovanja': element[0], 'Vrednost': element[1], 'Promena': element[2], 'Open': element[3], 'Max': element[4], 'Min': element[5], 'Promet': element[6]}

              this.json.push(json1);
            }
            this.counter = 1;
          });
          console.log(this.json);
      }
    });
  }
  


  show()
  {
    this.show1 = this.show1 ? false : true;
    this.http.post(this.config.URL + "upload/show", JSON.parse(localStorage.getItem("json")), {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    } ).subscribe(data => {
      localStorage.clear();
      console.log(data);
    }, err => {
      console.log(err);
    })

   this.http.get(this.config.URL + "pravilaNovi/proracunClose", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca1 = data;
      console.log(data);


    })

     this.http.get(this.config.URL + "pravilaNovi/proracunVrednost", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca2 = data;
      console.log(data);
    })

    this.http.get(this.config.URL + "pravilaNovi/proracunCloseOpada", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca3 = data;
      console.log(data);
    })

    this.http.get(this.config.URL + "pravilaNovi/proracunPrometOpada", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca4 = data;
      console.log(data);
    })

    this.http.get(this.config.URL + "RSINovi/RSIPraviloM", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca5 = data;
      console.log(data);
    })

    this.http.get(this.config.URL + "RSINovi/RSIPravilo", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca6 = data;
      console.log(data);
    })

     this.http.get(this.config.URL + "movingNovi/SMAClose", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca7 = data;
      console.log(data);
    })

    this.http.get(this.config.URL + "movingNovi/SMAPromet", {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    }).subscribe(data => {
      this.vjerovatnoca8 = data;
      console.log(data);
    })

  }


  uploadZagreb(){
    this.http.post(this.config.URL + "uploadNovi/zagreb", this.json, {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    } ).subscribe(data => {
      localStorage.clear();
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  uploadSandP500(){

    this.http.post(this.config.URL + "uploadNovi/sandP500", this.json, {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    } ).subscribe(data => {
      localStorage.clear();
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  uploadBeograd(){
    this.http.post(this.config.URL + "uploadNovi/beograd", this.json, {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ),
    } ).subscribe(data => {
      localStorage.clear();
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
