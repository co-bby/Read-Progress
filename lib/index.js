"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ReadProgress: () => ReadProgress_default
});
module.exports = __toCommonJS(src_exports);

// src/ReadProgress.tsx
var import_react = __toESM(require("react"));
var ProgressBar = ({ color = "#FF0000", height = 4, scrollOffset = 0, zIndex = "999" }) => {
  const [scrollProgress, setScrollProgress] = (0, import_react.useState)(scrollOffset);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const progress = windowScrollTop / totalScrollHeight * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      style: {
        height: `${height}px`,
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: `${zIndex}`
      }
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        style: {
          backgroundColor: `${color}`,
          height: "100%",
          width: `${scrollProgress}%`
        }
      }
    )
  );
};
var ReadProgress_default = ProgressBar;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReadProgress
});
