webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.scroll = function (element) {
        //scroll to the selected element
        if (element == 'About') {
            var yOffset = document.getElementById(element).offsetTop;
            this.content.scrollTo(0, yOffset, 4000);
        }
        else if (element == 'Contact') {
            var yOffset = document.getElementById(element).offsetTop;
            this.content.scrollTo(0, yOffset, 4000);
        }
        else if (element == 'Prices') {
            var yOffset = document.getElementById(element).offsetTop;
            this.content.scrollTo(0, yOffset, 4000);
        }
        else if (element == 'Services') {
            var yOffset = document.getElementById(element).offsetTop;
            this.content.scrollTo(0, yOffset, 4000);
        }
        else if (element == 'Top') {
            this.content.ScrollToTop(4000);
        }
        else if (element == 'Bottom') {
            this.content.ScrollToTop(4000);
        }
    };
    HomePage.prototype.gotoslide = function (service) {
        //moving to the service for the clicked button
        if (service == "genprices") {
            this.slides.slideTo(0, 100);
        }
        else if (service == "service1") {
            this.slides.slideTo(1, 10);
        }
        else if (service == "service2") {
            this.slides.slideTo(2, 10);
        }
        else if (service == "service3") {
            this.slides.slideTo(3, 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", Object)
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myslides'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\projects\benr\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n    <ion-grid>\n\n    	<ion-row>\n\n    	<ion-col> \n\n    	<img src="../assets/imgs/logo.png" length="20px" width="20px">\n\n    	Benr Logo</ion-col>\n\n    	<ion-col>Benr Title</ion-col>	\n\n    	<ion-col>\n\n    	<ion-buttons right small>\n\n    	<button ion-button (click)="scroll(\'About\')">About</button>\n\n    	<button ion-button (click)="scroll(\'Services\')">Services</button>\n\n        <button ion-button (click)="scroll(\'Prices\')">Prices</button>\n\n        <button ion-button (click)="scroll(\'Contact\')"> Contact </button>\n\n        \n\n    	</ion-buttons>\n\n    	</ion-col>		\n\n    	</ion-row>\n\n    </ion-grid>\n\n\n\n     \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  class="sec2">\n\n						<!--Lets create a Foating button at the right of the page-->\n\n				\n\n						<ion-fab  right style="padding-top:20px" >\n\n							<button ion-fab large color="danger"><ion-icon name="menu"></ion-icon></button>\n\n							<ion-fab-list>\n\n							  <button ion-fab large ><ion-icon name=""></ion-icon>About us</button>\n\n							  <button ion-fab class="btn-lg"><ion-icon name=""></ion-icon>Contact us</button>\n\n							  <button ion-fab><ion-icon name=""></ion-icon>Share</button>\n\n							  <button ion-fab><ion-icon name=""></ion-icon></button>\n\n							</ion-fab-list>\n\n						  </ion-fab>\n\n  <ion-grid>	\n\n  	<ion-row class="sec1">\n\n  \n\n<ion-col col-12>\n\n  <ion-slides pager  autoplay="2000" effect="cube" loop="true" style="width:100%">\n\n\n\n  \n\n <ion-slide  >\n\n\n\n<ion-col col-6 class="slide-content">jjjjggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbv</ion-col>\n\n<ion-col col-6 class="slide1">\n\n<div style="width:100%;height:300px">\n\n\n\n</div>\n\n</ion-col>\n\n</ion-slide>\n\n\n\n  <ion-slide  >\n\n\n\n<ion-col col-6 class="slide-content">jjjjggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbv</ion-col>\n\n<ion-col col-6 class="slide2">\n\n<div style="width:100%;height:300px">\n\n\n\n</div>\n\n</ion-col>\n\n</ion-slide>\n\n<ion-slide  >\n\n\n\n<ion-col col-6 class="slide-content">jjjjggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbv</ion-col>\n\n<ion-col col-6 class="slide3">\n\n<div style="width:100%;height:300px">\n\n\n\n</div>\n\n</ion-col>\n\n</ion-slide>\n\n</ion-slides>\n\n</ion-col>\n\n  	</ion-row><br>\n\n  	\n\n<ion-row class="sec2" id="About" align="center" >\n\n\n\n  		<ion-col text-center>\n\n  		<div style="font-size:3em">\n\n  <b>\n\n  	Connect your Business and Home to super fast\n\n  	<br>\n\n    Internet Speeds\n\n    </b>\n\n    </div><br>\n\n    <h1>Welcome to XYZ where you are not only sure to get a wide range of services but where quality and efficiency are also guaranteed !!!!</h1>\n\n\n\n  		</ion-col >\n\n  	</ion-row><br>\n\n\n\n\n\n  	<ion-row class="login" id="Services" >\n\n  	\n\n  	<ion-col col-12><hr><div class="Sheader">Our Services</div></ion-col>\n\n\n\n    		<ion-col >\n\n  		<div class="service1">\n\n  			<h1><b>Service1</b></h1><hr>\n\n  			<div  style="font-size:18px">fff</div>\n\n  		</div>\n\n  			\n\n  		</ion-col>\n\n  		<ion-col >\n\n  			<div class="service2">\n\n            <h1><b>Service2</b></h1><hr><br>\n\n            <div  style="font-size:18px">fff</div>\n\n  			</div>\n\n  		</ion-col>\n\n  		<ion-col >\n\n  			<div class="service3">\n\n  			<h1><b>Service3</b></h1><hr><br>\n\n  			<div  style="font-size:18px">fff</div>\n\n  			</div>\n\n  		</ion-col>\n\n  		<ion-col >\n\n  			<div class="service4">\n\n  			<h1><b>Service4</b></h1><hr><br>\n\n  			<div style="font-size:18px">fff</div>\n\n  			</div>\n\n  		</ion-col>\n\n\n\n  	  	\n\n  	</ion-row>\n\n  	<ion-row  id="Prices" >\n\n<ion-col col-12><hr><div class="Sheader">Our Prices</div></ion-col>\n\n<ion-col col-3>\n\n<button ion-button round large (click)="gotoslide(\'genprices\')" >Our Prices</button><br> \n\n<button ion-button round large (click)="gotoslide(\'service1\')" >Internet Installation</button><br>\n\n<button ion-button round large (click)="gotoslide(\'service2\')" >Repair & Maintenance</button><br>\n\n<button ion-button round large (click)="gotoslide(\'service3\')" >Computer Sales</button><br>\n\n</ion-col>\n\n<ion-col col-9>\n\n<ion-slides #myslides>\n\n  <ion-slide >\n\n  <div class="generalpricesdiv"><h2>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br>ssss<br></h2>\n\n  slide0</div>\n\n  \n\n  </ion-slide>\n\n  <ion-slide padding>\n\n<ion-col> <div class="internetdiv1"><h3>Package 1</h3><hr></div> </ion-col>\n\n<ion-col><div class="internetdiv1"><h3>Package 2</h3><hr></div></ion-col>\n\n<ion-col> <div class="internetdiv1"><h3>Package 3</h3><hr></div> </ion-col>\n\n<ion-col><div class="internetdiv1"><h3>Package 4</h3><hr></div></ion-col>\n\n \n\n  \n\n  \n\n  </ion-slide>\n\n  <ion-slide>\n\n \n\n  </ion-slide>\n\n  <ion-slide>\n\n  slide4\n\n  </ion-slide>\n\n</ion-slides>\n\n</ion-col>\n\n</ion-row>\n\n \n\n  	<ion-row  id="Contact" style="padding:0pt">\n\n  		<ion-col col-12><hr><div class="Sheader">Reach Us</div></ion-col>\n\n\n\n   		<ion-col col-4 >\n\n   		<div class="contactbuttons" >\n\n   			<button ion-button><ion-icon name="call"></ion-icon></button>\n\n   			<button ion-button><ion-icon name="chatboxes"></ion-icon></button>\n\n   			<button ion-button><ion-icon name="mail"></ion-icon></button>\n\n   			<button ion-button><ion-icon name="logo-twitter"></ion-icon></button>\n\n   			<button ion-button><ion-icon name="logo-facebook"></ion-icon></button>\n\n            <br><br> <h2> Or Leave message</h2>\n\n   		</div>\n\n  			<form [formGroup]="myform" (ngSubmit)="contactform()" >\n\n  			\n\n  		<ion-item>\n\n		<ion-label floating >Name:</ion-label>\n\n		<ion-input type="text" formControlName="name" ></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		<ion-label floating >Email:</ion-label>\n\n		<ion-input type="text" formControlName="email" ></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		<ion-label floating >Message:</ion-label>\n\n		<ion-textarea type="text" rows="5" formControlName="message" ></ion-textarea>\n\n		</ion-item>\n\n\n\n  			<br><br><button ion-button  round type="submit" [disabled]="!myform.valid">Leave Message</button>\n\n  			</form>\n\n  		</ion-col>\n\n       <ion-col col-8><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8181902520714!2d37.07415731402547!3d0.01463136441556405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1787f6478462240d%3A0xd0649408e2a0723e!2sMetallic+Solutions!5e0!3m2!1sen!2ske!4v1537726064955" width="70%" height="450" frameborder="0" style="border:0;float:right" allowfullscreen></iframe></ion-col>\n\n\n\n\n\n\n\n  	</ion-row>\n\n  </ion-grid>\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\projects\benr\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\projects\benr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\ionic\projects\benr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map