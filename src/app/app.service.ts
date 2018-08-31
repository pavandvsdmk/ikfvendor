import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppSettings } from './app.settings';

@Injectable()
export class AppService {
  private isSpinner: Subject<boolean> = new Subject<boolean>();
  isSpinnerUpdated$ = this.isSpinner.asObservable();

  user: any;
  private userUpdatedFlag: Subject<boolean> = new Subject<boolean>();
  isUserUpdated$ = this.userUpdatedFlag.asObservable();


  set spinnerData(value: boolean) {
    this.isSpinner.next(value);
  }

  get userObj(): any {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    return this.user;
  }

  set userObj(value: any) {
    this.user = value;
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this.userUpdatedFlag.next(true);
  }
}
