import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeaderComponent} from './header.component';
import { RecipeService } from "./recipes";

@Component({
    moduleId: module.id,
    selector: 'recipe-book-app',
    templateUrl: 'recipe-book.component.html',
    directives: [HeaderComponent, ROUTER_DIRECTIVES],
    providers: [RecipeService]    
})

export class RecipeBookAppComponent{
}