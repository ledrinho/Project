import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user:any;

  constructor(public _router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("user")){
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['login'])
    window.location.reload();
  }

}
