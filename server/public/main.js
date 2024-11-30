(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-activity/component */ "./src/app/main-activity/component.ts");




var routes = [
    { path: "", component: _main_activity_component__WEBPACK_IMPORTED_MODULE_3__["MainActivityComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-chat-window></app-chat-window>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "lumos";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/ng2-nouislider.es5.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var overlayscrollbars_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! overlayscrollbars-ngx */ "./node_modules/overlayscrollbars-ngx/dist/overlayscrollbars-ngx.esm.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/message */ "./src/app/models/message.ts");
/* harmony import */ var _models_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./models/config */ "./src/app/models/config.ts");
/* harmony import */ var _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _main_activity_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main-activity/component */ "./src/app/main-activity/component.ts");
/* harmony import */ var _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/chat-window/chat-window.component */ "./src/app/components/chat-window/chat-window.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");

// library











// local











// const config: SocketIoConfig = {
//   url: DeploymentConfig.SERVER_URL,
//   options: { timeout: 60000, autoConnect: false },
// };
var config = {
    // url: 'http://localhost:3000', 
    url: _models_config__WEBPACK_IMPORTED_MODULE_15__["DeploymentConfig"].SERVER_URL,
    options: {
        // transports: ['websocket'],
        autoConnect: false,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
        timeout: 60000
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _main_activity_component__WEBPACK_IMPORTED_MODULE_20__["MainActivityComponent"],
                _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_21__["ChatWindowComponent"],
            ],
            imports: [
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(),
                overlayscrollbars_ngx__WEBPACK_IMPORTED_MODULE_11__["OverlayscrollbarsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_8__["AngularSplitModule"].forRoot(),
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config),
            ],
            providers: [
                _models_config__WEBPACK_IMPORTED_MODULE_15__["SessionPage"],
                _models_message__WEBPACK_IMPORTED_MODULE_14__["Message"],
                _main_activity_component__WEBPACK_IMPORTED_MODULE_20__["MainActivityComponent"],
                _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_16__["HttpErrorHandler"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_17__["MessageService"],
                _services_socket_service__WEBPACK_IMPORTED_MODULE_18__["ChatService"],
                _services_utils_service__WEBPACK_IMPORTED_MODULE_19__["UtilsService"],
                _services_chat_service__WEBPACK_IMPORTED_MODULE_22__["AiChatService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-window/chat-window.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 触发按钮 -->\r\n<button class=\"chat-trigger\" (click)=\"toggleChat()\" *ngIf=\"!isVisible\">\r\n\r\n  <i class=\"fas fa-robot\"></i>\r\n</button>\r\n\r\n<!-- 聊天窗口 -->\r\n<div class=\"chat-window\" \r\n     [class.visible]=\"isVisible\"\r\n     [class.minimized]=\"isMinimized\"\r\n     [style.left.px]=\"position.x\"\r\n     [style.top.px]=\"position.y\"\r\n     #chatWindow>\r\n\r\n  <!-- 聊天窗口头部 -->\r\n  <div class=\"chat-header\" \r\n     (mousedown)=\"startDragging($event)\"\r\n     #dragHandle>\r\n  <span class=\"title\">AI Assistant</span>\r\n  <div class=\"controls\">\r\n      <button class=\"minimize-btn\" (click)=\"minimizeChat()\">−</button>\r\n      <button class=\"close-btn\" (click)=\"closeChat()\">×</button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 聊天内容区域 -->\r\n  <!-- <div class=\"chat-messages\" #scrollContainer>\r\n    <div *ngFor=\"let message of messages\" \r\n         [class.user-message]=\"message.isUser\"\r\n         [class.error-message]=\"message.isError\"\r\n         class=\"message\">\r\n      {{ message.content }}\r\n    </div>\r\n  </div> -->\r\n  <div class=\"chat-messages\" #scrollContainer>\r\n    <div *ngFor=\"let message of messages\" class=\"message\"\r\n         [class.user-message]=\"message.isUser\"\r\n         [class.error-message]=\"message.isError\">\r\n      <div class=\"avatar-circle\">\r\n        {{ message.isUser ? 'Me' : 'AI' }}\r\n      </div>\r\n      <div class=\"message-content\">\r\n        <div class=\"message-text\">{{ message.content }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 输入区域 -->\r\n  <div class=\"chat-input\">\r\n    <textarea [(ngModel)]=\"userInput\" \r\n              placeholder=\"输入消息...\"\r\n              (keyup.enter)=\"sendMessage()\"></textarea>\r\n    <button (click)=\"sendMessage()\" \r\n            [disabled]=\"isSending\">发送</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/chat-window/chat-window.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-trigger {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #4a90e2;\n  color: white;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  transition: transform 0.2s;\n}\n.chat-trigger i {\n  font-size: 24px;\n}\n.chat-trigger:hover {\n  transform: scale(1.1);\n}\n.chat-button {\n  position: fixed;\n  right: -25px;\n  bottom: 20%;\n  width: 50px;\n  height: 50px;\n  border-radius: 50% 0 0 50%;\n  background: rgba(74, 144, 226, 0.6);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  transition: all 0.3s ease;\n  opacity: 0.88;\n  padding-right: 25px;\n}\n.chat-button i {\n  font-size: 24px;\n  transition: transform 0.3s ease;\n  margin-left: -10px;\n}\n.chat-button:hover {\n  right: 0;\n  opacity: 0.8;\n  background: rgba(74, 144, 226, 0.8);\n}\n.chat-button.active {\n  right: 0;\n  opacity: 1;\n  background: rgb(74, 144, 226);\n  border-radius: 50%;\n}\n.chat-window {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  width: 400px;\n  height: 600px;\n  background: rgb(255, 255, 255);\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: none;\n  flex-direction: column;\n  z-index: 1000;\n  opacity: 1;\n}\n.chat-window.visible {\n  display: flex;\n}\n.chat-window.minimized {\n  height: 40px;\n  overflow: hidden;\n}\n.chat-header {\n  padding: 10px 15px;\n  background: #4a90e2;\n  color: white;\n  border-radius: 8px 8px 0 0;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.chat-header .title {\n  font-weight: 500;\n}\n.chat-header .controls {\n  display: flex;\n  gap: 5px;\n}\n.chat-header .controls button {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  border-radius: 4px;\n}\n.chat-header .controls button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.chat-header .controls button.minimize-btn {\n  font-size: 20px;\n}\n.chat-header .controls button.close-btn {\n  font-size: 20px;\n}\n.chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  opacity: 1;\n}\n.message {\n  display: flex;\n  gap: 10px;\n  margin: 10px 0;\n  max-width: 100%;\n}\n.message .avatar-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  flex-shrink: 0;\n  color: white;\n}\n.message .message-content {\n  flex: 1;\n  max-width: calc(100% - 42px);\n}\n.message .message-content .message-text {\n  padding: 8px 12px;\n  border-radius: 12px;\n  word-wrap: break-word;\n}\n.message.user-message {\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n}\n.message.user-message .avatar-circle {\n  background-color: #4a90e2;\n}\n.message.user-message .message-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.message.user-message .message-content .message-text {\n  background-color: #4a90e2;\n  color: white;\n}\n.message:not(.user-message) .avatar-circle {\n  background-color: #7d7b7b;\n}\n.message:not(.user-message) .message-text {\n  background-color: #ffffff;\n  color: #333333;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.message.error-message .message-text {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.chat-input {\n  padding: 15px;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 10px;\n}\n.chat-input textarea {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  resize: none;\n  height: 36px;\n  line-height: 20px;\n}\n.chat-input textarea:focus {\n  outline: none;\n  border-color: #4a90e2;\n}\n.chat-input button {\n  padding: 8px 16px;\n  background: #4a90e2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.chat-input button:hover {\n  background: #357abd;\n}\n.chat-input button:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXdpbmRvdy9EOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXGRldlxcdGVzdF9sdW1vc1xcTHVtb3NcXGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhdC13aW5kb3dcXGNoYXQtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0FDREo7QUR1REE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNwREY7QURzREU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ3BESjtBRHdERTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUN0REo7QUQwREU7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUN4REo7QUQ0REU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDekRKO0FEMkRJO0VBQ0UsYUFBQTtBQ3pETjtBRDRESTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQzFETjtBRDhERTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUMzREo7QUQ2REk7RUFDRSxnQkFBQTtBQzNETjtBRDhESTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FDNUROO0FEOERNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDNURSO0FEOERRO0VBQ0UsMENBQUE7QUM1RFY7QUQrRFE7RUFDRSxlQUFBO0FDN0RWO0FEZ0VRO0VBQ0UsZUFBQTtBQzlEVjtBRG9FRTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2pFSjtBRG9FRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNqRUo7QURtRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNqRU47QURvRUk7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7QUNsRU47QURvRU07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNsRVI7QURzRUk7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0FDcEVOO0FEc0VNO0VBQ0UseUJBQUE7QUNwRVI7QUR1RU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ3JFUjtBRHVFUTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ3JFVjtBRDJFTTtFQUNFLHlCQUFBO0FDekVSO0FENEVNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMxRVI7QUQrRU07RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUM3RVI7QURrRkU7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQy9FSjtBRGlGSTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUMvRU47QURpRk07RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUMvRVI7QURtRkk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNqRk47QURtRk07RUFDRSxtQkFBQTtBQ2pGUjtBRG9GTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNsRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g6Kem5Y+R5oyJ6ZKu5qC35byPXHJcbi5jaGF0LXRyaWdnZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjNGE5MGUyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIC5jaGF0LXRyaWdnZXIge1xyXG4vLyAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAvLyByaWdodDogMjBweDtcclxuLy8gICAvLyBib3R0b206IDIwcHg7XHJcbi8vICAgLy8gcGFkZGluZzogMTBweCAyMHB4O1xyXG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICByaWdodDogLTI1cHg7IC8vIOWIneWni+S9jee9ruWcqOWxj+W5leWkllxyXG4vLyAgIGJvdHRvbTogMjAlO1xyXG4vLyAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgIGhlaWdodDogNTBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTsgLy8g5L+u5pS55Li65Y2K5ZyG5b2iXHJcbi8vICAgYmFja2dyb3VuZDogIzRhOTBlMjtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuLy8gICB6LWluZGV4OiAxMDAwO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbi8vICAgb3BhY2l0eTogMC44ODtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAyNXB4OyAvLyDkuLrlm77moIfnlZnlh7rnqbrpl7RcclxuXHJcbi8vICAgJjpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMzU3YWJkO1xyXG4vLyAgIH1cclxuLy8gICBpIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjRweDtcclxuLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogLTEwcHg7IC8vIOiwg+aVtOWbvuagh+S9jee9rlxyXG4vLyAgIH1cclxuICBcclxuLy8gICAvLyDpvKDmoIfmgqzlgZzml7bmu5Hlh7pcclxuLy8gICAmOmhvdmVyIHtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjgpO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAvLyDmv4DmtLvnirbmgIHvvIjogYrlpKnnqpflj6PmiZPlvIDml7bvvIlcclxuLy8gICAmLmFjdGl2ZSB7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMSk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8vIOaBouWkjeS4uuWchuW9olxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi5jaGF0LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAtMjVweDsgLy8g5Yid5aeL5L2N572u5Zyo5bGP5bmV5aSWXHJcbiAgYm90dG9tOiAyMCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlOyAvLyDkv67mlLnkuLrljYrlnIblvaJcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC42KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogMC44ODtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4OyAvLyDkuLrlm77moIfnlZnlh7rnqbrpl7RcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7IC8vIOiwg+aVtOWbvuagh+S9jee9rlxyXG4gIH1cclxuICBcclxuICAvLyDpvKDmoIfmgqzlgZzml7bmu5Hlh7pcclxuICAmOmhvdmVyIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOa/gOa0u+eKtuaAge+8iOiBiuWkqeeql+WPo+aJk+W8gOaXtu+8iVxyXG4gICYuYWN0aXZlIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLy8g5oGi5aSN5Li65ZyG5b2iXHJcbiAgfVxyXG4gIH1cclxuICBcclxuICAuY2hhdC13aW5kb3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICAmLnZpc2libGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLm1pbmltaXplZCB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNoYXQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0YTkwZTI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbnRyb2xzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiA1cHg7XHJcbiAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICYubWluaW1pemUtYnRuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJi5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2hhdC1tZXNzYWdlcyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICBcclxuICAgIC5hdmF0YXItY2lyY2xlIHtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDJweCk7XHJcbiAgXHJcbiAgICAgIC5tZXNzYWdlLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLnVzZXItbWVzc2FnZSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBcclxuICAgICAgLmF2YXRhci1jaXJjbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTkwZTI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tZXNzYWdlLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7ICAvLyDlj7Plr7npvZBcclxuICAgICAgICBcclxuICAgICAgICAubWVzc2FnZS10ZXh0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTkwZTI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOm5vdCgudXNlci1tZXNzYWdlKSB7XHJcbiAgICAgIC5hdmF0YXItY2lyY2xlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3YjdiO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWVzc2FnZS10ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyAgLy8g5re75YqgQUnmtojmga/nmoTmloflrZfpopzoibJcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7ICAvLyDorr7nva7lrZfkvZPlpKflsI9cclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyAgLy8g6K6+572u5a2X5L2T57KX57uGXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTsgIC8vIOiuvue9ruihjOmrmFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAubWVzc2FnZS10ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xyXG4gICAgICAgIGNvbG9yOiAjYzYyODI4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGF0LWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNGE5MGUyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgYmFja2dyb3VuZDogIzRhOTBlMjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzU3YWJkO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCIuY2hhdC10cmlnZ2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM0YTkwZTI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uY2hhdC10cmlnZ2VyIGkge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY2hhdC10cmlnZ2VyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2hhdC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAtMjVweDtcbiAgYm90dG9tOiAyMCU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC42KTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogMC44ODtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cbi5jaGF0LWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uY2hhdC1idXR0b246aG92ZXIge1xuICByaWdodDogMDtcbiAgb3BhY2l0eTogMC44O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC44KTtcbn1cbi5jaGF0LWJ1dHRvbi5hY3RpdmUge1xuICByaWdodDogMDtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiKDc0LCAxNDQsIDIyNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoYXQtd2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5jaGF0LXdpbmRvdy52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jaGF0LXdpbmRvdy5taW5pbWl6ZWQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jaGF0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZDogIzRhOTBlMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgY3Vyc29yOiBtb3ZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYXQtaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdC1oZWFkZXIgLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG59XG4uY2hhdC1oZWFkZXIgLmNvbnRyb2xzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jaGF0LWhlYWRlciAuY29udHJvbHMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmNoYXQtaGVhZGVyIC5jb250cm9scyBidXR0b24ubWluaW1pemUtYnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNoYXQtaGVhZGVyIC5jb250cm9scyBidXR0b24uY2xvc2UtYnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2hhdC1tZXNzYWdlcyB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubWVzc2FnZSAuYXZhdGFyLWNpcmNsZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZXNzYWdlIC5tZXNzYWdlLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDQycHgpO1xufVxuLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGVudCAubWVzc2FnZS10ZXh0IHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5tZXNzYWdlLnVzZXItbWVzc2FnZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLm1lc3NhZ2UudXNlci1tZXNzYWdlIC5hdmF0YXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhOTBlMjtcbn1cbi5tZXNzYWdlLnVzZXItbWVzc2FnZSAubWVzc2FnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLm1lc3NhZ2UudXNlci1tZXNzYWdlIC5tZXNzYWdlLWNvbnRlbnQgLm1lc3NhZ2UtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTkwZTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZXNzYWdlOm5vdCgudXNlci1tZXNzYWdlKSAuYXZhdGFyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDdiN2I7XG59XG4ubWVzc2FnZTpub3QoLnVzZXItbWVzc2FnZSkgLm1lc3NhZ2UtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ubWVzc2FnZS5lcnJvci1tZXNzYWdlIC5tZXNzYWdlLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2M2MjgyODtcbn1cblxuLmNoYXQtaW5wdXQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuLmNoYXQtaW5wdXQgdGV4dGFyZWEge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmNoYXQtaW5wdXQgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM0YTkwZTI7XG59XG4uY2hhdC1pbnB1dCBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZDogIzRhOTBlMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXQtaW5wdXQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM1N2FiZDtcbn1cbi5jaGF0LWlucHV0IGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chat-window/chat-window.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");



var ChatWindowComponent = /** @class */ (function () {
    // position = { x: 100, y: 100 };  // 初始位置
    // private isDragging = false;
    // private dragOffset = { x: 0, y: 0 };
    // @ViewChild('chatWindow') chatWindow: ElementRef;
    // @ViewChild('dragHandle') dragHandle: ElementRef;
    function ChatWindowComponent(aiChatService, ngZone, // 添加 NgZone
    changeDetectorRef // 添加这个
    ) {
        var _this = this;
        this.aiChatService = aiChatService;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.position = {
            x: (window.innerWidth - 300) / 2,
            y: (window.innerHeight - 700) / 2 // 400是窗口高度
        }; // 设置初始位置
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.hasBeenDragged = false; // 新增：标记是否被拖动过
        this.isSending = false;
        this.isVisible = false;
        this.isMinimized = false;
        this.messages = [];
        this.userInput = '';
        // 添加全局鼠标事件监听
        this.ngZone.runOutsideAngular(function () {
            window.addEventListener('mousemove', _this.onMouseMove.bind(_this));
            window.addEventListener('mouseup', _this.stopDragging.bind(_this));
        });
    }
    ChatWindowComponent.prototype.toggleChat = function () {
        if (this.isMinimized) {
            this.isMinimized = false;
        }
        else {
            this.isVisible = !this.isVisible;
            if (!this.hasBeenDragged && this.isVisible) {
                // 重置到屏幕中间
                this.position = {
                    x: (window.innerWidth - 300) / 2,
                    y: (window.innerHeight - 700) / 2
                };
            }
        }
    };
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 连接到服务器
        this.aiChatService.connectToSocket();
        // 监听连接状态
        this.connectionSubscription = this.aiChatService.getConnectionStatus()
            .subscribe(function (isConnected) {
            console.log('聊天服务器连接状态:', isConnected);
            if (!isConnected) {
                _this.messages.push({
                    content: '与服务器的连接已断开，请稍后重试。',
                    isUser: false,
                    isError: true
                });
            }
        });
    };
    // toggleChat() {
    //   if (this.isMinimized) {
    //     this.isMinimized = false;
    //   } else {
    //     this.isVisible = !this.isVisible;
    //     if (!this.hasBeenDragged && this.isVisible) {
    //       // 重置位置到默认位置
    //       this.position = { x: 0, y: 0 };
    //     }
    //   }
    // }
    ChatWindowComponent.prototype.startDragging = function (event) {
        if (event.target === this.dragHandle.nativeElement) {
            this.isDragging = true;
            var rect = this.chatWindow.nativeElement.getBoundingClientRect();
            if (!this.hasBeenDragged) {
                // 第一次拖动时，设置初始位置
                this.position = {
                    x: rect.left,
                    y: rect.top
                };
                this.hasBeenDragged = true;
            }
            this.dragOffset = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
            event.preventDefault();
        }
    };
    ChatWindowComponent.prototype.onMouseMove = function (event) {
        var _this = this;
        if (this.isDragging) {
            this.ngZone.run(function () {
                _this.position = {
                    x: event.clientX - _this.dragOffset.x,
                    y: event.clientY - _this.dragOffset.y
                };
            });
        }
    };
    ChatWindowComponent.prototype.stopDragging = function () {
        this.isDragging = false;
    };
    ChatWindowComponent.prototype.ngOnDestroy = function () {
        // 清理订阅
        if (this.connectionSubscription) {
            this.connectionSubscription.unsubscribe();
        }
        // 断开连接
        this.aiChatService.disconnectFromSocket();
    };
    // startDragging(event: MouseEvent) {
    //   if (event.target === this.dragHandle.nativeElement) {
    //     this.isDragging = true;
    //     const rect = this.chatWindow.nativeElement.getBoundingClientRect();
    //     this.dragOffset = {
    //       x: event.clientX - rect.left,
    //       y: event.clientY - rect.top
    //     };
    //     event.preventDefault();
    //   }
    // }
    // private onMouseMove(event: MouseEvent) {
    //   if (this.isDragging) {
    //     this.ngZone.run(() => {
    //       this.position = {
    //         x: event.clientX - this.dragOffset.x,
    //         y: event.clientY - this.dragOffset.y
    //       };
    //     });
    //   }
    // }
    // private stopDragging() {
    //   this.isDragging = false;
    // }
    // ngAfterViewChecked() {
    //   this.scrollToBottom();
    // }
    // toggleChat() {
    //   if (this.isMinimized) {
    //     this.isMinimized = false;
    //   } else {
    //     this.isVisible = !this.isVisible;
    //   }
    // }
    ChatWindowComponent.prototype.minimizeChat = function () {
        this.isMinimized = true;
    };
    ChatWindowComponent.prototype.closeChat = function () {
        this.isVisible = false;
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var userMessage, response_1, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userInput.trim() || this.isSending)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.isSending = true;
                        userMessage = this.userInput;
                        // 添加用户消息
                        this.messages.push({
                            content: userMessage,
                            isUser: true
                        });
                        this.userInput = '';
                        return [4 /*yield*/, this.aiChatService.sendMessage(userMessage)];
                    case 2:
                        response_1 = _a.sent();
                        // 添加AI响应
                        this.ngZone.run(function () {
                            _this.messages.push({
                                content: response_1,
                                isUser: false
                            });
                            _this.changeDetectorRef.detectChanges(); // 强制检测变更
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        console.error('发送消息失败:', error_1);
                        // 添加错误消息
                        this.ngZone.run(function () {
                            _this.messages.push({
                                content: typeof error_1 === 'string' ? error_1 : error_1.message || '发送消息失败',
                                isUser: false,
                                isError: true,
                            });
                            _this.changeDetectorRef.detectChanges(); // 强制检测变更
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        this.isSending = false;
                        this.ngZone.run(function () { });
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        try {
            this.scrollContainer.nativeElement.scrollTop =
                this.scrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatWindowComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatWindow'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatWindowComponent.prototype, "chatWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dragHandle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatWindowComponent.prototype, "dragHandle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollContainer'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatWindowComponent.prototype, "scrollContainer", void 0);
    ChatWindowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-window',
            template: __webpack_require__(/*! ./chat-window.component.html */ "./src/app/components/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.scss */ "./src/app/components/chat-window/chat-window.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["AiChatService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] // 添加这个
        ])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/main-activity/component.html":
/*!**********************************************!*\
  !*** ./src/app/main-activity/component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Navigation Bar -->\r\n<nav class=\"navbar navbar-light bg-light\">\r\n  <div class=\"navbar-collapse collapse show justify-content-between align-items-center w-100\" id=\"collapsingNavbar2\">\r\n    <div class=\"navbar-brand\">Lumos</div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- The Interface -->\r\n<div>\r\n  <as-split direction=\"horizontal\" class=\"border-light h-full\" restrictMove=\"true\">\r\n    <!-- COLUMN: Data and Attributes -->\r\n    <as-split-area [size]=\"20\">\r\n      <as-split direction=\"vertical\" restrictMove=\"true\">\r\n        <!-- ROW: Dataset Selector -->\r\n        <as-split-area [size]=\"15\">\r\n          <div class=\"list-group h-100\" style=\"overflow: auto\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header class=\"data-header\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5 class=\"display-inline\">\r\n                        <span class=\"badge badge-secondary\">Data</span>\r\n                      </h5>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content: Dataset Select -->\r\n              <div class=\"m-t-sm\">\r\n                <form class=\"form-inline display-inline\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\"><i class=\"fa fa-table\"></i></div>\r\n                      </div>\r\n                      <ng-select [disabled]=\"true\" name=\"datasetSelect\" appendTo=\"body\" [clearable]=\"false\" [searchable]=\"false\"\r\n                        [ngStyle]=\"{ width: getSelectWidth(objectKeys(appConfig)) }\" [(ngModel)]=\"global.appMode\"\r\n                        (change)=\"initLumos()\">\r\n                        <ng-option *ngFor=\"let s of objectKeys(appConfig)\" [value]=\"s\"> {{s}} </ng-option>\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </as-split-area>\r\n\r\n        <!-- ROW: Attribute Panel -->\r\n        <as-split-area [size]=\"85\">\r\n          <div class=\"list-group h-100\" style=\"overflow: auto\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header class=\"attributes-header\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5 class=\"display-inline\">\r\n                        <span class=\"badge badge-secondary\">Attributes</span>\r\n                      </h5>\r\n                    </td>\r\n                    <td class=\"float-right\">\r\n                      <button class=\"btn btn-light btn-sm\" (click)=\"toggleAttributePanelSettingsAccordion()\">\r\n                        <i class=\"fa fa-cog\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content: Settings -->\r\n              <div class=\"collapse\" id=\"collapseAttributeControls\">\r\n                <div class=\"m-sm\">\r\n                  <table style=\"border-collapse: separate; border-spacing: 8px 4px\">\r\n                    <tbody>\r\n                      <!-- Sort By -->\r\n                      <tr>\r\n                        <td style=\"float: right\">Sort by</td>\r\n                        <td>\r\n                          <ng-container *ngIf=\"global.appType == 'CONTROL'\">\r\n                            <ng-select name=\"attributeSortByModeSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                              [searchable]=\"false\"\r\n                              [ngStyle]=\"{ width: getSelectWidth('attributeControlSortByModes', 'sortByModeMapping') }\"\r\n                              (change)=\"onChangeAttributePanelSort($event)\"\r\n                              [(ngModel)]=\"userConfig['attributeSortByMode']\">\r\n                              <ng-option *ngFor=\"let atcsm of userConfig['attributeControlSortByModes']\" [value]=\"atcsm\"\r\n                                [innerHTML]=\"userConfig['sortByModeMapping'][atcsm]\">\r\n                              </ng-option>\r\n                            </ng-select>\r\n                          </ng-container>\r\n                          <ng-container *ngIf=\"global.appType !== 'CONTROL'\">\r\n                            <ng-select name=\"attributeSortByModeSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                              [searchable]=\"false\"\r\n                              [ngStyle]=\"{ width: getSelectWidth('attributeSortByModes', 'sortByModeMapping') }\"\r\n                              (change)=\"onChangeAttributePanelSort($event)\"\r\n                              [(ngModel)]=\"userConfig['attributeSortByMode']\">\r\n                              <ng-option *ngFor=\"let atsm of userConfig['attributeSortByModes']\" [value]=\"atsm\"\r\n                                [innerHTML]=\"userConfig['sortByModeMapping'][atsm]\">\r\n                              </ng-option>\r\n                            </ng-select>\r\n                          </ng-container>\r\n                        </td>\r\n                      </tr>\r\n\r\n                      <!-- Color Scale -->\r\n                      <tr *ngIf=\"global.appType != 'CONTROL'\">\r\n                        <td style=\"float: right\">Color Scale</td>\r\n                        <td>\r\n                          <ng-select name=\"attributeColorScaleSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                            [searchable]=\"false\"\r\n                            [ngStyle]=\"{ width: getSelectWidth('colorScales', 'colorScaleMapping') }\"\r\n                            [(ngModel)]=\"userConfig['attributeColorScale']\">\r\n                            <ng-option *ngFor=\"let atcs of userConfig['colorScales']\" [value]=\"atcs\">\r\n                              {{userConfig['colorScaleMapping'][atcs]}}\r\n                            </ng-option>\r\n                          </ng-select>\r\n                        </td>\r\n                      </tr>\r\n\r\n                      <!-- Color By -->\r\n                      <tr *ngIf=\"global.appType != 'CONTROL'\">\r\n                        <td style=\"float: right\">Color By</td>\r\n                        <td>\r\n                          <ng-select name=\"attributeColorByModeSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                            [searchable]=\"false\" (change)=\"onChangeAttributeColorByMode($event)\"\r\n                            [ngStyle]=\"{ width: getSelectWidth('colorByModes', 'colorByModeMapping') }\"\r\n                            [(ngModel)]=\"userConfig['attributeColorByMode']\">\r\n                            <ng-option *ngFor=\"let atcm of userConfig['colorByModes']\" [value]=\"atcm\">\r\n                              {{userConfig['colorByModeMapping'][atcm]}}\r\n                            </ng-option>\r\n                          </ng-select>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Content: Color Legend -->\r\n              <div *ngIf=\"global.appType !== 'CONTROL' && userConfig['attributeColorScale'] == 'Sequential'\">\r\n                <div class=\"text-center\"><span class=\"title\">Your Focus</span></div>\r\n                <table class=\"w-100 m-b-md\">\r\n                  <tr>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-right: 8px; font-size: 0.9rem\">\r\n                      Less\r\n                    </td>\r\n                    <td class=\"w-100\">\r\n                      <div class=\"sequential-color-legend\"></div>\r\n                    </td>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-left: 8px; font-size: 0.9rem\">\r\n                      More\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div *ngIf=\"global.appType !== 'CONTROL' && userConfig['attributeColorScale'] == 'Divergent'\">\r\n                <div class=\"text-center\"><span class=\"title\">Your Focus</span></div>\r\n                <table class=\"w-100 m-b-md\">\r\n                  <tr>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-right: 8px; font-size: 0.9rem\">\r\n                      Less\r\n                    </td>\r\n                    <td class=\"w-100\">\r\n                      <div class=\"divergent-color-legend\"></div>\r\n                    </td>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-left: 8px; font-size: 0.9rem\">\r\n                      More\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n              <!-- Content: Attributes -->\r\n              <div class=\"accordion\" id=\"attributeaccordion\">\r\n                <div *ngFor=\"let attribute of customSortAttributePanel(appConfig[global.appMode].attributeList);\">\r\n                  <div class=\"card\">\r\n                    <!-- title=\"{{appConfig[global.appMode]['attributeInteracted'][attribute]}}\" -->\r\n                    <div class=\"card-header m-b-0\" [ngStyle]=\"styleAttributePanelCard(attribute)\"\r\n                      id=\"{{'attributeheading-' + appConfig[global.appMode]['attributes'][attribute]['cleaned']}}\"\r\n                      [attr.data-target]=\"'#attributecollapse-' + appConfig[global.appMode]['attributes'][attribute]['cleaned']\">\r\n                      <table class=\"w-100\">\r\n                        <tr>\r\n                          <td class=\"float-left\"\r\n                            *ngIf=\"appConfig[global.appMode].attributeDatatypeList['N'].indexOf(attribute) !== -1\">\r\n                            <span class=\"text-nowrap\"><i class=\"fa fa-font\"></i>&nbsp;&nbsp;{{attribute}}</span>\r\n                          </td>\r\n                          <td class=\"float-left\"\r\n                            *ngIf=\"appConfig[global.appMode].attributeDatatypeList['O'].indexOf(attribute) !== -1\">\r\n                            <span class=\"text-nowrap\"><i class=\"fa fa-font\"></i>&nbsp;&nbsp;{{attribute}}</span>\r\n                          </td>\r\n                          <td class=\"float-left\"\r\n                            *ngIf=\"appConfig[global.appMode].attributeDatatypeList['T'].indexOf(attribute) !== -1\">\r\n                            <span class=\"text-nowrap\"><i class=\"fa fa-calendar\"></i>&nbsp;&nbsp;{{attribute}}</span>\r\n                          </td>\r\n                          <td class=\"float-left\"\r\n                            *ngIf=\"appConfig[global.appMode].attributeDatatypeList['Q'].indexOf(attribute) !== -1\">\r\n                            <span class=\"text-nowrap\"><i class=\"fa fa-hashtag\"></i>&nbsp;&nbsp;{{attribute}}</span>\r\n                          </td>\r\n                          <td class=\"float-right text-right text-nowrap\" style=\"padding: 0\">\r\n                            <button [disabled]=\"appConfig[global.appMode]['attributes'][attribute]['filter']\"\r\n                              (click)=\"addFilter(attribute)\"\r\n                              [ngStyle]=\"{'color':getPanelCardTxtColor(attribute, 'attributes')}\"\r\n                              class=\"btn btn-sm p-0\">\r\n                              <i class=\"fa fa-filter\"></i>\r\n                            </button>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </as-split-area>\r\n\r\n    <!-- COLUMN: Filters, Encodings, and Configurations -->\r\n    <as-split-area [size]=\"20\">\r\n      <as-split direction=\"vertical\" class=\"border-light\" restrictMove=\"true\">\r\n        <!-- ROW: Encodings -->\r\n        <as-split-area [size]=\"34\">\r\n          <div class=\"list-group h-100\" style=\"overflow-x: hidden\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header class=\"encoding-header mb-sm\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5>\r\n                        <span class=\"badge badge-secondary\">Encoding</span>\r\n                      </h5>\r\n                    </td>\r\n                    <td class=\"float-right\">\r\n                      <button class=\"btn btn-light btn-sm\" (click)=\"swapXY()\">Swap XY</button>\r\n                      {{\" \"}}\r\n                      <button class=\"btn btn-light btn-sm\" (click)=\"resetAllEncodings()\">\r\n                        <i class=\"fa fa-times\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content -->\r\n              <div>\r\n                <form>\r\n                  <!-- OPTION: Chart Type -->\r\n                  <div class=\"row mb-sm\">\r\n                    <label class=\"col-sm-4 col-form-label\">Chart</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <ng-select name=\"chartSelect\" [searchable]=\"false\" appendTo=\"body\"\r\n                        [(ngModel)]=\"appConfig[global.appMode]['chartType']\" (change)=\"onChangeChart($event)\"\r\n                        (clear)=\"onChangeChart($event, true)\">\r\n                        <ng-option *ngFor=\"let c of userConfig['charts']\" [value]=\"c\">\r\n                          {{userConfig['chartMapping'][c]}}\r\n                        </ng-option>\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- OPTION: X Attribute -->\r\n                  <div class=\"row mb-sm\">\r\n                    <label class=\"col-sm-4 col-form-label\">X Axis</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <ng-select class=\"fa\" name=\"xVarSelect\" [searchable]=\"false\" appendTo=\"body\"\r\n                        [(ngModel)]=\"appConfig[global.appMode]['xVar']\" (change)=\"onChangeAttribute($event, 'x_axis')\"\r\n                        (clear)=\"onChangeAttribute($event, 'x_axis', true)\">\r\n                        <!-- Q => Quantitative -->\r\n                        <ng-container *ngFor=\"let x of appConfig[global.appMode].attributeDatatypeList['Q']\">\r\n                          <ng-option\r\n                            *ngIf=\"x !== appConfig[global.appMode].primaryKey && x !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"x\">\r\n                            &#xf292; {{x}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                        <!-- T => Temporal -->\r\n                        <ng-container *ngFor=\"let x of appConfig[global.appMode].attributeDatatypeList['T']\">\r\n                          <ng-option\r\n                            *ngIf=\"x !== appConfig[global.appMode].primaryKey && x !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"x\">\r\n                            &#xf133; {{x}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                        <!-- O => Ordinal -->\r\n                        <ng-container *ngFor=\"let x of appConfig[global.appMode].attributeDatatypeList['O']\">\r\n                          <ng-option\r\n                            *ngIf=\"x !== appConfig[global.appMode].primaryKey && x !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"x\">\r\n                            &#xf031; {{x}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                        <!-- N => Nominal -->\r\n                        <ng-container *ngFor=\"let x of appConfig[global.appMode].attributeDatatypeList['N']\">\r\n                          <ng-option\r\n                            *ngIf=\"x !== appConfig[global.appMode].primaryKey && x !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"x\">\r\n                            &#xf031; {{x}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- OPTION: Y Attribute -->\r\n                  <div class=\"row mb-sm\">\r\n                    <label class=\"col-sm-4 col-form-label\">Y Axis</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <ng-select class=\"fa\" name=\"yVarSelect\" [searchable]=\"false\" appendTo=\"body\"\r\n                        [(ngModel)]=\"appConfig[global.appMode]['yVar']\" (change)=\"onChangeAttribute($event, 'y_axis')\"\r\n                        (clear)=\"onChangeAttribute($event, 'y_axis', true)\">\r\n                        <!-- Q => Quantitative -->\r\n                        <ng-container *ngFor=\"let y of appConfig[global.appMode].attributeDatatypeList['Q']\">\r\n                          <ng-option\r\n                            *ngIf=\"y !== appConfig[global.appMode].primaryKey && y !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"y\">\r\n                            &#xf292; {{y}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                        <!-- T => Temporal -->\r\n                        <ng-container *ngFor=\"let y of appConfig[global.appMode].attributeDatatypeList['T']\">\r\n                          <ng-option\r\n                            *ngIf=\"y !== appConfig[global.appMode].primaryKey && y !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"y\">\r\n                            &#xf133; {{y}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                        <!-- O => Ordinal -->\r\n                        <ng-container *ngFor=\"let y of appConfig[global.appMode].attributeDatatypeList['O']\">\r\n                          <ng-option\r\n                            *ngIf=\"y !== appConfig[global.appMode].primaryKey && y !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"y\">\r\n                            &#xf031; {{y}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                        <!-- N => Nominal -->\r\n                        <ng-container *ngFor=\"let y of appConfig[global.appMode].attributeDatatypeList['N']\">\r\n                          <ng-option\r\n                            *ngIf=\"y !== appConfig[global.appMode].primaryKey && y !== appConfig[global.appMode].labelKey\"\r\n                            [value]=\"y\">\r\n                            &#xf031; {{y}}\r\n                          </ng-option>\r\n                        </ng-container>\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- OPTION: Aggregation -->\r\n                  <div *ngIf=\"appConfig[global.appMode]['xVar'] && appConfig[global.appMode]['yVar']\">\r\n                    <div *ngIf=\"['barchart', 'linechart'].indexOf(appConfig[global.appMode]['chartType']) !== -1\"\r\n                      class=\"row mb-sm\">\r\n                      <label class=\"col-sm-4 col-form-label\">Agg</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <ng-select name=\"aggTypeSelect\" [searchable]=\"false\" appendTo=\"body\"\r\n                          [(ngModel)]=\"appConfig[global.appMode]['aggType']\" (change)=\"onChangeAggregation($event)\"\r\n                          [clearable]=\"false\">\r\n                          <ng-option *ngFor=\"let a of userConfig['aggregations']\" [value]=\"a\">\r\n                            {{userConfig['aggregationMapping'][a]}}\r\n                          </ng-option>\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- OPTION: Color By -->\r\n                  <div *ngIf=\"global.appType != 'CONTROL'\" class=\"row mb-sm\">\r\n                    <label class=\"col-sm-4 col-form-label\">Color By</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <ng-select name=\"visColorByModeSelect\" [searchable]=\"false\" [clearable]=\"false\" appendTo=\"body\"\r\n                        [(ngModel)]=\"appConfig[global.appMode]['colorByMode']\" (change)=\"onChangeVISColorByMode($event)\"\r\n                        (clear)=\"onChangeColorByMode($event, true)\">\r\n                        <ng-option *ngFor=\"let m of userConfig['colorByModes']\" [value]=\"m\">\r\n                          {{userConfig['colorByModeMapping'][m]}}\r\n                        </ng-option>\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </as-split-area>\r\n\r\n        <!-- ROW: Filters -->\r\n        <as-split-area [size]=\"global.appType == 'ADMIN' ? 33 : 66\">\r\n          <div class=\"list-group h-100\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header class=\"filter-header\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5>\r\n                        <span class=\"badge badge-secondary\">Filters</span>\r\n                      </h5>\r\n                    </td>\r\n                    <td class=\"float-right\">\r\n                      <button class=\"btn btn-light btn-sm\" (click)=\"removeFilters()\">\r\n                        <i class=\"fa fa-times\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content -->\r\n              <div>\r\n                <form>\r\n                  <!-- OPTION: Nominal Attributes -->\r\n                  <div class=\"form-group\"\r\n                    *ngFor=\"let attribute of appConfig[global.appMode].attributeDatatypeList['N'];\">\r\n                    <ng-container *ngIf=\"appConfig[global.appMode]['attributes'][attribute]['filter']\">\r\n                      <span>\r\n                        <label class=\"form-label\" for=\"{{'select_' + attribute}}\">{{attribute}}</label>\r\n                        <button class=\"btn btn-light btn-sm float-right\" (click)=\"removeFilter(attribute)\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                        </button>\r\n                      </span>\r\n                      <ng-multiselect-dropdown name=\"{{'select_' + attribute}}\" [placeholder]=\"' '\" appendTo=\"body\"\r\n                        [data]=\"appConfig[global.appMode]['attributes'][attribute]['types']\"\r\n                        [(ngModel)]=\"appConfig[global.appMode]['attributes'][attribute]['filterModel']\"\r\n                        [settings]=\"userConfig['filterMultiselectDropdownSettings']\"\r\n                        (onSelect)=\"onChangeFilter(attribute, 'select')\"\r\n                        (onSelectAll)=\"onChangeFilter(attribute, 'selectAll')\"\r\n                        (onDeSelect)=\"onChangeFilter(attribute, 'deselect')\"\r\n                        (onDeSelectAll)=\"onChangeFilter(attribute, 'deselectAll')\">\r\n                      </ng-multiselect-dropdown>\r\n                      <hr class=\"separator\" />\r\n                    </ng-container>\r\n                  </div>\r\n\r\n                  <!-- OPTION: Quantitative Attributes -->\r\n                  <div class=\"form-group\"\r\n                    *ngFor=\"let attribute of appConfig[global.appMode].attributeDatatypeList['Q'];\">\r\n                    <ng-container *ngIf=\"appConfig[global.appMode]['attributes'][attribute]['filter']\">\r\n                      <span>\r\n                        <label class=\"form-label\" for=\"{{'slider_' + attribute}}\">{{attribute}}</label>\r\n                        <button class=\"btn btn-light btn-sm float-right\" (click)=\"removeFilter(attribute)\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                        </button>\r\n                      </span>\r\n                      <div class=\"q-filter-slider\">\r\n                        <nouislider name=\"{{'slider_' + attribute}}\" [config]=\"qFilterSliderConfig(attribute)\"\r\n                          [behaviour]=\"drag\" [connect]=\"true\"\r\n                          [(ngModel)]=\"appConfig[global.appMode]['attributes'][attribute]['filterModel']\"\r\n                          (change)=\"onChangeFilter(attribute, 'sliderChange')\">\r\n                        </nouislider>\r\n                        <hr class=\"separator\" />\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n\r\n                  <!-- OPTION: Temporal Attributes -->\r\n                  <div class=\"form-group\"\r\n                    *ngFor=\"let attribute of appConfig[global.appMode].attributeDatatypeList['T'];\">\r\n                    <ng-container *ngIf=\"appConfig[global.appMode]['attributes'][attribute]['filter']\">\r\n                      <span>\r\n                        <label class=\"form-label\" for=\"{{'slider_' + attribute}}\">{{attribute}}</label>\r\n                        <button class=\"btn btn-light btn-sm float-right\" (click)=\"removeFilter(attribute)\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                        </button>\r\n                      </span>\r\n                      <div class=\"q-filter-slider\">\r\n                        <nouislider name=\"{{'slider_' + attribute}}\" [config]=\"{\r\n                            'pips': { mode: 'count', values: 3, density: 10 }\r\n                          }\" [behaviour]=\"drag\" [connect]=\"true\"\r\n                          [step]=\"appConfig[global.appMode]['attributes'][attribute]['step']\"\r\n                          [min]=\"appConfig[global.appMode]['attributes'][attribute]['min']\"\r\n                          [max]=\"appConfig[global.appMode]['attributes'][attribute]['max']\"\r\n                          [(ngModel)]=\"appConfig[global.appMode]['attributes'][attribute]['filterModel']\"\r\n                          (change)=\"onChangeFilter(attribute, 'sliderChange')\" [tooltips]=\"[ true, true ]\">\r\n                        </nouislider>\r\n                        <hr class=\"separator\" />\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </as-split-area>\r\n\r\n    <!-- COLUMN: Main VIS -->\r\n    <as-split-area [size]=\"global.appType !== 'CONTROL' ? 40 : 60\" class=\"w-100\">\r\n      <as-split direction=\"vertical\" restrictMove=\"true\" class=\"w-100\">\r\n        <!-- ROW: Plot Container -->\r\n        <as-split-area [size]=\"68\" style=\"position: relative\">\r\n          <article style=\"position: absolute; top: 0; left: 0; border: none; padding: 10px 0 0 10px\">\r\n            <header class=\"main-vis-header\">\r\n              <table class=\"w-100 m-b-0\">\r\n                <tr>\r\n                  <td class=\"p-0 m-0\">\r\n                    <h5 class=\"p-0 m-0\">\r\n                      <span class=\"badge badge-secondary\">Visualization</span>\r\n                    </h5>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </header>\r\n          </article>\r\n          <div id=\"plot_container\"></div>\r\n        </as-split-area>\r\n\r\n        <!-- ROW: Selected Object(s) -->\r\n        <as-split-area #selected_objects_container [size]=\"32\" style=\"overflow: hidden\">\r\n          <!-- Default Hover Table (for Scatter*/Strip Plots) -->\r\n          <div *ngIf=\"['dotplot', 'barchart', 'linechart'].indexOf(currentPlotInstance) === -1\" class=\"list-group h-100\"\r\n            style=\"overflow-x: hidden\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header class=\"details-header\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5>\r\n                        <span class=\"badge badge-secondary\">Details</span>\r\n                      </h5>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content -->\r\n              <div class=\"row single-table\">\r\n                <div *ngFor=\"let chunk of utilsService.chunkAttrArray(appConfig[global.appMode]);\"\r\n                  class=\"col-sm-6 attr-col\">\r\n                  <table>\r\n                    <tbody>\r\n                      <ng-container *ngFor=\"let attr of chunk\">\r\n                        <tr *ngIf=\"attr !== appConfig[global.appMode].labelKey\" class=\"attr-row\">\r\n                          <td>\r\n                            <span class=\"text-muted\">{{attr}}</span>\r\n                          </td>\r\n                          <td *ngIf=\"appConfig[global.appMode].attributeDatatypeList['Q'].indexOf(attr) !== -1\">\r\n                            <strong>{{utilsService.formatLargeNum(+appConfig[global.appMode]['hoveredObject'][attr])}}</strong>\r\n                          </td>\r\n                          <td *ngIf=\"appConfig[global.appMode].attributeDatatypeList['Q'].indexOf(attr) === -1\">\r\n                            <strong>{{appConfig[global.appMode]['hoveredObject'][attr]}}</strong>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n\r\n          <!-- Hover Table for Dot Plot and Bar/Line Charts -->\r\n          <div *ngIf=\"['dotplot', 'barchart', 'linechart'].indexOf(currentPlotInstance) !== -1\" class=\"list-group\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header #table_header class=\"details-header\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5>\r\n                        <span class=\"badge badge-secondary\">Details</span>\r\n                        &nbsp;\r\n                        <span class=\"text-muted\">{{getDetailsTableHeader()}}</span>\r\n                      </h5>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content -->\r\n              <overlay-scrollbars [options]=\"getDetailsTableScrollbarOptions()\" style=\"padding: 12px 0 0 12px\">\r\n                <div class=\"group-table\"\r\n                  [style.height.px]=\"selected_objects_container.offsetHeight - table_header.offsetHeight - 32\">\r\n                  <table class=\"text-nowrap\">\r\n                    <thead>\r\n                      <tr class=\"group-table-header\">\r\n                        <ng-container *ngFor=\"let attr of appConfig[global.appMode].attributeList\">\r\n                          <th *ngIf=\"attr !== appConfig[global.appMode].labelKey\">\r\n                            <strong>{{attr}}</strong>\r\n                          </th>\r\n                        </ng-container>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let dataPoint of objectValues(appConfig[global.appMode]['hoveredObjects']['points'])\"\r\n                        class=\"group-table-item\"\r\n                        [ngClass]=\"{'textLight': dataPoint['ratioTimesVisited'] >= 0.7, 'textDark': dataPoint['ratioTimesVisited'] < 0.7 }\"\r\n                        [style.background-color]=\"dataPoint['color']\" (mouseover)=\"mouseoverRow($event, dataPoint)\"\r\n                        (mouseout)=\"mouseoutRow($event, dataPoint)\">\r\n                        <ng-container *ngFor=\"let attr of appConfig[global.appMode].attributeList\">\r\n                          <td *ngIf=\"attr !== appConfig[global.appMode].labelKey\">\r\n                            <div style=\"text-align: right\"\r\n                              *ngIf=\"appConfig[global.appMode].attributeDatatypeList['Q'].indexOf(attr) !== -1\">\r\n                              {{utilsService.formatLargeNum(+dataPoint[attr])}}\r\n                            </div>\r\n                            <div style=\"text-align: left\"\r\n                              *ngIf=\"appConfig[global.appMode].attributeDatatypeList['N'].indexOf(attr) !== -1\">\r\n                              {{dataPoint[attr]}}\r\n                            </div>\r\n                            <div style=\"text-align: left\"\r\n                              *ngIf=\"appConfig[global.appMode].attributeDatatypeList['O'].indexOf(attr) !== -1\">\r\n                              {{dataPoint[attr]}}\r\n                            </div>\r\n                            <div style=\"text-align: right\"\r\n                              *ngIf=\"appConfig[global.appMode].attributeDatatypeList['T'].indexOf(attr) !== -1\">\r\n                              {{dataPoint[attr]}}\r\n                            </div>\r\n                          </td>\r\n                        </ng-container>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </overlay-scrollbars>\r\n            </article>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </as-split-area>\r\n\r\n    <!-- COLUMN: Awareness Panel -->\r\n    <as-split-area *ngIf=\"global.appType !== 'CONTROL'\" [size]=\"global.appType !== 'CONTROL' ? 20 : 0\">\r\n      <as-split direction=\"vertical\" class=\"border-light\" restrictMove=\"true\">\r\n        <!-- ROW: Awareness Panel -->\r\n        <as-split-area [size]=\"100\">\r\n          <div class=\"list-group h-100\">\r\n            <article class=\"list-group-item\">\r\n              <!-- Header -->\r\n              <header class=\"awareness-panel-header\">\r\n                <table class=\"w-100\">\r\n                  <tr>\r\n                    <td>\r\n                      <h5>\r\n                        <span class=\"badge badge-secondary\">Distribution</span>\r\n                      </h5>\r\n                    </td>\r\n                    <td class=\"float-right\">\r\n                      <button class=\"btn btn-light btn-sm\" (click)=\"toggleAwarenessPanelSettingsAccordion()\">\r\n                        <i class=\"fa fa-cog\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </header>\r\n\r\n              <!-- Content: Settings -->\r\n              <div class=\"collapse\" id=\"collapseAwarenessControls\">\r\n                <div class=\"m-sm\">\r\n                  <table style=\"border-collapse: separate; border-spacing: 8px 4px\">\r\n                    <tbody>\r\n                      <!-- Toggle Accordion -->\r\n                      <tr>\r\n                        <td style=\"float: right\">Open/Close</td>\r\n                        <td>\r\n                          <!-- Expand Accordion -->\r\n                          <button (click)=\"expandAccordion()\" class=\"btn btn-sm btn-light\">\r\n                            <i class=\"fa fa-chevron-down\"></i>\r\n                          </button>\r\n                          <!-- Collapse Accordion -->\r\n                          <button (click)=\"collapseAccordion()\" class=\"btn btn-sm btn-light\">\r\n                            <i class=\"fa fa-chevron-up\"></i>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n\r\n                      <!-- Sort By Mode -->\r\n                      <tr *ngIf=\"global.appType !== 'CONTROL'\">\r\n                        <td style=\"float: right\">Sort by</td>\r\n                        <td>\r\n                          <ng-select name=\"awarenessSortByModeSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                            [searchable]=\"false\"\r\n                            [ngStyle]=\"{ width: getSelectWidth('awarenessSortByModes', 'sortByModeMapping') }\"\r\n                            (change)=\"onChangeDistributionPanelSort($event)\"\r\n                            [(ngModel)]=\"userConfig['awarenessSortByMode']\">\r\n                            <ng-option *ngFor=\"let awsm of userConfig['awarenessSortByModes']\" [value]=\"awsm\"\r\n                              [innerHTML]=\"userConfig['sortByModeMapping'][awsm]\">\r\n                            </ng-option>\r\n                          </ng-select>\r\n                        </td>\r\n                      </tr>\r\n\r\n                      <!-- Awareness Mode -->\r\n                      <tr *ngIf=\"global.appType != 'CONTROL'\">\r\n                        <td style=\"float: right\">Mode</td>\r\n                        <td>\r\n                          <ng-select name=\"awarenessModeSelect\" appendTo=\"body\" [clearable]=\"false\" [searchable]=\"false\"\r\n                            [ngStyle]=\"{ width: getSelectWidth('awarenessModes') }\"\r\n                            [(ngModel)]=\"userConfig['awarenessMode']\" (change)=\"updateAwarenessPanel(null)\">\r\n                            <ng-option *ngFor=\"let am of userConfig['awarenessModes']\" [value]=\"am\"> {{am}} </ng-option>\r\n                          </ng-select>\r\n                        </td>\r\n                      </tr>\r\n\r\n                      <!-- Color Scale -->\r\n                      <tr *ngIf=\"global.appType != 'CONTROL'\">\r\n                        <td style=\"float: right\">Color Scale</td>\r\n                        <td>\r\n                          <ng-select name=\"awarenessColorScaleSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                            [searchable]=\"false\"\r\n                            [ngStyle]=\"{ width: getSelectWidth('colorScales', 'colorScaleMapping') }\"\r\n                            [(ngModel)]=\"userConfig['awarenessColorScale']\">\r\n                            <ng-option *ngFor=\"let awcs of userConfig['colorScales']\" [value]=\"awcs\">\r\n                              {{userConfig['colorScaleMapping'][awcs]}}\r\n                            </ng-option>\r\n                          </ng-select>\r\n                        </td>\r\n                      </tr>\r\n\r\n                      <!-- Interpolate Mode -->\r\n                      <tr *ngIf=\"global.appType != 'CONTROL'\">\r\n                        <td style=\"float: right\">Interpolation</td>\r\n                        <td>\r\n                          <ng-select name=\"interpolateModeSelect\" appendTo=\"body\" [clearable]=\"false\"\r\n                            [searchable]=\"false\" [ngStyle]=\"{ width: getSelectWidth('interpolateModes') }\"\r\n                            [(ngModel)]=\"userConfig['interpolateMode']\" (change)=\"updateAwarenessPanel(null)\">\r\n                            <ng-option *ngFor=\"let im of userConfig['interpolateModes']\" [value]=\"im\">\r\n                              {{im}}\r\n                            </ng-option>\r\n                          </ng-select>\r\n                        </td>\r\n                      </tr>\r\n\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Content: Color Legend -->\r\n              <div *ngIf=\"global.appType !== 'CONTROL' && userConfig['awarenessColorScale'] == 'Sequential'\">\r\n                <br />\r\n                <div class=\"text-center\"><span class=\"title\">Data Distribution vs. Your Focus</span></div>\r\n                <table class=\"w-100 m-b-md\">\r\n                  <tr>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-right: 8px; font-size: 0.9rem\">\r\n                      Different\r\n                    </td>\r\n                    <td class=\"w-100\">\r\n                      <div class=\"sequential-color-legend\"></div>\r\n                    </td>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-left: 8px; font-size: 0.9rem\">\r\n                      Similar\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div *ngIf=\"global.appType !== 'CONTROL' && userConfig['awarenessColorScale'] == 'Divergent'\">\r\n                <br />\r\n                <div class=\"text-center\"><span class=\"title\">Data Distribution vs. Your Focus</span></div>\r\n                <table class=\"w-100 m-b-md\">\r\n                  <tr>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-right: 8px; font-size: 0.9rem\">\r\n                      Different\r\n                    </td>\r\n                    <td class=\"w-100\">\r\n                      <div class=\"divergent-color-legend\"></div>\r\n                    </td>\r\n                    <td class=\"title text-secondary\" style=\"white-space: nowrap; padding-left: 8px; font-size: 0.9rem\">\r\n                      Similar\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n              <!-- Content: Cards -->\r\n              <div class=\"awareness-panel-body\">\r\n                <!-- ROW: Bookmarks -->\r\n                <div id=\"bookmarkedAttributes\">\r\n                  <!-- Header -->\r\n                  <table class=\"w-100\">\r\n                    <tr>\r\n                      <td>\r\n                        <h6 class=\"title\">Pinned Attributes</h6>\r\n                      </td>\r\n                      <td class=\"float-right\">\r\n                        <button class=\"btn btn-light btn-sm\" (click)=\"resetAllBookmarks($event)\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n\r\n                  <!-- Content -->\r\n                  <div>\r\n                    <div *ngFor=\"let a of customSortAwarenessPanel(appConfig[global.appMode].attributeList);\">\r\n                      <div class=\"card card-border\"\r\n                        *ngIf=\"appConfig[global.appMode]['attributes'][a]['awarenessPanel']['isBookmarked']\">\r\n                        <div class=\"card-header card-header-hover m-b-0\" [ngStyle]=\"styleAwarenessPanelCard(a)\"\r\n                          [attr.aria-expanded]=\"true\">\r\n                          <table class=\"w-100\">\r\n                            <tr>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['N'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-font\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['O'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-font\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['T'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-calendar\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['Q'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-hashtag\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-right\">\r\n                                <button (click)=\"toggleBookmark(a, $event)\" class=\"btn btn-sm p-0\">\r\n                                  <i class=\"fas fa-bookmark\"></i>\r\n                                </button>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <div class=\"awarenessPlot\"\r\n                            id=\"{{'awarenessPlot-' + appConfig[global.appMode]['attributes'][a]['cleaned']}}\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <hr class=\"separator\" />\r\n\r\n                <!-- ROW: Others -->\r\n                <div id=\"otherAttributes\" class=\"mb-sm\">\r\n                  <!-- Header -->\r\n                  <table class=\"w-100\">\r\n                    <tr>\r\n                      <td>\r\n                        <h6 class=\"title\">Other Attributes</h6>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n\r\n                  <!-- Content -->\r\n                  <div class=\"accordion\" id=\"awarenessaccordion\">\r\n                    <div *ngFor=\"let a of customSortAwarenessPanel(appConfig[global.appMode].attributeList);\">\r\n                      <div class=\"card\"\r\n                        [ngClass]=\"{'card-border': this.appConfig[this.global.appMode]['attributes'][a]['awarenessPanel']['isExpanded']}\"\r\n                        *ngIf=\"!appConfig[global.appMode]['attributes'][a]['awarenessPanel']['isBookmarked']\">\r\n                        <div class=\"card-header card-header-hover m-b-0\"\r\n                          title=\"{{appConfig[global.appMode]['attributeBiasValues'][a]}}\"\r\n                          [ngStyle]=\"styleAwarenessPanelCard(a)\"\r\n                          id=\"{{'awarenessheading-' + appConfig[global.appMode]['attributes'][a]['cleaned']}}\"\r\n                          (click)=\"onClickAccordion(a)\"\r\n                          [attr.data-target]=\"'#awarenesscollapse-' + appConfig[global.appMode]['attributes'][a]['cleaned']\">\r\n                          <table class=\"w-100\">\r\n                            <tr>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['N'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-font\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['O'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-font\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['T'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-calendar\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-left\"\r\n                                *ngIf=\"appConfig[global.appMode].attributeDatatypeList['Q'].indexOf(a) !== -1\">\r\n                                <span class=\"text-nowrap\"><i class=\"fa fa-hashtag\"></i>&nbsp;&nbsp;{{a}}</span>\r\n                              </td>\r\n                              <td class=\"float-right\">\r\n                                &nbsp;<button (click)=\"toggleBookmark(a, $event)\" class=\"btn btn-sm p-0\">\r\n                                  <i class=\"fa-bookmark\"\r\n                                    [ngClass]=\"{'fas': appConfig[global['appMode']]['attributes'][a]['awarenessPanel']['isBookmarked'], 'far': !appConfig[global['appMode']]['attributes'][a]['awarenessPanel']['isBookmarked']}\"></i></button>&nbsp;\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </div>\r\n                        <div class=\"collapse\"\r\n                          id=\"{{'awarenesscollapse-' + appConfig[global.appMode]['attributes'][a]['cleaned']}}\">\r\n                          <div class=\"card-body\">\r\n                            <div class=\"awarenessPlot\"\r\n                              id=\"{{'awarenessPlot-' + appConfig[global.appMode]['attributes'][a]['cleaned']}}\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </as-split-area>\r\n  </as-split>\r\n</div>"

/***/ }),

/***/ "./src/app/main-activity/component.scss":
/*!**********************************************!*\
  !*** ./src/app/main-activity/component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Paddings */\n.p-xs {\n  padding: 4px;\n}\n.p-sm {\n  padding: 8px;\n}\n.p-0 {\n  padding: 0px !important;\n}\n/** Margins */\n.m-xs {\n  margin: 4px;\n}\n.m-sm {\n  margin: 8px;\n}\n.mb-sm {\n  margin-bottom: 8px;\n}\n.m-0 {\n  margin: 0px !important;\n}\n.m-b-0 {\n  margin-bottom: 0px !important;\n}\n.m-t-sm {\n  margin-top: 8px !important;\n}\n.m-t-md {\n  margin-top: 16px !important;\n}\n.m-b-md {\n  margin-bottom: 16px !important;\n}\n/** Multiple COLUMNS and ROWS */\n.h-full {\n  height: calc(100vh - 55px) !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.border-light {\n  border: 1px solid #dddddd !important;\n  border-radius: 3px;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.list-group-item {\n  border: none;\n  padding: 10px;\n}\n.list-group-item .title {\n  margin-top: 5px;\n  margin-bottom: 12px;\n  font-weight: 400;\n  color: black;\n}\n/** Color Legend */\n.sequential-color-legend {\n  height: 12px;\n  border-radius: 3px;\n  background-image: linear-gradient(to right, #eeeeee, #42a5f5);\n}\n.divergent-color-legend {\n  height: 12px;\n  border-radius: 3px;\n  background-image: linear-gradient(to right, #ef9a9a, #eeeeee, #a5d6a7);\n}\n/** ROW: Multiple Headers */\n.title {\n  font-weight: 500 !important;\n}\n/** ROW: Multiple Buttons */\n.float-right {\n  float: right;\n}\n/** ROW: Encodings */\n.display-inline {\n  display: inline-block;\n}\n/** ROW: Filters */\n.q-filter-slider nouislider {\n  margin-top: 3em;\n  margin-bottom: 2.5em;\n  margin-left: 5%;\n  width: 90%;\n  font-size: 0.8em;\n}\n/** ROW: Selected Objects */\n.single-table {\n  padding: 0.25em 1.25em 0 1.25em;\n}\n.single-table > *:first-child {\n  padding: 0px;\n}\n.single-table > *:last-child {\n  border-right: 0px;\n}\n.attr-col {\n  padding: 0 0 0 1%;\n  border-right: 2px solid #dddddd;\n}\n.attr-col > table {\n  width: 98%;\n}\n.attr-row {\n  border-bottom: 1px solid #dddddd;\n}\n.attr-row:last-child {\n  border: 0px;\n}\n.attr-row:hover {\n  background-color: #dddddd !important;\n}\n.attr-row > td {\n  border: 0px;\n  padding: 0 0.4em 0 0.2em !important;\n}\n.group-table {\n  font-size: 0.9em;\n  text-align: center;\n}\n.group-table > table {\n  border-collapse: collapse;\n  position: relative;\n}\n.group-table-item:hover {\n  color: black !important;\n  background-color: #dddddd !important;\n}\n.group-table-header > th {\n  background-color: white;\n  top: 0; /* Don't forget this, required for the stickiness */\n  position: sticky;\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.4);\n}\n.group-table-header > th,\n.group-table-item > td {\n  padding: 0 0.25em;\n  border-right: 1px solid #dddddd;\n}\n.group-table-header > th:last-child,\n.group-table-item > td:last-child {\n  border-right: 0px;\n}\n/** COLUMN: Awareness Panel */\n.card {\n  border: 0px;\n}\n.card-border {\n  border: 1px solid #333333;\n}\n.card-header {\n  background-color: white;\n  border-bottom: 0;\n  padding: 4px;\n}\n.card-header-hover:hover {\n  cursor: pointer;\n}\n/** CSS for dynamic DOM elements */\n::ng-deep {\n  /** Task Configuration Vis */\n  /** Plot */\n}\n::ng-deep body {\n  overflow: hidden !important;\n}\n::ng-deep .selected {\n  stroke: black;\n}\n::ng-deep .selected-item {\n  border-radius: 6px !important;\n  background: #999 !important;\n  border: 1px solid #ccc !important;\n  margin-bottom: 4px !important;\n  font-size: 0.9rem;\n}\n::ng-deep .dropdown-down,\n::ng-deep .dropdown-up {\n  border-left: 6px solid transparent !important;\n  border-right: 6px solid transparent !important;\n}\n::ng-deep .dropdown-down {\n  border-top: 8px solid #999 !important;\n}\n::ng-deep .dropdown-up {\n  border-bottom: 8px solid #999 !important;\n}\n::ng-deep .multiselect-item-checkbox input[type=checkbox] + div:before {\n  border: 2px solid #999 !important;\n}\n::ng-deep .multiselect-item-checkbox input[type=checkbox]:checked + div:before {\n  background: #999 !important;\n}\n::ng-deep .noUi-target {\n  height: 5px !important;\n}\n::ng-deep .noUi-base:hover {\n  cursor: pointer;\n}\n::ng-deep .noUi-connect {\n  height: 5px !important;\n  background: #999 !important;\n}\n::ng-deep .noUi-connect:hover {\n  cursor: pointer;\n}\n::ng-deep .noUi-handle {\n  width: 15px !important;\n  height: 20px !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n::ng-deep .noUi-handle:hover {\n  cursor: pointer;\n}\n::ng-deep .noUi-horizontal .noUi-handle {\n  top: -9px !important;\n  right: -8px !important;\n}\n::ng-deep .noUi-tooltip {\n  padding: 2px;\n  background: #999;\n  border: 1px solid #ccc;\n  color: white;\n}\n::ng-deep .noUi-tooltip:hover {\n  cursor: pointer;\n}\n::ng-deep .noUi-handle:after,\n::ng-deep .noUi-handle:before {\n  display: none;\n}\n::ng-deep .noUi-pips-horizontal {\n  padding: 4px;\n}\n::ng-deep .noUi-value-large {\n  top: 0px !important;\n}\n::ng-deep .noUi-marker-large {\n  height: 8px !important;\n}\n::ng-deep .taskConfigVis .line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n}\n::ng-deep .taskConfigVis circle {\n  fill: steelblue;\n  fill-opacity: 1;\n  stroke-width: 1.5px;\n  cursor: move;\n}\n::ng-deep .taskConfigVis .tick line {\n  stroke: #eeeeee;\n}\n::ng-deep .unsupported-text {\n  font-size: 1.1em;\n  font-weight: 500 !important;\n}\n::ng-deep .post text {\n  font-size: 0.7em;\n  font-weight: 800 !important;\n}\n::ng-deep .tick text,\n::ng-deep .tick text {\n  font-size: 0.9em;\n}\n::ng-deep .x.axis.title text,\n::ng-deep .y.axis.title text {\n  font-size: 1.15em;\n  font-weight: 800 !important;\n}\n::ng-deep .legend text {\n  font-size: 0.8em;\n  font-weight: 800 !important;\n}\n::ng-deep .deviant-scrollbars > .os-scrollbar-horizontal {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: 10;\n  height: 12px;\n}\n::ng-deep .deviant-scrollbars > .os-scrollbar-vertical {\n  left: 0;\n  bottom: 0;\n  right: auto;\n  top: 10;\n  width: 12px;\n}\n::ng-deep .deviant-scrollbars.os-host-scrollbar-horizontal-hidden > .os-scrollbar-vertical {\n  top: 0;\n}\n::ng-deep .deviant-scrollbars.os-host-scrollbar-vertical-hidden > .os-scrollbar-horizontal {\n  left: 0;\n}\n::ng-deep .os-theme-dark.os-theme-dark-edgy > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle {\n  border-radius: 0px;\n}\n::ng-deep .offset-scrollbars > .os-scrollbar-vertical {\n  top: 35px;\n}\n::ng-deep .offset-scrollbars > .os-scrollbar-horizontal {\n  left: 15px;\n}\n.separator {\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n#collapseAttributeControls,\n#collapseAwarenessControls {\n  background: #f5f5f5;\n}\n.textLight {\n  color: #ffffff !important;\n}\n.textDark {\n  color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1hY3Rpdml0eS9EOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXGRldlxcdGVzdF9sdW1vc1xcTHVtb3NcXGFwcC9zcmNcXGFwcFxcbWFpbi1hY3Rpdml0eVxcY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tYWN0aXZpdHkvY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDRUY7QURBQTtFQUNFLHVCQUFBO0FDR0Y7QURBQSxhQUFBO0FBQ0E7RUFDRSxXQUFBO0FDR0Y7QUREQTtFQUNFLFdBQUE7QUNJRjtBREZBO0VBQ0Usa0JBQUE7QUNLRjtBREhBO0VBQ0Usc0JBQUE7QUNNRjtBREpBO0VBQ0UsNkJBQUE7QUNPRjtBRExBO0VBQ0UsMEJBQUE7QUNRRjtBRE5BO0VBQ0UsMkJBQUE7QUNTRjtBRFBBO0VBQ0UsOEJBQUE7QUNVRjtBRFBBLCtCQUFBO0FBQ0E7RUFDRSxxQ0FBQTtBQ1VGO0FEUkE7RUFDRSxzQkFBQTtBQ1dGO0FEVEE7RUFDRSx1QkFBQTtBQ1lGO0FEVkE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDYUY7QURYQTtFQUNFLG1CQUFBO0FDY0Y7QURaQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDZUY7QURiQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2dCRjtBRGJBLGtCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtBQ2dCRjtBRGRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7QUNpQkY7QURkQSwyQkFBQTtBQUNBO0VBQ0UsMkJBQUE7QUNpQkY7QURkQSwyQkFBQTtBQUNBO0VBQ0UsWUFBQTtBQ2lCRjtBRGRBLG9CQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQ2lCRjtBRGRBLGtCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDaUJGO0FEZEEsMkJBQUE7QUFDQTtFQUNFLCtCQUFBO0FDaUJGO0FEZkE7RUFDRSxZQUFBO0FDa0JGO0FEaEJBO0VBQ0UsaUJBQUE7QUNtQkY7QURqQkE7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FDb0JGO0FEbEJBO0VBQ0UsVUFBQTtBQ3FCRjtBRG5CQTtFQUNFLGdDQUFBO0FDc0JGO0FEcEJBO0VBQ0UsV0FBQTtBQ3VCRjtBRHJCQTtFQUNFLG9DQUFBO0FDd0JGO0FEdEJBO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0FDeUJGO0FEdEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3lCRjtBRHZCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUMwQkY7QUR4QkE7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0FDMkJGO0FEekJBO0VBQ0UsdUJBQUE7RUFDQSxNQUFBLEVBQUEsbURBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FDNEJGO0FEMUJBOztFQUVFLGlCQUFBO0VBQ0EsK0JBQUE7QUM2QkY7QUQzQkE7O0VBRUUsaUJBQUE7QUM4QkY7QUQzQkEsNkJBQUE7QUFDQTtFQUNFLFdBQUE7QUM4QkY7QUQ1QkE7RUFDRSx5QkFBQTtBQytCRjtBRDdCQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDZ0NGO0FEOUJBO0VBRUUsZUFBQTtBQ2dDRjtBRDdCQSxrQ0FBQTtBQUNBO0VBb0dFLDRCQUFBO0VBZ0JBLFVBQUE7QUNsRkY7QURqQ0U7RUFDRSwyQkFBQTtBQ21DSjtBRGhDRTtFQUNFLGFBQUE7QUNrQ0o7QUQvQkU7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDaUNKO0FEOUJFOztFQUVFLDZDQUFBO0VBQ0EsOENBQUE7QUNnQ0o7QUQ3QkU7RUFDRSxxQ0FBQTtBQytCSjtBRDVCRTtFQUNFLHdDQUFBO0FDOEJKO0FEM0JFO0VBQ0UsaUNBQUE7QUM2Qko7QUQxQkU7RUFDRSwyQkFBQTtBQzRCSjtBRHpCRTtFQUNFLHNCQUFBO0FDMkJKO0FEeEJFO0VBQ0UsZUFBQTtBQzBCSjtBRHZCRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUN5Qko7QUR0QkU7RUFDRSxlQUFBO0FDd0JKO0FEckJFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUN1Qko7QURwQkU7RUFDRSxlQUFBO0FDc0JKO0FEbkJFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ3FCSjtBRGxCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ29CSjtBRGpCRTtFQUNFLGVBQUE7QUNtQko7QURoQkU7O0VBRUUsYUFBQTtBQ2tCSjtBRGZFO0VBQ0UsWUFBQTtBQ2lCSjtBRGRFO0VBQ0UsbUJBQUE7QUNnQko7QURiRTtFQUNFLHNCQUFBO0FDZUo7QURYRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDYUo7QURYRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDYUo7QURYRTtFQUNFLGVBQUE7QUNhSjtBRFRFO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBQ1dKO0FEVEU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FDV0o7QURURTs7RUFFRSxnQkFBQTtBQ1dKO0FEVEU7O0VBRUUsaUJBQUE7RUFDQSwyQkFBQTtBQ1dKO0FEVEU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FDV0o7QURSRTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDVUo7QURSRTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDVUo7QURQRTtFQUNFLE1BQUE7QUNTSjtBRE5FO0VBQ0UsT0FBQTtBQ1FKO0FETEU7RUFDRSxrQkFBQTtBQ09KO0FESkU7RUFDRSxTQUFBO0FDTUo7QURIRTtFQUNFLFVBQUE7QUNLSjtBRERBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDSUY7QUREQTs7RUFFRSxtQkFBQTtBQ0lGO0FEREE7RUFDRSx5QkFBQTtBQ0lGO0FEREE7RUFDRSx5QkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1hY3Rpdml0eS9jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBQYWRkaW5ncyAqL1xyXG4ucC14cyB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5wLXNtIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLnAtMCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKiBNYXJnaW5zICovXHJcbi5tLXhzIHtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG4ubS1zbSB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuLm1iLXNtIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLm0tMCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtc20ge1xyXG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLXQtbWQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLW1kIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKiBNdWx0aXBsZSBDT0xVTU5TIGFuZCBST1dTICovXHJcbi5oLWZ1bGwge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctMTAwIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5oLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci1saWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4udGV4dC1ub3dyYXAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSAudGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiogQ29sb3IgTGVnZW5kICovXHJcbi5zZXF1ZW50aWFsLWNvbG9yLWxlZ2VuZCB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWVlZWUsICM0MmE1ZjUpO1xyXG59XHJcbi5kaXZlcmdlbnQtY29sb3ItbGVnZW5kIHtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmOWE5YSwgI2VlZWVlZSwgI2E1ZDZhNyk7XHJcbn1cclxuXHJcbi8qKiBST1c6IE11bHRpcGxlIEhlYWRlcnMgKi9cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKiBST1c6IE11bHRpcGxlIEJ1dHRvbnMgKi9cclxuLmZsb2F0LXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi8qKiBST1c6IEVuY29kaW5ncyAqL1xyXG4uZGlzcGxheS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyoqIFJPVzogRmlsdGVycyAqL1xyXG4ucS1maWx0ZXItc2xpZGVyIG5vdWlzbGlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4vKiogUk9XOiBTZWxlY3RlZCBPYmplY3RzICovXHJcbi5zaW5nbGUtdGFibGUge1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAxLjI1ZW0gMCAxLjI1ZW07XHJcbn1cclxuLnNpbmdsZS10YWJsZSA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmc6IDBweDsgLy8gcmVtb3ZlIGxlZnQgcGFkZGluZyBvbiBmaXJzdCBjaGlsZFxyXG59XHJcbi5zaW5nbGUtdGFibGUgPiAqOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMHB4OyAvLyByZW1vdmUgZGl2aWRlciBvZiBsYXN0IGNoaWxkXHJcbn1cclxuLmF0dHItY29sIHtcclxuICBwYWRkaW5nOiAwIDAgMCAxJTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCNkZGRkZGQ7XHJcbn1cclxuLmF0dHItY29sID4gdGFibGUge1xyXG4gIHdpZHRoOiA5OCU7IC8vIGxlYXZlIHNtYWxsIGdhcFxyXG59XHJcbi5hdHRyLXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuLmF0dHItcm93Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogMHB4O1xyXG59XHJcbi5hdHRyLXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZCAhaW1wb3J0YW50O1xyXG59XHJcbi5hdHRyLXJvdyA+IHRkIHtcclxuICBib3JkZXI6IDBweDtcclxuICBwYWRkaW5nOiAwIDAuNGVtIDAgMC4yZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VwLXRhYmxlIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ3JvdXAtdGFibGUgPiB0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmdyb3VwLXRhYmxlLWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcclxufVxyXG4uZ3JvdXAtdGFibGUtaGVhZGVyID4gdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRvcDogMDsgLyogRG9uJ3QgZm9yZ2V0IHRoaXMsIHJlcXVpcmVkIGZvciB0aGUgc3RpY2tpbmVzcyAqL1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG4uZ3JvdXAtdGFibGUtaGVhZGVyID4gdGgsXHJcbi5ncm91cC10YWJsZS1pdGVtID4gdGQge1xyXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuLmdyb3VwLXRhYmxlLWhlYWRlciA+IHRoOmxhc3QtY2hpbGQsXHJcbi5ncm91cC10YWJsZS1pdGVtID4gdGQ6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7IC8vIHJlbW92ZSBkaXZpZGVyIG9mIGxhc3QgY2hpbGRcclxufVxyXG5cclxuLyoqIENPTFVNTjogQXdhcmVuZXNzIFBhbmVsICovXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG4uY2FyZC1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4uY2FyZC1oZWFkZXItaG92ZXI6aG92ZXIge1xyXG4gIC8vIGJhY2tncm91bmQ6ICNlZmVmZWYgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiBDU1MgZm9yIGR5bmFtaWMgRE9NIGVsZW1lbnRzICovXHJcbjo6bmctZGVlcCB7XHJcbiAgYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgc3Ryb2tlOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1kb3duLFxyXG4gIC5kcm9wZG93bi11cCB7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWRvd24ge1xyXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICM5OTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi11cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzk5OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgZGl2OmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5vVWktdGFyZ2V0IHtcclxuICAgIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubm9VaS1iYXNlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5ub1VpLWNvbm5lY3Qge1xyXG4gICAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM5OTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub1VpLWNvbm5lY3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm5vVWktaGFuZGxlIHtcclxuICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5vVWktaGFuZGxlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcclxuICAgIHRvcDogLTlweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IC04cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub1VpLXRvb2x0aXAge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubm9VaS10b29sdGlwOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5ub1VpLWhhbmRsZTphZnRlcixcclxuICAubm9VaS1oYW5kbGU6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubm9VaS1waXBzLWhvcml6b250YWwge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgLm5vVWktdmFsdWUtbGFyZ2Uge1xyXG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub1VpLW1hcmtlci1sYXJnZSB7XHJcbiAgICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIFRhc2sgQ29uZmlndXJhdGlvbiBWaXMgKi9cclxuICAudGFza0NvbmZpZ1ZpcyAubGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiBzdGVlbGJsdWU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xyXG4gIH1cclxuICAudGFza0NvbmZpZ1ZpcyBjaXJjbGUge1xyXG4gICAgZmlsbDogc3RlZWxibHVlO1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICB9XHJcbiAgLnRhc2tDb25maWdWaXMgLnRpY2sgbGluZSB7XHJcbiAgICBzdHJva2U6ICNlZWVlZWU7XHJcbiAgfVxyXG5cclxuICAvKiogUGxvdCAqL1xyXG4gIC51bnN1cHBvcnRlZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wb3N0IHRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRpY2sgdGV4dCxcclxuICAudGljayB0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gIC54LmF4aXMudGl0bGUgdGV4dCxcclxuICAueS5heGlzLnRpdGxlIHRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sZWdlbmQgdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRldmlhbnQtc2Nyb2xsYmFycyA+IC5vcy1zY3JvbGxiYXItaG9yaXpvbnRhbCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIGxlZnQ6IDEwO1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICAuZGV2aWFudC1zY3JvbGxiYXJzID4gLm9zLXNjcm9sbGJhci12ZXJ0aWNhbCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDEwO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZGV2aWFudC1zY3JvbGxiYXJzLm9zLWhvc3Qtc2Nyb2xsYmFyLWhvcml6b250YWwtaGlkZGVuID4gLm9zLXNjcm9sbGJhci12ZXJ0aWNhbCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuZGV2aWFudC1zY3JvbGxiYXJzLm9zLWhvc3Qtc2Nyb2xsYmFyLXZlcnRpY2FsLWhpZGRlbiA+IC5vcy1zY3JvbGxiYXItaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm9zLXRoZW1lLWRhcmsub3MtdGhlbWUtZGFyay1lZGd5ID4gLm9zLXNjcm9sbGJhciA+IC5vcy1zY3JvbGxiYXItdHJhY2sgPiAub3Mtc2Nyb2xsYmFyLWhhbmRsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG5cclxuICAub2Zmc2V0LXNjcm9sbGJhcnMgPiAub3Mtc2Nyb2xsYmFyLXZlcnRpY2FsIHtcclxuICAgIHRvcDogMzVweDtcclxuICB9XHJcblxyXG4gIC5vZmZzZXQtc2Nyb2xsYmFycyA+IC5vcy1zY3JvbGxiYXItaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlcGFyYXRvciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuI2NvbGxhcHNlQXR0cmlidXRlQ29udHJvbHMsXHJcbiNjb2xsYXBzZUF3YXJlbmVzc0NvbnRyb2xzIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4udGV4dExpZ2h0IHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dERhcmsge1xyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLyoqIFBhZGRpbmdzICovXG4ucC14cyB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnAtc20ge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqIE1hcmdpbnMgKi9cbi5tLXhzIHtcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5tLXNtIHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5tYi1zbSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLWItMCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubS10LXNtIHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXQtbWQge1xuICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLWItbWQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qKiBNdWx0aXBsZSBDT0xVTU5TIGFuZCBST1dTICovXG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCkgIWltcG9ydGFudDtcbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmgtMTAwIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGlnaHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSAudGl0bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyoqIENvbG9yIExlZ2VuZCAqL1xuLnNlcXVlbnRpYWwtY29sb3ItbGVnZW5kIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSwgIzQyYTVmNSk7XG59XG5cbi5kaXZlcmdlbnQtY29sb3ItbGVnZW5kIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmOWE5YSwgI2VlZWVlZSwgI2E1ZDZhNyk7XG59XG5cbi8qKiBST1c6IE11bHRpcGxlIEhlYWRlcnMgKi9cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLyoqIFJPVzogTXVsdGlwbGUgQnV0dG9ucyAqL1xuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKiogUk9XOiBFbmNvZGluZ3MgKi9cbi5kaXNwbGF5LWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqIFJPVzogRmlsdGVycyAqL1xuLnEtZmlsdGVyLXNsaWRlciBub3Vpc2xpZGVyIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4vKiogUk9XOiBTZWxlY3RlZCBPYmplY3RzICovXG4uc2luZ2xlLXRhYmxlIHtcbiAgcGFkZGluZzogMC4yNWVtIDEuMjVlbSAwIDEuMjVlbTtcbn1cblxuLnNpbmdsZS10YWJsZSA+ICo6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zaW5nbGUtdGFibGUgPiAqOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxuLmF0dHItY29sIHtcbiAgcGFkZGluZzogMCAwIDAgMSU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5hdHRyLWNvbCA+IHRhYmxlIHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuLmF0dHItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5hdHRyLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5hdHRyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcbn1cblxuLmF0dHItcm93ID4gdGQge1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMCAwLjRlbSAwIDAuMmVtICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91cC10YWJsZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyb3VwLXRhYmxlID4gdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncm91cC10YWJsZS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcbn1cblxuLmdyb3VwLXRhYmxlLWhlYWRlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogMDsgLyogRG9uJ3QgZm9yZ2V0IHRoaXMsIHJlcXVpcmVkIGZvciB0aGUgc3RpY2tpbmVzcyAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZ3JvdXAtdGFibGUtaGVhZGVyID4gdGgsXG4uZ3JvdXAtdGFibGUtaXRlbSA+IHRkIHtcbiAgcGFkZGluZzogMCAwLjI1ZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5ncm91cC10YWJsZS1oZWFkZXIgPiB0aDpsYXN0LWNoaWxkLFxuLmdyb3VwLXRhYmxlLWl0ZW0gPiB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi8qKiBDT0xVTU46IEF3YXJlbmVzcyBQYW5lbCAqL1xuLmNhcmQge1xuICBib3JkZXI6IDBweDtcbn1cblxuLmNhcmQtYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmNhcmQtaGVhZGVyLWhvdmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiogQ1NTIGZvciBkeW5hbWljIERPTSBlbGVtZW50cyAqL1xuOjpuZy1kZWVwIHtcbiAgLyoqIFRhc2sgQ29uZmlndXJhdGlvbiBWaXMgKi9cbiAgLyoqIFBsb3QgKi9cbn1cbjo6bmctZGVlcCBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zZWxlY3RlZCB7XG4gIHN0cm9rZTogYmxhY2s7XG59XG46Om5nLWRlZXAgLnNlbGVjdGVkLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbjo6bmctZGVlcCAuZHJvcGRvd24tZG93bixcbjo6bmctZGVlcCAuZHJvcGRvd24tdXAge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRvd24ge1xuICBib3JkZXItdG9wOiA4cHggc29saWQgIzk5OSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5kcm9wZG93bi11cCB7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjOTk5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBkaXY6YmVmb3JlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzk5OSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBkaXY6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5ub1VpLXRhcmdldCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5vVWktYmFzZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAubm9VaS1jb25uZWN0IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5ub1VpLWNvbm5lY3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLm5vVWktaGFuZGxlIHtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5vVWktaGFuZGxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcbiAgdG9wOiAtOXB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAtOHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5vVWktdG9vbHRpcCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY29sb3I6IHdoaXRlO1xufVxuOjpuZy1kZWVwIC5ub1VpLXRvb2x0aXA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLm5vVWktaGFuZGxlOmFmdGVyLFxuOjpuZy1kZWVwIC5ub1VpLWhhbmRsZTpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XG4gIHBhZGRpbmc6IDRweDtcbn1cbjo6bmctZGVlcCAubm9VaS12YWx1ZS1sYXJnZSB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5vVWktbWFya2VyLWxhcmdlIHtcbiAgaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAudGFza0NvbmZpZ1ZpcyAubGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogc3RlZWxibHVlO1xuICBzdHJva2Utd2lkdGg6IDEuNXB4O1xufVxuOjpuZy1kZWVwIC50YXNrQ29uZmlnVmlzIGNpcmNsZSB7XG4gIGZpbGw6IHN0ZWVsYmx1ZTtcbiAgZmlsbC1vcGFjaXR5OiAxO1xuICBzdHJva2Utd2lkdGg6IDEuNXB4O1xuICBjdXJzb3I6IG1vdmU7XG59XG46Om5nLWRlZXAgLnRhc2tDb25maWdWaXMgLnRpY2sgbGluZSB7XG4gIHN0cm9rZTogI2VlZWVlZTtcbn1cbjo6bmctZGVlcCAudW5zdXBwb3J0ZWQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucG9zdCB0ZXh0IHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50aWNrIHRleHQsXG46Om5nLWRlZXAgLnRpY2sgdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG46Om5nLWRlZXAgLnguYXhpcy50aXRsZSB0ZXh0LFxuOjpuZy1kZWVwIC55LmF4aXMudGl0bGUgdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmxlZ2VuZCB0ZXh0IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5kZXZpYW50LXNjcm9sbGJhcnMgPiAub3Mtc2Nyb2xsYmFyLWhvcml6b250YWwge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDEwO1xuICBoZWlnaHQ6IDEycHg7XG59XG46Om5nLWRlZXAgLmRldmlhbnQtc2Nyb2xsYmFycyA+IC5vcy1zY3JvbGxiYXItdmVydGljYWwge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IDEwO1xuICB3aWR0aDogMTJweDtcbn1cbjo6bmctZGVlcCAuZGV2aWFudC1zY3JvbGxiYXJzLm9zLWhvc3Qtc2Nyb2xsYmFyLWhvcml6b250YWwtaGlkZGVuID4gLm9zLXNjcm9sbGJhci12ZXJ0aWNhbCB7XG4gIHRvcDogMDtcbn1cbjo6bmctZGVlcCAuZGV2aWFudC1zY3JvbGxiYXJzLm9zLWhvc3Qtc2Nyb2xsYmFyLXZlcnRpY2FsLWhpZGRlbiA+IC5vcy1zY3JvbGxiYXItaG9yaXpvbnRhbCB7XG4gIGxlZnQ6IDA7XG59XG46Om5nLWRlZXAgLm9zLXRoZW1lLWRhcmsub3MtdGhlbWUtZGFyay1lZGd5ID4gLm9zLXNjcm9sbGJhciA+IC5vcy1zY3JvbGxiYXItdHJhY2sgPiAub3Mtc2Nyb2xsYmFyLWhhbmRsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbjo6bmctZGVlcCAub2Zmc2V0LXNjcm9sbGJhcnMgPiAub3Mtc2Nyb2xsYmFyLXZlcnRpY2FsIHtcbiAgdG9wOiAzNXB4O1xufVxuOjpuZy1kZWVwIC5vZmZzZXQtc2Nyb2xsYmFycyA+IC5vcy1zY3JvbGxiYXItaG9yaXpvbnRhbCB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuI2NvbGxhcHNlQXR0cmlidXRlQ29udHJvbHMsXG4jY29sbGFwc2VBd2FyZW5lc3NDb250cm9scyB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi50ZXh0TGlnaHQge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udGV4dERhcmsge1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-activity/component.ts":
/*!********************************************!*\
  !*** ./src/app/main-activity/component.ts ***!
  \********************************************/
/*! exports provided: MainActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainActivityComponent", function() { return MainActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/config */ "./src/app/models/config.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _visualizations_main_scatter_plot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../visualizations/main/scatter-plot-component */ "./src/app/visualizations/main/scatter-plot-component.ts");
/* harmony import */ var _visualizations_main_strip_plot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../visualizations/main/strip-plot-component */ "./src/app/visualizations/main/strip-plot-component.ts");
/* harmony import */ var _visualizations_main_dot_plot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../visualizations/main/dot-plot-component */ "./src/app/visualizations/main/dot-plot-component.ts");
/* harmony import */ var _visualizations_main_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../visualizations/main/bar-chart-component */ "./src/app/visualizations/main/bar-chart-component.ts");
/* harmony import */ var _visualizations_main_line_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../visualizations/main/line-chart-component */ "./src/app/visualizations/main/line-chart-component.ts");
/* harmony import */ var _visualizations_awareness_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../visualizations/awareness/component */ "./src/app/visualizations/awareness/component.ts");

// libraries







// local









window.addEventListener("beforeunload", function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = "";
});
var MainActivityComponent = /** @class */ (function () {
    function MainActivityComponent(route, utilsService, chatService, router, global, sanitizer) {
        var _this = this;
        this.route = route;
        this.utilsService = utilsService;
        this.chatService = chatService;
        this.router = router;
        this.global = global;
        this.sanitizer = sanitizer;
        this.objectKeys = Object.keys; // to help iterate over objects with *ngFor
        this.objectValues = Object.values; // to help iterate over objects with *ngFor
        this.math = Math; // to help iterate over objects with *ngFor
        this.userConfig = _models_config__WEBPACK_IMPORTED_MODULE_7__["UserConfig"]; // access all user settings here
        this.appConfig = initializeAppModes(_models_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"]); // access all app settings here
        this.currentPlotType = null; // default plot type
        this.currentPlotInstance = null; // default plot instance
        this.scatterPlotInstance = createPlotInstance(this, _visualizations_main_scatter_plot_component__WEBPACK_IMPORTED_MODULE_10__["ScatterPlot"]);
        this.stripPlotInstance = createPlotInstance(this, _visualizations_main_strip_plot_component__WEBPACK_IMPORTED_MODULE_11__["StripPlot"]);
        this.dotPlotInstance = createPlotInstance(this, _visualizations_main_dot_plot_component__WEBPACK_IMPORTED_MODULE_12__["DotPlot"]);
        this.barChartInstance = createPlotInstance(this, _visualizations_main_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__["BarChart"]);
        this.lineChartInstance = createPlotInstance(this, _visualizations_main_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["LineChart"]);
        this.route.queryParams.subscribe(function (params) {
            if ("level" in params) {
                _this.global.appLevel = params["level"];
            }
        });
        this.qFilterSliderConfig = function (attribute) {
            var attrConfig = _this.appConfig[_this.global.appMode]["attributes"][attribute];
            var formatter = { from: Number, to: _this.utilsService.formatLargeNum };
            return {
                step: attrConfig["step"],
                range: {
                    min: attrConfig["min"],
                    max: attrConfig["max"],
                },
                pips: { mode: "count", values: 3, density: 10, format: formatter },
                tooltips: [formatter, formatter],
                format: { from: Number, to: Number },
            };
        };
        this.taskConfigVis = {};
        this.plotWidth = null;
        this.plotHeight = null;
        this.plotGroup = null;
    }
    /** ====================== INITIALIZATION METHODS ======================= */
    /**
     * Required for ng.
     */
    MainActivityComponent.prototype.ngOnInit = function () {
        switch (this.global.appLevel) {
            case "practice":
                this.global.appMode = "cars.csv";
                break;
            case "live":
                this.global.appMode = "credit_risk.csv";
                break;
            case "colleges":
                this.global.appMode = "colleges.csv";
                break;
        }
        switch (this.global.appType) {
            case "CONTROL":
                this.userConfig["awarenessVisLayers"] = ["Target"];
                break;
            case "AWARENESS":
                this.userConfig["awarenessVisLayers"] = ["Target", "Focus", "Selection"];
                break;
            case "ADMIN":
                this.userConfig["awarenessVisLayers"] = ["Target", "Focus", "Selection"];
                break;
        }
        this.initLumos();
    };
    /**
     * Required for ng.
     */
    MainActivityComponent.prototype.ngAfterViewInit = function () {
        this.setWidthsForAwarenessPanelVis();
    };
    /**
     * Initialize application variables, load the dataset, initialize the
     * attributes with a default "filterModel", and connect to the server.
     */
    MainActivityComponent.prototype.initLumos = function () {
        var context = this;
        var dataset = this.appConfig[this.global.appMode];
        // Maintain a separate list of Nominal (N), Ordinal (O), Temporal (T),
        // and Quantitative (Q) attributes for *ngFor purposes.
        dataset.attributeList = [];
        dataset.attributeDatatypeList = {
            N: [],
            O: [],
            T: [],
            Q: [],
        };
        // set the current plot type (in case data set has changed)
        context.currentPlotType = dataset["chartType"];
        // Single pass over all attributes in the dataset to initialize variables.
        dataset["orderedAttributeList"].forEach(function (attr) {
            var attribute = dataset["attributes"][attr];
            // Create a ' ' (space)-free version of attributes
            attribute["cleaned"] = attr.replace(/ /g, "").toLowerCase();
            // Initialize all attributes of the Selected data point to "-"
            dataset["selectedObject"][attr] = "-";
            // Initialize all attribute Divergent Values to 0.
            dataset["attributeBiasValues"][attr] = 0;
            // Initialize attribute interacted with values to 0.
            dataset["attributeInteracted"][attr] = 0;
            // Initialize attribute interacted ratio to 0.
            dataset["ratioAttributeInteracted"][attr] = 0;
            // Add attribute to list
            dataset.attributeList.push(attr);
            // Update the list of Nominal (N), Ordinal (O), Temporal (T),
            // and Quantitative (Q) attributes defined above for *ngFor purposes.
            dataset.attributeDatatypeList[attribute["datatype"]].push(attr);
        });
        // Load the data itself from file
        var fp = "./assets/" + context.global.appMode;
        d3__WEBPACK_IMPORTED_MODULE_1__["csv"](fp).then(function (data) {
            // parse data type for type conversion
            // let parseFormat: any = d3.timeFormat("%Y");
            // let parseTime = d3.timeFormat(parseFormat); // expect YYYY
            data.forEach(function (d) {
                Object.keys(d).forEach(function (attr) {
                    if (context.utilsService.isMeasure(dataset, attr, "Q")) {
                        d[attr] = parseFloat(d[attr]);
                    }
                    else if (context.utilsService.isMeasure(dataset, attr, "T")) {
                        // d[attr] = parseTime(d[attr]); // ARPIT TODO
                    }
                });
            });
            // store copy of the original dataset
            context.userConfig["originalDataset"] = data;
            // Initialize the data set dictionary
            context.userConfig["originalDatasetDict"] = {};
            // get the id of the item from the dataset's primary Key attribute
            var pk = dataset["primaryKey"];
            // Update attribute lists with original data set
            context.userConfig["originalDataset"].forEach(function (d) {
                // initialize data point unique keys
                if (!d.hasOwnProperty("color"))
                    d["color"] = "white";
                if (!d.hasOwnProperty("selected"))
                    d["selected"] = false;
                if (!d.hasOwnProperty("timesVisited"))
                    d["timesVisited"] = 0;
                if (!d.hasOwnProperty("ratioTimesVisited"))
                    d["ratioTimesVisited"] = 0;
                // Update the originalDatasetDict variable defined above.
                context.userConfig["originalDatasetDict"][d[pk]] = d;
                // Set the TaskModel/Domain for Nominal Attributes
                dataset.attributeDatatypeList["N"].forEach(function (attr) {
                    var attrConfig = dataset["attributes"][attr];
                    var attrDomain = attrConfig["types"];
                    if (attrDomain.indexOf(d[attr]) == -1)
                        attrDomain.push(d[attr]);
                    attrConfig["types"].forEach(function (type) { return (attrConfig["taskModel"][type] = 1); });
                });
                // Create Range for Temporal Attributes
                dataset.attributeDatatypeList["T"].forEach(function (attr) {
                    var attrConfig = dataset["attributes"][attr];
                    d[attr] = parseFloat(d[attr]);
                    attrConfig["max"] = Math.max(attrConfig["max"], d[attr]);
                    attrConfig["min"] = Math.min(attrConfig["min"], d[attr]);
                    // set Numerical Attributes.
                    attrConfig["taskModel"] = [
                        [attrConfig["min"], 0],
                        [attrConfig["min"], 1],
                        [attrConfig["max"], 1],
                        [attrConfig["max"], 0],
                    ];
                });
                // Create Range for Quantitative Attributes
                dataset.attributeDatatypeList["Q"].forEach(function (attr) {
                    var attrConfig = dataset["attributes"][attr];
                    d[attr] = parseFloat(d[attr]);
                    attrConfig["max"] = Math.max(attrConfig["max"], d[attr]);
                    attrConfig["min"] = Math.min(attrConfig["min"], d[attr]);
                    // set Numerical Attributes.
                    attrConfig["taskModel"] = [
                        [attrConfig["min"], 0],
                        [attrConfig["min"], 1],
                        [attrConfig["max"], 1],
                        [attrConfig["max"], 0],
                    ];
                });
            });
            // Reset filters by setting the initial "filterModel"
            //  (i.e., `[min, max]` for 'Q' and `types` for 'N' attributes)
            //  to the default domain and range.
            dataset.attributeList.forEach(function (attr) {
                context.removeFilter(attr, false, false);
            });
            // if switching between datasets, re-initialize existing plot
            //  (otherwise this does nothing)
            initializePlotInstance(context, context.currentPlotType);
            context.updateVis();
            /** Connect to Server to Send/Receive Messages over WebSocket */
            context.chatService.removeAllListenersAndDisconnectFromSocket();
            context.chatService.connectToSocket();
            context.chatService.getConnectEventResponse().subscribe(function () {
                console.log("connected to socket");
            });
            context.chatService.getDisconnectEventResponse().subscribe(function () {
                console.log("disconnected from socket");
            });
            context.chatService.getInteractionResponse().subscribe(function (obj) {
                var dataOut = obj["output_data"];
                if (dataOut != null) {
                    var countObj_1 = dataOut["data_point_distribution"][1]["counts"];
                    // retrieve bias values
                    dataset["attributeBiasValues"] = dataOut["attribute_distribution"][0];
                    // update times visisted (computed server-side)
                    Object.keys(countObj_1).forEach(function (id) {
                        var dataPoint = context.userConfig["originalDatasetDict"][id];
                        dataPoint["timesVisited"] = countObj_1[id];
                    });
                    // calculate sum of all attribte bias values
                    dataset["sumAttributeBiasValues"] = Object.values(dataset["attributeBiasValues"]).reduce(context.utilsService.sum, 0);
                    if (["dotplot", "barchart", "linechart"].indexOf(context.currentPlotInstance) !== -1) {
                        // update point color for hovered Objects (only if visible!)
                        var hoveredPointsList_1 = Object.values(dataset["hoveredObjects"]["points"]);
                        hoveredPointsList_1.forEach(function (dataPoint) {
                            return context.utilsService.colorDataPoint(context, dataPoint, hoveredPointsList_1);
                        });
                    }
                    // update attribute distributions
                    var attrDist_1 = dataset["attributeDistribution"];
                    Object.keys(attrDist_1["original"]).forEach(function (attr) {
                        var attrIsN = context.utilsService.isMeasure(dataset, attr, "N");
                        var attrIsO = context.utilsService.isMeasure(dataset, attr, "O");
                        var attrIsT = context.utilsService.isMeasure(dataset, attr, "T");
                        var attrIsQ = context.utilsService.isMeasure(dataset, attr, "Q");
                        var attrConfig = dataOut["attribute_distribution"][1][attr];
                        if (attrIsN || attrIsO) {
                            attrDist_1["interacted"][attr] = attrConfig["interaction_distr_dict"];
                            dataset["attributeCoverage"]["interacted"][attr] = [
                                dataOut["attribute_coverage"][1][attr]["coverage"],
                                dataOut["attribute_coverage"][1][attr]["quantiles"],
                            ];
                        }
                        else if (attrIsT || attrIsQ) {
                            attrDist_1["interacted"][attr] = attrConfig["interaction_distr"];
                            dataset["attributeCoverage"]["interacted"][attr] = [
                                dataOut["attribute_coverage"][1][attr]["coverage"],
                                dataOut["attribute_coverage"][1][attr]["quantiles"],
                            ];
                        }
                    });
                    context.updateAwarenessPanel();
                    context.updateVis();
                }
            });
            context.chatService.getAttributeDistribution().subscribe(function (obj) {
                var attrDist = dataset["attributeDistribution"];
                var attrCov = dataset["attributeCoverage"];
                if (obj != null) {
                    attrDist["original"] = obj[context.global.appMode];
                    Object.keys(attrDist["original"]).forEach(function (attr) {
                        if (!attrDist["interacted"].hasOwnProperty(attr)) {
                            attrDist["interacted"][attr] = [];
                        }
                        if (!attrCov["interacted"].hasOwnProperty(attr)) {
                            attrCov["interacted"][attr] = [{}, []];
                        }
                    });
                    context.updateAwarenessPanel();
                    context.updateVis();
                }
            });
        });
    };
    /** ========================= UPDATE METHODS ============================ */
    /**
     * Call this function to update the visualizations in the awareness panel.
     */
    MainActivityComponent.prototype.updateAwarenessPanel = function (specific_attr) {
        var _this = this;
        if (specific_attr === void 0) { specific_attr = null; }
        var context = this;
        var dataset = this.appConfig[this.global.appMode];
        // Sizes of each awareness panel
        var width = this.userConfig["sizes"]["awarenessPanel"]["width"];
        var height = this.userConfig["sizes"]["awarenessPanel"]["height"];
        /* Attribute Distribution Plot - Start */
        dataset.attributeList.forEach(function (attr) {
            // Only update the awareness visualizations:
            // 1) For the visible (expanded) attribute cards.
            // 2) If an explicit update is requested for a specific attribute.
            if (!specific_attr || (specific_attr && attr == specific_attr)) {
                if (dataset["attributes"][attr]["awarenessPanel"]["isExpanded"] ||
                    dataset["attributes"][attr]["awarenessPanel"]["isBookmarked"]) {
                    // Initialize Data and Common Variables
                    var data_1 = [];
                    var configObject = {};
                    var selectedDataObj_1 = [];
                    var sumSelected_1 = 0;
                    var attrConfig = dataset["attributes"][attr];
                    var attrIsN = context.utilsService.isMeasure(dataset, attr, "N");
                    var attrIsO = context.utilsService.isMeasure(dataset, attr, "O");
                    var attrIsT = context.utilsService.isMeasure(dataset, attr, "T");
                    var attrIsQ = context.utilsService.isMeasure(dataset, attr, "Q");
                    var attrShorthand = attrConfig["cleaned"];
                    var taskType = attrConfig["taskType"];
                    var originalDataObj_1 = dataset["attributeDistribution"]["original"][attr];
                    var interactedDataObj_1 = dataset["attributeDistribution"]["interacted"][attr];
                    var attrDistributionPlotContainerId = "#awarenessPlot-" + attrShorthand;
                    var sumOriginal_1 = Object.values(originalDataObj_1).reduce(context.utilsService.sum, 0);
                    var sumInteracted_1 = Object.values(interactedDataObj_1).reduce(context.utilsService.sum, 0);
                    /*  Vega Configure and Render Vis - Start */
                    if (attrIsN || attrIsO) {
                        // attribute is N/O => prepare categorical settings
                        selectedDataObj_1 = {};
                        Object.keys(originalDataObj_1).forEach(function (key) {
                            selectedDataObj_1[key] = 0;
                        });
                        Object.values(dataset["selectedObjects"]).forEach(function (obj) {
                            selectedDataObj_1[obj[attr]] += 1;
                        });
                        sumSelected_1 = Object.values(selectedDataObj_1).reduce(context.utilsService.sum, 0);
                        // Initialize ConfigObject
                        configObject = JSON.parse(JSON.stringify(_visualizations_awareness_component__WEBPACK_IMPORTED_MODULE_15__["AttributeDistributionPlotConfig"]["N"]));
                        // Depending on what the taskType is:
                        //  Create/Update Data for layer #1 and #2
                        //  for the Original and Interacted plots, respectively.
                        /*  Render N/O Task Type - Start */
                        switch (taskType) {
                            case "proportional":
                                switch (context.userConfig.awarenessMode) {
                                    case "Raw":
                                        Object.keys(originalDataObj_1).forEach(function (key) {
                                            data_1.push({
                                                x: key,
                                                count_data: originalDataObj_1[key],
                                                count_focus: interactedDataObj_1[key],
                                                count_selection: selectedDataObj_1[key],
                                            });
                                        });
                                        break;
                                    case "Percentage":
                                        Object.keys(originalDataObj_1).forEach(function (key) {
                                            data_1.push({
                                                x: key,
                                                count_data: originalDataObj_1[key] / sumOriginal_1,
                                                count_focus: interactedDataObj_1[key] / sumInteracted_1,
                                                count_selection: selectedDataObj_1[key] / sumSelected_1,
                                            });
                                        });
                                        break;
                                }
                                break;
                        }
                        /*  Render N/O Task Type - End */
                        var size = (width * 0.8) / attrConfig["types"].length;
                        // For the 1st layer (underlying data distribution),
                        // set the bandSize parameter (width of the ticks).
                        configObject["config"]["tick"]["bandSize"] = size;
                        // For the 2nd and 3rd layers (bar chart of interactions and selections), set the width
                        // explicitly
                        configObject["layer"][1]["mark"]["size"] = size;
                        configObject["layer"][2]["mark"]["size"] = size;
                    }
                    else if (attrIsQ || attrIsT) {
                        // attribute is Q/T => prepare vis for numerical settings
                        // Initialize common variables
                        var quantiles = [];
                        selectedDataObj_1 = [];
                        Object.values(dataset["selectedObjects"]).forEach(function (obj) {
                            selectedDataObj_1.push(obj[attr]);
                        });
                        /*  Render Q/T Task Type - Start */
                        switch (taskType) {
                            /** TASK CONFIGURATION IS SET TO PROPORTIONAL */
                            case "proportional":
                                // Determine which layer to show on top.
                                var biggerArr = void 0;
                                var smallerArr_1;
                                var smallestArr_1 = [];
                                var biggerAttrType_1;
                                Object.values(dataset["selectedObjects"]).forEach(function (value) {
                                    smallestArr_1.push(value[attr]);
                                });
                                if (originalDataObj_1.length > interactedDataObj_1.length) {
                                    biggerArr = originalDataObj_1;
                                    biggerAttrType_1 = "Target";
                                    smallerArr_1 = interactedDataObj_1;
                                }
                                else {
                                    smallerArr_1 = originalDataObj_1;
                                    biggerAttrType_1 = "focus_field";
                                    biggerArr = interactedDataObj_1;
                                }
                                biggerArr.forEach(function (item, counter) {
                                    var _a, _b;
                                    if (biggerAttrType_1 == "Target") {
                                        data_1.push((_a = {},
                                            _a[attr] = parseFloat(item),
                                            _a["focus_field"] = counter < smallerArr_1.length ? parseFloat(smallerArr_1[counter]) : null,
                                            _a["selection_field"] = counter < smallestArr_1.length ? parseFloat(smallestArr_1[counter]) : null,
                                            _a));
                                    }
                                    else {
                                        data_1.push((_b = {},
                                            _b[attr] = counter < smallerArr_1.length ? parseFloat(smallerArr_1[counter]) : null,
                                            _b["focus_field"] = parseFloat(item),
                                            _b["selection_field"] = counter < smallestArr_1.length ? parseFloat(smallestArr_1[counter]) : null,
                                            _b));
                                    }
                                });
                                // Instantiate the correct config Object
                                switch (context.userConfig.awarenessMode) {
                                    case "Raw":
                                        configObject = JSON.parse(JSON.stringify(_visualizations_awareness_component__WEBPACK_IMPORTED_MODULE_15__["AttributeDistributionPlotConfig"]["Q-raw"]));
                                        break;
                                    case "Percentage":
                                        configObject = JSON.parse(JSON.stringify(_visualizations_awareness_component__WEBPACK_IMPORTED_MODULE_15__["AttributeDistributionPlotConfig"]["Q-pct"]));
                                        break;
                                }
                                // Set the Interpolate metric based on the selected mode.
                                configObject["layer"][0]["mark"]["interpolate"] = context.userConfig.interpolateMode;
                                configObject["layer"][1]["mark"]["interpolate"] = context.userConfig.interpolateMode;
                                configObject["layer"][2]["mark"]["interpolate"] = context.userConfig.interpolateMode;
                                // Set the Filter transform to remove NULLs
                                configObject["layer"][0]["transform"][0]["filter"] = "datum['" + attr + "'] !== null";
                                // Set the Field to BIN.
                                configObject["layer"][0]["transform"][1]["field"] = attr;
                                break;
                        }
                        /*  Render Q/T Task Type - End */
                        if (quantiles.length > 0) {
                            // For the 1st layer (strip plot of underlying data distribution),
                            // set the bandSize parameter (width of the ticks).
                            configObject["config"]["tick"]["bandSize"] = (width * 0.8) / quantiles.length;
                            // For the 2nd and 3rd layers (bar chart of interactions and selections), set the width
                            // explicitly
                            configObject["layer"][1]["mark"]["size"] = (width * 0.8) / quantiles.length;
                            configObject["layer"][2]["mark"]["size"] = (width * 0.8) / quantiles.length;
                        }
                    }
                    /*  Vega Configure and Render Vis - End */
                    // Set the Width and Height
                    configObject["width"] = width;
                    configObject["height"] = height;
                    // Set the Data
                    configObject["data"]["values"] = data_1;
                    // Update Y Axis Title
                    configObject = setYAxisTitle(context.userConfig.awarenessMode, configObject);
                    // Determine which layers (e.g., selected + interacted) are to be shown.
                    // Rule 1: It should be configured in the `awarenessVisLayers` array
                    // Rule 2: If there are no user interactions or selections yet, remove those layers to save computation.
                    var layerIndicesSet_1 = new Set();
                    _this.userConfig["awarenessVisLayers"].forEach(function (layer) {
                        switch (layer) {
                            case "Target":
                                if (Object.values(originalDataObj_1).length > 0 &&
                                    ["CONTROL", "AWARENESS", "ADMIN"].indexOf(_this.global.appType) !== -1) {
                                    layerIndicesSet_1.add(0);
                                }
                                break;
                            case "Focus":
                                if (Object.values(interactedDataObj_1).length > 0 &&
                                    ["AWARENESS", "ADMIN"].indexOf(_this.global.appType) !== -1) {
                                    layerIndicesSet_1.add(1);
                                }
                                break;
                            case "Selection":
                                // For numerical attributes
                                if (Array.isArray(selectedDataObj_1)) {
                                    if (Object.values(selectedDataObj_1).length > 0 && ["ADMIN"].indexOf(_this.global.appType) !== -1) {
                                        layerIndicesSet_1.add(2);
                                    }
                                }
                                // For categorical attributes
                                else {
                                    if (Object.values(selectedDataObj_1).reduce(context.utilsService.sum) > 0 &&
                                        ["ADMIN"].indexOf(_this.global.appType) !== -1) {
                                        layerIndicesSet_1.add(2);
                                    }
                                }
                                break;
                        }
                    });
                    // Delete the unwanted layers from the Vega-Lite layer specification.
                    var layerIndicesArray = Array.from(layerIndicesSet_1);
                    for (var i = 2; i >= 0; i--) {
                        if (layerIndicesArray.indexOf(i) === -1) {
                            configObject["layer"].splice(i, 1);
                        }
                    }
                    var domain = void 0, range = void 0;
                    switch (_this.global.appType) {
                        case "CONTROL":
                            domain = ["Target"];
                            range = ["black"];
                            break;
                        case "AWARENESS":
                            domain = ["Focus", "Target"];
                            range = ["#3498db", "black"];
                            break;
                        case "ADMIN":
                            domain = ["Focus", "Target", "Selection"];
                            range = ["#3498db", "black", "#2ecc71"];
                            break;
                        default:
                            domain = ["Target"];
                            range = ["black"];
                            break;
                    }
                    for (var i = 0; i < configObject["layer"].length; i++) {
                        configObject["layer"][i]["encoding"]["color"]["scale"]["domain"] = domain;
                        configObject["layer"][i]["encoding"]["color"]["scale"]["range"] = range;
                    }
                    // Store reference to this vis object
                    attrConfig["distributionPlotConfigObject"] = configObject;
                    // Call the Render function.
                    vegaEmbed(attrDistributionPlotContainerId, configObject, {
                        actions: false,
                    });
                }
            }
        });
        /* Attribute Distribution Plot - End */
    };
    /**
     * Call this function to update the current visualization depending on the
     * one that's chosen.
     */
    MainActivityComponent.prototype.updateVis = function () {
        switch (this.currentPlotType) {
            case "scatterplot":
                // use VIS Matrix to determine which version to update
                var context = this;
                var dataset = context.appConfig[context.global.appMode];
                var xVar = dataset["xVar"];
                var yVar = dataset["yVar"];
                var xIsQ = context.utilsService.isMeasure(dataset, xVar, "Q");
                var yIsQ = context.utilsService.isMeasure(dataset, yVar, "Q");
                if (!(xVar || yVar) || xIsQ || yIsQ) {
                    context.scatterPlotInstance.update();
                }
                else {
                    context.dotPlotInstance.update();
                }
                break;
            case "stripplot":
                this.stripPlotInstance.update();
                break;
            case "barchart":
                this.barChartInstance.update();
                break;
            case "linechart":
                this.lineChartInstance.update();
                break;
            case null:
                jquery__WEBPACK_IMPORTED_MODULE_2___default()("#plot_container").empty(); // clear existing plot
                break;
            default:
                console.log("Invalid plot type '" + this.currentPlotType + "'");
                break;
        }
    };
    /** ======================== INTERFACE METHODS ========================== */
    MainActivityComponent.prototype.prev = function (path, params) {
        this.chatService.removeAllListenersAndDisconnectFromSocket();
        this.router.navigateByUrl(path);
        this.router.navigate([path], { queryParams: params });
    };
    MainActivityComponent.prototype.next = function (path, params) {
        this.chatService.sendMessageToSaveLogs();
        this.chatService.removeAllListenersAndDisconnectFromSocket();
        this.global["app-" + this.global.appLevel]["completed"] = true;
        this.global["app-" + this.global.appLevel]["timestamp"] = new Date().toLocaleString();
        this.router.navigate([path], { queryParams: params });
    };
    /**
     * Set CSS styling for attribute panel cards programmatically.
     */
    MainActivityComponent.prototype.styleAttributePanelCard = function (attribute) {
        return {
            "background-repeat": "no-repeat",
            "background-image": this.getPanelCardBGImage(attribute, "attributes"),
            "background-size": this.getPanelCardBGSize(attribute, "attributes"),
            color: this.getPanelCardTxtColor(attribute, "attributes"),
        };
    };
    /**
     * Set CSS styling for awareness panel cards programmatically.
     */
    MainActivityComponent.prototype.styleAwarenessPanelCard = function (attribute) {
        return {
            "background-repeat": "no-repeat",
            "background-image": this.getPanelCardBGImage(attribute, "awareness"),
            "background-size": this.getPanelCardBGSize(attribute, "awareness"),
        };
    };
    /**
     * Combines bin name and attribute for details table header.
     */
    MainActivityComponent.prototype.getDetailsTableHeader = function () {
        var hoveredObjects = this.appConfig[this.global.appMode]["hoveredObjects"];
        return [hoveredObjects["binAttr"], hoveredObjects["binName"]].filter(Boolean).join(": ");
    };
    /**
     * Settings for `overlay-scrollbars` in details table view.
     */
    MainActivityComponent.prototype.getDetailsTableScrollbarOptions = function () {
        return {
            className: "os-theme-dark deviant-scrollbars os-theme-dark-edgy offset-scrollbars",
            paddingAbsolute: true,
            sizeAutoCapable: true,
            scrollbars: {
                visibility: "auto",
                autoHide: "never",
                clickScrolling: true,
                dragScrolling: true,
            },
        };
    };
    /**
     * Gets size of color gradient across attribute/awareness panel bars.
     * Used to show/hide the color of the panel card header.
     */
    MainActivityComponent.prototype.getPanelCardBGSize = function (attribute, panelType) {
        var dataset = this.appConfig[this.global.appMode];
        var size = "0% 100%, 100% 100%"; // default size
        switch (panelType) {
            case "awareness":
                size = dataset["sumAttributeBiasValues"] == 0 ? "0% 100%, 100% 100%" : "100% 100%, 0% 100%";
                break;
            case "attributes":
                size = dataset["attributeInteracted"][attribute] == 0 ? "0% 100%, 100% 100%" : "100% 100%, 0% 100%";
                break;
            default:
                size = "0% 100%, 100% 100%";
                break;
        }
        return size;
    };
    /**
     * Calculates color gradient of attribute/awareness panel bars.
     */
    MainActivityComponent.prototype.getPanelCardBGImage = function (attribute, panelType) {
        if (this.global.appType === "CONTROL")
            return "none";
        var context = this;
        var dataset = context.appConfig[context.global.appMode];
        var color = "#FFFFFFF"; // default color set to white
        switch (panelType) {
            case "awareness":
                var biasValue = dataset["attributeBiasValues"][attribute];
                switch (context.userConfig.awarenessColorScale) {
                    case "Divergent":
                        color = context.userConfig.awarenessDivergentColorScale(biasValue);
                        break;
                    case "Sequential":
                        color = context.userConfig.awarenessSequentialColorScale(biasValue);
                        break;
                    default:
                        color = "#FFFFFFF";
                        break;
                }
                break;
            case "attributes":
                // Get the correct color scale
                var colorScale = void 0;
                switch (context.userConfig.attributeColorScale) {
                    case "Divergent":
                        colorScale = context.userConfig.focusDivergentColorScale;
                        break;
                    case "Sequential":
                        colorScale = context.userConfig.focusSequentialColorScale;
                        break;
                    default:
                        colorScale = context.userConfig.focusDivergentColorScale;
                        break;
                }
                // Calculate the ratio of interactions based on color by mode
                var attrInteractions = dataset["attributeInteracted"][attribute];
                var allInteractions = Object.values(dataset["attributeInteracted"]);
                switch (context.userConfig.attributeColorByMode) {
                    case "abs":
                        var sumInteracted = allInteractions.reduce(context.utilsService.sum, 0);
                        dataset["ratioAttributeInteracted"][attribute] = attrInteractions / sumInteracted;
                        break;
                    case "rel":
                        var maxInteracted = allInteractions.reduce(context.utilsService.max, 0);
                        dataset["ratioAttributeInteracted"][attribute] = attrInteractions / maxInteracted;
                        break;
                    case "binary":
                        var interacted = attrInteractions > 0;
                        dataset["ratioAttributeInteracted"][attribute] = !interacted ? 0 : 1;
                        break;
                    default:
                        dataset["ratioAttributeInteracted"][attribute] = 0;
                        break;
                }
                // Get the color from the color scale
                color = colorScale(dataset["ratioAttributeInteracted"][attribute]);
                break;
            default:
                color = "#FFFFFFF";
                break;
        }
        return "linear-gradient(" + color + ", " + color + "), linear-gradient(white, white)";
    };
    /**
     * Gets FONT COLOR of the bars.
     */
    MainActivityComponent.prototype.getPanelCardTxtColor = function (attribute, panelType) {
        if (this.global.appType === "CONTROL")
            return "black";
        var dataset = this.appConfig[this.global.appMode];
        var txtColor = "black"; // default text color
        if (panelType == "attributes" && this.userConfig.attributeColorScale == "Sequential") {
            // card background could be colored => set text to white if color is "too dark"
            txtColor = dataset["ratioAttributeInteracted"][attribute] > 0.7 ? "white" : "black";
        }
        return txtColor;
    };
    /**
     * Gets width of largest text item in options for select element.
     */
    MainActivityComponent.prototype.getSelectWidth = function (setting, mapping) {
        var _this = this;
        if (mapping === void 0) { mapping = null; }
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "normal normal 600 1rem/1.5 sans-serif";
        var txt = document.createElement("textarea");
        var getWidth; // convenience function for readability
        if (mapping) {
            getWidth = function (val) { return getTextWidth(ctx, decodeHtml(txt, _this.userConfig[mapping][val])); };
        }
        else {
            getWidth = function (val) { return getTextWidth(ctx, decodeHtml(txt, val)); };
        }
        var longest; // longest string from the list of strings
        if (Array.isArray(setting)) {
            // setting is a list of options
            longest = setting.reduce(function (acc, cur) { return (getWidth(acc) > getWidth(cur) ? acc : cur); });
        }
        else {
            // setting is a string for the options list in UserConfig
            longest = this.userConfig[setting].reduce(function (acc, cur) { return (getWidth(acc) > getWidth(cur) ? acc : cur); });
        }
        return getWidth(longest) + 50 + "px";
    };
    /**
     * Update the size of various panels / views.
     */
    MainActivityComponent.prototype.setWidthsForAwarenessPanelVis = function () {
        this.userConfig["sizes"]["awarenessPanel"]["width"] = jquery__WEBPACK_IMPORTED_MODULE_2___default()(".awareness-panel-body").width() - 100;
    };
    /**
     * Unset the `isBookmarked` state for all attributes.
     */
    MainActivityComponent.prototype.resetAllBookmarks = function ($event) {
        var dataset = this.appConfig[this.global.appMode];
        dataset.attributeList.forEach(function (attr) {
            dataset["attributes"][attr]["awarenessPanel"]["isBookmarked"] = false;
        });
        this.collapseAccordion();
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "toggle_all_attribute_bookmark_awareness_panel" /* TOGGLE_ALL_ATTRIBUTE_BOOKMARK_AWARENESS_PANEL */;
        message.data = {
            isBookmarked: false,
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
        if ($event)
            $event.stopPropagation();
    };
    /**
     * Event Listener when SORT order in the Distribution Panel is changed.
     */
    MainActivityComponent.prototype.onChangeDistributionPanelSort = function (model) {
        console.log(model);
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "distribution_panel_sort_changed" /* CHANGE_DISTRIBUTION_PANEL_SORT */;
        message.data = {
            sortBy: model,
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    /**
     * Event Listener when SORT order in the Attribute Panel is changed.
     */
    MainActivityComponent.prototype.onChangeAttributePanelSort = function (model) {
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "attribute_panel_sort_changed" /* CHANGE_ATTRIBUTE_PANEL_SORT */;
        message.data = {
            sortBy: model,
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    /**
     * Toggle the Accordion of the Attribute Panel Settings
     */
    MainActivityComponent.prototype.toggleAttributePanelSettingsAccordion = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#collapseAttributeControls").toggleClass("show");
    };
    /**
     * Toggle the Accordion of the Awareness Panel Settings
     */
    MainActivityComponent.prototype.toggleAwarenessPanelSettingsAccordion = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#collapseAwarenessControls").toggleClass("show");
    };
    /**
     * Toggle the `isBookmarked` state for given attribute.
     */
    MainActivityComponent.prototype.toggleBookmark = function (attribute, $event) {
        var context = this;
        var attrConfig = context.appConfig[context.global.appMode]["attributes"][attribute];
        attrConfig["awarenessPanel"]["isBookmarked"] = !attrConfig["awarenessPanel"]["isBookmarked"];
        if (attrConfig["awarenessPanel"]["isBookmarked"]) {
            setTimeout(function () {
                context.updateAwarenessPanel(attribute);
            });
        }
        else {
            this.collapseAccordion(attribute);
        }
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "toggle_attribute_bookmark_awareness_panel" /* TOGGLE_ATTRIBUTE_BOOKMARK_AWARENESS_PANEL */;
        message.data = {
            attribute: attribute,
            isBookmarked: attrConfig["awarenessPanel"]["isBookmarked"],
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
        if ($event)
            $event.stopPropagation();
    };
    /**
     * Toggle the `isExpanded` state for given attribute's awareness card.
     */
    MainActivityComponent.prototype.onClickAccordion = function (attribute) {
        if (this.appConfig[this.global.appMode]["attributes"][attribute]["awarenessPanel"]["isExpanded"]) {
            this.collapseAccordion(attribute);
        }
        else {
            this.expandAccordion(attribute);
        }
    };
    /**
     * Mark all attribute cards in the AwarenessPanel to be `visible`
     */
    MainActivityComponent.prototype.expandAccordion = function (attribute) {
        if (attribute === void 0) { attribute = null; }
        var dataset = this.appConfig[this.global.appMode];
        if (attribute == null) {
            dataset.attributeList.forEach(function (attr) {
                dataset["attributes"][attr]["awarenessPanel"]["isExpanded"] = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#awarenessaccordion .collapse").addClass("show");
            this.updateAwarenessPanel(); // Refresh the awareness panel visualizations
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "toggle_all_attribute_accordion_awareness_panel" /* TOGGLE_ALL_ATTRIBUTE_ACCORDION_AWARENESS_PANEL */;
            message.data = {
                isExpanded: true,
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
        else {
            dataset["attributes"][attribute]["awarenessPanel"]["isExpanded"] = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#awarenesscollapse-" + dataset["attributes"][attribute]["cleaned"]).addClass("show");
            this.updateAwarenessPanel(attribute); // Refresh the awareness panel visualizations just for this attribute
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "toggle_attribute_accordion_awareness_panel" /* TOGGLE_ATTRIBUTE_ACCORDION_AWARENESS_PANEL */;
            message.data = {
                attribute: attribute,
                isExpanded: dataset["attributes"][attribute]["awarenessPanel"]["isExpanded"],
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    /**
     * Mark all attribute cards in the AwarenessPanel to be `hidden`
     */
    MainActivityComponent.prototype.collapseAccordion = function (attribute) {
        if (attribute === void 0) { attribute = null; }
        var dataset = this.appConfig[this.global.appMode];
        if (attribute == null) {
            dataset.attributeList.forEach(function (attr) {
                dataset["attributes"][attr]["awarenessPanel"]["isExpanded"] = false;
            });
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#awarenessaccordion .collapse").removeClass("show");
            this.updateAwarenessPanel(); // Refresh the awareness panel visualizations
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "toggle_all_attribute_accordion_awareness_panel" /* TOGGLE_ALL_ATTRIBUTE_ACCORDION_AWARENESS_PANEL */;
            message.data = {
                isExpanded: false,
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
        else {
            dataset["attributes"][attribute]["awarenessPanel"]["isExpanded"] = false;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#awarenesscollapse-" + dataset["attributes"][attribute]["cleaned"]).removeClass("show");
            this.updateAwarenessPanel(attribute); // Refresh the awareness panel visualizations just for this attribute
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "toggle_attribute_accordion_awareness_panel" /* TOGGLE_ATTRIBUTE_ACCORDION_AWARENESS_PANEL */;
            message.data = {
                attribute: attribute,
                isExpanded: dataset["attributes"][attribute]["awarenessPanel"]["isExpanded"],
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    /**
     * Swaps x and y attributes in the app config.
     */
    MainActivityComponent.prototype.swapXY = function () {
        var dataset = this.appConfig[this.global.appMode];
        var xVar = dataset["xVar"];
        dataset["xVar"] = dataset["yVar"];
        dataset["yVar"] = xVar;
        this.updateVis();
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "axes_attributes_swapped" /* SWAP_AXES_ATTRIBUTES */;
        message.data = {
            x: dataset["xVar"],
            y: dataset["yVar"],
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    /**
     * Enables filter for a specific attribute.
     */
    MainActivityComponent.prototype.addFilter = function (attribute) {
        var dataset = this.appConfig[this.global.appMode];
        dataset["attributes"][attribute]["filter"] = true;
        dataset["attributeInteracted"][attribute] += 1;
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "filter_added" /* ADD_FILTER */;
        message.data = {
            attribute: attribute,
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    /**
     * Disables a filter and resets the visualization.
     */
    MainActivityComponent.prototype.removeFilter = function (attribute, updateVis, sendMessage) {
        if (updateVis === void 0) { updateVis = true; }
        if (sendMessage === void 0) { sendMessage = true; }
        var dataset = this.appConfig[this.global.appMode];
        var attrConfig = dataset["attributes"][attribute];
        if (this.utilsService.isMeasure(dataset, attribute, "N")) {
            attrConfig["filterModel"] = attrConfig["types"];
        }
        else if (this.utilsService.isMeasure(dataset, attribute, "O")) {
            attrConfig["filterModel"] = attrConfig["types"];
        }
        else if (this.utilsService.isMeasure(dataset, attribute, "Q")) {
            attrConfig["filterModel"] = [attrConfig["min"], attrConfig["max"]];
        }
        else if (this.utilsService.isMeasure(dataset, attribute, "T")) {
            attrConfig["filterModel"] = [attrConfig["min"], attrConfig["max"]];
        }
        attrConfig["filter"] = false;
        if (updateVis)
            this.updateVis();
        if (sendMessage) {
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "filter_removed" /* REMOVE_FILTER */;
            message.data = {
                attribute: attribute,
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    /**
     * Disable all filters and reset the visualization.
     */
    MainActivityComponent.prototype.removeFilters = function (updateVis) {
        var _this = this;
        if (updateVis === void 0) { updateVis = true; }
        this.appConfig[this.global.appMode].attributeList.forEach(function (attribute) {
            return _this.removeFilter(attribute, false, false);
        });
        if (updateVis)
            this.updateVis();
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "all_filters_removed" /* REMOVE_ALL_FILTERS */;
        message.data = {
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    /**
     * Reset all encodings.
     */
    MainActivityComponent.prototype.resetAllEncodings = function () {
        this.onChangeChart(null, true, false);
        this.onChangeAttribute(null, "x_axis", true, false);
        this.onChangeAttribute(null, "y_axis", true, false);
        // ToDo:- Revisit this code-block when the onChangeColorByMode is available by default for all appModes.
        if (this.global.appMode == "ADMIN") {
            this.onChangeVISColorByMode(null, true, false);
            this.onChangeAttributeColorByMode(null, true, false);
        }
        this.updateVis(); // only update the vis after all encodings are reset
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "all_encodings_removed" /* REMOVE_ALL_ENCODINGS */;
        message.data = {
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    MainActivityComponent.prototype.onChangeChart = function (event, reset, updateVis) {
        if (reset === void 0) { reset = false; }
        if (updateVis === void 0) { updateVis = true; }
        var dataset = this.appConfig[this.global.appMode];
        if (reset)
            dataset["chartType"] = null;
        this.currentPlotType = dataset["chartType"];
        if (updateVis) {
            initializePlotInstance(this, this.currentPlotType);
            this.updateVis();
        }
        if (!reset) {
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "chart_type_changed" /* CHANGE_CHART_TYPE */;
            message.data = {
                chartChanged: dataset["chartType"],
                x: dataset["xVar"],
                y: dataset["yVar"],
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    MainActivityComponent.prototype.onChangeAttribute = function (event, axis, reset, updateVis) {
        if (reset === void 0) { reset = false; }
        if (updateVis === void 0) { updateVis = true; }
        var dataset = this.appConfig[this.global.appMode];
        switch (axis) {
            case "x_axis":
                if (reset)
                    dataset["xVar"] = null;
                if (dataset["xVar"])
                    dataset["attributeInteracted"][dataset["xVar"]] += 1;
                break;
            case "y_axis":
                if (reset)
                    dataset["yVar"] = null;
                if (dataset["yVar"])
                    dataset["attributeInteracted"][dataset["yVar"]] += 1;
                break;
        }
        if (updateVis) {
            initializePlotInstance(this, this.currentPlotType);
            this.updateVis();
        }
        if (!reset) {
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "axis_attribute_changed" /* CHANGE_AXIS_ATTRIBUTE */;
            message.data = {
                axisChanged: axis,
                x: dataset["xVar"],
                y: dataset["yVar"],
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    MainActivityComponent.prototype.onChangeAggregation = function (event, updateVis) {
        if (updateVis === void 0) { updateVis = true; }
        var dataset = this.appConfig[this.global.appMode];
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "aggregation_changed" /* CHANGE_AGGREGATION */;
        message.data = {
            aggChanged: dataset["aggType"],
            x: dataset["xVar"],
            y: dataset["yVar"],
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
        if (updateVis) {
            initializePlotInstance(this, this.currentPlotType);
            this.updateVis();
        }
    };
    MainActivityComponent.prototype.onChangeAttributeColorByMode = function (event, reset, updateVis) {
        if (reset === void 0) { reset = false; }
        if (updateVis === void 0) { updateVis = true; }
        if (!reset) {
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "attribute_panel_color_by_changed" /* CHANGE_ATTRIBUTE_COLOR_BY_MODE */;
            message.data = {
                colorBy: event,
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    MainActivityComponent.prototype.onChangeVISColorByMode = function (event, reset, updateVis) {
        if (reset === void 0) { reset = false; }
        if (updateVis === void 0) { updateVis = true; }
        var dataset = this.appConfig[this.global.appMode];
        if (reset)
            dataset["colorByMode"] = null;
        if (updateVis) {
            initializePlotInstance(this, this.currentPlotType);
            this.updateVis();
        }
        if (!reset) {
            /* Prepare and Send New Message - Start */
            var message = this.utilsService.initializeNewMessage(this);
            message.interactionType = "vis_color_by_changed" /* CHANGE_VIS_COLOR_BY_MODE */;
            message.data = {
                colorBy: dataset["colorByMode"],
                eventX: null,
                eventY: null,
            };
            this.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    MainActivityComponent.prototype.onChangeFilter = function (attribute, changeType) {
        var dataset = this.appConfig[this.global.appMode];
        dataset["attributeInteracted"][attribute] += 1;
        /* Prepare and Send New Message - Start */
        var message = this.utilsService.initializeNewMessage(this);
        message.interactionType = "filter_changed" /* CHANGE_FILTER */;
        message.data = {
            attribute: attribute,
            value: dataset["attributes"][attribute]["filterModel"],
            filterType: changeType,
            eventX: null,
            eventY: null,
        };
        this.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
        this.updateVis();
    };
    /**
     * Sends mouseover for dataPoint to server when row is hovered on
     * in details table for bar/line/dot plots.
     */
    MainActivityComponent.prototype.mouseoverRow = function (event, dataPoint) {
        var dataset = this.appConfig[this.global.appMode];
        var originalDatasetDict = this.userConfig["originalDatasetDict"];
        dataPoint["xVar"] = dataset["xVar"] == null ? null : originalDatasetDict[dataPoint["id"]][dataset["xVar"]];
        dataPoint["yVar"] = dataset["yVar"] == null ? null : originalDatasetDict[dataPoint["id"]][dataset["yVar"]];
        this.utilsService.mouseoverItem(this, event, dataPoint);
    };
    /**
     * Sends mouseout for dataPoint to server when row is hovered off
     * in details table for bar/line/dot plots.
     */
    MainActivityComponent.prototype.mouseoutRow = function (event, dataPoint) {
        var dataset = this.appConfig[this.global.appMode];
        var originalDatasetDict = this.userConfig["originalDatasetDict"];
        dataPoint["xVar"] = dataset["xVar"] == null ? null : originalDatasetDict[dataPoint["id"]][dataset["xVar"]];
        dataPoint["yVar"] = dataset["yVar"] == null ? null : originalDatasetDict[dataPoint["id"]][dataset["yVar"]];
        this.utilsService.mouseoutItem(this, event, dataPoint);
    };
    /**
     * SORT the incoming attribute panel array based on the sort by parameter
     */
    MainActivityComponent.prototype.customSortAttributePanel = function (array) {
        var dataset = this.appConfig[this.global.appMode];
        var arrayCopy = JSON.parse(JSON.stringify(array));
        switch (this.userConfig["attributeSortByMode"]) {
            case "default":
                break;
            case "reverse-dtype":
                arrayCopy = [];
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["N"]);
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["O"]);
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["T"]);
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["Q"]);
                break;
            case "dtype":
                arrayCopy = [];
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["Q"]);
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["T"]);
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["O"]);
                arrayCopy.push.apply(arrayCopy, dataset["attributeDatatypeList"]["N"]);
                break;
            case "Focus 0-1":
                arrayCopy.sort(function (n1, n2) {
                    return dataset["attributeInteracted"][n1] - dataset["attributeInteracted"][n2];
                });
                break;
            case "Focus 1-0":
                arrayCopy.sort(function (n1, n2) {
                    return dataset["attributeInteracted"][n2] - dataset["attributeInteracted"][n1];
                });
                break;
            case "A-Z, 0-9":
                arrayCopy.sort(function (n1, n2) {
                    var a1 = n1.toLowerCase(), a2 = n2.toLowerCase();
                    if (a1 < a2)
                        //sort string ascending
                        return -1;
                    if (a1 > a2)
                        return 1;
                    return 0; // default return value (no sorting)
                });
                break;
            case "Z-A, 9-0":
                arrayCopy.sort(function (n1, n2) {
                    var a1 = n1.toLowerCase(), a2 = n2.toLowerCase();
                    if (a1 < a2)
                        //sort string descending
                        return 1;
                    if (a1 > a2)
                        return -1;
                    return 0; // default return value (no sorting)
                });
                break;
            default:
                console.log("Invalid attribute panel Sort By option; Do nothing.");
                break;
        }
        // remove primary Key and label Key from awareness panel
        arrayCopy = arrayCopy.filter(function (el) { return el !== dataset["primaryKey"] && el !== dataset["labelKey"]; });
        return arrayCopy;
    };
    /**
     * SORT the incoming awareness panel array based on the sort by parameter
     */
    MainActivityComponent.prototype.customSortAwarenessPanel = function (array) {
        if (this.global.appType == "CONTROL")
            return array;
        var dataset = this.appConfig[this.global.appMode];
        // remove primary Key and label Key from awareness panel
        var arrayCopy = JSON.parse(JSON.stringify(array)).filter(function (el) { return el !== dataset["primaryKey"] && el !== dataset["labelKey"]; });
        switch (this.userConfig["awarenessSortByMode"]) {
            case "A-Z, 0-9":
                arrayCopy.sort(function (n1, n2) {
                    var a1 = n1.toLowerCase(), a2 = n2.toLowerCase();
                    if (a1 < a2)
                        //sort string ascending
                        return -1;
                    if (a1 > a2)
                        return 1;
                    return 0; // default return value (no sorting)
                });
                break;
            case "Z-A, 9-0":
                arrayCopy.sort(function (n1, n2) {
                    var a1 = n1.toLowerCase(), a2 = n2.toLowerCase();
                    if (a1 < a2)
                        //sort string descending
                        return 1;
                    if (a1 > a2)
                        return -1;
                    return 0; // default return value (no sorting)
                });
                break;
            case "Bias 0-1":
                arrayCopy.sort(function (n1, n2) {
                    return dataset["attributeBiasValues"][n1] - dataset["attributeBiasValues"][n2];
                });
                break;
            case "Bias 1-0":
                arrayCopy.sort(function (n1, n2) {
                    return dataset["attributeBiasValues"][n2] - dataset["attributeBiasValues"][n1];
                });
                break;
            default:
                console.log("Invalid awareness Panel Sort By option; Do nothing.");
                break;
        }
        return arrayCopy;
    };
    MainActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "main-activity",
            template: __webpack_require__(/*! ./component.html */ "./src/app/main-activity/component.html"),
            providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]],
            styles: [__webpack_require__(/*! ./component.scss */ "./src/app/main-activity/component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _models_config__WEBPACK_IMPORTED_MODULE_7__["SessionPage"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], MainActivityComponent);
    return MainActivityComponent;
}());

/** ======================= CONVENIENCE FUNCTIONS ========================= */
/**
 * Set default values for each data set in AppConfig.
 */
function initializeAppModes(appConfig) {
    // iterate datasets, setting dataset-level configuration keys
    for (var appMode in appConfig) {
        if (appConfig.hasOwnProperty(appMode)) {
            var dataset = appConfig[appMode];
            (dataset["chartType"] = null),
                (dataset["xVar"] = null),
                (dataset["yVar"] = null),
                (dataset["aggType"] = "avg"),
                (dataset["colorByMode"] = "rel"),
                (dataset["hoveredObject"] = { hovered: false }),
                (dataset["hoveredObjects"] = { binName: null, binAttr: null, points: {} }),
                (dataset["selectedObject"] = { selected: false }),
                (dataset["selectedObjects"] = {}),
                (dataset["selectedGroups"] = {}),
                (dataset["attributeInteracted"] = {}),
                (dataset["ratioAttributeInteracted"] = {}),
                (dataset["attributeBiasValues"] = {}),
                (dataset["sumAttributeBiasValues"] = 0),
                (dataset["attributeDistribution"] = {
                    original: {},
                    interacted: {},
                }),
                (dataset["attributeCoverage"] = {
                    interacted: {},
                });
            // iterate attributes in dataset, setting attribute-level configuration keys
            for (var key in dataset["attributes"]) {
                if (dataset["attributes"].hasOwnProperty(key)) {
                    var attribute = dataset["attributes"][key];
                    (attribute["filter"] = false),
                        (attribute["task"] = false),
                        (attribute["taskModel"] = {}),
                        (attribute["taskType"] = "proportional"),
                        (attribute["awarenessPanel"] = {
                            isExpanded: false,
                            isBookmarked: false,
                        });
                }
            }
        }
    }
    return appConfig;
}
/**
 * Return new plot instance.
 */
function createPlotInstance(context, plotObject) {
    return new plotObject(context.utilsService, context.chatService, context.global, context.userConfig, context.appConfig);
}
/**
 * Initializes plot based on incoming chart type.
 */
function initializePlotInstance(context, chartType) {
    switch (chartType) {
        case "scatterplot":
            // use VIS Matrix to determine which version to initialize
            var dataset = context.appConfig[context.global.appMode];
            var xVar = dataset["xVar"];
            var yVar = dataset["yVar"];
            var xIsQ = context.utilsService.isMeasure(dataset, xVar, "Q");
            var yIsQ = context.utilsService.isMeasure(dataset, yVar, "Q");
            if (!(xVar || yVar) || xIsQ || yIsQ) {
                context.currentPlotInstance = "scatterplot";
                context.scatterPlotInstance.initialize();
            }
            else {
                context.currentPlotInstance = "dotplot";
                context.dotPlotInstance.initialize();
            }
            break;
        case "stripplot":
            context.currentPlotInstance = "stripplot";
            context.stripPlotInstance.initialize();
            break;
        case "barchart":
            context.currentPlotInstance = "barchart";
            context.barChartInstance.initialize();
            break;
        case "linechart":
            context.currentPlotInstance = "linechart";
            context.lineChartInstance.initialize();
            break;
        case null:
            context.currentPlotInstance = null;
            break;
        default:
            console.log("Invalid plot type '" + chartType + "'");
            break;
    }
}
/**
 * Set configObject Y Axis Title and Format and return configObject.
 */
function setYAxisTitle(awarenessMode, configObject) {
    var layer0YAxis = configObject["layer"][0]["encoding"]["y"]["axis"];
    var layer1YAxis = configObject["layer"][1]["encoding"]["y"]["axis"];
    switch (awarenessMode) {
        case "Raw":
            layer0YAxis["title"] = "# Datapoints";
            layer1YAxis["title"] = "# Datapoints";
            layer0YAxis["format"] = null;
            layer1YAxis["format"] = null;
            break;
        case "Percentage":
            layer0YAxis["title"] = "Percentage";
            layer1YAxis["title"] = "Percentage";
            layer0YAxis["format"] = "%";
            layer1YAxis["format"] = "%";
            break;
    }
    return configObject;
}
/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {CanvasRenderingContext2D} context The context to render the text.
 * @param {String} text The text to be rendered.
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(context, text) {
    var metrics = context.measureText(text);
    return metrics.width;
}
/**
 * Uses textarea to decode HTML characters
 *
 * @param {HTMLTextAreaElement} el The element to render the html text.
 * @param {String} html The text to be rendered.
 *
 * @see https://stackoverflow.com/a/7394787
 */
function decodeHtml(el, html) {
    el.innerHTML = html;
    return el.value;
}


/***/ }),

/***/ "./src/app/models/config.ts":
/*!**********************************!*\
  !*** ./src/app/models/config.ts ***!
  \**********************************/
/*! exports provided: divergentColorRange, sequentialColorRange, SessionPage, DeploymentConfig, UserConfig, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergentColorRange", function() { return divergentColorRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialColorRange", function() { return sequentialColorRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPage", function() { return SessionPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfig", function() { return DeploymentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfig", function() { return UserConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/services/utils.service.ts");

// libraries


// local

var UtilsServiceObj = new _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]();
var participantId = UtilsServiceObj.generateRandomUniqueString(12);
var divergentColorRange = ["#a5d6a7", "#eeeeee", "#ef9a9a"];
var sequentialColorRange = ["#ffffff", "#3498db"];
var SessionPage = /** @class */ (function () {
    function SessionPage(utils) {
        this.utils = utils;
        this["app-practice"] = { completed: false, timestamp: 0 };
        this["app-live"] = { completed: false, timestamp: 0 };
        this["participantId"] = participantId; // 12 character long unique identifier
        this["appMode"] = "colleges.csv"; // Name of the dataset
        this["appLevel"] = "colleges"; // Practice / Live
        // "appType": string = this.utils.generateRandomAppType(); // CONTROL / AWARENESS
        this["appType"] = "ADMIN"; // CONTROL | ADMIN | AWARENESS
    }
    SessionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], SessionPage);
    return SessionPage;
}());

var DeploymentConfig = Object.freeze({
    //SERVER_URL: "https://lumos-webapp-4aeadb3bf30d.herokuapp.com/"
    SERVER_URL: "http://localhost:3000"
});
/**
 * USER SPECIFIC SETTINGS
 */
var UserConfig = {
    // Default settings for various parameters
    attributeSortByMode: "default",
    attributeColorByMode: "rel",
    attributeColorScale: "Sequential",
    awarenessMode: "Percentage",
    awarenessSortByMode: "Bias 1-0",
    awarenessColorScale: "Divergent",
    interpolateMode: "monotone",
    axisRescale: false,
    jitterScatterplotPoints: false,
    sizes: {
        awarenessPanel: {
            width: 0,
            height: 100,
        },
    },
    filterMultiselectDropdownSettings: {
        singleSelection: false,
        enableCheckAll: false,
        allowSearchFilter: false,
    },
    awarenessLayerMultiselectDropdownSettings: {
        singleSelection: false,
        itemsShowLimit: 1,
        enableCheckAll: false,
        allowSearchFilter: false,
    },
    originalDataset: [],
    originalDatasetDict: {},
    hoverTimer: null,
    hoverStartTime: 0,
    listHoverTimer: null,
    // Color scales for attributes and data points
    awarenessDivergentColorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
        .domain([0, 0.5, 1])
        .range(divergentColorRange),
    awarenessSequentialColorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
        .domain([0, 1])
        .range(sequentialColorRange),
    focusDivergentColorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
        .domain([0, 0.5, 1])
        .range(divergentColorRange),
    focusSequentialColorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
        .domain([0, 1])
        .range(sequentialColorRange),
    // Ordered Lists of all setting options
    charts: ["scatterplot", "stripplot", "barchart", "linechart"],
    aggregations: ["count", "avg", "min", "max", "sum"],
    awarenessModes: ["Percentage", "Raw"],
    colorByModes: ["abs", "rel", "binary"],
    colorScales: ["Divergent", "Sequential"],
    attributeControlSortByModes: ["default", "reverse-dtype", "dtype", "A-Z, 0-9", "Z-A, 9-0"],
    attributeSortByModes: ["default", "reverse-dtype", "dtype", "Focus 1-0", "Focus 0-1", "A-Z, 0-9", "Z-A, 9-0"],
    awarenessSortByModes: ["Bias 1-0", "Bias 0-1", "A-Z, 0-9", "Z-A, 9-0"],
    awarenessVisLayers: ["Data", "Focus", "Selection"],
    awarenessVisLayerTypes: ["Data", "Focus", "Selection"],
    interpolateModes: [
        "monotone",
        "linear",
        "step",
        "step-before",
        "step-after",
        "natural",
        "basis",
        "cardinal",
        "cardinal-open",
        "cardinal-closed",
    ],
    // Mappings of settings to display names
    chartMapping: {
        scatterplot: "Scatter Plot",
        stripplot: "Strip Plot",
        dotplot: "Dot Plot",
        barchart: "Bar Chart",
        linechart: "Line Chart",
    },
    aggregationMapping: {
        count: "Count",
        avg: "Average",
        min: "Minimum",
        max: "Maximum",
        sum: "Sum",
    },
    colorByModeMapping: {
        abs: "Absolute Freq",
        rel: "Relative Freq",
        binary: "Binary",
    },
    colorScaleMapping: {
        Divergent: "Divergent",
        Sequential: "Sequential",
    },
    sortByModeMapping: {
        default: "Default",
        dtype: "Data Type &#8593",
        "reverse-dtype": "Data Type &#8595",
        "Focus 1-0": "Focus &#8595",
        "Focus 0-1": "Focus &#8593",
        "Bias 1-0": "Different &#8594 Similar",
        "Bias 0-1": "Similar &#8594; Different",
        "A-Z, 0-9": "A-Z &#8226; 0-9",
        "Z-A, 9-0": "Z-A &#8226; 9-0",
    },
    datatypeIconMapping: {
        Q: {
            "fa-class": "fa-hashtag",
            "fa-unicode": "&#xf292;",
        },
        T: {
            "fa-class": "fa-calendar",
            "fa-unicode": "&#xf133;",
        },
        O: {
            "fa-class": "fa-font",
            "fa-unicode": "&#xf031;",
        },
        N: {
            "fa-class": "fa-font",
            "fa-unicode": "&#xf031;",
        },
    },
};
/**
 * DATASET SPECIFIC SETTINGS
 */
var AppConfig = {
    /**
     * 1. Cars data set
     */
    "cars.csv": {
        dataset: "cars.csv",
        primaryKey: "id",
        labelKey: "name",
        orderedAttributeList: [
            "id",
            "name",
            "Length",
            "Width",
            "Height",
            "Number of Forward Gears",
            "Torque",
            "Horsepower",
            "City mpg",
            "Highway mpg",
            "Transmission",
            "Driveline",
            "Fuel Type",
        ],
        attributes: {
            Length: {
                name: "Length",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Width: {
                name: "Width",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Height: {
                name: "Height",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Number of Forward Gears": {
                name: "Forward Gears",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Torque: {
                name: "Torque",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Horsepower: {
                name: "Horsepower",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "City mpg": {
                name: "City mpg",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Highway mpg": {
                name: "Highway mpg",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Transmission: {
                name: "Transmission",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Driveline: {
                name: "Driveline",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Fuel Type": {
                name: "Fuel Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            id: {
                name: "ID",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            name: {
                name: "Name",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
    /**
     * 2. Movies data set
     */
    "movies-w-year.csv": {
        dataset: "movies-w-year.csv",
        primaryKey: "id",
        labelKey: "Title",
        orderedAttributeList: [
            "id",
            "Title",
            "Genre",
            "Creative Type",
            "Content Rating",
            "Release Year",
            "Running Time",
            "Production Budget",
            "Worldwide Gross",
            "Rotten Tomatoes Rating",
            "IMDB Rating",
        ],
        attributes: {
            "Running Time": {
                name: "Running Time",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Rotten Tomatoes Rating": {
                name: "Rotten Tomatoes Rating",
                datatype: "Q",
                max: -Infinity,
                step: 0.1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "IMDB Rating": {
                name: "IMDB Rating",
                datatype: "Q",
                max: -Infinity,
                step: 0.1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Worldwide Gross": {
                name: "Worldwide Gross",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Production Budget": {
                name: "Production Budget",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Release Year": {
                name: "Release Year",
                datatype: "T",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            id: {
                name: "id",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Title: {
                name: "Title",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Genre: {
                name: "Genre",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Creative Type": {
                name: "Creative Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Content Rating": {
                name: "Content Rating",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
    /**
     * 3. Cars with years data set
     */
    "cars-w-year.csv": {
        dataset: "cars-w-year.csv",
        primaryKey: "id",
        labelKey: "",
        orderedAttributeList: [
            "id",
            "Year",
            "Origin",
            "MPG",
            "Cylinders",
            "Weight",
            "Horsepower",
            "Acceleration",
            "Displacement",
        ],
        attributes: {
            MPG: {
                name: "MPG",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Cylinders: {
                name: "Cylinders",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Displacement: {
                name: "Displacement",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Horsepower: {
                name: "Horsepower",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Weight: {
                name: "Weight",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Acceleration: {
                name: "Aceleration",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Year: {
                name: "Year",
                datatype: "T",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            id: {
                name: "id",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Origin: {
                name: "Origin",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
    /**
     * 4. Housing data set
     */
    "housing.csv": {
        dataset: "housing.csv",
        primaryKey: "id",
        labelKey: "",
        orderedAttributeList: [
            "id",
            "Fireplaces",
            "Lot Area",
            "Price",
            "Rooms",
            "Satisfaction",
            "Year",
            "Central Air",
            "Fence Type",
            "Foundation Type",
            "Garage Type",
            "Heating Type",
            "Home Type",
            "Lot Config",
            "Roof Style",
        ],
        attributes: {
            Rooms: {
                name: "Rooms",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Fireplaces: {
                name: "Fireplaces",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Price: {
                name: "Price",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Satisfaction: {
                name: "Satisfaction",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Lot Area": {
                name: "Lot Area",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Year: {
                name: "Year",
                datatype: "T",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            id: {
                name: "id",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Lot Config": {
                name: "Lot Config",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Home Type": {
                name: "Home Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Roof Style": {
                name: "Roof Style",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Foundation Type": {
                name: "Foundation Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Heating Type": {
                name: "Heating Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Central Air": {
                name: "Central Air",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Garage Type": {
                name: "Garage Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Fence Type": {
                name: "Fence Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
    /**
     * 5. European soccer players data set
     */
    "euro.csv": {
        dataset: "euro.csv",
        primaryKey: "id",
        labelKey: "Name",
        orderedAttributeList: ["id", "Name", "Age", "Country", "Club", "Position", "Foot", "Goals", "Salary"],
        attributes: {
            Age: {
                name: "Age",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Salary: {
                name: "Salary",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Goals: {
                name: "Goals",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            id: {
                name: "id",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Name: {
                name: "Name",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Position: {
                name: "Position",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Foot: {
                name: "Foot",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Club: {
                name: "Club",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Country: {
                name: "Country",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
    /**
     * 6. Colleges data set
     */
    "colleges.csv": {
        dataset: "colleges.csv",
        primaryKey: "id",
        labelKey: "Name",
        orderedAttributeList: [
            "id",
            "Name",
            "Control",
            "Region",
            "Locale",
            "Admission Rate",
            "ACT Median",
            "SAT Average",
            "Population",
            "Average Cost",
            "Expenditure",
            "Average Faculty Salary",
            "Median Debt",
            "Median Family Income",
            "Median Earnings",
        ],
        attributes: {
            "Admission Rate": {
                name: "Admission Rate",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "ACT Median": {
                name: "ACT Median",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "SAT Average": {
                name: "SAT Average",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Population: {
                name: "Population",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Average Cost": {
                name: "Average Cost",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            Expenditure: {
                name: "Expenditure",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Average Faculty Salary": {
                name: "Average Faculty Salary",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Median Debt": {
                name: "Median Debt",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Median Family Income": {
                name: "Median Family Income",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Median Earnings": {
                name: "Median Earnings",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            id: {
                name: "id",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Name: {
                name: "Name",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Control: {
                name: "Control",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Region: {
                name: "Region",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            Locale: {
                name: "Locale",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
    /**
     * 7. Credit Risk data set
     */
    "credit_risk.csv": {
        dataset: "credit_risk.csv",
        primaryKey: "id",
        labelKey: "",
        orderedAttributeList: [
            "id",
            "Age",
            "Home Ownership Type",
            "Annual Income",
            "Employment Length",
            "Credit History",
            "Default History",
            "Loan Intent",
            "Loan Amount",
            "Loan Interest Rate",
        ],
        attributes: {
            Age: {
                name: "Age",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Annual Income": {
                name: "Annual Income",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Employment Length": {
                name: "Employment Length",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Credit History": {
                name: "Credit History",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Loan Amount": {
                name: "Loan Amount",
                datatype: "Q",
                max: -Infinity,
                step: 1,
                min: Infinity,
                filterModel: [0, 1],
            },
            "Loan Interest Rate": {
                name: "Loan Interest Rate",
                datatype: "Q",
                max: -Infinity,
                step: 0.01,
                min: Infinity,
                filterModel: [0, 1],
            },
            id: {
                name: "id",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Home Ownership Type": {
                name: "Home Ownership Type",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Default History": {
                name: "Default History",
                datatype: "N",
                types: [],
                filterModel: [],
            },
            "Loan Intent": {
                name: "Loan Intent",
                datatype: "N",
                types: [],
                filterModel: [],
            },
        },
    },
};


/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/models/viz.ts":
/*!*******************************!*\
  !*** ./src/app/models/viz.ts ***!
  \*******************************/
/*! exports provided: ScatterPlotConfig, StripPlotConfig, DotPlotConfig, BarChartConfig, LineChartConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterPlotConfig", function() { return ScatterPlotConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripPlotConfig", function() { return StripPlotConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotPlotConfig", function() { return DotPlotConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartConfig", function() { return BarChartConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartConfig", function() { return LineChartConfig; });
var ScatterPlotConfig = /** @class */ (function () {
    function ScatterPlotConfig() {
    }
    return ScatterPlotConfig;
}());

var StripPlotConfig = /** @class */ (function () {
    function StripPlotConfig() {
    }
    return StripPlotConfig;
}());

var DotPlotConfig = /** @class */ (function () {
    function DotPlotConfig() {
    }
    return DotPlotConfig;
}());

var BarChartConfig = /** @class */ (function () {
    function BarChartConfig() {
    }
    return BarChartConfig;
}());

var LineChartConfig = /** @class */ (function () {
    function LineChartConfig() {
    }
    return LineChartConfig;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: AiChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiChatService", function() { return AiChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");




var AiChatService = /** @class */ (function () {
    function AiChatService(socket) {
        this.socket = socket;
        this.isConnected = false;
        this.initSocket();
    }
    AiChatService.prototype.initSocket = function () {
        var _this = this;
        this.socket.on('connect', function () {
            console.log('Connected to server');
            _this.isConnected = true;
        });
        this.socket.on('disconnect', function () {
            console.log('Disconnected from server');
            _this.isConnected = false;
        });
        this.socket.on('connect_error', function (error) {
            console.error('Connection error:', error);
            _this.isConnected = false;
        });
    };
    AiChatService.prototype.connectToSocket = function () {
        if (!this.isConnected) {
            console.log('Attempting to connect...');
            this.socket.connect();
        }
    };
    AiChatService.prototype.disconnectFromSocket = function () {
        if (this.socket) {
            this.socket.removeAllListeners();
            this.socket.disconnect();
        }
    };
    AiChatService.prototype.sendMessage = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.isConnected) {
                    throw new Error('未连接到服务器');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log('Sending message:', message);
                        // 发送消息
                        _this.socket.emit('send_chat_message', { message: message });
                        console.log('Message sent, waiting for response...');
                        // 清理之前的订阅
                        _this.cleanupSubscriptions();
                        // 设置响应监听器
                        _this.responseSubscription = _this.socket
                            .fromEvent('receive_chat_response')
                            .subscribe({
                            next: function (response) {
                                console.log('Received response:', response);
                                _this.cleanupSubscriptions();
                                clearTimeout(timeoutId);
                                resolve(response.response);
                            },
                            error: function (error) {
                                console.error('Response error:', error);
                                _this.cleanupSubscriptions();
                                clearTimeout(timeoutId);
                                reject(error);
                            }
                        });
                        // 设置错误监听器
                        _this.errorSubscription = _this.socket
                            .fromEvent('chat_error')
                            .subscribe({
                            next: function (error) {
                                console.error('Received error:', error);
                                _this.cleanupSubscriptions();
                                clearTimeout(timeoutId);
                                reject(error);
                            },
                            error: function (error) {
                                console.error('Error subscription error:', error);
                                _this.cleanupSubscriptions();
                                clearTimeout(timeoutId);
                                reject(error);
                            }
                        });
                        // 设置超时（减少超时时间以便测试）
                        var timeoutId = setTimeout(function () {
                            console.error('Request timed out');
                            _this.cleanupSubscriptions();
                            reject(new Error('请求超时'));
                        }, 10000); // 改为 10 秒以便测试
                    })];
            });
        });
    };
    AiChatService.prototype.cleanupSubscriptions = function () {
        if (this.responseSubscription) {
            this.responseSubscription.unsubscribe();
            this.responseSubscription = null;
        }
        if (this.errorSubscription) {
            this.errorSubscription.unsubscribe();
            this.errorSubscription = null;
        }
    };
    // 获取连接状态的观察者
    AiChatService.prototype.getConnectionStatus = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var connectHandler = function () { return observer.next(true); };
            var disconnectHandler = function () { return observer.next(false); };
            _this.socket.on('connect', connectHandler);
            _this.socket.on('disconnect', disconnectHandler);
            return function () {
                _this.socket.removeListener('connect', connectHandler);
                _this.socket.removeListener('disconnect', disconnectHandler);
            };
        });
    };
    AiChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]])
    ], AiChatService);
    return AiChatService;
}());



/***/ }),

/***/ "./src/app/services/http-error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/http-error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");

// libraries


// local

/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ""; }
            return function (operation, result) {
                if (operation === void 0) { operation = "operation"; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ""; }
        if (operation === void 0) { operation = "operation"; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = error.error instanceof ErrorEvent
                ? error.error.message
                : "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpErrorHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// libraries

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// libraries



// 用于与服务器通信
var ChatService = /** @class */ (function () {
    function ChatService(vizSocket) {
        this.vizSocket = vizSocket;
    }
    ChatService.prototype.connectToSocket = function () {
        this.vizSocket.connect();
    };
    ChatService.prototype.removeAllListenersAndDisconnectFromSocket = function () {
        this.vizSocket.removeAllListeners();
        this.vizSocket.disconnect();
    };
    ChatService.prototype.sendMessageToSaveSessionLogs = function (data, participantId) {
        var payload = {
            data: data,
            participantId: participantId,
        };
        this.vizSocket.emit("on_session_end_page_level_logs", payload);
    };
    ChatService.prototype.sendMessageToSaveLogs = function () {
        this.vizSocket.emit("on_save_logs", null);
    };
    ChatService.prototype.sendMessageToRestartBiasComputation = function () {
        this.vizSocket.emit("on_reset_bias_computation", null);
    };
    ChatService.prototype.sendInteractionResponse = function (payload) {
        this.vizSocket.emit("on_interaction", payload);
    };
    ChatService.prototype.getDisconnectEventResponse = function () {
        return this.vizSocket.fromEvent("disconnect").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }));
    };
    ChatService.prototype.getConnectEventResponse = function () {
        return this.vizSocket.fromEvent("connect").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }));
    };
    ChatService.prototype.getInteractionResponse = function () {
        return this.vizSocket
            .fromEvent("interaction_response")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }));
    };
    ChatService.prototype.getAttributeDistribution = function () {
        return this.vizSocket
            .fromEvent("attribute_distribution")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }));
    };
    ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");

// libraries



var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    /**
     * Generates a random alphanumeric string of `length` characters.
     */
    UtilsService.prototype.generateRandomUniqueString = function (length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    /**
     * Generates random app type between CONTROL and AWARENESS
     */
    UtilsService.prototype.generateRandomAppType = function () {
        return Math.random() >= 0.5 ? "CONTROL" : "AWARENESS";
    };
    /**
     * Get current time. E.g. usage: timestamp of interaction
     */
    UtilsService.prototype.getCurrentTime = function () {
        return new Date().getTime();
    };
    /**
     * Creates 2 smaller arrays from attribute list for single item detail view.
     */
    UtilsService.prototype.chunkAttrArray = function (dataset) {
        var arr = dataset.attributeList;
        var chunkSize = Math.ceil(arr.length / 2);
        if (chunkSize <= 0)
            throw "Cannot split attributes into 2 columns in detail view.";
        var R = [];
        for (var i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    };
    /**
     * Reducer for calculating sum of a list of numbers.
     */
    UtilsService.prototype.sum = function (acc, cur) {
        return acc + cur;
    };
    /**
     * Reducer for calculating max of a list of numbers.
     */
    UtilsService.prototype.max = function (acc, cur) {
        return acc > cur ? acc : cur;
    };
    /**
     * Reducer for calculating total times visited.
     */
    UtilsService.prototype.sumTimesVisited = function (acc, cur) {
        return acc + cur["timesVisited"];
    };
    /**
     * Reducer for calculating max times visited.
     */
    UtilsService.prototype.maxTimesVisited = function (acc, cur) {
        return acc > cur["timesVisited"] ? acc : cur["timesVisited"];
    };
    /**
     * Return bool if attribute is measurement type "N", "O", "T", or "Q".
     */
    UtilsService.prototype.isMeasure = function (dataset, attr, measureScale) {
        return attr ? dataset.attributeDatatypeList[measureScale].indexOf(attr) !== -1 : false;
    };
    /**
     * Apply an aggregation function to the X or Y axis using d3 agg functions.
     */
    UtilsService.prototype.aggregate = function (values, aggType, xyVar) {
        if (values.length) {
            switch (aggType) {
                case "count":
                    return d3__WEBPACK_IMPORTED_MODULE_1__["count"](values, function (d) { return d[xyVar]; });
                case "min":
                    return d3__WEBPACK_IMPORTED_MODULE_1__["min"](values, function (d) { return d[xyVar]; });
                case "max":
                    return d3__WEBPACK_IMPORTED_MODULE_1__["max"](values, function (d) { return d[xyVar]; });
                case "avg":
                    return d3__WEBPACK_IMPORTED_MODULE_1__["mean"](values, function (d) { return d[xyVar]; });
                case "sum":
                    return d3__WEBPACK_IMPORTED_MODULE_1__["sum"](values, function (d) { return d[xyVar]; });
                default:
                    return 0; // no agg applied yet
            }
        }
        return 0; // values is empty
    };
    /**
     * Returns string of float rounded to up to 2 decimals formatted with suffix.
     *   e.g. 10,000,000 => 10M; 12,345.6789 => 12.35K
     */
    UtilsService.prototype.formatLargeNum = function (d) {
        if (d === 0)
            return "0";
        if (!d || d < 0)
            return "";
        var digits = (Math.log(d) * Math.LOG10E + 1) | 0;
        if (digits >= 13) {
            return Math.round((d / 1000000000000 + Number.EPSILON) * 100) / 100 + "T";
        }
        else if (digits >= 10) {
            return Math.round((d / 1000000000 + Number.EPSILON) * 100) / 100 + "B";
        }
        else if (digits >= 7) {
            return Math.round((d / 1000000 + Number.EPSILON) * 100) / 100 + "M";
        }
        else if (digits >= 4) {
            return Math.round((d / 1000 + Number.EPSILON) * 100) / 100 + "K";
        }
        return "" + Math.round((d + Number.EPSILON) * 100) / 100;
    };
    /**
     * Colors `dataPoint` based on points in `dataList`.
     */
    UtilsService.prototype.colorDataPoint = function (context, dataPoint, dataList) {
        var dataset = context.appConfig[context.global.appMode];
        if (context.global.appType == "CONTROL" || dataPoint["timesVisited"] == 0) {
            // no bias coloring!!
            dataPoint["ratioTimesVisited"] = 0;
            dataPoint["color"] = "white";
        }
        else {
            // bias color
            switch (dataset["colorByMode"]) {
                case "abs":
                    var sumVisits = dataList.reduce(this.sumTimesVisited, 0);
                    dataPoint["ratioTimesVisited"] = dataPoint["timesVisited"] / sumVisits;
                    dataPoint["color"] = context.userConfig.focusSequentialColorScale(dataPoint["ratioTimesVisited"]);
                    break;
                case "rel":
                    var maxVisits = dataList.reduce(this.maxTimesVisited, 0);
                    dataPoint["ratioTimesVisited"] = dataPoint["timesVisited"] / maxVisits;
                    dataPoint["color"] = context.userConfig.focusSequentialColorScale(dataPoint["ratioTimesVisited"]);
                    break;
                case "binary":
                    var visited = dataPoint["timesVisited"] > 0;
                    dataPoint["ratioTimesVisited"] = !visited ? 0 : 1;
                    dataPoint["color"] = !visited
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(dataPoint["ratioTimesVisited"]);
                    break;
                default:
                    dataPoint["ratioTimesVisited"] = 0;
                    dataPoint["color"] = "white";
                    break;
            }
        }
    };
    /**
     * Returns new message object for communicating with backend server.
     */
    UtilsService.prototype.initializeNewMessage = function (context) {
        var chartType = context.appConfig[context.global.appMode]["chartType"];
        var message = new _models_message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
        (message.appMode = context.global.appMode),
            (message.appType = context.global.appType),
            (message.appLevel = context.global.appLevel),
            (message.chartType = chartType),
            (message.interactionType = ""),
            (message.interactionDuration = 0),
            (message.interactionAt = this.getCurrentTime()),
            (message.participantId = context.global.participantId),
            (message.data = {});
        return message;
    };
    /**
     * Adds the selected item to an object of selected datapoints.
     */
    UtilsService.prototype.clickAddItem = function (context, event, d) {
        var dataset = context.appConfig[context.global.appMode];
        var id = d[dataset["primaryKey"]];
        if (id !== "-" && !dataset["selectedObjects"].hasOwnProperty(id)) {
            // id is valid and does not exist yet in selectedObjects
            d["selected"] = true;
            dataset["selectedObject"] = d;
            dataset["selectedObjects"][id] = d;
            context.userConfig["originalDatasetDict"][id]["selected"] = true;
            /* Prepare and Send New Message - Start */
            var message = this.initializeNewMessage(context);
            message.interactionType = "click_add_item" /* CLICK_ADD_ITEM */;
            message.data["id"] = id;
            message.data["x"] = {
                name: dataset["xVar"],
                value: d["xVar"],
            };
            message.data["y"] = {
                name: dataset["yVar"],
                value: d["yVar"],
            };
            message.data["eventX"] = event.clientX;
            message.data["eventY"] = event.clientY;
            context.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    /**
     * Removes the selected item from the object of selected datapoints.
     */
    UtilsService.prototype.clickRemoveItem = function (context, event, d) {
        var dataset = context.appConfig[context.global.appMode];
        var id = d[dataset["primaryKey"]];
        if (id !== "-" && dataset["selectedObjects"].hasOwnProperty(id)) {
            // id is valid and already exists in selectedObjects
            d["selected"] = false;
            context.userConfig["originalDatasetDict"][id]["selected"] = false;
            delete dataset["selectedObjects"][id];
            /* Prepare and Send New Message - Start */
            var message = this.initializeNewMessage(context);
            message.interactionType = "click_remove_item" /* CLICK_REMOVE_ITEM */;
            message.data["id"] = id;
            message.data["x"] = {
                name: dataset["xVar"],
                value: d["xVar"],
            };
            message.data["y"] = {
                name: dataset["yVar"],
                value: d["yVar"],
            };
            message.data["eventX"] = event.clientX;
            message.data["eventY"] = event.clientY;
            context.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    /**
     * Adds all selected items to an object of selected datapoints.
     */
    UtilsService.prototype.clickGroup = function (context, event, meta) {
        var ids = [];
        var xValues = [];
        var yValues = [];
        var dataset = context.appConfig[context.global.appMode];
        if (dataset["selectedGroups"].hasOwnProperty(meta.binLabel)) {
            // remove group and un-select all points in the group
            delete dataset["selectedGroups"][meta.binLabel];
            meta.binData.forEach(function (d) {
                var id = d[dataset["primaryKey"]];
                if (id !== "-") {
                    // id is valid => push values sequentially, using index as 'key'
                    ids.push(id);
                    xValues.push(d["xVar"]);
                    yValues.push(d["yVar"]);
                    d["selected"] = false;
                    if (dataset["selectedObjects"].hasOwnProperty(id)) {
                        // delete id from selectedObjects
                        delete dataset["selectedObjects"][id];
                        context.userConfig["originalDatasetDict"][id]["selected"] = false;
                    }
                }
            });
        }
        else {
            // add group and select all points in the group
            dataset["selectedGroups"][meta.binLabel] = meta.binData;
            meta.binData.forEach(function (d) {
                var id = d[dataset["primaryKey"]];
                if (id !== "-") {
                    // id is valid => push values sequentially, using index as 'key'
                    ids.push(id);
                    xValues.push(d["xVar"]);
                    yValues.push(d["yVar"]);
                    d["selected"] = true;
                    if (!dataset["selectedObjects"].hasOwnProperty(id)) {
                        // add id to selectedObjects
                        dataset["selectedObjects"][id] = d;
                        context.userConfig["originalDatasetDict"][id]["selected"] = true;
                    }
                }
            });
        }
        /* Prepare and Send New Message - Start */
        var message = this.initializeNewMessage(context);
        message.interactionType = "click_group" /* CLICK_GROUP */;
        message.data["id"] = ids;
        message.data["x"] = {
            name: dataset["xVar"],
            value: xValues,
        };
        message.data["y"] = {
            name: dataset["yVar"],
            value: yValues,
        };
        message.data["agg"] = {
            name: meta.aggName,
            axis: meta.aggAxis,
            value: meta.binValue,
            label: meta.binLabel,
        };
        message.data["eventX"] = event.clientX;
        message.data["eventY"] = event.clientY;
        context.chatService.sendInteractionResponse(message);
        /* Prepare and Send New Message - End */
    };
    /**
     * Adds the hovered item to an object of hovered datapoints.
     */
    UtilsService.prototype.mouseoverItem = function (context, event, d, element, styleAttr) {
        if (element === void 0) { element = null; }
        if (styleAttr === void 0) { styleAttr = null; }
        context.userConfig["hoverStartTime"] = this.getCurrentTime();
        if (!context.userConfig["hoverTimer"]) {
            // no hover timer function yet => set one to act after delay
            var this_1 = this;
            var dataset_1 = context.appConfig[context.global.appMode];
            dataset_1["hoveredObject"] = d; // add data to details table
            var delay = 350; // 350 ms delay before hover counts as an interaction
            context.userConfig["hoverTimer"] = setTimeout(function () {
                context.userConfig["hoverTimer"] = null;
                if (element && styleAttr)
                    d3__WEBPACK_IMPORTED_MODULE_1__["select"](element).style(styleAttr, "cyan");
                /* Prepare and Send New Message - Start */
                var message = this_1.initializeNewMessage(context);
                var startTime = context.userConfig["hoverStartTime"];
                var currentTime = this_1.getCurrentTime();
                message.interactionDuration = currentTime - startTime;
                message.interactionType = "mouseover_item" /* MOUSEOVER_ITEM */;
                message.data["id"] = d[dataset_1["primaryKey"]];
                message.data["x"] = {
                    name: dataset_1["xVar"],
                    value: d["xVar"],
                };
                message.data["y"] = {
                    name: dataset_1["yVar"],
                    value: d["yVar"],
                };
                message.data["eventX"] = event.clientX;
                message.data["eventY"] = event.clientY;
                context.chatService.sendInteractionResponse(message);
                /* Prepare and Send New Message - End */
            }, delay);
        }
    };
    /**
     * Removes the hovered item from the object of hovered datapoints.
     */
    UtilsService.prototype.mouseoutItem = function (context, event, d) {
        var dataset = context.appConfig[context.global.appMode];
        dataset["hoveredObject"] = { hovered: false }; // remove point from table
        if (context.userConfig["hoverTimer"]) {
            // Hover was not long enough => reset for next hover
            clearTimeout(context.userConfig["hoverTimer"]);
            context.userConfig["hoverTimer"] = null;
        }
        else {
            // Hover was long enough => count as an interaction, update server
            /* Prepare and Send New Message - Start */
            var message = this.initializeNewMessage(context);
            var startTime = context.userConfig["hoverStartTime"];
            var currentTime = this.getCurrentTime();
            message.interactionDuration = currentTime - startTime;
            message.interactionType = "mouseout_item" /* MOUSEOUT_ITEM */;
            message.data["id"] = d[dataset["primaryKey"]];
            message.data["x"] = {
                name: dataset["xVar"],
                value: d["xVar"],
            };
            message.data["y"] = {
                name: dataset["yVar"],
                value: d["yVar"],
            };
            message.data["eventX"] = event.clientX;
            message.data["eventY"] = event.clientY;
            context.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    /**
     * Adds all hovered items to an object of hovered datapoints.
     */
    UtilsService.prototype.mouseoverGroup = function (context, event, element, meta) {
        var _this = this;
        var dataPointIDs = [];
        var xValues = [];
        var yValues = [];
        var dataset = context.appConfig[context.global.appMode];
        var originalDatasetDict = context.userConfig["originalDatasetDict"];
        // update hovered Objects and collect them for server
        dataset["hoveredObjects"]["binName"] = meta.binLabel;
        switch (meta.aggAxis) {
            case "x-axis":
                dataset["hoveredObjects"]["binAttr"] = dataset["yVar"];
                break;
            case "y-axis":
                dataset["hoveredObjects"]["binAttr"] = dataset["xVar"];
                break;
        }
        var hoveredPoints = dataset["hoveredObjects"]["points"];
        meta.binData.forEach(function (d) {
            var id = d[dataset["primaryKey"]];
            if (id !== "-") {
                var dataPoint = originalDatasetDict[id];
                if (meta.aggName == "min" || meta.aggName == "max") {
                    // only add points if they are equal to the min or max value
                    if (meta.aggAxis == "x-axis" && dataPoint[dataset["xVar"]] === meta.binValue) {
                        // order of insertion is preserved for the server! super important!!
                        dataPointIDs.push(id);
                        xValues.push(d["xVar"]);
                        yValues.push(d["yVar"]);
                        // use dict OBJECT to update source data by reference!
                        _this.colorDataPoint(context, dataPoint, meta.binData);
                        hoveredPoints[id] = dataPoint; // add new points to details table
                    }
                    else if (meta.aggAxis == "y-axis" && dataPoint[dataset["yVar"]] === meta.binValue) {
                        // order of insertion is preserved for the server! super important!!
                        dataPointIDs.push(id);
                        xValues.push(d["xVar"]);
                        yValues.push(d["yVar"]);
                        // use dict OBJECT to update source data by reference!
                        _this.colorDataPoint(context, dataPoint, meta.binData);
                        hoveredPoints[id] = dataPoint; // add new points to details table
                    }
                }
                else {
                    // order of insertion is preserved for the server! super important!!
                    dataPointIDs.push(id);
                    xValues.push(d["xVar"]);
                    yValues.push(d["yVar"]);
                    // use dict OBJECT to update source data by reference!
                    _this.colorDataPoint(context, dataPoint, meta.binData);
                    hoveredPoints[id] = dataPoint; // add new points to details table
                }
            }
        });
        // remove existing hovered points if they aren't in the new hover group!
        Object.keys(hoveredPoints).forEach(function (id) {
            if (dataPointIDs.indexOf(id) === -1) {
                delete hoveredPoints[id];
            }
        });
        context.userConfig["hoverStartTime"] = this.getCurrentTime();
        if (!context.userConfig["hoverTimer"]) {
            // no hover timer function yet => set one to act after delay
            var this_2 = this;
            var delay = 350; // 350 ms delay before hover counts as an interaction
            context.userConfig["hoverTimer"] = setTimeout(function () {
                // reset timer function and set hovered object properties for point
                context.userConfig["hoverTimer"] = null;
                if (element)
                    d3__WEBPACK_IMPORTED_MODULE_1__["select"](element).style("fill", "cyan");
                /* Prepare and Send New Message - Start */
                var message = this_2.initializeNewMessage(context);
                var startTime = context.userConfig["hoverStartTime"];
                var currentTime = this_2.getCurrentTime();
                message.interactionDuration = currentTime - startTime;
                message.interactionType = "mouseover_group" /* MOUSEOVER_GROUP */;
                message.data["id"] = dataPointIDs;
                message.data["x"] = {
                    name: dataset["xVar"],
                    value: xValues,
                };
                message.data["y"] = {
                    name: dataset["yVar"],
                    value: yValues,
                };
                message.data["agg"] = {
                    name: meta.aggName,
                    axis: meta.aggAxis,
                    value: meta.binValue,
                    label: meta.binLabel,
                };
                message.data["eventX"] = event.clientX;
                message.data["eventY"] = event.clientY;
                context.chatService.sendInteractionResponse(message);
                /* Prepare and Send New Message - End */
            }, delay);
        }
    };
    /**
     * Removes all hovered items from the object of hovered datapoints.
     */
    UtilsService.prototype.mouseoutGroup = function (context, event, meta) {
        var dataset = context.appConfig[context.global.appMode];
        if (context.userConfig["hoverTimer"]) {
            // Reset function if point wasn't hovered on long enough
            clearTimeout(context.userConfig["hoverTimer"]);
            context.userConfig["hoverTimer"] = null;
            // dataset["hoveredObjects"] = { binName: null, points: {} }; // remove hovered objects
        }
        else {
            // Hover was long enough => send message
            var dataPointIDs_1 = [];
            var xValues_1 = [];
            var yValues_1 = [];
            meta.binData.forEach(function (d) {
                var id = d[dataset["primaryKey"]];
                if (id !== "-") {
                    var dataPoint = context.userConfig["originalDatasetDict"][id];
                    if (meta.aggName == "min" || meta.aggName == "max") {
                        // only add points if they are equal to the min or max value
                        if (meta.aggAxis == "x-axis" && dataPoint[dataset["xVar"]] === meta.binValue) {
                            // order of insertion is preserved for the server! super important!!
                            dataPointIDs_1.push(id);
                            xValues_1.push(d["xVar"]);
                            yValues_1.push(d["yVar"]);
                        }
                        else if (meta.aggAxis == "y-axis" && dataPoint[dataset["yVar"]] === meta.binValue) {
                            // order of insertion is preserved for the server! super important!!
                            dataPointIDs_1.push(id);
                            xValues_1.push(d["xVar"]);
                            yValues_1.push(d["yVar"]);
                        }
                    }
                    else {
                        // order of insertion is preserved for the server! super important!!
                        dataPointIDs_1.push(id);
                        xValues_1.push(d["xVar"]);
                        yValues_1.push(d["yVar"]);
                    }
                }
            });
            /* Prepare and Send New Message - Start */
            var message = this.initializeNewMessage(context);
            var startTime = context.userConfig["hoverStartTime"];
            var currentTime = this.getCurrentTime();
            message.interactionDuration = currentTime - startTime;
            message.interactionType = "mouseout_group" /* MOUSEOUT_GROUP */;
            message.data["id"] = dataPointIDs_1;
            message.data["x"] = {
                name: dataset["xVar"],
                value: xValues_1,
            };
            message.data["y"] = {
                name: dataset["yVar"],
                value: yValues_1,
            };
            message.data["agg"] = {
                name: meta.aggName,
                axis: meta.aggAxis,
                value: meta.binValue,
                label: meta.binLabel,
            };
            message.data["eventX"] = event.clientX;
            message.data["eventY"] = event.clientY;
            context.chatService.sendInteractionResponse(message);
            /* Prepare and Send New Message - End */
        }
    };
    UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/visualizations/awareness/component.ts":
/*!*******************************************************!*\
  !*** ./src/app/visualizations/awareness/component.ts ***!
  \*******************************************************/
/*! exports provided: AttributeDistributionPlotConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeDistributionPlotConfig", function() { return AttributeDistributionPlotConfig; });
var AttributeDistributionPlotConfig = {
    "Q-pct": {
        $schema: "https://vega.github.io/schema/vega-lite/v4.json",
        width: 0,
        height: 0,
        data: { values: [] },
        config: {
            legend: {
                disable: false,
                orient: "top",
                labelFontSize: 12
            },
            axis: {
                titleFontSize: 14
            }
        },
        resolve: {
            axis: {
                x: "shared",
                y: "shared",
            },
            scale: {
                x: "shared",
                y: "shared",
            },
            legend: {
                color: "shared"
            }
        },
        layer: [
            {
                transform: [
                    {
                        filter: "",
                    },
                    {
                        bin: true,
                        field: "",
                        as: "binned_attribute",
                    },
                    {
                        aggregate: [{ op: "count", as: "count" }],
                        groupby: ["binned_attribute", "binned_attribute_end"],
                    },
                    {
                        window: [{ op: "sum", field: "count", as: "CumulativeCount" }],
                        frame: [null, null],
                    },
                    {
                        calculate: "datum.count/datum['CumulativeCount']",
                        as: "percentageCount",
                    },
                    { calculate: "'Target'", as: "Target" },
                ],
                mark: {
                    type: "line",
                    stroke: "black",
                    strokeWidth: 2,
                    interpolate: "monotone",
                },
                encoding: {
                    x: {
                        field: "binned_attribute",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    y: {
                        field: "percentageCount",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    color: {
                        field: "Target",
                        type: "ordinal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "circle"
                        }
                    },
                },
            },
            {
                transform: [
                    {
                        filter: "datum.focus_field !== null",
                    },
                    {
                        bin: true,
                        // bin: {"maxbins": 12},
                        field: "focus_field",
                        as: "binned_attribute2",
                    },
                    {
                        aggregate: [{ op: "count", as: "count2" }],
                        groupby: ["binned_attribute2", "binned_attribute2_end"],
                    },
                    {
                        window: [{ op: "sum", field: "count2", as: "CumulativeCount2" }],
                        frame: [null, null],
                    },
                    {
                        calculate: "datum.count2/datum['CumulativeCount2']",
                        as: "percentageCount2",
                    },
                    { calculate: "'Focus'", as: "Focus" },
                ],
                mark: {
                    type: "area",
                    interpolate: "monotone",
                    stroke: "#3498db",
                    color: "#3498db",
                    fillOpacity: 0.3,
                },
                encoding: {
                    x: {
                        field: "binned_attribute2",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    y: {
                        field: "percentageCount2",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    color: {
                        field: "Focus",
                        type: "ordinal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "circle"
                        }
                    },
                },
            },
            {
                transform: [
                    {
                        filter: "datum.selection_field !== null",
                    },
                    {
                        bin: true,
                        // bin: {"maxbins": 12},
                        field: "selection_field",
                        as: "binned_attribute3",
                    },
                    {
                        aggregate: [{ op: "count", as: "count3" }],
                        groupby: ["binned_attribute3", "binned_attribute3_end"],
                    },
                    {
                        window: [{ op: "sum", field: "count3", as: "CumulativeCount3" }],
                        frame: [null, null],
                    },
                    {
                        calculate: "datum.count3/datum['CumulativeCount3']",
                        as: "percentageCount3",
                    },
                    { calculate: "'Selection'", as: "Selection" },
                ],
                mark: {
                    type: "area",
                    interpolate: "monotone",
                    stroke: "#2ecc71",
                    fillOpacity: 0.3,
                },
                encoding: {
                    x: {
                        field: "binned_attribute3",
                        type: "quantitative",
                        title: "",
                    },
                    y: {
                        field: "percentageCount3",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    color: {
                        field: "Selection",
                        type: "ordinal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "circle"
                        }
                    },
                },
            }
        ],
    },
    "Q-raw": {
        $schema: "https://vega.github.io/schema/vega-lite/v4.json",
        width: 0,
        height: 0,
        data: { values: [] },
        config: {
            legend: {
                disable: false,
                orient: "top",
                labelFontSize: 12
            },
            axis: {
                titleFontSize: 14
            }
        },
        resolve: {
            axis: {
                x: "shared",
                y: "shared",
            },
            scale: {
                x: "shared",
                y: "shared",
            },
            legend: {
                color: "shared"
            }
        },
        layer: [
            {
                transform: [
                    {
                        filter: "",
                    },
                    {
                        bin: true,
                        field: "",
                        as: "binned_attribute",
                    },
                    {
                        aggregate: [{ op: "count", as: "count" }],
                        groupby: ["binned_attribute", "binned_attribute_end"],
                    },
                    { calculate: "'Target'", as: "Target" },
                ],
                mark: {
                    type: "line",
                    stroke: "black",
                    strokeWidth: 2,
                    interpolate: "monotone",
                },
                encoding: {
                    x: {
                        field: "binned_attribute",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    y: {
                        field: "count",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    color: {
                        field: "Target",
                        type: "ordinal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "circle"
                        }
                    },
                },
            },
            {
                transform: [
                    {
                        filter: "datum.focus_field !== null",
                    },
                    {
                        bin: true,
                        // bin: {"maxbins": 12},
                        field: "focus_field",
                        as: "binned_attribute2",
                    },
                    {
                        aggregate: [{ op: "count", as: "count2" }],
                        groupby: ["binned_attribute2", "binned_attribute2_end"],
                    },
                    { calculate: "'Focus'", as: "Focus" },
                ],
                mark: {
                    type: "area",
                    interpolate: "monotone",
                    stroke: "#3498db",
                    fillOpacity: 0.3,
                },
                encoding: {
                    x: {
                        field: "binned_attribute2",
                        type: "quantitative",
                        title: "",
                    },
                    y: {
                        field: "count2",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    color: {
                        field: "Focus",
                        type: "ordinal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "circle"
                        }
                    },
                },
            },
            {
                transform: [
                    {
                        filter: "datum.selection_field !== null",
                    },
                    {
                        bin: true,
                        // bin: {"maxbins": 12},
                        field: "selection_field",
                        as: "binned_attribute3",
                    },
                    {
                        aggregate: [{ op: "count", as: "count3" }],
                        groupby: ["binned_attribute3", "binned_attribute3_end"],
                    },
                    { calculate: "'Selection'", as: "Selection" },
                ],
                mark: {
                    type: "area",
                    interpolate: "monotone",
                    stroke: "#2ecc71",
                    fillOpacity: 0.3,
                },
                encoding: {
                    x: {
                        field: "binned_attribute3",
                        type: "quantitative",
                        title: "",
                    },
                    y: {
                        field: "count3",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    color: {
                        field: "Selection",
                        type: "ordinal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "circle"
                        }
                    },
                },
            },
        ],
    },
    N: {
        $schema: "https://vega.github.io/schema/vega-lite/v4.json",
        width: 0,
        height: 0,
        data: {
            values: [],
        },
        config: {
            legend: {
                disable: false,
                orient: "top",
                labelFontSize: 12
            },
            axis: {
                titleFontSize: 14
            },
            tick: {
                bandSize: 0,
            },
        },
        resolve: {
            axis: {
                x: "shared",
                y: "shared",
            },
            scale: {
                x: "shared",
                y: "shared",
            },
            legend: {
                color: "shared"
            }
        },
        transform: [
            { calculate: "'Target'", as: "Target" },
            { calculate: "'Focus'", as: "Focus" },
            { calculate: "'Selection'", as: "Selection" },
        ],
        layer: [
            {
                mark: {
                    type: "tick",
                    stroke: "black",
                    strokeWidth: 2,
                    interpolate: "monotone",
                },
                encoding: {
                    x: {
                        field: "x",
                        type: "ordinal",
                        axis: { title: "", labelOverlap: "greedy" },
                    },
                    y: {
                        field: "count_data",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" },
                    },
                    color: {
                        field: "Target",
                        type: "nominal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "square"
                        }
                    },
                },
            },
            {
                mark: {
                    type: "bar",
                    stroke: "#3498db",
                    fillOpacity: 0.3,
                    interpolate: "monotone",
                },
                encoding: {
                    x: {
                        field: "x",
                        type: "ordinal",
                        axis: { title: "", labelOverlap: "greedy" },
                    },
                    y: {
                        field: "count_focus",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" },
                    },
                    color: {
                        field: "Focus",
                        type: "nominal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "square"
                        }
                    },
                },
            },
            {
                mark: {
                    type: "bar",
                    stroke: "#2ecc71",
                    fillOpacity: 0.3,
                    interpolate: "monotone"
                },
                encoding: {
                    x: {
                        field: "x",
                        type: "ordinal",
                        axis: { title: "", labelOverlap: "greedy" }
                    },
                    y: {
                        field: "count_selection",
                        type: "quantitative",
                        axis: { title: "", labelOverlap: "greedy" },
                    },
                    color: {
                        field: "Selection",
                        type: "nominal",
                        title: null,
                        scale: {
                            domain: [],
                            range: [],
                        },
                        legend: {
                            symbolStrokeColor: "black",
                            symbolType: "square"
                        }
                    },
                }
            },
        ],
    },
};


/***/ }),

/***/ "./src/app/visualizations/main/bar-chart-component.ts":
/*!************************************************************!*\
  !*** ./src/app/visualizations/main/bar-chart-component.ts ***!
  \************************************************************/
/*! exports provided: BarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/viz */ "./src/app/models/viz.ts");
/* harmony import */ var src_app_models_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/config */ "./src/app/models/config.ts");

// libraries


// local


var BarChart = /** @class */ (function () {
    function BarChart(utilsService, chatService, global, userConfig, appConfig) {
        this.utilsService = utilsService;
        this.chatService = chatService;
        this.global = global;
        this.userConfig = userConfig;
        this.appConfig = appConfig;
        this.barChartConfig = new src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__["BarChartConfig"]();
    }
    /**
     * Create variables needed to draw and update plot.
     */
    BarChart.prototype.initialize = function () {
        var context = this;
        var container = "#plot_container";
        var width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().height();
        var plotMargins = { top: 50, bottom: 50, left: 60, right: 30 };
        context.plotWidth = width - plotMargins.left - plotMargins.right;
        context.plotHeight = height - plotMargins.top - plotMargins.bottom;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).empty();
        // Add containing SVG
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](container).append("svg").attr("width", width).attr("height", height);
        // Add linear gradient to SVG definition for use in color scale FIRST
        var grad = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "grad")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");
        grad
            .selectAll("stop")
            .data(src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"])
            .enter()
            .append("stop")
            .style("stop-color", function (d) { return d.toString(); })
            .attr("offset", function (_, i) { return 100 * (i / (src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"].length - 1)) + "%"; });
        // Add plot group
        context.plotGroup = svg
            .append("g")
            .classed("plot", true)
            .attr("transform", "translate(" + plotMargins.left + "," + plotMargins.top + ")");
        // Add X and Y axis groups
        context.barChartConfig.yAxisGroup = context.plotGroup.append("g").classed("y", true).classed("axis", true);
        context.barChartConfig.xAxisGroup = context.plotGroup
            .append("g")
            .classed("x", true)
            .classed("axis", true)
            .attr("transform", "translate(" + 0 + "," + context.plotHeight + ")");
        // Add bar groups
        context.barChartConfig.barsGroup = context.plotGroup.append("g").classed("bars", true);
        // Add legend group, text and gradient rectangle
        context.barChartConfig.legendGroup = context.plotGroup.append("g").classed("legend", true);
        if (context.global.appType !== "CONTROL") {
            var xPos = context.plotWidth; // x position of element, gets updated dynamically
            var pad = 5; // padding between elements
            var gradRectWidth = context.plotWidth / 5; // width of gradient rectangle
            var el = context.barChartConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text("More Focus");
            xPos -= Math.abs(el.node().getBBox()["x"]) + gradRectWidth + pad;
            context.barChartConfig.legendGroup
                .append("rect")
                .attr("transform", "translate(" + xPos + ", " + (-3 / 4) * plotMargins.top + ")")
                .attr("width", gradRectWidth)
                .attr("height", (1 / 8) * plotMargins.top)
                .style("rx", "4")
                .style("fill", "url(#grad)");
            xPos -= pad;
            context.barChartConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text("Less Focus");
        }
        // Create unsupported text to display if chart cannot render
        context.barChartConfig.unsupportedMessage = "\n      <tspan>If using\n        categorical (<tspan style=\"font-family: 'Font Awesome 5 Free'; font-weight: 800 !important\">&#xf031;</tspan>)\n        and/or\n        temporal (<tspan style=\"font-family: 'Font Awesome 5 Free'; font-weight: 800 !important\">&#xf133;</tspan>)\n      </tspan>\n      <tspan x=\"0\" dy=\"1.2em\">\n        attributes, you must have \n        <tspan style=\"font-weight: 800 !important\">only one</tspan>!\n      </tspan>";
    };
    /**
     * Calculate new values and re-draw plot.
     */
    BarChart.prototype.update = function () {
        var context = this;
        var utils = context.utilsService;
        var originalDatasetDict = context.userConfig["originalDatasetDict"];
        var dataset = context.appConfig[context.global.appMode];
        // if there's no dataset don't update the bar chart
        if (!originalDatasetDict)
            return;
        // Clear unsupported message
        context.barChartConfig.barsGroup.select(".unsupported-text").remove();
        // create raw data object
        var rawData = Object.keys(originalDatasetDict).map(function (id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalDatasetDict[id]), { xVar: dataset["xVar"] == null ? null : originalDatasetDict[id][dataset["xVar"]], yVar: dataset["yVar"] == null ? null : originalDatasetDict[id][dataset["yVar"]] });
        });
        // filter raw data into a prepared data set
        var prepared = rawData;
        ["N", "O"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return filterModel.indexOf(item[attr]) !== -1;
                });
            });
        });
        ["Q", "T"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return (parseFloat(item[attr]) >= parseFloat(filterModel[0]) && parseFloat(item[attr]) <= parseFloat(filterModel[1]));
                });
            });
        });
        // Create buckets, scales and axes based on xy data types
        var buckets = []; // list of label-value pairs: [[label, value], ...]
        var horizontal = false;
        var xAxisTitle = "";
        var yAxisTitle = "";
        var aggTitle = dataset["aggType"] == null ? "" : context.userConfig["aggregationMapping"][dataset["aggType"]].toUpperCase();
        var xScale = context.barChartConfig.xScale;
        var xAxis = context.barChartConfig.xAxis;
        var yScale = context.barChartConfig.yScale;
        var yAxis = context.barChartConfig.yAxis;
        var xIsQ = utils.isMeasure(dataset, dataset["xVar"], "Q");
        var yIsQ = utils.isMeasure(dataset, dataset["yVar"], "Q");
        if (dataset["yVar"] == null) {
            // yVar is NA => Vertical histogram
            xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, context.plotWidth]).padding(0.1);
            xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](xScale);
            if (xIsQ) {
                // [Q x NA] => Vertical binned histogram of count
                context.barChartConfig.legendGroup.style("display", "block");
                var bins = d3__WEBPACK_IMPORTED_MODULE_1__["bin"]().value(function (d) { return d["xVar"]; })(prepared);
                buckets = bins.map(function (bin) {
                    var lb = utils.formatLargeNum(+bin.x0); // lowerbound
                    var ub = utils.formatLargeNum(+bin.x1); // upperbound
                    var val = utils.aggregate(bin, "count", "xVar");
                    return ["[" + lb + ", " + ub + ")", val, bin];
                });
                xAxis.tickFormat(function (_, i) { return buckets[i][0]; });
                xAxisTitle = dataset["xVar"];
                yAxisTitle = "COUNT(" + dataset["xVar"] + ")";
            }
            else if (dataset["xVar"] !== null) {
                // [N/O/T x NA] => Vertical histogram of count
                context.barChartConfig.legendGroup.style("display", "block");
                buckets = d3__WEBPACK_IMPORTED_MODULE_1__["rollups"](prepared, function (v) { return v.length; }, function (d) { return d["xVar"]; })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x[0], y[0]); // sort buckets
                });
                buckets.forEach(function (d) { return d.push(prepared.filter(function (obj) { return obj["xVar"] == d[0]; })); });
                xAxis.tickFormat(function (_, i) { return "" + buckets[i][0]; });
                xAxisTitle = dataset["xVar"];
                yAxisTitle = "COUNT(" + dataset["xVar"] + ")";
            }
            else {
                // [NA x NA] => unsupported
                context.barChartConfig.legendGroup.style("display", "none");
                context.barChartConfig.barsGroup
                    .append("text")
                    .attr("class", "unsupported-text")
                    .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                    .attr("text-anchor", "middle")
                    .html(context.barChartConfig.unsupportedMessage);
            }
            xScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["range"](buckets.length));
            yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([context.plotHeight, 0]);
            yScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](buckets, function (d) { return d[1]; })]).nice();
            yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale).tickFormat(function (d) { return utils.formatLargeNum(+d); });
        }
        else if (dataset["xVar"] == null) {
            // xVar is NA => Horizontal histogram
            horizontal = true;
            yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, context.plotHeight]).padding(0.1);
            yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale);
            if (yIsQ) {
                // [NA x Q] => Horizontal binned histogram of count
                context.barChartConfig.legendGroup.style("display", "block");
                var bins = d3__WEBPACK_IMPORTED_MODULE_1__["bin"]().value(function (d) { return d["yVar"]; })(prepared);
                buckets = bins
                    .map(function (bin) {
                    var lb = utils.formatLargeNum(+bin.x0); // lowerbound
                    var ub = utils.formatLargeNum(+bin.x1); // upperbound
                    var val = utils.aggregate(bin, "count", "yVar");
                    return ["[" + lb + ", " + ub + ")", val, bin];
                })
                    .reverse(); // sort buckets reverse vertically
                yAxis.tickFormat(function (_, i) { return buckets[i][0]; });
                yAxisTitle = dataset["yVar"];
                xAxisTitle = "COUNT(" + dataset["yVar"] + ")";
            }
            else if (dataset["yVar"] !== null) {
                // [NA x N/O/T] => Horizontal histogram of count
                context.barChartConfig.legendGroup.style("display", "block");
                buckets = d3__WEBPACK_IMPORTED_MODULE_1__["rollups"](prepared, function (v) { return v.length; }, function (d) { return d["yVar"]; })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](y[0], x[0]); // sort buckets reverse vertically
                });
                buckets.forEach(function (d) { return d.push(prepared.filter(function (obj) { return obj["yVar"] == d[0]; })); });
                yAxis.tickFormat(function (_, i) { return "" + buckets[i][0]; });
                yAxisTitle = dataset["yVar"];
                xAxisTitle = "COUNT(" + dataset["yVar"] + ")";
            }
            else {
                // [NA x NA] => unsupported
                context.barChartConfig.legendGroup.style("display", "none");
                context.barChartConfig.barsGroup
                    .append("text")
                    .attr("class", "unsupported-text")
                    .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                    .attr("text-anchor", "middle")
                    .html(context.barChartConfig.unsupportedMessage);
            }
            yScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["range"](buckets.length));
            xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, context.plotWidth]);
            xScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](buckets, function (d) { return d[1]; })]).nice();
            xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](xScale).tickFormat(function (d) { return utils.formatLargeNum(+d); });
        }
        else {
            // both xVar and yVar are defined
            if (yIsQ) {
                // yVar is Q => vertical bar chart
                xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, context.plotWidth]).padding(0.1);
                xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](xScale);
                xAxisTitle = dataset["xVar"];
                yAxisTitle = aggTitle + "(" + dataset["yVar"] + ")";
                if (xIsQ) {
                    // [Q x Q] => bin x, rollup, aggregate y
                    context.barChartConfig.legendGroup.style("display", "block");
                    var bins = d3__WEBPACK_IMPORTED_MODULE_1__["bin"]().value(function (d) { return d["xVar"]; })(prepared);
                    buckets = bins.map(function (bin) {
                        var lb = utils.formatLargeNum(+bin.x0); // lowerbound
                        var ub = utils.formatLargeNum(+bin.x1); // upperbound
                        var val = utils.aggregate(bin, dataset["aggType"], "yVar");
                        return ["[" + lb + ", " + ub + ")", val, bin];
                    });
                    xAxis.tickFormat(function (_, i) { return buckets[i][0]; });
                }
                else {
                    // [N/O/T x Q] => rollup, aggregate
                    context.barChartConfig.legendGroup.style("display", "block");
                    buckets = d3__WEBPACK_IMPORTED_MODULE_1__["rollups"](prepared, function (v) { return utils.aggregate(v, dataset["aggType"], "yVar"); }, function (d) { return d["xVar"]; })
                        .sort(function (x, y) {
                        return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x[0], y[0]); // sort buckets
                    });
                    buckets.forEach(function (d) { return d.push(prepared.filter(function (obj) { return obj["xVar"] == d[0]; })); });
                    xAxis.tickFormat(function (i) { return "" + buckets[i][0]; });
                }
                xScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["range"](buckets.length));
                yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([context.plotHeight, 0]);
                yScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](buckets, function (d) { return d[1]; })]).nice();
                yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale).tickFormat(function (d) { return utils.formatLargeNum(+d); });
            }
            else {
                // yVar is N/O/T => horizontal bar chart
                horizontal = true;
                yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, context.plotHeight]).padding(0.1);
                yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale);
                if (xIsQ) {
                    // [Q x N/O/T] => rollup, aggregate => horizontal bar chart
                    context.barChartConfig.legendGroup.style("display", "block");
                    buckets = d3__WEBPACK_IMPORTED_MODULE_1__["rollups"](prepared, function (v) { return utils.aggregate(v, dataset["aggType"], "xVar"); }, function (d) { return d["yVar"]; })
                        .sort(function (x, y) {
                        return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](y[0], x[0]); // sort buckets reverse vertically
                    });
                    buckets.forEach(function (d) { return d.push(prepared.filter(function (obj) { return obj["yVar"] == d[0]; })); });
                    yAxis.tickFormat(function (i) { return "" + buckets[i][0]; });
                    yAxisTitle = dataset["yVar"];
                    xAxisTitle = aggTitle + "(" + dataset["xVar"] + ")";
                }
                else {
                    // [N/O/T x N/O/T] => unsupported
                    context.barChartConfig.legendGroup.style("display", "none");
                    context.barChartConfig.barsGroup
                        .append("text")
                        .attr("class", "unsupported-text")
                        .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                        .attr("text-anchor", "middle")
                        .html(context.barChartConfig.unsupportedMessage);
                }
                yScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["range"](buckets.length));
                xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, context.plotWidth]);
                xScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](buckets, function (d) { return d[1]; })]).nice();
                xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](xScale).tickFormat(function (d) { return utils.formatLargeNum(+d); });
            }
        }
        // draw axes
        context.barChartConfig.xAxisGroup.call(xAxis);
        context.barChartConfig.yAxisGroup.call(yAxis);
        // draw axis titles
        context.barChartConfig.xAxisGroup.select(".x.axis.title").remove();
        context.barChartConfig.xAxisGroup
            .append("g")
            .classed("x axis title", true)
            .attr("opacity", 1)
            .attr("transform", "translate(" + context.plotWidth / 2 + ", 0)")
            .append("text")
            .attr("text-anchor", "middle")
            .attr("fill", "currentColor")
            .attr("dy", "3.71em")
            .text(xAxisTitle);
        context.barChartConfig.yAxisGroup.select(".y.axis.title").remove();
        context.barChartConfig.yAxisGroup
            .append("g")
            .classed("y axis title", true)
            .attr("opacity", 1)
            .attr("transform", "translate(-30, " + context.plotHeight / 2 + ")")
            .append("text")
            .attr("fill", "currentColor")
            .text(yAxisTitle);
        // prepare data labels for yAxis
        context.barChartConfig.yAxisGroup
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("dx", "0.8em")
            .attr("dy", "-1.21em")
            .attr("transform", "rotate(-90)");
        // stagger every other tick label
        context.barChartConfig.xAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("y2", 15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "1.91em");
            }
        });
        context.barChartConfig.yAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("x2", -15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "-2.41em");
            }
        });
        // Store updated scales and axes back in the chart config
        context.barChartConfig.xScale = xScale;
        context.barChartConfig.yScale = yScale;
        context.barChartConfig.xAxis = xAxis;
        context.barChartConfig.yAxis = yAxis;
        // REMOVE all bar groups first!
        context.barChartConfig.barsGroup.selectAll(".post").remove();
        // JOIN data selection using bucket label as key
        var dataBound = context.barChartConfig.barsGroup.selectAll(".post").data(buckets, function (d) { return "" + d[0]; });
        // ENTER new group for each bar and text label
        var enterSelection = dataBound.enter().append("g").classed("post", true);
        // ENTER text for all bars
        var offset = 5;
        enterSelection
            .append("text")
            .attr("transform", function (d, i) {
            var x = horizontal ? xScale(0) + xScale(d[1]) + offset : xScale(i) + xScale.bandwidth() / 2;
            var y = horizontal ? yScale(i) + yScale.bandwidth() / 2 + 4 : yScale(d[1]) - offset;
            return "translate(" + x + "," + y + ")";
        })
            .attr("display", "none")
            .style("text-anchor", function () { return (horizontal ? "start" : "middle"); })
            .text(function (d) { return utils.formatLargeNum(+d[1]); });
        // ENTER all bars
        enterSelection
            .append("rect")
            .attr("transform", function (d, i) {
            if (horizontal) {
                d["x"] = xScale(0);
                d["y"] = yScale(i);
            }
            else {
                d["x"] = xScale(i);
                d["y"] = yScale(d[1]);
            }
            return "translate(" + d["x"] + "," + d["y"] + ")";
        })
            .attr("height", function (d) { return (horizontal ? yScale.bandwidth() : yScale(0) - yScale(d[1])); })
            .attr("width", function (d) { return (horizontal ? xScale(d[1]) - xScale(0) : xScale.bandwidth()); })
            .style("fill", function (d) {
            // fill based on interactions with underlying data points!
            if (context.global.appType == "CONTROL")
                return "white";
            switch (dataset["colorByMode"]) {
                case "abs":
                    var sumInteracted = d[2].reduce(utils.sumTimesVisited, 0);
                    var sumVisits = prepared.reduce(utils.sumTimesVisited, 0);
                    return sumInteracted == 0
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(sumInteracted / sumVisits);
                case "rel":
                    var maxInteracted = d[2].reduce(utils.maxTimesVisited, 0);
                    var maxVisits = prepared.reduce(utils.maxTimesVisited, 0);
                    return maxInteracted == 0
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(maxInteracted / maxVisits);
                case "binary":
                    var visited = d[2].some(function (el) { return el["timesVisited"] > 0; });
                    return !visited ? "white" : context.userConfig.focusSequentialColorScale(1);
                default:
                    return "white";
            }
        })
            .style("fill-opacity", 0.8)
            .style("stroke", function (d) { return (d[2].reduce(function (a, b) { return a || b["selected"]; }, false) ? "brown" : "black"); })
            .style("stroke-width", function (d) { return (d[2].reduce(function (a, b) { return a || b["selected"]; }, false) ? "3px" : "1px"); })
            .style("stroke-dasharray", function (d) {
            var countSelected = d[2].filter(function (o) { return o["selected"]; }).length;
            return countSelected < d[2].length && countSelected > 0 ? "4" : "none";
        })
            .style("cursor", "pointer")
            .on("click", function (event, d) {
            if (context.global.appType === "ADMIN") {
                utils.clickGroup(context, event, {
                    aggName: dataset["aggType"] == null ? "count" : dataset["aggType"],
                    aggAxis: horizontal ? "x-axis" : "y-axis",
                    binLabel: d[0],
                    binValue: d[1],
                    binData: d[2],
                });
            }
        })
            .on("mouseover", function (event, d) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.parentNode).select("text").attr("display", "block");
            utils.mouseoverGroup(context, event, this, {
                aggName: dataset["aggType"] == null ? "count" : dataset["aggType"],
                aggAxis: horizontal ? "x-axis" : "y-axis",
                binLabel: d[0],
                binValue: d[1],
                binData: d[2],
            });
        })
            .on("mouseout", function (event, d) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.parentNode).select("text").attr("display", "none");
            utils.mouseoutGroup(context, event, {
                aggName: dataset["aggType"] == null ? "NA" : dataset["aggType"],
                aggAxis: horizontal ? "x-axis" : "y-axis",
                binLabel: d[0],
                binValue: d[1],
                binData: d[2],
            });
        });
        // FILTER can update `buckets` => must update hovered Objects list
        if (dataset["hoveredObjects"]["binName"]) {
            // binName set => there is a bin visible in details view, reset existing object
            var currentBinName = dataset["hoveredObjects"]["binName"];
            var currentBinAttr = dataset["hoveredObjects"]["binAttr"];
            dataset["hoveredObjects"] = { binName: null, binAttr: null, points: {} };
            var _loop_1 = function (bin) {
                if (bin[0] == currentBinName &&
                    ((horizontal && dataset["yVar"] == currentBinAttr) || (!horizontal && dataset["xVar"] == currentBinAttr))) {
                    // found the bin! => update hovered Objects for possible FILTER
                    dataset["hoveredObjects"]["binName"] = currentBinName;
                    dataset["hoveredObjects"]["binAttr"] = currentBinAttr;
                    bin[2].forEach(function (d) {
                        var id = d[dataset["primaryKey"]];
                        if (id !== "-") {
                            // use dict OBJECT to update source data by reference!
                            var dataPoint = originalDatasetDict[id];
                            context.utilsService.colorDataPoint(context, dataPoint, bin[2]);
                            dataset["hoveredObjects"]["points"][id] = dataPoint;
                        }
                    });
                    // attempt to remove values from the details table
                    if (dataset["aggType"] == "min" || dataset["aggType"] == "max") {
                        if (horizontal) {
                            Object.keys(dataset["hoveredObjects"]["points"]).forEach(function (id) {
                                if (dataset["hoveredObjects"]["points"][id][dataset["xVar"]] !== bin[1]) {
                                    delete dataset["hoveredObjects"]["points"][id];
                                }
                            });
                        }
                        else {
                            Object.keys(dataset["hoveredObjects"]["points"]).forEach(function (id) {
                                if (dataset["hoveredObjects"]["points"][id][dataset["yVar"]] !== bin[1]) {
                                    delete dataset["hoveredObjects"]["points"][id];
                                }
                            });
                        }
                    }
                    return "break";
                }
            };
            // look for the bin in the filtered data set. If not there, table is already reset!
            for (var _i = 0, buckets_1 = buckets; _i < buckets_1.length; _i++) {
                var bin = buckets_1[_i];
                var state_1 = _loop_1(bin);
                if (state_1 === "break")
                    break;
            }
        }
    };
    return BarChart;
}());



/***/ }),

/***/ "./src/app/visualizations/main/dot-plot-component.ts":
/*!***********************************************************!*\
  !*** ./src/app/visualizations/main/dot-plot-component.ts ***!
  \***********************************************************/
/*! exports provided: DotPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotPlot", function() { return DotPlot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/viz */ "./src/app/models/viz.ts");
/* harmony import */ var src_app_models_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/config */ "./src/app/models/config.ts");

// libraries


// local


var DotPlot = /** @class */ (function () {
    function DotPlot(utilsService, chatService, global, userConfig, appConfig) {
        this.utilsService = utilsService;
        this.chatService = chatService;
        this.global = global;
        this.userConfig = userConfig;
        this.appConfig = appConfig;
        this.dotPlotConfig = new src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__["DotPlotConfig"]();
    }
    /**
     * Create variables needed to draw and update plot.
     */
    DotPlot.prototype.initialize = function () {
        var context = this;
        var container = "#plot_container";
        var width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().height();
        var plotMargins = { top: 50, bottom: 50, left: 60, right: 30 };
        context.plotWidth = width - plotMargins.left - plotMargins.right;
        context.plotHeight = height - plotMargins.top - plotMargins.bottom;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).empty();
        // Add containing SVG
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](container).append("svg").attr("width", width).attr("height", height);
        // Add linear gradient to SVG definition for use in color scale FIRST
        var grad = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "grad")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");
        grad
            .selectAll("stop")
            .data(src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"])
            .enter()
            .append("stop")
            .style("stop-color", function (d) { return d.toString(); })
            .attr("offset", function (_, i) { return 100 * (i / (src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"].length - 1)) + "%"; });
        // Add plot group
        context.plotGroup = svg
            .append("g")
            .classed("plot", true)
            .attr("transform", "translate(" + plotMargins.left + ", " + plotMargins.top + ")");
        // Add X and Y axis groups
        context.dotPlotConfig.yAxisGroup = context.plotGroup.append("g").classed("y", true).classed("axis", true);
        context.dotPlotConfig.xAxisGroup = context.plotGroup
            .append("g")
            .classed("x", true)
            .classed("axis", true)
            .attr("transform", "translate(" + 0 + ", " + context.plotHeight + ")");
        // Add dots groups
        context.dotPlotConfig.dotsGroup = context.plotGroup.append("g").classed("dots", true);
        // Add legend group, text and gradient rectangle
        context.dotPlotConfig.legendGroup = context.plotGroup.append("g").classed("legend", true);
        if (context.global.appType !== "CONTROL") {
            var xPos = context.plotWidth; // x position of element, gets updated dynamically
            var pad = 5; // padding between elements
            var gradRectWidth = context.plotWidth / 5; // width of gradient rectangle
            var el = context.dotPlotConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text("More Focus");
            xPos -= Math.abs(el.node().getBBox()["x"]) + gradRectWidth + pad;
            context.dotPlotConfig.legendGroup
                .append("rect")
                .attr("transform", "translate(" + xPos + ", " + (-3 / 4) * plotMargins.top + ")")
                .attr("width", gradRectWidth)
                .attr("height", (1 / 8) * plotMargins.top)
                .style("rx", "4")
                .style("fill", "url(#grad)");
            xPos -= pad;
            context.dotPlotConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text("Less Focus");
        }
        // Create unsupported text to display if chart cannot render
        context.dotPlotConfig.unsupportedMessage = "\n      <tspan>\n        If using numerical\n        (<tspan style=\"font-family: 'Font Awesome 5 Free'; font-weight: 800 !important\">&#xf292;</tspan>)\n        attributes,\n      </tspan>\n      <tspan x=\"0\" dy=\"1.2em\">\n        you must have\n        <tspan style=\"font-weight: 800 !important\">more than one</tspan>!\n      </tspan>";
    };
    /**
     * Calculate new values and re-draw plot.
     */
    DotPlot.prototype.update = function () {
        var context = this;
        var originalDatasetDict = context.userConfig["originalDatasetDict"];
        var dataset = context.appConfig[context.global.appMode];
        var PK = dataset["primaryKey"];
        // if there's no dataset don't update the chart
        if (!originalDatasetDict)
            return;
        // Clear unsupported message
        context.dotPlotConfig.dotsGroup.select(".unsupported-text").remove();
        // create raw data object
        var rawData = Object.keys(originalDatasetDict).map(function (id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalDatasetDict[id]), { xVar: dataset["xVar"] == null ? null : originalDatasetDict[id][dataset["xVar"]], yVar: dataset["yVar"] == null ? null : originalDatasetDict[id][dataset["yVar"]] });
        });
        // filter raw data into a prepared data set
        var prepared = rawData;
        ["N", "O"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return filterModel.indexOf(item[attr]) !== -1;
                });
            });
        });
        ["T", "Q"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return (parseFloat(item[attr]) >= parseFloat(filterModel[0]) && parseFloat(item[attr]) <= parseFloat(filterModel[1]));
                });
            });
        });
        // Create scales and axes based on vis matrix
        var buckets = [];
        var binLabelDelim = " x "; // delimiter for getting axis titles from bin Label
        var xIsNA = dataset["xVar"] == null;
        var yIsNA = dataset["yVar"] == null;
        var xIsQ = context.utilsService.isMeasure(dataset, dataset["xVar"], "Q");
        var yIsQ = context.utilsService.isMeasure(dataset, dataset["yVar"], "Q");
        // initialize x and y scales
        context.dotPlotConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().rangeRound([0, context.plotWidth]).padding(0.1);
        context.dotPlotConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().rangeRound([context.plotHeight, 0]).padding(0.1);
        if (xIsQ || yIsQ || (xIsNA && yIsNA)) {
            // [Q x any] OR [any x Q] or [NA x NA] => unsupported
            buckets = []; // ensures no points are drawn
            context.dotPlotConfig.xAxisGroup.selectAll("*").remove();
            context.dotPlotConfig.yAxisGroup.selectAll("*").remove();
            context.dotPlotConfig.legendGroup.style("display", "none");
            context.dotPlotConfig.dotsGroup
                .append("text")
                .attr("class", "unsupported-text")
                .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                .attr("text-anchor", "middle")
                .html(context.dotPlotConfig.unsupportedMessage);
        }
        else {
            // [N/O/T/NA x N/O/T/NA] => supported
            context.dotPlotConfig.legendGroup.style("display", "block");
            if (!xIsNA) {
                // x is N/O/T => horizontal dots
                if (yIsNA) {
                    // [N/O/T x NA] => bucket by x only
                    buckets = d3__WEBPACK_IMPORTED_MODULE_1__["groups"](prepared, function (d) { return "" + d["xVar"] + binLabelDelim + "NA"; });
                }
                else {
                    // [N/O/T x N/O/T] => bucket by x and y
                    buckets = d3__WEBPACK_IMPORTED_MODULE_1__["groups"](prepared, function (d) { return "" + d["xVar"] + binLabelDelim + d["yVar"]; });
                }
                context.dotPlotConfig.xScale.domain(rawData
                    .map(function (d) {
                    return d["xVar"];
                })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x, y); // sort domain
                }));
                context.dotPlotConfig.xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](context.dotPlotConfig.xScale);
                context.dotPlotConfig.xAxisGroup.call(context.dotPlotConfig.xAxis);
                context.dotPlotConfig.xAxisGroup.select(".x.axis.title").remove();
                context.dotPlotConfig.xAxisGroup
                    .append("g")
                    .classed("x axis title", true)
                    .attr("opacity", 1)
                    .attr("transform", "translate(" + context.plotWidth / 2 + ", 0)")
                    .append("text")
                    .attr("text-anchor", "middle")
                    .attr("fill", "currentColor")
                    .attr("dy", "3.71em")
                    .text(dataset["xVar"]);
            }
            else {
                // x is NA => remove x axis (if present)
                context.dotPlotConfig.xAxisGroup.selectAll("*").remove();
            }
            if (!yIsNA) {
                // y is N/O/T => vertical dots
                if (xIsNA) {
                    // [NA x N/O/T] => bucket y only
                    buckets = d3__WEBPACK_IMPORTED_MODULE_1__["groups"](prepared, function (d) { return "NA" + binLabelDelim + d["yVar"]; });
                }
                context.dotPlotConfig.yScale.domain(rawData
                    .map(function (d) {
                    return d["yVar"];
                })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x, y); // sort domain
                }));
                context.dotPlotConfig.yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](context.dotPlotConfig.yScale);
                context.dotPlotConfig.yAxisGroup.call(context.dotPlotConfig.yAxis);
                context.dotPlotConfig.yAxisGroup.select(".y.axis.title").remove();
                context.dotPlotConfig.yAxisGroup
                    .append("g")
                    .classed("y axis title", true)
                    .attr("opacity", 1)
                    .attr("transform", "translate(-30, " + context.plotHeight / 2 + ")")
                    .append("text")
                    .attr("fill", "currentColor")
                    .text(dataset["yVar"]);
                context.dotPlotConfig.yAxisGroup
                    .selectAll("text")
                    .style("text-anchor", "middle")
                    .attr("dx", "0.8em")
                    .attr("dy", "-1.21em")
                    .attr("transform", "rotate(-90)");
            }
            else {
                // y is NA => remove y axis (if present)
                context.dotPlotConfig.yAxisGroup.selectAll("*").remove();
            }
        }
        // stagger every other tick label
        context.dotPlotConfig.xAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("y2", 15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "1.91em");
            }
        });
        context.dotPlotConfig.yAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("x2", -15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "-2.41em");
            }
        });
        // JOIN data selection using bucket label as key
        var dataBound = context.dotPlotConfig.dotsGroup.selectAll(".post").data(buckets, function (d) { return d[0]; });
        // DELETE extra dots (fade them out)
        dataBound.exit().remove();
        // ENTER new dots (starting invisible, later fade them in)
        var enterSelection = dataBound.enter().append("g").classed("post", true);
        // UPDATE all existing dots
        enterSelection.append("circle");
        enterSelection
            .merge(dataBound)
            .select("circle")
            .attr("transform", function (d) {
            var x = context.dotPlotConfig.xScale;
            var y = context.dotPlotConfig.yScale;
            d["x"] =
                !xIsQ && !xIsNA
                    ? x(d[0].split(binLabelDelim)[0]) + x.bandwidth() / 2 // dist horizontal
                    : 0.5 * y.bandwidth(); // align left
            d["y"] =
                !yIsQ && !yIsNA
                    ? y(d[0].split(binLabelDelim)[1]) + y.bandwidth() / 2 // dist vertical
                    : context.plotHeight - 0.5 * x.bandwidth(); // align bottom
            return "translate(" + d["x"] + ", " + d["y"] + ")";
        })
            .attr("r", function () {
            // fit the dots within the smallest bandwidth on either axis
            var x = context.dotPlotConfig.xScale;
            var y = context.dotPlotConfig.yScale;
            return 0.25 * Math.min(x.bandwidth(), y.bandwidth()) + "px";
        })
            .style("fill", function (d) {
            // fill based on interactions with underlying data points!
            if (context.global.appType == "CONTROL")
                return "white";
            switch (dataset["colorByMode"]) {
                case "abs":
                    var sumInteracted = d[1].reduce(context.utilsService.sumTimesVisited, 0);
                    var sumVisits = prepared.reduce(context.utilsService.sumTimesVisited, 0);
                    return sumInteracted == 0
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(sumInteracted / sumVisits);
                case "rel":
                    var maxInteracted = d[1].reduce(context.utilsService.maxTimesVisited, 0);
                    var maxVisits = prepared.reduce(context.utilsService.maxTimesVisited, 0);
                    return maxInteracted == 0
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(maxInteracted / maxVisits);
                case "binary":
                    var visited = d[1].some(function (el) { return el["timesVisited"] > 0; });
                    return !visited ? "white" : context.userConfig.focusSequentialColorScale(1);
                default:
                    return "white";
            }
        })
            .style("fill-opacity", 0.8)
            .style("stroke", function (d) { return (d[1].reduce(function (a, b) { return a || b["selected"]; }, false) ? "brown" : "black"); })
            .style("stroke-width", function (d) { return (d[1].reduce(function (a, b) { return a || b["selected"]; }, false) ? "3px" : "1px"); })
            .style("stroke-dasharray", function (d) {
            var countSelected = d[1].filter(function (o) { return o["selected"]; }).length;
            return countSelected < d[1].length && countSelected > 0 ? "3" : "none";
        })
            .style("cursor", "pointer")
            .on("click", function (event, d) {
            if (context.global.appType === "ADMIN") {
                context.utilsService.clickGroup(context, event, {
                    aggName: null,
                    aggAxis: null,
                    binLabel: d[0],
                    binValue: null,
                    binData: d[1],
                });
            }
        })
            .on("mouseover", function (event, d) {
            context.utilsService.mouseoverGroup(context, event, this, {
                aggName: null,
                aggAxis: null,
                binLabel: d[0],
                binValue: null,
                binData: d[1],
            });
        })
            .on("mouseout", function (event, d) {
            context.utilsService.mouseoutGroup(context, event, {
                aggName: null,
                aggAxis: null,
                binLabel: d[0],
                binValue: null,
                binData: d[1],
            });
        });
        // FILTER can update `buckets` => must update hovered Objects list
        if (dataset["hoveredObjects"]["binName"]) {
            // binName set => there is a bin visible in details view, reset existing object
            var currentBinName = dataset["hoveredObjects"]["binName"];
            dataset["hoveredObjects"] = { binName: null, binAttr: null, points: {} };
            var _loop_1 = function (bin) {
                if (bin[0] == currentBinName) {
                    // found the bin! => update hovered Objects for possible FILTER
                    dataset["hoveredObjects"]["binName"] = currentBinName;
                    bin[1].forEach(function (d) {
                        var id = d[dataset["primaryKey"]];
                        if (id !== "-") {
                            // use dict OBJECT to update source data by reference!
                            var dataPoint = originalDatasetDict[id];
                            context.utilsService.colorDataPoint(context, dataPoint, bin[1]);
                            dataset["hoveredObjects"]["points"][id] = dataPoint;
                        }
                    });
                    return "break";
                }
            };
            // look for the bin in the filtered data set. If not there, table is already reset!
            for (var _i = 0, buckets_1 = buckets; _i < buckets_1.length; _i++) {
                var bin = buckets_1[_i];
                var state_1 = _loop_1(bin);
                if (state_1 === "break")
                    break;
            }
        }
    };
    return DotPlot;
}());



