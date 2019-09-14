import { Component} from '@angular/core';
import {User} from '../shared/classes/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private fb: FormBuilder) {
  }

  submitted = false;
  user: User;

loginForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
});

onSubmit() {
  this.submitted = true; // lock the submit button


  // validation

}

saveNewUser() {
  this.user.username = 'Ka';
  this.user.password = 'password';
}

diagnostic(a) {return JSON.stringify(a); }

validateLogin(user: User) {

}

passwordMatchValidator(g: FormGroup) {
  return g.get('password').value === g.get('passwordConfirm').value
     ? null : {'mismatch': true};
}

}// end
