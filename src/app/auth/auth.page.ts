import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';
import {RestoUser} from '../signup/models/resto-user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    user: RestoUser = new RestoUser();
    group: FormGroup;
    message: string;

    constructor(private service: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.group = new FormGroup({
            login: new FormControl('', [Validators.required]),
            pass: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    authUser() {
        this.service.authUser(this.user).subscribe(response => {
            console.log(response);
            this.message = response['message'];
            this.user = response['user'];
            console.log(this.message === 'signed_user');
            if (this.message === 'signed_user') {
                this.router.navigate(['/home/profile'], {queryParams: {user: JSON.stringify(this.user)}});
            }
        });
    }

}
