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
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(function (m) { return m.LoginPageModule; }); }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _providers_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/events-service */ 5284);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/settings/settings.page */ 1902);
/* harmony import */ var _providers_plant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/plant-service */ 2631);
/* harmony import */ var _providers_operator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/operator-service */ 1044);
/* harmony import */ var _providers_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/configuration-service */ 430);
/* harmony import */ var _providers_transaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/transaction-service */ 1725);
/* harmony import */ var _providers_tank_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./providers/tank-service */ 797);
/* harmony import */ var _providers_timesheet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/timesheet-service */ 8409);
/* harmony import */ var _providers_dipreading_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/dipreading-service */ 5464);
/* harmony import */ var _providers_bluetooth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/bluetooth-service */ 7081);
/* harmony import */ var _providers_sql_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./providers/sql-service */ 680);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);




window.fetch = whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__.fetch;




















var AppComponent = /** @class */ (function () {
    function AppComponent(platform, toastController, popoverController, plantService, tankService, operatorService, transactionService, timesheetService, dipReadingService, configurationService, bluetoothService, events, splashScreen, network, statusBar, sqlService, router, storage) {
        var _this = this;
        this.platform = platform;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.plantService = plantService;
        this.tankService = tankService;
        this.operatorService = operatorService;
        this.transactionService = transactionService;
        this.timesheetService = timesheetService;
        this.dipReadingService = dipReadingService;
        this.configurationService = configurationService;
        this.bluetoothService = bluetoothService;
        this.events = events;
        this.splashScreen = splashScreen;
        this.network = network;
        this.statusBar = statusBar;
        this.sqlService = sqlService;
        this.router = router;
        this.storage = storage;
        this.events.subscribe('database:sync', function (event) {
            _this.sync();
        });
        this.events.subscribe('user:logout', function (event) {
            _this.logout();
        });
        this.events.subscribe('settings:open', function (event) {
            _this.settings(event);
        });
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            console.log('[FuelITApp] - constructor() :: Detecting platforms:', _this.platform.platforms());
            console.log('[FuelITApp] - constructor() :: Preparing services.');
            _this.sqlService.initDatabase().then(function () {
                Promise.all([
                    _this.operatorService.init(),
                    _this.plantService.init(),
                    _this.tankService.init(),
                    _this.transactionService.init(),
                    _this.transactionService.initRefills(),
                    _this.timesheetService.init(),
                    _this.dipReadingService.init()
                ]).then(function (result) {
                    console.log('[FuelITApp] - constructor() :: Services prepared.');
                    _this.sync();
                });
            }).catch(function () {
            });
            _this.platform.pause.subscribe(function () {
                console.log('[FuelITApp] - constructor() :: App paused');
            });
            _this.platform.resume.subscribe(function () {
                console.log('[FuelITApp] - constructor() :: App resumed');
            });
            _this.network.onConnect().subscribe(function () {
                _this.onNetworkConnected();
            });
            _this.network.onDisconnect().subscribe(function () {
                _this.onNetworkDisconnected();
            });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function () {
            var popover, _a, data, role;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_7__.SettingsPage,
                            componentProps: {
                                transactionService: this.transactionService,
                                timesheetService: this.timesheetService,
                                operatorService: this.operatorService,
                                plantService: this.plantService,
                                tankService: this.tankService,
                                dipReadingService: this.dipReadingService,
                                configurationService: this.configurationService,
                            },
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
        var _this = this;
        console.log('[FuelITApp] - logout() :: Logging out operator.');
        this.configurationService.remove('operator').then(function (result) {
            _this.events.publish('user:logged_out');
        }, function (failuer) {
        });
    };
    AppComponent.prototype.sync = function () {
        var _this = this;
        console.log('[FuelITApp] - sync() :: Synchronizing databases.');
        Promise.all([
            // configurationService.get('operator'),
            this.transactionService.upload(),
            this.timesheetService.upload(),
            this.dipReadingService.upload(),
            this.operatorService.load(),
            this.plantService.load(),
            this.tankService.load(),
        ])
            .then(function (results) {
            console.log('[FuelITApp] - sync() :: Databases synchronized.');
            var toast = _this.toastController.create({
                message: 'Database synced',
                duration: 2000
            }).then(function (el) {
                _this.events.publish('database:synced');
                el.present();
            });
        }, function (reason) {
            console.warn('[FuelITApp] - sync() :: Failed to synchronize databases:', reason);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ToastController },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.PopoverController },
        { type: _providers_plant_service__WEBPACK_IMPORTED_MODULE_8__.PlantService },
        { type: _providers_tank_service__WEBPACK_IMPORTED_MODULE_12__.TankService },
        { type: _providers_operator_service__WEBPACK_IMPORTED_MODULE_9__.OperatorService },
        { type: _providers_transaction_service__WEBPACK_IMPORTED_MODULE_11__.TransactionService },
        { type: _providers_timesheet_service__WEBPACK_IMPORTED_MODULE_13__.TimesheetService },
        { type: _providers_dipreading_service__WEBPACK_IMPORTED_MODULE_14__.DipReadingService },
        { type: _providers_configuration_service__WEBPACK_IMPORTED_MODULE_10__.ConfigurationService },
        { type: _providers_bluetooth_service__WEBPACK_IMPORTED_MODULE_15__.BluetoothService },
        { type: _providers_events_service__WEBPACK_IMPORTED_MODULE_3__.Events },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar },
        { type: _providers_sql_service__WEBPACK_IMPORTED_MODULE_16__.SqlService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_20__.Storage }
    ]; };
    AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
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

/***/ 6683:
/*!*********************************************!*\
  !*** ./src/app/models/bluetooth-message.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BluetoothMessage": function() { return /* binding */ BluetoothMessage; },
/* harmony export */   "BluetoothUUID": function() { return /* binding */ BluetoothUUID; },
/* harmony export */   "BluetoothTransactionRequest": function() { return /* binding */ BluetoothTransactionRequest; },
/* harmony export */   "BluetoothAcknowledgement": function() { return /* binding */ BluetoothAcknowledgement; },
/* harmony export */   "BluetoothResponse": function() { return /* binding */ BluetoothResponse; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);

var BluetoothMessage = /** @class */ (function () {
    function BluetoothMessage() {
    }
    BluetoothMessage.ESCAPE = String.fromCharCode(0x0A);
    BluetoothMessage.FRAME_BOUNDARY = String.fromCharCode(0x1C);
    return BluetoothMessage;
}());

var BluetoothUUID = /** @class */ (function () {
    function BluetoothUUID() {
    }
    BluetoothUUID.SERVICE = "569A1101-B87F-490C-92CB-11BA5EA5167C";
    BluetoothUUID.READ = "569A2000-B87F-490C-92CB-11BA5EA5167C";
    BluetoothUUID.WRITE = "569A2001-B87F-490C-92CB-11BA5EA5167C";
    return BluetoothUUID;
}());

