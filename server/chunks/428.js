"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/layouts/Footer/style.ts

const BaseFooter = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__BaseFooter",
  componentId: "sc-1xocpwo-0"
})(["height:100px;margin-top:auto;background-color:palegreen;"]);
const Contents = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__Contents",
  componentId: "sc-1xocpwo-1"
})(["display:flex;width:96%;max-width:1100px;height:100%;margin:0 auto;align-items:center;justify-content:space-between;"]);
const Title = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__Title",
  componentId: "sc-1xocpwo-2"
})(["font-weight:600;font-size:20px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/layouts/Footer/index.tsx


function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx(BaseFooter, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Contents, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "Jae 8259 blog"
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/layouts/Header/style.ts

const BaseHeader = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__BaseHeader",
  componentId: "sc-r5ljci-0"
})(["position:fixed;left:0;top:0;width:100%;height:80px;background-color:purple;"]);
const style_Contents = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__Contents",
  componentId: "sc-r5ljci-1"
})(["display:flex;width:96%;max-width:1100px;height:100%;margin:0 auto;align-items:center;justify-content:space-between;"]);
const Navigation = /*#__PURE__*/external_styled_components_default().nav.withConfig({
  displayName: "style__Navigation",
  componentId: "sc-r5ljci-2"
})(["ul{display:flex;list-style:none;li + li{margin-left:30px;}}"]);
;// CONCATENATED MODULE: ./src/components/layouts/Header/index.tsx



function Header() {
  return /*#__PURE__*/jsx_runtime_.jsx(BaseHeader, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(style_Contents, {
        children: "\uB85C\uACE0 \uC790\uB9AC"
      }), /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "\uBA54\uB274 1"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "\uBA54\uB274 2"
          })]
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/layouts/Layout/style.ts

const BaseLayout = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__BaseLayout",
  componentId: "sc-1cdc21h-0"
})(["padding-top:80px;"]);
const Main = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "style__Main",
  componentId: "sc-1cdc21h-1"
})(["min-height:calc(100vh-180px);"]);
;// CONCATENATED MODULE: ./src/components/layouts/Layout/index.tsx






const Layout = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BaseLayout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Main, {
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

/***/ })

};
;