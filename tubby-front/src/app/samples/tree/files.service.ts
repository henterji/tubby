import { Injectable } from '@angular/core';
import { AppConfigService } from '../../app.config';
import { AuthHttp } from '../../core/auth-http';
import { TreeNode } from 'primeng/primeng';

@Injectable()
export class FilesService {

    constructor(
        private http: AuthHttp,
        private appConfig: AppConfigService) { }

    public getNodes() {
        return this.http.get(`${this.appConfig.apiUrl}/api/samples/docs`)
            .map((res) => <TreeNode[]>res.json().children);
    }
}