var BluetoothTransactionRequest = /** @class */ (function () {
    function BluetoothTransactionRequest() {
    }
    BluetoothTransactionRequest.prototype.toString = function () {
        return BluetoothMessage.FRAME_BOUNDARY + "{\"type\":\"transactionRequest\"}" + BluetoothMessage.FRAME_BOUNDARY;
    };
    BluetoothTransactionRequest.prototype.toArrayBuffer = function () {
        var sendString = this.toString();
        var array = new Uint8Array(sendString.length);
        for (var i = 0, l = sendString.length; i < l; i++) {
            array[i] = sendString.charCodeAt(i);
        }
        return array.buffer;
    };
    BluetoothTransactionRequest.prototype.toChunkedArrayBuffer = function () {
        var e_1, _a;
        var sendString = this.toString();
        var chunks = sendString.match(/.{1,10}/g);
        var chunkedBuffer = [];
        try {
            for (var chunks_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                var array = new Uint8Array(chunk.length);
                for (var i = 0, l = chunk.length; i < l; i++) {
                    array[i] = chunk.charCodeAt(i);
                }
                chunkedBuffer.push(array.buffer);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_a = chunks_1.return)) _a.call(chunks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return chunkedBuffer;
    };
    return BluetoothTransactionRequest;
}());

var BluetoothAcknowledgement = /** @class */ (function () {
    function BluetoothAcknowledgement() {
    }
    BluetoothAcknowledgement.prototype.toString = function () {
        return BluetoothMessage.FRAME_BOUNDARY + "{\"type\":\"OK\"}" + BluetoothMessage.FRAME_BOUNDARY;
    };
    BluetoothAcknowledgement.prototype.toArrayBuffer = function () {
        var sendString = this.toString();
        var array = new Uint8Array(sendString.length);
        for (var i = 0, l = sendString.length; i < l; i++) {
            array[i] = sendString.charCodeAt(i);
        }
        return array.buffer;
    };
    BluetoothAcknowledgement.prototype.toChunkedArrayBuffer = function () {
        var e_2, _a;
        var sendString = this.toString();
        var chunks = sendString.match(/.{1,10}/g);
        var chunkedBuffer = [];
        try {
            for (var chunks_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(chunks), chunks_2_1 = chunks_2.next(); !chunks_2_1.done; chunks_2_1 = chunks_2.next()) {
                var chunk = chunks_2_1.value;
                var array = new Uint8Array(chunk.length);
                for (var i = 0, l = chunk.length; i < l; i++) {
                    array[i] = chunk.charCodeAt(i);
                }
                chunkedBuffer.push(array.buffer);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chunks_2_1 && !chunks_2_1.done && (_a = chunks_2.return)) _a.call(chunks_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return chunkedBuffer;
    };
    return BluetoothAcknowledgement;
}());

var BluetoothResponse = /** @class */ (function () {
    function BluetoothResponse(rawBuffer, isString) {
        this.data = null;
        this.type = null;
        //convert raw from array buffer to string as per BLE central plugin https://github.com/don/cordova-plugin-ble-central#typed-arrays
        var raw = "";
        if (!isString) {
            raw = this.bytesToString(rawBuffer);
        }
        else {
            raw = rawBuffer;
        }
        console.debug("[BluetoothResponse] - constructor() :: \"" + raw + "\"");
        if (raw != "" + BluetoothMessage.FRAME_BOUNDARY && raw != "" + (BluetoothMessage.ESCAPE + BluetoothMessage.FRAME_BOUNDARY) && raw != '') {
            try {
                raw = raw.replace(/\x1C/g, '').replace(/\x0A/g, '');
                var packet = JSON.parse(String(raw.slice(0, raw.length)));
                this.data = packet.data;
                this.type = packet.type;
            }
            catch (error) {
                console.error('[BluetoothResponse] - constructor() ::', error);
                throw error;
            }
        }
    }
    BluetoothResponse.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    BluetoothResponse.prototype.getData = function () {
        return this.data;
    };
    BluetoothResponse.prototype.isBoundaryOnly = function () {
        return this.data == null;
    };
    BluetoothResponse.prototype.isEmpty = function () {
        return Object.keys(this.data).length == 0;
    };
    return BluetoothResponse;
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

/***/ 7081:
/*!************************************************!*\
  !*** ./src/app/providers/bluetooth-service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BluetoothService": function() { return /* binding */ BluetoothService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-service */ 5284);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);
/* harmony import */ var _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bluetooth-message */ 6683);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);











var BluetoothService = /** @class */ (function () {
    function BluetoothService(events, toastController, alertCtrl, storage) {
        var _this = this;
        this.events = events;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.responses = [];
        this.storage.create();
        this.deviceCount = 0;
        this.connected = false;
        //this.deviceCheckInterval = setInterval(() => {
        //this.checkDevices();
        //},10000);        
        this.previouslyConnectedMeter = "";
        this.storage.get("previouslyConnectedMeter").then(function (uuid) {
            if (uuid) {
                _this.previouslyConnectedMeter = uuid;
            }
        }).catch(function () {
        });
        this.devices = [];
        this.chunkedResponse = "";
    }
    BluetoothService.prototype.checkDevices = function () {
        var _this = this;
        this.scanDevices().then(function (devices) {
            var count = devices.length;
            if (count !== _this.deviceCount) {
                _this.deviceCount = count;
                //prompt user if they want to connect to differant device
                _this.changeDevice(devices);
            }
        });
    };
    BluetoothService.prototype.connect = function (device) {
        //console.log('[BluetoothService] - connect() :: ');
        var _this = this;
        this.events.publish('meter:connecting');
        ble.isConnected(device.address, function () {
            _this.onConnect(device, { status: "device was already connected" });
        }, function () {
            ble.connect(device.address, function (deviceDetails) { return _this.onConnect(device, deviceDetails); }, function (failure) { return _this.onFail(failure); });
        });
    };
    BluetoothService.prototype.list = function () {
        var _this = this;
        //console.log(`[BluetoothService] - list() :: List bound devices`);
        this.responses = new Array();
        this.events.publish('meter:listing');
        this.scanDevices().then(function (devices) {
            var e_1, _a;
            if (devices.length === 1) {
                _this.connect(devices[0]);
                _this.storage.set("previouslyConnectedMeter", devices[0].address);
                return;
            }
            else {
                if (_this.previouslyConnectedMeter) {
                    try {
                        for (var devices_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                            var device = devices_1_1.value;
                            if (device.address === _this.previouslyConnectedMeter) {
                                _this.connect(device);
                                return;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _this.selectDevice(devices);
                }
            }
        });
    };
    BluetoothService.prototype.scanDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var devices = [];
            var addedDevices = [];
            ble.scan([_models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.SERVICE], 5, function (foundDevice) {
                var newDevice = { address: foundDevice.id, name: foundDevice.name };
                if (newDevice.name && addedDevices.indexOf(newDevice.name) < 0) {
                    //alert(JSON.stringify(foundDevice))
                    devices.push(newDevice);
                    addedDevices.push(newDevice.name);
                }
            }, function (failure) { return _this.onFail(failure); });
            setTimeout(function () {
                resolve(devices);
            }, 5500);
        });
    };
    BluetoothService.prototype.selectDevice = function (devices) {
        var _this = this;
        this.events.publish('meter:listingselect');
        this.deviceCount = devices.length;
        var inputs = [];
        var inputsIndexed = {};
        for (var index in devices) {
            var device = devices[index];
            inputs.push({
                type: "radio",
                name: "device" + index,
                value: index,
                label: device.name
            });
            inputsIndexed[index] = device;
        }
        this.alertCtrl.create({
            header: 'Select Device',
            inputs: inputs,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: function (deviceIndex) {
                        if (deviceIndex) {
                            _this.events.publish('meter:listingselected');
                            var device = inputsIndexed[deviceIndex];
                            _this.storage.set("previouslyConnectedMeter", device.address);
                            _this.connect(device);
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    BluetoothService.prototype.changeDevice = function (devices) {
        var _this = this;
        var inputs = [];
        var inputsIndexed = {};
        for (var index in devices) {
            var device = devices[index];
            inputs.push({
                type: "radio",
                name: "device" + index,
                value: index,
                label: device.name
            });
            inputsIndexed[index] = device;
        }
        this.alertCtrl.create({
            header: 'Select Device',
            subHeader: 'The devices in your bluetooth network have changed',
            message: 'If you wish to change to another meter, select it from the list, otherwise press cancel to continue on the current meter.',
            inputs: inputs,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: function (deviceIndex) {
                        if (deviceIndex) {
                            var device = inputsIndexed[deviceIndex];
                            _this.events.publish('meter:connecting');
                            _this.storage.set("previouslyConnectedMeter", device.address);
                            _this.connect(device);
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    BluetoothService.prototype.request = function (device) {
        //console.log('[BluetoothService] - request() :: Sending transaction request to the BT device');
        var e_2, _a;
        var _this = this;
        this.events.publish('meter:reading');
        var chunkedBuffer = (new _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothTransactionRequest()).toChunkedArrayBuffer();
        try {
            for (var chunkedBuffer_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(chunkedBuffer), chunkedBuffer_1_1 = chunkedBuffer_1.next(); !chunkedBuffer_1_1.done; chunkedBuffer_1_1 = chunkedBuffer_1.next()) {
                var chunk = chunkedBuffer_1_1.value;
                ble.write(device.address, _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.SERVICE, _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.WRITE, chunk, function () { return _this.onRequestComplete(); }, function (failure) { return _this.onFail(failure); });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chunkedBuffer_1_1 && !chunkedBuffer_1_1.done && (_a = chunkedBuffer_1.return)) _a.call(chunkedBuffer_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    BluetoothService.prototype.requestAll = function () {
        //console.log('[BluetoothService] - requestAll() :: Sending transaction request to the BT device');
    };
    BluetoothService.prototype.acknowledge = function (device) {
        //console.log('[BluetoothService] - acknowledge() :: Sending acknowledge to the BT device');
        var e_3, _a;
        var _this = this;
        var chunkedBuffer = (new _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothAcknowledgement()).toChunkedArrayBuffer();
        try {
            for (var chunkedBuffer_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(chunkedBuffer), chunkedBuffer_2_1 = chunkedBuffer_2.next(); !chunkedBuffer_2_1.done; chunkedBuffer_2_1 = chunkedBuffer_2.next()) {
                var chunk = chunkedBuffer_2_1.value;
                ble.write(device.address, _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.SERVICE, _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.WRITE, chunk, function () { return _this.onAcknowledge(device); }, function (failure) { return _this.onFail(failure); });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (chunkedBuffer_2_1 && !chunkedBuffer_2_1.done && (_a = chunkedBuffer_2.return)) _a.call(chunkedBuffer_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    BluetoothService.prototype.onConnect = function (device, deviceDetails) {
        var _this = this;
        //console.info(`[BluetoothService] - onConnect() :: Connected to BT device ${device.address}.`);
        this.alertCtrl.create({
            header: 'Success',
            subHeader: 'You are now connected to ' + device.name,
            buttons: ['Dismiss']
        }).then(function (el) {
            el.present();
        });
        /*
         * for debugging purposes
        let alertBox2 = this.alertCtrl.create({
          title: 'Device Details',
          subTitle: JSON.stringify(deviceDetails),
          buttons: ['Dismiss']
        });
        alertBox2.present();
        
        */
        ble.startNotification(device.address, _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.SERVICE, _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothUUID.READ, function (data) { return _this.onData(data, device); }, function (failure) { return _this.onFail(failure); });
        this.request(device);
        /*
        setTimeout(() => {
            let alertBox = this.alertCtrl.create({
              title: 'Request Again',
              subTitle: 'Make the request again',
              buttons: [      {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  this.events.publish('meter:complete');
                  ble.disconnect(device.address);
                }
              },
              {
                text: 'Request',
                handler: () => {
                    this.request(device);
                }
              }]
            });
            alertBox.present();
        },10000);
        
        */
    };
    BluetoothService.prototype.onData = function (data, device) {
        /*
        let alertBox = this.alertCtrl.create({
          title: 'Response Received',
          subTitle: String.fromCharCode.apply(null, new Uint8Array(data)),
          buttons: ['Dismiss']
        });
        alertBox.present();
        
        */
        var response;
        try {
            response = new _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothResponse(data, false);
        }
        catch (error) {
            this.chunkedResponse = this.chunkedResponse + String.fromCharCode.apply(null, new Uint8Array(data));
            /*
            let alertBox2 = this.alertCtrl.create({
              title: 'Current Position',
              subTitle: this.chunkedResponse,
              buttons: ['Dismiss']
            });
            alertBox2.present();
            
            */
            try {
                response = new _models_bluetooth_message__WEBPACK_IMPORTED_MODULE_2__.BluetoothResponse(this.chunkedResponse, true);
            }
            catch (error) {
                /*
                let alertBox3 = this.alertCtrl.create({
                  title: 'Error converting response',
                  subTitle: error,
                  buttons: ['Dismiss']
                });
                alertBox3.present();
                
                */
                return;
            }
            /*
          let alertBox = this.alertCtrl.create({
            title: 'Full Response Captured',
            subTitle: this.chunkedResponse,
            buttons: ['Dismiss']
          });
          alertBox.present();
          */
            this.chunkedResponse = "";
            //this.onFail(error);
        }
        // If the response is just a boundary, drop the response.
        if (response.isBoundaryOnly()) {
            return;
        }
        // If the response is not empty, store it until we get an empty response
        if (!response.isEmpty()) {
            //console.log('[BluetoothService] - onData() :: Received data from the BT device', response);
            this.responses.push(response);
            this.acknowledge(device);
        }
        // If the response is empty, we reached the end of the stack, send the last data 
        else {
            //console.log('[BluetoothService] - onData() :: Finished receiving data from the BT device.');
            if (this.responses && this.responses.length > 0) {
                //console.log('[BluetoothService] - onData() :: Publishing the received data.', this.responses);
                //console.info('[BluetoothService] - onData() :: Publishing the received data.');
                this.events.publish('meter:data', this.responses);
            }
            this.events.publish('meter:complete');
            ble.disconnect(device.address);
        }
    };
    BluetoothService.prototype.onRequestComplete = function () {
        /*
        let alertBox = this.alertCtrl.create({
          title: 'Data Requested',
          subTitle: 'Data successfully requested from meter',
          buttons: ['Dismiss']
        });
        alertBox.present();
        
        */
        //console.log('[BluetoothService] - onRequestComplete() :: Transaction request sent to BT device');
    };
    BluetoothService.prototype.onAcknowledge = function (device) {
        //console.log('[BluetoothService] - onAcknowledge() :: Acknowledge sent to BT device');      
        this.request(device);
    };
    BluetoothService.prototype.onFail = function (failure) {
        var message = "";
        try {
            message = JSON.stringify(failure);
        }
        catch (e) {
            message = failure;
        }
        console.warn('[BluetoothService] - onFail() :: ', failure);
        this.events.publish('meter:complete');
        var toast = this.toastController.create({
            message: failure,
            duration: 5000,
            cssClass: 'toast-error'
        }).then(function (el) {
            el.present();
        });
        this.events.publish('database:synced');
        this.storage.get("previouslyConnectedMeter").then(function (uuid) {
            if (uuid) {
                ble.disconnect(uuid);
            }
        });
    };
    BluetoothService.ctorParameters = function () { return [
        { type: _events_service__WEBPACK_IMPORTED_MODULE_0__.Events },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage }
    ]; };
    BluetoothService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
            providedIn: 'root'
        })
    ], BluetoothService);
    return BluetoothService;
}());



/***/ }),

/***/ 430:
/*!****************************************************!*\
  !*** ./src/app/providers/configuration-service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationService": function() { return /* binding */ ConfigurationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);




var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(storage) {
        console.log('[ConfigurationService] - constructor() ::');
        this.storage = storage;
    }
    ConfigurationService.prototype.get = function (key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var result;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[ConfigurationService] - get() :: ', key);
                        return [4 /*yield*/, this.storage.get(key)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(JSON.parse(result));
                            })];
                }
            });
        });
    };
    ConfigurationService.prototype.set = function (key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                console.log('[ConfigurationService] - set() :: ', key, value);
                this.storage.set(key, JSON.stringify(value));
                return [2 /*return*/];
            });
        });
    };
    ConfigurationService.prototype.remove = function (key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                return [2 /*return*/, this.storage.remove(key)];
            });
        });
    };
    ConfigurationService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
    ]; };
    ConfigurationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
            providedIn: 'root'
        })
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ 5464:
/*!*************************************************!*\
  !*** ./src/app/providers/dipreading-service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DipReadingService": function() { return /* binding */ DipReadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sql-service */ 680);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/config */ 2193);







