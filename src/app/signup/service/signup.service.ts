import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestoUser} from '../models/resto-user';
import {Injectable} from '@angular/core';
import {LOCAL_ADDRESS} from '../../app.module';

@Injectable()
export class SignupService {


    constructor(private http: HttpClient) {
    }

    saveUser(user: RestoUser) {
        return this.http.post(`${LOCAL_ADDRESS}/user/registration`, user);
    }
}