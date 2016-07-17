import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list";
import { RecipeService } from "../recipe.service";

@Component({
    moduleId : module.id,
    selector : 'rb-recipe-detail',
    templateUrl: 'recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit, OnDestroy{
    selectedRecipe : Recipe;
    private recipeIndex: number;
    private subscription: Subscription;
    
    constructor( private sls : ShoppingListService,
                private router : Router,
                private route : ActivatedRoute,
                private recipesService : RecipeService){
    }
}