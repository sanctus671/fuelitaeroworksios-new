(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["src_app_pages_transaction_transaction_module_ts"],{

/***/ 4424:
/*!*****************************************************************!*\
  !*** ./src/app/pages/transaction/transaction-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPageRoutingModule": function() { return /* binding */ TransactionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.page */ 5057);




var routes = [
    {
        path: '',
        component: _transaction_page__WEBPACK_IMPORTED_MODULE_0__.TransactionPage
    }
];
var TransactionPageRoutingModule = /** @class */ (function () {
    function TransactionPageRoutingModule() {
    }
    TransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        })
    ], TransactionPageRoutingModule);
    return TransactionPageRoutingModule;
}());



/***/ }),

/***/ 6924:
/*!*********************************************************!*\
  !*** ./src/app/pages/transaction/transaction.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPageModule": function() { return /* binding */ TransactionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-routing.module */ 4424);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page */ 5057);







var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionPageRoutingModule
            ],
            declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_1__.TransactionPage]
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());



/***/ }),

/***/ 5057:
/*!*******************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPage": function() { return /* binding */ TransactionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_transaction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./transaction.page.html */ 3588);
/* harmony import */ var _transaction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page.scss */ 7228);
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



















var TransactionPage = /** @class */ (function () {
    function TransactionPage(builder, loadingController, toastController, configurationService, plantService, tankService, transactionService, operatorService, timesheetService, bluetoothService, events, zone, geolocation) {
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
        this.tanks = [];
        this.plants = [];
        this.operator = {};
        this.transactionForm = builder.group({
            'driver_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
            'trailer_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
            'plant_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
            'start_value': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
            'end_value': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
            'transaction_end_date': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        });
        this.events.subscribe('plants:loaded', function (event) { return _this.populatePlants(event); });
        this.populatePlants(null);
        this.configurationService.get('operator').then(function (operator) {
            console.log('[CreateTransactionPage] - constructor() :: operator:', operator);
            _this.operator = operator;
            console.log(operator);
            _this.transactionForm.patchValue({ driver_name: "" + _this.operator.first_name });
        });
        this.configurationService.get('plant').then(function (plant_id) {
            console.log('[CreateTransactionPage] - constructor() :: plant_id:', plant_id);
            _this.transactionForm.patchValue({ plant_id: plant_id });
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
    TransactionPage.prototype.ngOnInit = function () {
    };
    TransactionPage.prototype.populatePlants = function (events) {
        var _this = this;
        console.log("[CreateTransactionPage] - populatePlants() :: Attempt to load plants from cache, with mode " + events);
        this.plantService.findAll().then(function (data) {
            console.log("[CreateTransactionPage] - populatePlants() :: Found " + data.res.rows.length + " plants in cache.");
            _this.plants = [];
            for (var i = 0; i < data.res.rows.length; i++) {
                _this.plants.push({
                    "plant_id": data.res.rows.item(i).plant_id,
                    "tail_no": data.res.rows.item(i).tail_no,
                });
            }
            console.log("[CreateTransactionPage] - populatePlants() :: Plants found are " + _this.plants);
        });
    };
    TransactionPage.prototype.openSettings = function (event) {
        console.log('[CreateTransactionPage] - openSettings()');
        this.events.publish('settings:open', event);
    };
    TransactionPage.prototype.readMeter = function (event) {
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
        this.loader = this.loadingController.create({
            message: 'Contacting meter.'
        }).then(function (el) {
            _this.loader = el;
            _this.loader.present();
        });
        this.bluetoothService.list();
    };
    TransactionPage.prototype._onMeterComplete = function () {
        //this.events.unsubscribe('meter:complete',   this.onMeterComplete);
        this.loader.dismiss();
    };
    TransactionPage.prototype._onMeterData = function (responses) {
        var _this = this;
        console.log('[CreateTransactionPage] - _onMeterData() :: ', responses);
        // Unsubscribe of further BT data until the Read button pushed again
        this.events.unsubscribe('meter:data', function (data) {
            _this.onMeterData;
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
            _this.transactionForm.patchValue({ trailer_id: response.getData().meterID });
            _this.transactionForm.patchValue({ start_value: response.getData().startVolume });
            _this.transactionForm.patchValue({ end_value: response.getData().endVolume });
            _this.transactionForm.patchValue({ transaction_end_date: response.getData().endDateTime });
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
                plant_id: _this.transactionForm.controls['plant_id'].value,
                trailer_id: response.getData().meterID,
                odometer: '-1'
            };
            _this.transactionService.create(transaction);
        });
        this.onSubmit(this.transactionForm.value);
    };
    TransactionPage.prototype.onSubmit = function (data) {
        var _this = this;
        console.log('[CreateTransactionPage] - onSubmit() :: Attempt to create transaction from data ', data);
        this.configurationService.set('plant', data.plant_id);
        var timestampDate = new Date();
        var timestamp = timestampDate.getDate() + "/"
            + (timestampDate.getMonth() + 1) + "/"
            + timestampDate.getFullYear() + " "
            + timestampDate.getHours() + ":"
            + timestampDate.getMinutes() + ":"
            + timestampDate.getSeconds();
        var transaction = {
            pad_id: '-1',
            operator_id: this.operator.operator_id,
            battery_percentage: '-1',
            long: -1,
            lat: -1,
            transaction_end_date: data.transaction_end_date,
            end_total_value: data.end_value,
            end_value: data.start_value,
            plant_id: data.plant_id,
            trailer_id: data.trailer_id,
            odometer: '-1',
            local_timestamp: timestamp
        };
        var location_request = this.geolocation.getCurrentPosition({ timeout: 10000 });
        location_request.then(function (response) {
            console.log('[CreateTransactionPage] - onSubmit() :: Got geolocation data, creating transaction ', data);
            transaction.long = response.coords.longitude;
            transaction.lat = response.coords.latitude;
            _this.createTransaction(transaction);
        }, function (failure) {
            console.log('[CreateTransactionPage] - onSubmit() :: Failed to get geolocation ', data);
            _this.createTransaction(transaction);
        }).catch(function () {
            _this.createTransaction(transaction);
        });
    };
    TransactionPage.prototype.getGPS = function () {
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
    TransactionPage.prototype.createTransaction = function (transaction) {
        var _this = this;
        this.transactionService.create(transaction).then(function (result) {
            _this.transactionForm.patchValue({ start_value: null });
            _this.transactionForm.patchValue({ end_value: null });
            _this.transactionForm.patchValue({ trailer_id: null });
            _this.toastController.create({
                message: 'Transaction saved!',
                duration: 2000
            }).then(function (el) {
                el.present();
            });
        }, function (failure) {
            _this.toastController.create({
                message: 'Error saving transaction!',
                duration: 2000,
                cssClass: 'toast-error'
            }).then(function (el) {
                el.present();
            });
        });
    };
    TransactionPage.prototype.aircraftChanged = function () {
        this.toastController.create({
            message: 'Aircraft Changed',
            duration: 2000
        }).then(function (el) {
            el.present();
        });
    };
    TransactionPage.ctorParameters = function () { return [
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
    TransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
            selector: 'app-transaction',
            template: _raw_loader_transaction_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_transaction_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
        })
    ], TransactionPage);
    return TransactionPage;
}());



/***/ }),

