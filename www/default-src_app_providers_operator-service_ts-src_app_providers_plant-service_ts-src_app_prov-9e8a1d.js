(self["webpackChunkaerowork"] = self["webpackChunkaerowork"] || []).push([["default-src_app_providers_operator-service_ts-src_app_providers_plant-service_ts-src_app_prov-9e8a1d"],{

/***/ 283:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLiteObject": function() { return /* binding */ SQLiteObject; },
/* harmony export */   "SQLite": function() { return /* binding */ SQLite; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);





var SQLiteObject = function () {
  function SQLiteObject(_objectInstance) {
    this._objectInstance = _objectInstance;
  }

  SQLiteObject.prototype.addTransaction = function (transaction) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "addTransaction", {
      "sync": true
    }, arguments);
  };

  SQLiteObject.prototype.transaction = function (fn) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "transaction", {
      "successIndex": 2,
      "errorIndex": 1
    }, arguments);
  };

  SQLiteObject.prototype.readTransaction = function (fn) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "readTransaction", {}, arguments);
  };

  SQLiteObject.prototype.startNextTransaction = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "startNextTransaction", {
      "sync": true
    }, arguments);
  };

  SQLiteObject.prototype.open = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "open", {}, arguments);
  };

  SQLiteObject.prototype.close = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {}, arguments);
  };

  SQLiteObject.prototype.executeSql = function (statement, params) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeSql", {}, arguments);
  };

  SQLiteObject.prototype.sqlBatch = function (sqlStatements) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "sqlBatch", {}, arguments);
  };

  SQLiteObject.prototype.abortallPendingTransactions = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "abortallPendingTransactions", {
      "sync": true
    }, arguments);
  };

  Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
    get: function get() {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "databaseFeatures");
    },
    set: function set(value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "databaseFeatures", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(SQLiteObject.prototype, "openDBs", {
    get: function get() {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "openDBs");
    },
    set: function set(value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "openDBs", value);
    },
    enumerable: false,
    configurable: true
  });
  return SQLiteObject;
}();



