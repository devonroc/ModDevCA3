(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--   Title:  Week9 (Ap 13- Ap 19)\n      Author: Mikhail Timofeev\n     Date: 14/April/2020\n     Availability: https://drive.google.com/file/d/1DtBAlEWYf28XwlT0eEHIsYc8D0DKLz3Q/view?usp=sharing\n--> \n\n<!-- HTML code for Episodes web page-->\n<ion-header>\n\t<!-- Tool bar with the title of the web page-->\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Breaking Bad Episodes</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<!-- Content of the web page, here is shown a list of the\nepisodes it includes a fuction onclick that opens a second page with the details about the \nepisode selected the attributes title and episode_id are taken form the API https://www.breakingbadapi.com/  -->\n\n<!-- *ngForIt to iterate data within array datatype-->\n<!-- async works only with observable variables, it used usually to charge async data from APIS-->\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\" (click)=\"openDetails(episode)\">\n\t\t\t<ion-icon name=\"tv-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>\n\t\t\t\t<h2> {{ episode.title }}</h2>\n\t\t\t\t<h3> Episode No. {{ episode.episode_id }} </h3>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episodes/episodes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EpisodesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function() { return EpisodesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }
];
let EpisodesPageRoutingModule = class EpisodesPageRoutingModule {
};
EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.module.ts ***!
  \***************************************************/
/*! exports provided: EpisodesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function() { return EpisodesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-routing.module */ "./src/app/pages/episodes/episodes-routing.module.ts");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");







let EpisodesPageModule = class EpisodesPageModule {
};
EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]
        ],
        declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })
], EpisodesPageModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.ts ***!
  \*************************************************/
/*! exports provided: EpisodesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPage", function() { return EpisodesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





// In this file is the logic for the episodes HTML page.
//First the services and packages that interact with this code are imported at the top
let EpisodesPage = class EpisodesPage {
    constructor(router, api, http) {
        this.router = router;
        this.api = api;
        this.http = http;
    }
    ngOnInit() {
        //The data will be extracted from an API, the method that is in charge of this 
        //is in the /api/service file
        //initialize the variable with the data from the API
        this.episodes = this.api.getEpisodes();
        //to show the result in console:
        //this.episodes.subscribe(data => {console.log('my data' , data);
        //});
    }
    //read the data from where the mouse is located and go to the episode selected
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }
};
EpisodesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episodes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episodes.page.scss */ "./src/app/pages/episodes/episodes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], EpisodesPage);



/***/ })

}]);
//# sourceMappingURL=episodes-episodes-module-es2015.js.map