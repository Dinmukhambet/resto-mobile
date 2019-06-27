import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestoUser} from '../signup/models/resto-user';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    user: RestoUser;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);

    }

}
