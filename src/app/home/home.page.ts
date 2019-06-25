import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    pages = [
        {
            title: 'Profile',
            url: '/home/profile',
            icon: 'person'
        },
        {
            title: 'Reviews',
            url: '/home/reviews',
            icon: 'chatbubbles'
        },
        {
            title: 'Contacts',
            url: '/home/contacts',
            icon: 'contacts'
        },
        {
            title: 'Menu',
            url: '/home/menu',
            icon: 'paper'
        }
    ];
}
