"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var _1 = require('./app/');
var shopping_list_1 = require('./app/shopping-list');
var app_routes_1 = require('./app/app.routes');
var forms_1 = require("@angular/forms");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.RecipeBookAppComponent, [
    app_routes_1.APP_ROUTES_PROVIDERS,
    shopping_list_1.ShoppingListService,
    forms_1.provideForms(),
    forms_1.disableDeprecatedForms(),
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=../main.js.map