import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserLogin } from '../models/userLogin';
import { HomeComponent } from '../home/home.component';



@Component({
  standalone:true,
  imports:[ FormsModule, ReactiveFormsModule,RouterLink,RouterOutlet,HomeComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  authenticatedUser!: UserLogin;
  submitted: boolean = false;
  errorMessage!: string | undefined;
  response!: string;
  
  
  constructor(private router : Router){}
  
  form = new FormGroup({
   email: new FormControl('', [Validators.required, Validators.email]),
   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  login(){
    /*this.submitted = true;
    const user: UserLogin = {
      email:this.form.value.email,
      password: this.form.value.password
    };
    if (this.form.invalid) {
        return;
    }else{
      this.userService.login(user).subscribe(
        response => {
          if (response) {
            console.log(response.token);
            // Successfully logged in, redirect to home page or any other page
            //this.router.navigate(['/home']);
          } else {
            // Show error message
            this.errorMessage = response.message;
          }
        });*/
      
    }
  
}

