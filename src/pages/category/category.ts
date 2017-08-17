import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { CategoryDetailPage } from './category-detail';
import { CategoryService } from '../../services/category-service';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  selectedItem: any;
  icons: string[];
  cat_type: string;
  categories: Array<{id: number, title: string, note: string, icon: string, value: number, type: string}>;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.cat_type = 'wallet';


    this.categoryService.getList().then((data)=>{
      this.categories = data;
    })

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

  }

  create_category() {
    let modal = this.modalCtrl.create(CategoryDetailPage);
    modal.present();

  }

}

