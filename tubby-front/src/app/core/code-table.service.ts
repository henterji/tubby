import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AppConfigService } from '../app.config';
import { AuthHttp } from './auth-http';
import { SelectItem } from 'primeng/primeng';

@Injectable()
export class CodeTableService {
    private cacheMap = {};

    constructor(
        private http: AuthHttp,
        private appConfig: AppConfigService) { }

    public getSelectItems(name: string): Observable<SelectItem[]> {
        let cacheData = this.cacheMap[name];
        if (typeof cacheData !== typeof undefined) {
            return Observable.of(cacheData);
        }
        return this.http
            .get(`${this.appConfig.apiUrl}/api/code-tables/${name}/select-items`)
            .map((res) => {
                let data = res.json();
                this.cacheMap[name] = data;
                return <SelectItem[]> data;
            });
    }

    public getSelectedItem(name: string, code: string): Observable<SelectItem> {
        return this.http
            .get(`${this.appConfig.apiUrl}/api/code-tables/${name}/select-items/${code}`)
            .map((res) => {
                let data = res.json();
                return <SelectItem> data;
            });
    }
}
