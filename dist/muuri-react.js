/**
* Muuri-react v4.0.0
* https://paol-imi.github.io/muuri-react
* Copyright (c) 2020-present, Paol-imi
* Released under the MIT license
* https://github.com/Paol-imi/muuri-react/blob/master/LICENSE
* @license MIT
*/
"use strict";
var MuuriReact = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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

  // node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element2 = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element2;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is2(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is2(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    AutoScroller: () => AutoScroller,
    ChildrenController: () => ChildrenController,
    EventController: () => EventController,
    FiberController: () => FiberController,
    FlagProp: () => FlagProp,
    GridComponent: () => GridComponent,
    GridContext: () => GridContext,
    GridProvider: () => GridProvider,
    ItemAddController: () => ItemAddController,
    ItemComponent: () => ItemComponent,
    ItemContext: () => ItemContext,
    ItemDrag: () => ItemDrag,
    ItemProvider: () => ItemProvider,
    ItemRefController: () => ItemRefController,
    ItemRemoveController: () => ItemRemoveController,
    LayoutController: () => LayoutController,
    MuuriComponent: () => MuuriComponent,
    MuuriMap: () => MuuriMap,
    getHandler: () => getHandler,
    getIndicesToAdd: () => getIndicesToAdd,
    getResponsiveStyle: () => getResponsiveStyle,
    getStaticStyle: () => getStaticStyle,
    muuriMap: () => muuriMap,
    useData: () => useData,
    useDrag: () => useDrag,
    useDraggable: () => useDraggable,
    useGrid: () => useGrid,
    useGridContext: () => useGridContext,
    useItemContext: () => useItemContext,
    useRefresh: () => useRefresh,
    useShow: () => useShow,
    useVisibility: () => useVisibility,
    withHooks: () => withHooks
  });
  var import_muuri7 = __toESM(__require("muuri"));

  // src/prototype.ts
  var import_muuri = __toESM(__require("muuri"));

  // src/utils/decorators/decorationKey.ts
  var decorationKey_default = "_component";

  // src/utils/decorators/isDecorated.ts
  function isDecorated(instance) {
    return !!instance[decorationKey_default];
  }

  // src/utils/decorators/addDecoration.ts
  function addDecoration(instance, decoration) {
    if (isDecorated(instance)) {
      Object.assign(instance[decorationKey_default], decoration);
    } else {
      instance[decorationKey_default] = __spreadValues({}, decoration);
    }
  }

  // src/utils/decorators/getDecoration.ts
  function getDecoration(instance) {
    return instance[decorationKey_default];
  }

  // src/utils/decorators/removeDecorations.ts
  function removeDecorations(decorated) {
    decorated._component = null;
  }

  // src/prototype.ts
  import_muuri.default.prototype.getId = function getId() {
    return getDecoration(this).id;
  };
  import_muuri.default.prototype.getGroupIds = function getGroupIds() {
    return getDecoration(this).groupIds;
  };
  import_muuri.default.prototype.getSizerElement = function getSizerElement() {
    return getDecoration(this).sizerElement;
  };
  import_muuri.default.Item.prototype.getKey = function getKey() {
    return getDecoration(this).key;
  };
  import_muuri.default.Item.prototype.getProps = function getProps() {
    return getDecoration(this).props;
  };
  import_muuri.default.Item.prototype.getData = function getData() {
    return getDecoration(this).data;
  };
  import_muuri.default.Item.prototype.setData = function setData(data) {
    getDecoration(this).data = data;
  };

  // src/components/gridComponent.tsx
  var import_react12 = __toESM(__require("react"));
  var import_prop_types2 = __toESM(require_prop_types());

  // src/components/itemComponent.tsx
  var import_react11 = __toESM(__require("react"));
  var import_prop_types = __toESM(require_prop_types());
  var import_muuri2 = __toESM(__require("muuri"));

  // src/contexts/gridContext.ts
  var import_react = __require("react");
  var GridContext = (0, import_react.createContext)({});
  var GridProvider = GridContext.Provider;
  var useGridContext = () => (0, import_react.useContext)(GridContext);
  GridContext.displayName = "GridProvider";

  // src/contexts/itemContext.ts
  var import_react2 = __require("react");
  var ItemContext = (0, import_react2.createContext)({});
  var ItemProvider = ItemContext.Provider;
  var useItemContext = () => (0, import_react2.useContext)(ItemContext);
  ItemContext.displayName = "ItemProvider";

  // src/controllers/eventController.ts
  var EventController = class {
    constructor() {
      /** Map of <event, callback> */
      this._eventsMap = /* @__PURE__ */ new Map();
      /** Map of <event, payload> */
      this._payloadsMap = /* @__PURE__ */ new Map();
    }
    /**
     * Enable an event, it can be emitted.
     *
     * @param event - The event name.
     * @param emitter - The callback.
     */
    enableEvent(event, emitter) {
      this._eventsMap.set(event, emitter);
    }
    /**
     * Set an event payload and emit it the event.
     *
     * @param event - The event name.
     * @param payload - The payload.
     */
    emitEvent(event, payload) {
      if (this.isEnabled(event)) {
        this._payloadsMap.set(event, payload);
        this._eventsMap.get(event)();
      }
    }
    /**
     * Get the payload of the event.
     *
     * @param event - The event.
     * @returns - The payload.
     */
    getPayload(event) {
      return this._payloadsMap.get(event);
    }
    /**
     * Returns if at least an event is enabled.
     *
     * @param event - The event.
     * @returns - If at least an event is enabled.
     */
    isEnabled(event) {
      return this._eventsMap.has(event);
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this._eventsMap.clear();
      this._payloadsMap.clear();
    }
  };

  // src/controllers/itemAddController.ts
  var ItemAddController = class {
    constructor() {
      /** The ItemComponents requests. */
      this._requests = [];
    }
    /**
     * Clear the requests.
     */
    useInit() {
      this._requests = [];
    }
    /**
     * Emit the new items to the
     * components that made a request.
     *
     * @param items - The items.
     */
    emit(items) {
      for (let i = 0; i < this._requests.length; i++) {
        this._requests[i](items[i]);
      }
    }
    /**
     * Request an item.
     *
     * @param cb - The callback.
     */
    requestItem(cb) {
      this._requests.push(cb);
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this._requests = [];
    }
  };

  // src/invariant.ts
  var isProduction = false;
  var prefix = "Invariant failed";
  var Invariant = class extends Error {
    constructor(message) {
      super(message);
      this.name = "Invariant";
    }
  };
  function invariant(condition, message) {
    if (condition) {
      return;
    }
    if (isProduction) {
      throw new Invariant(prefix);
    } else {
      throw new Invariant(`${prefix}: ${message || ""}`);
    }
  }

  // src/controllers/itemRefController.ts
  var ItemRefController = class {
    constructor() {
      /** The item. */
      this._item = null;
      /** The temporary instance to hold the item's data. */
      this._instance = {};
    }
    /**
     * Set a decoration in the item.
     *
     * @param key - The decoration key.
     * @param value - The decoration.
     */
    set(key, value) {
      if (this._item) {
        addDecoration(this._item, { [key]: value });
      } else {
        this._instance[key] = value;
      }
    }
    /**
     * Get a decoration value from the item.
     *
     * @param key - The decoration key.
     * @returns - The decoration value.
     */
    get(key) {
      if (this._item) {
        return getDecoration(this._item)[key];
      } else {
        return this._instance[key];
      }
    }
    /**
     * Remove all the decorations from the item.
     */
    delete() {
      if (this._item) removeDecorations(this._item);
    }
    /**
     * Set the item in the controller.
     *
     * @param item - The item.
     */
    setItem(item) {
      this._item = item;
      addDecoration(this._item, this._instance);
      this._instance = {};
    }
    /**
     * Item getter.
     *
     * @returns - The item.
     */
    getItem() {
      invariant(this._item !== null, "The item has not been setted yet");
      return this._item;
    }
    /**
     * Returns if the item has been setted.
     *
     * @returns - If the item has been setted.
     */
    hasItem() {
      return this._item !== null;
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this._item = null;
      this._instance = {};
    }
  };

  // src/controllers/itemRemoveController.ts
  var ItemRemoveController = class {
    constructor() {
      /** The items to remove. */
      this._itemsToRemove = [];
    }
    /**
     * Initialize.
     */
    useInit() {
      this._itemsToRemove = [];
    }
    /**
     * Request an item to be removed.
     *
     * @param item - The item to be removed.
     */
    removeItem(item) {
      this._itemsToRemove.push(item);
    }
    /**
     * Return all the items to remove.
     */
    getItemsToRemove() {
      return this._itemsToRemove;
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this._itemsToRemove = [];
    }
  };

  // src/controllers/layoutController.ts
  var import_react3 = __require("react");
  var LayoutController = class {
    /** Constructor. */
    constructor() {
      this._itemsToRefresh = [];
      this._itemsToShow = [];
      this._itemsToHide = [];
      this._isRendering = false;
    }
    /**
     * Init.
     */
    useInit() {
      this._itemsToRefresh = [];
      this._itemsToShow = [];
      this._itemsToHide = [];
      this._isRendering = true;
      (0, import_react3.useEffect)(() => {
        this._isRendering = false;
      });
    }
    /**
     * Refresh an item.
     *
     * @param item - The item to refresh.
     */
    refreshItem(item) {
      if (this._isRendering) {
        this._itemsToRefresh.push(item);
      } else {
        const grid = item.getGrid();
        grid.refreshItems([item]);
        grid.layout();
      }
    }
    /**
     * Set an item visibility.
     *
     * @param item - The item.
     * @param visible - The visibility.
     * @param instant - If the visibility change should happen without animations.
     */
    setItemVisibility(item, visible, instant) {
      if (this._isRendering) {
        if (visible) this._itemsToShow.push(item);
        else this._itemsToHide.push(item);
      } else {
        const grid = item.getGrid();
        if (visible) grid.show([item], { instant });
        else grid.hide([item], { instant });
      }
    }
    /**
     * Get the items that have to be refreshed.
     *
     * @returns - The items.
     */
    getItemsToRefresh() {
      return this._itemsToRefresh;
    }
    /**
     * Get the items that have to be shown.
     *
     * @returns - The items.
     */
    getItemsToShow() {
      return this._itemsToShow;
    }
    /**
     * Get the items that have to be hidden.
     *
     * @returns - The items.
     */
    getItemsToHide() {
      return this._itemsToHide;
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this._itemsToRefresh = [];
      this._itemsToShow = [];
      this._itemsToHide = [];
    }
  };

  // src/controllers/fiberController.ts
  var import_react4 = __require("react");
  var FiberController = class {
    constructor() {
      /** The current flag value. */
      this._flag = "0";
    }
    /**
     * Init the controller given the grid Element ref.
     *
     * @param gridElementRef - the ref of the grid element.
     */
    useInit(gridElementRef) {
      this.updateFlag();
      (0, import_react4.useEffect)(() => {
        invariant(gridElementRef.current !== null);
        this._fiber = getFiber(gridElementRef.current);
      }, []);
    }
    /**
     * Return the DOM elements in the chosen positions.
     *
     * @param orderedIndices - The positions.
     * @returns - The elements.
     */
    getStateNodes(orderedIndices) {
      const stateNodes = [];
      if (orderedIndices.length === 0) return stateNodes;
      let child = getCurrentFiber(this._fiber, this._flag).child;
      orderedIndices.forEach((index) => {
        while (child.index !== index) {
          child = child.sibling;
        }
        stateNodes.push(getStateNode(child));
      });
      return stateNodes;
    }
    /**
     * Append an itemComponent fiber
     * (the same is done for the alternate if exists).
     *
     * @param child - The item.
     */
    append(itemComponentFiber) {
      const fiber = getCurrentFiber(this._fiber, this._flag);
      appendFiber(fiber, itemComponentFiber);
      if (fiber.alternate) {
        if (itemComponentFiber.alternate) {
          appendFiber(fiber.alternate, itemComponentFiber.alternate);
        }
      }
    }
    /**
     * Remove an itemComponent fiber given the key of its Item
     * (The same is done for the alternate if exists).
     *
     * @param key - The key of the item.
     * @returns - The removed item.
     */
    remove(key) {
      const fiber = getCurrentFiber(this._fiber, this._flag);
      const removedChild = removeChild(fiber, key);
      if (fiber.alternate) {
        if (removedChild.alternate) {
          removeChild(fiber.alternate, key);
        }
      }
      return removedChild;
    }
    /**
     * Return the props containing the flag value to add in the grid element.
     *
     * @returns - The props.
     */
    getFlagProp() {
      return { [FlagProp]: this._flag };
    }
    /**
     * Update the flag value.
     */
    updateFlag() {
      if (this._flag === "0") this._flag = "1";
      else this._flag = "0";
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this._fiber = null;
    }
  };
  var FlagProp = "muuri-react-flag";
  function getFiber(grid) {
    const key = Object.keys(grid).find(
      (key2) => key2.startsWith("__reactInternalInstance$") || key2.startsWith("__reactFiber$")
    );
    invariant(
      typeof key === "string",
      "Cannot find the __reactInternalInstance$"
    );
    return grid[key];
  }
  function getCurrentFiber(fiber, currentFlag) {
    if (!fiber.alternate) return fiber;
    const fiberFlag = fiber.memoizedProps[FlagProp];
    const alternateFlag = fiber.alternate.memoizedProps[FlagProp];
    if (fiberFlag === alternateFlag) {
      let topFiber = fiber;
      while (topFiber.return) {
        topFiber = topFiber.return;
      }
      const rootFiber = topFiber.stateNode;
      const topCurrentFiber = rootFiber.current;
      return topCurrentFiber === topFiber ? fiber : fiber.alternate;
    }
    return fiberFlag === currentFlag ? fiber : fiber.alternate;
  }
  function getStateNode(itemComponentFiber) {
    let itemFiber = itemComponentFiber.child.child;
    while (!(itemFiber.stateNode instanceof HTMLElement))
      itemFiber = itemFiber.child;
    return itemFiber.stateNode;
  }
  function appendFiber(parent, child) {
    var _a;
    if (!parent.child) {
      parent.child = child;
      child.index = 0;
    } else {
      let c = parent.child;
      while (c.sibling) {
        c = c.sibling;
      }
      child.index = c.index + 1;
      c.sibling = child;
    }
    child.return = parent;
    if (child._debugOwner) child._debugOwner = (_a = parent.return) == null ? void 0 : _a.return;
  }
  function removeChild(parent, key) {
    let child = parent.child;
    let removedChild;
    if (hasNot(child, key)) {
      while (hasNot(child.sibling, key)) {
        child = child.sibling;
      }
      removedChild = removeSibling(child);
      adjustIndices(child);
    } else {
      removedChild = removeFirstChild(parent);
      child = child.sibling;
      if (child) adjustIndices(child);
    }
    removedChild.sibling = null;
    return removedChild;
  }
  function removeFirstChild(gridElementFiber) {
    const removed = gridElementFiber.child;
    gridElementFiber.child = gridElementFiber.child.sibling;
    return removed;
  }
  function removeSibling(fiber) {
    const removed = fiber.sibling;
    fiber.sibling = fiber.sibling.sibling;
    return removed;
  }
  function adjustIndices(itemComponentFiber) {
    while (itemComponentFiber.sibling) {
      itemComponentFiber.sibling.index = itemComponentFiber.index + 1;
      itemComponentFiber = itemComponentFiber.sibling;
    }
  }
  function hasNot(itemComponentFiber, key) {
    return itemComponentFiber.child.child.key !== key;
  }

  // src/controllers/childrenController.ts
  var import_react5 = __require("react");
  var ChildrenController = class {
    constructor() {
      /** The old children. */
      this._oldChildrenArray = [];
      /** The current children. */
      this._children = [];
      /** The indices of the last added children. */
      this._indicesToAdd = [];
      /** The number of the items being dragged. */
      this._dragCounter = 0;
    }
    /**
     * Init all the settings given the new children.
     *
     * @param newChildren - the new children.
     */
    useInit(newChildren) {
      const newChildrenArray = import_react5.Children.toArray(newChildren);
      this._indicesToAdd = getIndicesToAdd(
        newChildrenArray,
        this._oldChildrenArray
      );
      this._children = newChildren || [];
      this._oldChildrenArray = newChildrenArray;
    }
    /**
     * Remove a child in the given position and return it.
     *
     * @param index - The index of the child to remove.
     * @returns - The removed child.
     */
    remove(index) {
      return this._oldChildrenArray.splice(index, 1)[0];
    }
    /**
     * Append a child in the children array.
     *
     * @param child - The child to append.
     */
    append(child) {
      this._oldChildrenArray.push(child);
    }
    /**
     * Returns the ordered array of indices of the added children.
     */
    getIndicesToAdd() {
      return this._indicesToAdd;
    }
    /**
     * Map all the children.
     *
     * @param cb - The callback.
     * @returns - The mapped children.
     */
    render(cb) {
      const children = import_react5.Children.map(this._children, (child) => {
        return cb(child, child.key);
      });
      this.flush();
      return children;
    }
    /**
     * Increment the drag counter.
     */
    incrementDragCounter() {
      this._dragCounter += 1;
    }
    /**
     * Decrement the drag counter.
     */
    decrementDragCounter() {
      this._dragCounter -= 1;
    }
    /**
     * Remove the current children so they can be garbage collected.
     */
    flush() {
      this._children = [];
    }
    /**
     * Destroy the instance.
     */
    destroy() {
      this.flush();
    }
  };
  function getIndicesToAdd(newChildren, oldChildren) {
    const indicesToAdd = [];
    let oIndex = 0;
    for (let nIndex = 0; nIndex < newChildren.length; nIndex++) {
      const index = findIndex(oldChildren, newChildren[nIndex], oIndex);
      if (index === -1) {
        indicesToAdd.push(nIndex);
      } else {
        oIndex = index;
      }
    }
    return indicesToAdd;
  }
  function findIndex(children, child, fromIndex) {
    fromIndex = fromIndex > children.length ? children.length : fromIndex;
    for (let index = fromIndex; index < children.length; index++) {
      if (is(child, children[index])) return index;
    }
    for (let index = 0; index < fromIndex; index++) {
      if (is(child, children[index])) return index;
    }
    return -1;
  }
  function is(componentA, componentB) {
    return componentA.key === componentB.key;
  }

  // src/utils/fillers/fillGrid.ts
  function fillGrid(grid) {
    const sizerElement = document.createElement("div");
    sizerElement.style.visibility = "hidden";
    sizerElement.style.position = "absolute";
    sizerElement.classList.add("grid-sizer");
    addDecoration(grid, { sizerElement });
    const gridElement = grid.getElement();
    if (gridElement.children.length === 0) {
      gridElement.appendChild(sizerElement);
    } else {
      gridElement.insertBefore(sizerElement, gridElement.children[0]);
    }
  }

  // src/utils/fillers/fillGridElement.ts
  var positions = ["relative", "absolute", "fixed"];
  function fillGridElement(gridElement, gridClass) {
    const position = getComputedStyle(gridElement).position;
    if (!positions.includes(position)) {
      gridElement.style.position = positions[0];
    }
    gridElement.classList.add(gridClass);
    const defaultSetAttribute = gridElement.setAttribute.bind(gridElement);
    gridElement.setAttribute = function setAttribute(attribute, value) {
      if (attribute === "class") {
        const classNames = (gridElement.getAttribute("class") || "").split(" ");
        if (!classNames.includes(gridClass)) value = `${value} ${gridClass}`;
      }
      defaultSetAttribute(attribute, value);
    };
  }

  // src/utils/fillers/fillItem.ts
  function fillItem(item) {
    addDecoration(item, { props: {}, data: {} });
    Object.defineProperty(item, "_sortData", {
      get() {
        return this.getData();
      },
      set() {
      }
    });
  }

  // src/utils/fillers/fillItemElement.ts
  function fillItemElement(itemElement, itemClasses) {
    itemElement.style.position = "absolute";
    const defaultSetAttribute = itemElement.setAttribute.bind(itemElement);
    itemElement.setAttribute = function setAttribute(attribute, value) {
      if (attribute === "class") {
        const classNames = (itemElement.getAttribute("class") || "").split(" ");
        const classNamesToAdd = classNames.filter(
          (className) => itemClasses.includes(className)
        );
        value = `${value} ${classNamesToAdd.join(" ")}`;
      }
      defaultSetAttribute(attribute, value);
    };
  }

  // src/utils/hooks/useFunction.ts
  var import_react6 = __require("react");
  function useFunction(callback) {
    return (0, import_react6.useRef)(callback).current;
  }

  // src/utils/hooks/useInstantEffect.ts
  var import_react8 = __require("react");

  // src/utils/hooks/useReference.ts
  var import_react7 = __require("react");
  function useReference(dependencyList) {
    const ref = (0, import_react7.useRef)(dependencyList);
    if (ref.current === dependencyList) return true;
    const didUpdate = compare(ref.current, dependencyList);
    ref.current = dependencyList;
    return didUpdate;
  }
  function compare(a, b) {
    if (a.length !== b.length) return true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return true;
    }
    return false;
  }

  // src/utils/hooks/useInstantEffect.ts
  function useInstantEffect(didUpdate, deps) {
    const needUpdate = useReference(deps);
    const cleanUpRef = (0, import_react8.useRef)();
    if (needUpdate) {
      if (cleanUpRef.current) cleanUpRef.current();
      cleanUpRef.current = didUpdate();
    }
    (0, import_react8.useEffect)(() => {
      return () => {
        if (cleanUpRef.current) cleanUpRef.current();
      };
    }, []);
  }

  // src/utils/hooks/useMemoized.ts
  var import_react9 = __require("react");
  function useMemoized(factory) {
    const valueRef = (0, import_react9.useRef)();
    if (!valueRef.current) {
      valueRef.current = factory();
    }
    return valueRef.current;
  }

  // src/utils/hooks/useRerender.ts
  var import_react10 = __require("react");
  function useRerender() {
    const setState = (0, import_react10.useState)()[1];
    return useFunction(() => {
      setState(/* @__PURE__ */ Object.create(null));
    });
  }

  // src/components/itemComponent.tsx
  function ItemComponent({
    children: child,
    itemClasses,
    itemAddController,
    itemRemoveController,
    propsToData,
    itemKey,
    grid
  }) {
    const store = useMemoized(() => {
      const eventController = new EventController();
      const itemRefController = new ItemRefController();
      itemRefController.set("key", itemKey);
      itemRefController.set("eventController", eventController);
      return { eventController, itemRefController, itemRemoveController, grid };
    });
    store.itemRefController.set("props", child.props);
    store.itemRemoveController = itemRemoveController;
    store.grid = grid;
    if (propsToData) {
      const data = propsToData(child.props);
      invariant(
        typeof data === "object",
        `The data returned by 'propsToData' must be an object, founded ${typeof data}`
      );
      store.itemRefController.set("data", data);
    }
    (0, import_react11.useEffect)(() => {
      itemAddController.requestItem((item) => {
        fillItem(item);
        fillItemElement(item.getElement(), itemClasses);
        store.itemRefController.setItem(item);
      });
      return () => {
        const item = store.itemRefController.getItem();
        invariant(item !== null);
        const element = item.getElement();
        invariant(element !== void 0);
        if (item.isDragging()) {
          element.style.display = "none";
          element.style.visibility = "hidden";
          if (item._drag) item._drag.destroy();
          store.grid.getElement().appendChild(element);
        }
        store.itemRefController.delete();
        store.itemRemoveController.removeItem(item);
        store.itemRefController.destroy();
        store.eventController.destroy();
      };
    }, []);
    return /* @__PURE__ */ import_react11.default.createElement(ItemProvider, { value: store }, child);
  }
  ItemComponent.propTypes = {
    itemAddController: import_prop_types.default.object.isRequired,
    itemClasses: import_prop_types.default.arrayOf(import_prop_types.default.string.isRequired).isRequired,
    propsToData: import_prop_types.default.func,
    children: import_prop_types.default.element.isRequired,
    grid: import_prop_types.default.instanceOf(import_muuri2.default).isRequired
  };
  ItemComponent.displayName = "ItemComponent";

  // src/utils/grid/addItems.ts
  function addItems(grid, addedDOMItems, indicesToAdd, addOptions, filter) {
    for (let i = 0; i < addedDOMItems.length; i++) {
      grid.add(addedDOMItems[i], { index: indicesToAdd[i], layout: false });
    }
    if (!filter && (addOptions == null ? void 0 : addOptions.show)) {
      grid.show(grid.getItems(indicesToAdd), { layout: false });
    }
  }

  // src/utils/grid/filterItems.ts
  function filterItems(grid, predicate) {
    grid.filter((item) => predicate(item.getData(), item), { layout: false });
  }

  // src/utils/grid/getGridClass.ts
  var gridClassName = "containerClass";
  function getGridClass(grid) {
    return grid._settings[gridClassName];
  }

  // src/utils/grid/getItemClasses.ts
  var itemClassNames = [
    "itemClass",
    "itemVisibleClass",
    "itemHiddenClass",
    "itemPositioningClass",
    "itemDraggingClass",
    "itemReleasingClass",
    "itemPlaceholderClass"
  ];
  function getItemClasses(grid) {
    return itemClassNames.map((className) => grid._settings[className]);
  }

  // src/utils/grid/hideItems.ts
  function hideItems(grid, items) {
    grid.hide(items, { layout: false });
  }

  // src/utils/grid/removeItems.ts
  function removeItems(grid, itemsToRemove) {
    grid.remove(itemsToRemove, { layout: false, removeElements: false });
  }

  // src/utils/grid/showItems.ts
  function showItems(grid, items) {
    grid.show(items, { layout: false });
  }

  // src/utils/grid/sortItems.ts
  function sortItems(grid, predicate, sortOptions) {
    sortOptions = __spreadProps(__spreadValues({}, sortOptions || {}), { layout: false });
    if (typeof predicate === "function") {
      handleFunction(grid, predicate, sortOptions);
    }
    if (typeof predicate === "string") {
      handleString(grid, predicate, sortOptions);
    }
    if (Array.isArray(predicate)) {
      handleArray(grid, predicate, sortOptions);
    }
  }
  function handleFunction(grid, predicate, sortOptions) {
    grid.sort(
      (itemA, itemB) => predicate(itemA.getData(), itemB.getData(), itemA, itemB),
      sortOptions
    );
  }
  function handleString(grid, predicate, sortOptions) {
    grid.sort(predicate, sortOptions);
  }
  function handleArray(grid, predicate, sortOptions) {
    const items = grid.getItems();
    const sortedItems = [];
    const otherItems = [];
    items.forEach((item) => {
      const itemKey = item._component.key;
      const index = predicate.findIndex((key) => key === itemKey);
      if (index > -1) {
        sortedItems[index] = item;
      } else {
        otherItems.push(item);
      }
    });
    grid.sort(
      Array.prototype.concat(
        // Some position can be empty.
        sortedItems.filter((item) => !!item),
        otherItems
      ),
      sortOptions
    );
  }

  // src/components/gridComponent.tsx
  function GridComponent({
    children,
    gridProps,
    grid,
    filter,
    sort,
    sortOptions,
    addOptions,
    propsToData,
    onSend,
    onDragStart,
    onDragEnd,
    onFilter,
    onSort,
    onMount,
    onUnmount,
    forceSync,
    dragFixed,
    dragEnabled,
    instantLayout
  }) {
    const store = useMemoized(() => ({
      // Grid and items data.
      gridRef: (
        /*      */
        (0, import_react12.createRef)()
      ),
      gridClass: (
        /*    */
        getGridClass(grid)
      ),
      itemClasses: (
        /*  */
        getItemClasses(grid)
      ),
      // Controllers.
      childrenController: (
        /*    */
        new ChildrenController()
      ),
      fiberController: (
        /*       */
        new FiberController()
      ),
      itemAddController: (
        /*     */
        new ItemAddController()
      ),
      itemRemoveController: (
        /*  */
        new ItemRemoveController()
      ),
      layoutController: (
        /*      */
        new LayoutController()
      ),
      // Events.
      onUnmount,
      onDragStart,
      onDragEnd,
      onFilter,
      onSort,
      onSend
    }));
    const vars = {
      // Items data.
      indicesToAdd: (
        /*   */
        []
      ),
      addedDOMItems: (
        /*  */
        []
      ),
      itemsToRemove: (
        /*  */
        []
      ),
      itemsToRefresh: (
        /* */
        []
      ),
      itemsToShow: (
        /*    */
        []
      ),
      itemsToHide: (
        /*    */
        []
      ),
      // Items flags.
      hasAdded: (
        /*      */
        false
      ),
      hasRemoved: (
        /*    */
        false
      ),
      hasFiltered: (
        /*   */
        false
      ),
      hasSorted: (
        /*     */
        false
      ),
      hasRefreshed: (
        /*  */
        false
      ),
      hasShown: (
        /*      */
        false
      ),
      hasHidden: (
        /*     */
        false
      )
    };
    (0, import_react12.useEffect)(() => {
      grid.on("beforeSend", ({ item, fromGrid, fromIndex }) => {
        if (!getDecoration(item).sentPayload) {
          const sentPayload = {
            fromChildrenController: store.childrenController,
            fromFiberController: store.fiberController,
            fromGrid,
            fromIndex
          };
          addDecoration(item, { sentPayload });
        }
      }).on("receive", ({ item, toGrid, toIndex }) => {
        const toChildrenController = store.childrenController;
        const toFiberController = store.fiberController;
        if (item.isDragging()) {
          const receivedPayload = {
            toChildrenController,
            toFiberController,
            toGrid,
            toIndex
          };
          addDecoration(item, { receivedPayload });
        } else {
          const sentPayload = getDecoration(item).sentPayload;
          invariant(sentPayload !== null && typeof sentPayload === "object");
          const { fromChildrenController, fromFiberController } = sentPayload;
          addDecoration(item, { sentPayload: null });
          const itemFiber = fromFiberController.remove(item.getKey());
          const itemComponent = fromChildrenController.remove(itemFiber.index);
          toFiberController.append(itemFiber);
          toChildrenController.append(itemComponent);
        }
        getDecoration(item).eventController.emitEvent("send", grid);
      }).on("dragInit", (item, event) => {
        store.childrenController.incrementDragCounter();
        getDecoration(item).eventController.emitEvent("drag", true);
        if (store.onDragStart) store.onDragStart(item, event);
      }).on("dragEnd", (item) => {
        const sentPayload = getDecoration(item).sentPayload;
        const receivedPayload = getDecoration(item).receivedPayload;
        if (sentPayload && receivedPayload) {
          const {
            fromChildrenController,
            fromFiberController,
            fromGrid,
            fromIndex
          } = sentPayload;
          const {
            toChildrenController,
            toFiberController,
            toGrid,
            toIndex
          } = receivedPayload;
          addDecoration(item, { sentPayload: null, receivedPayload: null });
          if (fromGrid !== toGrid) {
            invariant(
              typeof store.onSend === "function",
              "An item cannot be sent to another MuuriComponent if the 'onSend' property has not been passed to the MuuriComponent."
            );
            const itemFiber = fromFiberController.remove(item.getKey());
            const itemComponent = fromChildrenController.remove(
              itemFiber.index
            );
            toFiberController.append(itemFiber);
            toChildrenController.append(itemComponent);
            store.onSend({
              // The key the user has set.
              key: getDecoration(item).key,
              // From.
              fromGrid,
              fromIndex,
              fromId: getDecoration(fromGrid).id,
              fromGroupIds: getDecoration(fromGrid).groupIds,
              // To.
              toGrid,
              toIndex,
              toId: getDecoration(toGrid).id,
              toGroupIds: getDecoration(toGrid).groupIds
            });
          }
        }
      }).on("dragReleaseEnd", (item) => {
        store.childrenController.decrementDragCounter();
        getDecoration(item).eventController.emitEvent("drag", false);
        if (store.onDragEnd) store.onDragEnd(item);
      }).on("showStart", (items) => {
        if (!isDecorated(items[0])) return;
        items.forEach((item) => {
          const eventController = getDecoration(item).eventController;
          if (eventController.getPayload("show") !== true) {
            eventController.emitEvent("show", true);
          }
        });
      }).on("hideEnd", (items) => {
        items.forEach((item) => {
          const eventController = getDecoration(item).eventController;
          if (eventController.getPayload("show") !== false) {
            eventController.emitEvent("show", false);
          }
        });
      }).on("filter", (shownItems, hiddenItems) => {
        if (store.onFilter) store.onFilter(shownItems, hiddenItems);
      }).on("sort", (currentOrder, previousOrder) => {
        if (store.onSort) store.onSort(currentOrder, previousOrder);
      });
      if (dragFixed) {
        grid.on("dragInit", (item) => {
          const element = item.getElement();
          invariant(element !== void 0);
          const { width, height, paddingTop } = getComputedStyle(element);
          addDecoration(item, {
            dragWidth: element.style.width,
            dragHeight: element.style.height,
            dragPaddingTop: element.style.paddingTop
          });
          element.style.width = width;
          element.style.height = height;
          element.style.paddingTop = paddingTop;
        }).on("dragReleaseEnd", (item) => {
          const element = item.getElement();
          invariant(element !== void 0);
          const { dragWidth, dragHeight, dragPaddingTop } = getDecoration(item);
          element.style.width = dragWidth;
          element.style.height = dragHeight;
          element.style.paddingTop = dragPaddingTop;
        });
      }
      invariant(store.gridRef.current !== null);
      grid._element = store.gridRef.current;
      fillGridElement(store.gridRef.current, store.gridClass);
      fillGrid(grid);
      if (onMount) onMount(grid);
      return () => {
        store.childrenController.destroy();
        store.fiberController.destroy();
        store.itemRemoveController.destroy();
        store.itemAddController.destroy();
        store.layoutController.destroy();
      };
    }, []);
    store.childrenController.useInit(children);
    store.fiberController.useInit(store.gridRef);
    store.itemRemoveController.useInit();
    store.itemAddController.useInit();
    store.layoutController.useInit();
    const isFilterChanged = useReference([filter]);
    const isSortChanged = useReference([sort, sortOptions]);
    (0, import_react12.useEffect)(() => {
      addDecoration(grid, { dragEnabled });
      vars.indicesToAdd = store.childrenController.getIndicesToAdd();
      vars.addedDOMItems = store.fiberController.getStateNodes(vars.indicesToAdd);
      vars.itemsToRemove = store.itemRemoveController.getItemsToRemove();
      vars.itemsToRefresh = store.layoutController.getItemsToRefresh();
      vars.itemsToShow = store.layoutController.getItemsToShow();
      vars.itemsToHide = store.layoutController.getItemsToHide();
      store.onUnmount = onUnmount;
      store.onDragStart = onDragStart;
      store.onDragEnd = onDragEnd;
      store.onFilter = onFilter;
      store.onSort = onSort;
      store.onSend = onSend;
    });
    (0, import_react12.useEffect)(() => {
      if (vars.itemsToRemove.length) {
        removeItems(grid, vars.itemsToRemove);
        vars.hasRemoved = true;
      }
      if (vars.indicesToAdd.length) {
        addItems(grid, vars.addedDOMItems, vars.indicesToAdd, addOptions, filter);
        const addedItems = grid.getItems(vars.indicesToAdd);
        store.itemAddController.emit(addedItems);
        vars.hasAdded = true;
      }
      if (filter && (isFilterChanged || vars.hasAdded || forceSync)) {
        filterItems(grid, filter);
        vars.hasFiltered = true;
      }
      if (sort && (isSortChanged || vars.hasAdded || forceSync)) {
        sortItems(grid, sort, sortOptions);
        vars.hasSorted = true;
      }
      if (!filter && vars.itemsToShow.length) {
        showItems(grid, vars.itemsToShow);
        vars.hasShown = true;
      }
      if (!filter && vars.itemsToHide.length) {
        hideItems(grid, vars.itemsToHide);
        vars.hasHidden = true;
      }
      if (vars.itemsToRefresh.length) {
        grid.refreshItems(vars.itemsToRefresh);
        vars.hasRefreshed = true;
      }
      if (vars.hasAdded || vars.hasRemoved || vars.hasSorted || vars.hasFiltered || vars.hasRefreshed || vars.hasShown || vars.hasHidden) {
        grid.layout(instantLayout);
      }
    });
    const value = useMemoized(() => ({
      layoutController: store.layoutController,
      grid
    }));
    return /* @__PURE__ */ import_react12.default.createElement(GridProvider, { value }, /* @__PURE__ */ import_react12.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, gridProps), {
        ref: store.gridRef
      }), store.fiberController.getFlagProp()),
      store.childrenController.render((child, key) => /* @__PURE__ */ import_react12.default.createElement(
        ItemComponent,
        {
          key,
          itemKey: key,
          grid,
          propsToData,
          itemClasses: store.itemClasses,
          itemAddController: store.itemAddController,
          itemRemoveController: store.itemRemoveController
        },
        child
      ))
    ));
  }
  GridComponent.propTypes = {
    grid: import_prop_types2.default.object.isRequired,
    gridProps: import_prop_types2.default.object,
    filter: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.func]),
    sort: import_prop_types2.default.oneOfType([
      import_prop_types2.default.string,
      import_prop_types2.default.func,
      import_prop_types2.default.arrayOf(import_prop_types2.default.string)
    ]),
    sortOptions: import_prop_types2.default.exact({
      descending: import_prop_types2.default.bool
    }),
    addOptions: import_prop_types2.default.exact({
      show: import_prop_types2.default.bool
    }),
    onSend: import_prop_types2.default.func,
    onDragStart: import_prop_types2.default.func,
    onDragEnd: import_prop_types2.default.func,
    onFilter: import_prop_types2.default.func,
    onSort: import_prop_types2.default.func,
    onMount: import_prop_types2.default.func,
    onUnmount: import_prop_types2.default.func,
    forceSync: import_prop_types2.default.bool,
    dragFixed: import_prop_types2.default.bool,
    dragEnabled: import_prop_types2.default.bool,
    instantLayout: import_prop_types2.default.bool
  };
  GridComponent.defaultProps = {
    gridProps: {},
    addOptions: { show: true },
    sortOptions: { descending: false },
    forceSync: false,
    dragFixed: false,
    dragEnabled: false,
    instantLayout: false
  };
  GridComponent.displayName = "GridComponent";

  // src/components/muuriComponent.tsx
  var import_react13 = __toESM(__require("react"));
  var import_prop_types3 = __toESM(require_prop_types());
  var import_muuri5 = __toESM(__require("muuri"));

  // src/muuri-map.ts
  var MuuriMap = class {
    constructor() {
      /** Map of <id, Muuri instance>. */
      this._idMap = /* @__PURE__ */ new Map();
      /** Map of <id, Muuri instances>. */
      this._groupMap = /* @__PURE__ */ new Map();
    }
    /**
     * Get the grid instance with the chosen id.
     *
     * @param id - The id.
     * @returns - The grid instance.
     */
    get(id) {
      return this._idMap.get(id) || null;
    }
    /**
     * Get all the grid instances in the group of the given id.
     * The reference of the group array never changes.
     *
     * @param groupId - The group id.
     * @returns - The array of grid instances.
     */
    getGroup(groupId) {
      const group = this._groupMap.get(groupId);
      if (!group) {
        const newGroup = [];
        this._groupMap.set(groupId, newGroup);
        return newGroup;
      } else {
        return group;
      }
    }
    /**
     * Get all the grid instances in the map.
     *
     * @returns - The grid instances.
     */
    getAll() {
      return Array.from(this._idMap.values());
    }
    /**
     * Set the grid instance with the given id.
     *
     * @param grid - The grid instance.
     * @param id - The id of the instance.
     * @returns - The muuriMap.
     */
    set(grid, id) {
      this._idMap.set(id, grid);
      return this;
    }
    /**
     * Set the grid instance in the group of the given id.
     *
     * @param grid - The grid instance.
     * @param groupId - The id of the group.
     * @returns - The muuriMap.
     */
    setGroup(grid, groupId) {
      const group = this._groupMap.get(groupId);
      if (group) {
        group.push(grid);
      } else {
        this._groupMap.set(groupId, [grid]);
      }
      return this;
    }
    /**
     * Delete the grid instance with the given id.
     *
     * @param id - The id of the instance.
     * @returns - The muuriMap.
     */
    delete(id) {
      this._idMap.delete(id);
      return this;
    }
    /**
     * Delete the instance from the group with the given id.
     *
     * @param grid - The grid instance.
     * @param groupIds - The group ids of the instance.
     */
    deleteGroup(grid, groupId) {
      const group = this._groupMap.get(groupId);
      if (group) {
        const index = group.indexOf(grid);
        if (index > -1) group.splice(index, 1);
      }
      return this;
    }
    /**
     * Clear the maps.
     */
    clear() {
      this._idMap.clear();
      this._groupMap.clear();
      return this;
    }
  };
  var muuriMap = new MuuriMap();

  // src/utils/muuri/getInstance.ts
  var import_muuri3 = __toESM(__require("muuri"));
  function getInstance(options) {
    const el = document.createElement("div");
    el.style.display = "none";
    document.body.appendChild(el);
    const grid = new import_muuri3.default(el, options);
    document.body.removeChild(el);
    return grid;
  }

  // src/utils/muuri/handleRef.ts
  function handleRef(ref, value) {
    if (!ref) return;
    if (typeof ref === "function") ref(value);
    else if ("current" in ref) ref.current = value;
  }

  // src/utils/muuri/setDragAutoScroll.ts
  function setDragAutoScroll(options) {
    const { dragAutoScroll } = options;
    if (!dragAutoScroll || !Array.isArray(dragAutoScroll.targets)) return;
    dragAutoScroll.targets.forEach((target) => {
      if (isTargetElement(target)) return;
      invariant(
        "element" in target,
        "You must provide an element in each scroll target"
      );
      const element = target.element;
      let ref = {
        current: null
      };
      Object.defineProperty(target, "element", {
        get() {
          return ref.current;
        },
        set(element2) {
          if (isTargetElement(element2)) {
            ref.current = element2;
          } else {
            ref = element2;
          }
        }
      });
      target.element = element;
    });
  }
  function isTargetElement(target) {
    return (
      // A DOM element.
      target instanceof HTMLElement || // The window.
      target instanceof window.constructor
    );
  }

  // src/utils/muuri/setDragContainer.ts
  function setDragContainer(options) {
    const { dragContainer } = options;
    let ref = { current: null };
    Object.defineProperty(options, "dragContainer", {
      get() {
        return ref.current;
      },
      set(value) {
        if (!value || value instanceof Element) {
          ref.current = value;
        } else {
          ref = value;
        }
      }
    });
    options.dragContainer = dragContainer;
  }

  // src/utils/muuri/setDragSort.ts
  function setDragSort(options, globalMap) {
    const { dragSort } = options;
    if (!dragSort || typeof dragSort !== "object") return;
    invariant(
      typeof dragSort.groupId === "string",
      "You must provide a string as groupId"
    );
    const group = globalMap.getGroup(dragSort.groupId);
    options.dragSort = () => group;
  }

  // src/utils/muuri/setDragStartPredicate.ts
  var import_muuri4 = __toESM(__require("muuri"));
  function setDragStartPredicate(options) {
    const { dragStartPredicate } = options;
    const defaultStartPredicate = getDefaultStartPredicate(dragStartPredicate);
    options.dragStartPredicate = (item, event) => {
      if (!getDecoration(item.getGrid()).dragEnabled) return false;
      if (isDecorated(item) && getDecoration(item).draggable === false)
        return false;
      return defaultStartPredicate(item, event);
    };
  }
  function getDefaultStartPredicate(dragStartPredicate) {
    return typeof dragStartPredicate === "function" ? dragStartPredicate : (item, event) => {
      return import_muuri4.default.ItemDrag.defaultStartPredicate(
        item,
        event,
        dragStartPredicate
      );
    };
  }

  // src/components/muuriComponent.tsx
  var MuuriComponent = (0, import_react13.forwardRef)(
    function MuuriComponent2(_a, muuriRef) {
      var _b = _a, {
        children: children,
        id,
        groupIds,
        gridProps,
        filter,
        sort,
        sortOptions,
        addOptions,
        propsToData,
        onSend,
        onDragStart,
        onDragEnd,
        onFilter,
        onSort,
        onMount,
        onUnmount,
        forceSync,
        dragFixed,
        dragEnabled,
        instantLayout
      } = _b, options = __objRest(_b, [
        /* GridComponent props. */
        "children",
        "id",
        "groupIds",
        "gridProps",
        "filter",
        "sort",
        "sortOptions",
        "addOptions",
        "propsToData",
        "onSend",
        "onDragStart",
        "onDragEnd",
        "onFilter",
        "onSort",
        "onMount",
        "onUnmount",
        "forceSync",
        "dragFixed",
        "dragEnabled",
        "instantLayout"
      ]);
      const grid = useMemoized(() => {
        options.items = [];
        options.dragEnabled = dragEnabled !== null;
        setDragContainer(options);
        setDragSort(options, muuriMap);
        setDragAutoScroll(options);
        setDragStartPredicate(options);
        const grid2 = getInstance(options);
        if (id) muuriMap.set(grid2, id);
        addDecoration(grid2, { id });
        handleRef(muuriRef, grid2);
        return grid2;
      });
      (0, import_react13.useEffect)(() => {
        return () => {
          handleRef(muuriRef, null);
          removeDecorations(grid);
          if (id) muuriMap.delete(id);
          grid.destroy();
        };
      }, []);
      useInstantEffect(() => {
        addDecoration(grid, { groupIds });
        if (groupIds) {
          groupIds.forEach((groupId) => {
            muuriMap.setGroup(grid, groupId);
          });
        }
        return () => {
          if (groupIds) {
            groupIds.forEach((groupId) => {
              muuriMap.deleteGroup(grid, groupId);
            });
          }
        };
      }, groupIds || []);
      return /* @__PURE__ */ import_react13.default.createElement(
        GridComponent,
        {
          grid,
          gridProps,
          filter,
          sort,
          sortOptions,
          addOptions,
          propsToData,
          onSend,
          onDragStart,
          onDragEnd,
          onFilter,
          onSort,
          onMount,
          onUnmount,
          forceSync,
          dragFixed,
          dragEnabled,
          instantLayout
        },
        children
      );
    }
  );
  MuuriComponent.propTypes = {
    id: import_prop_types3.default.string,
    groupIds: import_prop_types3.default.arrayOf(import_prop_types3.default.string.isRequired),
    showDuration: import_prop_types3.default.number,
    showEasing: import_prop_types3.default.string,
    hideDuration: import_prop_types3.default.number,
    hideEasing: import_prop_types3.default.string,
    visibleStyles: import_prop_types3.default.shape({}),
    hiddenStyles: import_prop_types3.default.shape({}),
    // @ts-ignore
    layout: import_prop_types3.default.oneOfType([
      import_prop_types3.default.func,
      import_prop_types3.default.exact({
        fillGaps: import_prop_types3.default.bool,
        horizontal: import_prop_types3.default.bool,
        alignRight: import_prop_types3.default.bool,
        alignBottom: import_prop_types3.default.bool,
        rounding: import_prop_types3.default.bool
      })
    ]),
    layoutOnResize: import_prop_types3.default.oneOfType([import_prop_types3.default.bool, import_prop_types3.default.number]),
    layoutDuration: import_prop_types3.default.number,
    layoutEasing: import_prop_types3.default.string,
    dragContainer: import_prop_types3.default.oneOfType([
      import_prop_types3.default.instanceOf(HTMLElement),
      import_prop_types3.default.shape({
        current: import_prop_types3.default.instanceOf(HTMLElement).isRequired
      })
    ]),
    // @ts-ignore
    dragStartPredicate: import_prop_types3.default.oneOfType([
      import_prop_types3.default.func,
      import_prop_types3.default.exact({
        distance: import_prop_types3.default.number,
        delay: import_prop_types3.default.number,
        handle: import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.bool])
      })
    ]),
    dragAxis: import_prop_types3.default.oneOf(["x", "y", "xy"]),
    dragSort: import_prop_types3.default.oneOfType([
      import_prop_types3.default.bool,
      import_prop_types3.default.func,
      import_prop_types3.default.exact({
        groupId: import_prop_types3.default.string.isRequired
      })
    ]),
    // @ts-ignore
    dragSortHeuristics: import_prop_types3.default.exact({
      sortInterval: import_prop_types3.default.number,
      minDragDistance: import_prop_types3.default.number,
      minBounceBackAngle: import_prop_types3.default.number
    }),
    // @ts-ignore
    dragSortPredicate: import_prop_types3.default.oneOfType([
      import_prop_types3.default.func,
      import_prop_types3.default.exact({
        action: import_prop_types3.default.oneOf(["move", "swap"]),
        migrateAction: import_prop_types3.default.oneOf(["move", "swap"]),
        threshold: import_prop_types3.default.number
      })
    ]),
    // @ts-ignore
    dragRelease: import_prop_types3.default.exact({
      duration: import_prop_types3.default.number,
      easing: import_prop_types3.default.string,
      useDragContainer: import_prop_types3.default.bool
    }),
    // @ts-ignore
    dragCssProps: import_prop_types3.default.exact({
      touchAction: import_prop_types3.default.string,
      userSelect: import_prop_types3.default.string,
      userDrag: import_prop_types3.default.string,
      tapHighlightColor: import_prop_types3.default.string,
      touchCallout: import_prop_types3.default.string,
      contentZooming: import_prop_types3.default.string
    }),
    // @ts-ignore
    dragPlaceholder: import_prop_types3.default.exact({
      enabled: import_prop_types3.default.bool,
      createElement: import_prop_types3.default.func,
      onCreate: import_prop_types3.default.func,
      onRemove: import_prop_types3.default.func,
      easing: import_prop_types3.default.string,
      duration: import_prop_types3.default.number
    }),
    containerClass: import_prop_types3.default.string,
    itemClass: import_prop_types3.default.string,
    itemVisibleClass: import_prop_types3.default.string,
    itemHiddenClass: import_prop_types3.default.string,
    itemPositioningClass: import_prop_types3.default.string,
    itemDraggingClass: import_prop_types3.default.string,
    itemReleasingClass: import_prop_types3.default.string,
    itemPlaceholderClass: import_prop_types3.default.string
  };
  MuuriComponent.defaultProps = __spreadProps(__spreadValues({}, import_muuri5.default.defaultOptions), {
    dragEnabled: null
  });
  MuuriComponent.displayName = "MuuriComponent";

  // src/hooks/index.ts
  var hooks_exports = {};
  __export(hooks_exports, {
    useData: () => useData,
    useDrag: () => useDrag,
    useDraggable: () => useDraggable,
    useGrid: () => useGrid,
    useRefresh: () => useRefresh,
    useShow: () => useShow,
    useVisibility: () => useVisibility
  });

  // src/hooks/useData.ts
  function useData(initialData, options) {
    const { itemRefController } = useItemContext();
    invariant(
      itemRefController !== void 0,
      "The useData hook can be used only inside an Item"
    );
    const setData2 = useFunction((data, options2) => {
      invariant(
        typeof data === "object",
        `The data must be an object, founded: ${typeof data}`
      );
      options2 = options2 || useData.defaultOptions;
      if (options2.merge) {
        const currentData = itemRefController.get("data") || {};
        itemRefController.set("data", Object.assign(currentData, data));
      } else {
        itemRefController.set("data", data);
      }
    });
    if (typeof initialData === "object") {
      setData2(initialData, options);
    }
    return setData2;
  }
  useData.defaultOptions = { merge: false };

  // src/hooks/useDrag.ts
  var import_react14 = __require("react");
  function useDrag() {
    const { eventController } = useItemContext();
    const reRender = useRerender();
    invariant(
      eventController !== void 0,
      "The useDrag hook can be used only inside an Item"
    );
    (0, import_react14.useEffect)(() => {
      eventController.enableEvent("drag", reRender);
    }, [eventController, reRender]);
    return eventController.getPayload("drag") || false;
  }

  // src/hooks/useDraggable.ts
  function useDraggable() {
    const { itemRefController } = useItemContext();
    invariant(
      itemRefController !== void 0,
      "The useDraggable hook can be used only inside an Item"
    );
    const setDraggable = useFunction((draggable) => {
      itemRefController.set("draggable", !!draggable);
    });
    return setDraggable;
  }

  // src/hooks/useGrid.ts
  var import_react15 = __require("react");
  function useGrid() {
    const { eventController } = useItemContext();
    const gridContext = useGridContext();
    const reRender = useRerender();
    invariant(
      eventController !== void 0 && gridContext.grid !== void 0,
      "The useGrid hook can be used only inside an Item"
    );
    const grid = eventController.getPayload("send") || gridContext.grid;
    (0, import_react15.useEffect)(() => {
      eventController.enableEvent("send", reRender);
    }, [eventController, reRender]);
    return {
      id: grid._component.id,
      groupIds: grid._component.groupIds,
      grid
    };
  }

  // src/hooks/useRefresh.ts
  var import_react16 = __require("react");
  function useRefresh(deps = []) {
    const { layoutController } = useGridContext();
    const { itemRefController } = useItemContext();
    invariant(
      itemRefController !== void 0 && layoutController !== void 0,
      "The useRefresh hook can be used only inside an Item"
    );
    const refresh = (0, import_react16.useCallback)(() => {
      if (!itemRefController.hasItem()) return;
      const item = itemRefController.getItem();
      layoutController.refreshItem(item);
    }, [layoutController, itemRefController]);
    (0, import_react16.useEffect)(() => {
      refresh();
    }, deps.concat(refresh));
    return refresh;
  }

  // src/hooks/useShow.ts
  var import_react17 = __require("react");
  function useShow() {
    const { eventController } = useItemContext();
    const reRender = useRerender();
    invariant(
      eventController !== void 0,
      "The useShow hook can be used only inside an Item"
    );
    (0, import_react17.useEffect)(() => {
      eventController.enableEvent("show", reRender);
    }, [eventController, reRender]);
    return eventController.getPayload("show");
  }

  // src/hooks/useVisibility.ts
  function useVisibility() {
    const { layoutController } = useGridContext();
    const { eventController, itemRefController } = useItemContext();
    invariant(
      itemRefController !== void 0 && layoutController !== void 0 && eventController !== void 0,
      "The useVisibility hook can be used only inside an Item"
    );
    const setVisibility = useFunction((visible, options) => {
      if (!itemRefController.hasItem()) return;
      if (!!visible === eventController.getPayload("show")) return;
      options = options || useVisibility.defaultOptions;
      layoutController.setItemVisibility(
        itemRefController.getItem(),
        visible,
        options.instant === true
      );
    });
    return setVisibility;
  }
  useVisibility.defaultOptions = { instant: false };

  // src/tools/getResponsiveStyle.ts
  function getResponsiveStyle(options) {
    invariant(typeof options === "object", "You must define options");
    invariant(
      typeof options.columns === "number" && options.columns > 0 && options.columns <= 1,
      "options.columns must be a number between 0 (excluded) and 1 (included)"
    );
    invariant(
      typeof options.ratio === "number" || typeof options.height === "number" || typeof options.height === "string",
      "You must provide at least one option between height and ratio"
    );
    invariant(
      typeof options.ratio !== "number" || typeof options.height !== "number" && typeof options.height !== "string",
      "You cannot provide both the height and the ratio options"
    );
    const { margin, mStatic, mDynamic } = getResponsiveMargin(
      options.margin || "0px"
    );
    const { needCalc, width } = getResponsiveWidth(
      options.columns,
      mStatic,
      mDynamic
    );
    return options.ratio ? {
      width: needCalc ? `calc(${width})` : width,
      paddingTop: getResponsivePaddingTop(width, options.ratio, needCalc),
      height: `0px`,
      borderWidth: "0px",
      margin
    } : {
      width: needCalc ? `calc(${width})` : width,
      paddingTop: `0px`,
      // @ts-ignore
      height: getFixedHeight(options.height),
      borderWidth: "0px",
      margin
    };
  }
  function getResponsiveWidth(columns, mStatic, mDynamic) {
    const needCalc = mStatic !== 0;
    const rawWidth = columns * 100 - mDynamic;
    const width = needCalc ? `${rawWidth}% - ${mStatic}px` : `${rawWidth}%`;
    return { needCalc, width };
  }
  function getResponsivePaddingTop(width, ratio, needCalc) {
    return needCalc ? `calc((${width}) / ${ratio})` : `${parseFloat(width) / ratio}%`;
  }
  function getFixedHeight(height) {
    return typeof height === "number" ? `${height}px` : height;
  }
  function getResponsiveMargin(margin) {
    if (typeof margin === "number") margin = `${margin}px`;
    const margins = margin.trim().split(" ");
    let leftMargin = "0px";
    let rightMargin = "0px";
    let mDynamic = 0;
    let mStatic = 0;
    if (margins.length === 1) {
      leftMargin = rightMargin = margins[0];
    } else if (margins.length === 2) {
      leftMargin = rightMargin = margins[1];
    } else if (margins.length === 3) {
      leftMargin = rightMargin = margins[1];
    } else if (margins.length === 4) {
      leftMargin = margins[3];
      rightMargin = margins[1];
    }
    if (leftMargin.indexOf("%") === -1) mStatic += parseFloat(leftMargin);
    else mDynamic += parseFloat(leftMargin);
    if (rightMargin.indexOf("%") === -1) mStatic += parseFloat(rightMargin);
    else mDynamic += parseFloat(rightMargin);
    return {
      margin,
      mStatic,
      mDynamic
    };
  }

  // src/tools/getStaticStyle.ts
  function getStaticStyle(options) {
    const style = getResponsiveStyle(options);
    invariant(
      "grid" in options,
      "You mast pass the grid instance to get the static style."
    );
    const sizerElement = options.grid.getSizerElement();
    Object.assign(sizerElement.style, style);
    const { width, height, paddingTop, margin } = window.getComputedStyle(
      sizerElement
    );
    return { width, height, paddingTop, margin };
  }

  // src/tools/withHooks.tsx
  var import_react18 = __toESM(__require("react"));
  var hooksNames = [
    "useData",
    "useDrag",
    "useDraggable",
    "useGrid",
    "useRefresh",
    "useShow",
    "useVisibility"
  ];
  var HooksHandlers = [
    [
      "useData",
      /*       */
      getHandler("setData")
    ],
    [
      "useDrag",
      /*       */
      getHandler("isDragging")
    ],
    [
      "useDraggable",
      /*  */
      getHandler("setDraggable")
    ],
    [
      "useGrid",
      /*       */
      getHandler("gridData")
    ],
    [
      "useRefresh",
      /*    */
      getHandler("refresh")
    ],
    [
      "useShow",
      /*       */
      getHandler("isShowing")
    ],
    [
      "useVisibility",
      /* */
      getHandler("setVisibility")
    ]
  ];
  function getHandler(key) {
    return function handler(payload) {
      return { [key]: payload };
    };
  }
  function getMerged(hooksHandlers) {
    return Object.assign(
      {},
      ...hooksHandlers.map(([hookName, handler]) => {
        const payload = hooks_exports[hookName]();
        return handler(payload);
      })
    );
  }
  function withHooks(Component, enabledHooks) {
    invariant(
      Array.isArray(enabledHooks),
      "An array of hooks name must be provided to wrap an item."
    );
    enabledHooks.forEach((hookName) => {
      invariant(hooksNames.includes(hookName), `Invalid item hook: ${hookName}`);
    });
    invariant(
      enabledHooks.length !== 0,
      "To wrap an item at least one hook must be provided."
    );
    const hooksHandlers = HooksHandlers.filter(
      ([hookName]) => enabledHooks.includes(hookName)
    );
    return function WrappedItem(props) {
      return /* @__PURE__ */ import_react18.default.createElement(Component, __spreadValues(__spreadValues({}, props), getMerged(hooksHandlers)));
    };
  }

  // src/index.ts
  var AutoScroller = import_muuri7.default.AutoScroller;
  var ItemDrag = import_muuri7.default.ItemDrag;
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=muuri-react.js.map
