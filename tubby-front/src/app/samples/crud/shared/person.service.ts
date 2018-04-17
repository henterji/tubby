import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { AppConfigService } from '../../../app.config';
import { AuthHttp } from '../../../core/auth-http';
import { Page, PageRequest } from '../../../shared/models/pagination';

import { Person, PersonCondtion } from './person.model';

@Injectable()
export class PersonService {
    constructor(
        private http: AuthHttp,
        private appConfig: AppConfigService) { }

    public getPersons(
        condition: PersonCondtion,
        pageRequest: PageRequest): Observable<Page<Person>> {
        let params = new URLSearchParams();
        params.set('size', pageRequest.size.toString());
        params.set('page', pageRequest.page.toString());
        params.set('name', condition.name);
        params.set('telephone', condition.telephone);

        return this.http.get(`${this.appConfig.apiUrl}/api/samples/persons`, { search: params })
            .map((res) => <Page<Person>> res.json());
    }

    public getPerson(id: string): Observable<Person> {
        return this.http.get(`${this.appConfig.apiUrl}/api/samples/persons/${id}`)
            .map((res) => <Person> res.json());
    }

    public addPerson(person: Person) {
        return this.http.post(`${this.appConfig.apiUrl}/api/samples/persons`, person);
    }

    public savePerson(person: Person) {
        return this.http.put(`${this.appConfig.apiUrl}/api/samples/persons/${person.id}`, person);
    }

    public delPerson(id: string) {
        return this.http.delete(`${this.appConfig.apiUrl}/api/persons/${id}`);
    }
}
