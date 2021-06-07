import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
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