/***/ }),

/***/ "./src/app/visualizations/main/line-chart-component.ts":
/*!*************************************************************!*\
  !*** ./src/app/visualizations/main/line-chart-component.ts ***!
  \*************************************************************/
/*! exports provided: LineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return LineChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/viz */ "./src/app/models/viz.ts");
/* harmony import */ var src_app_models_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/config */ "./src/app/models/config.ts");

// libraries


// local


var LineChart = /** @class */ (function () {
    function LineChart(utilsService, chatService, global, userConfig, appConfig) {
        this.utilsService = utilsService;
        this.chatService = chatService;
        this.global = global;
        this.userConfig = userConfig;
        this.appConfig = appConfig;
        this.lineChartConfig = new src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__["LineChartConfig"]();
    }
    /**
     * Create variables needed to draw and update plot.
     */
    LineChart.prototype.initialize = function () {
        var context = this;
        var container = "#plot_container";
        var width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().height();
        var plotMargins = { top: 50, bottom: 50, left: 60, right: 30 };
        context.plotWidth = width - plotMargins.left - plotMargins.right;
        context.plotHeight = height - plotMargins.top - plotMargins.bottom;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).empty();
        // Add containing SVG
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](container).append("svg").attr("width", width).attr("height", height);
        // Add linear gradient to SVG definition for use in color scale FIRST
        var grad = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "grad")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");
        grad
            .selectAll("stop")
            .data(src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"])
            .enter()
            .append("stop")
            .style("stop-color", function (d) { return d.toString(); })
            .attr("offset", function (_, i) { return 100 * (i / (src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"].length - 1)) + "%"; });
        // Add plot group
        context.plotGroup = svg
            .append("g")
            .classed("plot", true)
            .attr("transform", "translate(" + plotMargins.left + ", " + plotMargins.top + ")");
        // Add X and Y axis groups
        context.lineChartConfig.yAxisGroup = context.plotGroup.append("g").classed("y", true).classed("axis", true);
        context.lineChartConfig.xAxisGroup = context.plotGroup
            .append("g")
            .classed("x", true)
            .classed("axis", true)
            .attr("transform", "translate(" + 0 + ", " + context.plotHeight + ")");
        // Add line group (with pointer-events enabled)
        context.lineChartConfig.lineGroup = context.plotGroup
            .append("g")
            .classed("line", true)
            .style("pointer-events", "fill");
        // Add bounding box to line group for event listeners
        context.lineChartConfig.lineGroup
            .append("rect")
            .attr("class", "event-bbox")
            .attr("height", context.plotHeight)
            .attr("width", context.plotWidth)
            .attr("visibility", "hidden");
        // draw intersection line (hidden at first)
        context.lineChartConfig.lineGroup
            .append("line")
            .attr("y2", context.plotHeight)
            .attr("class", "intersect-line")
            .attr("stroke", "currentColor")
            .attr("stroke-dasharray", "5,5")
            .style("display", "none");
        // add empty path element to be drawn on update
        context.lineChartConfig.lineGroup
            .append("path")
            .attr("class", "connect-line")
            .attr("fill", "none")
            .attr("stroke", "currentColor");
        // Add legend group, text and gradient rectangle
        context.lineChartConfig.legendGroup = context.plotGroup.append("g").classed("legend", true);
        if (context.global.appType !== "CONTROL") {
            var xPos = context.plotWidth; // x position of element, gets updated dynamically
            var pad = 5; // padding between elements
            var gradRectWidth = context.plotWidth / 5; // width of gradient rectangle
            var el = context.lineChartConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text("More Focus");
            xPos -= Math.abs(el.node().getBBox()["x"]) + gradRectWidth + pad;
            context.lineChartConfig.legendGroup
                .append("rect")
                .attr("transform", "translate(" + xPos + ", " + (-3 / 4) * plotMargins.top + ")")
                .attr("width", gradRectWidth)
                .attr("height", (1 / 8) * plotMargins.top)
                .style("rx", "4")
                .style("fill", "url(#grad)");
            xPos -= pad;
            context.lineChartConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text("Less Focus");
        }
        // Create unsupported text to display if chart cannot render
        context.lineChartConfig.unsupportedMessage = "\n      <tspan>Try using a temporal</tspan>\n        (<tspan style=\"font-family: 'Font Awesome 5 Free'; font-weight: 800 !important\">&#xf133;</tspan>)\n      <tspan x=\"0\" dy=\"1.2em\">attribute on the <tspan style=\"font-weight: 800 !important\">X</tspan> axis!</tspan>";
    };
    /**
     * Calculate new values and re-draw plot.
     */
    LineChart.prototype.update = function () {
        var context = this;
        var originalDatasetDict = context.userConfig["originalDatasetDict"];
        var dataset = context.appConfig[context.global.appMode];
        var PK = dataset["primaryKey"];
        // if there's no dataset don't update the chart
        if (!originalDatasetDict)
            return;
        // Clear unsupported message
        context.lineChartConfig.lineGroup.select(".unsupported-text").remove();
        // create raw data object
        var rawData = Object.keys(originalDatasetDict).map(function (id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalDatasetDict[id]), { xVar: dataset["xVar"] == null ? null : originalDatasetDict[id][dataset["xVar"]], yVar: dataset["yVar"] == null ? null : originalDatasetDict[id][dataset["yVar"]] });
        });
        // filter raw data into a prepared data set
        var prepared = rawData;
        ["N", "O"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return filterModel.indexOf(item[attr]) !== -1;
                });
            });
        });
        ["Q", "T"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return (parseFloat(item[attr]) >= parseFloat(filterModel[0]) && parseFloat(item[attr]) <= parseFloat(filterModel[1]));
                });
            });
        });
        // Create scales and axes if combination is TxQ
        var buckets = [];
        var xAxisTitle = "";
        var yAxisTitle = "";
        var aggTitle = dataset["aggType"] == null ? "" : context.userConfig["aggregationMapping"][dataset["aggType"]].toUpperCase();
        var xIsT = context.utilsService.isMeasure(dataset, dataset["xVar"], "T");
        var yIsQ = context.utilsService.isMeasure(dataset, dataset["yVar"], "Q");
        if (xIsT && yIsQ && dataset["aggType"] !== null) {
            // [T x Q] => aggregate yVar grouped by xVar
            context.lineChartConfig.legendGroup.style("display", "block");
            buckets = d3__WEBPACK_IMPORTED_MODULE_1__["rollups"](prepared, function (v) { return context.utilsService.aggregate(v, dataset["aggType"], "yVar"); }, function (d) { return d["xVar"]; })
                .sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x[0], y[0]); // sort dates
            });
            buckets.forEach(function (d) { return d.push(prepared.filter(function (obj) { return obj["xVar"] == d[0]; })); });
            xAxisTitle = dataset["xVar"];
            yAxisTitle = aggTitle + "(" + dataset["yVar"] + ")";
        }
        else if (xIsT && dataset["yVar"] == null) {
            // [T x NA] => count values in each xVar as aggregate
            context.lineChartConfig.legendGroup.style("display", "block");
            buckets = d3__WEBPACK_IMPORTED_MODULE_1__["rollups"](prepared, function (v) { return v.length; }, function (d) { return d["xVar"]; })
                .sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x[0], y[0]); // sort dates
            });
            buckets.forEach(function (d) { return d.push(prepared.filter(function (obj) { return obj["xVar"] == d[0]; })); });
            xAxisTitle = dataset["xVar"];
            yAxisTitle = "COUNT(" + dataset["xVar"] + ")";
        }
        else {
            // [N/O/Q x N/O/Q/T] OR [T x N/O/T] => unsupported
            context.lineChartConfig.legendGroup.style("display", "none");
            context.lineChartConfig.lineGroup
                .append("text")
                .attr("class", "unsupported-text")
                .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                .attr("text-anchor", "middle")
                .html(context.lineChartConfig.unsupportedMessage);
        }
        // set x scale and axis
        context.lineChartConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .domain(buckets.map(function (d) { return d[0]; }))
            .range([0, context.plotWidth])
            .padding(0.1);
        context.lineChartConfig.xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](context.lineChartConfig.xScale);
        // Set y scale and axis
        context.lineChartConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](buckets, function (d) { return d[1]; })])
            .range([context.plotHeight, 0])
            .nice();
        context.lineChartConfig.yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](context.lineChartConfig.yScale)
            .tickFormat(function (d) { return context.utilsService.formatLargeNum(+d); });
        // draw axes
        context.lineChartConfig.xAxisGroup.call(context.lineChartConfig.xAxis);
        context.lineChartConfig.yAxisGroup.call(context.lineChartConfig.yAxis);
        // draw axis titles
        context.lineChartConfig.xAxisGroup.select(".x.axis.title").remove();
        context.lineChartConfig.xAxisGroup
            .append("g")
            .classed("x axis title", true)
            .attr("opacity", 1)
            .attr("transform", "translate(" + context.plotWidth / 2 + ", 0)")
            .append("text")
            .attr("text-anchor", "middle")
            .attr("fill", "currentColor")
            .attr("dy", "3.71em")
            .text(xAxisTitle);
        context.lineChartConfig.yAxisGroup.select(".y.axis.title").remove();
        context.lineChartConfig.yAxisGroup
            .append("g")
            .classed("y axis title", true)
            .attr("opacity", 1)
            .attr("transform", "translate(-30, " + context.plotHeight / 2 + ")")
            .append("text")
            .attr("fill", "currentColor")
            .text(yAxisTitle);
        // prepare data labels for yAxis
        context.lineChartConfig.yAxisGroup
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("dx", "0.8em")
            .attr("dy", "-1.21em")
            .attr("transform", "rotate(-90)");
        // stagger every other tick label
        context.lineChartConfig.xAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("y2", 15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "1.91em");
            }
        });
        context.lineChartConfig.yAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("x2", -15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "-2.41em");
            }
        });
        // define line creation function
        var line = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
            .curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveCardinal"])
            .defined(function (d) { return !isNaN(d[1]); })
            .x(function (d) { return context.lineChartConfig.xScale(d[0]) + context.lineChartConfig.xScale.bandwidth() / 2; })
            .y(function (d) { return context.lineChartConfig.yScale(d[1]); });
        // (re-)draw static path connecting line chart points
        context.lineChartConfig.lineGroup.select(".connect-line").datum(buckets).attr("d", line);
        // JOIN data selection using bucket label as key
        var dataBound = context.lineChartConfig.lineGroup.selectAll(".post").data(buckets, function (d) { return d[0]; });
        // DELETE extra points
        dataBound.exit().remove();
        // ENTER new points
        var enterSelection = dataBound.enter().append("g").classed("post", true);
        // UPDATE all existing points
        enterSelection.append("circle");
        enterSelection
            .merge(dataBound)
            .select("circle")
            .attr("transform", function (d) {
            var x = context.lineChartConfig.xScale;
            var y = context.lineChartConfig.yScale;
            d["x"] = x(d[0]) + x.bandwidth() / 2;
            d["y"] = y(d[1]);
            return "translate(" + d["x"] + ", " + d["y"] + ")";
        })
            .attr("r", function () {
            // make the radius a function of the bandwidth for all data, to ensure filter does not change radius
            var fullBandwidth = context.plotWidth / d3__WEBPACK_IMPORTED_MODULE_1__["intersection"](rawData.map(function (d) { return d["xVar"]; })).size;
            return 4 + fullBandwidth / 8 + "px";
        })
            .style("fill", function (d) {
            // fill based on interactions with underlying data points!
            if (context.global.appType == "CONTROL")
                return "white";
            switch (dataset["colorByMode"]) {
                case "abs":
                    var sumInteracted = d[2].reduce(context.utilsService.sumTimesVisited, 0);
                    var sumVisits = prepared.reduce(context.utilsService.sumTimesVisited, 0);
                    return sumInteracted == 0
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(sumInteracted / sumVisits);
                case "rel":
                    var maxInteracted = d[2].reduce(context.utilsService.maxTimesVisited, 0);
                    var maxVisits = prepared.reduce(context.utilsService.maxTimesVisited, 0);
                    return maxInteracted == 0
                        ? "white"
                        : context.userConfig.focusSequentialColorScale(maxInteracted / maxVisits);
                case "binary":
                    var visited = d[2].some(function (el) { return el["timesVisited"] > 0; });
                    return !visited ? "white" : context.userConfig.focusSequentialColorScale(1);
                default:
                    return "white";
            }
        })
            .style("fill-opacity", 1)
            .style("stroke", function (d) { return (d[2].reduce(function (a, b) { return a || b["selected"]; }, false) ? "brown" : "black"); })
            .style("stroke-width", function (d) { return (d[2].reduce(function (a, b) { return a || b["selected"]; }, false) ? "3px" : "1px"); })
            .style("stroke-dasharray", function (d) {
            var countSelected = d[2].filter(function (o) { return o["selected"]; }).length;
            return countSelected < d[2].length && countSelected > 0 ? "3" : "none";
        })
            .style("cursor", "pointer")
            .on("click", function (event, d) {
            if (context.global.appType === "ADMIN") {
                context.utilsService.clickGroup(context, event, {
                    aggName: dataset["aggType"] == null ? "count" : dataset["aggType"],
                    aggAxis: "y-axis",
                    binLabel: d[0],
                    binValue: d[1],
                    binData: d[2],
                });
            }
        })
            .on("mouseover", function (event, d) {
            context.utilsService.mouseoverGroup(context, event, this, {
                aggName: dataset["aggType"] == null ? "count" : dataset["aggType"],
                aggAxis: "y-axis",
                binLabel: d[0],
                binValue: d[1],
                binData: d[2],
            });
        })
            .on("mouseout", function (event, d) {
            context.utilsService.mouseoutGroup(context, event, {
                aggName: dataset["aggType"] == null ? "count" : dataset["aggType"],
                aggAxis: "y-axis",
                binLabel: d[0],
                binValue: d[1],
                binData: d[2],
            });
        });
        // add event listeners to the line group based on modified buckets
        var lineGroupNode = context.lineChartConfig.lineGroup.node();
        var offset = lineGroupNode.getBoundingClientRect().left;
        var pointsX = buckets.map(function (d) { return d["x"]; }); // values are always sorted asc
        context.lineChartConfig.lineGroup
            .on("mouseenter", function (event) {
            // only show the intersect line if there's data to display
            if (buckets.length) {
                var x = snapToX(pointsX, event.clientX - offset);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](".intersect-line").attr("transform", "translate(" + x + ",0)").style("display", "block");
            }
        })
            .on("mousemove", function (event) {
            // only move the intersect line if there's data to display
            if (buckets.length) {
                var x = snapToX(pointsX, event.clientX - offset);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](".intersect-line").attr("transform", "translate(" + x + ",0)");
            }
        })
            .on("mouseleave", function () {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](".intersect-line").style("display", "none");
        });
        // FILTER can update `buckets` => must update hovered Objects list
        if (dataset["hoveredObjects"]["binName"]) {
            // binName set => there is a bin visible in details view, reset existing object
            var currentBinName = dataset["hoveredObjects"]["binName"];
            var currentBinAttr = dataset["hoveredObjects"]["binAttr"];
            dataset["hoveredObjects"] = { binName: null, binAttr: null, points: {} };
            var _loop_1 = function (bin) {
                if (bin[0] == currentBinName && dataset["xVar"] == currentBinAttr) {
                    // found the bin! => update hovered Objects for possible FILTER
                    dataset["hoveredObjects"]["binName"] = currentBinName;
                    dataset["hoveredObjects"]["binAttr"] = currentBinAttr;
                    bin[2].forEach(function (d) {
                        var id = d[dataset["primaryKey"]];
                        if (id !== "-") {
                            // use dict OBJECT to update source data by reference!
                            var dataPoint = originalDatasetDict[id];
                            context.utilsService.colorDataPoint(context, dataPoint, bin[2]);
                            dataset["hoveredObjects"]["points"][id] = dataPoint;
                        }
                    });
                    // attempt to remove values from the details table
                    if (dataset["aggType"] == "min" || dataset["aggType"] == "max") {
                        Object.keys(dataset["hoveredObjects"]["points"]).forEach(function (id) {
                            if (dataset["hoveredObjects"]["points"][id][dataset["yVar"]] !== bin[1]) {
                                delete dataset["hoveredObjects"]["points"][id];
                            }
                        });
                    }
                    return "break";
                }
            };
            // look for the bin in the filtered data set. If not there, table is already reset!
            for (var _i = 0, buckets_1 = buckets; _i < buckets_1.length; _i++) {
                var bin = buckets_1[_i];
                var state_1 = _loop_1(bin);
                if (state_1 === "break")
                    break;
            }
        }
    };
    return LineChart;
}());

