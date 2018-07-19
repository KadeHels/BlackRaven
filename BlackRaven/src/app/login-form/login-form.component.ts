import { Component} from '@angular/core';
import {User} from '../shared/user' 
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
powers = ['super weak', 'extra long hair', 'blushing', 'smelly farts']

model = new User('super-base', 'two left hands');


submitted = false;

onSubmit() {this.submitted = true; }

get diagnostic() {return JSON.stringify(this.model); }

}

