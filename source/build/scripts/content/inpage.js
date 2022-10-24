/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/inpage.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content/inpage.ts":
/*!*******************************!*\
  !*** ./src/content/inpage.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/rpc/client */ "./src/lib/rpc/client.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// See README.md for details
var CasperLabsPluginHelper = /** @class */ (function () {
    function CasperLabsPluginHelper() {
        this.call = Object(_lib_rpc_client__WEBPACK_IMPORTED_MODULE_0__["registerClient"])();
    }
    CasperLabsPluginHelper.prototype.isConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('isConnected')];
            });
        });
    };
    CasperLabsPluginHelper.prototype.requestConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('requestConnection')];
            });
        });
    };
    CasperLabsPluginHelper.prototype.disconnectFromSite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('disconnectFromSite')];
            });
        });
    };
    CasperLabsPluginHelper.prototype.removeSite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('removeSite')];
            });
        });
    };
    CasperLabsPluginHelper.prototype.sign = function (deploy, signingPublicKeyHex, targetPublicKeyHex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('sign', deploy, signingPublicKeyHex, targetPublicKeyHex)];
            });
        });
    };
    CasperLabsPluginHelper.prototype.signMessage = function (message, signingPublicKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('signMessage', message, signingPublicKey)];
            });
        });
    };
    CasperLabsPluginHelper.prototype.getActivePublicKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('getActivePublicKey')];
            });
        });
    };
    CasperLabsPluginHelper.prototype.getVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('getVersion')];
            });
        });
    };
    CasperLabsPluginHelper.prototype.eventBus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('eventBus')];
            });
        });
    };
    return CasperLabsPluginHelper;
}());
// inject to window, so that Clarity code could use it.
window.casperlabsHelper = new CasperLabsPluginHelper();


/***/ }),

/***/ "./src/lib/rpc/client.ts":
/*!*******************************!*\
  !*** ./src/lib/rpc/client.ts ***!
  \*******************************/
/*! exports provided: registerClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClient", function() { return registerClient; });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc */ "./src/lib/rpc/rpc.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

/**
 * RPC client which is used in Inject Script
 *
 * Inject script can't use browser.sendMessage, it can only use window.postMessage,
 * which will not return result.
 *
 * So we need assign each message a unique messageId and PAGE_ID, so that we could
 * find the reply message for each request.
 *
 * @param logMessages
 */
function registerClient(logMessages) {
    if (logMessages === void 0) { logMessages = false; }
    // A unique message ID that is used to ensure responses are sent to the correct requests
    var _messageId = 0;
    var generateNewMessageId = function () { return ++_messageId; };
    var PAGE_ID = Math.random() * Number.MAX_SAFE_INTEGER;
    var rpc = new _rpc__WEBPACK_IMPORTED_MODULE_0__["Rpc"]({
        source: 'page',
        destination: 'background',
        logMessages: logMessages,
        postMessage: function (msg) {
            return new Promise(function (resolve, reject) {
                var msgId = generateNewMessageId();
                // inspired by postmate
                // https://github.com/dollarshaveclub/postmate/blob/master/src/postmate.js#L136
                window.postMessage({ type: 'request', pageId: PAGE_ID, msgId: msgId, payload: msg }, '*');
                var transact = function (e) {
                    if (e.data.pageId === PAGE_ID &&
                        e.data.msgId === msgId &&
                        e.data.type === 'reply') {
                        window.removeEventListener('message', transact, false);
                        resolve(e.data.value);
                    }
                };
                window.addEventListener('message', transact, false);
            });
        }
    });
    return function call(method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return rpc.call.apply(rpc, __spreadArrays([method], params));
    };
}


/***/ }),

/***/ "./src/lib/rpc/rpc.ts":
/*!****************************!*\
  !*** ./src/lib/rpc/rpc.ts ***!
  \****************************/
/*! exports provided: Rpc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpc", function() { return Rpc; });
/* harmony import */ var _tunnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tunnel */ "./src/lib/rpc/tunnel.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
 * https://github.com/ontio/ontology-dapi/blob/master/src/rpc/rpc.ts
 */

