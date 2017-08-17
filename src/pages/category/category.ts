import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
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

@Component({
  templateUrl: 'category-detail.html'
})
export class CategoryDetailPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[0];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

