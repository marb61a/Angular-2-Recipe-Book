import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    moduleId: module.id,
    selector: 'rb-shopping-list-add',
    templateUrl: 'shopping-list-add.component.html'
})

export class ShoppingListAddComponent implements OnChanges {
    @Input() item : Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;
    
    constructor(private sls: ShoppingListService) {}
}