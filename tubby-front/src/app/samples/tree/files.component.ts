import { Component, OnInit } from '@angular/core';
import { FilesService } from './files.service';
import { Message, TreeNode } from 'primeng/primeng';
import endsWith from 'lodash/endsWith';

@Component({
    templateUrl: './files.component.html',
    selector: 'sample-files'
})
export class FilesComponent implements OnInit {

    private msgs: Message[];

    private nodes: TreeNode[];

    constructor(private filesService: FilesService) { }

    public ngOnInit() {
        this.filesService.getNodes().subscribe((nodes) => {
            this.nodes = nodes;
        });
    }

    private getIcon(node) {
        if (endsWith(node.label, '.doc')) {
            return 'fa fa-file-word-o';
        }

        if (endsWith(node.label, '.png') ||
            endsWith(node.label, '.jpg') ||
            endsWith(node.label, '.gif')) {
            return 'fa fa-file-image-o';
        }

        if (endsWith(node.label, '.mp3') ||
            endsWith(node.label, '.mp4')) {
            return 'fa fa-file-video-o';
        }

        return 'fa fa-file';
    }

    private nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    private nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }

    private expandAll() {
        this.nodes.forEach((node) => {
            this.expandRecursive(node, true);
        });
    }

    private collapseAll() {
        this.nodes.forEach((node) => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach((childNode) => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }

}
