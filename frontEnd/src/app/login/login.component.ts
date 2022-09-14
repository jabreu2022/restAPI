import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl(),
    password: new FormControl()
  });
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log(this.loginForm.get("user")?.value);
    //console.log('Name:' + this.loginForm.get('user').value);
} 

}
