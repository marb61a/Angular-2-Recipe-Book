import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";

import { RecipeBookAppComponent, environment } from './app/';
import { ShoppingListService } from './app/shopping-list';
import { APP_ROUTES_PROVIDERS } from './app/app.routes';
import { provideForms, disableDeprecatedForms } from "@angular/forms";

if(environment.production){
    enableProdMode();
}

bootstrap(RecipeBookAppComponent, [
    APP_ROUTES_PROVIDERS,
    ShoppingListService,
    provideForms(),
    disableDeprecatedForms(),
    HTTP_PROVIDERS
]);