var DipReadingService = /** @class */ (function () {
    function DipReadingService(http, configuration, storage) {
        this.http = http;
        this.configuration = configuration;
        this.storage = storage;
        console.log('[DipReadingService] - constructor() :: ');
    }
    DipReadingService.prototype.init = function () {
        console.log('[DipReadingService] - init() :: Preparing database table');
        return this.storage.executeSql("CREATE TABLE IF NOT EXISTS dipreadings (\n      dipreading_id INTEGER PRIMARY KEY AUTOINCREMENT,\n      operator_id INTEGER, \n      trailer_id INTEGER, \n      reading TEXT,\n      synced_at TEXT\n    )");
    };
    DipReadingService.prototype.create = function (data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var insert_query, result, api_result, update_query, datePipe, exception_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[DipReadingService] - create() :: Creating DipReading in the cache:', data);
                        insert_query = 'INSERT INTO dipreadings (operator_id, trailer_id, reading) VALUES (?, ?, ?)';
                        return [4 /*yield*/, this.storage.executeSql(insert_query, [
                                data.operator_id,
                                data.trailer_id,
                                data.reading
                            ])];
                    case 1:
                        result = _a.sent();
                        console.log('[DipReadingService] - create() :: DipReading created in the cache:', result.res.insertId);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        console.log('[DipReadingService] - create() :: Creating DipReadingService in the API:', result);
                        data.dipreading_id = result.res.insertId;
                        return [4 /*yield*/, this.http
                                .post(this.configuration.API_ENDPOINT + '/tank-dip/', data)
                                .toPromise()];
                    case 3:
                        api_result = _a.sent();
                        console.log('[DipReadingService] - create() :: DipReading created in the API:', api_result);
                        console.log('[DipReadingService] - create() :: Updating DipReading in the cache as synced:', api_result);
                        update_query = "UPDATE dipreadings SET synced_at = (?) WHERE dipreading_id = (?)";
                        datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                        return [4 /*yield*/, this.storage.executeSql(update_query, [
                                datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'),
                                data.dipreading_id
                            ])];
                    case 4:
                        result = _a.sent();
                        console.log('[DipReadingService] - create() :: DipReading updated in the cache as synced:', result);
                        console.info('[DipReadingService] - create() :: DipReading uploaded and marked as synced');
                        return [3 /*break*/, 6];
                    case 5:
                        exception_1 = _a.sent();
                        console.warn('[DipReadingService] - create() :: Failed to create DipReading in the API:', data, exception_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    DipReadingService.prototype.upload = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var select_query, dipreadings, promises;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[DipReadingService] - upload() :: Finding non-synced DipReadings');
                        select_query = 'SELECT dipreading_id, operator_id, trailer_id, reading, synced_at FROM dipreadings WHERE synced_at IS NULL';
                        return [4 /*yield*/, this.storage.executeSql(select_query)];
                    case 1:
                        dipreadings = _a.sent();
                        console.log('[DipReadingService] - upload() :: Found non-synced DipReading:', dipreadings.res.rows.length);
                        promises = Array.from(dipreadings.res.rows).map(function (dipreading) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                            var update_query, datePipe;
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('[DipReadingService] - upload() :: Updating non-synced DipReading', dipreading);
                                        return [4 /*yield*/, this.http
                                                .post(this.configuration.API_ENDPOINT + '/tank-dip/', dipreading)
                                                .toPromise()];
                                    case 1:
                                        _a.sent();
                                        update_query = 'UPDATE dipreadings SET synced_at = (?) WHERE dipreading_id = (?)';
                                        datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                                        return [4 /*yield*/, this.storage.executeSql(update_query, [datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'), dipreading.dipreading_id])];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); });
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    DipReadingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_2__.Config },
        { type: _sql_service__WEBPACK_IMPORTED_MODULE_1__.SqlService }
    ]; };
    DipReadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
            providedIn: 'root'
        })
    ], DipReadingService);
    return DipReadingService;
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

/***/ 1044:
/*!***********************************************!*\
  !*** ./src/app/providers/operator-service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorService": function() { return /* binding */ OperatorService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 2297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sql-service */ 680);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/config */ 2193);






