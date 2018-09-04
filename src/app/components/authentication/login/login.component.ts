import { Component, OnInit } from "@angular/core";
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from "angular5-social-login";
import { User, UserBuilder } from "../../../model/user";
import { AppAuthService } from '../../../services/auth.service';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { GenericResponse } from "../../../model/generic.response";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private frmbuilder: FormBuilder, private socialAuthService: AuthService, private authService: AppAuthService, private router: Router) {
    this.initializeForm();
  }

  ngOnInit() { }

  initializeForm() {
    this.signinForm = this.frmbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + " sign in data : ", userData);
      // Now sign-in with userData
      let user = new User();
      user.email = userData.email;
      user.token = userData.token;
      user.name = userData.name;
      user.userId = userData.id;
      user.provider = userData.provider;
      user.profile_image = userData.image;
      // console.log('Login send user :::::: ' + JSON.stringify(user));
      this.authService.register(user).subscribe(response => {
        let genResponse: GenericResponse = <GenericResponse>response;
        console.log('Social Login response :' + JSON.stringify(genResponse));
        if (genResponse.code === 200) {
          User.setUser(genResponse.response);
          this.router.navigate(["/profile-list"]);
        } else {

        }
      });
    });
  }

  login() {
    if (this.signinForm.invalid) {
      return;
    }
    let userBuilder = new UserBuilder();
    userBuilder.setEmail(this.signinForm.get('email').value);
    userBuilder.setPassword(this.signinForm.get('password').value);
    this.authService.login(userBuilder.getUser()).subscribe(response => {
      let genResponse: GenericResponse = <GenericResponse>response;
      console.log('Login response :' + JSON.stringify(genResponse));
      if (genResponse.code === 200) {
        User.setUser(genResponse.response);
        this.router.navigate(["/profile-list"]);
      } else {

      }
    }, error => {
      console.log('Login error :' + JSON.stringify(error));
    });
  }

}
