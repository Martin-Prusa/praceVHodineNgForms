import { Injectable } from '@angular/core';
import {CredentialsModel} from "../models/credentials.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private readonly users: CredentialsModel[] = [
    {
      "username": "karel",
      "password": "123"
    },
    {
      "username": "pavel",
      "password": "098"
    },
    {
      "username": "martin",
      "password": "111"
    },
    {
      "username": "jan",
      "password": "heslo"
    }
  ]

  isValid(credentials: CredentialsModel) {
    return this.users.some(i => i.username === credentials.username && i.password === credentials.password)
  }
}
