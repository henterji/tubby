import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'mpt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  private loginform: FormGroup;

  private msgs = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService) {
  }

  public ngOnInit() {
    this.loginform = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  private login(params): void {
    this.authService.login(params.username, params.password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      }, (e) => this.handleError(e));
  }

  private handleError(error): void {
    switch (error.status) {
      case 401:
        this.msgs.push({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Username or password is wrong.'
        });
        this.toastService.error('Username or password is wrong.');
      default:
      // TODO
    }
  }

}
