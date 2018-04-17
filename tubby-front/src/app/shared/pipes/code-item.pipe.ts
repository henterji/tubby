import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Pipe({
    name: 'codeitem',
    pure: false
})
export class CodeItemPipe implements PipeTransform {

    public transform(codeItem: any, items: SelectItem[], emptyLabel: string): any {
        if (codeItem === null ||
            typeof codeItem === typeof undefined ||
            items === null ||
            typeof items === typeof undefined ||
            items.length === 0) {
            return codeItem || emptyLabel;
        }

        let item = items.find((n) => String(n.value) === String(codeItem));
        return item ? item.label : (codeItem || emptyLabel);
    }
}
