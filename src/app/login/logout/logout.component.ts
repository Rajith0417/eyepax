import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInOutService} from 'src/app/shared/log-in-out.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userStatus: LogInOutService, private router: Router) { }

  ngOnInit(): void {
    this.userStatus.userLoggedOut();
    this.router.navigate(['/login']);
  }

}
