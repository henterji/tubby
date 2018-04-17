import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
    templateUrl: './upload.component.html',
    selector: 'sample-upload'
})
export class UploadComponent implements OnInit {

    private msgs: Message[];

    private uploadedFiles: any[] = [];

    public ngOnInit() { }

    private onBeforeSend(event) {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            event.xhr.setRequestHeader('authorization', `Bearer ${jwt}`);
        }
    }

    private onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

}
