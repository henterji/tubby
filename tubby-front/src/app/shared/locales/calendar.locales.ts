import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CalendarLocales {

    private _defaultLocale = {
        dateLocale: {
            firstDayOfWeek: 0,
            dayNames: ['Sunday', 'Monday', 'Tuesday',
                'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun', 'Jul', 'Aug',
                'Sep', 'Oct', 'Nov', 'Dec']
        },
        dateFormat: 'yy-mm-dd'
    };

    private _locales = {
        zh_CN: {
            dateLocale: {
                firstDayOfWeek: 0,
                dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
                dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
                monthNames: ['一月', '二月', '三月', '四月',
                    '五月', '六月', '七月', '八月',
                    '九月', '十月', '十一月', '十二月'],
                monthNamesShort: ['一月', '二月', '三月', '四月',
                    '五月', '六月', '七月', '八月',
                    '九月', '十月', '十一月', '十二月']
            },
            dateFormat: 'yy-mm-dd'
        }
    };

    constructor(private translate: TranslateService) { }

    public getLocale(name: string): any {
        return this._locales[name] || this._defaultLocale;
    }

    public getCurrentLocale(): any {
        return this.getLocale(this.translate.currentLang);
    }

}
