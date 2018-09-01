import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/user';
import { Endpoints } from '../Endponits';

@Injectable()
export class AppAuthService {

  constructor(private http: Http) { }

  login(user: User) {
    return this.http.post(Endpoints.LOGIN, user);
    // this.http.get(url).subscribe(res => {
    //   console.log(JSON.stringify(res));
    // });
  }

  register(user: User) {
    return this.http.post(Endpoints.REGISTRATION, user);
  }

  // login(user: User) {
  //   const url = Endpoints.LOGIN;
  //   // const headers = new HttpHeaders({'CustomHeader' : 'hello'});
  //   // return this.http.post(url, {userId: user, pass: password}, {headers: headers});
  //   const headers = new HttpHeaders({'CustomHeader' : 'hello'});
  //   return this.http.post(url, user);
  // }

}
