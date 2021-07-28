(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["src_app_pages_tanktotank_tanktotank_module_ts"],{

/***/ 1669:
/*!***************************************************************!*\
  !*** ./src/app/pages/tanktotank/tanktotank-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TanktotankPageRoutingModule": function() { return /* binding */ TanktotankPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tanktotank_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tanktotank.page */ 6480);




var routes = [
    {
        path: '',
        component: _tanktotank_page__WEBPACK_IMPORTED_MODULE_0__.TanktotankPage
    }
];
var TanktotankPageRoutingModule = /** @class */ (function () {
    function TanktotankPageRoutingModule() {
    }
    TanktotankPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        })
    ], TanktotankPageRoutingModule);
    return TanktotankPageRoutingModule;
}());



/***/ }),

/***/ 8919:
/*!*******************************************************!*\
  !*** ./src/app/pages/tanktotank/tanktotank.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TanktotankPageModule": function() { return /* binding */ TanktotankPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tanktotank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tanktotank-routing.module */ 1669);
/* harmony import */ var _tanktotank_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tanktotank.page */ 6480);







var TanktotankPageModule = /** @class */ (function () {
    function TanktotankPageModule() {
    }
    TanktotankPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                _tanktotank_routing_module__WEBPACK_IMPORTED_MODULE_0__.TanktotankPageRoutingModule
            ],
            declarations: [_tanktotank_page__WEBPACK_IMPORTED_MODULE_1__.TanktotankPage]
        })
    ], TanktotankPageModule);
    return TanktotankPageModule;
}());



/***/ }),

/***/ 6480:
/*!*****************************************************!*\
  !*** ./src/app/pages/tanktotank/tanktotank.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TanktotankPage": function() { return /* binding */ TanktotankPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tanktotank_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tanktotank.page.html */ 8832);
/* harmony import */ var _tanktotank_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tanktotank.page.scss */ 1718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _providers_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/configuration-service */ 430);
/* harmony import */ var _providers_plant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/plant-service */ 2631);
/* harmony import */ var _providers_tank_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/tank-service */ 797);
/* harmony import */ var _providers_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/transaction-service */ 1725);
/* harmony import */ var _providers_operator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/operator-service */ 1044);
/* harmony import */ var _providers_timesheet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/timesheet-service */ 8409);
/* harmony import */ var _providers_bluetooth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/bluetooth-service */ 7081);
/* harmony import */ var _providers_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/events-service */ 5284);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);



















