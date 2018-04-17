import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AppConfigService } from '../app.config';
import { AuthHttp, tokenNotExpired, saveToken, removeToken } from './auth-http';

@Injectable()
export class AuthService {

  private authEvents: Subject<AuthEvent>;

  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private appConfig: AppConfigService) {
    this.authEvents = new Subject<AuthEvent>();
  }

  public login(username: string, password: string): Observable<Response> {
    const body = {
      username,
      password,
    };

    return this.http.post(`${this.appConfig.apiUrl}/api/auth`, body).do((resp: Response) => {
      saveToken(resp.json().token);
      this.authEvents.next(new DidLogin());
    });
  }

  public logout(): void {
    removeToken();
    this.authEvents.next(new DidLogout());
  }

  public loggedIn(): boolean {
    return tokenNotExpired();
  }

  get events(): Observable<AuthEvent> {
    return this.authEvents;
  }

  public isAdminUser(userName: string): boolean {
    return 'admin' === userName;
  }

  public hasAdminRole(roleId: string): boolean {
    return 'ROLE_ADMIN' === roleId;
  }

  public hasPermission(roleId: string, resName: string): Observable<boolean> {
    let params = new URLSearchParams();
    params.set('roleId', roleId);
    params.set('resName', resName);
    return this.authHttp.get(`${this.appConfig.apiUrl}/api/has-permission`, { search: params })
      .map((res) => res.json());
  }

  public hasRole(roleId: string): Observable<boolean> {
    let params = new URLSearchParams();
    params.set('roleId', roleId);
    return this.authHttp.get(`${this.appConfig.apiUrl}/api/has-role`, { search: params })
      .map((res) => res.json());
  }

  public hasResource(resName: string): Observable<boolean> {
    let params = new URLSearchParams();
    params.set('resName', resName);
    return this.authHttp.get(`${this.appConfig.apiUrl}/api/has-resource`, { search: params })
      .map((res) => res.json());
  }

}

export class DidLogin {
}
export class DidLogout {
}

export type AuthEvent = DidLogin | DidLogout;

