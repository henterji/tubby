import { Injectable } from '@angular/core';
import { AuthHttp } from '../../core/auth-http';
import { AppConfigService } from '../../app.config';

@Injectable()
export class ChartsService {

    constructor(
        private http: AuthHttp,
        private appConfig: AppConfigService) { }

    public getChartData() {
        return this.http.get(`${this.appConfig.apiUrl}/api/samples/gdp`)
            .map((res) => res.json());
    }

    public getMapData(name: string) {
        return this.http.get(`/resources/echarts/${name}.json`)
            .map((res) => res.json());
    }
}
