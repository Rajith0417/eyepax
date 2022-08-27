import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInOutService } from 'src/app/shared/log-in-out.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit, OnDestroy {

  formValue !: FormGroup;
  userName: string = "";
  password: string = "";
  correctUser: boolean = false;
  correctPasswd: boolean = false;
  showUserError: boolean = false;
  showPaswdEerror: boolean = false;

  userLoggedIn: boolean = false;

  constructor(private FormBuilder: FormBuilder, private router: Router, private userCheck: LogInOutService) { }

  ngOnInit(): void {
    this.formValue = this.FormBuilder.group(
      {
        userName: [''],
        password: ['']
      }
    );
  }

  submitCredentials(){

    this.userName = this.formValue.value.userName;
    this.password = this.formValue.value.password;
    if(this.userName === "admin"){
      this.correctUser = true;
      this.showUserError = false;
    }
    else{
      this.showUserError = true;
    }
    if(this.password === "admin"){
      this.correctPasswd = true;
      this.showPaswdEerror = false
    }
    else{
      this.showPaswdEerror = true;
    }
    if(this.correctPasswd && this.correctUser){
      this.userCheck.userLoggedIn();
      // console.log(this.userCheck.checkUser());
      this.router.navigate(['/todo']);
    }

  }

  ngOnDestroy(){

  }

}