/**
 * Returns x coordinate of closest point to the mouse event x coordinate.
 */
function snapToX(pointsX, eventX) {
    var i = 1;
    if (eventX < pointsX[0]) {
        i = 0;
    }
    else if (eventX > pointsX[pointsX.length - 1]) {
        i = pointsX.length - 1;
    }
    else {
        while (eventX > pointsX[i])
            i++;
        if (pointsX[i] - eventX > eventX - pointsX[i - 1])
            i--;
    }
    return pointsX[i];
}


/***/ }),

/***/ "./src/app/visualizations/main/scatter-plot-component.ts":
/*!***************************************************************!*\
  !*** ./src/app/visualizations/main/scatter-plot-component.ts ***!
  \***************************************************************/
/*! exports provided: ScatterPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterPlot", function() { return ScatterPlot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_models_viz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/viz */ "./src/app/models/viz.ts");
/* harmony import */ var src_app_models_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/config */ "./src/app/models/config.ts");

// libraries



// local


var ScatterPlot = /** @class */ (function () {
    function ScatterPlot(utilsService, chatService, global, userConfig, appConfig) {
        this.utilsService = utilsService;
        this.chatService = chatService;
        this.global = global;
        this.userConfig = userConfig;
        this.appConfig = appConfig;
        this.scatterPlotConfig = new src_app_models_viz__WEBPACK_IMPORTED_MODULE_4__["ScatterPlotConfig"]();
    }
    /**
     * Create variables needed to draw and update plot.
     */
    ScatterPlot.prototype.initialize = function () {
        var context = this;
        var container = "#plot_container";
        var width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().height();
        var plotMargins = { top: 50, bottom: 50, left: 60, right: 30 };
        context.plotWidth = width - plotMargins.left - plotMargins.right;
        context.plotHeight = height - plotMargins.top - plotMargins.bottom;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).empty();
        // Add containing SVG
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](container).append("svg").attr("width", width).attr("height", height);
        // Add linear gradient to SVG definition for use in color scale FIRST
        var grad = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "grad")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");
        grad
            .selectAll("stop")
            .data(src_app_models_config__WEBPACK_IMPORTED_MODULE_5__["sequentialColorRange"])
            .enter()
            .append("stop")
            .style("stop-color", function (d) { return d.toString(); })
            .attr("offset", function (_, i) { return 100 * (i / (src_app_models_config__WEBPACK_IMPORTED_MODULE_5__["sequentialColorRange"].length - 1)) + "%"; });
        // Add plot group
        context.plotGroup = svg
            .append("g")
            .classed("plot", true)
            .attr("transform", "translate(" + plotMargins.left + ", " + plotMargins.top + ")");
        // Add X and Y axis groups
        context.scatterPlotConfig.yAxisGroup = context.plotGroup.append("g").classed("y", true).classed("axis", true);
        context.scatterPlotConfig.xAxisGroup = context.plotGroup
            .append("g")
            .classed("x", true)
            .classed("axis", true)
            .attr("transform", "translate(" + 0 + ", " + context.plotHeight + ")");
        // Add point groups
        context.scatterPlotConfig.pointsGroup = context.plotGroup.append("g").classed("points", true);
        // Add legend group, text and gradient rectangle
        context.scatterPlotConfig.legendGroup = context.plotGroup.append("g").classed("legend", true);
        if (context.global.appType !== "CONTROL") {
            var pad = 5; // padding (px) between elements
            var gradRectWidth = context.plotWidth / 5; // width of gradient rectangle
            var leftLabel = "Less Focus"; // label on the left of the legend gradient
            var rightLabel = "More Focus"; // label on the right of the legend gradient
            // build the legend right to left
            var xPos = context.plotWidth; // x position of element, gets updated dynamically
            var el = context.scatterPlotConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text(rightLabel);
            xPos -= Math.abs(el.node().getBBox()["x"]) + gradRectWidth + pad;
            context.scatterPlotConfig.legendGroup
                .append("rect")
                .attr("transform", "translate(" + xPos + ", " + (-3 / 4) * plotMargins.top + ")")
                .attr("width", gradRectWidth)
                .attr("height", (1 / 8) * plotMargins.top)
                .style("rx", "4")
                .style("fill", "url(#grad)");
            xPos -= pad;
            context.scatterPlotConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text(leftLabel);
        }
        // Create unsupported text to display if chart cannot render
        context.scatterPlotConfig.unsupportedMessage = "\n      <tspan>\n        If using numerical\n        (<tspan style=\"font-family: 'Font Awesome 5 Free'; font-weight: 800 !important\">&#xf292;</tspan>)\n        attributes,\n      </tspan>\n      <tspan x=\"0\" dy=\"1.2em\">\n        you must have\n        <tspan style=\"font-weight: 800 !important\">more than one</tspan>!\n      </tspan>";
    };
    /**
     * Calculate new values and re-draw plot.
     */
    ScatterPlot.prototype.update = function () {
        var context = this;
        var originalDatasetDict = context.userConfig["originalDatasetDict"];
        var dataset = context.appConfig[context.global.appMode];
        // if there's no dataset don't update the bar chart
        if (!originalDatasetDict)
            return;
        // Clear unsupported message
        context.scatterPlotConfig.pointsGroup.select(".unsupported-text").remove();
        // create raw data object
        var rawData = Object.keys(originalDatasetDict).map(function (id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalDatasetDict[id]), { xVar: dataset["xVar"] == null ? null : originalDatasetDict[id][dataset["xVar"]], yVar: dataset["yVar"] == null ? null : originalDatasetDict[id][dataset["yVar"]] });
        });
        // filter raw data into a prepared data set
        var prepared = rawData;
        ["N", "O"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return filterModel.indexOf(item[attr]) !== -1;
                });
            });
        });
        ["Q", "T"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return (parseFloat(item[attr]) >= parseFloat(filterModel[0]) && parseFloat(item[attr]) <= parseFloat(filterModel[1]));
                });
            });
        });
        // Initialize context variables
        var xAxisTitle = "";
        var yAxisTitle = "";
        var xIsNA = dataset["xVar"] == null;
        var yIsNA = dataset["yVar"] == null;
        var xIsQ = context.utilsService.isMeasure(dataset, dataset["xVar"], "Q");
        var yIsQ = context.utilsService.isMeasure(dataset, dataset["yVar"], "Q");
        if ((!xIsQ && !yIsQ) || xIsNA || yIsNA) {
            // [N/O/T x N/O/T] OR [N/O/T/Q x NA] OR [NA x N/O/T/Q] => unsupported
            prepared = [];
            context.scatterPlotConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([]).range([0, context.plotWidth]);
            context.scatterPlotConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([]).range([context.plotHeight, 0]);
            context.scatterPlotConfig.legendGroup.style("display", "none");
            context.scatterPlotConfig.pointsGroup
                .append("text")
                .attr("class", "unsupported-text")
                .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                .attr("text-anchor", "middle")
                .html(context.scatterPlotConfig.unsupportedMessage);
        }
        else {
            // both x and y are defined => set axis titles and display legend
            context.scatterPlotConfig.legendGroup.style("display", "block");
            xAxisTitle = dataset["xVar"];
            yAxisTitle = dataset["yVar"];
            if (xIsQ) {
                // x is Q => scale linear
                context.scatterPlotConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
                    .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](rawData, function (d) {
                    return d["xVar"];
                }))
                    .range([0, context.plotWidth]);
            }
            else {
                // x is N/O/T => scale ordinal
                context.scatterPlotConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
                    .domain(rawData
                    .map(function (d) {
                    return d["xVar"];
                })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x, y); // sort domain
                }))
                    .rangeRound([0, context.plotWidth])
                    .padding(0.1);
            }
            if (yIsQ) {
                // y is Q => scale linear
                context.scatterPlotConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
                    .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](rawData, function (d) {
                    return d["yVar"];
                }))
                    .range([context.plotHeight, 0]);
            }
            else {
                // y is N/O/T => scale ordinal
                context.scatterPlotConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
                    .domain(rawData
                    .map(function (d) {
                    return d["yVar"];
                })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x, y); // sort domain
                }))
                    .rangeRound([context.plotHeight, 0])
                    .padding(0.1);
            }
        }
        // Update the AXIS domain to the extent of the FILTERED points.
        if (context.userConfig["axisRescale"] && prepared.length) {
            context.scatterPlotConfig.xScale.domain(prepared.map(function (d) { return d["xVar"]; }));
            context.scatterPlotConfig.yScale.domain(prepared.map(function (d) { return d["yVar"]; }));
        }
        // set x axis
        context.scatterPlotConfig.xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](context.scatterPlotConfig.xScale)
            .tickFormat(function (d) { return (xIsQ ? context.utilsService.formatLargeNum(+d) : d.toString()); });
        // set y axis
        context.scatterPlotConfig.yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](context.scatterPlotConfig.yScale)
            .tickFormat(function (d) { return (yIsQ ? context.utilsService.formatLargeNum(+d) : d.toString()); });
        // draw axes
        context.scatterPlotConfig.xAxisGroup.call(context.scatterPlotConfig.xAxis);
        context.scatterPlotConfig.yAxisGroup.call(context.scatterPlotConfig.yAxis);
        // draw axis titles
        context.scatterPlotConfig.xAxisGroup.select(".x.axis.title").remove();
        context.scatterPlotConfig.xAxisGroup
            .append("g")
            .classed("x axis title", true)
            .attr("opacity", 1)
            .attr("transform", "translate(" + context.plotWidth / 2 + ", 0)")
            .append("text")
            .attr("text-anchor", "middle")
            .attr("fill", "currentColor")
            .attr("dy", "3.71em")
            .text(xAxisTitle);
        context.scatterPlotConfig.yAxisGroup.select(".y.axis.title").remove();
        context.scatterPlotConfig.yAxisGroup
            .append("g")
            .classed("y axis title", true)
            .attr("opacity", 1)
            .attr("transform", "translate(-30, " + context.plotHeight / 2 + ")")
            .append("text")
            .attr("fill", "currentColor")
            .text(yAxisTitle);
        // prepare data labels for yAxis
        context.scatterPlotConfig.yAxisGroup
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("dx", "0.8em")
            .attr("dy", "-1.21em")
            .attr("transform", "rotate(-90)");
        // stagger every other tick label
        context.scatterPlotConfig.xAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("y2", 15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "1.91em");
            }
        });
        context.scatterPlotConfig.yAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("x2", -15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "-2.41em");
            }
        });
        // JOIN data selection using Primary Key label
        var dataBound = context.scatterPlotConfig.pointsGroup
            .selectAll(".post")
            .data(prepared, function (d) { return d[dataset["primaryKey"]]; });
        // DELETE extra points
        dataBound.exit().remove();
        // ENTER new points (starting invisible, later fade them in)
        var enterSelection = dataBound.enter().append("g").classed("post", true);
        // UPDATE all existing points
        enterSelection.append("circle");
        enterSelection
            .merge(dataBound)
            .select("circle")
            .attr("transform", function (d) { return translatePoints(d, context, xIsQ, yIsQ); })
            .attr("r", 6)
            .style("fill", function (d) {
            // use dict OBJECT to update source data by reference!
            var dataPoint = originalDatasetDict[d[dataset["primaryKey"]]];
            context.utilsService.colorDataPoint(context, dataPoint, prepared);
            return dataPoint["color"];
        })
            .style("fill-opacity", 0.8)
            .style("stroke-width", function (d) { return (d["selected"] ? "3px" : "1px"); })
            .style("stroke", function (d) { return (d["selected"] ? "brown" : "black"); })
            .style("cursor", "pointer")
            .on("click", function (event, d) {
            if (context.global.appType === "ADMIN") {
                d["selected"]
                    ? context.utilsService.clickRemoveItem(context, event, d)
                    : context.utilsService.clickAddItem(context, event, d);
            }
        })
            .on("mouseover", function (event, d) {
            context.utilsService.mouseoverItem(context, event, d, this, "fill");
        })
            .on("mouseout", function (event, d) {
            context.utilsService.mouseoutItem(context, event, d);
        });
    };
    return ScatterPlot;
}());

