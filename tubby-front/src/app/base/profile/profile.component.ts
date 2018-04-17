import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import isEmpty from 'lodash/isEmpty';
import omitBy from 'lodash/omitBy';
import values from 'lodash/values';
import defaults from 'lodash/defaults';
import { User, UserService } from '../../core/user.service';
import { EMAIL_PATTERN, Validators as AppValidators } from '../../shared/validators';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'mpt-profile',
  templateUrl: 'profile.component.html',
})

export class ProfileComponent implements OnInit {

  private myForm: FormGroup;

  private realName: FormControl;
  private email: FormControl;
  private password: FormControl;

  private user: User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private toastService: ToastService) {
  }

  public ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['profile'];
      this.initForm();
    });
  }

  private onSubmit(params) {
    values(this.myForm.controls).forEach(c => c.markAsTouched());

    if (!this.myForm.valid) {
      return;
    }

    let newUser = defaults(params, this.user);

    this.userService.updateMe(omitBy(newUser, isEmpty), params.password)
      .subscribe(() => {
        this.toastService.success('Successfully updated.');
      }, (e) => this.handleError(e));
  }

  private initForm() {
    this.realName = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]));
    this.password = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
    ]));
    this.myForm = this.fb.group({
      realName: this.realName,
      email: this.email,
      password: this.password,
    });

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
