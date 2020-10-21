import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../security/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.userNameEvent$.subscribe((name) => {
      this.userName = name;
    });
  }

  setUserName() {
    if (this.loginService.isLoggedIn()) {
      this.userName = this.loginService.user.name;
    }
  }
}
