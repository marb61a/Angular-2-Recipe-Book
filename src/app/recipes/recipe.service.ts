import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService{
    recipesCahnged = new EventEmitter<Recipe[]>();
    
    private recipes : Recipe[] = []
    
    constructor(private http: Http) {}
    
    getRecipes(){
        return this.recipes;
    }
    
    getRecipe(id : number){
        return this.recipes[id];
    }
    
    deleteRecipe(recipe: Recipe){
        this.recipes.splice(this.recipes.indexOf(recipe), 1);    
    }
    
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }
    
    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }
}