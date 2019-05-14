import {Component, OnInit} from '@angular/core';
import {RestoUser} from './models/resto-user';
import {SignupService} from './service/signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    user: RestoUser = new RestoUser();

    constructor(private signup: SignupService) {
    }

    ngOnInit() {
    }

    saveUser() {
        this.signup.saveUser(this.user).subscribe(res => {
            console.log(res);
        });
    }
}
