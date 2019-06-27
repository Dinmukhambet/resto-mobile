import {Component, OnInit} from '@angular/core';
import {MenuService} from './service/menu.service';
import {ModalController} from "@ionic/angular";


export class Food {
    nomination: string;
    definition: string;
    price: number;
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    menuList: Food[] = [];
    tmpList: Food[] = [];

    constructor(private service: MenuService, private modalController: ModalController) {
    }

    ngOnInit() {
        this.loadMenuList();
    }

    loadMenuList() {
        this.service.loadAll().subscribe((menuList: Food[]) => {
            this.menuList = menuList;
        });
    }

    addToOrder(food: Food) {
        this.tmpList.push(food);
        console.log(this.tmpList);
        localStorage.setItem('menuList', JSON.stringify(this.tmpList));
    }
}
