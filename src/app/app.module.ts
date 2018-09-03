import { AppRouteModule } from './app-route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoveStoryComponent } from './components/home/love-story/love-story.component';
import { ProfileListComponent } from './components/home/profile-list/profile-list.component';
import { LoginComponent } from './components/authentication/login/login.component';

import { 
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { AppAuthService } from './services/auth.service';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1851186728293613")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("489399139109-jeqmmm0ohaeho31grobesfpmk1sqg80j.apps.googleusercontent.com")
        },
      ]);
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoveStoryComponent,
    ProfileListComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AngularFontAwesomeModule,
    AppRouteModule,
    SocialLoginModule,
    // HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AppAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
