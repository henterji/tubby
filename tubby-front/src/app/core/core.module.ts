import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkipSelf, Optional } from '@angular/core';
import { XHRBackend, Http, RequestOptions, HttpModule } from '@angular/http';
import { HttpErrorHandler } from './http-error-handler';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { PrivatePageGuard } from './private-page.guard';
import { PublicPageGuard } from './public-page.guard';
import { ProfileDataResolver } from './profile-data.resolver';
import { AuthHttp, AuthConfig } from './auth-http';
import { ToastService } from './toast.service';
import { LoadingBarService } from './loading-bar.service';
import { CodeTableService } from './code-table.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  exports: [
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    HttpErrorHandler,
    AuthService,
    UserService,
    ProfileDataResolver,
    PrivatePageGuard,
    PublicPageGuard,
    ToastService,
    LoadingBarService,
    CodeTableService
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
