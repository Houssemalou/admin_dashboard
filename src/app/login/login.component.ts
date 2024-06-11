import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInModel } from '../models/client.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  loading = false;
  submitted = false;
  returnUrl: string="";
  SignInObj: SignInModel = {
    id: null,
    lastname: '',
    firstname: '',
    email: '',
    MotDePasse: '',
    phonenumber: 0,
    creationDate:null,
 

  
  };
  errorMessage: string | undefined;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private auth:LoginService
  
  ) {

  }

  ngOnInit() {
    
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.auth.login(this.SignInObj).subscribe(
      response => {  
        alert('Login success!');
        // this.auth.storeToken(response.token);
        // this.router.navigateByUrl('/shop');
      },
      error => {
        if (error.status === 400) {
          this.errorMessage = 'Bad Request';
        } else if (error.status === 404) {
          this.errorMessage = 'User not found';
        } else {
          this.errorMessage = 'An unexpected error occurred';
        }
      }
    );
  }
}
