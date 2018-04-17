import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Message, SelectItem } from 'primeng/primeng';

import { ToastService } from '../../../core/toast.service';
import { CodeTableService } from '../../../core/code-table.service';
import { CalendarLocales } from '../../../shared/locales/calendar.locales';

import { Person } from '../shared/person.model';
import { PersonService } from '../shared/person.service';

declare var moment: any;

@Component({
    selector: 'sample-edit-person',
    templateUrl: '../shared/person-detail.component.html'
})
export class EditPersonComponent implements OnInit {
    private msgs: Message[] = [];

    private form: FormGroup;

    private data: Person = {};

    private calendarLocale: any = {};

    private grades: SelectItem[];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
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

        this.route.params
            .switchMap((params: Params) => this.personService.getPerson(params['id']))
            .subscribe((person) => {
                this.data = {
                    id: person.id,
                    email: person.email,
                    firstName: person.firstName,
                    lastName: person.lastName,
                    gender: person.gender,
                    age: person.age,
                    birth: moment(person.birth).toDate(),
                    married: person.married,
                    telephone: person.telephone,
                    grade: person.grade,
                    intro: person.intro,
                    password: '',
                    confirm: ''
                };
                this.form.setValue(this.data);
            });
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
            password: new FormControl('', [Validators.minLength(6)]),
            confirm: new FormControl('', [Validators.minLength(6)])
        });
    }

    private save() {
        this.personService.savePerson(this.data).subscribe(() => {
            this.toastService.success(`成功更新 ${this.data.firstName} ${this.data.lastName} 人员信息.`);
            this.onClose();
        },
            (error) => {
                alert(error);
                this.toastService.error(
                    '更新 ${this.data.firstName} ${this.data.lastName} 人员信息失败，请重试。');
            });
    }

    private onClose(): void {
        this.router.navigate(['/sample/crud']);
    }
}
