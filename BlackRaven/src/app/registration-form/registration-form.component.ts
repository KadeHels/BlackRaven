import { Component} from '@angular/core';
import {User} from '../shared/classes/user';
import {UserManager} from '../shared/classes/user-manager';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  constructor(private fb: FormBuilder) {
  }

  newUser: User = UserManager.getNewUser();
  userManager: UserManager = new UserManager();
  submitted: boolean;

  registrationForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  saveNewUser() {

    // get form values
    this.newUser.username = this.registrationForm.get('username').value;
    this.newUser.password = this.registrationForm.get('password').value;
    this.newUser.confirmPassword = this.registrationForm.get('confirmPassword').value;
    try {
      this.userManager.createNewUser(this.newUser);
    } catch (t) {
      console.log('Error' + t);
    }
  }
}
