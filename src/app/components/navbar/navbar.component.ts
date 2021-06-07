import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myDate: Date;
  constructor() {}

  ngOnInit(): void {
    this.TimeTicker();
  }
  
  TimeTicker() {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }
}
