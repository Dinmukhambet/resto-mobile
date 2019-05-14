import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestoUser} from '../models/resto-user';
import {Injectable} from '@angular/core';

@Injectable()
export class SignupService {

    serverAdress = 'http://localhost:8080';


    constructor(private http: HttpClient) {
    }

    saveUser(user: RestoUser) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(`${this.serverAdress}/user/registration`, user, httpOptions);
    }
}