var SQLite = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SQLite, _super);

  function SQLite() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SQLite.prototype.create = function (config) {
    var _this = this;

    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
        return new Promise(function (resolve, reject) {
          sqlitePlugin.openDatabase(config, function (db) {
            return resolve(new SQLiteObject(db));
          }, reject);
        });
      }
    }();
  };

  SQLite.prototype.echoTest = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "echoTest", {}, arguments);
  };

  SQLite.prototype.selfTest = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "selfTest", {}, arguments);
  };

  SQLite.prototype.deleteDatabase = function (config) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "deleteDatabase", {}, arguments);
  };

  SQLite.pluginName = "SQLite";
  SQLite.pluginRef = "sqlitePlugin";
  SQLite.plugin = "cordova-sqlite-storage";
  SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
  SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];

  SQLite.ɵfac = /*@__PURE__*/function () {
    var ɵSQLite_BaseFactory;
    return function SQLite_Factory(t) {
      return (ɵSQLite_BaseFactory || (ɵSQLite_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SQLite)))(t || SQLite);
    };
  }();

  SQLite.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SQLite,
    factory: function factory(t) {
      return SQLite.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SQLite, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return SQLite;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin);

 //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3FsaXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDRHQU9OLE1BQU0sb0JBQW9CLENBQUM7O0FBQzVCO0FBR2EsSUFvRFgsc0JBQW1CLGVBQW9CO0FBQUksUUFBeEIsb0JBQWUsR0FBZixlQUFlLENBQUs7QUFBQyxJQUFFLENBQUM7QUFDN0MsSUFPRSxxQ0FBYyxhQUFDLFdBQTRDO0FBTXhELElBSUgsa0NBQVcsYUFBQyxFQUErQjtBQVE1QyxJQUNDLHNDQUFlLGFBQUMsRUFBbUM7QUFLdEMsSUFFYiwyQ0FBb0I7QUFPbkIsSUFERCwyQkFBSTtBQU1KLElBRUEsNEJBQUs7QUFLeUIsSUFJOUIsaUNBQVUsYUFBQyxTQUFpQixFQUFFLE1BQWM7QUFLckIsSUFJdkIsK0JBQVEsYUFBQyxhQUEwQztBQUs3QyxJQUVOLGtEQUEyQjtBQVU1QiwwQkFqRnFCLDBDQUFnQjtBQUFJO0FBRzlCO0FBRytDO0FBR3BEO0FBQ0M7QUFBUSwwQkFUTSxpQ0FBTztBQUFJO0FBS0o7QUFJekI7QUFDRjtBQUVBO0FBQVEsdUJBL0VWO0FBQUU7QUFBTTtBQUF5QjtBQUloQyxJQXNMMkIsMEJBQWlCO0FBQUM7QUFFOUI7QUFFd0I7QUFBTSxJQU01Qyx1QkFBTSxhQUFDLE1BQTRCO0FBQUk7QUFDdEM7QUFBOEIsbURBRDZCO0FBQzlELGdCQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLG9CQUNyQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLEVBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQUlaLHlCQUFRO0FBS2lCLElBSXpCLHlCQUFRO0FBTVAsSUFJRCwrQkFBYyxhQUFDLE1BQTRCO0FBSW5CO0FBQWtDO0FBQXVDO0FBQThDO0FBQTJFOzBDQTdDM04sVUFBVTs7OzswQkFDTDtBQUFDLGlCQTFMUDtBQUFFLEVBMEwwQixpQkFBaUI7QUFDNUMsU0FEWSxNQUFNO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBzcWxpdGVQbHVnaW46IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVEYXRhYmFzZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ215LmRiJ1xuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnZGVmYXVsdCdcbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogaU9TIERhdGFiYXNlIExvY2F0aW9uLiBFeGFtcGxlOiAnTGlicmFyeSdcbiAgICovXG4gIGlvc0RhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0IGFyYml0cmFyeSBkYXRhYmFzZSBsb2NhdGlvbiBvbiBhbmRyb2lkIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV2Y29yZS1leHRidWlsZC1mcmVlXG4gICAqL1xuICBhbmRyb2lkRGF0YWJhc2VMb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHN1cHBvcnQgb3BlbmluZyBwcmUtZmlsbGVkIGRhdGFiYXNlcyB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9jb3Jkb3ZhLXNxbGl0ZS1leHRcbiAgICovXG4gIGNyZWF0ZUZyb21Mb2NhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN1cHBvcnQgZW5jcnlwdGVkIGRhdGFiYXNlcyB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGNpcGhlci1hZGFwdGVyXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIERiVHJhbnNhY3Rpb24ge1xuICBleGVjdXRlU3FsOiAoc3FsOiBhbnksIHZhbHVlcz86IGFueVtdLCBzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNRTGl0ZVRyYW5zYWN0aW9uIGV4dGVuZHMgRGJUcmFuc2FjdGlvbiB7XG4gIHN0YXJ0OiAoKSA9PiB2b2lkO1xuICBhZGRTdGF0ZW1lbnQ6IERiVHJhbnNhY3Rpb25bJ2V4ZWN1dGVTcWwnXTtcbiAgaGFuZGxlU3RhdGVtZW50U3VjY2VzczogKGhhbmRsZXI6IEZ1bmN0aW9uLCByZXNwb25zZTogYW55KSA9PiB2b2lkO1xuICBoYW5kbGVTdGF0ZW1lbnRGYWlsdXJlOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIHJ1bjogKCkgPT4gdm9pZDtcbiAgYWJvcnQ6ICh0eEZhaWx1cmU6IGFueSkgPT4gdm9pZDtcbiAgZmluaXNoOiAoKSA9PiB2b2lkO1xuICBhYm9ydEZyb21ROiAoc3FsZXJyb3I6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTUUxpdGVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX29iamVjdEluc3RhbmNlOiBhbnkpIHt9XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBkYXRhYmFzZUZlYXR1cmVzOiB7IGlzU1FMaXRlUGx1Z2luRGF0YWJhc2U6IGJvb2xlYW4gfTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBvcGVuREJzOiBhbnk7XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246ICh0eDogU1FMaXRlVHJhbnNhY3Rpb24pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMSxcbiAgfSlcbiAgdHJhbnNhY3Rpb24oZm46ICh0eDogRGJUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVhZFRyYW5zYWN0aW9uKGZuOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdGFydE5leHRUcmFuc2FjdGlvbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgb3BlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgU1FMIG9uIHRoZSBvcGVuZWQgZGF0YWJhc2UuIE5vdGUsIHlvdSBtdXN0IGNhbGwgYGNyZWF0ZWAgZmlyc3QsIGFuZFxuICAgKiBlbnN1cmUgaXQgcmVzb2x2ZWQgYW5kIHN1Y2Nlc3NmdWxseSBvcGVuZWQgdGhlIGRhdGFiYXNlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGV4ZWN1dGVTcWwoc3RhdGVtZW50OiBzdHJpbmcsIHBhcmFtcz86IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHNxbFN0YXRlbWVudHMge3N0cmluZ1tdIHwgc3RyaW5nW11bXSB8IGFueVtdfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNxbEJhdGNoKHNxbFN0YXRlbWVudHM6IChzdHJpbmcgfCBzdHJpbmdbXSB8IGFueSlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWJvcnRhbGxQZW5kaW5nVHJhbnNhY3Rpb25zKCk6IHZvaWQge31cbn1cblxuLyoqXG4gKiBAbmFtZSBTUUxpdGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBTUUxpdGUgZGF0YWJhc2VzIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU1FMaXRlLCBTUUxpdGVPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NxbGl0ZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3FsaXRlOiBTUUxpdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3FsaXRlLmNyZWF0ZSh7XG4gKiAgIG5hbWU6ICdkYXRhLmRiJyxcbiAqICAgbG9jYXRpb246ICdkZWZhdWx0J1xuICogfSlcbiAqICAgLnRoZW4oKGRiOiBTUUxpdGVPYmplY3QpID0+IHtcbiAqXG4gKlxuICogICAgIGRiLmV4ZWN1dGVTcWwoJ2NyZWF0ZSB0YWJsZSBkYW5jZU1vdmVzKG5hbWUgVkFSQ0hBUigzMikpJywgW10pXG4gKiAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRXhlY3V0ZWQgU1FMJykpXG4gKiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICpcbiAqICAgfSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBjbGFzc2VzXG4gKiBTUUxpdGVPYmplY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBTUUxpdGVEYXRhYmFzZUNvbmZpZ1xuICogU1FMaXRlVHJhbnNhY3Rpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTUUxpdGUnLFxuICBwbHVnaW5SZWY6ICdzcWxpdGVQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1FMaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBvciBjcmVhdGUgYSBTUUxpdGUgZGF0YWJhc2UgZmlsZS5cbiAgICpcbiAgICogU2VlIHRoZSBwbHVnaW4gZG9jcyBmb3IgYW4gZXhwbGFuYXRpb24gb2YgYWxsIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlI29wZW5pbmctYS1kYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIFByb21pc2U8U1FMaXRlT2JqZWN0PlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxTUUxpdGVPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShjb25maWcsIChkYjogYW55KSA9PiByZXNvbHZlKG5ldyBTUUxpdGVPYmplY3QoZGIpKSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBib3RoIHRoZSBKYXZhc2NyaXB0IGFuZCBuYXRpdmUgcGFydCBvZiB0aGlzIHBsdWdpbiBhcmUgaW5zdGFsbGVkIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGF0YWJhc2VcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRGF0YWJhc2UoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 8461:
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/toPromise.js ***!
  \************************************************************/
