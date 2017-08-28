var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';
var CategoryService = (function () {
    function CategoryService(storage) {
        var _this = this;
        this.storage = storage;
        this.storage.keys().then(function (keys) {
            if (keys.indexOf('category') == -1) {
                var newCategory = [{
                        id: UUID.UUID(),
                        title: 'Ví',
                        note: 'Tiền khả dụng',
                        icon: 'boat',
                        value: 70000,
                        type: 'wallet'
                    }, {
                        id: UUID.UUID(),
                        title: 'Lương',
                        note: 'Thu nhập cố định',
                        icon: 'boat',
                        value: 0,
                        type: 'income'
                    }, {
                        id: UUID.UUID(),
                        title: 'Ăn uống',
                        note: 'Ăn uống hằng ngày',
                        icon: 'boat',
                        value: 0,
                        type: 'cost'
                    }];
                _this.storage.set('category', newCategory);
            }
        });
    }
    CategoryService.prototype.create = function (new_category) {
        var _this = this;
        new_category.id = UUID.UUID();
        this.storage.get('category').then(function (categories) {
            categories.push(new_category);
            _this.storage.set('category', categories);
        });
    };
    CategoryService.prototype.getList = function () {
        return this.storage.get('category');
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Storage])
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category-service.js.map