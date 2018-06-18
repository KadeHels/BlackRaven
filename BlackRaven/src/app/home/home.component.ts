import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private welcomeMessage = 'Welcome to Black Raven a site developed by Kade Helseth and Cesar Perez';
  private game = {
    imageUrl: 'http://mathworld.wolfram.com/images/eps-gif/Tic-Tac-Toe_600.gif',
    title: 'Tic Tac Toe',
    description: 'Classic Family Game Reinvented for the new age man'
  };

  constructor() {
   }

  ngOnInit() {
  }

}
