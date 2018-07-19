import { Component } from '@angular/core';

import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Black Raven';

  // Main user for the site
  public sessionUser: User;
}
