import { Injectable } from '@angular/core';
import { getQueryStringByName } from '../core/helpers';

declare var Mock: any;

@Injectable()
export class AuthServiceMock {

    constructor() {
        Mock.mock(/\/api\/auth/, 'post', {
            'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkaWVuY2UiOiJ3ZWIiLCJjcmVhdGVkIjoxNTAwNDQ0OTA2ODU3LCJleHAiOjE1NjA5MjQ5MDZ9.VE9OEFfkcgwJVnz_hP_yT8ZHK7KVrzcP4ToUDrkiuZjKZx2EWB4VKZi25DmEuHGM1b-vd2-LbeWGh0dxi1l0hg'
        });

        Mock.mock(/\/api\/has-permission/, 'get', (options) => {
            let roleId = getQueryStringByName('roleId', options.url);
            let resName = getQueryStringByName('resName', options.url);
            return 'ROLE_USER' === roleId;
        });

        Mock.mock(/\/api\/has-role/, 'get', (options) => {
            let roleId = getQueryStringByName('roleId', options.url);
            return 'ROLE_USER' === roleId;
        });

        Mock.mock(/\/api\/has-resource/, 'get', (options) => {
            let resName = getQueryStringByName('resName', options.url);
            return true;
        });
    }

}
