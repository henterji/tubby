import {
    Directive,
    ElementRef,
    Input,
    Renderer,
    OnChanges,
    SimpleChanges,
    HostListener
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[validate-onblur]'
})
export class ValidateOnBlurDirective {
    private validators: any;
    private asyncValidators: any;
    private hasFocus = false;

    constructor(public formControl: NgControl) {
    }

    @HostListener('focus')
    public onFocus($event) {
        this.hasFocus = true;
        this.validators = this.formControl.control.validator;
        this.asyncValidators = this.formControl.control.asyncValidator;
        this.formControl.control.clearAsyncValidators();
        this.formControl.control.clearValidators();
    }

    @HostListener('blur')
    public onBlur($event) {
        this.hasFocus = false;
        this.formControl.control.setAsyncValidators(this.asyncValidators);
        this.formControl.control.setValidators(this.validators);
        this.formControl.control.updateValueAndValidity();
    }
}
