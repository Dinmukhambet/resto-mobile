import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestoUser} from '../../signup/models/resto-user';
import {LOCAL_ADDRESS} from '../../app.module';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    authUser(user: RestoUser) {
        return this.http.post(`${LOCAL_ADDRESS}/user/authorization`, user);
    }
}