var OperatorService = /** @class */ (function () {
    function OperatorService(http, configuration, storage) {
        this.http = http;
        this.configuration = configuration;
        this.storage = storage;
        this.in_progress = false;
        console.log('[OperatorService] - constructor() :: ');
    }
    OperatorService.prototype.init = function () {
        console.log('[OperatorService] - init() :: Preparing database table');
        return this.storage.executeSql('CREATE TABLE IF NOT EXISTS operators (operator_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, pin_no TEXT)');
    };
    OperatorService.prototype.load = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var result, promises;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[OperatorService] - load() :: Loading operators from the API');
                        if (this.in_progress) {
                            console.log('[OperatorService] - load() :: Loading is already in progress, exit.');
                            return [2 /*return*/, null];
                        }
                        this.in_progress = true;
                        return [4 /*yield*/, this.http
                                .get(this.configuration.API_ENDPOINT + "/operators-dep/" + this.configuration.DEPARTMENT_ID)
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log('[OperatorService] - load() :: Operators loaded from the API');
                        console.log('[OperatorService] - load() :: Deleting operators from the cache');
                        return [4 /*yield*/, this.deleteAll()];
                    case 2:
                        _a.sent();
                        console.log('[OperatorService] - load() :: Operators deleted from the cache');
                        console.log('[OperatorService] - load() :: Creating operators in the cache.');
                        promises = result.Operators.map(function (item) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        item.pin_no = item.pin_no ? parseInt(item.pin_no) : "";
                                        return [4 /*yield*/, this.create(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        console.info('[OperatorService] - load() :: Operators loaded from the API and cached.');
                        this.in_progress = false;
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    OperatorService.prototype.find = function (id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                query = 'SELECT operator_id, first_name, last_name, pin_no FROM operators WHERE operator_id = (?)';
                return [2 /*return*/, this.storage.executeSql(query, [id])];
            });
        });
    };
    OperatorService.prototype.findByPinCode = function (pin_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                console.log("[OperatorService] - findByPinCode() :: Attempt to find operator with the PIN " + pin_no);
                query = 'SELECT operator_id, first_name, last_name, pin_no FROM operators WHERE pin_no = (?)';
                return [2 /*return*/, this.storage.executeSql(query, [pin_no])];
            });
        });
    };
    OperatorService.prototype.deleteAll = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                return [2 /*return*/, Promise.all([
                        this.storage.executeSql('DELETE FROM operators'),
                        this.storage.executeSql('DELETE FROM SQLITE_SEQUENCE WHERE name="operators"')
                    ])];
            });
        });
    };
    OperatorService.prototype.create = function (operator) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                query = 'INSERT INTO operators (operator_id, first_name, last_name, pin_no) VALUES (?, ?, ?, ?)';
                return [2 /*return*/, this.storage.executeSql(query, [operator.operator_id, operator.first_name, operator.last_name, operator.pin_no])];
            });
        });
    };
    OperatorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_2__.Config },
        { type: _sql_service__WEBPACK_IMPORTED_MODULE_1__.SqlService }
    ]; };
    OperatorService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
            providedIn: 'root'
        })
    ], OperatorService);
    return OperatorService;
}());



