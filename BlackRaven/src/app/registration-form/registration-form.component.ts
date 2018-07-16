import { Component } from '@angular/core';

import { User } from '../shared/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  newUser = new User();
  submitted = false;

  onSubmit() {
    let saveSuccessful = false;
    this.submitted = true;

    if (this.validateForm()) {
      saveSuccessful = this.saveUser(this.createNewUser());
    }

    return saveSuccessful;
  }

  private validateForm () {
    return this.newUser.password === this.newUser.confirmPassword;
  }

  private createNewUser() {
    return new User(this.newUser.name, this.newUser.password, this.newUser.confirmPassword);
  }

  private saveUser(user: User) {
    // todo save this user
    console.log('User Saved: ' + JSON.stringify(user));
    return true;
  }

  // get diagonastic() { return JSON.stringify(this.newUser); }
}
