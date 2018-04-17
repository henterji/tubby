import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileDataResolver } from './core/profile-data.resolver';
import { PrivatePageGuard } from './core/private-page.guard';
import { PublicPageGuard } from './core/public-page.guard';
import { LoginComponent } from './base/login/login.component';
import { NoContentComponent } from './base/no-content/no-content.component';
import { NoPermissionComponent } from './base/no-permission/no-permission.component';

import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

/* tslint:disable:max-line-length */
export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          role: 'ROLE_USER',
          resource: 'home'
        },
        canActivate: [PrivatePageGuard]
      },
      {
        path: 'no-permission',
        component: NoPermissionComponent,
        canActivate: [PrivatePageGuard],
      },
      {
        path: 'profile',
        loadChildren: './base/profile/profile.module#ProfileModule',
        resolve: { profile: ProfileDataResolver },
        canActivate: [PrivatePageGuard],
      },
      {
        path: 'password',
        loadChildren: './base/password/password.module#PasswordModule',
        resolve: { profile: ProfileDataResolver },
        canActivate: [PrivatePageGuard],
      },
      {
        path: 'sample',
        data: {
          title: 'Sample'
        },
        children: [
          {
            path: 'crud',
            loadChildren: './samples/crud/persons.module#PersonsModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'treeview',
            loadChildren: './samples/tree/files.module#FilesModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'tabs',
            loadChildren: './samples/tabs/tabs.module#TabsModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'charts',
            loadChildren: './samples/charts/charts.module#ChartsModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'upload',
            loadChildren: './samples/upload/upload.module#UploadModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'messaging',
            loadChildren: './samples/messaging/portfolio.module#PortfolioModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'calendar',
            loadChildren: './samples/calendar/calendar.module#CalendarModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'router',
            loadChildren: './samples/router/heroes.module#HeroesModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'widgets',
            loadChildren: './samples/widgets/widgets.module#WidgetsModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'maps',
            loadChildren: './samples/maps/bmap.module#BMapModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'editor',
            loadChildren: './samples/editor/editor.module#EditorModule',
            canActivate: [PrivatePageGuard]
          },
          {
            path: 'loading-bar',
            loadChildren: './samples/loading-bar/loading-bar.module#LoadingBarModule',
            canActivate: [PrivatePageGuard]
          },
        ]
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [PublicPageGuard]
      },
    ]
  },
  {
    path: '**',
    component: NoContentComponent
  },
];
/* tslint:enable:max-line-length */
