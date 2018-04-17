import { Component, OnInit } from '@angular/core';

import find from 'lodash/find';

import { ConfirmationService, SelectItem } from 'primeng/primeng';

import { ToastService } from '../../core/toast.service';
import { CodeTableService } from '../../core/code-table.service';
import { Page, PageRequest } from '../../shared/models/pagination';

import { Person, PersonCondtion } from './shared/person.model';
import { PersonService } from './shared/person.service';

@Component({
    selector: 'sample-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.less']
})
export class PersonsComponent implements OnInit {
    private data: Page<Person>;

    private pageRequest: PageRequest = { page: 0, size: 15 };

    private selectedRow: Person;

    private displayDialog: boolean;

    private condition: PersonCondtion = {
        name: '',
        telephone: ''
    };

    private yesno: SelectItem[];
    private grades: SelectItem[];
    private genders: SelectItem[];

    constructor(
        private confirmationService: ConfirmationService,
        private codeTableService: CodeTableService,
        private toastService: ToastService,
        private personService: PersonService) { }

    public ngOnInit() {
        this.codeTableService.getSelectItems('YES_NO').subscribe((data) => {
            this.yesno = data;
        });

        this.codeTableService.getSelectItems('GRADES').subscribe((data) => {
            this.grades = data;
        });

        this.codeTableService.getSelectItems('GENDERS').subscribe((data) => {
            this.genders = data;
        });

        this.query();
    }

    private query() {
        this.personService.getPersons(this.condition, this.pageRequest).subscribe((data) => {
            this.data = data;
        });
    }

    private paginate(event) {
        this.pageRequest.page = event.page;
        this.query();
    }

    private delete(person: Person) {
        this.confirmationService.confirm({
            header: '删除用户',
            rejectVisible: true,
            acceptVisible: true,
            message: `确认删除 ${person.firstName} ${person.lastName} 的人员信息吗？`,
            accept: () => {
                this.personService.delPerson(person.id).subscribe((res) => {
                    this.toastService.success(
                        ` 成功删除 ${person.firstName} ${person.lastName} 的人员信息.`);
                    this.query();
                });
            }
        });
    }
}
