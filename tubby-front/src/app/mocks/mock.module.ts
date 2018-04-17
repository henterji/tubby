import { NgModule } from '@angular/core';
import { AuthServiceMock } from './auth-service.mock';
import { UserServiceMock } from './user-service.mock';
import { CodeTableServiceMock } from './code-table-service.mock';
import { SamplesServiceMock } from './samples-service.mock';

import { HomeServiceMock } from './home-service.mock';

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        AuthServiceMock,
        UserServiceMock,
        CodeTableServiceMock,
        SamplesServiceMock,
        HomeServiceMock
    ]
})

export class MockModule {
    constructor(
        private authService: AuthServiceMock,
        private userServiceMock: UserServiceMock,
        private codeTableServiceMock: CodeTableServiceMock,
        private samplesServiceMock: SamplesServiceMock,
        private homeServiceMock: HomeServiceMock
    ) {
        console.log('********** MockModule **********');
    }
}
