import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/auth.service';
import { User, UserService } from '../../core/user.service';
import { AppConfigService } from '../../app.config';
import * as moment from 'moment';

@Component({
    selector: 'mpt-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit {
    private loggedIn: boolean;
    private isMenuHidden: boolean = true;
    private user: User;

    private themes: MenuItem[];

    private settings: MenuItem[];

    private langs: MenuItem[];

    private langLabels: {};

    private currentLang: any;

    private themeLabels: {};

    private currentTheme: any;

    private YMDTime = moment(new Date()).format('YYYY-MM-DD');
    private HMSTime = moment(new Date()).format('HH:mm A');

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private appConfig: AppConfigService,
        private translate: TranslateService) {
    }

    public ngOnInit(): void {
        this.loggedIn = this.authService.loggedIn();
        if (this.loggedIn) {
            this.userService.me().subscribe((user) => this.user = user);
        }
        this.authService.events.subscribe(() => {
            this.loggedIn = this.authService.loggedIn();
        });

        this.translate.get([
            'base.themes.lightness',
            'base.themes.darkness',
            'base.update-profile.title',
            'base.change-password.title',
            'base.logout']).subscribe((res: Object) => {
                const zhCN = '中文';
                const enUS = 'English';
                this.langLabels = { zhCN, enUS };

                this.currentLang = this.langLabels[this.appConfig.lang];

                this.langs = [
                    {
                        label: zhCN,
                        command: (event) => {
                            this.switchLang(event, 'zh_CN');
                            event.originalEvent.preventDefault();
                        }
                    },
                    {
                        label: enUS,
                        command: (event) => {
                            this.switchLang(event, 'en_US');
                            event.originalEvent.preventDefault();
                        }
                    }
                ];
                //
                this.themes = [
                    {
                        label: res['base.themes.lightness'],
                        icon: 'fa-sun-o',
                        command: (event) => {
                            this.switchTheme(event, 'lightness');
                            event.originalEvent.preventDefault();
                        }
                    },
                    {
                        label: res['base.themes.darkness'],
                        icon: 'fa-moon-o',
                        command: (event) => {
                            this.switchTheme(event, 'darkness');
                            event.originalEvent.preventDefault();
                        }
                    }
                ];

                this.settings = [
                    {
                        label: res['base.update-profile.title'],
                        icon: 'fa-user',
                        routerLink: ['/profile']
                    },
                    {
                        label: res['base.change-password.title'],
                        icon: 'fa-key',
                        routerLink: ['/password']
                    },
                    {
                        label: res['base.logout'],
                        icon: 'fa-sign-out',
                        command: (event) => {
                            this.logout();
                            event.originalEvent.preventDefault();
                        }
                    }
                ];
            });
    }

    private logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    private toggleMenu(e: Event) {
        this.isMenuHidden = !this.isMenuHidden;
        event.preventDefault();
    }

    @HostListener('document:click') private hideMenu() {
        this.isMenuHidden = true;
    }

    private switchTheme(event: Event, theme: string) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        themeLink.href = 'themes/' + theme + '/theme.css';
        // event.preventDefault();
    }

    private switchLang(event: Event, lang: string) {
        //
    }
}
