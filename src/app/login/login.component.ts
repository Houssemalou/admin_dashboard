import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserLogin } from '../models/userLogin';
import { HomeComponent } from '../home/home.component';
import { AuthenticationControllerService } from '../services/services';
import { AuthenticationRequest } from '../services/models';
import { TokenService } from '../services/token/token.service';



@Component({
  standalone:true,
  imports:[ FormsModule, ReactiveFormsModule,RouterLink,RouterOutlet,HomeComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  authenticatedUser!: AuthenticationRequest;
  submitted: boolean = false;
  errorMessage!: string | undefined;
  response!: string;
  
  
  constructor(private router : Router, private authService : AuthenticationControllerService, private tokenService : TokenService){}
  
  form = new FormGroup({
   email: new FormControl('', [Validators.required, Validators.email]),
   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  login(){
      this.submitted = true;
      this.authenticatedUser = {
      email:this.form.value.email as string,
      password: this.form.value.password as string
    };
    if (this.form.invalid) {
        return;
    }else{
      this.router.navigate(['sidebar']);
      /*this.authService.authenticate({
        body: this.authenticatedUser
      }).subscribe({
        next: (res) => {
          this.tokenService.token = res.token as string;
          this.router.navigate(['sidebar']);
        },
        error:(err) => {console.log(err);}
      })*/
    
    }
  }
}

