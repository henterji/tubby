import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class PrivatePageGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    let roleId = route.data['role'];
    let resName = route.data['resource'];

    if (roleId) {
      return this.authService.hasRole(roleId).map((res) => {
        if (!res) {
          this.router.navigate(['/no-permission']);
        }
        return res;
      });
    }

    if (resName) {
      return this.authService.hasResource(resName).map((res) => {
        if (!res) {
          this.router.navigate(['/no-permission']);
        }
        return res;
      });
    }

    return true;
  }

}
