import { Injectable } from '@angular/core';

declare var Mock: any;

@Injectable()
export class UserServiceMock {
    private user = {
        'userId': 'b49ce62d3d7a4b03b7614e87710b65a9',
        'realName': 'Agent',
        'telephone': null,
        'email': 'henterji@163.com',
        'wechat': null,
        'position': null,
        'description': null,
        'userName': 'henter',
        'deptId': '00000000',
        'isManage': 0,
        'isSystem': 0,
        'enabled': 1,
        'isDelete': 0,
        'isLock': 0,
        'lockTime': null,
        'failCount': 0,
        'passwordUpdateTime': null,
        'attr1': null,
        'attr2': null,
        'attr3': null,
        'attr4': null,
        'attr5': null,
        'orgId': null,
        'roles': []
    };

    constructor() {

        Mock.mock(/\/api\/user-info/, 'get', this.user);

        Mock.mock(/\/api\/user-info\/b49ce62d3d7a4b03b7614e87710b65a9/, 'get', this.user);

        Mock.mock(/\/api\/user-info\/b49ce62d3d7a4b03b7614e87710b65a9/, 'post', (options) => {
            this.user.realName = options.body.realName;
            this.user.email = options.body.email;
            return this.user;
        });

        Mock.mock(/\/api\/change-password/, 'post', {});
    }

}