/**
 * Sets translate(x,y) string to pass to transform attr of each point.
 */
function translatePoints(d, context, xIsQ, yIsQ) {
    var translate = "";
    var dataset = context.appConfig[context.global.appMode];
    if (context.userConfig.jitterScatterplotPoints) {
        // Jitter the points!
        var jitter_factor = 50; // Increase this for more jitter.
        var rng = seedrandom__WEBPACK_IMPORTED_MODULE_3__(d[dataset["primaryKey"]] + context.global["participantId"]);
        // Jitter X
        var sign = rng() > 0.5 ? "-" : "+";
        var jitter = rng() * jitter_factor;
        if (xIsQ) {
            // x is Q
            d["jitter_x"] = context.scatterPlotConfig.xScale(d["xVar"]) + (sign == "-" ? -jitter : jitter);
        }
        else {
            // x is N/O/T
            d["jitter_x"] = context.scatterPlotConfig.xScale(d["xVar"]) + (sign == "-" ? -jitter : jitter);
            d["jitter_x"] += context.scatterPlotConfig.xScale.bandwidth() / 2;
        }
        // Jitter Y
        var sign = rng() > 0.5 ? "-" : "+";
        var jitter = rng() * jitter_factor;
        if (yIsQ) {
            // y is Q
            d["jitter_y"] = context.scatterPlotConfig.yScale(d["yVar"]) + (sign == "-" ? -jitter : jitter);
        }
        else {
            // y is N/O/T
            d["jitter_y"] = context.scatterPlotConfig.yScale(d["yVar"]) + (sign == "-" ? -jitter : jitter);
            d["jitter_y"] += context.scatterPlotConfig.yScale.bandwidth() / 2;
        }
        // Move the x back into the plot area
        if (d["jitter_x"] < 0) {
            d["jitter_x"] = rng() * jitter_factor;
        }
        else if (d["jitter_x"] > context.plotWidth) {
            d["jitter_x"] = context.plotWidth - rng() * jitter_factor;
        }
        // Move the y back into the plot area
        if (d["jitter_y"] < 0) {
            d["jitter_y"] = rng() * jitter_factor;
        }
        else if (d["jitter_y"] > context.plotHeight) {
            d["jitter_y"] = context.plotHeight - rng() * jitter_factor;
        }
        // set translation string
        translate = "translate(" + d["jitter_x"] + "," + d["jitter_y"] + ")";
    }
    else {
        // don't jitter!
        d["x"] = context.scatterPlotConfig.xScale(d["xVar"]);
        d["y"] = context.scatterPlotConfig.yScale(d["yVar"]);
        // align points in bands if x is N/O/T
        if (!xIsQ && dataset["xVar"] !== null) {
            d["x"] += context.scatterPlotConfig.xScale.bandwidth() / 2;
        }
        // align points in bands if y is N/O/T
        if (!yIsQ && dataset["yVar"] !== null) {
            d["y"] += context.scatterPlotConfig.yScale.bandwidth() / 2;
        }
        // set translation string
        translate = "translate(" + d["x"] + "," + d["y"] + ")";
    }
    return translate;
}