var TanktotankPage = /** @class */ (function () {
    function TanktotankPage(builder, loadingController, toastController, configurationService, plantService, tankService, transactionService, operatorService, timesheetService, bluetoothService, events, zone, geolocation) {
        var _this = this;
        this.builder = builder;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.configurationService = configurationService;
        this.plantService = plantService;
        this.tankService = tankService;
        this.transactionService = transactionService;
        this.operatorService = operatorService;
        this.timesheetService = timesheetService;
        this.bluetoothService = bluetoothService;
        this.events = events;
        this.zone = zone;
        this.geolocation = geolocation;
        this.tankToTankForm = builder.group({
            'from_trailer_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
            'to_trailer_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        });
        this.events.subscribe('tanks:loaded', function (event) { return _this.populateTanks(event); });
        this.populateTanks(null);
        configurationService.get('operator').then(function (operator) {
            _this.operator = operator;
        });
        this.configurationService.get('tank').then(function (trailer_id) {
            console.log('[CreateTankToTankPage] - constructor() :: trailer_id: ', trailer_id);
            _this.tankToTankForm.patchValue({ from_trailer_id: trailer_id });
        });
        this.onMeterData = function (responses) {
            _this._onMeterData(responses);
        };
        this.onMeterComplete = function () {
            _this._onMeterComplete();
        };
        this.onMeterListing = function (event) {
            _this.loader.setContent('Listing meters.');
        };
        this.onMeterListingSelect = function (event) {
            _this.loader.dismiss();
        };
        this.onMeterListingSelected = function (event) {
            _this.loader.present();
            _this.loader.setContent('Meter Selected.');
        };
        this.onMeterConnecting = function (event) {
            _this.loader.setContent('Connecting to meter.');
        };
        this.onMeterConnected = function (event) {
            _this.loader.setContent('Connected to meter.');
        };
        this.onMeterReading = function (event) {
            _this.loader.setContent('Reading data.');
        };
    }
    TanktotankPage.prototype.populateTanks = function (events) {
        var _this = this;
        console.log("[CreateTankToTankPage] - populateTanks() :: Attempt to load tanks from cache, with mode " + events);
        this.tankService.findAll().then(function (data) {
            console.log("[CreateTankToTankPage] - populateTanks() :: Found " + data.res.rows.length + " tanks in cache.");
            _this.tanks = [];
            for (var i = 0; i < data.res.rows.length; i++) {
                _this.tanks.push({
                    "trailer_id": data.res.rows.item(i).trailer_id,
                    "trailer_no": data.res.rows.item(i).trailer_no,
                    "trailer_name": data.res.rows.item(i).trailer_name,
                });
            }
            console.log("[CreateTankToTankPage] - populateTanks() :: Tanks found are " + _this.tanks);
        });
    };
    TanktotankPage.prototype.openSettings = function (event) {
        console.log('[CreateTankToTankPage] - openSettings()');
        this.events.publish('settings:open', event);
    };
    TanktotankPage.prototype.readMeter = function (event) {
        var _this = this;
        console.log('[CreateTransactionPage] - readMeter() :: ');
        this.events.subscribe('meter:listing', function (data) {
            _this.onMeterListing();
        });
        this.events.subscribe('meter:listingselect', function (data) {
            _this.onMeterListingSelect();
        });
        this.events.subscribe('meter:connecting', function (data) {
            _this.onMeterConnecting();
        });
        this.events.subscribe('meter:connected', function (data) {
            _this.onMeterConnected();
        });
        this.events.subscribe('meter:reading', function (data) {
            _this.onMeterReading();
        });
        this.events.subscribe('meter:complete', function (data) {
            _this.onMeterComplete();
        });
        this.events.subscribe('meter:data', function (data) {
            _this.onMeterData();
        });
        this.loadingController.create({
            message: 'Contacting meter.'
        }).then(function (el) {
            _this.loader = el;
            _this.loader.present();
        });
        this.bluetoothService.list();
    };
    TanktotankPage.prototype._onMeterComplete = function () {
        //this.events.unsubscribe('meter:complete',   this.onMeterComplete);
        this.loader.dismiss();
    };
    TanktotankPage.prototype._onMeterData = function (responses) {
        var _this = this;
        console.log('[CreateTransactionPage] - _onMeterData() :: ', responses);
        // Unsubscribe of further BT data until the Read button pushed again
        this.events.unsubscribe('meter:data', function (data) {
            _this.onMeterData();
        });
        this.events.unsubscribe('meter:listing', function (data) {
            _this.onMeterListing();
        });
        this.events.unsubscribe('meter:connecting', function (data) {
            _this.onMeterConnecting();
        });
        this.events.unsubscribe('meter:connected', function (data) {
            _this.onMeterConnected();
        });
        this.events.unsubscribe('meter:reading', function (data) {
            _this.onMeterReading();
        });
        // Grab the last response, which is the current one, and write it to the UI
        var response = responses.pop();
        if (!response) {
            console.warn('[CreateTransactionPage] - _onMeterData() :: Received empty response, exiting.', response);
            return;
        }
        this.zone.run(function () {
            var amount = (response.getData().endVolume - response.getData().startVolume);
            //this.tankToTankForm.patchValue({ from_trailer_id:               response.getData().meterID });
            _this.tankToTankForm.patchValue({ amount: amount });
        });
        // The rest should be stored and uploaded to the API in the background, with blanking out data we don't know
        responses.forEach(function (element) {
            console.log('[CreateTransactionPage] - _onMeterData() :: Got BT data to upload in the background');
            var transaction = {
                pad_id: '-1',
                operator_id: _this.operator.operator_id,
                battery_percentage: '-1',
                long: -1,
                lat: -1,
                transaction_end_date: element.getData().endDateTime,
                end_total_value: element.getData().endVolume,
                end_value: element.getData().startVolume,
                plant_id: null,
                trailer_id: response.getData().meterID,
                odometer: '-1'
            };
            _this.transactionService.create(transaction);
        });
        this.onSubmit(this.tankToTankForm.value);
    };
    TanktotankPage.prototype.onSubmit = function (data) {
        var _this = this;
        console.log('[CreateTankToTankPage] - onSubmit() :: Attempt to create TankToTank from data ', data);
        var refill = {
            from_trailer_id: data.from_trailer_id,
            to_trailer_id: data.to_trailer_id,
            operator_id: this.operator.operator_id,
            amount: data.amount
        };
        this.transactionService.createRefill(refill).then(function (result) {
            _this.toastController.create({
                message: 'Transaction saved!',
                duration: 2000
            }).then(function (el) {
                el.present();
            });
            _this.tankToTankForm.patchValue({ from_trailer_id: null });
            _this.tankToTankForm.patchValue({ to_trailer_id: null });
            _this.tankToTankForm.patchValue({ amount: null });
        }).catch(function (e) {
            //alert(e);
            //alert(JSON.stringify(e));	
            _this.toastController.create({
                message: 'Error saving transaction!',
                duration: 2000,
                cssClass: 'toast-error'
            }).then(function (el) {
                el.present();
            });
        });
    };
    TanktotankPage.prototype.getGPS = function () {
        var location_request = this.geolocation.getCurrentPosition({ timeout: 10000 });
        location_request.then(function (response) {
            var res = JSON.stringify(response);
            console.log(response);
        }, function (failure) {
            console.log(failure);
            var fail = JSON.stringify(failure);
        }).catch(function (e) {
            console.log(e);
        });
    };
    TanktotankPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
        { type: _providers_configuration_service__WEBPACK_IMPORTED_MODULE_2__.ConfigurationService },
        { type: _providers_plant_service__WEBPACK_IMPORTED_MODULE_3__.PlantService },
        { type: _providers_tank_service__WEBPACK_IMPORTED_MODULE_4__.TankService },
        { type: _providers_transaction_service__WEBPACK_IMPORTED_MODULE_5__.TransactionService },
        { type: _providers_operator_service__WEBPACK_IMPORTED_MODULE_6__.OperatorService },
        { type: _providers_timesheet_service__WEBPACK_IMPORTED_MODULE_7__.TimesheetService },
        { type: _providers_bluetooth_service__WEBPACK_IMPORTED_MODULE_8__.BluetoothService },
        { type: _providers_events_service__WEBPACK_IMPORTED_MODULE_9__.Events },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__.Geolocation }
    ]; };
    TanktotankPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
            selector: 'app-tanktotank',
            template: _raw_loader_tanktotank_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_tanktotank_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
        })
    ], TanktotankPage);
    return TanktotankPage;
}());



