import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [Config]
})
export class ChartsComponent implements OnInit {

  constructor(public http:HttpClient, public config: Config) { }

  ngOnInit() {
  }

}
