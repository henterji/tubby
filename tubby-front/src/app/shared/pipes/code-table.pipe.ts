import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Pipe({
    name: 'codetable',
    pure: false
})
export class CodeTablePipe implements PipeTransform {

    public transform(items: SelectItem[], emptyLabel): any {
        if ((typeof items === typeof undefined ) || (items === null) || (items.length === 0)) {
            return [];
        }

        let _items = [];
        if ((emptyLabel !== null) && (typeof emptyLabel !== typeof undefined )) {
            _items.push(<SelectItem>{ label: emptyLabel });
        }
        return _items.concat(items);
    }
}
