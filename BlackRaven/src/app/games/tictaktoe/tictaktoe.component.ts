import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictaktoe',
  templateUrl: './tictaktoe.component.html',
  styleUrls: ['./tictaktoe.component.css']
})
export class TictaktoeComponent implements OnInit {

  private title = 'Tic Tak Toe';
  private board;
  topLeft: string;
  topCenter: string;
  topRight: string;
  centerLeft: string;
  centerCenter: string;
  centerRight: string;
  bottomLeft: string;
  bottomCenter: string;
  bottomRight: string;


  constructor() { }

  ngOnInit() {
  }

  // onClick(x: number, y: number){

  // }
}

