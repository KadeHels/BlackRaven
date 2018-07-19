import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gravity-calculator',
  templateUrl: './gravity-calculator.component.html',
  styleUrls: ['./gravity-calculator.component.css']
})
export class GravityCalculatorComponent implements OnInit {

  // d(m) = G(m/s*s) * t(s)*t(s)
  gravity: number;
  distance: number;
  time: number;

  calcDistance() {
    this.distance =  this.gravity * Math.pow(this.time, 2);
  }

  calcTime () {
    this.time = Math.sqrt(this.distance / this.gravity);
  }

  calcGravity() {
   this.gravity = this.distance / Math.pow(this.time, 2);
  }

  constructor() { }

  ngOnInit() {
    this.gravity = 9.8;
    this.time = 3;
    this.calcDistance();
  }

}
