import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'mpt-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent {

  private loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.loggedIn();
  }

}