/***/ }),

/***/ 2631:
/*!********************************************!*\
  !*** ./src/app/providers/plant-service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlantService": function() { return /* binding */ PlantService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 2297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-service */ 5284);
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sql-service */ 680);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/config */ 2193);







var PlantService = /** @class */ (function () {
    function PlantService(http, configuration, storage, events) {
        this.http = http;
        this.configuration = configuration;
        this.storage = storage;
        this.events = events;
        this.in_progress = false;
        console.log('[PlantService] - constructor() :: ');
    }
    PlantService.prototype.init = function () {
        console.log('[PlantService] - init() :: Preparing database table');
        return this.storage.executeSql('CREATE TABLE IF NOT EXISTS plants (id INTEGER PRIMARY KEY, plant_id INTEGER, plant_no INTEGER, tail_no TEXT)');
    };
    PlantService.prototype.load = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var result, promises;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[PlantService] - load() :: Loading plants from the API');
                        if (this.in_progress) {
                            console.log('[PlantService] - load() :: Loading is already in progress, exit.');
                            return [2 /*return*/, null];
                        }
                        this.in_progress = true;
                        return [4 /*yield*/, this.http
                                .get(this.configuration.API_ENDPOINT + "/plants-dep/" + this.configuration.DEPARTMENT_ID)
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log('[PlantService] - load() :: Plants loaded from the API.');
                        console.log('[PlantService] - load() :: Deleting plants from the cache.');
                        return [4 /*yield*/, this.deleteAll()];
                    case 2:
                        _a.sent();
                        console.log('[PlantService] - load() :: Plants deleted from the cache.');
                        console.log('[PlantService] - load() :: Creating plants in the cache.');
                        promises = result.Plant.map(function (item) { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, function () {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // console.log('[PlantService] - load() :: Creating plant in the cache.', item);
                                    return [4 /*yield*/, this.create(item)];
                                    case 1:
                                        // console.log('[PlantService] - load() :: Creating plant in the cache.', item);
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        console.info('[PlantService] - load() :: Plants loaded from the API and cached.');
                        this.events.publish('plants:loaded');
                        console.info('[PlantService] - load() :: Event "plants:loaded" published.');
                        this.in_progress = false;
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    PlantService.prototype.findAll = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                query = 'SELECT plant_id, plant_no, tail_no FROM plants';
                return [2 /*return*/, this.storage.executeSql(query)];
            });
        });
    };
    PlantService.prototype.find = function (id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                query = 'SELECT plant_id, plant_no, tail_no FROM plants WHERE plant_id = (?)';
                return [2 /*return*/, this.storage.executeSql(query, [id])];
            });
        });
    };
    PlantService.prototype.deleteAll = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                console.log('[PlantService] - deleteAll() :: Deleting plants from the cache.');
                return [2 /*return*/, Promise.all([
                        this.storage.executeSql('DELETE FROM plants'),
                        this.storage.executeSql('DELETE FROM SQLITE_SEQUENCE WHERE name="plants"')
                    ])];
            });
        });
    };
    PlantService.prototype.create = function (plant) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                query = 'INSERT INTO plants (plant_id, plant_no, tail_no) VALUES (?, ?, ?)';
                return [2 /*return*/, this.storage.executeSql(query, [plant.plant_id, plant.plant_no, plant.tail_no])];
            });
        });
    };
    PlantService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_3__.Config },
        { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__.SqlService },
        { type: _events_service__WEBPACK_IMPORTED_MODULE_1__.Events }
    ]; };
    PlantService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
            providedIn: 'root'
        })
    ], PlantService);
    return PlantService;
}());



