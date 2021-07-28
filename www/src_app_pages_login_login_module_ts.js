(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _providers_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/configuration-service */ 430);








var LoginPage = /** @class */ (function () {
    function LoginPage(builder, configurationService, router) {
        this.builder = builder;
        this.configurationService = configurationService;
        this.router = router;
        this.state = 'default';
        this.loginForm = builder.group({
            'pin_no': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        alert("login loaded");
        /*
                this.configurationService.get('operator').then(operator => {
                    console.log('[LoginPage] constructor() :: ', operator)
                    if (operator != null) {
                        this.router.navigateByUrl('/tabs');
                    }
                });
        */
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onSubmit = function (data) {
        console.log('[LoginPage] - onSubmit() :: Attempt to login ', data);
        this.state = 'working';
        /*
                this.operatorService.findByPinCode(data.pin_no).then(
                    operator => {
        console.log(operator);
                        if(operator.res.rows.length == 1) {
                            console.log('[LoginPage] - onSubmit() :: Found operator for the provided PIN', operator.res.rows.item(0));
                            this.configurationService.set('operator', operator.res.rows.item(0)).then(
                                result => {
                                    console.log('[LoginPage] - onSubmit() :: Current operator set in config to:', operator.res.rows.item(0));
                                    this.state = 'default';
                                    this.router.navigateByUrl('/tabs');
                                },
                                failure => {
                                    console.log('[LoginPage] - onSubmit() :: Failed to set the current operator to config:', failure);
                                    this.state = 'default';
                                    this.configurationService.remove('operator');
                                }
                            );
                        }
                        else {
                            console.log('[LoginPage] - onSubmit() :: Found incorrect number of operators for the provided PIN', operator.res.rows.length);
                            this.state = 'default';
                            this.configurationService.remove('operator');
                        }
        
                    },
                    failure => {
                        console.log('[LoginPage] - onSubmit() :: Failed to find operator for the provided PIN', failure);
                        this.state = 'default';
                        this.configurationService.remove('operator');
                    });
                    
                    */
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
        { type: _providers_configuration_service__WEBPACK_IMPORTED_MODULE_2__.ConfigurationService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
    ]; };
    LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: 'app-login',
            template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-image {\n  text-align: center;\n  margin-top: 100px;\n  padding: 0px 20px;\n}\n\n.logo-image img {\n  max-width: 200px;\n}\n\nion-content.form.login form {\n  margin-top: 20px;\n  padding: 0px 10px;\n}\n\n.numeric-password input[type=number] {\n  -webkit-text-security: disc;\n}\n\n.login ion-button {\n  margin-top: 20px;\n}\n\n.login .button.ios {\n  --background: #02ad59 !important;\n}\n\n.app-version {\n  font-size: 12px;\n  opacity: 0.5;\n  text-align: center;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0ksaUJBQUE7RUFDSixpQkFBQTtBQUZKOztBQUtBO0VBQ1EsZ0JBQUE7QUFGUjs7QUFLQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGQTs7QUFNQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtBQUhKOztBQU9BO0VBQ0EsZ0NBQUE7QUFKQTs7QUFRQTtFQUNBLGVBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLmxvZ2lue1xyXG59XHJcblxyXG4ubG9nby1pbWFnZXtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZzowcHggMjBweDtcclxufVxyXG5cclxuLmxvZ28taW1hZ2UgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmZvcm0ubG9naW4gZm9ybSB7XHJcbm1hcmdpbi10b3A6MjBweDtcclxucGFkZGluZzowcHggMTBweDtcclxufVxyXG5cclxuXHJcbi5udW1lcmljLXBhc3N3b3JkIGlucHV0W3R5cGU9bnVtYmVyXXtcclxuICAgIC13ZWJraXQtdGV4dC1zZWN1cml0eTogZGlzYztcclxufVxyXG5cclxuLmxvZ2luIGlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcblxyXG4ubG9naW4gLmJ1dHRvbi5pb3N7XHJcbi0tYmFja2dyb3VuZDogIzAyYWQ1OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFwcC12ZXJzaW9ue1xyXG5mb250LXNpemU6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content padding class=\"form login\">\n        <div class=\"logo-image\"><img src=\"assets/logo.png\"></div>\n        <form [formGroup]=\"loginForm\" (submit)=\"onSubmit(loginForm.value)\">\n            <ion-item>\n                <ion-label floating>PIN</ion-label>\n                <ion-input type=\"number\" formControlName=\"pin_no\" class=\"numeric-password text-centre\"></ion-input>\n            </ion-item>\n            \n            \n                <ion-button type=\"submit\" expand=\"block\" [disabled]=\"state=='working'\"><ion-icon name=\"log-in\"></ion-icon> Login</ion-button>\n\n\n        </form>\n        \n\t\t<div class=\"app-version\">Version 0.0.19</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map