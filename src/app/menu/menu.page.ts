import {Component, OnInit} from '@angular/core';
import {MenuService} from './service/menu.service';


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

    constructor(private service: MenuService) {
    }

    ngOnInit() {
        this.loadMenuList();
    }

    loadMenuList() {
        this.service.loadAll().subscribe((menuList: Food[]) => {
            this.menuList = menuList;
        });
    }
}
