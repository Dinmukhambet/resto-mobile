import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    pages = [
        {
            title: 'Main',
            url: '/home/profile',
            icon: 'home'
        },
        {
            title: 'Reviews',
            url: '/home/reviews',
            icon: 'home'
        }
    ];
}