/***/ 7228:
/*!*********************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form ion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoidHJhbnNhY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0gaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 3588:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction/transaction.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n    <ion-toolbar color=\"primary\">\n        <ion-title>Transactions</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"light\" (click)=\"openSettings($event)\" >\n                <ion-icon name=\"settings\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  \n</ion-header>\n\n<ion-content class=\"ion-padding form\" scroll=\"false\">\n    <ion-list>\n        <form [formGroup]=\"transactionForm\" (ngSubmit)=\"onSubmit(transactionForm.value)\">\n\n            <ion-item>\n                <ion-label position=\"floating\">Operator</ion-label>\n                <ion-input type=\"text\" formControlName=\"driver_name\" readonly=\"true\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">Aircraft number</ion-label>\n                <ion-select formControlName=\"plant_id\" (ionChange)=\"aircraftChanged()\">\n                    <ion-select-option *ngFor=\"let plant of plants\" value=\"{{plant.plant_id}}\">{{plant.tail_no}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">Loader number</ion-label>\n                <ion-input type=\"text\" formControlName=\"trailer_id\" readonly=\"true\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"fixed\">Start value</ion-label>\n                <ion-input type=\"text\" formControlName=\"start_value\" readonly=\"true\"></ion-input>            \n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"fixed\">End value</ion-label>\n                <ion-input type=\"text\" formControlName=\"end_value\" readonly=\"true\"></ion-input>\n            </ion-item>\n\n                <ion-input class=\"hide-input\" type=\"hidden\" formControlName=\"transaction_end_date\" readonly=\"true\"></ion-input>\n \n            <ion-button fill=\"outline\"  (click)=\"readMeter($event)\"  expand=\"block\" [disabled]=\"!transactionForm.valid\">Fuelling Completed</ion-button>\n\n\n        </form>\n\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_transaction_module_ts.js.map