var Rpc = /** @class */ (function () {
    function Rpc(options) {
        options.messageHandler = this.messageHandler.bind(this);
        this.tunnel = new _tunnel__WEBPACK_IMPORTED_MODULE_0__["Tunnel"](options);
        this.methods = new Map();
    }
    Rpc.prototype.call = function (method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var msg = {
            method: method,
            params: params
        };
        return this.tunnel.send(msg);
    };
    Rpc.prototype.register = function (name, method) {
        this.methods.set(name, method);
    };
    Rpc.prototype.messageHandler = function (msg, caller) {
        var method = this.methods.get(msg.method);
        if (method === undefined) {
            throw new Error('Unregistered method call: ' + msg.method);
        }
        return method.call.apply(method, __spreadArrays([caller], msg.params));
    };
    return Rpc;
}());



/***/ }),

/***/ "./src/lib/rpc/tunnel.ts":
/*!*******************************!*\
  !*** ./src/lib/rpc/tunnel.ts ***!
  \*******************************/
/*! exports provided: Tunnel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tunnel", function() { return Tunnel; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Tunnel = /** @class */ (function () {
    function Tunnel(options) {
        this.source = options.source;
        this.destination = options.destination;
        this.postMessage = options.postMessage;
        this.messageHandler = options.messageHandler;
        this.logMessages = options.logMessages;
        if (options.addListener === undefined &&
            options.postMessage === undefined) {
            throw new Error('Either addListener or postMessage must be present.');
        }
        else if (options.addListener !== undefined) {
            if (options.messageHandler === undefined) {
                throw new Error('MessageHandler must be specified if addListener present.');
            }
            options.addListener(this.onMessage.bind(this));
        }
    }
    Tunnel.prototype.send = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            destination: this.destination,
                            payload: msg,
                            source: this.source,
                            type: 'casperlabs-plugin'
                        };
                        if (this.postMessage === undefined) {
                            throw new Error('PostMessage was not specified.');
                        }
                        if (this.logMessages) {
                            // tslint:disable-next-line:max-line-length
                            // tslint:disable-next-line:no-console
                            console.warn("Tunnel: (" + this.source + "): Sending", JSON.stringify(msg, null, '  '));
                        }
                        return [4 /*yield*/, this.postMessage(request)];
                    case 1:
                        response = _a.sent();
                        if (response.error !== undefined) {
                            throw new Error(response.error);
                        }
                        else {
                            return [2 /*return*/, response.payload];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tunnel.prototype.onMessage = function (request, sender) {
        if (request.destination === this.source &&
            request.source === this.destination) {
            var promise = void 0;
            try {
                if (this.messageHandler === undefined) {
                    throw new Error('MessageHandler was not specified.');
                }
                if (this.logMessages) {
                    // tslint:disable-next-line:max-line-length
                    // tslint:disable-next-line:no-console
                    console.warn("Tunnel: (" + this.source + "): Receiving", JSON.stringify(request.payload, null, '  '));
                }
                var caller = {
                    id: sender.id,
                    url: sender.url
                };
                var response = this.messageHandler(request.payload, caller);
                promise = Promise.resolve(response);
            }
            catch (e) {
                promise = Promise.reject(e);
            }
            return promise
                .then(function (result) {
                return {
                    destination: request.source,
                    payload: result,
                    source: request.destination,
                    type: 'casperlabs-plugin'
                };
            })
                .catch(function (error) {
                return {
                    destination: request.source,
                    error: error.message,
                    source: request.destination,
                    type: 'casperlabs-plugin'
                };
            });
        }
    };
    return Tunnel;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvaW5wYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcnBjL2NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JwYy9ycGMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ycGMvdHVubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGbUQ7QUFFbkQsNEJBQTRCO0FBQzVCO0lBTUU7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLHNFQUFjLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUssNENBQVcsR0FBakI7OztnQkFDRSxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFVLGFBQWEsQ0FBQyxFQUFD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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29udGVudC9pbnBhZ2UudHNcIik7XG4iLCJpbXBvcnQgeyByZWdpc3RlckNsaWVudCB9IGZyb20gJy4uL2xpYi9ycGMvY2xpZW50JztcblxuLy8gU2VlIFJFQURNRS5tZCBmb3IgZGV0YWlsc1xuY2xhc3MgQ2FzcGVyTGFic1BsdWdpbkhlbHBlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2FsbDogPFJFU1VMVD4oXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgLi4ucGFyYW1zOiBhbnlbXVxuICApID0+IFByb21pc2U8UkVTVUxUPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbGwgPSByZWdpc3RlckNsaWVudCgpO1xuICB9XG5cbiAgYXN5bmMgaXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbDxib29sZWFuPignaXNDb25uZWN0ZWQnKTtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3RDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8dm9pZD4oJ3JlcXVlc3RDb25uZWN0aW9uJyk7XG4gIH1cblxuICBhc3luYyBkaXNjb25uZWN0RnJvbVNpdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbDx2b2lkPignZGlzY29ubmVjdEZyb21TaXRlJyk7XG4gIH1cblxuICBhc3luYyByZW1vdmVTaXRlKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8dm9pZD4oJ3JlbW92ZVNpdGUnKTtcbiAgfVxuXG4gIGFzeW5jIHNpZ24oXG4gICAgZGVwbG95OiBKU09OLFxuICAgIHNpZ25pbmdQdWJsaWNLZXlIZXg6IHN0cmluZyxcbiAgICB0YXJnZXRQdWJsaWNLZXlIZXg/OiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbDxzdHJpbmc+KFxuICAgICAgJ3NpZ24nLFxuICAgICAgZGVwbG95LFxuICAgICAgc2lnbmluZ1B1YmxpY0tleUhleCxcbiAgICAgIHRhcmdldFB1YmxpY0tleUhleFxuICAgICk7XG4gIH1cblxuICBhc3luYyBzaWduTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHNpZ25pbmdQdWJsaWNLZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNhbGw8c3RyaW5nPignc2lnbk1lc3NhZ2UnLCBtZXNzYWdlLCBzaWduaW5nUHVibGljS2V5KTtcbiAgfVxuXG4gIGFzeW5jIGdldEFjdGl2ZVB1YmxpY0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsPHN0cmluZz4oJ2dldEFjdGl2ZVB1YmxpY0tleScpO1xuICB9XG5cbiAgYXN5bmMgZ2V0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsPHN0cmluZz4oJ2dldFZlcnNpb24nKTtcbiAgfVxuXG4gIGFzeW5jIGV2ZW50QnVzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8YW55PignZXZlbnRCdXMnKTtcbiAgfVxufVxuXG4vLyBpbmplY3QgdG8gd2luZG93LCBzbyB0aGF0IENsYXJpdHkgY29kZSBjb3VsZCB1c2UgaXQuXG4od2luZG93IGFzIGFueSkuY2FzcGVybGFic0hlbHBlciA9IG5ldyBDYXNwZXJMYWJzUGx1Z2luSGVscGVyKCk7XG4iLCJpbXBvcnQgeyBScGMgfSBmcm9tICcuL3JwYyc7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnLi90dW5uZWwnO1xuXG4vKipcbiAqIFJQQyBjbGllbnQgd2hpY2ggaXMgdXNlZCBpbiBJbmplY3QgU2NyaXB0XG4gKlxuICogSW5qZWN0IHNjcmlwdCBjYW4ndCB1c2UgYnJvd3Nlci5zZW5kTWVzc2FnZSwgaXQgY2FuIG9ubHkgdXNlIHdpbmRvdy5wb3N0TWVzc2FnZSxcbiAqIHdoaWNoIHdpbGwgbm90IHJldHVybiByZXN1bHQuXG4gKlxuICogU28gd2UgbmVlZCBhc3NpZ24gZWFjaCBtZXNzYWdlIGEgdW5pcXVlIG1lc3NhZ2VJZCBhbmQgUEFHRV9JRCwgc28gdGhhdCB3ZSBjb3VsZFxuICogZmluZCB0aGUgcmVwbHkgbWVzc2FnZSBmb3IgZWFjaCByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBsb2dNZXNzYWdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDbGllbnQobG9nTWVzc2FnZXMgPSBmYWxzZSkge1xuICAvLyBBIHVuaXF1ZSBtZXNzYWdlIElEIHRoYXQgaXMgdXNlZCB0byBlbnN1cmUgcmVzcG9uc2VzIGFyZSBzZW50IHRvIHRoZSBjb3JyZWN0IHJlcXVlc3RzXG4gIGxldCBfbWVzc2FnZUlkID0gMDtcbiAgbGV0IGdlbmVyYXRlTmV3TWVzc2FnZUlkID0gKCkgPT4gKytfbWVzc2FnZUlkO1xuICBjb25zdCBQQUdFX0lEID0gTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXG4gIGNvbnN0IHJwYyA9IG5ldyBScGMoe1xuICAgIHNvdXJjZTogJ3BhZ2UnLFxuICAgIGRlc3RpbmF0aW9uOiAnYmFja2dyb3VuZCcsXG4gICAgbG9nTWVzc2FnZXMsXG4gICAgcG9zdE1lc3NhZ2U6IChtc2c6IFJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZ0lkID0gZ2VuZXJhdGVOZXdNZXNzYWdlSWQoKTtcbiAgICAgICAgLy8gaW5zcGlyZWQgYnkgcG9zdG1hdGVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RvbGxhcnNoYXZlY2x1Yi9wb3N0bWF0ZS9ibG9iL21hc3Rlci9zcmMvcG9zdG1hdGUuanMjTDEzNlxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgeyB0eXBlOiAncmVxdWVzdCcsIHBhZ2VJZDogUEFHRV9JRCwgbXNnSWQsIHBheWxvYWQ6IG1zZyB9LFxuICAgICAgICAgICcqJ1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCB0cmFuc2FjdCA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBlLmRhdGEucGFnZUlkID09PSBQQUdFX0lEICYmXG4gICAgICAgICAgICBlLmRhdGEubXNnSWQgPT09IG1zZ0lkICYmXG4gICAgICAgICAgICBlLmRhdGEudHlwZSA9PT0gJ3JlcGx5J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0cmFuc2FjdCwgZmFsc2UpO1xuICAgICAgICAgICAgcmVzb2x2ZShlLmRhdGEudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRyYW5zYWN0LCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjYWxsPFJFU1VMVD4obWV0aG9kOiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pIHtcbiAgICByZXR1cm4gcnBjLmNhbGw8UkVTVUxUPihtZXRob2QsIC4uLnBhcmFtcyk7XG4gIH07XG59XG4iLCIvKlxuICogaHR0cHM6Ly9naXRodWIuY29tL29udGlvL29udG9sb2d5LWRhcGkvYmxvYi9tYXN0ZXIvc3JjL3JwYy9ycGMudHNcbiAqL1xuaW1wb3J0IHsgQ2FsbGVyLCBUdW5uZWwsIFR1bm5lbE9wdGlvbnMgfSBmcm9tICcuL3R1bm5lbCc7XG5cbmV4cG9ydCB0eXBlIE1ldGhvZFR5cGUgPSAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55O1xuXG5pbnRlcmZhY2UgTWV0aG9kQ2FsbFR5cGUge1xuICBtZXRob2Q6IHN0cmluZztcbiAgcGFyYW1zOiBhbnlbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFJwYyB7XG4gIHByaXZhdGUgdHVubmVsOiBUdW5uZWw8TWV0aG9kQ2FsbFR5cGU+O1xuICBwcml2YXRlIG1ldGhvZHM6IE1hcDxzdHJpbmcsIE1ldGhvZFR5cGU+O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR1bm5lbE9wdGlvbnMpIHtcbiAgICBvcHRpb25zLm1lc3NhZ2VIYW5kbGVyID0gdGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy50dW5uZWwgPSBuZXcgVHVubmVsKG9wdGlvbnMpO1xuICAgIHRoaXMubWV0aG9kcyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGNhbGw8UkVTVUxUID0gYW55PihtZXRob2Q6IHN0cmluZywgLi4ucGFyYW1zOiBhbnlbXSkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHBhcmFtc1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy50dW5uZWwuc2VuZDxSRVNVTFQ+KG1zZyk7XG4gIH1cblxuICByZWdpc3RlcihuYW1lOiBzdHJpbmcsIG1ldGhvZDogTWV0aG9kVHlwZSkge1xuICAgIHRoaXMubWV0aG9kcy5zZXQobmFtZSwgbWV0aG9kKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVzc2FnZUhhbmRsZXIobXNnOiBNZXRob2RDYWxsVHlwZSwgY2FsbGVyOiBDYWxsZXIpIHtcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLm1ldGhvZHMuZ2V0KG1zZy5tZXRob2QpO1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVnaXN0ZXJlZCBtZXRob2QgY2FsbDogJyArIG1zZy5tZXRob2QpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2QuY2FsbChjYWxsZXIsIC4uLm1zZy5wYXJhbXMpO1xuICB9XG59XG4iLCIvKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vbnRpby9vbnRvbG9neS1kYXBpL2Jsb2IvbWFzdGVyL3NyYy9ycGMvdHVubmVsLnRzXG4gKi9cbmltcG9ydCB7IFJ1bnRpbWUgfSBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwtdHMnO1xuXG5leHBvcnQgdHlwZSBDYWxsYmFja1R5cGUgPSAoXG4gIG1zZzogUmVxdWVzdCxcbiAgc2VuZGVyOiBSdW50aW1lLk1lc3NhZ2VTZW5kZXJcbikgPT4gUHJvbWlzZTxSZXNwb25zZT4gfCB2b2lkO1xuZXhwb3J0IHR5cGUgUG9zdE1lc3NhZ2VUeXBlID0gKG1zZzogUmVxdWVzdCkgPT4gUHJvbWlzZTxSZXNwb25zZT47XG5cbmV4cG9ydCB0eXBlIEFkZExpc3RlbmVyVHlwZSA9IChjYWxsYmFjazogQ2FsbGJhY2tUeXBlKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxlciB7XG4gIHVybD86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE1lc3NhZ2VIYW5kbGVyVHlwZSA9IChtc2c6IGFueSwgY2FsbGVyOiBDYWxsZXIpID0+IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0IHtcbiAgcGF5bG9hZDogYW55O1xuICBzb3VyY2U6IHN0cmluZztcbiAgZGVzdGluYXRpb246IHN0cmluZztcbiAgdHlwZTogJ2Nhc3BlcmxhYnMtcGx1Z2luJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZTxUWVBFID0gYW55PiB7XG4gIGRlc3RpbmF0aW9uOiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xuICBwYXlsb2FkPzogVFlQRTtcbiAgc291cmNlOiBzdHJpbmc7XG4gIHR5cGU6ICdjYXNwZXJsYWJzLXBsdWdpbic7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVubmVsT3B0aW9ucyB7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBkZXN0aW5hdGlvbjogc3RyaW5nO1xuICBwb3N0TWVzc2FnZT86IFBvc3RNZXNzYWdlVHlwZTtcbiAgYWRkTGlzdGVuZXI/OiBBZGRMaXN0ZW5lclR5cGU7XG4gIG1lc3NhZ2VIYW5kbGVyPzogTWVzc2FnZUhhbmRsZXJUeXBlO1xuICBsb2dNZXNzYWdlcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUdW5uZWw8VCA9IGFueT4ge1xuICBwcml2YXRlIHNvdXJjZTogc3RyaW5nO1xuICBwcml2YXRlIGRlc3RpbmF0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcG9zdE1lc3NhZ2U/OiBQb3N0TWVzc2FnZVR5cGU7XG4gIHByaXZhdGUgbWVzc2FnZUhhbmRsZXI/OiBNZXNzYWdlSGFuZGxlclR5cGU7XG5cbiAgcHJpdmF0ZSBsb2dNZXNzYWdlcz86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogVHVubmVsT3B0aW9ucykge1xuICAgIHRoaXMuc291cmNlID0gb3B0aW9ucy5zb3VyY2U7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IG9wdGlvbnMuZGVzdGluYXRpb247XG4gICAgdGhpcy5wb3N0TWVzc2FnZSA9IG9wdGlvbnMucG9zdE1lc3NhZ2U7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlciA9IG9wdGlvbnMubWVzc2FnZUhhbmRsZXI7XG4gICAgdGhpcy5sb2dNZXNzYWdlcyA9IG9wdGlvbnMubG9nTWVzc2FnZXM7XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLmFkZExpc3RlbmVyID09PSB1bmRlZmluZWQgJiZcbiAgICAgIG9wdGlvbnMucG9zdE1lc3NhZ2UgPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaXRoZXIgYWRkTGlzdGVuZXIgb3IgcG9zdE1lc3NhZ2UgbXVzdCBiZSBwcmVzZW50LicpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5hZGRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob3B0aW9ucy5tZXNzYWdlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTWVzc2FnZUhhbmRsZXIgbXVzdCBiZSBzcGVjaWZpZWQgaWYgYWRkTGlzdGVuZXIgcHJlc2VudC4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuYWRkTGlzdGVuZXIodGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZDxSRVNVTFQ+KG1zZzogVCk6IFByb21pc2U8UkVTVUxUPiB7XG4gICAgY29uc3QgcmVxdWVzdDogUmVxdWVzdCA9IHtcbiAgICAgIGRlc3RpbmF0aW9uOiB0aGlzLmRlc3RpbmF0aW9uLFxuICAgICAgcGF5bG9hZDogbXNnLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIHR5cGU6ICdjYXNwZXJsYWJzLXBsdWdpbidcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucG9zdE1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3N0TWVzc2FnZSB3YXMgbm90IHNwZWNpZmllZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2dNZXNzYWdlcykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFR1bm5lbDogKCR7dGhpcy5zb3VyY2V9KTogU2VuZGluZ2AsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1zZywgbnVsbCwgJyAgJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlPFJFU1VMVD4gPSBhd2FpdCB0aGlzLnBvc3RNZXNzYWdlKHJlcXVlc3QpO1xuXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5wYXlsb2FkIGFzIFJFU1VMVDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTWVzc2FnZShcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIHNlbmRlcjogUnVudGltZS5NZXNzYWdlU2VuZGVyXG4gICk6IFByb21pc2U8UmVzcG9uc2U+IHwgdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gdGhpcy5zb3VyY2UgJiZcbiAgICAgIHJlcXVlc3Quc291cmNlID09PSB0aGlzLmRlc3RpbmF0aW9uXG4gICAgKSB7XG4gICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlSGFuZGxlciB3YXMgbm90IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvZ01lc3NhZ2VzKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFR1bm5lbDogKCR7dGhpcy5zb3VyY2V9KTogUmVjZWl2aW5nYCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucGF5bG9hZCwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FsbGVyOiBDYWxsZXIgPSB7XG4gICAgICAgICAgaWQ6IHNlbmRlci5pZCxcbiAgICAgICAgICB1cmw6IHNlbmRlci51cmxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMubWVzc2FnZUhhbmRsZXIocmVxdWVzdC5wYXlsb2FkLCBjYWxsZXIpO1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogcmVxdWVzdC5zb3VyY2UsXG4gICAgICAgICAgICBwYXlsb2FkOiByZXN1bHQsXG4gICAgICAgICAgICBzb3VyY2U6IHJlcXVlc3QuZGVzdGluYXRpb24sXG4gICAgICAgICAgICB0eXBlOiAnY2FzcGVybGFicy1wbHVnaW4nXG4gICAgICAgICAgfSBhcyBSZXNwb25zZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHJlcXVlc3Quc291cmNlLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICBzb3VyY2U6IHJlcXVlc3QuZGVzdGluYXRpb24sXG4gICAgICAgICAgICB0eXBlOiAnY2FzcGVybGFicy1wbHVnaW4nXG4gICAgICAgICAgfSBhcyBSZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9