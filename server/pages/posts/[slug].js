"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 4114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9458);
/* harmony import */ var _shared_mappers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1461);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const getServerSideProps = async ({
  params
}) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_shared_mappers__WEBPACK_IMPORTED_MODULE_1__/* .mapApiUrl */ .z)(_shared_constants__WEBPACK_IMPORTED_MODULE_0__/* .PATH.posts */ .m.posts, params.slug));
    const post = response.data;
    return {
      props: {
        post
      }
    };
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_3__["default"].isAxiosError(error)) {
      return {
        redirect: {
          destination: _shared_constants__WEBPACK_IMPORTED_MODULE_0__/* .PATH.posts */ .m.posts,
          permanent: false
        }
      };
    }
  }
};
function Post({
  post
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: post && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DarkMode, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__/* .ReactMarkdown */ .D, {
        children: post.body
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ API_BASE_PATH),
/* harmony export */   "m": () => (/* binding */ PATH)
/* harmony export */ });
const PATH = {
  home: "/",
  posts: "/posts"
};
const API_BASE_PATH = "http://localhost:8000";

/***/ }),

/***/ 1461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ mapApiUrl)
/* harmony export */ });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9458);

function mapApiUrl(...paths) {
  return paths.reduce((acc, curr) => {
    return acc + "/" + curr;
  }, _shared_constants__WEBPACK_IMPORTED_MODULE_0__/* .API_BASE_PATH */ .L) + "/";
}

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4566:
/***/ ((module) => {

module.exports = require("style-to-object");

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4955:
/***/ ((module) => {

module.exports = import("comma-separated-tokens");;

/***/ }),

/***/ 9492:
/***/ ((module) => {

module.exports = import("hast-util-whitespace");;

/***/ }),

/***/ 6861:
/***/ ((module) => {

module.exports = import("property-information");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 1152:
/***/ ((module) => {

module.exports = import("space-separated-tokens");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 6107:
/***/ ((module) => {

module.exports = import("vfile");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [433], () => (__webpack_exec__(4114)));
module.exports = __webpack_exports__;

})();