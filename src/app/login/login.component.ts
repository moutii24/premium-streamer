import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  resetPassword: string;
  emui: string;
  saving: boolean = false;
  download: boolean = false;
  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  onFormSubmit(){
    this.saving = true;
    let user = {
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password,
      emui: this.emui
    };
    this.loginService.createUser(user).subscribe((data: any) => {
      console.log(data);
      if(data.status == 200){
        this.download = true;
      }
    });
  }
}
