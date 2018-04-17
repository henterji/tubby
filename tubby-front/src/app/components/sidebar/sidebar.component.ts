import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'mpt-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})

export class SideBarComponent implements OnInit {

  private loggedIn: boolean;
  private isMenuHidden: boolean = true;

  public constructor(
    private router: Router,
    private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.loggedIn = this.authService.loggedIn();

    this.authService.events.subscribe(() => {
      this.loggedIn = this.authService.loggedIn();
    });

  }

  private toggleMenu(e: Event) {
    this.isMenuHidden = !this.isMenuHidden;
    e.stopPropagation();
  }

  @HostListener('document:click') private hideMenu() {
    this.isMenuHidden = true;
  }

}
