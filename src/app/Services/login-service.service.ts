import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()

export class LoginServiceService {
  fireBaseUrl: string = "https://premiumstreamer.firebaseio.com/users.json/";
  postAction: string = "";
  getAction: string = "";
  constructor(private http: Http) { }

  createUser(user: any) {
    let body = JSON.stringify(user);
    return this.http.post(this.fireBaseUrl, body);
  }
}
