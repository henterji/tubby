import { Component, OnInit } from '@angular/core';

import { LoadingBarService } from '../../core/loading-bar.service';

@Component({
    selector: 'mpt-loading-bar',
    templateUrl: './loading-bar.component.html',
})
export class LoadingBarComponent {

    constructor(
        private loadingBarService: LoadingBarService
    ) { }

    private startLoading() {
        this.loadingBarService.start(() => {
            console.log('Loading Complete.');
        });
    }

    private stopLoading() {
        this.loadingBarService.stop();
    }

    private completeLoading() {
        this.loadingBarService.complete();
    }

}
