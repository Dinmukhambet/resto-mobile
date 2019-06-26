import {Component, OnInit} from '@angular/core';
import {ReviewsService} from './service/reviews.service';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.page.html',
    styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

    reviews: any[];
    review: { user: any, text: string } = {user: null, text: ''};

    constructor(private service: ReviewsService, private toastController: ToastController) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.service.getAll().subscribe((reviews: any) => {
            this.reviews = reviews;
            console.log(reviews);
        });
    }

    saveReview() {
        this.review.user = JSON.parse(localStorage.getItem('user'));
        this.service.saveReview(this.review).subscribe((review: any) => {
            console.log(review);
            this.presentToast();
            this.getAll();
        });
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Your review added',
            duration: 2000
        });
        toast.present();
    }

}