/***/ (function() {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 2297:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/toPromise.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! rxjs-compat/add/operator/toPromise */ 8461); //# sourceMappingURL=toPromise.js.map

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 283);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/config */ 2193);







var win = window;
var SqlService = /** @class */ (function () {
    function SqlService(http, configuration, appVersion) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.appVersion = appVersion;
        console.log('[SqlService] - constructor() :: ');
        if (win.sqlitePlugin) {
            console.log('[SqlService] - constructor() :: Creating SQLite service');
            this.storage = new _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite();
            Promise.all([
                this.appVersion.getAppName(),
                this.appVersion.getVersionCode(),
                this.appVersion.getVersionNumber(),
            ]).then(function (result) {
                console.log("[SqlService] - constructor() :: Opening database " + result[0] + "." + result[1] + "." + result[2] + ".db");
                _this.storage.openDatabase({
                    name: result[0] + "." + result[1] + "." + result[2] + ".db",
                    location: 'default'
                });
            });
        }
        else {
            console.log('[SqlService] - constructor() :: Creating WebSQL service');
            this.storage = win.openDatabase(this.configuration.DATABASE_CONFIG.name, '1.0', 'database', 5 * 1024 * 1024);
        }
    }
    SqlService.prototype.executeSql = function (statement, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this.storage.transaction(function (tx) {
                    tx.executeSql(statement, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                }, function (err) { return reject({ err: err }); });
            }
            catch (err) {
                console.warn('[SqlService] - executeSql() :: Error executing statement', statement);
                reject({ err: err });
            }
        });
    };
    SqlService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
        { type: _environments_config__WEBPACK_IMPORTED_MODULE_3__.Config },
        { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion }
    ]; };
    SqlService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
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



/***/ })

}]);
//# sourceMappingURL=default-src_app_providers_operator-service_ts-src_app_providers_plant-service_ts-src_app_prov-9e8a1d.js.map