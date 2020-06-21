(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Maps.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Maps.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var google = window.google;
    var map = document.getElementById('map-canvas');
    var lat = map.getAttribute('data-lat');
    var lng = map.getAttribute('data-lng');
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#444444"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": 45
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "color": '#5e72e4'
        }, {
          "visibility": "on"
        }]
      }]
    };
    map = new google.maps.Map(map, mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });
    var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' + '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tables_ProjectsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables/ProjectsTable */ "./resources/js/views/Tables/ProjectsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tables',
  components: {
    ProjectsTable: _Tables_ProjectsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/ProjectsTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'projects-table',
  props: {
    type: {
      type: String
    },
    title: String
  },
  data: function data() {
    return {
      tableData: [{
        img: 'img/theme/bootstrap.jpg',
        title: 'Argon Design System',
        budget: '$2500 USD',
        status: 'pending',
        statusType: 'warning',
        completion: 60
      }, {
        img: 'img/theme/angular.jpg',
        title: 'Angular Now UI Kit PRO',
        budget: '$1800 USD',
        status: 'completed',
        statusType: 'success',
        completion: 100
      }, {
        img: 'img/theme/sketch.jpg',
        title: 'Black Dashboard',
        budget: '$3150 USD',
        status: 'delayed',
        statusType: 'danger',
        completion: 72
      }, {
        img: 'img/theme/react.jpg',
        title: 'React Material Dashboard',
        budget: '$4400 USD',
        status: 'on schedule',
        statusType: 'info',
        completion: 90
      }, {
        img: 'img/theme/vue.jpg',
        title: 'Vue Paper UI Kit PRO',
        budget: '$2200 USD',
        status: 'completed',
        statusType: 'success',
        completion: 100
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-profile',
  data: function data() {
    return {
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Maps.vue?vue&type=template&id=12687a94&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Maps.vue?vue&type=template&id=12687a94& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid mt--7" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card shadow border-0" }, [
            _c("div", {
              staticClass: "map-canvas",
              staticStyle: { height: "600px" },
              attrs: {
                id: "map-canvas",
                "data-lat": "40.748817",
                "data-lng": "-73.985428"
              }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables.vue?vue&type=template&id=5ddc3dc4&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables.vue?vue&type=template&id=5ddc3dc4& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [_c("projects-table", { attrs: { title: "Light Table" } })],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("projects-table", {
                attrs: { type: "dark", title: "Dark Table" }
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/ProjectsTable.vue?vue&type=template&id=791599c9&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/ProjectsTable.vue?vue&type=template&id=791599c9& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card shadow",
      class: _vm.type === "dark" ? "bg-default" : ""
    },
    [
      _c(
        "div",
        {
          staticClass: "card-header border-0",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "h3",
                {
                  staticClass: "mb-0",
                  class: _vm.type === "dark" ? "text-white" : ""
                },
                [_vm._v("\n          " + _vm._s(_vm.title) + "\n        ")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col text-right" },
              [
                _c("base-button", { attrs: { type: "primary", size: "sm" } }, [
                  _vm._v("See all")
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive" },
        [
          _c(
            "base-table",
            {
              staticClass: "table align-items-center table-flush",
              class: _vm.type === "dark" ? "table-dark" : "",
              attrs: {
                "thead-classes":
                  _vm.type === "dark" ? "thead-dark" : "thead-light",
                "tbody-classes": "list",
                data: _vm.tableData
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var row = ref.row
                    return [
                      _c("th", { attrs: { scope: "row" } }, [
                        _c("div", { staticClass: "media align-items-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "avatar rounded-circle mr-3",
                              attrs: { href: "#" }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: row.img
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("span", { staticClass: "name mb-0 text-sm" }, [
                              _vm._v(_vm._s(row.title))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "budget" }, [
                        _vm._v(
                          "\n          " + _vm._s(row.budget) + "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "badge",
                            {
                              staticClass: "badge-dot mr-4",
                              attrs: { type: row.statusType }
                            },
                            [
                              _c("i", { class: "bg-" + row.statusType }),
                              _vm._v(" "),
                              _c("span", { staticClass: "status" }, [
                                _vm._v(_vm._s(row.status))
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "avatar-group" }, [
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Ryan Tompson"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-1-800x800.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Romina Hadid"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-2-800x800.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Alexander Smith"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-3-800x800.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Jessica Doe"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-4-800x800.jpg"
                                }
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("span", { staticClass: "completion mr-2" }, [
                              _vm._v(_vm._s(row.completion) + "%")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c("base-progress", {
                                  staticClass: "pt-0",
                                  attrs: {
                                    type: row.statusType,
                                    "show-percentage": false,
                                    value: row.completion
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "base-dropdown",
                            {
                              staticClass: "dropdown",
                              attrs: { position: "right" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-sm btn-icon-only text-light",
                                  attrs: {
                                    slot: "title",
                                    role: "button",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false"
                                  },
                                  slot: "title"
                                },
                                [_c("i", { staticClass: "fas fa-ellipsis-v" })]
                              ),
                              _vm._v(" "),
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Action")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Another action")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Something else here")]
                                )
                              ]
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("template", { slot: "columns" }, [
                _c("th", [_vm._v("Project")]),
                _vm._v(" "),
                _c("th", [_vm._v("Budget")]),
                _vm._v(" "),
                _c("th", [_vm._v("Status")]),
                _vm._v(" "),
                _c("th", [_vm._v("Users")]),
                _vm._v(" "),
                _c("th", [_vm._v("Completion")]),
                _vm._v(" "),
                _c("th")
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-footer d-flex justify-content-end",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [_c("base-pagination", { attrs: { total: "30" } })],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "header pb-8 pt-5 pt-lg-8 d-flex align-items-center",
          staticStyle: {
            "min-height": "600px",
            "background-image": "url(img/theme/profile-cover.jpg)",
            "background-size": "cover",
            "background-position": "center top"
          }
        },
        [
          _c("span", { staticClass: "mask bg-gradient-success opacity-8" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-fluid d-flex align-items-center" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-7 col-md-10" }, [
                  _c("h1", { staticClass: "display-2 text-white" }, [
                    _vm._v("Hello Jesse")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                    _vm._v(
                      "This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "btn btn-info", attrs: { href: "#!" } },
                    [_vm._v("Edit profile")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-4 order-xl-2 mb-5 mb-xl-0" }, [
            _c("div", { staticClass: "card card-profile shadow" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-between" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "mr-4",
                          attrs: { size: "sm", type: "info" }
                        },
                        [_vm._v("Connect")]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-button",
                        {
                          staticClass: "float-right",
                          attrs: { size: "sm", type: "default" }
                        },
                        [_vm._v("Message")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-8 order-xl-1" },
            [
              _c(
                "card",
                { attrs: { shadow: "", type: "secondary" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "bg-white border-0",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "row align-items-center" }, [
                        _c("div", { staticClass: "col-8" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v("My account")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4 text-right" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              attrs: { href: "#!" }
                            },
                            [_vm._v("Settings")]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                          }
                        }
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("User information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Username",
                                    placeholder: "Username",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.username,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "username", $$v)
                                    },
                                    expression: "model.username"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Email address",
                                    placeholder: "jesse@example.com",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "email", $$v)
                                    },
                                    expression: "model.email"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "First name",
                                    placeholder: "First name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.firstName,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "firstName", $$v)
                                    },
                                    expression: "model.firstName"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Last name",
                                    placeholder: "Last name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.lastName,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "lastName", $$v)
                                    },
                                    expression: "model.lastName"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("Contact information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Address",
                                    placeholder: "Home Address",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "address", $$v)
                                    },
                                    expression: "model.address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "City",
                                    placeholder: "City",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "city", $$v)
                                    },
                                    expression: "model.city"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Country",
                                    placeholder: "Country",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.country,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "country", $$v)
                                    },
                                    expression: "model.country"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Postal code",
                                    placeholder: "Postal code",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.zipCode,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "zipCode", $$v)
                                    },
                                    expression: "model.zipCode"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("About me")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "base-input",
                                {
                                  attrs: { alternative: "", label: "About Me" }
                                },
                                [
                                  _c(
                                    "textarea",
                                    {
                                      staticClass:
                                        "form-control form-control-alternative",
                                      attrs: {
                                        rows: "4",
                                        placeholder: "A few words about you ..."
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-3 order-lg-2" }, [
        _c("div", { staticClass: "card-profile-image" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: { src: "img/theme/team-4-800x800.jpg" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pt-0 pt-md-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c(
            "div",
            {
              staticClass:
                "card-profile-stats d-flex justify-content-center mt-md-5"
            },
            [
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("22")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Friends")])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("10")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Photos")])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("89")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Comments")])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c("h3", [
          _vm._v("\n                                Jessica Jones"),
          _c("span", { staticClass: "font-weight-light" }, [_vm._v(", 27")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "h5 font-weight-300" }, [
          _c("i", { staticClass: "ni location_pin mr-2" }),
          _vm._v("Bucharest, Romania\n                            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "h5 mt-4" }, [
          _c("i", { staticClass: "ni business_briefcase-24 mr-2" }),
          _vm._v(
            "Solution Manager - Creative Tim Officer\n                            "
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "ni education_hat mr-2" }),
          _vm._v("University of Computer Science\n                            ")
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "my-4" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music."
          )
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("Show more")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Maps.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Maps.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maps_vue_vue_type_template_id_12687a94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps.vue?vue&type=template&id=12687a94& */ "./resources/js/views/Maps.vue?vue&type=template&id=12687a94&");
/* harmony import */ var _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps.vue?vue&type=script&lang=js& */ "./resources/js/views/Maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maps_vue_vue_type_template_id_12687a94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Maps_vue_vue_type_template_id_12687a94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Maps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Maps.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Maps.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Maps.vue?vue&type=template&id=12687a94&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Maps.vue?vue&type=template&id=12687a94& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_12687a94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=template&id=12687a94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Maps.vue?vue&type=template&id=12687a94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_12687a94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_12687a94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Tables.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tables_vue_vue_type_template_id_5ddc3dc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables.vue?vue&type=template&id=5ddc3dc4& */ "./resources/js/views/Tables.vue?vue&type=template&id=5ddc3dc4&");
/* harmony import */ var _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables.vue?vue&type=script&lang=js& */ "./resources/js/views/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tables_vue_vue_type_template_id_5ddc3dc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tables_vue_vue_type_template_id_5ddc3dc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tables.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Tables.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tables.vue?vue&type=template&id=5ddc3dc4&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Tables.vue?vue&type=template&id=5ddc3dc4& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_5ddc3dc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=template&id=5ddc3dc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables.vue?vue&type=template&id=5ddc3dc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_5ddc3dc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_5ddc3dc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/ProjectsTable.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Tables/ProjectsTable.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectsTable_vue_vue_type_template_id_791599c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsTable.vue?vue&type=template&id=791599c9& */ "./resources/js/views/Tables/ProjectsTable.vue?vue&type=template&id=791599c9&");
/* harmony import */ var _ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectsTable_vue_vue_type_template_id_791599c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectsTable_vue_vue_type_template_id_791599c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tables/ProjectsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Tables/ProjectsTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tables/ProjectsTable.vue?vue&type=template&id=791599c9&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Tables/ProjectsTable.vue?vue&type=template&id=791599c9& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_template_id_791599c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectsTable.vue?vue&type=template&id=791599c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/ProjectsTable.vue?vue&type=template&id=791599c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_template_id_791599c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_template_id_791599c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/UserProfile.vue":
/*!********************************************!*\
  !*** ./resources/js/views/UserProfile.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=19ecac0f& */ "./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=19ecac0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);