/***/ }),

/***/ 1718:
/*!*******************************************************!*\
  !*** ./src/app/pages/tanktotank/tanktotank.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form ion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbmt0b3RhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJ0YW5rdG90YW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIGlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 8832:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanktotank/tanktotank.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n    <ion-toolbar color=\"primary\">\n        <ion-title>Tank to Tank</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"light\" (click)=\"openSettings($event)\" >\n                <ion-icon name=\"settings\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  \n</ion-header>\n\n<ion-content class=\"ion-padding form\">\n    <ion-list>\n\n        <form [formGroup]=\"tankToTankForm\" (ngSubmit)=\"onSubmit(tankToTankForm.value)\">\n               \n\n            <ion-item>\n                <ion-label floating>From Tank</ion-label>\n                <ion-select formControlName=\"from_trailer_id\">\n                    <ion-select-option *ngFor=\"let tank of tanks\" value=\"{{tank.trailer_id}}\">{{tank.trailer_name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>To Tank</ion-label>\n                <ion-select formControlName=\"to_trailer_id\">\n                    <ion-select-option *ngFor=\"let tank of tanks\" value=\"{{tank.trailer_id}}\">{{tank.trailer_name}}</ion-select-option>\n                </ion-select>\n            </ion-item>            \n            \n            \n            <ion-item>\n                <ion-label>Amount (L)</ion-label>\n                <ion-input type=\"number\" name=\"amount\" formControlName=\"amount\" readonly=\"true\"></ion-input>\n            </ion-item>\n\n     \n            \n            \n            <ion-button fill=\"outline\"  (click)=\"readMeter($event)\"  expand=\"block\" [disabled]=\"!tankToTankForm.valid\">Transfer Completed</ion-button>\n\n            \n            \n            \n            \n            \n        </form>\n\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tanktotank_tanktotank_module_ts.js.map