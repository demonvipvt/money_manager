﻿import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';

@Injectable()
export class CategoryService {
    constructor(private storage: Storage) {
    	this.storage.keys().then((keys)=>{
    		if(keys.indexOf('category') == -1){
			    var newCategory = [{
			      id 	: UUID.UUID(),
			      title : 'Ví',
			      note 	: 'Tiền khả dụng',
			      icon 	: 'boat',
			      value : 70000,
			      type 	: 'wallet'
			    },{
			      id 	: UUID.UUID(),
			      title : 'Lương',
			      note 	: 'Thu nhập cố định',
			      icon 	: 'boat',
			      value : 0,
			      type 	: 'income'
			    },{
			      id 	: UUID.UUID(),
			      title : 'Ăn uống',
			      note 	: 'Ăn uống hằng ngày',
			      icon 	: 'boat',
			      value : 0,
			      type 	: 'cost'
			    }]
    			this.storage.set('category',newCategory);
    		}
    	})
    }

    create(new_category) {
    	new_category.id = UUID.UUID();
    	this.storage.get('category').then((categories)=>{
    		categories.push(new_category);
    		this.storage.set('category',categories);
    	})
    }

    getList() {
    	return this.storage.get('category');
    }
}