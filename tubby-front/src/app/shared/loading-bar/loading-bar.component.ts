import { Component, Input, OnInit } from '@angular/core';
import {
    isPresent,
    LoadingBarEvent,
    LoadingBarEventType,
    LoadingBarService
} from '../../core/loading-bar.service';

@Component({
    selector: 'loading-bar',
    templateUrl: 'loading-bar.component.html',
    styleUrls: ['./loading-bar.component.less'],
})
export class LoadingBarComponent implements OnInit {

    @Input() private progress: string = '0';
    @Input() private color: string = 'firebrick';
    @Input() private height: string = '4px';
    @Input() private show: boolean = true;

    constructor(private service: LoadingBarService) { }

    public ngOnInit(): any {
        this.service.onLoadingBarEvent((event: LoadingBarEvent) => {
            if (event.type === LoadingBarEventType.PROGRESS && isPresent(event.value)) {
                this.progress = event.value;
            } else if (event.type === LoadingBarEventType.COLOR) {
                this.color = event.value;
            } else if (event.type === LoadingBarEventType.HEIGHT) {
                this.height = event.value;
            } else if (event.type === LoadingBarEventType.VISIBLE) {
                this.show = event.value;
            }
        });
    }
}