/***/ }),

/***/ 680:
/*!******************************************!*\
  !*** ./src/app/providers/sql-service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlService": function() { return /* binding */ SqlService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 283);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/config */ 2193);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








var win = window;
var SqlService = /** @class */ (function () {
    function SqlService(http, configuration, appVersion, platform) {
        this.http = http;
        this.configuration = configuration;
        this.appVersion = appVersion;
        this.platform = platform;
        console.log('[SqlService] - constructor() :: ');
    }
    SqlService.prototype.initDatabase = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.platform.is("ios") || _this.platform.is("android") || win.sqlitePlugin) {
                    _this.sqlite = new _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite();
                    Promise.all([
                        _this.appVersion.getAppName(),
                        _this.appVersion.getVersionCode(),
                        _this.appVersion.getVersionNumber(),
                    ]).then(function (result) {
                        console.log("[SqlService] - constructor() :: Opening database " + result[0] + "." + result[1] + "." + result[2] + ".db");
                        _this.sqlite.create({
                            name: result[0] + "." + result[1] + "." + result[2] + ".db",
                            location: 'default'
                        }).then(function (db) {
                            _this.storage = db;
                            resolve(true);
                        });
                    }).catch(function (err) {
                        console.log(err);
                        reject(false);
                    });
                }
                else {
                    console.log('[SqlService] - constructor() :: Creating WebSQL service');
                    _this.storage = win.openDatabase(_this.configuration.DATABASE_CONFIG.name, '1.0', 'database', 5 * 1024 * 1024);
                    resolve(true);
                }
            }
            catch (err) {
                console.log(err);
                reject(false);
            }
        });
    };
    SqlService.prototype.executeSql = function (statement, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this.storage.transaction(function (tx) {
                    tx.executeSql(statement, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                });
            }
            catch (err) {
                console.warn('[SqlService] - executeSql() :: Error executing statement', statement);
                console.log(err);
                reject({ err: err });
            }
        });
    };
    SqlService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_3__.Config },
        { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
    ]; };
    SqlService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
            providedIn: 'root'
        })
    ], SqlService);
    return SqlService;
}());



/***/ }),

/***/ 797:
/*!*******************************************!*\
  !*** ./src/app/providers/tank-service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankService": function() { return /* binding */ TankService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 2297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-service */ 5284);
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sql-service */ 680);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/config */ 2193);







var TankService = /** @class */ (function () {
    function TankService(http, configuration, storage, events) {
        this.http = http;
        this.configuration = configuration;
        this.storage = storage;
        this.events = events;
        this.in_progress = false;
        console.log('[TankService] - constructor() :: ');
    }
    TankService.prototype.init = function () {
        console.log('[TankService] - init() :: Preparing database table');
        return this.storage.executeSql('CREATE TABLE IF NOT EXISTS tanks (id INTEGER PRIMARY KEY, trailer_id INTEGER, trailer_no INTEGER, trailer_name TEXT)');
    };
    TankService.prototype.load = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var result, promises;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[TankService] - load() :: Loading tanks from the API');
                        if (this.in_progress) {
                            console.log('[TankService] - load() :: Loading is already in progress, exit.');
                            return [2 /*return*/, null];
                        }
                        this.in_progress = true;
                        return [4 /*yield*/, this.http
                                .get(this.configuration.API_ENDPOINT + "/tanks-dep/" + this.configuration.DEPARTMENT_ID)
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log('[TankService] - load() :: Tanks loaded from the API.');
                        console.log('[TankService] - load() :: Deleting tanks from the cache.');
                        return [4 /*yield*/, this.deleteAll()];
                    case 2:
                        _a.sent();
                        console.log('[TankService] - load() :: Tanks deleted from the cache.');
                        console.log('[TankService] - load() :: Creating tanks in the cache.');
                        promises = result.Tank.map(function (item) { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, function () {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.create(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        console.info('[TankService] - load() :: Tanks loaded from the API and cached.');
                        this.events.publish('tanks:loaded');
                        console.info('[TankService] - load() :: Event "tanks:loaded" published.');
                        this.in_progress = false;
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    TankService.prototype.findAll = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                query = 'SELECT trailer_id, trailer_no, trailer_name FROM tanks';
                return [2 /*return*/, this.storage.executeSql(query)];
            });
        });
    };
    TankService.prototype.find = function (id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                query = 'SELECT trailer_id, trailer_no, trailer_name FROM tanks WHERE trailer_id = (?)';
                return [2 /*return*/, this.storage.executeSql(query, [id])];
            });
        });
    };
    TankService.prototype.deleteAll = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                console.log('[TankService] - deleteAll() :: Deleting tanks from the cache.');
                return [2 /*return*/, Promise.all([
                        this.storage.executeSql('DELETE FROM tanks'),
                        this.storage.executeSql('DELETE FROM SQLITE_SEQUENCE WHERE name="tanks"')
                    ])];
            });
        });
    };
    TankService.prototype.create = function (tank) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var query;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                query = 'INSERT INTO tanks (trailer_id, trailer_no, trailer_name) VALUES (?, ?, ?)';
                return [2 /*return*/, this.storage.executeSql(query, [tank.trailer_id, tank.trailer_no, tank.trailer_name])];
            });
        });
    };
    TankService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_3__.Config },
        { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__.SqlService },
        { type: _events_service__WEBPACK_IMPORTED_MODULE_1__.Events }
    ]; };
    TankService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
            providedIn: 'root'
        })
    ], TankService);
    return TankService;
}());



/***/ }),

/***/ 8409:
/*!************************************************!*\
  !*** ./src/app/providers/timesheet-service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetService": function() { return /* binding */ TimesheetService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sql-service */ 680);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/config */ 2193);







