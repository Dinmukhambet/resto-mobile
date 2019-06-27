import {Component, OnInit} from '@angular/core';
import {Food} from "../menu/menu.page";

@Component({
    selector: 'app-menu-order',
    templateUrl: './menu-order.page.html',
    styleUrls: ['./menu-order.page.scss'],
})
export class MenuOrderPage implements OnInit {
    total: number = 0;
    menuList: Food[] = [];

    constructor() {
    }

    ngOnInit() {
        this.menuList = JSON.parse(localStorage.getItem('menuList'));
        this.total = this.menuList.map(function (x) {
            return x.price;
        }).reduce((accumulator, currentValue) => accumulator + currentValue);
    }

    deleteFromOrder(i) {
        this.menuList.splice(i, 1);
        if (this.menuList.length > 0) {
            this.total = this.menuList.map(function (x) {
                return x.price;
            }).reduce((accumulator, currentValue) => accumulator + currentValue);
        } else {
            this.total = 0;
        }
    }

}
