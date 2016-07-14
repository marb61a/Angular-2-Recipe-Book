import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { DropdownDirective } from "./dropdown.directive";
import { RecipeService } from "./recipes/recipe.service";

@Component({
    moduleId: module.id,
    selector: 'rb-header',
    templateUrl: 'header.component.html',
    directives: [DropdownDirective, ROUTER_DIRECTIVES]    
})

export class HeaderComponent{
    
}