var TimesheetService = /** @class */ (function () {
    function TimesheetService(http, configuration, storage) {
        this.http = http;
        this.configuration = configuration;
        this.storage = storage;
        console.log('[TimesheetService] - constructor() :: ');
    }
    TimesheetService.prototype.init = function () {
        console.log('[TimesheetService] - init() :: Preparing database table');
        return this.storage.executeSql("CREATE TABLE IF NOT EXISTS timesheets (\n      timesheet_id INTEGER PRIMARY KEY AUTOINCREMENT,\n      operator_id INTEGER, \n      plant_id INTEGER, \n      start_date TEXT,\n      end_date TEXT, \n      start_hours TEXT, \n      end_hours TEXT, \n      synced_at TEXT\n    )");
    };
    TimesheetService.prototype.create = function (data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var insert_query, result, api_result, update_query, datePipe, exception_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[TimesheetService] - create() :: Creating timesheet in the cache:', data);
                        insert_query = 'INSERT INTO timesheets (operator_id, plant_id, start_date, end_date, start_hours, end_hours) VALUES (?, ?, ?, ?, ?, ?)';
                        return [4 /*yield*/, this.storage.executeSql(insert_query, [
                                data.operator_id,
                                data.plant_id,
                                data.start_date,
                                data.end_date,
                                data.start_hours,
                                data.end_hours
                            ])];
                    case 1:
                        result = _a.sent();
                        console.log('[TimesheetService] - create() :: Timesheet created in the cache:', result.res.insertId);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        console.log('[TimesheetService] - create() :: Creating timesheetService in the API:', result);
                        data.timesheet_id = result.res.insertId;
                        return [4 /*yield*/, this.http
                                .post(this.configuration.API_ENDPOINT + '/air-trans/', data)
                                .toPromise()];
                    case 3:
                        api_result = _a.sent();
                        console.log('[TimesheetService] - create() :: Timesheet created in the API:', api_result);
                        console.log('[TimesheetService] - create() :: Updating timesheet in the cache as synced:', api_result);
                        update_query = "UPDATE timesheets SET synced_at = (?) WHERE timesheet_id = (?)";
                        datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                        return [4 /*yield*/, this.storage.executeSql(update_query, [
                                datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'),
                                data.timesheet_id
                            ])];
                    case 4:
                        result = _a.sent();
                        console.log('[TimesheetService] - create() :: Timesheet updated in the cache as synced:', result);
                        console.info('[TimesheetService] - create() :: Timesheet uploaded and marked as synced');
                        return [3 /*break*/, 6];
                    case 5:
                        exception_1 = _a.sent();
                        console.warn('[TimesheetService] - create() :: Failed to create timesheet in the API:', data, exception_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    TimesheetService.prototype.upload = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var select_query, timesheets, promises;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[TimesheetService] - upload() :: Finding non-synced timesheets');
                        select_query = 'SELECT timesheet_id, operator_id, plant_id, start_date, end_date, start_hours, end_hours, synced_at FROM timesheets WHERE synced_at IS NULL';
                        return [4 /*yield*/, this.storage.executeSql(select_query)];
                    case 1:
                        timesheets = _a.sent();
                        console.log('[TimesheetService] - upload() :: Found non-synced timesheets:', timesheets.res.rows.length);
                        promises = Array.from(timesheets.res.rows).map(function (timesheet) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                            var update_query, datePipe;
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('[TimesheetService] - upload() :: Updating non-synced timesheet', timesheet);
                                        return [4 /*yield*/, this.http
                                                .post(this.configuration.API_ENDPOINT + '/air-trans/', timesheet)
                                                .toPromise()];
                                    case 1:
                                        _a.sent();
                                        update_query = 'UPDATE timesheets SET synced_at = (?) WHERE timesheet_id = (?)';
                                        datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                                        return [4 /*yield*/, this.storage.executeSql(update_query, [datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'), timesheet.timesheet_id])];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); });
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_2__.Config },
        { type: _sql_service__WEBPACK_IMPORTED_MODULE_1__.SqlService }
    ]; };
    TimesheetService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
            providedIn: 'root'
        })
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ 1725:
/*!**************************************************!*\
  !*** ./src/app/providers/transaction-service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionService": function() { return /* binding */ TransactionService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/config */ 2193);
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sql-service */ 680);







var TransactionService = /** @class */ (function () {
    function TransactionService(http, configuration, storage) {
        this.http = http;
        this.configuration = configuration;
        this.storage = storage;
        console.log('[TransactionService] - constructor() :: ');
    }
    TransactionService.prototype.init = function () {
        console.log('[TransactionService] - init() :: Preparing database table');
        return this.storage.executeSql("CREATE TABLE IF NOT EXISTS transactions (\n            transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,\n            pad_id TEXT,\n            operator_id INTEGER,\n            plant_id INTEGER,\n            trailer_id INTEGER,\n            odometer INTEGER,\n            battery_percentage INTEGER,\n            long TEXT,\n            lat TEXT,\n            end_value TEXT,\n            end_total_value TEXT,\n            transaction_end_date TEXT,\n            synced_at TEXT\n        )");
    };
    TransactionService.prototype.initRefills = function () {
        console.log('[TransactionService] - init() :: Preparing database table 2');
        return this.storage.executeSql("CREATE TABLE IF NOT EXISTS refills (\n            transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,\n            operator_id INTEGER,\n            from_trailer_id INTEGER,\n            to_trailer_id INTEGER,\n            amount TEXT,\n            synced_at TEXT\n        )");
    };
    TransactionService.prototype.create = function (transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var datePipe, transaction_end_date, insert_query, result, api_result, update_query, exception_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[TransactionService] - create() :: Creating transaction in the cache:', transaction);
                        datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                        transaction_end_date = transaction.transaction_end_date;
                        transaction_end_date = transaction_end_date + (new Date()).getTimezoneOffset() * 60;
                        transaction.transaction_end_date = datePipe.transform(new Date(transaction_end_date * 1000), 'y-MM-dd HH:mm:ss');
                        insert_query = "INSERT INTO transactions (\n            pad_id, \n            operator_id, \n            plant_id, \n            trailer_id, \n            odometer, \n            battery_percentage, \n            long, \n            lat, \n            end_value, \n            end_total_value, \n            transaction_end_date\n          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        return [4 /*yield*/, this.storage.executeSql(insert_query, [
                                transaction.pad_id,
                                transaction.operator_id,
                                transaction.plant_id,
                                transaction.trailer_id,
                                transaction.odometer,
                                transaction.battery_percentage,
                                transaction.long,
                                transaction.lat,
                                transaction.end_value,
                                transaction.end_total_value,
                                transaction.transaction_end_date
                            ])];
                    case 1:
                        result = _a.sent();
                        console.log('[TransactionService] - create() :: Transaction created in the cache:', transaction);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        console.log('[TransactionService] - create() :: Uploading transaction in the API:', result);
                        transaction.transaction_id = result.res.insertId;
                        return [4 /*yield*/, this.http
                                .post(this.configuration.API_ENDPOINT + '/transaction/', transaction)
                                .toPromise()];
                    case 3:
                        api_result = _a.sent();
                        console.log('[TransactionService] - create() :: Transaction uploaded to the API:', api_result);
                        console.log('[TransactionService] - create() :: Marking transaction in the cache as synced:', api_result);
                        update_query = 'UPDATE transactions SET synced_at = (?) WHERE transaction_id = (?)';
                        return [4 /*yield*/, this.storage.executeSql(update_query, [datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'), transaction.transaction_id])];
                    case 4:
                        result = _a.sent();
                        console.log('[TransactionService] - create() :: Transaction marked in the cache as synced:', result);
                        console.info('[TransactionService] - create() :: Transaction uploaded and marked as synced');
                        return [3 /*break*/, 6];
                    case 5:
                        exception_1 = _a.sent();
                        console.warn('[TransactionService] - create() :: Failed to create transaction in the API:', transaction, exception_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    TransactionService.prototype.createRefill = function (transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var api_result;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .post(this.configuration.API_ENDPOINT + '/tank-refill/', transaction)
                            .toPromise()];
                    case 1:
                        api_result = _a.sent();
                        return [2 /*return*/, api_result];
                }
            });
        });
    };
    TransactionService.prototype.upload = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var select_query, transactions, transactions2;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[TransactionService] - upload() :: Finding non-synced transactions');
                        select_query = "SELECT \n                          transaction_id, \n                          pad_id, \n                          operator_id, \n                          plant_id, \n                          trailer_id, \n                          odometer, \n                          battery_percentage, \n                          long, \n                          lat, \n                          end_value, \n                          end_total_value, \n                          transaction_end_date, \n                          synced_at \n                          FROM transactions WHERE synced_at IS NULL";
                        return [4 /*yield*/, this.storage.executeSql(select_query).then(function (data) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                                var promises, i, transaction, update_query, datePipe, promise;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('[TransactionService] - upload() :: Found non-synced transaction:', data.res.rows.length);
                                            promises = [];
                                            i = 0;
                                            _a.label = 1;
                                        case 1:
                                            if (!(i < data.res.rows.length)) return [3 /*break*/, 5];
                                            transaction = data.res.rows.item(i);
                                            return [4 /*yield*/, this.http
                                                    .post(this.configuration.API_ENDPOINT + '/transaction/', transaction)
                                                    .toPromise()];
                                        case 2:
                                            _a.sent();
                                            update_query = 'UPDATE transactions SET synced_at = (?) WHERE transaction_id = (?)';
                                            datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                                            return [4 /*yield*/, this.storage.executeSql(update_query, [
                                                    datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'),
                                                    transaction.transaction_id
                                                ])];
                                        case 3:
                                            promise = _a.sent();
                                            promises.push(promise);
                                            _a.label = 4;
                                        case 4:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 5: return [2 /*return*/, promises];
                                    }
                                });
                            }); })];
                    case 1:
                        transactions = _a.sent();
                        return [4 /*yield*/, this.storage.executeSql("SELECT * FROM refills WHERE synced_at IS NULL").then(function (data) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                                var promises, i, transaction, update_query, datePipe, promise;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('[TransactionService] - upload() :: Found non-synced refill transaction:', data.res.rows.length);
                                            promises = [];
                                            i = 0;
                                            _a.label = 1;
                                        case 1:
                                            if (!(i < data.res.rows.length)) return [3 /*break*/, 5];
                                            transaction = data.res.rows.item(i);
                                            return [4 /*yield*/, this.http
                                                    .post(this.configuration.API_ENDPOINT + '/tank-refills/', transaction)
                                                    .toPromise()];
                                        case 2:
                                            _a.sent();
                                            update_query = 'UPDATE refills SET synced_at = (?) WHERE transaction_id = (?)';
                                            datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                                            return [4 /*yield*/, this.storage.executeSql(update_query, [
                                                    datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'),
                                                    transaction.transaction_id
                                                ])];
                                        case 3:
                                            promise = _a.sent();
                                            promises.push(promise);
                                            _a.label = 4;
                                        case 4:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 5: return [2 /*return*/, promises];
                                    }
                                });
                            }); })];
                    case 2:
                        transactions2 = _a.sent();
                        return [2 /*return*/, Promise.all(transactions)];
                }
            });
        });
    };
    TransactionService.prototype.uploadRefills = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var select_query, transactions;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[TransactionService] - upload() :: Finding non-synced transactions');
                        select_query = "SELECT * FROM refills WHERE synced_at IS NULL";
                        return [4 /*yield*/, this.storage.executeSql(select_query).then(function (data) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                                var promises, i, transaction, update_query, datePipe, promise;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('[TransactionService] - upload() :: Found non-synced refill transaction:', data.res.rows.length);
                                            promises = [];
                                            i = 0;
                                            _a.label = 1;
                                        case 1:
                                            if (!(i < data.res.rows.length)) return [3 /*break*/, 5];
                                            transaction = data.res.rows.item(i);
                                            return [4 /*yield*/, this.http
                                                    .post(this.configuration.API_ENDPOINT + '/tank-refills/', transaction)
                                                    .toPromise()];
                                        case 2:
                                            _a.sent();
                                            update_query = 'UPDATE refills SET synced_at = (?) WHERE transaction_id = (?)';
                                            datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe(this.configuration.LOCALE);
                                            return [4 /*yield*/, this.storage.executeSql(update_query, [
                                                    datePipe.transform(Date.now(), 'y-MM-dd HH:mm:ss'),
                                                    transaction.transaction_id
                                                ])];
                                        case 3:
                                            promise = _a.sent();
                                            promises.push(promise);
                                            _a.label = 4;
                                        case 4:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 5: return [2 /*return*/, promises];
                                    }
                                });
                            }); })];
                    case 1:
                        transactions = _a.sent();
                        return [2 /*return*/, Promise.all(transactions)];
                }
            });
        });
    };
    TransactionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_1__.Config },
        { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__.SqlService }
    ]; };
    TransactionService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
            providedIn: 'root'
        })
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ 2193:
/*!************************************!*\
  !*** ./src/environments/config.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": function() { return /* binding */ Config; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


var Config = /** @class */ (function () {
    function Config() {
        // public API_ENDPOINT = '/api';
        this.API_ENDPOINT = 'https://www.fuel-it.co/AWS15/fitAPI/api';
        this.DATABASE_CONFIG = {
            name: 'fuelit.db',
            location: 'default'
        };
        this.LOCALE = 'en';
        this.DEPARTMENT_ID = 478;
    }
    Config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
            providedIn: 'root'
        })
    ], Config);
    return Config;
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