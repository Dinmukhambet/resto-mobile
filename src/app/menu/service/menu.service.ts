import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LOCAL_ADDRESS} from '../../app.module';

@Injectable()
export class MenuService {

    constructor(private http: HttpClient) {
    }
    loadAll() {
        return this.http.get(`${LOCAL_ADDRESS}/menuList/all`);
    }
}