import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LOCAL_ADDRESS} from '../../app.module';

@Injectable()
export class ReviewsService {

    constructor(private http: HttpClient) {
    }

    saveReview(review: any) {
        return this.http.post(`${LOCAL_ADDRESS}/review/save`, review);
    }

    getAll() {
        return this.http.get(`${LOCAL_ADDRESS}/review/all`);
    }
}