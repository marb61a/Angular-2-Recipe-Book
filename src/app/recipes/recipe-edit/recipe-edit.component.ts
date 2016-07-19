import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import {
    FormArray,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    REACTIVE_FORM_DIRECTIVES
} from '@angular/form';

import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";

@Component({
    moduleId : module.id,
    selector: 'rb-recipe-edit',
    templateUrl: 'recipe-edit.component.html',
    styles: [],
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class RecipeEditComponent implements OnInit, OnDestroy {
    recipeForm: FormGroup;
    private recipeIndex: number;
    private recipe: Recipe;
    private isNew = true;
    private subscription: Subscription;
    
    constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) {}
}
