import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController, AlertController } from 'ionic-angular';


import { CategoryService } from '../../services/category-service';

@Component({
	templateUrl: 'category-detail.html'
})
export class CategoryDetailPage {
	category: { id: string, title: string, note: string, icon: string, value: number, type: string };
	icons: string[];
	testRadioOpen;
	testRadioResult;
	constructor(
		public platform: Platform,
		public params: NavParams,
		public viewCtrl: ViewController,
		public alerCtrl: AlertController,
		public CategoryService: CategoryService
	) {
		this.category = {
			id: "",
			title: "",
			note: "",
			icon: "boat",
			value: 0,
			type: "wallet"
		};
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build', 'heart', 'ionitron', 'happy', 'people', 'person', 'contact', 'apps', 'lock', 'key', 'unlock', 'map', 'navigate', 'pin', 'locate', 'mic', 'musical', 'volume', 'microphone', 'cafe', 'calculator', 'bus', 'wine', 'camera', 'image', 'star', 'pin', 'arrow', 'arrow', 'arrow', 'arrow', 'cloud', 'sunny', 'umbrella', 'rainy'];

	}

	dismiss() {
		this.viewCtrl.dismiss({ is_created: false });
	}

	submit() {
		this.CategoryService.create(this.category);
		this.viewCtrl.dismiss({ is_created: true });
	}
}
