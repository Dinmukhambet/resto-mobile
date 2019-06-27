import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/home/profile',
                pathMatch: 'full'
            },
            {
                path: '',
                component: HomePage,
                children: [
                    {path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsPageModule'},
                    {path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
                    {path: 'menu', loadChildren: './menu/menu.module#MenuPageModule'},
                    {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule'},
                    { path: 'menu-order', loadChildren: './menu-order/menu-order.module#MenuOrderPageModule' }

                ]
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
