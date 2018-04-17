import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Message, SelectItem } from 'primeng/primeng';

import { ToastService } from '../../../core/toast.service';
import { CodeTableService } from '../../../core/code-table.service';
import { CalendarLocales } from '../../../shared/locales/calendar.locales';

import { Person } from '../shared/person.model';
import { PersonService } from '../shared/person.service';

@Component({
    selector: 'sample-add-person',
    templateUrl: '../shared/person-detail.component.html'
})
export class AddPersonComponent implements OnInit {
    private msgs: Message[] = [];

    private form: FormGroup;

    private isNew: boolean = true;

    private data: Person = {
        email: '',
        firstName: '',
        lastName: '',
        gender: '1',
        age: 30,
        birth: new Date(),
        married: true,
        telephone: '',
        grade: '1',
        intro: '',
        password: ''
    };

    private calendarLocale: any;

    private grades: SelectItem[];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private calendarLocales: CalendarLocales,
        private codeTableService: CodeTableService,
        private toastService: ToastService,
        private personService: PersonService) { }

    public ngOnInit() {
        this.calendarLocale = this.calendarLocales.getCurrentLocale();

        this.codeTableService.getSelectItems('grades').subscribe((data) => {
            this.grades = data;
        });

        this.buildForm();
    }

    private buildForm() {
        this.form = this.fb.group({
            email: new FormControl(this.data.email, Validators.required),
            firstName: new FormControl(this.data.firstName, Validators.required),
            lastName: new FormControl(this.data.lastName, Validators.required),
            gender: new FormControl(this.data.gender),
            age: new FormControl(this.data.age),
            birth: new FormControl(this.data.birth),
            married: new FormControl(this.data.married),
            telephone: new FormControl(this.data.telephone),
            grade: new FormControl(this.data.grade),
            intro: new FormControl(this.data.intro),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirm: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    private save() {
        this.personService.addPerson(this.data).subscribe(() => {
            this.toastService.success(`成功新增 ${this.data.firstName} ${this.data.lastName} 人员信息.`);
            this.onClose();
        },
            (error) => {
                alert(error);
                this.toastService.error(
                    '新增 ${this.data.firstName} ${this.data.lastName} 人员信息失败，请重试。');
            });
    }

    private onClose(): void {
        this.router.navigate(['/sample/crud']);
    }
}
