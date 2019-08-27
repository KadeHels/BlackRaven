import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-kade',
  templateUrl: './about-kade.component.html',
  styleUrls: ['./about-kade.component.css']
})
export class AboutKadeComponent implements OnInit {
  public description = 'Kade Helseth is a dedicated software engineer with a passion for Full Stack development.';

  constructor() { }

  ngOnInit() {
  }

}
