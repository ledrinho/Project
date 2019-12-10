import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../config';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sand-p500-chart',
  templateUrl: './sand-p500-chart.component.html',
  styleUrls: ['./sand-p500-chart.component.css'],
  providers: [Config]
})
export class SandP500ChartComponent implements OnInit{

  sandp500Table:any;

  enabled:boolean = false;

  chartData:any[] = [];

  chart = [];

  macd = [];

  rsi = [];

  constructor(public http: HttpClient, public config: Config) {}


  ngOnInit(){
    this.http.get(this.config.URL + "moving/sandp500Close",{
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ).set('Access-Control-Allow-Origin','*').set("Cache-Control", "no-cache").set("Postman-Token", "8cd49191-de13-2b94-4d93-6312485965eb"),
    }).subscribe(ema => {
      console.log(ema);
      this.http.get(this.config.URL + "table/sandp500",{
        headers: new HttpHeaders().set( 'Content-Type', 'application/json' ).set('Access-Control-Allow-Origin','*').set("Cache-Control", "no-cache").set("Postman-Token", "8cd49191-de13-2b94-4d93-6312485965eb"),
      }).subscribe(data => {
        console.log(data);
        let temp_max = ema;
        let temp_min = data.map(data => data['Close']);
        let alldates = data.map(data => data.Date);

        let weatherDates = [];
        alldates.forEach(element => {
          let jsdate = new Date(element)
          weatherDates.push(jsdate.toLocaleTimeString('en',{ year: 'numeric',month : 'short', day: 'numeric'}));
        });

        console.log(weatherDates);
        console.log(temp_min);

        this.macd = new Chart('macd',{
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data:temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data:temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
              {
                data:temp_max,
                borderColor: '#3cba9f',
                fill: true
              }
            ]
          },
          options: {
            onClick: this.graphClickEvent,
            elements: {
              line: {
                  tension: 1, // disables bezier curves
                }
            },
            legend: {
              display:true
            },
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display:true
              }]
            }
          }
        })

      })
    })

    this.http.get(this.config.URL + "moving/sandp500Volume",{
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ).set('Access-Control-Allow-Origin','*').set("Cache-Control", "no-cache").set("Postman-Token", "8cd49191-de13-2b94-4d93-6312485965eb"),
    }).subscribe(ema => {
      console.log(ema);
      this.http.get(this.config.URL + "table/sandp500",{
        headers: new HttpHeaders().set( 'Content-Type', 'application/json' ).set('Access-Control-Allow-Origin','*').set("Cache-Control", "no-cache").set("Postman-Token", "8cd49191-de13-2b94-4d93-6312485965eb"),
      }).subscribe(data => {
        console.log(data);
        let temp_max = ema;
        let temp_min = data.map(data => data['Volume']);
        let alldates = data.map(data => data.Date);

        let weatherDates = [];
        alldates.forEach(element => {
          let jsdate = new Date(element)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month : 'short', day: 'numeric'}));
        });

        console.log(weatherDates);
        console.log(temp_min);

        this.chart = new Chart('canvas', {
          type: 'line',

          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              }
            ]
          },
          options: {
            onClick: this.graphClickEvent,
            elements: {
              line: {
                  tension: 1, // disables bezier curves
                }
            },
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
    })

    this.http.get(this.config.URL + "table/sandp500",{
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' ).set('Access-Control-Allow-Origin','*').set("Cache-Control", "no-cache").set("Postman-Token", "8cd49191-de13-2b94-4d93-6312485965eb"),
    }).subscribe(ema => {
      console.log(ema);
       let alldates = ema.map(ema => ema.Date);
      this.http.get(this.config.URL + "RSI/RSISandp500",{
        headers: new HttpHeaders().set( 'Content-Type', 'application/json' ).set('Access-Control-Allow-Origin','*').set("Cache-Control", "no-cache").set("Postman-Token", "8cd49191-de13-2b94-4d93-6312485965eb"),
      }).subscribe(data => {
        console.log(data);
         let temp_max = ema;
        let temp_min = data.map(data => data);


        let weatherDates = [];
        alldates.forEach(element => {
          let jsdate = new Date(element)
          weatherDates.push(jsdate.toLocaleTimeString('en',{ year: 'numeric',month : 'short', day: 'numeric'}));
        });

        console.log(weatherDates);
        console.log(temp_min);

        this.rsi = new Chart('rsi',{
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data:temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data:temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
              {
                data:temp_max,
                borderColor: '#3cba9f',
                fill: true
              }
            ]
          },
          options: {
            onClick: this.graphClickEvent,
            elements: {
              line: {
                  tension: 1, // disables bezier curves
                }
            },
            legend: {
              display:true
            },
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display:true
              }]
            }
          }
        })

      })
    })
  }

    graphClickEvent(event, array){
    console.log(array);
    console.log(event);
}

}
