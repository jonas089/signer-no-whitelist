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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/signerTestMethods.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content/signerTestMethods.ts":
/*!******************************************!*\
  !*** ./src/content/signerTestMethods.ts ***!
  \******************************************/
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

/**
 * Provides methods to test the Signer and Clarity together
 * bypassing the Signer's UI. This is implemented in the Cypress
 * tests for Clarity.
 * It will only be available if the Signer is running in dev.
 * And the files will not be included in the build.
 */
var SignerTestingHelper = /** @class */ (function () {
    function SignerTestingHelper() {
        this.call = Object(_lib_rpc_client__WEBPACK_IMPORTED_MODULE_0__["registerClient"])();
    }
    SignerTestingHelper.prototype.forceConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('connectToSite')];
            });
        });
    };
    SignerTestingHelper.prototype.forceDisconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('disconnectFromSite')];
            });
        });
    };
    SignerTestingHelper.prototype.hasCreatedVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('hasCreatedVault')];
            });
        });
    };
    SignerTestingHelper.prototype.resetExistingVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('resetExistingVault')];
            });
        });
    };
    SignerTestingHelper.prototype.createNewVault = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('createNewVault', password)];
            });
        });
    };
    SignerTestingHelper.prototype.createTestAccount = function (name, privateKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('createTestAccount', name, privateKey)];
            });
        });
    };
    SignerTestingHelper.prototype.getToSignMessageID = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('getToSignMessageID')];
            });
        });
    };
    SignerTestingHelper.prototype.signTestDeploy = function (msgId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call('signTestDeploy', msgId)];
            });
        });
    };
    return SignerTestingHelper;
}());
// Inject to window object to allow access from Clarity
window.signerTestingHelper = new SignerTestingHelper();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvc2lnbmVyVGVzdE1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ycGMvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcnBjL3JwYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JwYy90dW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZtRDtBQUVuRDs7Ozs7O0dBTUc7QUFDSDtJQU1FO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxzRUFBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVLLDZDQUFlLEdBQXJCOzs7Z0JBQ0Usc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBTyxlQUFlLENBQUMsRUFBQzs7O0tBQ3pDO0lBRUssNkNBQWUsR0FBckI7OztnQkFDRSxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFPLG9CQUFvQixDQUFDLEVBQUM7OztLQUM5QztJQUVLLDZDQUFlLEdBQXJCOzs7Z0JBQ0Usc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBVSxpQkFBaUIsQ0FBQyxFQUFDOzs7S0FDOUM7SUFFSyxnREFBa0IsR0FBeEI7OztnQkFDRSxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFPLG9CQUFvQixDQUFDLEVBQUM7OztLQUM5QztJQUVLLDRDQUFjLEdBQXBCLFVBQXFCLFFBQWdCOzs7Z0JBQ25DLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQU8sZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLEVBQUM7OztLQUNwRDtJQUVLLCtDQUFpQixHQUF2QixVQUF3QixJQUFZLEVBQUUsVUFBa0I7OztnQkFDdEQsc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBTyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUM7OztLQUMvRDtJQUVLLGdEQUFrQixHQUF4Qjs7O2dCQUNFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQVMsb0JBQW9CLENBQUMsRUFBQzs7O0tBQ2hEO0lBRUssNENBQWMsR0FBcEIsVUFBcUIsS0FBYTs7O2dCQUNoQyxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFPLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFDOzs7S0FDakQ7SUFDSCwwQkFBQztBQUFELENBQUM7QUFFRCx1REFBdUQ7QUFDdEQsTUFBYyxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHBDO0FBRzVCOzs7Ozs7Ozs7O0dBVUc7QUFDSSxTQUFTLGNBQWMsQ0FBQyxXQUFtQjtJQUFuQixpREFBbUI7SUFDaEQsd0ZBQXdGO0lBQ3hGLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFJLG9CQUFvQixHQUFHLGNBQU0sU0FBRSxVQUFVLEVBQVosQ0FBWSxDQUFDO0lBQzlDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFFeEQsSUFBTSxHQUFHLEdBQUcsSUFBSSx3Q0FBRyxDQUFDO1FBQ2xCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLFlBQVk7UUFDekIsV0FBVztRQUNYLFdBQVcsRUFBRSxVQUFDLEdBQVk7WUFDeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxJQUFNLEtBQUssR0FBRyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNyQyx1QkFBdUI7Z0JBQ3ZCLCtFQUErRTtnQkFDL0UsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxTQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFDekQsR0FBRyxDQUNKLENBQUM7Z0JBRUYsSUFBSSxRQUFRLEdBQUcsVUFBQyxDQUFlO29CQUM3QixJQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87d0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7d0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFDdkI7d0JBQ0EsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3ZELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2QjtnQkFDSCxDQUFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLElBQUksQ0FBUyxNQUFjO1FBQUUsZ0JBQWdCO2FBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtZQUFoQiwrQkFBZ0I7O1FBQzNELE9BQU8sR0FBRyxDQUFDLElBQUksT0FBUixHQUFHLGtCQUFjLE1BQU0sR0FBSyxNQUFNLEdBQUU7SUFDN0MsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7O0dBRUc7QUFDc0Q7QUFTekQ7SUFJRSxhQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhDQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQkFBSSxHQUFKLFVBQW1CLE1BQWM7UUFBRSxnQkFBZ0I7YUFBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO1lBQWhCLCtCQUFnQjs7UUFDakQsSUFBTSxHQUFHLEdBQUc7WUFDVixNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLE1BQWtCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNEJBQWMsR0FBdEIsVUFBdUIsR0FBbUIsRUFBRSxNQUFjO1FBQ3hELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxrQkFBTSxNQUFNLEdBQUssR0FBRyxDQUFDLE1BQU0sR0FBRTtJQUM1QyxDQUFDO0lBQ0gsVUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtJQVFFLGdCQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFdkMsSUFDRSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVM7WUFDakMsT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQ2pDO1lBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU0sSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUM1QyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxNQUFNLElBQUksS0FBSyxDQUNiLDBEQUEwRCxDQUMzRCxDQUFDO2FBQ0g7WUFFRCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUsscUJBQUksR0FBVixVQUFtQixHQUFNOzs7Ozs7d0JBQ2pCLE9BQU8sR0FBWTs0QkFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXOzRCQUM3QixPQUFPLEVBQUUsR0FBRzs0QkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ25CLElBQUksRUFBRSxtQkFBbUI7eUJBQzFCLENBQUM7d0JBRUYsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTs0QkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO3lCQUNuRDt3QkFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLDJDQUEyQzs0QkFDM0Msc0NBQXNDOzRCQUN0QyxPQUFPLENBQUMsSUFBSSxDQUNWLGNBQVksSUFBSSxDQUFDLE1BQU0sZUFBWSxFQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ2hDLENBQUM7eUJBQ0g7d0JBRWtDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDOzt3QkFBNUQsUUFBUSxHQUFxQixTQUErQjt3QkFFbEUsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTs0QkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2pDOzZCQUFNOzRCQUNMLHNCQUFPLFFBQVEsQ0FBQyxPQUFpQixFQUFDO3lCQUNuQzs7Ozs7S0FDRjtJQUVPLDBCQUFTLEdBQWpCLFVBQ0UsT0FBZ0IsRUFDaEIsTUFBNkI7UUFFN0IsSUFDRSxPQUFPLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNO1lBQ25DLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFDbkM7WUFDQSxJQUFJLE9BQU8sU0FBYyxDQUFDO1lBRTFCLElBQUk7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtvQkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2lCQUN0RDtnQkFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLDJDQUEyQztvQkFDM0Msc0NBQXNDO29CQUN0QyxPQUFPLENBQUMsSUFBSSxDQUNWLGNBQVksSUFBSSxDQUFDLE1BQU0saUJBQWMsRUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDNUMsQ0FBQztpQkFDSDtnQkFFRCxJQUFNLE1BQU0sR0FBVztvQkFDckIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUNiLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDaEIsQ0FBQztnQkFFRixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlELE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFFRCxPQUFPLE9BQU87aUJBQ1gsSUFBSSxDQUFDLGdCQUFNO2dCQUNWLE9BQU87b0JBQ0wsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUMzQixPQUFPLEVBQUUsTUFBTTtvQkFDZixNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVc7b0JBQzNCLElBQUksRUFBRSxtQkFBbUI7aUJBQ2QsQ0FBQztZQUNoQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLGVBQUs7Z0JBQ1YsT0FBTztvQkFDTCxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxXQUFXO29CQUMzQixJQUFJLEVBQUUsbUJBQW1CO2lCQUNkLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJjb250ZW50L3NpZ25lclRlc3RNZXRob2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29udGVudC9zaWduZXJUZXN0TWV0aG9kcy50c1wiKTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyQ2xpZW50IH0gZnJvbSAnLi4vbGliL3JwYy9jbGllbnQnO1xuXG4vKipcbiAqIFByb3ZpZGVzIG1ldGhvZHMgdG8gdGVzdCB0aGUgU2lnbmVyIGFuZCBDbGFyaXR5IHRvZ2V0aGVyXG4gKiBieXBhc3NpbmcgdGhlIFNpZ25lcidzIFVJLiBUaGlzIGlzIGltcGxlbWVudGVkIGluIHRoZSBDeXByZXNzXG4gKiB0ZXN0cyBmb3IgQ2xhcml0eS5cbiAqIEl0IHdpbGwgb25seSBiZSBhdmFpbGFibGUgaWYgdGhlIFNpZ25lciBpcyBydW5uaW5nIGluIGRldi5cbiAqIEFuZCB0aGUgZmlsZXMgd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICovXG5jbGFzcyBTaWduZXJUZXN0aW5nSGVscGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBjYWxsOiA8UkVTVUxUPihcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAuLi5wYXJhbXM6IGFueVtdXG4gICkgPT4gUHJvbWlzZTxSRVNVTFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsbCA9IHJlZ2lzdGVyQ2xpZW50KCk7XG4gIH1cblxuICBhc3luYyBmb3JjZUNvbm5lY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbDx2b2lkPignY29ubmVjdFRvU2l0ZScpO1xuICB9XG5cbiAgYXN5bmMgZm9yY2VEaXNjb25uZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8dm9pZD4oJ2Rpc2Nvbm5lY3RGcm9tU2l0ZScpO1xuICB9XG5cbiAgYXN5bmMgaGFzQ3JlYXRlZFZhdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8Ym9vbGVhbj4oJ2hhc0NyZWF0ZWRWYXVsdCcpO1xuICB9XG5cbiAgYXN5bmMgcmVzZXRFeGlzdGluZ1ZhdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8dm9pZD4oJ3Jlc2V0RXhpc3RpbmdWYXVsdCcpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlTmV3VmF1bHQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNhbGw8dm9pZD4oJ2NyZWF0ZU5ld1ZhdWx0JywgcGFzc3dvcmQpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlVGVzdEFjY291bnQobmFtZTogc3RyaW5nLCBwcml2YXRlS2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsPHZvaWQ+KCdjcmVhdGVUZXN0QWNjb3VudCcsIG5hbWUsIHByaXZhdGVLZXkpO1xuICB9XG5cbiAgYXN5bmMgZ2V0VG9TaWduTWVzc2FnZUlEKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGw8bnVtYmVyPignZ2V0VG9TaWduTWVzc2FnZUlEJyk7XG4gIH1cblxuICBhc3luYyBzaWduVGVzdERlcGxveShtc2dJZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbDx2b2lkPignc2lnblRlc3REZXBsb3knLCBtc2dJZCk7XG4gIH1cbn1cblxuLy8gSW5qZWN0IHRvIHdpbmRvdyBvYmplY3QgdG8gYWxsb3cgYWNjZXNzIGZyb20gQ2xhcml0eVxuKHdpbmRvdyBhcyBhbnkpLnNpZ25lclRlc3RpbmdIZWxwZXIgPSBuZXcgU2lnbmVyVGVzdGluZ0hlbHBlcigpO1xuIiwiaW1wb3J0IHsgUnBjIH0gZnJvbSAnLi9ycGMnO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJy4vdHVubmVsJztcblxuLyoqXG4gKiBSUEMgY2xpZW50IHdoaWNoIGlzIHVzZWQgaW4gSW5qZWN0IFNjcmlwdFxuICpcbiAqIEluamVjdCBzY3JpcHQgY2FuJ3QgdXNlIGJyb3dzZXIuc2VuZE1lc3NhZ2UsIGl0IGNhbiBvbmx5IHVzZSB3aW5kb3cucG9zdE1lc3NhZ2UsXG4gKiB3aGljaCB3aWxsIG5vdCByZXR1cm4gcmVzdWx0LlxuICpcbiAqIFNvIHdlIG5lZWQgYXNzaWduIGVhY2ggbWVzc2FnZSBhIHVuaXF1ZSBtZXNzYWdlSWQgYW5kIFBBR0VfSUQsIHNvIHRoYXQgd2UgY291bGRcbiAqIGZpbmQgdGhlIHJlcGx5IG1lc3NhZ2UgZm9yIGVhY2ggcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gbG9nTWVzc2FnZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2xpZW50KGxvZ01lc3NhZ2VzID0gZmFsc2UpIHtcbiAgLy8gQSB1bmlxdWUgbWVzc2FnZSBJRCB0aGF0IGlzIHVzZWQgdG8gZW5zdXJlIHJlc3BvbnNlcyBhcmUgc2VudCB0byB0aGUgY29ycmVjdCByZXF1ZXN0c1xuICBsZXQgX21lc3NhZ2VJZCA9IDA7XG4gIGxldCBnZW5lcmF0ZU5ld01lc3NhZ2VJZCA9ICgpID0+ICsrX21lc3NhZ2VJZDtcbiAgY29uc3QgUEFHRV9JRCA9IE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcblxuICBjb25zdCBycGMgPSBuZXcgUnBjKHtcbiAgICBzb3VyY2U6ICdwYWdlJyxcbiAgICBkZXN0aW5hdGlvbjogJ2JhY2tncm91bmQnLFxuICAgIGxvZ01lc3NhZ2VzLFxuICAgIHBvc3RNZXNzYWdlOiAobXNnOiBSZXF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBtc2dJZCA9IGdlbmVyYXRlTmV3TWVzc2FnZUlkKCk7XG4gICAgICAgIC8vIGluc3BpcmVkIGJ5IHBvc3RtYXRlXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kb2xsYXJzaGF2ZWNsdWIvcG9zdG1hdGUvYmxvYi9tYXN0ZXIvc3JjL3Bvc3RtYXRlLmpzI0wxMzZcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgIHsgdHlwZTogJ3JlcXVlc3QnLCBwYWdlSWQ6IFBBR0VfSUQsIG1zZ0lkLCBwYXlsb2FkOiBtc2cgfSxcbiAgICAgICAgICAnKidcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdHJhbnNhY3QgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS5kYXRhLnBhZ2VJZCA9PT0gUEFHRV9JRCAmJlxuICAgICAgICAgICAgZS5kYXRhLm1zZ0lkID09PSBtc2dJZCAmJlxuICAgICAgICAgICAgZS5kYXRhLnR5cGUgPT09ICdyZXBseSdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdHJhbnNhY3QsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlc29sdmUoZS5kYXRhLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0cmFuc2FjdCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gY2FsbDxSRVNVTFQ+KG1ldGhvZDogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKSB7XG4gICAgcmV0dXJuIHJwYy5jYWxsPFJFU1VMVD4obWV0aG9kLCAuLi5wYXJhbXMpO1xuICB9O1xufVxuIiwiLypcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vbnRpby9vbnRvbG9neS1kYXBpL2Jsb2IvbWFzdGVyL3NyYy9ycGMvcnBjLnRzXG4gKi9cbmltcG9ydCB7IENhbGxlciwgVHVubmVsLCBUdW5uZWxPcHRpb25zIH0gZnJvbSAnLi90dW5uZWwnO1xuXG5leHBvcnQgdHlwZSBNZXRob2RUeXBlID0gKC4uLnBhcmFtczogYW55W10pID0+IGFueTtcblxuaW50ZXJmYWNlIE1ldGhvZENhbGxUeXBlIHtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIHBhcmFtczogYW55W107XG59XG5cbmV4cG9ydCBjbGFzcyBScGMge1xuICBwcml2YXRlIHR1bm5lbDogVHVubmVsPE1ldGhvZENhbGxUeXBlPjtcbiAgcHJpdmF0ZSBtZXRob2RzOiBNYXA8c3RyaW5nLCBNZXRob2RUeXBlPjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUdW5uZWxPcHRpb25zKSB7XG4gICAgb3B0aW9ucy5tZXNzYWdlSGFuZGxlciA9IHRoaXMubWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMudHVubmVsID0gbmV3IFR1bm5lbChvcHRpb25zKTtcbiAgICB0aGlzLm1ldGhvZHMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBjYWxsPFJFU1VMVCA9IGFueT4obWV0aG9kOiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pIHtcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICBtZXRob2QsXG4gICAgICBwYXJhbXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMudHVubmVsLnNlbmQ8UkVTVUxUPihtc2cpO1xuICB9XG5cbiAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBtZXRob2Q6IE1ldGhvZFR5cGUpIHtcbiAgICB0aGlzLm1ldGhvZHMuc2V0KG5hbWUsIG1ldGhvZCk7XG4gIH1cblxuICBwcml2YXRlIG1lc3NhZ2VIYW5kbGVyKG1zZzogTWV0aG9kQ2FsbFR5cGUsIGNhbGxlcjogQ2FsbGVyKSB7XG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5tZXRob2RzLmdldChtc2cubWV0aG9kKTtcblxuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlZ2lzdGVyZWQgbWV0aG9kIGNhbGw6ICcgKyBtc2cubWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kLmNhbGwoY2FsbGVyLCAuLi5tc2cucGFyYW1zKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vb250aW8vb250b2xvZ3ktZGFwaS9ibG9iL21hc3Rlci9zcmMvcnBjL3R1bm5lbC50c1xuICovXG5pbXBvcnQgeyBSdW50aW1lIH0gZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsLXRzJztcblxuZXhwb3J0IHR5cGUgQ2FsbGJhY2tUeXBlID0gKFxuICBtc2c6IFJlcXVlc3QsXG4gIHNlbmRlcjogUnVudGltZS5NZXNzYWdlU2VuZGVyXG4pID0+IFByb21pc2U8UmVzcG9uc2U+IHwgdm9pZDtcbmV4cG9ydCB0eXBlIFBvc3RNZXNzYWdlVHlwZSA9IChtc2c6IFJlcXVlc3QpID0+IFByb21pc2U8UmVzcG9uc2U+O1xuXG5leHBvcnQgdHlwZSBBZGRMaXN0ZW5lclR5cGUgPSAoY2FsbGJhY2s6IENhbGxiYWNrVHlwZSkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBDYWxsZXIge1xuICB1cmw/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBNZXNzYWdlSGFuZGxlclR5cGUgPSAobXNnOiBhbnksIGNhbGxlcjogQ2FsbGVyKSA9PiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdCB7XG4gIHBheWxvYWQ6IGFueTtcbiAgc291cmNlOiBzdHJpbmc7XG4gIGRlc3RpbmF0aW9uOiBzdHJpbmc7XG4gIHR5cGU6ICdjYXNwZXJsYWJzLXBsdWdpbic7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2U8VFlQRSA9IGFueT4ge1xuICBkZXN0aW5hdGlvbjogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbiAgcGF5bG9hZD86IFRZUEU7XG4gIHNvdXJjZTogc3RyaW5nO1xuICB0eXBlOiAnY2FzcGVybGFicy1wbHVnaW4nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1bm5lbE9wdGlvbnMge1xuICBzb3VyY2U6IHN0cmluZztcbiAgZGVzdGluYXRpb246IHN0cmluZztcbiAgcG9zdE1lc3NhZ2U/OiBQb3N0TWVzc2FnZVR5cGU7XG4gIGFkZExpc3RlbmVyPzogQWRkTGlzdGVuZXJUeXBlO1xuICBtZXNzYWdlSGFuZGxlcj86IE1lc3NhZ2VIYW5kbGVyVHlwZTtcbiAgbG9nTWVzc2FnZXM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgVHVubmVsPFQgPSBhbnk+IHtcbiAgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBkZXN0aW5hdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHBvc3RNZXNzYWdlPzogUG9zdE1lc3NhZ2VUeXBlO1xuICBwcml2YXRlIG1lc3NhZ2VIYW5kbGVyPzogTWVzc2FnZUhhbmRsZXJUeXBlO1xuXG4gIHByaXZhdGUgbG9nTWVzc2FnZXM/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR1bm5lbE9wdGlvbnMpIHtcbiAgICB0aGlzLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zdE1lc3NhZ2UgPSBvcHRpb25zLnBvc3RNZXNzYWdlO1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPSBvcHRpb25zLm1lc3NhZ2VIYW5kbGVyO1xuICAgIHRoaXMubG9nTWVzc2FnZXMgPSBvcHRpb25zLmxvZ01lc3NhZ2VzO1xuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5hZGRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBvcHRpb25zLnBvc3RNZXNzYWdlID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRWl0aGVyIGFkZExpc3RlbmVyIG9yIHBvc3RNZXNzYWdlIG11c3QgYmUgcHJlc2VudC4nKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYWRkTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG9wdGlvbnMubWVzc2FnZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ01lc3NhZ2VIYW5kbGVyIG11c3QgYmUgc3BlY2lmaWVkIGlmIGFkZExpc3RlbmVyIHByZXNlbnQuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmFkZExpc3RlbmVyKHRoaXMub25NZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNlbmQ8UkVTVUxUPihtc2c6IFQpOiBQcm9taXNlPFJFU1VMVD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3QgPSB7XG4gICAgICBkZXN0aW5hdGlvbjogdGhpcy5kZXN0aW5hdGlvbixcbiAgICAgIHBheWxvYWQ6IG1zZyxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICB0eXBlOiAnY2FzcGVybGFicy1wbHVnaW4nXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBvc3RNZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zdE1lc3NhZ2Ugd2FzIG5vdCBzcGVjaWZpZWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9nTWVzc2FnZXMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUdW5uZWw6ICgke3RoaXMuc291cmNlfSk6IFNlbmRpbmdgLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShtc2csIG51bGwsICcgICcpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZTxSRVNVTFQ+ID0gYXdhaXQgdGhpcy5wb3N0TWVzc2FnZShyZXF1ZXN0KTtcblxuICAgIGlmIChyZXNwb25zZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UucGF5bG9hZCBhcyBSRVNVTFQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1lc3NhZ2UoXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBzZW5kZXI6IFJ1bnRpbWUuTWVzc2FnZVNlbmRlclxuICApOiBQcm9taXNlPFJlc3BvbnNlPiB8IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHJlcXVlc3QuZGVzdGluYXRpb24gPT09IHRoaXMuc291cmNlICYmXG4gICAgICByZXF1ZXN0LnNvdXJjZSA9PT0gdGhpcy5kZXN0aW5hdGlvblxuICAgICkge1xuICAgICAgbGV0IHByb21pc2U6IFByb21pc2U8YW55PjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZUhhbmRsZXIgd2FzIG5vdCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb2dNZXNzYWdlcykge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBUdW5uZWw6ICgke3RoaXMuc291cmNlfSk6IFJlY2VpdmluZ2AsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBheWxvYWQsIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbGxlcjogQ2FsbGVyID0ge1xuICAgICAgICAgIGlkOiBzZW5kZXIuaWQsXG4gICAgICAgICAgdXJsOiBzZW5kZXIudXJsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLm1lc3NhZ2VIYW5kbGVyKHJlcXVlc3QucGF5bG9hZCwgY2FsbGVyKTtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHJlcXVlc3Quc291cmNlLFxuICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxuICAgICAgICAgICAgc291cmNlOiByZXF1ZXN0LmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgdHlwZTogJ2Nhc3BlcmxhYnMtcGx1Z2luJ1xuICAgICAgICAgIH0gYXMgUmVzcG9uc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiByZXF1ZXN0LnNvdXJjZSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgc291cmNlOiByZXF1ZXN0LmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgdHlwZTogJ2Nhc3BlcmxhYnMtcGx1Z2luJ1xuICAgICAgICAgIH0gYXMgUmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==