/***/ }),

/***/ "./src/app/visualizations/main/strip-plot-component.ts":
/*!*************************************************************!*\
  !*** ./src/app/visualizations/main/strip-plot-component.ts ***!
  \*************************************************************/
/*! exports provided: StripPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripPlot", function() { return StripPlot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/viz */ "./src/app/models/viz.ts");
/* harmony import */ var src_app_models_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/config */ "./src/app/models/config.ts");

// libraries


// local


var StripPlot = /** @class */ (function () {
    function StripPlot(utilsService, chatService, global, userConfig, appConfig) {
        this.utilsService = utilsService;
        this.chatService = chatService;
        this.global = global;
        this.userConfig = userConfig;
        this.appConfig = appConfig;
        this.stripPlotConfig = new src_app_models_viz__WEBPACK_IMPORTED_MODULE_3__["StripPlotConfig"]();
    }
    /**
     * Create variables needed to draw and update plot.
     */
    StripPlot.prototype.initialize = function () {
        var context = this;
        var container = "#plot_container";
        var width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).parent().height();
        var plotMargins = { top: 50, bottom: 50, left: 60, right: 30 };
        context.plotWidth = width - plotMargins.left - plotMargins.right;
        context.plotHeight = height - plotMargins.top - plotMargins.bottom;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(container).empty();
        // Add containing SVG
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](container).append("svg").attr("width", width).attr("height", height);
        // Add linear gradient to SVG definition for use in color scale FIRST
        var grad = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "grad")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");
        grad
            .selectAll("stop")
            .data(src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"])
            .enter()
            .append("stop")
            .style("stop-color", function (d) { return d.toString(); })
            .attr("offset", function (_, i) { return 100 * (i / (src_app_models_config__WEBPACK_IMPORTED_MODULE_4__["sequentialColorRange"].length - 1)) + "%"; });
        // Add plot group
        context.plotGroup = svg
            .append("g")
            .classed("plot", true)
            .attr("transform", "translate(" + plotMargins.left + ", " + plotMargins.top + ")");
        // Add X and Y axis groups
        context.stripPlotConfig.yAxisGroup = context.plotGroup.append("g").classed("y", true).classed("axis", true);
        context.stripPlotConfig.xAxisGroup = context.plotGroup
            .append("g")
            .classed("x", true)
            .classed("axis", true)
            .attr("transform", "translate(" + 0 + ", " + context.plotHeight + ")");
        // Add strips groups
        context.stripPlotConfig.stripsGroup = context.plotGroup.append("g").classed("strips", true);
        // Add legend group, text and gradient rectangle
        context.stripPlotConfig.legendGroup = context.plotGroup.append("g").classed("legend", true);
        if (context.global.appType !== "CONTROL") {
            var pad = 5; // padding (px) between elements
            var gradRectWidth = context.plotWidth / 5; // width of gradient rectangle
            var leftLabel = "Less Focus"; // label on the left of the legend gradient
            var rightLabel = "More Focus"; // label on the right of the legend gradient
            // build the legend right to left
            var xPos = context.plotWidth; // x position of element, gets updated dynamically
            var el = context.stripPlotConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text(rightLabel);
            xPos -= Math.abs(el.node().getBBox()["x"]) + gradRectWidth + pad;
            context.stripPlotConfig.legendGroup
                .append("rect")
                .attr("transform", "translate(" + xPos + ", " + (-3 / 4) * plotMargins.top + ")")
                .attr("width", gradRectWidth)
                .attr("height", (1 / 8) * plotMargins.top)
                .style("rx", "4")
                .style("fill", "url(#grad)");
            xPos -= pad;
            context.stripPlotConfig.legendGroup
                .append("text")
                .attr("transform", "translate(" + xPos + ", " + (-5 / 8) * plotMargins.top + ")")
                .attr("text-anchor", "end")
                .text(leftLabel);
        }
        // Create unsupported text to display if chart cannot render
        context.stripPlotConfig.unsupportedMessage = "\n      <tspan>\n        Try using one numerical\n        (<tspan style=\"font-family: 'Font Awesome 5 Free'; font-weight: 800 !important\">&#xf292;</tspan>)\n      </tspan>\n      <tspan x=\"0\" dy=\"1.2em\">\n        attribute\n        <tspan style=\"font-weight: 800 !important\">at most</tspan> \n        on either axis!\n      </tspan>";
    };
    /**
     * Calculate new values and re-draw plot.
     */
    StripPlot.prototype.update = function () {
        var context = this;
        var originalDatasetDict = context.userConfig["originalDatasetDict"];
        var dataset = context.appConfig[context.global.appMode];
        // if there's no dataset don't update the chart
        if (!originalDatasetDict)
            return;
        // Clear unsupported message
        context.stripPlotConfig.stripsGroup.select(".unsupported-text").remove();
        // create raw data object
        var rawData = Object.keys(originalDatasetDict).map(function (id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalDatasetDict[id]), { xVar: dataset["xVar"] == null ? null : originalDatasetDict[id][dataset["xVar"]], yVar: dataset["yVar"] == null ? null : originalDatasetDict[id][dataset["yVar"]] });
        });
        // filter raw data into a prepared data set
        var prepared = rawData;
        ["N", "O"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return filterModel.indexOf(item[attr]) !== -1;
                });
            });
        });
        ["T", "Q"].forEach(function (dataType) {
            return dataset.attributeDatatypeList[dataType].forEach(function (attr) {
                var filterModel = dataset["attributes"][attr]["filterModel"];
                prepared = prepared.filter(function (item) {
                    return parseFloat(item[attr]) >= parseFloat(filterModel[0]) && parseFloat(item[attr]) <= parseFloat(filterModel[1]);
                });
            });
        });
        // Create scales and axes based on vis matrix
        var yAxisMajor = false;
        var xAxisCategorical = false;
        var yAxisCategorical = false;
        var xIsQ = context.utilsService.isMeasure(dataset, dataset["xVar"], "Q");
        var yIsQ = context.utilsService.isMeasure(dataset, dataset["yVar"], "Q");
        if (xIsQ && yIsQ) {
            // [Q x Q] => unsupported, remove x axis as well
            prepared = []; // ensures no points are drawn
            context.stripPlotConfig.xAxisGroup.selectAll("*").remove();
            context.stripPlotConfig.yAxisGroup.selectAll("*").remove();
            context.stripPlotConfig.legendGroup.style("display", "none");
            context.stripPlotConfig.stripsGroup
                .append("text")
                .attr("class", "unsupported-text")
                .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                .attr("text-anchor", "middle")
                .html(context.stripPlotConfig.unsupportedMessage);
        }
        else if (xIsQ) {
            // x is Q => vertical strips
            context.stripPlotConfig.legendGroup.style("display", "block");
            context.stripPlotConfig.yAxisGroup.selectAll("*").remove();
            context.stripPlotConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, context.plotWidth]);
            if (!yIsQ && dataset["yVar"] !== null) {
                // [Q x N/O/T] => vertical strips with categorical y axis
                yAxisCategorical = true;
                context.stripPlotConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
                    .domain(rawData
                    .map(function (d) {
                    return d["yVar"];
                })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x, y); // sort domain
                }))
                    .rangeRound([context.plotHeight, 0])
                    .padding(0.1);
                context.stripPlotConfig.yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](context.stripPlotConfig.yScale);
                context.stripPlotConfig.yAxisGroup.call(context.stripPlotConfig.yAxis);
                context.stripPlotConfig.yAxisGroup.select(".y.axis.title").remove();
                context.stripPlotConfig.yAxisGroup
                    .append("g")
                    .classed("y axis title", true)
                    .attr("opacity", 1)
                    .attr("transform", "translate(-30, " + context.plotHeight / 2 + ")")
                    .append("text")
                    .attr("fill", "currentColor")
                    .text(dataset["yVar"]);
                context.stripPlotConfig.yAxisGroup
                    .selectAll("text")
                    .style("text-anchor", "middle")
                    .attr("dx", "0.8em")
                    .attr("dy", "-1.21em")
                    .attr("transform", "rotate(-90)");
            }
            context.stripPlotConfig.xScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](rawData, function (d) {
                return d["xVar"];
            }));
            context.stripPlotConfig.xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](context.stripPlotConfig.xScale)
                .tickFormat(function (d) { return context.utilsService.formatLargeNum(+d); });
            context.stripPlotConfig.xAxisGroup.call(context.stripPlotConfig.xAxis);
            context.stripPlotConfig.xAxisGroup.select(".x.axis.title").remove();
            context.stripPlotConfig.xAxisGroup
                .append("g")
                .classed("x axis title", true)
                .attr("opacity", 1)
                .attr("transform", "translate(" + context.plotWidth / 2 + ", 0)")
                .append("text")
                .attr("text-anchor", "middle")
                .attr("fill", "currentColor")
                .attr("dy", "3.71em")
                .text(dataset["xVar"]);
        }
        else if (yIsQ) {
            // y is Q => horizontal strips
            yAxisMajor = true;
            context.stripPlotConfig.legendGroup.style("display", "block");
            context.stripPlotConfig.xAxisGroup.selectAll("*").remove();
            context.stripPlotConfig.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([context.plotHeight, 0]);
            if (!xIsQ && dataset["xVar"] !== null) {
                // [N/O/T x Q] => horizontal strips with categorical x axis
                xAxisCategorical = true;
                context.stripPlotConfig.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
                    .domain(rawData
                    .map(function (d) {
                    return d["xVar"];
                })
                    .sort(function (x, y) {
                    return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](x, y); // sort domain
                }))
                    .rangeRound([0, context.plotWidth])
                    .padding(0.1);
                context.stripPlotConfig.xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](context.stripPlotConfig.xScale);
                context.stripPlotConfig.xAxisGroup.call(context.stripPlotConfig.xAxis);
                context.stripPlotConfig.xAxisGroup.select(".x.axis.title").remove();
                context.stripPlotConfig.xAxisGroup
                    .append("g")
                    .classed("x axis title", true)
                    .attr("opacity", 1)
                    .attr("transform", "translate(" + context.plotWidth / 2 + ", 0)")
                    .append("text")
                    .attr("text-anchor", "middle")
                    .attr("fill", "currentColor")
                    .attr("dy", "3.71em")
                    .text(dataset["xVar"]);
            }
            context.stripPlotConfig.yScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](rawData, function (d) {
                return d["yVar"];
            }));
            context.stripPlotConfig.yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](context.stripPlotConfig.yScale)
                .tickFormat(function (d) { return context.utilsService.formatLargeNum(+d); });
            context.stripPlotConfig.yAxisGroup.call(context.stripPlotConfig.yAxis);
            context.stripPlotConfig.yAxisGroup.select(".y.axis.title").remove();
            context.stripPlotConfig.yAxisGroup
                .append("g")
                .classed("y axis title", true)
                .attr("opacity", 1)
                .attr("transform", "translate(-30, " + context.plotHeight / 2 + ")")
                .append("text")
                .attr("fill", "currentColor")
                .text(dataset["yVar"]);
            context.stripPlotConfig.yAxisGroup
                .selectAll("text")
                .style("text-anchor", "middle")
                .attr("dx", "0.8em")
                .attr("dy", "-1.21em")
                .attr("transform", "rotate(-90)");
        }
        else {
            // [N/T/O x NA] OR [NA x N/T/O] OR [N/T/O/Q x N/T/O/Q] => unsupported
            prepared = []; // ensures no points are drawn
            context.stripPlotConfig.xAxisGroup.selectAll("*").remove();
            context.stripPlotConfig.yAxisGroup.selectAll("*").remove();
            context.stripPlotConfig.legendGroup.style("display", "none");
            context.stripPlotConfig.stripsGroup
                .append("text")
                .attr("class", "unsupported-text")
                .attr("transform", "translate(" + context.plotWidth / 2 + "," + context.plotHeight / 2 + ")")
                .attr("text-anchor", "middle")
                .html(context.stripPlotConfig.unsupportedMessage);
        }
        // draw gridlines along the major axis
        if (yAxisMajor && prepared.length) {
            // y axis gridlines => remove existing and re-draw
            context.stripPlotConfig.yAxisGroup.selectAll(".gridline").remove();
            var linesBound = context.stripPlotConfig.yAxisGroup
                .selectAll(".gridline")
                .data(context.stripPlotConfig.yScale.ticks());
            var enterLines = linesBound
                .enter()
                .append("g")
                .classed("gridline", true)
                .attr("opacity", 0.15)
                .attr("transform", function (d) { return "translate(0," + context.stripPlotConfig.yScale(d) + ")"; });
            enterLines.append("line");
            enterLines
                .merge(linesBound)
                .select("line")
                .attr("x2", function () { return (xAxisCategorical ? context.plotWidth : 0.1 * context.plotWidth); })
                .attr("stroke", "currentColor");
        }
        else if (prepared.length) {
            // x axis gridlines => remove existing and re-draw
            context.stripPlotConfig.xAxisGroup.selectAll(".gridline").remove();
            var linesBound = context.stripPlotConfig.xAxisGroup
                .selectAll(".gridline")
                .data(context.stripPlotConfig.xScale.ticks());
            var enterLines = linesBound
                .enter()
                .append("g")
                .classed("gridline", true)
                .attr("opacity", 0.15)
                .attr("transform", function (d) { return "translate(" + context.stripPlotConfig.xScale(d) + ",0)"; });
            enterLines.append("line");
            enterLines
                .merge(linesBound)
                .select("line")
                .attr("y2", function () { return (yAxisCategorical ? -context.plotHeight : -0.1 * context.plotHeight); })
                .attr("stroke", "currentColor");
        }
        // stagger every other tick label
        context.stripPlotConfig.xAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("y2", 15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "1.91em");
            }
        });
        context.stripPlotConfig.yAxisGroup.selectAll(".tick").each(function (_, i) {
            if (i % 2 !== 0) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("line").attr("x2", -15);
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).select("text").attr("dy", "-2.41em");
            }
        });
        // JOIN data selection using Primary Key label
        var dataBound = context.stripPlotConfig.stripsGroup
            .selectAll(".post")
            .data(prepared, function (d) { return d[dataset["primaryKey"]]; });
        // DELETE extra strips (fade them out)
        dataBound.exit().remove();
        // ENTER new strips (starting invisible, later fade them in)
        var enterSelection = dataBound.enter().append("g").classed("post", true);
        // UPDATE all existing strips
        enterSelection.append("line");
        enterSelection
            .merge(dataBound)
            .select("line")
            .attr("x1", function (d) {
            var x = context.stripPlotConfig.xScale;
            return yAxisMajor
                ? xAxisCategorical
                    ? x(d["xVar"]) + x.bandwidth() / 2 - 0.025 * context.plotWidth
                    : 0.025 * context.plotWidth // 25% of gridline
                : x(d["xVar"]);
        })
            .attr("x2", function (d) {
            var x = context.stripPlotConfig.xScale;
            return yAxisMajor
                ? xAxisCategorical
                    ? x(d["xVar"]) + x.bandwidth() / 2 + 0.025 * context.plotWidth
                    : 0.075 * context.plotWidth // 75% of gridline
                : x(d["xVar"]);
        })
            .attr("y1", function (d) {
            var y = context.stripPlotConfig.yScale;
            return !yAxisMajor
                ? yAxisCategorical
                    ? y(d["yVar"]) + y.bandwidth() / 2 - 0.025 * context.plotHeight
                    : 0.925 * context.plotHeight // 25% of gridline
                : y(d["yVar"]);
        })
            .attr("y2", function (d) {
            var y = context.stripPlotConfig.yScale;
            return !yAxisMajor
                ? yAxisCategorical
                    ? y(d["yVar"]) + y.bandwidth() / 2 + 0.025 * context.plotHeight
                    : 0.975 * context.plotHeight // 75% of gridline
                : y(d["yVar"]);
        })
            .style("stroke", function (d) {
            // use dict OBJECT to update source data by reference!
            var dataPoint = originalDatasetDict[d[dataset["primaryKey"]]];
            context.utilsService.colorDataPoint(context, dataPoint, prepared);
            // default/selected stroke is DIFFERENT than data point color!!
            if (dataPoint["selected"]) {
                return "brown"; // selected color
            }
            else if (context.global.appType !== "CONTROL" && dataPoint["timesVisited"] > 0 && dataset["colorByMode"]) {
                return dataPoint["color"]; // bias color
            }
            else {
                return "black"; // default color
            }
        })
            .style("stroke-width", function (d) { return (d["selected"] ? "2px" : "1px"); })
            .style("cursor", "pointer")
            .on("click", function (event, d) {
            if (context.global.appType === "ADMIN") {
                d["selected"]
                    ? context.utilsService.clickRemoveItem(context, event, d)
                    : context.utilsService.clickAddItem(context, event, d);
            }
        })
            .on("mouseover", function (event, d) {
            context.utilsService.mouseoverItem(context, event, d, this, "stroke");
        })
            .on("mouseout", function (event, d) {
            context.utilsService.mouseoutItem(context, event, d);
        });
    };
    return StripPlot;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
// libraries


// local


if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Administrator\Desktop\dev\test_lumos\Lumos\app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map