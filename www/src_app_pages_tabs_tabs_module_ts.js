(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 5448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 4101);




var routes = [
    {
        path: 'tabs/tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'transaction',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_providers_operator-service_ts-src_app_providers_plant-service_ts-src_app_prov-9e8a1d"), __webpack_require__.e("src_app_pages_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../transaction/transaction.module */ 6924)).then(function (m) { return m.TransactionPageModule; }); }
            },
            {
                path: 'tanktotank',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_providers_operator-service_ts-src_app_providers_plant-service_ts-src_app_prov-9e8a1d"), __webpack_require__.e("src_app_pages_tanktotank_tanktotank_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tanktotank/tanktotank.module */ 8919)).then(function (m) { return m.TanktotankPageModule; }); }
            },
            {
                path: '',
                redirectTo: 'tabs/tabs/transaction',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tabs/transaction',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ 4101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 8474);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 2625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        console.log("ere");
    }
    TabsPage.ctorParameters = function () { return []; };
    TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'app-tabs',
            template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ 2625:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8474:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("test\n\n<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"transaction\">\n          <ion-label>Transaction</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tanktotank\">\n          <ion-label>Tank to Tank</ion-label>\n        </ion-tab-button>\n\n    </ion-tab-bar>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map