(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_providers_configuration-service_ts-src_app_providers_operator-service_ts"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'tabs',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(function (m) { return m.TabsPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _providers_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/events-service */ 5284);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/settings/settings.page */ 1902);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);




window.fetch = whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__.fetch;











var AppComponent = /** @class */ (function () {
    function AppComponent(platform, toastController, popoverController, events, splashScreen, network, statusBar, router, storage) {
        var _this = this;
        this.platform = platform;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.events = events;
        this.splashScreen = splashScreen;
        this.network = network;
        this.statusBar = statusBar;
        this.router = router;
        this.storage = storage;
        alert("here");
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            if (_this.platform.is("android")) {
                //this.statusBar.backgroundColorByHexString("#952517");
                //this.statusBar.styleLightContent();
                _this.statusBar.styleDefault();
            }
            else {
                _this.statusBar.styleLightContent();
            }
        });
    }
    AppComponent.prototype.onNetworkConnected = function () {
        console.log('[FuelITApp] - onNetworkConnected() :: Network connection detected.');
        this.events.publish('database:sync');
    };
    AppComponent.prototype.onNetworkDisconnected = function () {
        console.log('[FuelITApp] - onNetworkDisconnected() :: Network disconnected.');
    };
    AppComponent.prototype.settings = function (event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function () {
            var popover, _a, data, role;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__.SettingsPage,
                            componentProps: {},
                            cssClass: 'popover-settings',
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _b.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), data = _a.data, role = _a.role;
                        if (data && data.refresh) {
                            this.router.navigateByUrl('/');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.logout = function () {
    };
    AppComponent.prototype.sync = function () {
        console.log('[FuelITApp] - sync() :: Synchronizing databases.');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
        { type: _providers_events_service__WEBPACK_IMPORTED_MODULE_3__.Events },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage }
    ]; };
    AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 4925);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/settings/settings.page */ 1902);

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__.SettingsPage],
            entryComponents: [_pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__.SettingsPage],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule],
            providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__.Network, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__.AppVersion],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 1902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 6909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _providers_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/events-service */ 5284);





var SettingsPage = /** @class */ (function () {
    function SettingsPage(viewController, events) {
        this.viewController = viewController;
        this.events = events;
    }
    SettingsPage.prototype.refresh = function () {
        console.log('[SettingsPage] - refresh() :: ');
        this.events.publish('database:sync');
        this.viewController.dismiss({ refresh: false });
    };
    SettingsPage.prototype.logout = function () {
        console.log('[SettingsPage] - logout() :: ');
        this.events.publish('user:logout');
        this.viewController.dismiss({ refresh: true });
    };
    SettingsPage.prototype.error = function () {
        console.log('[SettingsPage] - error() :: ');
        this.viewController.dismiss({ refresh: true });
        throw new Error('Something went booboo');
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController },
        { type: _providers_events_service__WEBPACK_IMPORTED_MODULE_1__.Events }
    ]; };
    SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'page-settings',
            template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        })
    ], SettingsPage);
    return SettingsPage;
}());



/***/ }),

/***/ 5284:
/*!*********************************************!*\
  !*** ./src/app/providers/events-service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": function() { return /* binding */ Events; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);



/**
 * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
 *
 * @author Shashank Agrawal
 */
var Events = /** @class */ (function () {
    function Events() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    Events.prototype.subscribe = function (topic, observer) {
        if (!this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        return this.channels[topic].subscribe(observer);
    };
    Events.prototype.unsubscribe = function (topic, observer) {
        if (this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic].unsubscribe();
        }
        return;
    };
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    Events.prototype.publish = function (topic, data) {
        var subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    };
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    Events.prototype.destroy = function (topic) {
        var subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    };
    Events = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: 'root'
        })
    ], Events);
    return Events;
}());



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3519,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 6909:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item button (click)=\"refresh()\"> <ion-label>Sync data</ion-label></ion-item>\n  <ion-item button (click)=\"logout()\"> <ion-label>Logout</ion-label></ion-item>\n  <!--<button ion-item (click)=\"error()\">Error</button>-->\n</ion-list>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map