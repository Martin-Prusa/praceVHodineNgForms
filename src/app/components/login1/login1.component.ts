import { Component, OnInit } from '@angular/core';
import {CredentialsModel} from "../../models/credentials.model";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

  isLogin: boolean = false
  credentials: CredentialsModel = new CredentialsModel()
  valid: CredentialsModel = new CredentialsModel()

  constructor(private service: LoginService) {
    this.valid.username = 'educanet'
    this.valid.password = 'prestizniSkola'
  }

  ngOnInit(): void {
  }

  onLogin() {
    if(this.service.isValid(this.credentials)) {
      this.credentials = new CredentialsModel()
      this.isLogin = true
    }
  }

}
