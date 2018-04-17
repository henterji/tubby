import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import isEmpty from 'lodash/isEmpty';
import omitBy from 'lodash/omitBy';
import values from 'lodash/values';
import { User, UserService } from '../../core/user.service';
import { Validators as AppValidators } from '../../shared/validators';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'mpt-password',
  templateUrl: 'password.component.html',
})

export class PasswordComponent implements OnInit {

  private myForm: FormGroup;
  private oldPassword: FormControl;
  private newPassword: FormControl;
  private confirmPassword: FormControl;

  private user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastService: ToastService) {
  }

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.user = data['profile'];
      this.initForm();
    });
  }

  private onSubmit(params) {
    values(this.myForm.controls).forEach((c) => c.markAsTouched());

    if (!this.myForm.valid) {
      return;
    }

    this.userService.changePassword(params.oldPassword, params.newPassword)
      .subscribe(() => {
        this.toastService.success('Successfully updated.');
      }, (e) => this.handleError(e));
  }

  private initForm() {
    this.oldPassword = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.newPassword = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.confirmPassword = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.myForm = new FormGroup({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    }, AppValidators.match(this.newPassword, this.confirmPassword));
  }

  private handleError(error) {
    switch (error.status) {
      case 400:
        if (error.json()['code'] === 'email_already_taken') {
          this.toastService.error('This email is already taken.');
        }
      default:
      // TODO
    }
  }

}
