import {Component, OnInit} from '@angular/core';
import {RestoUser} from './models/resto-user';
import {SignupService} from './service/signup.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    user: RestoUser = new RestoUser();
    errorMessage: string;
    showErrorMsg;
    group: FormGroup;


    constructor(private signup: SignupService, private router: Router,
                private toastController: ToastController) {
    }

    ngOnInit() {
        this.group = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(2)]),
            fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
            pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }

    saveUser() {
        this.signup.saveUser(this.user).subscribe((user: RestoUser) => {
            this.showErrorMsg = (user == null);
            if (!this.showErrorMsg) {
                this.presentToast();
                this.router.navigate(['/auth']);

            }
        });
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Your registration successfully ended',
            duration: 2000
        });
        toast.present();
    }
}
