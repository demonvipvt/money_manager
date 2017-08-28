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
import { Platform, NavParams, ViewController, AlertController } from 'ionic-angular';
import { CategoryService } from '../../services/category-service';
var CategoryDetailPage = (function () {
    function CategoryDetailPage(platform, params, viewCtrl, alerCtrl, CategoryService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.alerCtrl = alerCtrl;
        this.CategoryService = CategoryService;
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
    CategoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ is_created: false });
    };
    CategoryDetailPage.prototype.submit = function () {
        this.CategoryService.create(this.category);
        this.viewCtrl.dismiss({ is_created: true });
    };
    return CategoryDetailPage;
}());
CategoryDetailPage = __decorate([
    Component({
        templateUrl: 'category-detail.html'
    }),
    __metadata("design:paramtypes", [Platform,
        NavParams,
        ViewController,
        AlertController,
        CategoryService])
], CategoryDetailPage);
export { CategoryDetailPage };
//# sourceMappingURL=category-detail.js.map