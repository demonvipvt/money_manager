var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { CategoryDetailPage } from './category-detail';
import { CategoryService } from '../../services/category-service';
var CategoryPage = (function () {
    function CategoryPage(modalCtrl, navCtrl, navParams, categoryService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoryService = categoryService;
        // If we navigated to this page, we will have an item available as a nav param
        this.cat_type = 'wallet';
        this.categoryService.getList().then(function (data) {
            _this.categories = data;
        });
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
    }
    CategoryPage.prototype.create_category = function () {
        var _this = this;
        var modal = this.modalCtrl.create(CategoryDetailPage);
        modal.onDidDismiss(function (res) {
            if (res.is_created) {
                _this.categoryService.getList().then(function (data) {
                    _this.categories = data;
                });
            }
        });
        modal.present();
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Component({
        selector: 'page-category',
        templateUrl: 'category.html'
    }),
    __metadata("design:paramtypes", [ModalController, NavController, NavParams, CategoryService])
], CategoryPage);
export { CategoryPage };
//# sourceMappingURL=category.js.map