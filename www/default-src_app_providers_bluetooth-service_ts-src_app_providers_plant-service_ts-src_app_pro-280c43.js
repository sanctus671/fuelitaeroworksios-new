(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["default-src_app_providers_bluetooth-service_ts-src_app_providers_plant-service_ts-src_app_pro-280c43"],{

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



/***/ })

}]);
//# sourceMappingURL=default-src_app_providers_bluetooth-service_ts-src_app_providers_plant-service_ts-src_app_pro-280c43.js.map