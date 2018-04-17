import { Injectable } from '@angular/core';

declare var Mock: any;

@Injectable()
export class CodeTableServiceMock {
    constructor() {
        Mock.mock(/\/api\/code-tables\/YES_NO\/select-items/, 'get', [
            {
                value: '00', label: '否'
            }, {
                value: '01', label: '是'
            }
        ]);

        Mock.mock(/\/api\/code-tables\/GENDERS\/select-items/, 'get', [
            {
                value: '1', label: '男'
            }, {
                value: '0', label: '女'
            }, {
                value: '10', label: '未知'
            }
        ]);

        Mock.mock(/\/api\/code-tables\/GRADES\/select-items/, 'get', [
            {
                value: '1', label: '专科及以下'
            },
            {
                value: '2', label: '本科'
            },
            {
                value: '3', label: '硕士研究生'
            },
            {
                value: '4', label: '博士研究生'
            }
        ]);
    }
}
