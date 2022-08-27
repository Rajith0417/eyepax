import { Component, OnInit } from '@angular/core';

import {LogInOutService} from 'src/app/shared/log-in-out.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLoggedIn: boolean = false;

  constructor(private logInOut: LogInOutService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.logInOut.checkUser();
  }
}
