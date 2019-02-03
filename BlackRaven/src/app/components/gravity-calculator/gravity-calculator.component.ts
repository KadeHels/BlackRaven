import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gravity-calculator',
  templateUrl: './gravity-calculator.component.html',
  styleUrls: ['./gravity-calculator.component.css']
})
export class GravityCalculatorComponent implements OnInit {

public description = 'Gravity Calculator use the calc button to solve for the desired input';

  gravityUnitList = ['m/s^2', 'ft/s^2'];
  distanceUnitList = ['m', 'ft'];
  timeUnitList = ['sec', 'min'];

  // d(m) = G(m/s*s) * t(s)*t(s)
  gravity: number;
  distance: number;
  time: number;

  gravityUnit = this.gravityUnitList[0];
  distanceUnit = this.distanceUnitList[0];
  timeUnit: string;

  constructor() { }

  ngOnInit() {
    this.gravity = 9.8;
    this.time = 3;
    this.calcDistance();
  }

  // Calculate Methods
  calcDistance() {
    // meters
    this.distance =  this.convertToMeters(this.gravity, this.gravityUnit) * Math.pow(this.time, 2);

    // feet
    if (this.distanceUnit !== this.distanceUnitList[0]) {
      this.distance *= (33 / 36);
    }
  }

  calcTime () {
    this.time = Math.sqrt(this.convertToMeters(this.distance, this.distanceUnit) / this.convertToMeters(this.gravity, this.gravityUnit));
  }

  calcGravity() {
    // meters
    this.gravity = this.convertToMeters(this.distance, this.distanceUnit) / Math.pow(this.time, 2);

    // feet
    if (this.gravityUnit !== this.gravityUnitList[0]) {
      this.gravity *= (33 / 36);
    }
  }

  // Change Units Methods
  changeGravity() {
    if (this.gravityUnit === this.gravityUnitList[0]) {
      this.gravityUnit = this.gravityUnitList[1];
    } else {
      this.gravityUnit = this.gravityUnitList[0];
    }

    this.calcGravity();
  }

  changeDistance() {
    if (this.distanceUnit === this.distanceUnitList[0]) {
      this.distanceUnit = this.distanceUnitList[1];
    } else {
      this.distanceUnit = this.distanceUnitList[0] ;
    }

    this.calcDistance();
  }


  // Private Methods
  private convertToMeters(input: number, unit: string): number {
    // feet
    if (unit === this.distanceUnitList[1] || unit === this.gravityUnitList[1]) {
      return input *= 36 / 33;
    }
    return input;
  }

  private convertToFeet(input: number, unit: string): number {
    // feet
    if (unit === this.distanceUnitList[1] || unit === this.gravityUnitList[1]) {
      return input;
    }
    return input *= 33 / 36;
  }

}
