import { unref, defineComponent, markRaw, useAttrs, ref, watchEffect, onMounted, onBeforeUnmount, openBlock, createElementBlock } from "vue";
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var tuiDatePicker = { exports: {} };
var tuiTimePicker = { exports: {} };
/*!
 * TOAST UI Time Picker
 * @version 2.1.6
 * @license MIT
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(window, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "dist";
      return __webpack_require__(__webpack_require__.s = 20);
    }([
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(3);
        function inArray(searchElement, array2, startIndex) {
          var i2;
          var length;
          startIndex = startIndex || 0;
          if (!isArray2(array2)) {
            return -1;
          }
          if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(array2, searchElement, startIndex);
          }
          length = array2.length;
          for (i2 = startIndex; startIndex >= 0 && i2 < length; i2 += 1) {
            if (array2[i2] === searchElement) {
              return i2;
            }
          }
          return -1;
        }
        module2.exports = inArray;
      },
      function(module2, exports2, __webpack_require__) {
        function forEachArray2(arr, iteratee, context) {
          var index = 0;
          var len = arr.length;
          context = context || null;
          for (; index < len; index += 1) {
            if (iteratee.call(context, arr[index], index, arr) === false) {
              break;
            }
          }
        }
        module2.exports = forEachArray2;
      },
      function(module2, exports2, __webpack_require__) {
        function extend2(target, objects) {
          var hasOwnProp = Object.prototype.hasOwnProperty;
          var source, prop, i2, len;
          for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
            source = arguments[i2];
            for (prop in source) {
              if (hasOwnProp.call(source, prop)) {
                target[prop] = source[prop];
              }
            }
          }
          return target;
        }
        module2.exports = extend2;
      },
      function(module2, exports2, __webpack_require__) {
        function isArray2(obj) {
          return obj instanceof Array;
        }
        module2.exports = isArray2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(3);
        var forEachArray2 = __webpack_require__(1);
        var forEachOwnProperties2 = __webpack_require__(16);
        function forEach2(obj, iteratee, context) {
          if (isArray2(obj)) {
            forEachArray2(obj, iteratee, context);
          } else {
            forEachOwnProperties2(obj, iteratee, context);
          }
        }
        module2.exports = forEach2;
      },
      function(module2, exports2, __webpack_require__) {
        function isUndefined2(obj) {
          return obj === void 0;
        }
        module2.exports = isUndefined2;
      },
      function(module2, exports2, __webpack_require__) {
        function isString2(obj) {
          return typeof obj === "string" || obj instanceof String;
        }
        module2.exports = isString2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEach2 = __webpack_require__(4);
        var isArray2 = __webpack_require__(3);
        var isString2 = __webpack_require__(6);
        var extend2 = __webpack_require__(2);
        var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
        var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
        var BRACKET_REGEXP = /\[\s?|\s?\]/;
        var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
        var DOT_REGEXP = /\./;
        var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
        var STRING_REGEXP = /"|'/g;
        var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
        var EXPRESSION_INTERVAL = 2;
        var BLOCK_HELPERS = {
          "if": handleIf,
          "each": handleEach,
          "with": handleWith
        };
        var isValidSplit = "a".split(/a/).length === 3;
        var splitByRegExp = function() {
          if (isValidSplit) {
            return function(text, regexp) {
              return text.split(regexp);
            };
          }
          return function(text, regexp) {
            var result = [];
            var prevIndex = 0;
            var match, index;
            if (!regexp.global) {
              regexp = new RegExp(regexp, "g");
            }
            match = regexp.exec(text);
            while (match !== null) {
              index = match.index;
              result.push(text.slice(prevIndex, index));
              prevIndex = index + match[0].length;
              match = regexp.exec(text);
            }
            result.push(text.slice(prevIndex));
            return result;
          };
        }();
        function getValueFromContext(exp, context) {
          var splitedExps;
          var value = context[exp];
          if (exp === "true") {
            value = true;
          } else if (exp === "false") {
            value = false;
          } else if (STRING_NOTATION_REGEXP.test(exp)) {
            value = exp.replace(STRING_REGEXP, "");
          } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(BRACKET_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
          } else if (DOT_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(DOT_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
          } else if (NUMBER_REGEXP.test(exp)) {
            value = parseFloat(exp);
          }
          return value;
        }
        function extractElseif(ifExps, sourcesInsideBlock) {
          var exps = [ifExps];
          var sourcesInsideIf = [];
          var otherIfCount = 0;
          var start = 0;
          forEach2(sourcesInsideBlock, function(source, index) {
            if (source.indexOf("if") === 0) {
              otherIfCount += 1;
            } else if (source === "/if") {
              otherIfCount -= 1;
            } else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
              exps.push(source === "else" ? ["true"] : source.split(" ").slice(1));
              sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
              start = index + 1;
            }
          });
          sourcesInsideIf.push(sourcesInsideBlock.slice(start));
          return {
            exps,
            sourcesInsideIf
          };
        }
        function handleIf(exps, sourcesInsideBlock, context) {
          var analyzed = extractElseif(exps, sourcesInsideBlock);
          var result = false;
          var compiledSource = "";
          forEach2(analyzed.exps, function(exp, index) {
            result = handleExpression(exp, context);
            if (result) {
              compiledSource = compile(analyzed.sourcesInsideIf[index], context);
            }
            return !result;
          });
          return compiledSource;
        }
        function handleEach(exps, sourcesInsideBlock, context) {
          var collection = handleExpression(exps, context);
          var additionalKey = isArray2(collection) ? "@index" : "@key";
          var additionalContext = {};
          var result = "";
          forEach2(collection, function(item, key) {
            additionalContext[additionalKey] = key;
            additionalContext["@this"] = item;
            extend2(context, additionalContext);
            result += compile(sourcesInsideBlock.slice(), context);
          });
          return result;
        }
        function handleWith(exps, sourcesInsideBlock, context) {
          var asIndex = inArray("as", exps);
          var alias = exps[asIndex + 1];
          var result = handleExpression(exps.slice(0, asIndex), context);
          var additionalContext = {};
          additionalContext[alias] = result;
          return compile(sourcesInsideBlock, extend2(context, additionalContext)) || "";
        }
        function extractSourcesInsideBlock(sources, start, end) {
          var sourcesInsideBlock = sources.splice(start + 1, end - start);
          sourcesInsideBlock.pop();
          return sourcesInsideBlock;
        }
        function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
          var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
          var helperCount = 1;
          var startBlockIndex = 0;
          var endBlockIndex;
          var index = startBlockIndex + EXPRESSION_INTERVAL;
          var expression = sourcesToEnd[index];
          while (helperCount && isString2(expression)) {
            if (expression.indexOf(helperKeyword) === 0) {
              helperCount += 1;
            } else if (expression.indexOf("/" + helperKeyword) === 0) {
              helperCount -= 1;
              endBlockIndex = index;
            }
            index += EXPRESSION_INTERVAL;
            expression = sourcesToEnd[index];
          }
          if (helperCount) {
            throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
          }
          sourcesToEnd[startBlockIndex] = executeBlockHelper(
            sourcesToEnd[startBlockIndex].split(" ").slice(1),
            extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex),
            context
          );
          return sourcesToEnd;
        }
        function handleExpression(exps, context) {
          var result = getValueFromContext(exps[0], context);
          if (result instanceof Function) {
            return executeFunction(result, exps.slice(1), context);
          }
          return result;
        }
        function executeFunction(helper, argExps, context) {
          var args = [];
          forEach2(argExps, function(exp) {
            args.push(getValueFromContext(exp, context));
          });
          return helper.apply(null, args);
        }
        function compile(sources, context) {
          var index = 1;
          var expression = sources[index];
          var exps, firstExp, result;
          while (isString2(expression)) {
            exps = expression.split(" ");
            firstExp = exps[0];
            if (BLOCK_HELPERS[firstExp]) {
              result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
              sources = sources.concat(result);
            } else {
              sources[index] = handleExpression(exps, context);
            }
            index += EXPRESSION_INTERVAL;
            expression = sources[index];
          }
          return sources.join("");
        }
        function template(text, context) {
          return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
        }
        module2.exports = template;
      },
      function(module2, exports2, __webpack_require__) {
        var extend2 = __webpack_require__(2);
        var isExisty2 = __webpack_require__(23);
        var isString2 = __webpack_require__(6);
        var isObject2 = __webpack_require__(25);
        var isArray2 = __webpack_require__(3);
        var isFunction2 = __webpack_require__(26);
        var forEach2 = __webpack_require__(4);
        var R_EVENTNAME_SPLIT2 = /\s+/g;
        function CustomEvents2() {
          this.events = null;
          this.contexts = null;
        }
        CustomEvents2.mixin = function(func) {
          extend2(func.prototype, CustomEvents2.prototype);
        };
        CustomEvents2.prototype._getHandlerItem = function(handler, context) {
          var item = { handler };
          if (context) {
            item.context = context;
          }
          return item;
        };
        CustomEvents2.prototype._safeEvent = function(eventName) {
          var events = this.events;
          var byName;
          if (!events) {
            events = this.events = {};
          }
          if (eventName) {
            byName = events[eventName];
            if (!byName) {
              byName = [];
              events[eventName] = byName;
            }
            events = byName;
          }
          return events;
        };
        CustomEvents2.prototype._safeContext = function() {
          var context = this.contexts;
          if (!context) {
            context = this.contexts = [];
          }
          return context;
        };
        CustomEvents2.prototype._indexOfContext = function(ctx) {
          var context = this._safeContext();
          var index = 0;
          while (context[index]) {
            if (ctx === context[index][0]) {
              return index;
            }
            index += 1;
          }
          return -1;
        };
        CustomEvents2.prototype._memorizeContext = function(ctx) {
          var context, index;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          index = this._indexOfContext(ctx);
          if (index > -1) {
            context[index][1] += 1;
          } else {
            context.push([ctx, 1]);
          }
        };
        CustomEvents2.prototype._forgetContext = function(ctx) {
          var context, contextIndex;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          contextIndex = this._indexOfContext(ctx);
          if (contextIndex > -1) {
            context[contextIndex][1] -= 1;
            if (context[contextIndex][1] <= 0) {
              context.splice(contextIndex, 1);
            }
          }
        };
        CustomEvents2.prototype._bindEvent = function(eventName, handler, context) {
          var events = this._safeEvent(eventName);
          this._memorizeContext(context);
          events.push(this._getHandlerItem(handler, context));
        };
        CustomEvents2.prototype.on = function(eventName, handler, context) {
          var self2 = this;
          if (isString2(eventName)) {
            eventName = eventName.split(R_EVENTNAME_SPLIT2);
            forEach2(eventName, function(name) {
              self2._bindEvent(name, handler, context);
            });
          } else if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.on(name, func, context);
            });
          }
        };
        CustomEvents2.prototype.once = function(eventName, handler, context) {
          var self2 = this;
          if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.once(name, func, context);
            });
            return;
          }
          function onceHandler() {
            handler.apply(context, arguments);
            self2.off(eventName, onceHandler, context);
          }
          this.on(eventName, onceHandler, context);
        };
        CustomEvents2.prototype._spliceMatches = function(arr, predicate) {
          var i2 = 0;
          var len;
          if (!isArray2(arr)) {
            return;
          }
          for (len = arr.length; i2 < len; i2 += 1) {
            if (predicate(arr[i2]) === true) {
              arr.splice(i2, 1);
              len -= 1;
              i2 -= 1;
            }
          }
        };
        CustomEvents2.prototype._matchHandler = function(handler) {
          var self2 = this;
          return function(item) {
            var needRemove = handler === item.handler;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchContext = function(context) {
          var self2 = this;
          return function(item) {
            var needRemove = context === item.context;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchHandlerAndContext = function(handler, context) {
          var self2 = this;
          return function(item) {
            var matchHandler = handler === item.handler;
            var matchContext = context === item.context;
            var needRemove = matchHandler && matchContext;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._offByEventName = function(eventName, handler) {
          var self2 = this;
          var andByHandler = isFunction2(handler);
          var matchHandler = self2._matchHandler(handler);
          eventName = eventName.split(R_EVENTNAME_SPLIT2);
          forEach2(eventName, function(name) {
            var handlerItems = self2._safeEvent(name);
            if (andByHandler) {
              self2._spliceMatches(handlerItems, matchHandler);
            } else {
              forEach2(handlerItems, function(item) {
                self2._forgetContext(item.context);
              });
              self2.events[name] = [];
            }
          });
        };
        CustomEvents2.prototype._offByHandler = function(handler) {
          var self2 = this;
          var matchHandler = this._matchHandler(handler);
          forEach2(this._safeEvent(), function(handlerItems) {
            self2._spliceMatches(handlerItems, matchHandler);
          });
        };
        CustomEvents2.prototype._offByObject = function(obj, handler) {
          var self2 = this;
          var matchFunc;
          if (this._indexOfContext(obj) < 0) {
            forEach2(obj, function(func, name) {
              self2.off(name, func);
            });
          } else if (isString2(handler)) {
            matchFunc = this._matchContext(obj);
            self2._spliceMatches(this._safeEvent(handler), matchFunc);
          } else if (isFunction2(handler)) {
            matchFunc = this._matchHandlerAndContext(handler, obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          } else {
            matchFunc = this._matchContext(obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          }
        };
        CustomEvents2.prototype.off = function(eventName, handler) {
          if (isString2(eventName)) {
            this._offByEventName(eventName, handler);
          } else if (!arguments.length) {
            this.events = {};
            this.contexts = [];
          } else if (isFunction2(eventName)) {
            this._offByHandler(eventName);
          } else if (isObject2(eventName)) {
            this._offByObject(eventName, handler);
          }
        };
        CustomEvents2.prototype.fire = function(eventName) {
          this.invoke.apply(this, arguments);
        };
        CustomEvents2.prototype.invoke = function(eventName) {
          var events, args, index, item;
          if (!this.hasListener(eventName)) {
            return true;
          }
          events = this._safeEvent(eventName);
          args = Array.prototype.slice.call(arguments, 1);
          index = 0;
          while (events[index]) {
            item = events[index];
            if (item.handler.apply(item.context, args) === false) {
              return false;
            }
            index += 1;
          }
          return true;
        };
        CustomEvents2.prototype.hasListener = function(eventName) {
          return this.getListenerLength(eventName) > 0;
        };
        CustomEvents2.prototype.getListenerLength = function(eventName) {
          var events = this._safeEvent(eventName);
          return events.length;
        };
        module2.exports = CustomEvents2;
      },
      function(module2, exports2, __webpack_require__) {
        var inherit = __webpack_require__(27);
        var extend2 = __webpack_require__(2);
        function defineClass(parent, props) {
          var obj;
          if (!props) {
            props = parent;
            parent = null;
          }
          obj = props.init || function() {
          };
          if (parent) {
            inherit(obj, parent);
          }
          if (props.hasOwnProperty("static")) {
            extend2(obj, props["static"]);
            delete props["static"];
          }
          extend2(obj.prototype, props);
          return obj;
        }
        module2.exports = defineClass;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(6);
        var forEach2 = __webpack_require__(4);
        var safeEvent = __webpack_require__(17);
        function on2(element, types, handler, context) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              bindEvent(element, type, handler, context);
            });
            return;
          }
          forEach2(types, function(func, type) {
            bindEvent(element, type, func, handler);
          });
        }
        function bindEvent(element, type, handler, context) {
          function eventHandler(e2) {
            handler.call(context || element, e2 || window.event);
          }
          if ("addEventListener" in element) {
            element.addEventListener(type, eventHandler);
          } else if ("attachEvent" in element) {
            element.attachEvent("on" + type, eventHandler);
          }
          memorizeHandler(element, type, handler, eventHandler);
        }
        function memorizeHandler(element, type, handler, wrappedHandler) {
          var events = safeEvent(element, type);
          var existInEvents = false;
          forEach2(events, function(obj) {
            if (obj.handler === handler) {
              existInEvents = true;
              return false;
            }
            return true;
          });
          if (!existInEvents) {
            events.push({
              handler,
              wrappedHandler
            });
          }
        }
        module2.exports = on2;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(6);
        var forEach2 = __webpack_require__(4);
        var safeEvent = __webpack_require__(17);
        function off(element, types, handler) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              unbindEvent(element, type, handler);
            });
            return;
          }
          forEach2(types, function(func, type) {
            unbindEvent(element, type, func);
          });
        }
        function unbindEvent(element, type, handler) {
          var events = safeEvent(element, type);
          var index;
          if (!handler) {
            forEach2(events, function(item) {
              removeHandler(element, type, item.wrappedHandler);
            });
            events.splice(0, events.length);
          } else {
            forEach2(events, function(item, idx) {
              if (handler === item.handler) {
                removeHandler(element, type, item.wrappedHandler);
                index = idx;
                return false;
              }
              return true;
            });
            events.splice(index, 1);
          }
        }
        function removeHandler(element, type, handler) {
          if ("removeEventListener" in element) {
            element.removeEventListener(type, handler);
          } else if ("detachEvent" in element) {
            element.detachEvent("on" + type, handler);
          }
        }
        module2.exports = off;
      },
      function(module2, exports2, __webpack_require__) {
        var matches = __webpack_require__(30);
        function closest(element, selector) {
          var parent = element.parentNode;
          if (matches(element, selector)) {
            return element;
          }
          while (parent && parent !== document) {
            if (matches(parent, selector)) {
              return parent;
            }
            parent = parent.parentNode;
          }
          return null;
        }
        module2.exports = closest;
      },
      function(module2, exports2, __webpack_require__) {
        function removeElement(element) {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
        module2.exports = removeElement;
      },
      function(module2, exports2, __webpack_require__) {
        function isHTMLNode(html) {
          if (typeof HTMLElement === "object") {
            return html && (html instanceof HTMLElement || !!html.nodeType);
          }
          return !!(html && html.nodeType);
        }
        module2.exports = isHTMLNode;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEachArray2 = __webpack_require__(1);
        var sendHostname2 = __webpack_require__(35);
        var uniqueId = 0;
        var utils = {
          getUniqueId: function() {
            uniqueId += 1;
            return uniqueId;
          },
          formatTime: function(value, format) {
            var PADDING_ZERO_TYPES = ["hh", "mm"];
            value = String(value);
            return inArray(format, PADDING_ZERO_TYPES) >= 0 && value.length === 1 ? "0" + value : value;
          },
          getMeridiemHour: function(hour) {
            hour %= 12;
            if (hour === 0) {
              hour = 12;
            }
            return hour;
          },
          getRangeArr: function(start, end, step) {
            var arr = [];
            var i2;
            step = step || 1;
            if (start > end) {
              for (i2 = end; i2 >= start; i2 -= step) {
                arr.push(i2);
              }
            } else {
              for (i2 = start; i2 <= end; i2 += step) {
                arr.push(i2);
              }
            }
            return arr;
          },
          fill: function(start, end, value, target) {
            var arr = target || [];
            var replaceEnd = Math.min(arr.length - 1, end);
            var i2;
            for (i2 = start; i2 <= replaceEnd; i2 += 1) {
              arr[i2] = value;
            }
            for (i2 = replaceEnd; i2 <= end; i2 += 1) {
              arr.push(value);
            }
            return arr;
          },
          getTarget: function(ev) {
            return ev.target || ev.srcElement;
          },
          sendHostName: function() {
            sendHostname2("time-picker", "UA-129987462-1");
          },
          getDisabledMinuteArr: function(enableRanges, minuteStep) {
            var arr = this.fill(0, Math.floor(60 / minuteStep) - 2, false);
            function setDisabled(enableRange) {
              var beginDisabledMinute = Math.ceil(enableRange.begin / minuteStep);
              var endDisabledMinute = Math.floor(enableRange.end / minuteStep);
              arr = this.fill(beginDisabledMinute, endDisabledMinute, true, arr);
            }
            forEachArray2(enableRanges, setDisabled.bind(this));
            return arr;
          },
          setDisabled: function(el, isDisabled) {
            el.disabled = isDisabled;
          }
        };
        module2.exports = utils;
      },
      function(module2, exports2, __webpack_require__) {
        function forEachOwnProperties2(obj, iteratee, context) {
          var key;
          context = context || null;
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (iteratee.call(context, obj[key], key, obj) === false) {
                break;
              }
            }
          }
        }
        module2.exports = forEachOwnProperties2;
      },
      function(module2, exports2, __webpack_require__) {
        var EVENT_KEY = "_feEventKey";
        function safeEvent(element, type) {
          var events = element[EVENT_KEY];
          var handlers;
          if (!events) {
            events = element[EVENT_KEY] = {};
          }
          handlers = events[type];
          if (!handlers) {
            handlers = events[type] = [];
          }
          return handlers;
        }
        module2.exports = safeEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(5);
        function getClass(element) {
          if (!element || !element.className) {
            return "";
          }
          if (isUndefined2(element.className.baseVal)) {
            return element.className;
          }
          return element.className.baseVal;
        }
        module2.exports = getClass;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(3);
        var isUndefined2 = __webpack_require__(5);
        function setClassName(element, cssClass) {
          cssClass = isArray2(cssClass) ? cssClass.join(" ") : cssClass;
          cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          if (isUndefined2(element.className.baseVal)) {
            element.className = cssClass;
            return;
          }
          element.className.baseVal = cssClass;
        }
        module2.exports = setClassName;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(21);
        module2.exports = __webpack_require__(22);
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEachArray2 = __webpack_require__(1);
        var CustomEvents2 = __webpack_require__(8);
        var defineClass = __webpack_require__(9);
        var extend2 = __webpack_require__(2);
        var on2 = __webpack_require__(10);
        var off = __webpack_require__(11);
        var addClass = __webpack_require__(29);
        var closest = __webpack_require__(12);
        var removeElement = __webpack_require__(13);
        var removeClass = __webpack_require__(32);
        var isHTMLNode = __webpack_require__(14);
        var isNumber2 = __webpack_require__(33);
        var Spinbox = __webpack_require__(34);
        var Selectbox = __webpack_require__(38);
        var util = __webpack_require__(15);
        var localeTexts = __webpack_require__(40);
        var tmpl = __webpack_require__(41);
        var meridiemTmpl = __webpack_require__(42);
        var SELECTOR_HOUR_ELEMENT = ".tui-timepicker-hour";
        var SELECTOR_MINUTE_ELEMENT = ".tui-timepicker-minute";
        var SELECTOR_MERIDIEM_ELEMENT = ".tui-timepicker-meridiem";
        var CLASS_NAME_LEFT_MERIDIEM = "tui-has-left";
        var CLASS_NAME_HIDDEN = "tui-hidden";
        var CLASS_NAME_CHECKED = "tui-timepicker-meridiem-checked";
        var INPUT_TYPE_SPINBOX = "spinbox";
        var INPUT_TYPE_SELECTBOX = "selectbox";
        var START_NUMBER_OF_TIME = 0;
        var END_NUMBER_OF_MINUTE = 59;
        var END_NUMBER_OF_HOUR = 23;
        var END_NUMBER_OF_HOUR_WITH_MERIDIEM = 12;
        var mergeDefaultOptions = function(options) {
          return extend2(
            {
              language: "en",
              initialHour: 0,
              initialMinute: 0,
              showMeridiem: true,
              inputType: "selectbox",
              hourStep: 1,
              minuteStep: 1,
              meridiemPosition: "right",
              format: "h:m",
              disabledHours: [],
              disabledMinutes: {},
              usageStatistics: true
            },
            options
          );
        };
        var TimePicker = defineClass(
          {
            static: {
              localeTexts
            },
            init: function(container, options) {
              options = mergeDefaultOptions(options);
              this.id = util.getUniqueId();
              this.container = isHTMLNode(container) ? container : document.querySelector(container);
              this.element = null;
              this.meridiemElement = null;
              this.amEl = null;
              this.pmEl = null;
              this.showMeridiem = options.showMeridiem;
              this.meridiemPosition = options.meridiemPosition;
              this.hourInput = null;
              this.minuteInput = null;
              this.hour = options.initialHour;
              this.minute = options.initialMinute;
              this.hourStep = options.hourStep;
              this.minuteStep = options.minuteStep;
              this.disabledHours = options.disabledHours;
              this.disabledMinutes = options.disabledMinutes;
              this.inputType = options.inputType;
              this.localeText = localeTexts[options.language];
              this.format = this.getValidTimeFormat(options.format);
              this.render();
              this.setEvents();
              if (options.usageStatistics) {
                util.sendHostName();
              }
            },
            setEvents: function() {
              this.hourInput.on("change", this.onChangeTimeInput, this);
              this.minuteInput.on("change", this.onChangeTimeInput, this);
              if (this.showMeridiem) {
                if (this.inputType === INPUT_TYPE_SELECTBOX) {
                  on2(this.meridiemElement.querySelector("select"), "change", this.onChangeMeridiem, this);
                } else if (this.inputType === INPUT_TYPE_SPINBOX) {
                  on2(this.meridiemElement, "click", this.onChangeMeridiem, this);
                }
              }
            },
            removeEvents: function() {
              this.off();
              this.hourInput.destroy();
              this.minuteInput.destroy();
              if (this.showMeridiem) {
                if (this.inputType === INPUT_TYPE_SELECTBOX) {
                  off(this.meridiemElement.querySelector("select"), "change", this.onChangeMeridiem, this);
                } else if (this.inputType === INPUT_TYPE_SPINBOX) {
                  off(this.meridiemElement, "click", this.onChangeMeridiem, this);
                }
              }
            },
            render: function() {
              var context = {
                showMeridiem: this.showMeridiem,
                isSpinbox: this.inputType === "spinbox"
              };
              if (this.showMeridiem) {
                extend2(context, {
                  meridiemElement: this.makeMeridiemHTML()
                });
              }
              if (this.element) {
                removeElement(this.element);
              }
              this.container.innerHTML = tmpl(context);
              this.element = this.container.firstChild;
              this.renderTimeInputs();
              if (this.showMeridiem) {
                this.setMeridiemElement();
              }
            },
            setMeridiemElement: function() {
              if (this.meridiemPosition === "left") {
                addClass(this.element, CLASS_NAME_LEFT_MERIDIEM);
              }
              this.meridiemElement = this.element.querySelector(SELECTOR_MERIDIEM_ELEMENT);
              this.amEl = this.meridiemElement.querySelector('[value="AM"]');
              this.pmEl = this.meridiemElement.querySelector('[value="PM"]');
              this.syncToMeridiemElements();
            },
            makeMeridiemHTML: function() {
              var localeText = this.localeText;
              return meridiemTmpl({
                am: localeText.am,
                pm: localeText.pm,
                radioId: this.id,
                isSpinbox: this.inputType === "spinbox"
              });
            },
            renderTimeInputs: function() {
              var hour = this.hour;
              var showMeridiem = this.showMeridiem;
              var hourElement = this.element.querySelector(SELECTOR_HOUR_ELEMENT);
              var minuteElement = this.element.querySelector(SELECTOR_MINUTE_ELEMENT);
              var BoxComponent = this.inputType.toLowerCase() === "selectbox" ? Selectbox : Spinbox;
              var formatExplode = this.format.split(":");
              var hourItems = this.getHourItems();
              if (showMeridiem) {
                hour = util.getMeridiemHour(hour);
              }
              this.hourInput = new BoxComponent(hourElement, {
                initialValue: hour,
                items: hourItems,
                format: formatExplode[0],
                disabledItems: this.makeDisabledStatItems(hourItems)
              });
              this.minuteInput = new BoxComponent(minuteElement, {
                initialValue: this.minute,
                items: this.getMinuteItems(),
                format: formatExplode[1]
              });
            },
            makeDisabledStatItems: function(hourItems) {
              var result = [];
              var disabledHours = this.disabledHours.slice();
              if (this.showMeridiem) {
                disabledHours = this.meridiemableTime(disabledHours);
              }
              forEachArray2(hourItems, function(hour) {
                result.push(inArray(hour, disabledHours) >= 0);
              });
              return result;
            },
            meridiemableTime: function(disabledHours) {
              var diffHour = 0;
              var startHour = 0;
              var endHour = 11;
              var result = [];
              if (this.hour >= 12) {
                diffHour = 12;
                startHour = 12;
                endHour = 23;
              }
              forEachArray2(disabledHours, function(hour) {
                if (hour >= startHour && hour <= endHour) {
                  result.push(hour - diffHour === 0 ? 12 : hour - diffHour);
                }
              });
              return result;
            },
            getValidTimeFormat: function(format) {
              if (!format.match(/^[h]{1,2}:[m]{1,2}$/i)) {
                return "h:m";
              }
              return format.toLowerCase();
            },
            syncToMeridiemElements: function() {
              var selectedEl = this.hour >= 12 ? this.pmEl : this.amEl;
              var notSelectedEl = selectedEl === this.pmEl ? this.amEl : this.pmEl;
              selectedEl.setAttribute("selected", true);
              selectedEl.setAttribute("checked", true);
              addClass(selectedEl, CLASS_NAME_CHECKED);
              notSelectedEl.removeAttribute("selected");
              notSelectedEl.removeAttribute("checked");
              removeClass(notSelectedEl, CLASS_NAME_CHECKED);
            },
            syncToInputs: function() {
              var hour = this.hour;
              var minute = this.minute;
              if (this.showMeridiem) {
                hour = util.getMeridiemHour(hour);
              }
              this.hourInput.setValue(hour, true);
              this.minuteInput.setValue(minute, true);
            },
            onChangeMeridiem: function(ev) {
              var hour = this.hour;
              var target = util.getTarget(ev);
              if (target.value && closest(target, SELECTOR_MERIDIEM_ELEMENT)) {
                hour = this.to24Hour(target.value === "PM", hour);
                this.setTime(hour, this.minute);
                this.setDisabledHours();
                this.setDisabledMinutes(hour);
              }
            },
            onChangeTimeInput: function() {
              var hour = this.hourInput.getValue();
              var minute = this.minuteInput.getValue();
              var isPM = this.hour >= 12;
              if (this.showMeridiem) {
                hour = this.to24Hour(isPM, hour);
              }
              this.setTime(hour, minute);
              this.setDisabledMinutes(hour);
            },
            to24Hour: function(isPM, hour) {
              hour %= 12;
              if (isPM) {
                hour += 12;
              }
              return hour;
            },
            setDisabledHours: function() {
              var hourItems = this.getHourItems();
              var disabledItems = this.makeDisabledStatItems(hourItems);
              this.hourInput.setDisabledItems(disabledItems);
            },
            setDisabledMinutes: function(hour) {
              var disabledItems;
              disabledItems = this.disabledMinutes[hour] || [];
              this.minuteInput.setDisabledItems(disabledItems);
            },
            getHourItems: function() {
              var step = this.hourStep;
              return this.showMeridiem ? util.getRangeArr(1, 12, step) : util.getRangeArr(0, 23, step);
            },
            getMinuteItems: function() {
              return util.getRangeArr(0, 59, this.minuteStep);
            },
            validItems: function(hour, minute) {
              if (!isNumber2(hour) || !isNumber2(minute)) {
                return false;
              }
              if (this.showMeridiem) {
                hour = util.getMeridiemHour(hour);
              }
              return inArray(hour, this.getHourItems()) > -1 && inArray(minute, this.getMinuteItems()) > -1;
            },
            setHourStep: function(step) {
              this.hourStep = step;
              this.hourInput.fire("changeItems", this.getHourItems());
            },
            getHourStep: function() {
              return this.hourStep;
            },
            setMinuteStep: function(step) {
              this.minuteStep = step;
              this.minuteInput.fire("changeItems", this.getMinuteItems());
            },
            getMinuteStep: function() {
              return this.minuteStep;
            },
            show: function() {
              removeClass(this.element, CLASS_NAME_HIDDEN);
            },
            hide: function() {
              addClass(this.element, CLASS_NAME_HIDDEN);
            },
            setHour: function(hour) {
              return this.setTime(hour, this.minute);
            },
            setMinute: function(minute) {
              return this.setTime(this.hour, minute);
            },
            setTime: function(hour, minute, silent) {
              if (!this.validItems(hour, minute)) {
                return;
              }
              this.hour = hour;
              this.minute = minute;
              this.syncToInputs();
              if (this.showMeridiem) {
                this.syncToMeridiemElements();
              }
              if (!silent) {
                this.fire("change", {
                  hour: this.hour,
                  minute: this.minute
                });
              }
            },
            setRange: function(begin, end) {
              var beginHour = begin.hour;
              var beginMin = begin.minute;
              var endHour, endMin;
              if (!this.isValidRange(begin, end)) {
                return;
              }
              if (end) {
                endHour = end.hour;
                endMin = end.minute;
              }
              this.setRangeHour(beginHour, endHour);
              this.setRangeMinute(beginHour, beginMin, endHour, endMin);
              this.applyRange(beginHour, beginMin, endHour);
            },
            setRangeHour: function(beginHour, endHour) {
              var disabledHours = util.getRangeArr(START_NUMBER_OF_TIME, beginHour - 1);
              if (endHour) {
                disabledHours = disabledHours.concat(util.getRangeArr(endHour + 1, END_NUMBER_OF_HOUR));
              }
              this.disabledHours = disabledHours.slice();
            },
            setRangeMinute: function(beginHour, beginMin, endHour, endMin) {
              var disabledMinRanges = [];
              if (!beginHour && !beginMin) {
                return;
              }
              disabledMinRanges.push({
                begin: START_NUMBER_OF_TIME,
                end: beginMin
              });
              if (endHour && endMin) {
                disabledMinRanges.push({
                  begin: endMin,
                  end: END_NUMBER_OF_MINUTE
                });
                if (beginHour === endHour) {
                  this.disabledMinutes[beginHour] = util.getDisabledMinuteArr(disabledMinRanges, this.minuteStep).slice();
                  return;
                }
                this.disabledMinutes[endHour] = util.getDisabledMinuteArr([disabledMinRanges[1]], this.minuteStep).slice();
              }
              this.disabledMinutes[beginHour] = util.getDisabledMinuteArr([disabledMinRanges[0]], this.minuteStep).slice();
            },
            applyRange: function(beginHour, beginMin, endHour) {
              var targetMinuteIndex = Math.ceil(beginMin / this.minuteStep);
              var targetHour = beginHour;
              var targetMinute = targetMinuteIndex * this.minuteStep;
              var diffFromSelectableMinute;
              if (this.isLaterThanSetTime(beginHour, beginMin)) {
                if (this.disabledMinutes[targetHour][targetMinuteIndex]) {
                  diffFromSelectableMinute = this.disabledMinutes[targetHour].slice(targetMinuteIndex).findIndex(function(isMinuteDisabled) {
                    return !isMinuteDisabled;
                  }) * this.minuteStep;
                  targetMinute = diffFromSelectableMinute >= 0 ? targetMinute + diffFromSelectableMinute : 60;
                }
                if (this.hourStep !== 1 && beginHour % this.hourStep !== 1 || targetMinute >= 60) {
                  targetHour = beginHour + beginHour % this.hourStep + 1;
                  targetMinute = 0;
                }
                this.setTime(targetHour, targetMinute);
              }
              this.setDisabledHours();
              this.setDisabledMinutes(this.hour);
              if (this.showMeridiem) {
                this.syncToMeridiemElements();
                util.setDisabled(this.amEl, beginHour >= END_NUMBER_OF_HOUR_WITH_MERIDIEM);
                util.setDisabled(this.pmEl, endHour < END_NUMBER_OF_HOUR_WITH_MERIDIEM);
              }
            },
            resetMinuteRange: function() {
              var i2;
              this.disabledMinutes = {};
              for (i2 = 0; i2 <= END_NUMBER_OF_HOUR; i2 += 1) {
                this.setDisabledMinutes(this.hour);
              }
            },
            isValidRange: function(begin, end) {
              var beginHour = begin.hour;
              var beginMin = begin.minute;
              var endHour, endMin;
              if (!this.isValidTime(beginHour, beginMin)) {
                return false;
              }
              if (!end) {
                return true;
              }
              endHour = end.hour;
              endMin = end.minute;
              return this.isValidTime(endHour, endMin) && this.compareTimes(begin, end) > 0;
            },
            isValidTime: function(hour, minute) {
              return hour >= START_NUMBER_OF_TIME && hour <= END_NUMBER_OF_HOUR && minute >= START_NUMBER_OF_TIME && minute <= END_NUMBER_OF_MINUTE;
            },
            isLaterThanSetTime: function(hour, minute) {
              return hour > this.hour || hour === this.hour && minute > this.minute;
            },
            compareTimes: function(begin, end) {
              var first2 = new Date(0);
              var second = new Date(0);
              first2.setHours(begin.hour, begin.minute);
              second.setHours(end.hour, end.minute);
              return second.getTime() - first2.getTime();
            },
            getHour: function() {
              return this.hour;
            },
            getMinute: function() {
              return this.minute;
            },
            changeLanguage: function(language) {
              this.localeText = localeTexts[language];
              this.render();
            },
            destroy: function() {
              this.removeEvents();
              removeElement(this.element);
              this.container = this.showMeridiem = this.hourInput = this.minuteInput = this.hour = this.minute = this.inputType = this.element = this.meridiemElement = this.amEl = this.pmEl = null;
            }
          }
        );
        CustomEvents2.mixin(TimePicker);
        module2.exports = TimePicker;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(5);
        var isNull2 = __webpack_require__(24);
        function isExisty2(param) {
          return !isUndefined2(param) && !isNull2(param);
        }
        module2.exports = isExisty2;
      },
      function(module2, exports2, __webpack_require__) {
        function isNull2(obj) {
          return obj === null;
        }
        module2.exports = isNull2;
      },
      function(module2, exports2, __webpack_require__) {
        function isObject2(obj) {
          return obj === Object(obj);
        }
        module2.exports = isObject2;
      },
      function(module2, exports2, __webpack_require__) {
        function isFunction2(obj) {
          return obj instanceof Function;
        }
        module2.exports = isFunction2;
      },
      function(module2, exports2, __webpack_require__) {
        var createObject = __webpack_require__(28);
        function inherit(subType, superType) {
          var prototype = createObject(superType.prototype);
          prototype.constructor = subType;
          subType.prototype = prototype;
        }
        module2.exports = inherit;
      },
      function(module2, exports2, __webpack_require__) {
        function createObject(obj) {
          function F2() {
          }
          F2.prototype = obj;
          return new F2();
        }
        module2.exports = createObject;
      },
      function(module2, exports2, __webpack_require__) {
        var forEach2 = __webpack_require__(4);
        var inArray = __webpack_require__(0);
        var getClass = __webpack_require__(18);
        var setClassName = __webpack_require__(19);
        function addClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var newClass = [];
          var origin;
          if (classList) {
            forEach2(cssClass, function(name) {
              element.classList.add(name);
            });
            return;
          }
          origin = getClass(element);
          if (origin) {
            cssClass = [].concat(origin.split(/\s+/), cssClass);
          }
          forEach2(cssClass, function(cls2) {
            if (inArray(cls2, newClass) < 0) {
              newClass.push(cls2);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = addClass;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var toArray = __webpack_require__(31);
        var elProto2 = Element.prototype;
        var matchSelector = elProto2.matches || elProto2.webkitMatchesSelector || elProto2.mozMatchesSelector || elProto2.msMatchesSelector || function(selector) {
          var doc = this.document || this.ownerDocument;
          return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
        };
        function matches(element, selector) {
          return matchSelector.call(element, selector);
        }
        module2.exports = matches;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(1);
        function toArray(arrayLike) {
          var arr;
          try {
            arr = Array.prototype.slice.call(arrayLike);
          } catch (e2) {
            arr = [];
            forEachArray2(arrayLike, function(value) {
              arr.push(value);
            });
          }
          return arr;
        }
        module2.exports = toArray;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(1);
        var inArray = __webpack_require__(0);
        var getClass = __webpack_require__(18);
        var setClassName = __webpack_require__(19);
        function removeClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var origin, newClass;
          if (classList) {
            forEachArray2(cssClass, function(name) {
              classList.remove(name);
            });
            return;
          }
          origin = getClass(element).split(/\s+/);
          newClass = [];
          forEachArray2(origin, function(name) {
            if (inArray(name, cssClass) < 0) {
              newClass.push(name);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = removeClass;
      },
      function(module2, exports2, __webpack_require__) {
        function isNumber2(obj) {
          return typeof obj === "number" || obj instanceof Number;
        }
        module2.exports = isNumber2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEachArray2 = __webpack_require__(1);
        var CustomEvents2 = __webpack_require__(8);
        var defineClass = __webpack_require__(9);
        var extend2 = __webpack_require__(2);
        var on2 = __webpack_require__(10);
        var off = __webpack_require__(11);
        var closest = __webpack_require__(12);
        var removeElement = __webpack_require__(13);
        var isHTMLNode = __webpack_require__(14);
        var util = __webpack_require__(15);
        var tmpl = __webpack_require__(37);
        var SELECTOR_UP_BUTTON = ".tui-timepicker-btn-up";
        var SELECTOR_DOWN_BUTTON = ".tui-timepicker-btn-down";
        var Spinbox = defineClass(
          {
            init: function(container, options) {
              options = extend2(
                {
                  items: []
                },
                options
              );
              this._container = isHTMLNode(container) ? container : document.querySelector(container);
              this._element = null;
              this._inputElement = null;
              this._items = options.items;
              this._disabledItems = options.disabledItems || [];
              this._selectedIndex = Math.max(0, inArray(options.initialValue, this._items));
              this._format = options.format;
              this._render();
              this._setEvents();
            },
            _render: function() {
              var index = inArray(this.getValue(), this._items);
              var context;
              if (this._disabledItems[index]) {
                this._selectedIndex = this._findEnabledIndex();
              }
              context = {
                maxLength: this._getMaxLength(),
                initialValue: this.getValue(),
                format: this._format,
                formatTime: util.formatTime
              };
              this._container.innerHTML = tmpl(context);
              this._element = this._container.firstChild;
              this._inputElement = this._element.querySelector("input");
            },
            _findEnabledIndex: function() {
              return inArray(false, this._disabledItems);
            },
            _getMaxLength: function() {
              var lengths = [];
              forEachArray2(this._items, function(item) {
                lengths.push(String(item).length);
              });
              return Math.max.apply(null, lengths);
            },
            setDisabledItems: function(disabledItems) {
              this._disabledItems = disabledItems;
              this._changeToInputValue();
            },
            _setEvents: function() {
              on2(this._container, "click", this._onClickHandler, this);
              on2(this._inputElement, "keydown", this._onKeydownInputElement, this);
              on2(this._inputElement, "change", this._onChangeHandler, this);
              this.on(
                "changeItems",
                function(items) {
                  this._items = items;
                  this._render();
                },
                this
              );
            },
            _removeEvents: function() {
              this.off();
              off(this._container, "click", this._onClickHandler, this);
              off(this._inputElement, "keydown", this._onKeydownInputElement, this);
              off(this._inputElement, "change", this._onChangeHandler, this);
            },
            _onClickHandler: function(ev) {
              var target = util.getTarget(ev);
              if (closest(target, SELECTOR_DOWN_BUTTON)) {
                this._setNextValue(true);
              } else if (closest(target, SELECTOR_UP_BUTTON)) {
                this._setNextValue(false);
              }
            },
            _setNextValue: function(isDown) {
              var index = this._selectedIndex;
              if (isDown) {
                index = index ? index - 1 : this._items.length - 1;
              } else {
                index = index < this._items.length - 1 ? index + 1 : 0;
              }
              if (this._disabledItems[index]) {
                this._selectedIndex = index;
                this._setNextValue(isDown);
              } else {
                this.setValue(this._items[index]);
              }
            },
            _onKeydownInputElement: function(ev) {
              var keyCode = ev.which || ev.keyCode;
              var isDown;
              if (closest(util.getTarget(ev), "input")) {
                switch (keyCode) {
                  case 38:
                    isDown = false;
                    break;
                  case 40:
                    isDown = true;
                    break;
                  default:
                    return;
                }
                this._setNextValue(isDown);
              }
            },
            _onChangeHandler: function(ev) {
              if (closest(util.getTarget(ev), "input")) {
                this._changeToInputValue();
              }
            },
            _changeToInputValue: function(silent) {
              var newValue = Number(this._inputElement.value);
              var newIndex = inArray(newValue, this._items);
              if (this._disabledItems[newIndex]) {
                newIndex = this._findEnabledIndex();
                newValue = this._items[newIndex];
              } else if (newIndex === this._selectedIndex) {
                return;
              }
              if (newIndex === -1) {
                this.setValue(this._items[this._selectedIndex], silent);
              } else {
                this._selectedIndex = newIndex;
                if (!silent) {
                  this.fire("change", {
                    value: newValue
                  });
                }
              }
            },
            setValue: function(value, silent) {
              this._inputElement.value = util.formatTime(value, this._format);
              this._changeToInputValue(silent);
            },
            getValue: function() {
              return this._items[this._selectedIndex];
            },
            destroy: function() {
              this._removeEvents();
              removeElement(this._element);
              this._container = this._element = this._inputElement = this._items = this._selectedIndex = null;
            }
          }
        );
        CustomEvents2.mixin(Spinbox);
        module2.exports = Spinbox;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(5);
        var imagePing2 = __webpack_require__(36);
        var ms7days2 = 7 * 24 * 60 * 60 * 1e3;
        function isExpired2(date2) {
          var now = new Date().getTime();
          return now - date2 > ms7days2;
        }
        function sendHostname2(appName, trackingId) {
          var url = "https://www.google-analytics.com/collect";
          var hostname = location.hostname;
          var hitType = "event";
          var eventCategory = "use";
          var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
          var date2 = window.localStorage.getItem(applicationKeyForStorage);
          if (!isUndefined2(window.tui) && window.tui.usageStatistics === false) {
            return;
          }
          if (date2 && !isExpired2(date2)) {
            return;
          }
          window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
          setTimeout(function() {
            if (document.readyState === "interactive" || document.readyState === "complete") {
              imagePing2(url, {
                v: 1,
                t: hitType,
                tid: trackingId,
                cid: hostname,
                dp: hostname,
                dh: appName,
                el: appName,
                ec: eventCategory
              });
            }
          }, 1e3);
        }
        module2.exports = sendHostname2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachOwnProperties2 = __webpack_require__(16);
        function imagePing2(url, trackingInfo) {
          var trackingElement = document.createElement("img");
          var queryString = "";
          forEachOwnProperties2(trackingInfo, function(value, key) {
            queryString += "&" + key + "=" + value;
          });
          queryString = queryString.substring(1);
          trackingElement.src = url + "?" + queryString;
          trackingElement.style.display = "none";
          document.body.appendChild(trackingElement);
          document.body.removeChild(trackingElement);
          return trackingElement;
        }
        module2.exports = imagePing2;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '<div class="tui-timepicker-btn-area">  <input type="text" class="tui-timepicker-spinbox-input"        maxlength="{{maxLength}}"        size="{{maxLength}}"        value="{{formatTime initialValue format}}"        aria-label="TimePicker spinbox value">  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-up">    <span class="tui-ico-t-btn">Increase</span>  </button>  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-down">    <span class="tui-ico-t-btn">Decrease</span>  </button></div>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var defineClass = __webpack_require__(9);
        var extend2 = __webpack_require__(2);
        var on2 = __webpack_require__(10);
        var off = __webpack_require__(11);
        var closest = __webpack_require__(12);
        var removeElement = __webpack_require__(13);
        var isHTMLNode = __webpack_require__(14);
        var util = __webpack_require__(15);
        var tmpl = __webpack_require__(39);
        var Selectbox = defineClass(
          {
            init: function(container, options) {
              options = extend2(
                {
                  items: []
                },
                options
              );
              this._container = isHTMLNode(container) ? container : document.querySelector(container);
              this._items = options.items || [];
              this._disabledItems = options.disabledItems || [];
              this._selectedIndex = Math.max(0, inArray(options.initialValue, this._items));
              this._format = options.format;
              this._element = null;
              this._render();
              this._setEvents();
            },
            _render: function() {
              var context;
              this._changeEnabledIndex();
              context = {
                items: this._items,
                format: this._format,
                initialValue: this.getValue(),
                disabledItems: this._disabledItems,
                formatTime: util.formatTime,
                equals: function(a2, b2) {
                  return a2 === b2;
                }
              };
              if (this._element) {
                this._removeElement();
              }
              this._container.innerHTML = tmpl(context);
              this._element = this._container.firstChild;
              on2(this._element, "change", this._onChangeHandler, this);
            },
            _changeEnabledIndex: function() {
              var index = inArray(this.getValue(), this._items);
              if (this._disabledItems[index]) {
                this._selectedIndex = inArray(false, this._disabledItems);
              }
            },
            setDisabledItems: function(disabledItems) {
              this._disabledItems = disabledItems;
              this._render();
            },
            _setEvents: function() {
              this.on(
                "changeItems",
                function(items) {
                  this._items = items;
                  this._render();
                },
                this
              );
            },
            _removeEvents: function() {
              this.off();
            },
            _removeElement: function() {
              off(this._element, "change", this._onChangeHandler, this);
              removeElement(this._element);
            },
            _onChangeHandler: function(ev) {
              if (closest(util.getTarget(ev), "select")) {
                this._setNewValue();
              }
            },
            _setNewValue: function(silent) {
              var newValue = Number(this._element.value);
              this._selectedIndex = inArray(newValue, this._items);
              if (!silent) {
                this.fire("change", {
                  value: newValue
                });
              }
            },
            getValue: function() {
              return this._items[this._selectedIndex];
            },
            setValue: function(value, silent) {
              var newIndex = inArray(value, this._items);
              if (newIndex > -1 && newIndex !== this._selectedIndex) {
                this._selectedIndex = newIndex;
                this._element.value = value;
                this._setNewValue(silent);
              }
            },
            destroy: function() {
              this._removeEvents();
              this._removeElement();
              this._container = this._items = this._selectedIndex = this._element = null;
            }
          }
        );
        CustomEvents2.mixin(Selectbox);
        module2.exports = Selectbox;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '<select class="tui-timepicker-select" aria-label="Time">  {{each items}}    {{if equals initialValue @this}}      <option value="{{@this}}" selected {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>    {{else}}      <option value="{{@this}}" {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>    {{/if}}  {{/each}}</select>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          en: {
            am: "AM",
            pm: "PM"
          },
          ko: {
            am: "\uC624\uC804",
            pm: "\uC624\uD6C4"
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '<div class="tui-timepicker">  <div class="tui-timepicker-body">    <div class="tui-timepicker-row">      {{if isSpinbox}}        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-hour"></div>        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-minute"></div>        {{if showMeridiem}}          {{meridiemElement}}        {{/if}}      {{else}}        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-hour"></div>        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-minute"></div>        {{if showMeridiem}}          {{meridiemElement}}        {{/if}}      {{/if}}    </div>  </div></div>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '{{if isSpinbox}}  <div class="tui-timepicker-column tui-timepicker-checkbox tui-timepicker-meridiem">    <div class="tui-timepicker-check-area">      <ul class="tui-timepicker-check-lst">        <li class="tui-timepicker-check">          <div class="tui-timepicker-radio">            <input type="radio"                  name="optionsRadios-{{radioId}}"                  value="AM"                  class="tui-timepicker-radio-am"                  id="tui-timepicker-radio-am-{{radioId}}">            <label for="tui-timepicker-radio-am-{{radioId}}" class="tui-timepicker-radio-label">              <span class="tui-timepicker-input-radio"></span>{{am}}            </label>          </div>        </li>        <li class="tui-timepicker-check">          <div class="tui-timepicker-radio">            <input type="radio"                  name="optionsRadios-{{radioId}}"                  value="PM"                  class="tui-timepicker-radio-pm"                  id="tui-timepicker-radio-pm-{{radioId}}">            <label for="tui-timepicker-radio-pm-{{radioId}}" class="tui-timepicker-radio-label">              <span class="tui-timepicker-input-radio"></span>{{pm}}            </label>          </div>        </li>      </ul>    </div>  </div>{{else}}  <div class="tui-timepicker-column tui-timepicker-selectbox tui-is-add-picker tui-timepicker-meridiem">    <select class="tui-timepicker-select" aria-label="AM/PM">      <option value="AM">{{am}}</option>      <option value="PM">{{pm}}</option>    </select>  </div>{{/if}}';
          return template(source, context);
        };
      }
    ]);
  });
})(tuiTimePicker);
/*!
 * TOAST UI Date Picker
 * @version 4.3.3
 * @author NHN Cloud. FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(tuiTimePicker.exports);
  })(window, function(__WEBPACK_EXTERNAL_MODULE__43__) {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "dist";
      return __webpack_require__(__webpack_require__.s = 34);
    }([
      function(module2, exports2, __webpack_require__) {
        var inherit = __webpack_require__(35);
        var extend2 = __webpack_require__(7);
        function defineClass(parent, props) {
          var obj;
          if (!props) {
            props = parent;
            parent = null;
          }
          obj = props.init || function() {
          };
          if (parent) {
            inherit(obj, parent);
          }
          if (props.hasOwnProperty("static")) {
            extend2(obj, props["static"]);
            delete props["static"];
          }
          extend2(obj.prototype, props);
          return obj;
        }
        module2.exports = defineClass;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          TYPE_DATE: "date",
          TYPE_MONTH: "month",
          TYPE_YEAR: "year",
          TYPE_HOUR: "hour",
          TYPE_MINUTE: "minute",
          TYPE_MERIDIEM: "meridiem",
          MIN_DATE: new Date(1900, 0, 1),
          MAX_DATE: new Date(2999, 11, 31),
          DEFAULT_LANGUAGE_TYPE: "en",
          CLASS_NAME_SELECTED: "tui-is-selected",
          CLASS_NAME_PREV_MONTH_BTN: "tui-calendar-btn-prev-month",
          CLASS_NAME_PREV_YEAR_BTN: "tui-calendar-btn-prev-year",
          CLASS_NAME_NEXT_YEAR_BTN: "tui-calendar-btn-next-year",
          CLASS_NAME_NEXT_MONTH_BTN: "tui-calendar-btn-next-month",
          CLASS_NAME_TITLE_TODAY: "tui-calendar-title-today",
          DEFAULT_WEEK_START_DAY: "Sun",
          WEEK_START_DAY_MAP: {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        function forEachArray2(arr, iteratee, context) {
          var index = 0;
          var len = arr.length;
          context = context || null;
          for (; index < len; index += 1) {
            if (iteratee.call(context, arr[index], index, arr) === false) {
              break;
            }
          }
        }
        module2.exports = forEachArray2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(6);
        function inArray(searchElement, array2, startIndex) {
          var i2;
          var length;
          startIndex = startIndex || 0;
          if (!isArray2(array2)) {
            return -1;
          }
          if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(array2, searchElement, startIndex);
          }
          length = array2.length;
          for (i2 = startIndex; startIndex >= 0 && i2 < length; i2 += 1) {
            if (array2[i2] === searchElement) {
              return i2;
            }
          }
          return -1;
        }
        module2.exports = inArray;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var isHTMLNode = __webpack_require__(46);
        var sendHostname2 = __webpack_require__(47);
        var currentId = 0;
        var utils = {
          getTarget: function(ev) {
            return ev.target || ev.srcElement;
          },
          getElement: function(param) {
            return isHTMLNode(param) ? param : document.querySelector(param);
          },
          getSelector: function(elem) {
            var selector = "";
            if (elem.id) {
              selector = "#" + elem.id;
            } else if (elem.className) {
              selector = "." + elem.className.split(" ")[0];
            }
            return selector;
          },
          generateId: function() {
            currentId += 1;
            return currentId;
          },
          filter: function(arr, iteratee) {
            var result = [];
            forEachArray2(arr, function(item) {
              if (iteratee(item)) {
                result.push(item);
              }
            });
            return result;
          },
          sendHostName: function() {
            sendHostname2("date-picker", "UA-129987462-1");
          }
        };
        module2.exports = utils;
      },
      function(module2, exports2, __webpack_require__) {
        var isDate = __webpack_require__(28);
        var isNumber2 = __webpack_require__(15);
        var constants = __webpack_require__(1);
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var utils = {
          getWeeksCount: function(year, month) {
            var firstDay = utils.getFirstDay(year, month), lastDate = utils.getLastDayInMonth(year, month);
            return Math.ceil((firstDay + lastDate) / 7);
          },
          isValidDate: function(date2) {
            return isDate(date2) && !isNaN(date2.getTime());
          },
          getFirstDay: function(year, month) {
            return new Date(year, month - 1, 1).getDay();
          },
          getFirstDayTimestamp: function(year, month) {
            return new Date(year, month, 1).getTime();
          },
          getLastDayInMonth: function(year, month) {
            return new Date(year, month, 0).getDate();
          },
          prependLeadingZero: function(number) {
            var prefix = "";
            if (number < 10) {
              prefix = "0";
            }
            return prefix + number;
          },
          getMeridiemHour: function(hour) {
            hour %= 12;
            if (hour === 0) {
              hour = 12;
            }
            return hour;
          },
          getSafeNumber: function(any, defaultNumber) {
            if (isNaN(defaultNumber) || !isNumber2(defaultNumber)) {
              throw Error("The defaultNumber must be a valid number.");
            }
            if (isNaN(any)) {
              return defaultNumber;
            }
            return Number(any);
          },
          getDateOfWeek: function(year, month, weekNumber, dayNumber) {
            var firstDayOfMonth = new Date(year, month - 1).getDay();
            var dateOffset = firstDayOfMonth - dayNumber - 1;
            return new Date(year, month - 1, weekNumber * 7 - dateOffset);
          },
          getRangeArr: function(start, end) {
            var arr = [];
            var i2;
            if (start > end) {
              for (i2 = end; i2 >= start; i2 -= 1) {
                arr.push(i2);
              }
            } else {
              for (i2 = start; i2 <= end; i2 += 1) {
                arr.push(i2);
              }
            }
            return arr;
          },
          cloneWithStartOf: function(date2, type) {
            type = type || TYPE_DATE;
            date2 = new Date(date2);
            date2.setHours(0, 0, 0, 0);
            switch (type) {
              case TYPE_DATE:
                break;
              case TYPE_MONTH:
                date2.setDate(1);
                break;
              case TYPE_YEAR:
                date2.setMonth(0, 1);
                break;
              default:
                throw Error("Unsupported type: " + type);
            }
            return date2;
          },
          cloneWithEndOf: function(date2, type) {
            type = type || TYPE_DATE;
            date2 = new Date(date2);
            date2.setHours(23, 59, 59, 999);
            switch (type) {
              case TYPE_DATE:
                break;
              case TYPE_MONTH:
                date2.setMonth(date2.getMonth() + 1, 0);
                break;
              case TYPE_YEAR:
                date2.setMonth(11, 31);
                break;
              default:
                throw Error("Unsupported type: " + type);
            }
            return date2;
          },
          compare: function(dateA, dateB, cmpLevel) {
            var aTimestamp, bTimestamp;
            if (!(utils.isValidDate(dateA) && utils.isValidDate(dateB))) {
              return NaN;
            }
            if (!cmpLevel) {
              aTimestamp = dateA.getTime();
              bTimestamp = dateB.getTime();
            } else {
              aTimestamp = utils.cloneWithStartOf(dateA, cmpLevel).getTime();
              bTimestamp = utils.cloneWithStartOf(dateB, cmpLevel).getTime();
            }
            if (aTimestamp > bTimestamp) {
              return 1;
            }
            return aTimestamp === bTimestamp ? 0 : -1;
          },
          isSame: function(dateA, dateB, cmpLevel) {
            return utils.compare(dateA, dateB, cmpLevel) === 0;
          },
          inRange: function(start, end, target, cmpLevel) {
            return utils.compare(start, target, cmpLevel) < 1 && utils.compare(end, target, cmpLevel) > -1;
          }
        };
        module2.exports = utils;
      },
      function(module2, exports2, __webpack_require__) {
        function isArray2(obj) {
          return obj instanceof Array;
        }
        module2.exports = isArray2;
      },
      function(module2, exports2, __webpack_require__) {
        function extend2(target, objects) {
          var hasOwnProp = Object.prototype.hasOwnProperty;
          var source, prop, i2, len;
          for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
            source = arguments[i2];
            for (prop in source) {
              if (hasOwnProp.call(source, prop)) {
                target[prop] = source[prop];
              }
            }
          }
          return target;
        }
        module2.exports = extend2;
      },
      function(module2, exports2, __webpack_require__) {
        var extend2 = __webpack_require__(7);
        var isExisty2 = __webpack_require__(37);
        var isString2 = __webpack_require__(13);
        var isObject2 = __webpack_require__(22);
        var isArray2 = __webpack_require__(6);
        var isFunction2 = __webpack_require__(39);
        var forEach2 = __webpack_require__(9);
        var R_EVENTNAME_SPLIT2 = /\s+/g;
        function CustomEvents2() {
          this.events = null;
          this.contexts = null;
        }
        CustomEvents2.mixin = function(func) {
          extend2(func.prototype, CustomEvents2.prototype);
        };
        CustomEvents2.prototype._getHandlerItem = function(handler, context) {
          var item = { handler };
          if (context) {
            item.context = context;
          }
          return item;
        };
        CustomEvents2.prototype._safeEvent = function(eventName) {
          var events = this.events;
          var byName;
          if (!events) {
            events = this.events = {};
          }
          if (eventName) {
            byName = events[eventName];
            if (!byName) {
              byName = [];
              events[eventName] = byName;
            }
            events = byName;
          }
          return events;
        };
        CustomEvents2.prototype._safeContext = function() {
          var context = this.contexts;
          if (!context) {
            context = this.contexts = [];
          }
          return context;
        };
        CustomEvents2.prototype._indexOfContext = function(ctx) {
          var context = this._safeContext();
          var index = 0;
          while (context[index]) {
            if (ctx === context[index][0]) {
              return index;
            }
            index += 1;
          }
          return -1;
        };
        CustomEvents2.prototype._memorizeContext = function(ctx) {
          var context, index;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          index = this._indexOfContext(ctx);
          if (index > -1) {
            context[index][1] += 1;
          } else {
            context.push([ctx, 1]);
          }
        };
        CustomEvents2.prototype._forgetContext = function(ctx) {
          var context, contextIndex;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          contextIndex = this._indexOfContext(ctx);
          if (contextIndex > -1) {
            context[contextIndex][1] -= 1;
            if (context[contextIndex][1] <= 0) {
              context.splice(contextIndex, 1);
            }
          }
        };
        CustomEvents2.prototype._bindEvent = function(eventName, handler, context) {
          var events = this._safeEvent(eventName);
          this._memorizeContext(context);
          events.push(this._getHandlerItem(handler, context));
        };
        CustomEvents2.prototype.on = function(eventName, handler, context) {
          var self2 = this;
          if (isString2(eventName)) {
            eventName = eventName.split(R_EVENTNAME_SPLIT2);
            forEach2(eventName, function(name) {
              self2._bindEvent(name, handler, context);
            });
          } else if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.on(name, func, context);
            });
          }
        };
        CustomEvents2.prototype.once = function(eventName, handler, context) {
          var self2 = this;
          if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.once(name, func, context);
            });
            return;
          }
          function onceHandler() {
            handler.apply(context, arguments);
            self2.off(eventName, onceHandler, context);
          }
          this.on(eventName, onceHandler, context);
        };
        CustomEvents2.prototype._spliceMatches = function(arr, predicate) {
          var i2 = 0;
          var len;
          if (!isArray2(arr)) {
            return;
          }
          for (len = arr.length; i2 < len; i2 += 1) {
            if (predicate(arr[i2]) === true) {
              arr.splice(i2, 1);
              len -= 1;
              i2 -= 1;
            }
          }
        };
        CustomEvents2.prototype._matchHandler = function(handler) {
          var self2 = this;
          return function(item) {
            var needRemove = handler === item.handler;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchContext = function(context) {
          var self2 = this;
          return function(item) {
            var needRemove = context === item.context;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchHandlerAndContext = function(handler, context) {
          var self2 = this;
          return function(item) {
            var matchHandler = handler === item.handler;
            var matchContext = context === item.context;
            var needRemove = matchHandler && matchContext;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._offByEventName = function(eventName, handler) {
          var self2 = this;
          var andByHandler = isFunction2(handler);
          var matchHandler = self2._matchHandler(handler);
          eventName = eventName.split(R_EVENTNAME_SPLIT2);
          forEach2(eventName, function(name) {
            var handlerItems = self2._safeEvent(name);
            if (andByHandler) {
              self2._spliceMatches(handlerItems, matchHandler);
            } else {
              forEach2(handlerItems, function(item) {
                self2._forgetContext(item.context);
              });
              self2.events[name] = [];
            }
          });
        };
        CustomEvents2.prototype._offByHandler = function(handler) {
          var self2 = this;
          var matchHandler = this._matchHandler(handler);
          forEach2(this._safeEvent(), function(handlerItems) {
            self2._spliceMatches(handlerItems, matchHandler);
          });
        };
        CustomEvents2.prototype._offByObject = function(obj, handler) {
          var self2 = this;
          var matchFunc;
          if (this._indexOfContext(obj) < 0) {
            forEach2(obj, function(func, name) {
              self2.off(name, func);
            });
          } else if (isString2(handler)) {
            matchFunc = this._matchContext(obj);
            self2._spliceMatches(this._safeEvent(handler), matchFunc);
          } else if (isFunction2(handler)) {
            matchFunc = this._matchHandlerAndContext(handler, obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          } else {
            matchFunc = this._matchContext(obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          }
        };
        CustomEvents2.prototype.off = function(eventName, handler) {
          if (isString2(eventName)) {
            this._offByEventName(eventName, handler);
          } else if (!arguments.length) {
            this.events = {};
            this.contexts = [];
          } else if (isFunction2(eventName)) {
            this._offByHandler(eventName);
          } else if (isObject2(eventName)) {
            this._offByObject(eventName, handler);
          }
        };
        CustomEvents2.prototype.fire = function(eventName) {
          this.invoke.apply(this, arguments);
        };
        CustomEvents2.prototype.invoke = function(eventName) {
          var events, args, index, item;
          if (!this.hasListener(eventName)) {
            return true;
          }
          events = this._safeEvent(eventName);
          args = Array.prototype.slice.call(arguments, 1);
          index = 0;
          while (events[index]) {
            item = events[index];
            if (item.handler.apply(item.context, args) === false) {
              return false;
            }
            index += 1;
          }
          return true;
        };
        CustomEvents2.prototype.hasListener = function(eventName) {
          return this.getListenerLength(eventName) > 0;
        };
        CustomEvents2.prototype.getListenerLength = function(eventName) {
          var events = this._safeEvent(eventName);
          return events.length;
        };
        module2.exports = CustomEvents2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(6);
        var forEachArray2 = __webpack_require__(2);
        var forEachOwnProperties2 = __webpack_require__(23);
        function forEach2(obj, iteratee, context) {
          if (isArray2(obj)) {
            forEachArray2(obj, iteratee, context);
          } else {
            forEachOwnProperties2(obj, iteratee, context);
          }
        }
        module2.exports = forEach2;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          en: {
            titles: {
              DD: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              D: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              MMMM: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]
            },
            titleFormat: "MMMM yyyy",
            todayFormat: "To\\d\\ay: DD, MMMM d, yyyy",
            time: "Time",
            date: "Date"
          },
          ko: {
            titles: {
              DD: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"],
              D: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
              MMM: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
              MMMM: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"]
            },
            titleFormat: "yyyy.MM",
            todayFormat: "\uC624\uB298: yyyy.MM.dd (D)",
            date: "\uB0A0\uC9DC",
            time: "\uC2DC\uAC04"
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var forEach2 = __webpack_require__(9);
        var isArray2 = __webpack_require__(6);
        var isString2 = __webpack_require__(13);
        var extend2 = __webpack_require__(7);
        var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
        var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
        var BRACKET_REGEXP = /\[\s?|\s?\]/;
        var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
        var DOT_REGEXP = /\./;
        var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
        var STRING_REGEXP = /"|'/g;
        var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
        var EXPRESSION_INTERVAL = 2;
        var BLOCK_HELPERS = {
          "if": handleIf,
          "each": handleEach,
          "with": handleWith
        };
        var isValidSplit = "a".split(/a/).length === 3;
        var splitByRegExp = function() {
          if (isValidSplit) {
            return function(text, regexp) {
              return text.split(regexp);
            };
          }
          return function(text, regexp) {
            var result = [];
            var prevIndex = 0;
            var match, index;
            if (!regexp.global) {
              regexp = new RegExp(regexp, "g");
            }
            match = regexp.exec(text);
            while (match !== null) {
              index = match.index;
              result.push(text.slice(prevIndex, index));
              prevIndex = index + match[0].length;
              match = regexp.exec(text);
            }
            result.push(text.slice(prevIndex));
            return result;
          };
        }();
        function getValueFromContext(exp, context) {
          var splitedExps;
          var value = context[exp];
          if (exp === "true") {
            value = true;
          } else if (exp === "false") {
            value = false;
          } else if (STRING_NOTATION_REGEXP.test(exp)) {
            value = exp.replace(STRING_REGEXP, "");
          } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(BRACKET_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
          } else if (DOT_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(DOT_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
          } else if (NUMBER_REGEXP.test(exp)) {
            value = parseFloat(exp);
          }
          return value;
        }
        function extractElseif(ifExps, sourcesInsideBlock) {
          var exps = [ifExps];
          var sourcesInsideIf = [];
          var otherIfCount = 0;
          var start = 0;
          forEach2(sourcesInsideBlock, function(source, index) {
            if (source.indexOf("if") === 0) {
              otherIfCount += 1;
            } else if (source === "/if") {
              otherIfCount -= 1;
            } else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
              exps.push(source === "else" ? ["true"] : source.split(" ").slice(1));
              sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
              start = index + 1;
            }
          });
          sourcesInsideIf.push(sourcesInsideBlock.slice(start));
          return {
            exps,
            sourcesInsideIf
          };
        }
        function handleIf(exps, sourcesInsideBlock, context) {
          var analyzed = extractElseif(exps, sourcesInsideBlock);
          var result = false;
          var compiledSource = "";
          forEach2(analyzed.exps, function(exp, index) {
            result = handleExpression(exp, context);
            if (result) {
              compiledSource = compile(analyzed.sourcesInsideIf[index], context);
            }
            return !result;
          });
          return compiledSource;
        }
        function handleEach(exps, sourcesInsideBlock, context) {
          var collection = handleExpression(exps, context);
          var additionalKey = isArray2(collection) ? "@index" : "@key";
          var additionalContext = {};
          var result = "";
          forEach2(collection, function(item, key) {
            additionalContext[additionalKey] = key;
            additionalContext["@this"] = item;
            extend2(context, additionalContext);
            result += compile(sourcesInsideBlock.slice(), context);
          });
          return result;
        }
        function handleWith(exps, sourcesInsideBlock, context) {
          var asIndex = inArray("as", exps);
          var alias = exps[asIndex + 1];
          var result = handleExpression(exps.slice(0, asIndex), context);
          var additionalContext = {};
          additionalContext[alias] = result;
          return compile(sourcesInsideBlock, extend2(context, additionalContext)) || "";
        }
        function extractSourcesInsideBlock(sources, start, end) {
          var sourcesInsideBlock = sources.splice(start + 1, end - start);
          sourcesInsideBlock.pop();
          return sourcesInsideBlock;
        }
        function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
          var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
          var helperCount = 1;
          var startBlockIndex = 0;
          var endBlockIndex;
          var index = startBlockIndex + EXPRESSION_INTERVAL;
          var expression = sourcesToEnd[index];
          while (helperCount && isString2(expression)) {
            if (expression.indexOf(helperKeyword) === 0) {
              helperCount += 1;
            } else if (expression.indexOf("/" + helperKeyword) === 0) {
              helperCount -= 1;
              endBlockIndex = index;
            }
            index += EXPRESSION_INTERVAL;
            expression = sourcesToEnd[index];
          }
          if (helperCount) {
            throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
          }
          sourcesToEnd[startBlockIndex] = executeBlockHelper(
            sourcesToEnd[startBlockIndex].split(" ").slice(1),
            extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex),
            context
          );
          return sourcesToEnd;
        }
        function handleExpression(exps, context) {
          var result = getValueFromContext(exps[0], context);
          if (result instanceof Function) {
            return executeFunction(result, exps.slice(1), context);
          }
          return result;
        }
        function executeFunction(helper, argExps, context) {
          var args = [];
          forEach2(argExps, function(exp) {
            args.push(getValueFromContext(exp, context));
          });
          return helper.apply(null, args);
        }
        function compile(sources, context) {
          var index = 1;
          var expression = sources[index];
          var exps, firstExp, result;
          while (isString2(expression)) {
            exps = expression.split(" ");
            firstExp = exps[0];
            if (BLOCK_HELPERS[firstExp]) {
              result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
              sources = sources.concat(result);
            } else {
              sources[index] = handleExpression(exps, context);
            }
            index += EXPRESSION_INTERVAL;
            expression = sources[index];
          }
          return sources.join("");
        }
        function template(text, context) {
          return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
        }
        module2.exports = template;
      },
      function(module2, exports2, __webpack_require__) {
        function isUndefined2(obj) {
          return obj === void 0;
        }
        module2.exports = isUndefined2;
      },
      function(module2, exports2, __webpack_require__) {
        function isString2(obj) {
          return typeof obj === "string" || obj instanceof String;
        }
        module2.exports = isString2;
      },
      function(module2, exports2, __webpack_require__) {
        function removeElement(element) {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
        module2.exports = removeElement;
      },
      function(module2, exports2, __webpack_require__) {
        function isNumber2(obj) {
          return typeof obj === "number" || obj instanceof Number;
        }
        module2.exports = isNumber2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEach2 = __webpack_require__(9);
        var inArray = __webpack_require__(3);
        var getClass = __webpack_require__(17);
        var setClassName = __webpack_require__(24);
        function addClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var newClass = [];
          var origin;
          if (classList) {
            forEach2(cssClass, function(name) {
              element.classList.add(name);
            });
            return;
          }
          origin = getClass(element);
          if (origin) {
            cssClass = [].concat(origin.split(/\s+/), cssClass);
          }
          forEach2(cssClass, function(cls2) {
            if (inArray(cls2, newClass) < 0) {
              newClass.push(cls2);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = addClass;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(12);
        function getClass(element) {
          if (!element || !element.className) {
            return "";
          }
          if (isUndefined2(element.className.baseVal)) {
            return element.className;
          }
          return element.className.baseVal;
        }
        module2.exports = getClass;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var inArray = __webpack_require__(3);
        var getClass = __webpack_require__(17);
        var setClassName = __webpack_require__(24);
        function removeClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var origin, newClass;
          if (classList) {
            forEachArray2(cssClass, function(name) {
              classList.remove(name);
            });
            return;
          }
          origin = getClass(element).split(/\s+/);
          newClass = [];
          forEachArray2(origin, function(name) {
            if (inArray(name, cssClass) < 0) {
              newClass.push(name);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = removeClass;
      },
      function(module2, exports2, __webpack_require__) {
        var on2 = __webpack_require__(31);
        var off = __webpack_require__(33);
        var mouseTouchEvent = {
          _isMobile: function() {
            return /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
              navigator.userAgent
            );
          }(),
          _getEventType: function(type) {
            if (this._isMobile) {
              if (type === "mousedown") {
                type = "touchstart";
              } else if (type === "click") {
                type = "touchend";
              }
            }
            return type;
          },
          on: function(element, type, handler, context) {
            on2(element, this._getEventType(type), handler, context);
          },
          off: function(element, type, handler) {
            off(element, this._getEventType(type), handler);
          }
        };
        module2.exports = mouseTouchEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var removeElement = __webpack_require__(14);
        var localeText = __webpack_require__(10);
        var DEFAULT_LANGUAGE_TYPE = __webpack_require__(1).DEFAULT_LANGUAGE_TYPE;
        var LayerBase = defineClass(
          {
            init: function(language) {
              language = language || DEFAULT_LANGUAGE_TYPE;
              this._element = null;
              this._localeText = localeText[language];
              this._type = "base";
            },
            _makeContext: function() {
              throwOverrideError(this.getType(), "_makeContext");
            },
            render: function() {
              throwOverrideError(this.getType(), "render");
            },
            getDateElements: function() {
              throwOverrideError(this.getType(), "getDateElements");
            },
            getType: function() {
              return this._type;
            },
            changeLanguage: function(language) {
              this._localeText = localeText[language];
            },
            remove: function() {
              if (this._element) {
                removeElement(this._element);
              }
              this._element = null;
            }
          }
        );
        function throwOverrideError(layerType, methodName) {
          throw new Error(layerType + ' layer does not have the "' + methodName + '" method.');
        }
        module2.exports = LayerBase;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var addClass = __webpack_require__(16);
        var closest = __webpack_require__(25);
        var getData = __webpack_require__(26);
        var hasClass = __webpack_require__(27);
        var removeClass = __webpack_require__(18);
        var removeElement = __webpack_require__(14);
        var extend2 = __webpack_require__(7);
        var isArray2 = __webpack_require__(6);
        var isDate = __webpack_require__(28);
        var isNumber2 = __webpack_require__(15);
        var isObject2 = __webpack_require__(22);
        var TimePicker = __webpack_require__(43);
        var Calendar2 = __webpack_require__(29);
        var RangeModel = __webpack_require__(56);
        var constants = __webpack_require__(1);
        var localeTexts = __webpack_require__(10);
        var dateUtil = __webpack_require__(5);
        var util = __webpack_require__(4);
        var mouseTouchEvent = __webpack_require__(19);
        var tmpl = __webpack_require__(58);
        var DatePickerInput = __webpack_require__(59);
        var DEFAULT_WEEK_START_DAY = constants.DEFAULT_WEEK_START_DAY;
        var DEFAULT_LANGUAGE_TYPE = constants.DEFAULT_LANGUAGE_TYPE;
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var CLASS_NAME_NEXT_YEAR_BTN = constants.CLASS_NAME_NEXT_YEAR_BTN;
        var CLASS_NAME_NEXT_MONTH_BTN = constants.CLASS_NAME_NEXT_MONTH_BTN;
        var CLASS_NAME_PREV_YEAR_BTN = constants.CLASS_NAME_PREV_YEAR_BTN;
        var CLASS_NAME_PREV_MONTH_BTN = constants.CLASS_NAME_PREV_MONTH_BTN;
        var CLASS_NAME_SELECTED = constants.CLASS_NAME_SELECTED;
        var CLASS_NAME_TITLE_TODAY = constants.CLASS_NAME_TITLE_TODAY;
        var CLASS_NAME_SELECTABLE = "tui-is-selectable";
        var CLASS_NAME_BLOCKED = "tui-is-blocked";
        var CLASS_NAME_CHECKED = "tui-is-checked";
        var CLASS_NAME_SELECTOR_BUTTON = "tui-datepicker-selector-button";
        var CLASS_NAME_TODAY = "tui-calendar-today";
        var CLASS_NAME_HIDDEN = "tui-hidden";
        var SELECTOR_BODY = ".tui-datepicker-body";
        var SELECTOR_DATE_ICO = ".tui-ico-date";
        var SELECTOR_CALENDAR_TITLE = ".tui-calendar-title";
        var SELECTOR_CALENDAR_CONTAINER = ".tui-calendar-container";
        var SELECTOR_TIMEPICKER_CONTAINER = ".tui-timepicker-container";
        var mergeDefaultOption = function(option) {
          option = extend2(
            {
              language: DEFAULT_LANGUAGE_TYPE,
              calendar: {},
              input: {
                element: null,
                format: null
              },
              timePicker: null,
              date: null,
              showAlways: false,
              type: TYPE_DATE,
              selectableRanges: null,
              openers: [],
              autoClose: true,
              usageStatistics: true,
              weekStartDay: DEFAULT_WEEK_START_DAY
            },
            option
          );
          option.selectableRanges = option.selectableRanges || [[constants.MIN_DATE, constants.MAX_DATE]];
          if (!isObject2(option.calendar)) {
            throw new Error("Calendar option must be an object");
          }
          if (!isObject2(option.input)) {
            throw new Error("Input option must be an object");
          }
          if (!isArray2(option.selectableRanges)) {
            throw new Error("Selectable-ranges must be a 2d-array");
          }
          option.localeText = localeTexts[option.language];
          option.calendar.language = option.language;
          option.calendar.type = option.type;
          option.timePicker = option.timePicker || option.timepicker;
          return option;
        };
        var DatePicker2 = defineClass(
          {
            static: {
              localeTexts
            },
            init: function(container, options) {
              options = mergeDefaultOption(options);
              this._language = options.language;
              this._container = util.getElement(container);
              this._container.innerHTML = tmpl(
                extend2(options, {
                  isTab: options.timePicker && options.timePicker.layoutType === "tab"
                })
              );
              this._element = this._container.firstChild;
              this._calendar = new Calendar2(
                this._element.querySelector(SELECTOR_CALENDAR_CONTAINER),
                extend2(options.calendar, {
                  usageStatistics: options.usageStatistics,
                  weekStartDay: options.weekStartDay
                })
              );
              this._timePicker = null;
              this._datepickerInput = null;
              this._date = null;
              this._rangeModel = null;
              this._openers = [];
              this._isEnabled = true;
              this._id = "tui-datepicker-" + util.generateId();
              this._type = options.type;
              this.showAlways = options.showAlways;
              this.autoClose = options.autoClose;
              this._initializeDatePicker(options);
            },
            _initializeDatePicker: function(option) {
              this.setRanges(option.selectableRanges);
              this._setEvents();
              this._initTimePicker(option.timePicker, option.usageStatistics);
              this.setInput(option.input.element);
              this.setDateFormat(option.input.format);
              this.setDate(option.date);
              forEachArray2(option.openers, this.addOpener, this);
              if (!this.showAlways) {
                this._hide();
              }
              if (this.getType() === TYPE_DATE) {
                addClass(this._element.querySelector(SELECTOR_BODY), "tui-datepicker-type-date");
              }
            },
            _setEvents: function() {
              mouseTouchEvent.on(this._element, "click", this._onClickHandler, this);
              this._calendar.on("draw", this._onDrawCalendar, this);
            },
            _removeEvents: function() {
              mouseTouchEvent.off(this._element, "click", this._onClickHandler, this);
              this._calendar.off();
            },
            _setDocumentEvents: function() {
              mouseTouchEvent.on(document, "mousedown", this._onMousedownDocument, this);
            },
            _removeDocumentEvents: function() {
              mouseTouchEvent.off(document, "mousedown", this._onMousedownDocument);
            },
            _setOpenerEvents: function(opener) {
              mouseTouchEvent.on(opener, "click", this.toggle, this);
            },
            _removeOpenerEvents: function(opener) {
              mouseTouchEvent.off(opener, "click", this.toggle);
            },
            _initTimePicker: function(opTimePicker, usageStatistics) {
              var layoutType;
              if (!opTimePicker) {
                return;
              }
              layoutType = opTimePicker.layoutType || "";
              if (isObject2(opTimePicker)) {
                opTimePicker.usageStatistics = usageStatistics;
              } else {
                opTimePicker = {
                  usageStatistics
                };
              }
              this._timePicker = new TimePicker(
                this._element.querySelector(SELECTOR_TIMEPICKER_CONTAINER),
                opTimePicker
              );
              if (layoutType.toLowerCase() === "tab") {
                this._timePicker.hide();
              }
              this._timePicker.on(
                "change",
                function(ev) {
                  var prevDate;
                  if (this._date) {
                    prevDate = new Date(this._date);
                    this.setDate(prevDate.setHours(ev.hour, ev.minute));
                  }
                },
                this
              );
            },
            _changePicker: function(target) {
              var btnSelector = "." + CLASS_NAME_SELECTOR_BUTTON;
              var selectedBtn = closest(target, btnSelector);
              var isDateElement = !!selectedBtn.querySelector(SELECTOR_DATE_ICO);
              if (isDateElement) {
                this._calendar.show();
                this._timePicker.hide();
              } else {
                this._calendar.hide();
                this._timePicker.show();
              }
              removeClass(this._element.querySelector("." + CLASS_NAME_CHECKED), CLASS_NAME_CHECKED);
              addClass(selectedBtn, CLASS_NAME_CHECKED);
            },
            _isOpener: function(element) {
              var el = util.getElement(element);
              return inArray(el, this._openers) > -1;
            },
            _setTodayClassName: function(el) {
              var timestamp, isToday;
              if (this.getCalendarType() !== TYPE_DATE) {
                return;
              }
              timestamp = Number(getData(el, "timestamp"));
              isToday = timestamp === new Date().setHours(0, 0, 0, 0);
              if (isToday) {
                addClass(el, CLASS_NAME_TODAY);
              } else {
                removeClass(el, CLASS_NAME_TODAY);
              }
            },
            _setSelectableClassName: function(el) {
              var elDate = new Date(Number(getData(el, "timestamp")));
              if (this._isSelectableOnCalendar(elDate)) {
                addClass(el, CLASS_NAME_SELECTABLE);
                removeClass(el, CLASS_NAME_BLOCKED);
              } else {
                removeClass(el, CLASS_NAME_SELECTABLE);
                addClass(el, CLASS_NAME_BLOCKED);
              }
            },
            _setSelectedClassName: function(el) {
              var elDate = new Date(Number(getData(el, "timestamp")));
              if (this._isSelectedOnCalendar(elDate)) {
                addClass(el, CLASS_NAME_SELECTED);
              } else {
                removeClass(el, CLASS_NAME_SELECTED);
              }
            },
            _isSelectableOnCalendar: function(date2) {
              var type = this.getCalendarType();
              var start = dateUtil.cloneWithStartOf(date2, type).getTime();
              var end = dateUtil.cloneWithEndOf(date2, type).getTime();
              return this._rangeModel.hasOverlap(start, end);
            },
            _isSelectedOnCalendar: function(date2) {
              var curDate = this.getDate();
              var calendarType = this.getCalendarType();
              return curDate && dateUtil.isSame(curDate, date2, calendarType);
            },
            _show: function() {
              removeClass(this._element, CLASS_NAME_HIDDEN);
            },
            _hide: function() {
              addClass(this._element, CLASS_NAME_HIDDEN);
            },
            _syncToInput: function() {
              if (!this._date) {
                return;
              }
              this._datepickerInput.setDate(this._date);
            },
            _syncFromInput: function(shouldRollback) {
              var isFailed = false;
              var date2;
              try {
                date2 = this._datepickerInput.getDate();
                if (this.isSelectable(date2)) {
                  if (this._timePicker) {
                    this._timePicker.setTime(date2.getHours(), date2.getMinutes());
                  }
                  this.setDate(date2);
                } else {
                  isFailed = true;
                }
              } catch (err) {
                this.fire("error", {
                  type: "ParsingError",
                  message: err.message
                });
                isFailed = true;
              } finally {
                if (isFailed) {
                  if (shouldRollback) {
                    this._syncToInput();
                  } else {
                    this.setNull();
                  }
                }
              }
            },
            _onMousedownDocument: function(ev) {
              var target = util.getTarget(ev);
              var selector = util.getSelector(target);
              var isContain = selector ? this._element.querySelector(selector) : false;
              var isInput = this._datepickerInput.is(target);
              var isInOpener = inArray(target, this._openers) > -1;
              var shouldClose = !(this.showAlways || isInput || isContain || isInOpener);
              if (shouldClose) {
                this.close();
              }
            },
            _onClickHandler: function(ev) {
              var target = util.getTarget(ev);
              if (closest(target, "." + CLASS_NAME_SELECTABLE)) {
                ev.preventDefault();
                this._updateDate(target);
              } else if (closest(target, "." + CLASS_NAME_TITLE_TODAY)) {
                ev.preventDefault();
                this._updateDateToToday();
              } else if (closest(target, SELECTOR_CALENDAR_TITLE)) {
                this.drawUpperCalendar(this._date);
              } else if (closest(target, "." + CLASS_NAME_SELECTOR_BUTTON)) {
                this._changePicker(target);
              }
            },
            _updateDateToToday: function() {
              this.setDate(Date.now());
              this.close();
            },
            _updateDate: function(target) {
              var timestamp = Number(getData(target, "timestamp"));
              var newDate = new Date(timestamp);
              var timePicker = this._timePicker;
              var prevDate = this._date;
              var calendarType = this.getCalendarType();
              var pickerType = this.getType();
              if (calendarType !== pickerType) {
                this.drawLowerCalendar(newDate);
              } else {
                if (timePicker) {
                  newDate.setHours(timePicker.getHour(), timePicker.getMinute());
                } else if (prevDate) {
                  newDate.setHours(prevDate.getHours(), prevDate.getMinutes());
                }
                this.setDate(newDate);
                if (!this.showAlways && this.autoClose) {
                  this.close();
                }
              }
            },
            _onDrawCalendar: function(eventData) {
              forEachArray2(
                eventData.dateElements,
                function(el) {
                  this._setTodayClassName(el);
                  this._setSelectableClassName(el);
                  this._setSelectedClassName(el);
                },
                this
              );
              this._setDisplayHeadButtons();
              this.fire("draw", eventData);
            },
            _setDisplayHeadButtons: function() {
              var customStep = 60;
              var nextYearDate = this._calendar.getNextYearDate(
                this.getCalendarType() === TYPE_YEAR ? customStep : null
              );
              var prevYearDate = this._calendar.getPrevYearDate(
                this.getCalendarType() === TYPE_YEAR ? -customStep : null
              );
              var maxTimestamp = this._rangeModel.getMaximumValue();
              var minTimestamp = this._rangeModel.getMinimumValue();
              var nextYearBtn = this._element.querySelector("." + CLASS_NAME_NEXT_YEAR_BTN);
              var prevYearBtn = this._element.querySelector("." + CLASS_NAME_PREV_YEAR_BTN);
              var nextMonthDate, prevMonthDate, nextMonBtn, prevMonBtn;
              if (this.getCalendarType() === TYPE_DATE) {
                nextMonthDate = dateUtil.cloneWithStartOf(this._calendar.getNextDate(), TYPE_MONTH);
                prevMonthDate = dateUtil.cloneWithEndOf(this._calendar.getPrevDate(), TYPE_MONTH);
                nextMonBtn = this._element.querySelector("." + CLASS_NAME_NEXT_MONTH_BTN);
                prevMonBtn = this._element.querySelector("." + CLASS_NAME_PREV_MONTH_BTN);
                this._setDisplay(nextMonBtn, nextMonthDate.getTime() <= maxTimestamp);
                this._setDisplay(prevMonBtn, prevMonthDate.getTime() >= minTimestamp);
                prevYearDate.setDate(1);
                nextYearDate.setDate(1);
              } else {
                prevYearDate.setMonth(12, 0);
                nextYearDate.setMonth(0, 1);
              }
              this._setDisplay(nextYearBtn, nextYearDate.getTime() <= maxTimestamp);
              this._setDisplay(prevYearBtn, prevYearDate.getTime() >= minTimestamp);
            },
            _setDisplay: function(el, shouldShow) {
              if (el) {
                if (shouldShow) {
                  removeClass(el, CLASS_NAME_HIDDEN);
                } else {
                  addClass(el, CLASS_NAME_HIDDEN);
                }
              }
            },
            _onChangeInput: function() {
              this._syncFromInput(true);
            },
            _isChanged: function(date2) {
              var prevDate = this.getDate();
              return !prevDate || date2.getTime() !== prevDate.getTime();
            },
            _refreshFromRanges: function() {
              if (!this.isSelectable(this._date)) {
                this.setNull();
              } else {
                this._calendar.draw();
              }
            },
            getCalendarType: function() {
              return this._calendar.getType();
            },
            getType: function() {
              return this._type;
            },
            isSelectable: function(date2) {
              var type = this.getType();
              var start, end;
              if (!dateUtil.isValidDate(date2)) {
                return false;
              }
              start = dateUtil.cloneWithStartOf(date2, type).getTime();
              end = dateUtil.cloneWithEndOf(date2, type).getTime();
              return this._rangeModel.hasOverlap(start, end);
            },
            isSelected: function(date2) {
              return dateUtil.isValidDate(date2) && dateUtil.isSame(this._date, date2, this.getType());
            },
            setRanges: function(ranges) {
              var result = [];
              forEachArray2(ranges, function(range2) {
                var start = new Date(range2[0]).getTime();
                var end = new Date(range2[1]).getTime();
                result.push([start, end]);
              });
              this._rangeModel = new RangeModel(result);
              this._refreshFromRanges();
            },
            setType: function(type) {
              this._type = type;
            },
            addRange: function(start, end) {
              start = new Date(start).getTime();
              end = new Date(end).getTime();
              this._rangeModel.add(start, end);
              this._refreshFromRanges();
            },
            removeRange: function(start, end, type) {
              start = new Date(start);
              end = new Date(end);
              if (type) {
                start = dateUtil.cloneWithStartOf(start, type);
                end = dateUtil.cloneWithEndOf(end, type);
              }
              this._rangeModel.exclude(start.getTime(), end.getTime());
              this._refreshFromRanges();
            },
            addOpener: function(opener) {
              opener = util.getElement(opener);
              if (!this._isOpener(opener)) {
                this._openers.push(opener);
                this._setOpenerEvents(opener);
              }
            },
            removeOpener: function(opener) {
              var index;
              opener = util.getElement(opener);
              index = inArray(opener, this._openers);
              if (index > -1) {
                this._removeOpenerEvents(opener);
                this._openers.splice(index, 1);
              }
            },
            removeAllOpeners: function() {
              forEachArray2(
                this._openers,
                function(opener) {
                  this._removeOpenerEvents(opener);
                },
                this
              );
              this._openers = [];
            },
            open: function() {
              if (this.isOpened() || !this._isEnabled) {
                return;
              }
              this._calendar.draw({
                date: this._date,
                type: this._type
              });
              this._show();
              if (!this.showAlways) {
                this._setDocumentEvents();
              }
              this.fire("open");
            },
            drawUpperCalendar: function(date2) {
              var calendarType = this.getCalendarType();
              if (calendarType === TYPE_DATE) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_MONTH
                });
              } else if (calendarType === TYPE_MONTH) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_YEAR
                });
              }
            },
            drawLowerCalendar: function(date2) {
              var calendarType = this.getCalendarType();
              var pickerType = this.getType();
              var isLast = calendarType === pickerType;
              if (isLast) {
                return;
              }
              if (calendarType === TYPE_MONTH) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_DATE
                });
              } else if (calendarType === TYPE_YEAR) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_MONTH
                });
              }
            },
            close: function() {
              if (!this.isOpened()) {
                return;
              }
              this._removeDocumentEvents();
              this._hide();
              this.fire("close");
            },
            toggle: function() {
              if (this.isOpened()) {
                this.close();
              } else {
                this.open();
              }
            },
            getDate: function() {
              if (!this._date) {
                return null;
              }
              return new Date(this._date);
            },
            setDate: function(date2, silent) {
              var isValidInput, newDate, shouldUpdate;
              if (date2 === null) {
                this.setNull();
                return;
              }
              isValidInput = isNumber2(date2) || isDate(date2);
              newDate = new Date(date2);
              shouldUpdate = isValidInput && this._isChanged(newDate) && this.isSelectable(newDate);
              if (shouldUpdate) {
                newDate = new Date(date2);
                this._date = newDate;
                this._calendar.draw({ date: newDate });
                if (this._timePicker) {
                  this._timePicker.setTime(newDate.getHours(), newDate.getMinutes(), true);
                }
                this._syncToInput();
                if (!silent) {
                  this.fire("change");
                }
              }
            },
            setNull: function() {
              var calendarDate = this._calendar.getDate();
              var isChagned = this._date !== null;
              this._date = null;
              if (this._datepickerInput) {
                this._datepickerInput.clearText();
              }
              if (this._timePicker) {
                this._timePicker.setTime(0, 0);
              }
              if (!this.isSelectable(calendarDate)) {
                this._calendar.draw({
                  date: new Date(this._rangeModel.getMinimumValue())
                });
              } else {
                this._calendar.draw();
              }
              if (isChagned) {
                this.fire("change");
              }
            },
            setDateFormat: function(format) {
              this._datepickerInput.setFormat(format);
              this._syncToInput();
            },
            isOpened: function() {
              return !hasClass(this._element, CLASS_NAME_HIDDEN);
            },
            getTimePicker: function() {
              return this._timePicker;
            },
            getCalendar: function() {
              return this._calendar;
            },
            getLocaleText: function() {
              return localeTexts[this._language] || localeTexts[DEFAULT_LANGUAGE_TYPE];
            },
            setInput: function(element, options) {
              var prev = this._datepickerInput;
              var localeText = this.getLocaleText();
              var prevFormat;
              options = options || {};
              if (prev) {
                prevFormat = prev.getFormat();
                prev.destroy();
              }
              this._datepickerInput = new DatePickerInput(element, {
                format: options.format || prevFormat,
                id: this._id,
                localeText
              });
              this._datepickerInput.on(
                {
                  change: this._onChangeInput,
                  click: this.open
                },
                this
              );
              if (options.syncFromInput) {
                this._syncFromInput();
              } else {
                this._syncToInput();
              }
            },
            enable: function() {
              if (this._isEnabled) {
                return;
              }
              this._isEnabled = true;
              this._datepickerInput.enable();
              forEachArray2(
                this._openers,
                function(opener) {
                  opener.removeAttribute("disabled");
                  this._setOpenerEvents(opener);
                },
                this
              );
            },
            disable: function() {
              if (!this._isEnabled) {
                return;
              }
              this._isEnabled = false;
              this.close();
              this._datepickerInput.disable();
              forEachArray2(
                this._openers,
                function(opener) {
                  opener.setAttribute("disabled", true);
                  this._removeOpenerEvents(opener);
                },
                this
              );
            },
            isDisabled: function() {
              return !this._isEnabled;
            },
            addCssClass: function(className2) {
              addClass(this._element, className2);
            },
            removeCssClass: function(className2) {
              removeClass(this._element, className2);
            },
            getDateElements: function() {
              return this._calendar.getDateElements();
            },
            findOverlappedRange: function(startDate, endDate) {
              var startTimestamp = new Date(startDate).getTime();
              var endTimestamp = new Date(endDate).getTime();
              var overlappedRange = this._rangeModel.findOverlappedRange(startTimestamp, endTimestamp);
              return [new Date(overlappedRange[0]), new Date(overlappedRange[1])];
            },
            changeLanguage: function(language) {
              this._language = language;
              this._calendar.changeLanguage(this._language);
              this._datepickerInput.changeLocaleTitles(this.getLocaleText().titles);
              this.setDateFormat(this._datepickerInput.getFormat());
              if (this._timePicker) {
                this._timePicker.changeLanguage(this._language);
              }
            },
            destroy: function() {
              this._removeDocumentEvents();
              this._calendar.destroy();
              if (this._timePicker) {
                this._timePicker.destroy();
              }
              if (this._datepickerInput) {
                this._datepickerInput.destroy();
              }
              this._removeEvents();
              removeElement(this._element);
              this.removeAllOpeners();
              this._calendar = this._timePicker = this._datepickerInput = this._container = this._element = this._date = this._rangeModel = this._openers = this._isEnabled = this._id = null;
            }
          }
        );
        CustomEvents2.mixin(DatePicker2);
        module2.exports = DatePicker2;
      },
      function(module2, exports2, __webpack_require__) {
        function isObject2(obj) {
          return obj === Object(obj);
        }
        module2.exports = isObject2;
      },
      function(module2, exports2, __webpack_require__) {
        function forEachOwnProperties2(obj, iteratee, context) {
          var key;
          context = context || null;
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (iteratee.call(context, obj[key], key, obj) === false) {
                break;
              }
            }
          }
        }
        module2.exports = forEachOwnProperties2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(6);
        var isUndefined2 = __webpack_require__(12);
        function setClassName(element, cssClass) {
          cssClass = isArray2(cssClass) ? cssClass.join(" ") : cssClass;
          cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          if (isUndefined2(element.className.baseVal)) {
            element.className = cssClass;
            return;
          }
          element.className.baseVal = cssClass;
        }
        module2.exports = setClassName;
      },
      function(module2, exports2, __webpack_require__) {
        var matches = __webpack_require__(40);
        function closest(element, selector) {
          var parent = element.parentNode;
          if (matches(element, selector)) {
            return element;
          }
          while (parent && parent !== document) {
            if (matches(parent, selector)) {
              return parent;
            }
            parent = parent.parentNode;
          }
          return null;
        }
        module2.exports = closest;
      },
      function(module2, exports2, __webpack_require__) {
        var convertToKebabCase = __webpack_require__(42);
        function getData(element, key) {
          if (element.dataset) {
            return element.dataset[key];
          }
          return element.getAttribute("data-" + convertToKebabCase(key));
        }
        module2.exports = getData;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var getClass = __webpack_require__(17);
        function hasClass(element, cssClass) {
          var origin;
          if (element.classList) {
            return element.classList.contains(cssClass);
          }
          origin = getClass(element).split(/\s+/);
          return inArray(cssClass, origin) > -1;
        }
        module2.exports = hasClass;
      },
      function(module2, exports2, __webpack_require__) {
        function isDate(obj) {
          return obj instanceof Date;
        }
        module2.exports = isDate;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var addClass = __webpack_require__(16);
        var hasClass = __webpack_require__(27);
        var removeClass = __webpack_require__(18);
        var removeElement = __webpack_require__(14);
        var extend2 = __webpack_require__(7);
        var Header = __webpack_require__(44);
        var Body = __webpack_require__(49);
        var localeTexts = __webpack_require__(10);
        var constants = __webpack_require__(1);
        var dateUtil = __webpack_require__(5);
        var util = __webpack_require__(4);
        var DEFAULT_WEEK_START_DAY = constants.DEFAULT_WEEK_START_DAY;
        var DEFAULT_LANGUAGE_TYPE = constants.DEFAULT_LANGUAGE_TYPE;
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var CLASS_NAME_PREV_MONTH_BTN = constants.CLASS_NAME_PREV_MONTH_BTN;
        var CLASS_NAME_PREV_YEAR_BTN = constants.CLASS_NAME_PREV_YEAR_BTN;
        var CLASS_NAME_NEXT_YEAR_BTN = constants.CLASS_NAME_NEXT_YEAR_BTN;
        var CLASS_NAME_NEXT_MONTH_BTN = constants.CLASS_NAME_NEXT_MONTH_BTN;
        var CLASS_NAME_CALENDAR_MONTH = "tui-calendar-month";
        var CLASS_NAME_CALENDAR_YEAR = "tui-calendar-year";
        var CLASS_NAME_HIDDEN = "tui-hidden";
        var HEADER_SELECTOR = ".tui-calendar-header";
        var BODY_SELECTOR = ".tui-calendar-body";
        var Calendar2 = defineClass(
          {
            static: {
              localeTexts
            },
            init: function(container, options) {
              options = extend2(
                {
                  language: DEFAULT_LANGUAGE_TYPE,
                  showToday: true,
                  showJumpButtons: false,
                  date: new Date(),
                  type: TYPE_DATE,
                  usageStatistics: true,
                  weekStartDay: DEFAULT_WEEK_START_DAY
                },
                options
              );
              this._container = util.getElement(container);
              this._container.innerHTML = '<div class="tui-calendar">    <div class="tui-calendar-header"></div>    <div class="tui-calendar-body"></div></div>';
              this._element = this._container.firstChild;
              this._date = null;
              this._type = null;
              this._header = null;
              this._body = null;
              this._initHeader(options);
              this._initBody(options);
              this.draw({
                date: options.date,
                type: options.type
              });
              if (options.usageStatistics) {
                util.sendHostName();
              }
            },
            _initHeader: function(options) {
              var headerContainer = this._element.querySelector(HEADER_SELECTOR);
              this._header = new Header(headerContainer, options);
              this._header.on(
                "click",
                function(ev) {
                  var target = util.getTarget(ev);
                  if (hasClass(target, CLASS_NAME_PREV_MONTH_BTN)) {
                    this.drawPrev();
                  } else if (hasClass(target, CLASS_NAME_PREV_YEAR_BTN)) {
                    this._onClickPrevYear();
                  } else if (hasClass(target, CLASS_NAME_NEXT_MONTH_BTN)) {
                    this.drawNext();
                  } else if (hasClass(target, CLASS_NAME_NEXT_YEAR_BTN)) {
                    this._onClickNextYear();
                  }
                },
                this
              );
            },
            _initBody: function(options) {
              var bodyContainer = this._element.querySelector(BODY_SELECTOR);
              this._body = new Body(bodyContainer, options);
            },
            _onClickPrevYear: function() {
              if (this.getType() === TYPE_DATE) {
                this.draw({
                  date: this._getRelativeDate(-12)
                });
              } else {
                this.drawPrev();
              }
            },
            _onClickNextYear: function() {
              if (this.getType() === TYPE_DATE) {
                this.draw({
                  date: this._getRelativeDate(12)
                });
              } else {
                this.drawNext();
              }
            },
            _isValidType: function(type) {
              return type === TYPE_DATE || type === TYPE_MONTH || type === TYPE_YEAR;
            },
            _shouldUpdate: function(date2, type) {
              var prevDate = this._date;
              if (!dateUtil.isValidDate(date2)) {
                throw new Error("Invalid date");
              }
              if (!this._isValidType(type)) {
                throw new Error("Invalid layer type");
              }
              return !prevDate || prevDate.getFullYear() !== date2.getFullYear() || prevDate.getMonth() !== date2.getMonth() || this.getType() !== type;
            },
            _render: function() {
              var date2 = this._date;
              var type = this.getType();
              this._header.render(date2, type);
              this._body.render(date2, type);
              removeClass(this._element, CLASS_NAME_CALENDAR_MONTH, CLASS_NAME_CALENDAR_YEAR);
              switch (type) {
                case TYPE_MONTH:
                  addClass(this._element, CLASS_NAME_CALENDAR_MONTH);
                  break;
                case TYPE_YEAR:
                  addClass(this._element, CLASS_NAME_CALENDAR_YEAR);
                  break;
              }
            },
            _getRelativeDate: function(step) {
              var prev = this._date;
              return new Date(prev.getFullYear(), prev.getMonth() + step);
            },
            draw: function(options) {
              var date2, type;
              options = options || {};
              date2 = options.date || this._date;
              type = (options.type || this.getType()).toLowerCase();
              if (this._shouldUpdate(date2, type)) {
                this._date = date2;
                this._type = type;
                this._render();
              }
              this.fire("draw", {
                date: this._date,
                type,
                dateElements: this._body.getDateElements()
              });
            },
            show: function() {
              removeClass(this._element, CLASS_NAME_HIDDEN);
            },
            hide: function() {
              addClass(this._element, CLASS_NAME_HIDDEN);
            },
            drawNext: function() {
              this.draw({
                date: this.getNextDate()
              });
            },
            drawPrev: function() {
              this.draw({
                date: this.getPrevDate()
              });
            },
            getNextDate: function() {
              if (this.getType() === TYPE_DATE) {
                return this._getRelativeDate(1);
              }
              return this.getNextYearDate();
            },
            getPrevDate: function() {
              if (this.getType() === TYPE_DATE) {
                return this._getRelativeDate(-1);
              }
              return this.getPrevYearDate();
            },
            getNextYearDate: function(customStep) {
              if (customStep) {
                return this._getRelativeDate(customStep);
              }
              switch (this.getType()) {
                case TYPE_DATE:
                case TYPE_MONTH:
                  return this._getRelativeDate(12);
                case TYPE_YEAR:
                  return this._getRelativeDate(108);
                default:
                  throw new Error("Unknown layer type");
              }
            },
            getPrevYearDate: function(customStep) {
              if (customStep) {
                return this._getRelativeDate(customStep);
              }
              switch (this.getType()) {
                case TYPE_DATE:
                case TYPE_MONTH:
                  return this._getRelativeDate(-12);
                case TYPE_YEAR:
                  return this._getRelativeDate(-108);
                default:
                  throw new Error("Unknown layer type");
              }
            },
            changeLanguage: function(language) {
              this._header.changeLanguage(language);
              this._body.changeLanguage(language);
              this._render();
            },
            getDate: function() {
              return new Date(this._date);
            },
            getType: function() {
              return this._type;
            },
            getDateElements: function() {
              return this._body.getDateElements();
            },
            addCssClass: function(className2) {
              addClass(this._element, className2);
            },
            removeCssClass: function(className2) {
              removeClass(this._element, className2);
            },
            destroy: function() {
              this._header.destroy();
              this._body.destroy();
              removeElement(this._element);
              this._type = this._date = this._container = this._element = this._header = this._body = null;
            }
          }
        );
        CustomEvents2.mixin(Calendar2);
        module2.exports = Calendar2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var util = __webpack_require__(4);
        var dateUtil = __webpack_require__(5);
        var constants = __webpack_require__(1);
        var localeTexts = __webpack_require__(10);
        var rFormableKeys = /\\?(yyyy|yy|mmmm|mmm|mm|m|dd|d|hh|h|a)/gi;
        var mapForConverting = {
          yyyy: {
            expression: "(\\d{4}|\\d{2})",
            type: constants.TYPE_YEAR
          },
          yy: {
            expression: "(\\d{4}|\\d{2})",
            type: constants.TYPE_YEAR
          },
          y: {
            expression: "(\\d{4}|\\d{2})",
            type: constants.TYPE_YEAR
          },
          M: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          MM: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          MMM: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          MMMM: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          mmm: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          mmmm: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          dd: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          d: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          D: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          DD: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          h: {
            expression: "(d{1}|0\\d{1}|1\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          hh: {
            expression: "(d{1}|[01]\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          H: {
            expression: "(d{1}|0\\d{1}|1\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          HH: {
            expression: "(d{1}|[01]\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          m: {
            expression: "(d{1}|[012345]\\d{1})",
            type: constants.TYPE_MINUTE
          },
          mm: {
            expression: "(d{1}|[012345]\\d{1})",
            type: constants.TYPE_MINUTE
          },
          a: {
            expression: "([ap]m)",
            type: constants.TYPE_MERIDIEM
          },
          A: {
            expression: "([ap]m)",
            type: constants.TYPE_MERIDIEM
          }
        };
        var DateTimeFormatter = defineClass(
          {
            init: function(rawStr, titles) {
              this._rawStr = rawStr;
              this._keyOrder = null;
              this._regExp = null;
              this._titles = titles || localeTexts.en.titles;
              this._parseFormat();
            },
            _parseFormat: function() {
              var regExpStr = "^";
              var matchedKeys = this._rawStr.match(rFormableKeys);
              var keyOrder = [];
              matchedKeys = util.filter(matchedKeys, function(key) {
                return key[0] !== "\\";
              });
              forEachArray2(matchedKeys, function(key, index) {
                if (!/m/i.test(key)) {
                  key = key.toLowerCase();
                }
                regExpStr += mapForConverting[key].expression + "[\\D\\s]*";
                keyOrder[index] = mapForConverting[key].type;
              });
              regExpStr += "$";
              this._keyOrder = keyOrder;
              this._regExp = new RegExp(regExpStr, "gi");
            },
            parse: function(str) {
              var dateHash = {
                year: 0,
                month: 1,
                date: 1,
                hour: 0,
                minute: 0
              };
              var hasMeridiem = false;
              var isPM = false;
              var matched;
              this._regExp.lastIndex = 0;
              matched = this._regExp.exec(str);
              if (!matched) {
                throw Error('DateTimeFormatter: Not matched - "' + str + '"');
              }
              forEachArray2(this._keyOrder, function(name, index) {
                var value = matched[index + 1];
                if (name === constants.TYPE_MERIDIEM && /[ap]m/i.test(value)) {
                  hasMeridiem = true;
                  isPM = /pm/i.test(value);
                } else {
                  value = Number(value);
                  if (value !== 0 && !value) {
                    throw Error("DateTimeFormatter: Unknown value - " + matched[index + 1]);
                  }
                  if (name === constants.TYPE_YEAR && value < 100) {
                    value += 2e3;
                  }
                  dateHash[name] = value;
                }
              });
              if (hasMeridiem) {
                isPM = isPM || dateHash.hour > 12;
                dateHash.hour %= 12;
                if (isPM) {
                  dateHash.hour += 12;
                }
              }
              return new Date(
                dateHash.year,
                dateHash.month - 1,
                dateHash.date,
                dateHash.hour,
                dateHash.minute
              );
            },
            getRawString: function() {
              return this._rawStr;
            },
            format: function(dateObj) {
              var year = dateObj.getFullYear();
              var month = dateObj.getMonth() + 1;
              var dayInMonth = dateObj.getDate();
              var day = dateObj.getDay();
              var hour = dateObj.getHours();
              var minute = dateObj.getMinutes();
              var meridiem = "a";
              var replaceMap;
              if (inArray(constants.TYPE_MERIDIEM, this._keyOrder) > -1) {
                meridiem = hour >= 12 ? "pm" : "am";
                hour = dateUtil.getMeridiemHour(hour);
              }
              replaceMap = {
                yyyy: year,
                yy: String(year).substr(2, 2),
                M: month,
                MM: dateUtil.prependLeadingZero(month),
                MMM: this._titles.MMM[month - 1],
                MMMM: this._titles.MMMM[month - 1],
                d: dayInMonth,
                dd: dateUtil.prependLeadingZero(dayInMonth),
                D: this._titles.D[day],
                DD: this._titles.DD[day],
                hh: dateUtil.prependLeadingZero(hour),
                h: hour,
                mm: dateUtil.prependLeadingZero(minute),
                m: minute,
                A: meridiem.toUpperCase(),
                a: meridiem
              };
              return this._rawStr.replace(rFormableKeys, function(key) {
                if (key[0] === "\\") {
                  return key.substr(1);
                }
                return replaceMap[key] || replaceMap[key.toLowerCase()] || "";
              });
            }
          }
        );
        module2.exports = DateTimeFormatter;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(13);
        var forEach2 = __webpack_require__(9);
        var safeEvent = __webpack_require__(32);
        function on2(element, types, handler, context) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              bindEvent(element, type, handler, context);
            });
            return;
          }
          forEach2(types, function(func, type) {
            bindEvent(element, type, func, handler);
          });
        }
        function bindEvent(element, type, handler, context) {
          function eventHandler(e2) {
            handler.call(context || element, e2 || window.event);
          }
          if ("addEventListener" in element) {
            element.addEventListener(type, eventHandler);
          } else if ("attachEvent" in element) {
            element.attachEvent("on" + type, eventHandler);
          }
          memorizeHandler(element, type, handler, eventHandler);
        }
        function memorizeHandler(element, type, handler, wrappedHandler) {
          var events = safeEvent(element, type);
          var existInEvents = false;
          forEach2(events, function(obj) {
            if (obj.handler === handler) {
              existInEvents = true;
              return false;
            }
            return true;
          });
          if (!existInEvents) {
            events.push({
              handler,
              wrappedHandler
            });
          }
        }
        module2.exports = on2;
      },
      function(module2, exports2, __webpack_require__) {
        var EVENT_KEY = "_feEventKey";
        function safeEvent(element, type) {
          var events = element[EVENT_KEY];
          var handlers;
          if (!events) {
            events = element[EVENT_KEY] = {};
          }
          handlers = events[type];
          if (!handlers) {
            handlers = events[type] = [];
          }
          return handlers;
        }
        module2.exports = safeEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(13);
        var forEach2 = __webpack_require__(9);
        var safeEvent = __webpack_require__(32);
        function off(element, types, handler) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              unbindEvent(element, type, handler);
            });
            return;
          }
          forEach2(types, function(func, type) {
            unbindEvent(element, type, func);
          });
        }
        function unbindEvent(element, type, handler) {
          var events = safeEvent(element, type);
          var index;
          if (!handler) {
            forEach2(events, function(item) {
              removeHandler(element, type, item.wrappedHandler);
            });
            events.splice(0, events.length);
          } else {
            forEach2(events, function(item, idx) {
              if (handler === item.handler) {
                removeHandler(element, type, item.wrappedHandler);
                index = idx;
                return false;
              }
              return true;
            });
            events.splice(index, 1);
          }
        }
        function removeHandler(element, type, handler) {
          if ("removeEventListener" in element) {
            element.removeEventListener(type, handler);
          } else if ("detachEvent" in element) {
            element.detachEvent("on" + type, handler);
          }
        }
        module2.exports = off;
      },
      function(module2, exports2, __webpack_require__) {
        var DatePicker2 = __webpack_require__(21);
        var DateRangePicker = __webpack_require__(60);
        var Calendar2 = __webpack_require__(29);
        __webpack_require__(61);
        DatePicker2.createCalendar = function(wrapperElement, options) {
          return new Calendar2(wrapperElement, options);
        };
        DatePicker2.createRangePicker = function(options) {
          return new DateRangePicker(options);
        };
        module2.exports = DatePicker2;
      },
      function(module2, exports2, __webpack_require__) {
        var createObject = __webpack_require__(36);
        function inherit(subType, superType) {
          var prototype = createObject(superType.prototype);
          prototype.constructor = subType;
          subType.prototype = prototype;
        }
        module2.exports = inherit;
      },
      function(module2, exports2, __webpack_require__) {
        function createObject(obj) {
          function F2() {
          }
          F2.prototype = obj;
          return new F2();
        }
        module2.exports = createObject;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(12);
        var isNull2 = __webpack_require__(38);
        function isExisty2(param) {
          return !isUndefined2(param) && !isNull2(param);
        }
        module2.exports = isExisty2;
      },
      function(module2, exports2, __webpack_require__) {
        function isNull2(obj) {
          return obj === null;
        }
        module2.exports = isNull2;
      },
      function(module2, exports2, __webpack_require__) {
        function isFunction2(obj) {
          return obj instanceof Function;
        }
        module2.exports = isFunction2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var toArray = __webpack_require__(41);
        var elProto2 = Element.prototype;
        var matchSelector = elProto2.matches || elProto2.webkitMatchesSelector || elProto2.mozMatchesSelector || elProto2.msMatchesSelector || function(selector) {
          var doc = this.document || this.ownerDocument;
          return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
        };
        function matches(element, selector) {
          return matchSelector.call(element, selector);
        }
        module2.exports = matches;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        function toArray(arrayLike) {
          var arr;
          try {
            arr = Array.prototype.slice.call(arrayLike);
          } catch (e2) {
            arr = [];
            forEachArray2(arrayLike, function(value) {
              arr.push(value);
            });
          }
          return arr;
        }
        module2.exports = toArray;
      },
      function(module2, exports2, __webpack_require__) {
        function convertToKebabCase(key) {
          return key.replace(/([A-Z])/g, function(match) {
            return "-" + match.toLowerCase();
          });
        }
        module2.exports = convertToKebabCase;
      },
      function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE__43__;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var closest = __webpack_require__(25);
        var removeElement = __webpack_require__(14);
        var localeTexts = __webpack_require__(10);
        var headerTmpl = __webpack_require__(45);
        var DateTimeFormatter = __webpack_require__(30);
        var constants = __webpack_require__(1);
        var util = __webpack_require__(4);
        var mouseTouchEvent = __webpack_require__(19);
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var CLASS_NAME_TITLE_MONTH = "tui-calendar-title-month";
        var CLASS_NAME_TITLE_YEAR = "tui-calendar-title-year";
        var CLASS_NAME_TITLE_YEAR_TO_YEAR = "tui-calendar-title-year-to-year";
        var SELECTOR_INNER_ELEM = ".tui-calendar-header-inner";
        var SELECTOR_INFO_ELEM = ".tui-calendar-header-info";
        var SELECTOR_BTN = ".tui-calendar-btn";
        var YEAR_TITLE_FORMAT = "yyyy";
        var Header = defineClass(
          {
            init: function(container, option) {
              this._container = util.getElement(container);
              this._innerElement = null;
              this._infoElement = null;
              this._showToday = option.showToday;
              this._showJumpButtons = option.showJumpButtons;
              this._yearMonthTitleFormatter = null;
              this._yearTitleFormatter = null;
              this._todayFormatter = null;
              this._setFormatters(localeTexts[option.language]);
              this._setEvents(option);
            },
            _setFormatters: function(localeText) {
              this._yearMonthTitleFormatter = new DateTimeFormatter(
                localeText.titleFormat,
                localeText.titles
              );
              this._yearTitleFormatter = new DateTimeFormatter(YEAR_TITLE_FORMAT, localeText.titles);
              this._todayFormatter = new DateTimeFormatter(localeText.todayFormat, localeText.titles);
            },
            _setEvents: function() {
              mouseTouchEvent.on(this._container, "click", this._onClickHandler, this);
            },
            _removeEvents: function() {
              this.off();
              mouseTouchEvent.off(this._container, "click", this._onClickHandler);
            },
            _onClickHandler: function(ev) {
              var target = util.getTarget(ev);
              if (closest(target, SELECTOR_BTN)) {
                this.fire("click", ev);
              }
            },
            _getTitleClass: function(type) {
              switch (type) {
                case TYPE_DATE:
                  return CLASS_NAME_TITLE_MONTH;
                case TYPE_MONTH:
                  return CLASS_NAME_TITLE_YEAR;
                case TYPE_YEAR:
                  return CLASS_NAME_TITLE_YEAR_TO_YEAR;
                default:
                  return "";
              }
            },
            _getTitleText: function(date2, type) {
              var currentYear, start, end;
              switch (type) {
                case TYPE_DATE:
                  return this._yearMonthTitleFormatter.format(date2);
                case TYPE_MONTH:
                  return this._yearTitleFormatter.format(date2);
                case TYPE_YEAR:
                  currentYear = date2.getFullYear();
                  start = new Date(currentYear - 4, 0, 1);
                  end = new Date(currentYear + 4, 0, 1);
                  return this._yearTitleFormatter.format(start) + " - " + this._yearTitleFormatter.format(end);
                default:
                  return "";
              }
            },
            changeLanguage: function(language) {
              this._setFormatters(localeTexts[language]);
            },
            render: function(date2, type) {
              var context = {
                showToday: this._showToday,
                showJumpButtons: this._showJumpButtons,
                todayText: this._todayFormatter.format(new Date()),
                isDateCalendar: type === TYPE_DATE,
                titleClass: this._getTitleClass(type),
                title: this._getTitleText(date2, type)
              };
              this._container.innerHTML = headerTmpl(context).replace(/^\s+|\s+$/g, "");
              this._innerElement = this._container.querySelector(SELECTOR_INNER_ELEM);
              if (context.showToday) {
                this._infoElement = this._container.querySelector(SELECTOR_INFO_ELEM);
              }
            },
            destroy: function() {
              this._removeEvents();
              removeElement(this._innerElement);
              removeElement(this._infoElement);
              this._container = this._showToday = this._showJumpButtons = this._yearMonthTitleFormatter = this._yearTitleFormatter = this._todayFormatter = this._innerElement = this._infoElement = null;
            }
          }
        );
        CustomEvents2.mixin(Header);
        module2.exports = Header;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '{{if isDateCalendar}}  {{if showJumpButtons}}    <div class="tui-calendar-header-inner tui-calendar-has-btns">      <button class="tui-calendar-btn tui-calendar-btn-prev-year">Prev year</button>      <button class="tui-calendar-btn tui-calendar-btn-prev-month">Prev month</button>      <em class="tui-calendar-title {{titleClass}}">{{title}}</em>      <button class="tui-calendar-btn tui-calendar-btn-next-month">Next month</button>      <button class="tui-calendar-btn tui-calendar-btn-next-year">Next year</button>    </div>  {{else}}    <div class="tui-calendar-header-inner">      <button class="tui-calendar-btn tui-calendar-btn-prev-month">Prev month</button>      <em class="tui-calendar-title {{titleClass}}">{{title}}</em>      <button class="tui-calendar-btn tui-calendar-btn-next-month">Next month</button>    </div>  {{/if}}{{else}}  <div class="tui-calendar-header-inner">    <button class="tui-calendar-btn tui-calendar-btn-prev-year">Prev year</button>    <em class="tui-calendar-title {{titleClass}}">{{title}}</em>    <button class="tui-calendar-btn tui-calendar-btn-next-year">Next year</button>  </div>{{/if}}{{if showToday}}  <div class="tui-calendar-header-info">    <p class="tui-calendar-title-today">{{todayText}}</p>  </div>{{/if}}';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        function isHTMLNode(html) {
          if (typeof HTMLElement === "object") {
            return html && (html instanceof HTMLElement || !!html.nodeType);
          }
          return !!(html && html.nodeType);
        }
        module2.exports = isHTMLNode;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(12);
        var imagePing2 = __webpack_require__(48);
        var ms7days2 = 7 * 24 * 60 * 60 * 1e3;
        function isExpired2(date2) {
          var now = new Date().getTime();
          return now - date2 > ms7days2;
        }
        function sendHostname2(appName, trackingId) {
          var url = "https://www.google-analytics.com/collect";
          var hostname = location.hostname;
          var hitType = "event";
          var eventCategory = "use";
          var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
          var date2 = window.localStorage.getItem(applicationKeyForStorage);
          if (!isUndefined2(window.tui) && window.tui.usageStatistics === false) {
            return;
          }
          if (date2 && !isExpired2(date2)) {
            return;
          }
          window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
          setTimeout(function() {
            if (document.readyState === "interactive" || document.readyState === "complete") {
              imagePing2(url, {
                v: 1,
                t: hitType,
                tid: trackingId,
                cid: hostname,
                dp: hostname,
                dh: appName,
                el: appName,
                ec: eventCategory
              });
            }
          }, 1e3);
        }
        module2.exports = sendHostname2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachOwnProperties2 = __webpack_require__(23);
        function imagePing2(url, trackingInfo) {
          var trackingElement = document.createElement("img");
          var queryString = "";
          forEachOwnProperties2(trackingInfo, function(value, key) {
            queryString += "&" + key + "=" + value;
          });
          queryString = queryString.substring(1);
          trackingElement.src = url + "?" + queryString;
          trackingElement.style.display = "none";
          document.body.appendChild(trackingElement);
          document.body.removeChild(trackingElement);
          return trackingElement;
        }
        module2.exports = imagePing2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var DateLayer = __webpack_require__(50);
        var MonthLayer = __webpack_require__(52);
        var YearLayer = __webpack_require__(54);
        var constants = __webpack_require__(1);
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var Body = defineClass(
          {
            init: function(bodyContainer, options) {
              var language = options.language;
              var weekStartDay = options.weekStartDay;
              this._container = bodyContainer;
              this._dateLayer = new DateLayer(language, weekStartDay);
              this._monthLayer = new MonthLayer(language);
              this._yearLayer = new YearLayer(language);
              this._currentLayer = this._dateLayer;
            },
            _getLayer: function(type) {
              switch (type) {
                case TYPE_DATE:
                  return this._dateLayer;
                case TYPE_MONTH:
                  return this._monthLayer;
                case TYPE_YEAR:
                  return this._yearLayer;
                default:
                  return this._currentLayer;
              }
            },
            _eachLayer: function(fn2) {
              forEachArray2([this._dateLayer, this._monthLayer, this._yearLayer], fn2);
            },
            changeLanguage: function(language) {
              this._eachLayer(function(layer) {
                layer.changeLanguage(language);
              });
            },
            render: function(date2, type) {
              var nextLayer = this._getLayer(type);
              var prevLayer = this._currentLayer;
              prevLayer.remove();
              nextLayer.render(date2, this._container);
              this._currentLayer = nextLayer;
            },
            getDateElements: function() {
              return this._currentLayer.getDateElements();
            },
            destroy: function() {
              this._eachLayer(function(layer) {
                layer.remove();
              });
              this._container = this._currentLayer = this._dateLayer = this._monthLayer = this._yearLayer = null;
            }
          }
        );
        module2.exports = Body;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var dateUtil = __webpack_require__(5);
        var bodyTmpl = __webpack_require__(51);
        var LayerBase = __webpack_require__(20);
        var TYPE_DATE = __webpack_require__(1).TYPE_DATE;
        var WEEK_START_DAY_MAP = __webpack_require__(1).WEEK_START_DAY_MAP;
        var DATE_SELECTOR = ".tui-calendar-date";
        var DAYS_OF_WEEK = 7;
        var DateLayer = defineClass(
          LayerBase,
          {
            init: function(language, weekStartDay) {
              LayerBase.call(this, language);
              this.weekStartDay = WEEK_START_DAY_MAP[String(weekStartDay).toLowerCase()] || 0;
            },
            _type: TYPE_DATE,
            _makeContext: function(date2) {
              var daysShort = this._localeText.titles.D;
              var year, month, days, i2;
              date2 = date2 || new Date();
              year = date2.getFullYear();
              month = date2.getMonth() + 1;
              if (this.weekStartDay) {
                days = daysShort.slice();
                for (i2 = 0; i2 < this.weekStartDay; i2 += 1) {
                  days.push(days.shift());
                }
                daysShort = days;
              }
              return {
                Sun: daysShort[0],
                Mon: daysShort[1],
                Tue: daysShort[2],
                Wed: daysShort[3],
                Thu: daysShort[4],
                Fri: daysShort[5],
                Sat: daysShort[6],
                year,
                month,
                weeks: this._getWeeks(year, month)
              };
            },
            _getWeeks: function(year, month) {
              var weekNumber = 0;
              var weeksCount = 6;
              var weeks = [];
              var week, dates, i2;
              while (weekNumber < weeksCount) {
                dates = [];
                for (i2 = this.weekStartDay; i2 < DAYS_OF_WEEK + this.weekStartDay; i2 += 1) {
                  dates.push(dateUtil.getDateOfWeek(year, month, weekNumber, i2));
                }
                week = this._getWeek(year, month, dates);
                if (this.weekStartDay && !_isFirstWeek(weekNumber, week[0].dayInMonth)) {
                  weeks.push(this._getFirstWeek(year, month));
                  weeksCount -= 1;
                }
                weeks.push(week);
                weekNumber += 1;
              }
              return weeks;
            },
            _getWeek: function(currentYear, currentMonth, dates) {
              var firstDateOfCurrentMonth = new Date(currentYear, currentMonth - 1, 1);
              var lastDateOfCurrentMonth = new Date(currentYear, currentMonth, 0);
              var contexts = [];
              var i2 = 0;
              var length = dates.length;
              var date2, className2;
              for (; i2 < length; i2 += 1) {
                className2 = "tui-calendar-date";
                date2 = dates[i2];
                if (date2 < firstDateOfCurrentMonth) {
                  className2 += " tui-calendar-prev-month";
                }
                if (date2 > lastDateOfCurrentMonth) {
                  className2 += " tui-calendar-next-month";
                }
                if (date2.getDay() === 0) {
                  className2 += " tui-calendar-sun";
                } else if (date2.getDay() === 6) {
                  className2 += " tui-calendar-sat";
                }
                contexts.push({
                  dayInMonth: date2.getDate(),
                  className: className2,
                  timestamp: date2.getTime()
                });
              }
              return contexts;
            },
            render: function(date2, container) {
              var context = this._makeContext(date2);
              container.innerHTML = bodyTmpl(context);
              this._element = container.firstChild;
            },
            getDateElements: function() {
              return this._element.querySelectorAll(DATE_SELECTOR);
            },
            _getFirstWeek: function(year, month) {
              var firstWeekDates = [];
              var i2;
              for (i2 = this.weekStartDay; i2 < DAYS_OF_WEEK + this.weekStartDay; i2 += 1) {
                firstWeekDates.push(dateUtil.getDateOfWeek(year, month, -1, i2));
              }
              return this._getWeek(year, month, firstWeekDates);
            }
          }
        );
        function _isFirstWeek(weekIndex, dayInMonth) {
          return weekIndex || dayInMonth === 1 || dayInMonth > DAYS_OF_WEEK;
        }
        module2.exports = DateLayer;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<table class="tui-calendar-body-inner" cellspacing="0" cellpadding="0">  <caption><span>Dates</span></caption>  <thead class="tui-calendar-body-header">    <tr>      <th class="tui-sun" scope="col">{{Sun}}</th>      <th scope="col">{{Mon}}</th>      <th scope="col">{{Tue}}</th>      <th scope="col">{{Wed}}</th>      <th scope="col">{{Thu}}</th>      <th scope="col">{{Fri}}</th>      <th class="tui-sat" scope="col">{{Sat}}</th>    </tr>  </thead>  <tbody>    {{each weeks}}    <tr class="tui-calendar-week">      {{each @this}}      <td class="{{@this["className"]}}" data-timestamp="{{@this["timestamp"]}}">{{@this["dayInMonth"]}}</td>      {{/each}}    </tr>    {{/each}}  </tbody></table>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var bodyTmpl = __webpack_require__(53);
        var LayerBase = __webpack_require__(20);
        var TYPE_MONTH = __webpack_require__(1).TYPE_MONTH;
        var dateUtil = __webpack_require__(5);
        var DATE_SELECTOR = ".tui-calendar-month";
        var MonthLayer = defineClass(
          LayerBase,
          {
            init: function(language) {
              LayerBase.call(this, language);
            },
            _type: TYPE_MONTH,
            _makeContext: function(date2) {
              var monthsShort = this._localeText.titles.MMM;
              return {
                year: date2.getFullYear(),
                Jan: monthsShort[0],
                Feb: monthsShort[1],
                Mar: monthsShort[2],
                Apr: monthsShort[3],
                May: monthsShort[4],
                Jun: monthsShort[5],
                Jul: monthsShort[6],
                Aug: monthsShort[7],
                Sep: monthsShort[8],
                Oct: monthsShort[9],
                Nov: monthsShort[10],
                Dec: monthsShort[11],
                getFirstDayTimestamp: dateUtil.getFirstDayTimestamp
              };
            },
            render: function(date2, container) {
              var context = this._makeContext(date2);
              container.innerHTML = bodyTmpl(context);
              this._element = container.firstChild;
            },
            getDateElements: function() {
              return this._element.querySelectorAll(DATE_SELECTOR);
            }
          }
        );
        module2.exports = MonthLayer;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<table class="tui-calendar-body-inner">  <caption><span>Months</span></caption>  <tbody>    <tr class="tui-calendar-month-group">      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 0}}>{{Jan}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 1}}>{{Feb}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 2}}>{{Mar}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 3}}>{{Apr}}</td>    </tr>    <tr class="tui-calendar-month-group">      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 4}}>{{May}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 5}}>{{Jun}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 6}}>{{Jul}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 7}}>{{Aug}}</td>    </tr>    <tr class="tui-calendar-month-group">      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 8}}>{{Sep}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 9}}>{{Oct}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 10}}>{{Nov}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 11}}>{{Dec}}</td>    </tr>  </tbody></table>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var bodyTmpl = __webpack_require__(55);
        var LayerBase = __webpack_require__(20);
        var TYPE_YEAR = __webpack_require__(1).TYPE_YEAR;
        var dateUtil = __webpack_require__(5);
        var DATE_SELECTOR = ".tui-calendar-year";
        var YearLayer = defineClass(
          LayerBase,
          {
            init: function(language) {
              LayerBase.call(this, language);
            },
            _type: TYPE_YEAR,
            _makeContext: function(date2) {
              var year = date2.getFullYear();
              return {
                yearGroups: [
                  dateUtil.getRangeArr(year - 4, year - 2),
                  dateUtil.getRangeArr(year - 1, year + 1),
                  dateUtil.getRangeArr(year + 2, year + 4)
                ],
                getFirstDayTimestamp: dateUtil.getFirstDayTimestamp
              };
            },
            render: function(date2, container) {
              var context = this._makeContext(date2);
              container.innerHTML = bodyTmpl(context);
              this._element = container.firstChild;
            },
            getDateElements: function() {
              return this._element.querySelectorAll(DATE_SELECTOR);
            }
          }
        );
        module2.exports = YearLayer;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<table class="tui-calendar-body-inner">  <caption><span>Years</span></caption>  <tbody>    {{each yearGroups}}    <tr class="tui-calendar-year-group">      {{each @this}}      <td class="tui-calendar-year" data-timestamp={{getFirstDayTimestamp @this 0}}>        {{@this}}      </td>      {{/each}}    </tr>    {{/each}}  </tbody></table>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var isNumber2 = __webpack_require__(15);
        var Range = __webpack_require__(57);
        var util = __webpack_require__(4);
        var RangeModel = defineClass(
          {
            init: function(ranges) {
              ranges = ranges || [];
              this._ranges = [];
              forEachArray2(
                ranges,
                function(range2) {
                  this.add(range2[0], range2[1]);
                },
                this
              );
            },
            contains: function(start, end) {
              var i2 = 0;
              var length = this._ranges.length;
              var range2;
              for (; i2 < length; i2 += 1) {
                range2 = this._ranges[i2];
                if (range2.contains(start, end)) {
                  return true;
                }
              }
              return false;
            },
            hasOverlap: function(start, end) {
              var i2 = 0;
              var length = this._ranges.length;
              var range2;
              for (; i2 < length; i2 += 1) {
                range2 = this._ranges[i2];
                if (range2.isOverlapped(start, end)) {
                  return true;
                }
              }
              return false;
            },
            add: function(start, end) {
              var overlapped = false;
              var i2 = 0;
              var len = this._ranges.length;
              var range2;
              for (; i2 < len; i2 += 1) {
                range2 = this._ranges[i2];
                overlapped = range2.isOverlapped(start, end);
                if (overlapped) {
                  range2.merge(start, end);
                  break;
                }
                if (start < range2.start) {
                  break;
                }
              }
              if (!overlapped) {
                this._ranges.splice(i2, 0, new Range(start, end));
              }
            },
            getMinimumValue: function() {
              return this._ranges[0].start;
            },
            getMaximumValue: function() {
              var length = this._ranges.length;
              return this._ranges[length - 1].end;
            },
            exclude: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              forEachArray2(
                this._ranges,
                function(range2) {
                  var rangeEnd;
                  if (range2.isOverlapped(start, end)) {
                    rangeEnd = range2.end;
                    range2.exclude(start, end);
                    if (end + 1 <= rangeEnd) {
                      this.add(end + 1, rangeEnd);
                    }
                  }
                },
                this
              );
              this._ranges = util.filter(this._ranges, function(range2) {
                return !range2.isEmpty();
              });
            },
            findOverlappedRange: function(start, end) {
              var i2 = 0;
              var len = this._ranges.length;
              var range2;
              for (; i2 < len; i2 += 1) {
                range2 = this._ranges[i2];
                if (range2.isOverlapped(start, end)) {
                  return [range2.start, range2.end];
                }
              }
              return null;
            }
          }
        );
        module2.exports = RangeModel;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var isNumber2 = __webpack_require__(15);
        var Range = defineClass(
          {
            init: function(start, end) {
              this.setRange(start, end);
            },
            setRange: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              this.start = Math.min(start, end);
              this.end = Math.max(start, end);
            },
            merge: function(start, end) {
              if (!isNumber2(start) || !isNumber2(end) || !this.isOverlapped(start, end)) {
                return;
              }
              this.start = Math.min(start, this.start);
              this.end = Math.max(end, this.end);
            },
            isEmpty: function() {
              return !isNumber2(this.start) || !isNumber2(this.end);
            },
            setEmpty: function() {
              this.start = this.end = null;
            },
            contains: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              return this.start <= start && end <= this.end;
            },
            isOverlapped: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              return this.start <= end && this.end >= start;
            },
            exclude: function(start, end) {
              if (start <= this.start && end >= this.end) {
                this.setEmpty();
              } else if (this.contains(start)) {
                this.setRange(this.start, start - 1);
              } else if (this.contains(end)) {
                this.setRange(end + 1, this.end);
              }
            }
          }
        );
        module2.exports = Range;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<div class="tui-datepicker">  {{if timePicker}}    {{if isTab}}      <div class="tui-datepicker-selector">        <button type="button" class="tui-datepicker-selector-button tui-is-checked" aria-label="selected">          <span class="tui-ico-date"></span>{{localeText["date"]}}        </button>        <button type="button" class="tui-datepicker-selector-button">          <span class="tui-ico-time"></span>{{localeText["time"]}}        </button>      </div>      <div class="tui-datepicker-body">        <div class="tui-calendar-container"></div>        <div class="tui-timepicker-container"></div>      </div>    {{else}}      <div class="tui-datepicker-body">        <div class="tui-calendar-container"></div>      </div>      <div class="tui-datepicker-footer">        <div class="tui-timepicker-container"></div>      </div>    {{/if}}  {{else}}    <div class="tui-datepicker-body">      <div class="tui-calendar-container"></div>    </div>  {{/if}}</div>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var on2 = __webpack_require__(31);
        var off = __webpack_require__(33);
        var DateTimeFormatter = __webpack_require__(30);
        var mouseTouchEvent = __webpack_require__(19);
        var util = __webpack_require__(4);
        var DEFAULT_FORMAT = "yyyy-MM-dd";
        var DatePickerInput = defineClass(
          {
            init: function(inputElement, option) {
              option.format = option.format || DEFAULT_FORMAT;
              this._input = util.getElement(inputElement);
              this._id = option.id;
              this._titles = option.localeText.titles;
              this._formatter = new DateTimeFormatter(option.format, this._titles);
              this._setEvents();
            },
            changeLocaleTitles: function(titles) {
              this._titles = titles;
            },
            _setEvents: function() {
              if (this._input) {
                on2(this._input, "change", this._onChangeHandler, this);
                mouseTouchEvent.on(this._input, "click", this._onClickHandler, this);
              }
            },
            _removeEvents: function() {
              this.off();
              if (this._input) {
                off(this._input, "change", this._onChangeHandler);
                mouseTouchEvent.off(this._input, "click", this._onClickHandler);
              }
            },
            _onChangeHandler: function() {
              this.fire("change");
            },
            _onClickHandler: function() {
              this.fire("click");
            },
            is: function(el) {
              return this._input === el;
            },
            enable: function() {
              if (this._input) {
                this._input.removeAttribute("disabled");
              }
            },
            disable: function() {
              if (this._input) {
                this._input.setAttribute("disabled", true);
              }
            },
            getFormat: function() {
              return this._formatter.getRawString();
            },
            setFormat: function(format) {
              if (!format) {
                return;
              }
              this._formatter = new DateTimeFormatter(format, this._titles);
            },
            clearText: function() {
              if (this._input) {
                this._input.value = "";
              }
            },
            setDate: function(date2) {
              if (this._input) {
                this._input.value = this._formatter.format(date2);
              }
            },
            getDate: function() {
              var value = "";
              if (this._input) {
                value = this._input.value;
              }
              return this._formatter.parse(value);
            },
            destroy: function() {
              this._removeEvents();
              this._input = this._id = this._formatter = null;
            }
          }
        );
        CustomEvents2.mixin(DatePickerInput);
        module2.exports = DatePickerInput;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var addClass = __webpack_require__(16);
        var getData = __webpack_require__(26);
        var removeClass = __webpack_require__(18);
        var extend2 = __webpack_require__(7);
        var DatePicker2 = __webpack_require__(21);
        var dateUtil = __webpack_require__(5);
        var constants = __webpack_require__(1);
        var util = __webpack_require__(4);
        var CLASS_NAME_RANGE_PICKER = "tui-rangepicker";
        var CLASS_NAME_SELECTED = constants.CLASS_NAME_SELECTED;
        var CLASS_NAME_SELECTED_RANGE = "tui-is-selected-range";
        var DateRangePicker = defineClass(
          {
            init: function(options) {
              var startpickerOpt, endpickerOpt;
              options = options || {};
              startpickerOpt = options.startpicker;
              endpickerOpt = options.endpicker;
              if (!startpickerOpt) {
                throw new Error('The "startpicker" option is required.');
              }
              if (!endpickerOpt) {
                throw new Error('The "endpicker" option is required.');
              }
              this._startpicker = null;
              this._endpicker = null;
              this._isRangeSet = false;
              this._preEndPickerDate = new Date().getDate();
              this._initializePickers(options);
              this._syncRangesToEndpicker();
            },
            _initializePickers: function(options) {
              var startpickerContainer = util.getElement(options.startpicker.container);
              var endpickerContainer = util.getElement(options.endpicker.container);
              var startInput = util.getElement(options.startpicker.input);
              var endInput = util.getElement(options.endpicker.input);
              var startpickerOpt = extend2({}, options, {
                input: {
                  element: startInput,
                  format: options.format
                },
                date: options.startpicker.date,
                weekStartDay: options.startpicker.weekStartDay
              });
              var endpickerOpt = extend2({}, options, {
                input: {
                  element: endInput,
                  format: options.format
                },
                date: options.endpicker.date,
                weekStartDay: options.endpicker.weekStartDay
              });
              this._startpicker = new DatePicker2(startpickerContainer, startpickerOpt);
              this._startpicker.addCssClass(CLASS_NAME_RANGE_PICKER);
              this._startpicker.on("change", this._onChangeStartpicker, this);
              this._startpicker.on("draw", this._onDrawPicker, this);
              this._endpicker = new DatePicker2(endpickerContainer, endpickerOpt);
              this._endpicker.addCssClass(CLASS_NAME_RANGE_PICKER);
              this._endpicker.on("change", this._onChangeEndpicker, this);
              this._endpicker.on("draw", this._onDrawPicker, this);
            },
            _onDrawPicker: function(eventData) {
              var calendarType = eventData.type;
              var startDate = this._startpicker.getDate();
              var endDate = this._endpicker.getDate();
              if (!startDate) {
                return;
              }
              if (!endDate) {
                endDate = new Date(NaN);
              }
              forEachArray2(
                eventData.dateElements,
                function(el) {
                  var elDate = new Date(Number(getData(el, "timestamp")));
                  var isInRange = dateUtil.inRange(startDate, endDate, elDate, calendarType);
                  var isSelected = dateUtil.isSame(startDate, elDate, calendarType) || dateUtil.isSame(endDate, elDate, calendarType);
                  this._setRangeClass(el, isInRange);
                  this._setSelectedClass(el, isSelected);
                },
                this
              );
            },
            _setRangeClass: function(el, isInRange) {
              if (isInRange) {
                addClass(el, CLASS_NAME_SELECTED_RANGE);
              } else {
                removeClass(el, CLASS_NAME_SELECTED_RANGE);
              }
            },
            _setSelectedClass: function(el, isSelected) {
              if (isSelected) {
                addClass(el, CLASS_NAME_SELECTED);
              } else {
                removeClass(el, CLASS_NAME_SELECTED);
              }
            },
            _syncRangesToEndpicker: function() {
              var startDate = this._startpicker.getDate();
              var overlappedRange;
              if (startDate) {
                overlappedRange = this._startpicker.findOverlappedRange(
                  dateUtil.cloneWithStartOf(startDate).getTime(),
                  dateUtil.cloneWithEndOf(startDate).getTime()
                );
                this._endpicker.enable();
                this._endpicker.setRanges([[startDate.getTime(), overlappedRange[1].getTime()]]);
                this._setTimeRangeOnEndPicker();
              } else {
                this._endpicker.setNull();
                this._endpicker.disable();
              }
            },
            _onChangeStartpicker: function() {
              this._syncRangesToEndpicker();
              this.fire("change:start");
            },
            _onChangeEndpicker: function() {
              var date2;
              var endPickerDate = this._endpicker.getDate();
              if (endPickerDate) {
                date2 = endPickerDate.getDate();
                if (this._preEndPickerDate !== date2) {
                  this._setTimeRangeOnEndPicker();
                }
                this._preEndPickerDate = date2;
              } else {
                this._preEndPickerDate = null;
              }
              this.fire("change:end");
            },
            _isStartAndEndDateSame: function() {
              return !!this._endpicker.getDate() && !!this._startpicker.getDate() && dateUtil.compare(
                this._endpicker.getDate(),
                this._startpicker.getDate(),
                constants.TYPE_DATE
              ) === 0;
            },
            _setTimeRangeOnEndPicker: function() {
              var pickerDate, timeRange, timeRangeToSet;
              var endTimePicker = this._endpicker._timePicker;
              if (!endTimePicker) {
                return;
              }
              pickerDate = this._endpicker.getDate() || this._startpicker.getDate();
              timeRange = this._getTimeRangeFromStartPicker();
              timeRangeToSet = pickerDate && timeRange[pickerDate.getDate()];
              if (this._isStartAndEndDateSame() && timeRangeToSet) {
                endTimePicker.setRange(timeRangeToSet);
                this._isRangeSet = true;
              } else if (this._isRangeSet) {
                endTimePicker.setRange({ hour: 0, minute: 0 });
                endTimePicker.resetMinuteRange();
                this._isRangeSet = false;
              }
            },
            _getTimeRangeFromStartPicker: function() {
              var startDate = this._startpicker.getDate();
              var timeRange = {};
              timeRange[startDate.getDate()] = {
                hour: startDate.getHours(),
                minute: startDate.getMinutes()
              };
              return timeRange;
            },
            getStartpicker: function() {
              return this._startpicker;
            },
            getEndpicker: function() {
              return this._endpicker;
            },
            setStartDate: function(date2) {
              this._startpicker.setDate(date2);
            },
            getStartDate: function() {
              return this._startpicker.getDate();
            },
            getEndDate: function() {
              return this._endpicker.getDate();
            },
            setEndDate: function(date2) {
              this._endpicker.setDate(date2);
            },
            setRanges: function(ranges) {
              this._startpicker.setRanges(ranges);
              this._syncRangesToEndpicker();
            },
            addRange: function(start, end) {
              this._startpicker.addRange(start, end);
              this._syncRangesToEndpicker();
            },
            removeRange: function(start, end, type) {
              this._startpicker.removeRange(start, end, type);
              this._syncRangesToEndpicker();
            },
            changeLanguage: function(language) {
              this._startpicker.changeLanguage(language);
              this._endpicker.changeLanguage(language);
            },
            destroy: function() {
              this.off();
              this._startpicker.destroy();
              this._endpicker.destroy();
              this._startpicker = this._endpicker = null;
            }
          }
        );
        CustomEvents2.mixin(DateRangePicker);
        module2.exports = DateRangePicker;
      },
      function(module2, exports2, __webpack_require__) {
      }
    ]);
  });
})(tuiDatePicker);
var DatePicker = /* @__PURE__ */ getDefaultExportFromCjs(tuiDatePicker.exports);
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b2)) {
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var n$2, l$3, u$3, t$2, o$3, r$3, f$3 = {}, e$1 = [], c$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$3(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function a$3(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h$3(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
  return v$3(l2, f2, t2, o2, null);
}
function v$3(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u$3 : r2 };
  return r2 == null && l$3.vnode != null && l$3.vnode(f2), f2;
}
function p$3(n2) {
  return n2.children;
}
function d$3(n2, l2) {
  this.props = n2, this.context = l2;
}
function _$3(n2, l2) {
  if (l2 == null)
    return n2.__ ? _$3(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? _$3(n2) : null;
}
function k$2(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$2(n2);
  }
}
function b$2(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !g$4.__r++ || o$3 !== l$3.debounceRendering) && ((o$3 = l$3.debounceRendering) || setTimeout)(g$4);
}
function g$4() {
  for (var n2; g$4.__r = t$2.length; )
    n2 = t$2.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$2 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s$3({}, t2)).__v = t2.__v + 1, j$3(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? _$3(t2) : o2, t2.__h), z$2(u2, t2), t2.__e != o2 && k$2(t2)));
    });
}
function w$3(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x2 = i2 && i2.__k || e$1, C2 = x2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((k2 = u2.__k[h2] = (k2 = l2[h2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" || typeof k2 == "bigint" ? v$3(null, k2, null, null, k2) : Array.isArray(k2) ? v$3(p$3, { children: k2 }, null, null, null) : k2.__b > 0 ? v$3(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, (d2 = x2[h2]) === null || d2 && k2.key == d2.key && k2.type === d2.type)
        x2[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x2[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x2[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$3(n2, k2, d2 = d2 || f$3, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), b2 != null ? (g2 == null && (g2 = b2), typeof k2.type == "function" && k2.__k === d2.__k ? k2.__d = s2 = m$2(k2, s2, n2) : s2 = A$2(n2, k2, d2, x2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$3(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    x2[h2] != null && (typeof u2.type == "function" && x2[h2].__e != null && x2[h2].__e == u2.__d && (u2.__d = _$3(i2, h2 + 1)), N(x2[h2], x2[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$2(w2[h2], w2[++h2], w2[++h2]);
}
function m$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? m$2(i2, l2, u2) : A$2(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function x$3(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    x$3(n3, l2);
  }) : l2.push(n2)), l2;
}
function A$2(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != o2 || t2.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t2.nextSibling;
}
function C$1(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || H$2(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H$2(n2, o2, l2[o2], u2[o2], i2);
}
function $$1(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || c$3.test(l2) ? u2 : u2 + "px";
}
function H$2(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$1(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$2 : I$2, o2) : n2.removeEventListener(l2, o2 ? T$2 : I$2, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I$2(n2) {
  this.l[n2.type + false](l$3.event ? l$3.event(n2) : n2);
}
function T$2(n2) {
  this.l[n2.type + true](l$3.event ? l$3.event(n2) : n2);
}
function j$3(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x2, A2, C2, $2, H2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l$3.__b) && a2(u2);
  try {
    n:
      if (typeof H2 == "function") {
        if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x2 = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x2) : (u2.__c = h2 = new d$3(g2, x2), h2.constructor = H2, h2.render = O$2), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), H2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = s$3({}, h2.__s)), s$3(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          H2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (H2.getDerivedStateFromProps == null && g2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(g2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(g2, h2.__s, x2) === false || u2.__v === i2.__v) {
            h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(g2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x2, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l$3.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, h2.getChildContext != null && (t2 = s$3(s$3({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = a2 != null && a2.type === p$3 && a2.key == null ? a2.props.children : a2, w$3(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$2(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (a2 = l$3.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$3.__e(n3, u2, i2);
  }
}
function z$2(n2, u2) {
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
function L$2(l2, u2, i2, t2, o2, r2, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if (d2 === "svg" && (o2 = true), r2 != null) {
    for (; k2 < r2.length; k2++)
      if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, r2[k2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n$2.call(l2.childNodes), h2 = (y2 = i2.props || f$3).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (r2 != null)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$1(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$3(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && d2 !== "foreignObject", r2, e2, r2 ? r2[0] : i2.__k && _$3(i2, 0), c2), r2 != null)
      for (k2 = r2.length; k2--; )
        r2[k2] != null && a$3(r2[k2]);
    c2 || ("value" in p2 && (k2 = p2.value) !== void 0 && (k2 !== l2.value || d2 === "progress" && !k2 || d2 === "option" && k2 !== y2.value) && H$2(l2, "value", k2, y2.value, false), "checked" in p2 && (k2 = p2.checked) !== void 0 && k2 !== l2.checked && H$2(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
function M$2(n2, u2, i2) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l$3.unmount && l$3.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$2(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$3.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, typeof n2.type != "function");
  i2 || n2.__e == null || a$3(n2.__e), n2.__e = n2.__d = void 0;
}
function O$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function P$2(u2, i2, t2) {
  var o2, r2, e2;
  l$3.__ && l$3.__(u2, i2), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, e2 = [], j$3(i2, u2 = (!o2 && t2 || i2).__k = h$3(p$3, null, [u2]), r2 || f$3, f$3, i2.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n$2.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z$2(e2, u2);
}
function q$3(l2, u2, i2) {
  var t2, o2, r2, f2 = s$3({}, l2.props);
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), v$3(l2.type, f2, t2 || l2.key, o2 || l2.ref, null);
}
function B$1(n2, l2) {
  var u2 = { __c: l2 = "__cC" + r$3++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(b$2);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$2 = e$1.slice, l$3 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && o2.getDerivedStateFromError != null && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), t2.componentDidCatch != null && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$3 = 0, d$3.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$3({}, this.state), typeof n2 == "function" && (n2 = n2(s$3({}, u2), this.props)), n2 && s$3(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), b$2(this));
}, d$3.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$2(this));
}, d$3.prototype.render = p$3, t$2 = [], g$4.__r = 0, r$3 = 0;
var t$1, u$2, r$2, o$2, i$2 = 0, c$2 = [], f$2 = [], e = l$3.__b, a$2 = l$3.__r, v$2 = l$3.diffed, l$2 = l$3.__c, m$1 = l$3.unmount;
function p$2(t2, r2) {
  l$3.__h && l$3.__h(u$2, t2, i$2 || r2), i$2 = 0;
  var o2 = u$2.__H || (u$2.__H = { __: [], __h: [] });
  return t2 >= o2.__.length && o2.__.push({ __V: f$2 }), o2.__[t2];
}
function y$1(n2) {
  return i$2 = 1, d$2(z$1, n2);
}
function d$2(n2, r2, o2) {
  var i2 = p$2(t$1++, 2);
  return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : z$1(void 0, r2), function(n3) {
    var t2 = i2.t(i2.__[0], n3);
    i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
  }], i2.__c = u$2), i2.__;
}
function _$2(r2, o2) {
  var i2 = p$2(t$1++, 3);
  !l$3.__s && w$2(i2.__H, o2) && (i2.__ = r2, i2.u = o2, u$2.__H.__h.push(i2));
}
function h$2(r2, o2) {
  var i2 = p$2(t$1++, 4);
  !l$3.__s && w$2(i2.__H, o2) && (i2.__ = r2, i2.u = o2, u$2.__h.push(i2));
}
function s$2(n2) {
  return i$2 = 5, F$2(function() {
    return { current: n2 };
  }, []);
}
function F$2(n2, u2) {
  var r2 = p$2(t$1++, 7);
  return w$2(r2.__H, u2) ? (r2.__V = n2(), r2.u = u2, r2.__h = n2, r2.__V) : r2.__;
}
function T$1(n2, t2) {
  return i$2 = 8, F$2(function() {
    return n2;
  }, t2);
}
function q$2(n2) {
  var r2 = u$2.context[n2.__c], o2 = p$2(t$1++, 9);
  return o2.c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u$2)), r2.props.value) : n2.__;
}
function b$1() {
  for (var t2; t2 = c$2.shift(); )
    if (t2.__P)
      try {
        t2.__H.__h.forEach(j$2), t2.__H.__h.forEach(k$1), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], l$3.__e(u2, t2.__v);
      }
}
l$3.__b = function(n2) {
  u$2 = null, e && e(n2);
}, l$3.__r = function(n2) {
  a$2 && a$2(n2), t$1 = 0;
  var o2 = (u$2 = n2.__c).__H;
  o2 && (r$2 === u$2 ? (o2.__h = [], u$2.__h = [], o2.__.forEach(function(n3) {
    n3.__V = f$2, n3.u = void 0;
  })) : (o2.__h.forEach(j$2), o2.__h.forEach(k$1), o2.__h = [])), r$2 = u$2;
}, l$3.diffed = function(t2) {
  v$2 && v$2(t2);
  var i2 = t2.__c;
  i2 && i2.__H && (i2.__H.__h.length && (c$2.push(i2) !== 1 && o$2 === l$3.requestAnimationFrame || ((o$2 = l$3.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), g$3 && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    g$3 && (t3 = requestAnimationFrame(u2));
  })(b$1)), i2.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.__V !== f$2 && (n2.__ = n2.__V), n2.u = void 0, n2.__V = f$2;
  })), r$2 = u$2 = null;
}, l$3.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(j$2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || k$1(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], l$3.__e(r2, t3.__v);
    }
  }), l$2 && l$2(t2, u2);
}, l$3.unmount = function(t2) {
  m$1 && m$1(t2);
  var u2, r2 = t2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      j$2(n2);
    } catch (n3) {
      u2 = n3;
    }
  }), u2 && l$3.__e(u2, r2.__v));
};
var g$3 = typeof requestAnimationFrame == "function";
function j$2(n2) {
  var t2 = u$2, r2 = n2.__c;
  typeof r2 == "function" && (n2.__c = void 0, r2()), u$2 = t2;
}
function k$1(n2) {
  var t2 = u$2;
  n2.__c = n2.__(), u$2 = t2;
}
function w$2(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function z$1(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
function n$1(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$1(n2) {
  return !!n2 && !!n2[Q$1];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!n2.constructor[L$1] || s$1(n2) || v$1(n2));
}
function i$1(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o$1(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o$1(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s$1(n2) ? 2 : v$1(n2) ? 3 : 0;
}
function u$1(n2, r2) {
  return o$1(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a$1(n2, r2) {
  return o$1(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f$1(n2, r2, t2) {
  var e2 = o$1(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c$1(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s$1(n2) {
  return X && n2 instanceof Map;
}
function v$1(n2) {
  return q$1 && n2 instanceof Set;
}
function p$1(n2) {
  return n2.o || n2.t;
}
function l$1(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$1];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d$1(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || r$1(n2) || !t(n2) ? n2 : (o$1(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$1), Object.freeze(n2), e2 && i$1(n2, function(n3, r2) {
    return d$1(r2, true);
  }, true), n2);
}
function h$1() {
  n$1(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n$1(18, r2), t2;
}
function _$1() {
  return U;
}
function j$1(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O$1(n2) {
  g$2(n2), n2.p.forEach(S$1), n2.p = null;
}
function g$2(n2) {
  n2 === U && (U = n2.l);
}
function w$1(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S$1(n2) {
  var r2 = n2[Q$1];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P$1(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q$1].P && (O$1(e2), n$1(4)), t(r2) && (r2 = M$1(e2, r2), e2.l || x$2(e2, r2)), e2.u && b("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M$1(e2, i2, []), O$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$1 ? r2 : void 0;
}
function M$1(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q$1];
  if (!e2)
    return i$1(r2, function(i2, o3) {
      return A$1(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x$2(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l$1(e2.k) : e2.o;
    i$1(e2.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A$1(n2, e2, o2, r3, i2, t2);
    }), x$2(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$1(e2, i2, o2, a2, c2, s2) {
  if (r$1(c2)) {
    var v2 = M$1(e2, c2, s2 && i2 && i2.i !== 3 && !u$1(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f$1(o2, a2, v2), !r$1(v2))
      return;
    e2.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M$1(e2, c2), i2 && i2.A.l || x$2(e2, c2);
  }
}
function x$2(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d$1(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$1(t2) : n2)[r2];
}
function I$1(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E$1(n2) {
  n2.o || (n2.o = l$1(n2.t));
}
function R$1(n2, r2, t2) {
  var e2 = s$1(r2) ? b("MapSet").N(r2, t2) : v$1(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function D$1(e2) {
  return r$1(e2) || n$1(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q$1], c2 = o$1(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F$1(r2, c2), u2.I = false;
    } else
      e3 = F$1(r2, c2);
    return i$1(e3, function(r3, t2) {
      u2 && a$1(u2.t, r3) === t2 || f$1(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F$1(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$1(n2);
}
var G, U, W$1 = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X = typeof Map != "undefined", q$1 = typeof Set != "undefined", B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H$1 = W$1 ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L$1 = W$1 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W$1 ? Symbol.for("immer-state") : "__$immer_state", Z$1 = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$1)
    return n2;
  var e2 = p$1(n2);
  if (!u$1(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$1(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E$1(n2), n2.o[r2] = R$1(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$1(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$1(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$1(p$1(n2), r2);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p$1(n2), r2), o2 = i2 == null ? void 0 : i2[Q$1];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c$1(t2, i2) && (t2 !== void 0 || u$1(n2.t, r2)))
      return true;
    E$1(n2), k(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E$1(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$1(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$1(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$1(12);
} }, on = {};
i$1(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un$1 = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n$1(6), o2 !== void 0 && typeof o2 != "function" && n$1(7), t(r3)) {
        var c2 = w$1(e3), s2 = R$1(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O$1(c2) : g$2(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j$1(c2, o2), P$1(n2, c2);
        }, function(n2) {
          throw O$1(c2), n2;
        }) : (j$1(c2, o2), P$1(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H$1 && (f2 = void 0), e3.F && d$1(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$1(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n$1(8), r$1(e3) && (e3 = D$1(e3));
    var i3 = w$1(this), o2 = R$1(this, e3, void 0);
    return o2[Q$1].C = true, g$2(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j$1(i3, t2), P$1(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n$1(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r$1(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un$1(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var produce = fn;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function isUndefined$3(obj) {
  return obj === void 0;
}
var isUndefined_1 = isUndefined$3;
var isUndefined$2 = isUndefined_1;
function range(start, stop, step) {
  var arr = [];
  var flag;
  if (isUndefined$2(stop)) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;
  flag = step < 0 ? -1 : 1;
  stop *= flag;
  for (; start * flag < stop; start += step) {
    arr.push(start);
  }
  return arr;
}
var range_1 = range;
const DEFAULT_DAY_NAME_MARGIN_LEFT = "0";
const MONTH_EVENT_HEIGHT = 24;
const MONTH_EVENT_MARGIN_TOP = 2;
const MONTH_CELL_PADDING_TOP = 3;
const MONTH_CELL_BAR_HEIGHT = 27;
const MONTH_MORE_VIEW_PADDING = 5;
const MONTH_MORE_VIEW_MIN_WIDTH = 280;
const MONTH_MORE_VIEW_HEADER_HEIGHT = 44;
const MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM = 12;
const MONTH_MORE_VIEW_HEADER_PADDING_TOP = 12;
const MONTH_MORE_VIEW_HEADER_PADDING = "12px 17px 0";
const WEEK_DAY_NAME_HEIGHT = 42;
const WEEK_DAY_NAME_BORDER = 1;
const WEEK_EVENT_MARGIN_TOP = 2;
const DEFAULT_PANEL_HEIGHT = 72;
const DEFAULT_EVENT_COLORS = {
  color: "#000",
  backgroundColor: "#a1b56c",
  dragBackgroundColor: "#a1b56c",
  borderColor: "#000"
};
const TIME_EVENT_CONTAINER_MARGIN_LEFT = 2;
const COLLAPSED_DUPLICATE_EVENT_WIDTH_PX = 9;
function isBoolean(obj) {
  return typeof obj === "boolean" || obj instanceof Boolean;
}
var isBoolean_1 = isBoolean;
function isNumber(obj) {
  return typeof obj === "number" || obj instanceof Number;
}
var isNumber_1 = isNumber;
function isObject$1(obj) {
  return obj === Object(obj);
}
var isObject_1 = isObject$1;
function isString$1(obj) {
  return typeof obj === "string" || obj instanceof String;
}
var isString_1 = isString$1;
function isNil(value) {
  return isUndefined_1(value) || value === null;
}
function isPresent(value) {
  return !isNil(value);
}
function isFunction$2(value) {
  return typeof value === "function";
}
const CSS_PREFIX = "toastui-calendar-";
function cls(...args) {
  const result = [];
  args.forEach((arg) => {
    if (!arg) {
      return;
    }
    if (isString_1(arg)) {
      result.push(arg);
    } else {
      Object.keys(arg).forEach((className2) => {
        if (arg[className2]) {
          result.push(className2);
        }
      });
    }
  });
  return result.map((str) => `${CSS_PREFIX}${str}`).join(" ");
}
function toPercent(value) {
  return `${value}%`;
}
function toPx(value) {
  return `${value}px`;
}
function extractPercentPx(value) {
  const percentRegexp = /(\d+)%/;
  const percentResult = value.match(percentRegexp);
  const pxRegexp = /(-?)\s?(\d+)px/;
  const pxResult = value.match(pxRegexp);
  return {
    percent: percentResult ? parseInt(percentResult[1], 10) : 0,
    px: pxResult ? parseInt(`${pxResult[1]}${pxResult[2]}`, 10) : 0
  };
}
function getEventColors(uiModel, calendarColor) {
  const eventColors = uiModel.model.getColors();
  return Object.keys(DEFAULT_EVENT_COLORS).reduce((colors, _key) => {
    var _a2, _b;
    const key = _key;
    colors[key] = (_b = (_a2 = eventColors[key]) != null ? _a2 : calendarColor[key]) != null ? _b : DEFAULT_EVENT_COLORS[key];
    return colors;
  }, {});
}
const rISO8601 = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
function throwNotSupported() {
  throw new Error("This operation is not supported.");
}
function getDateTime(dateString) {
  const match = rISO8601.exec(dateString);
  if (match) {
    const [, y2, M2, d2, h2, m2, s2, , ms, zoneInfo] = match;
    return {
      y: Number(y2),
      M: Number(M2) - 1,
      d: Number(d2),
      h: Number(h2),
      m: Number(m2),
      s: Number(s2),
      ms: Number(ms) || 0,
      zoneInfo
    };
  }
  return null;
}
function createFromDateString(dateString) {
  const info = getDateTime(dateString);
  if (info && !info.zoneInfo) {
    const { y: y2, M: M2, d: d2, h: h2, m: m2, s: s2, ms } = info;
    return new Date(y2, M2, d2, h2, m2, s2, ms);
  }
  return null;
}
class LocalDate {
  constructor(...args) {
    const [firstArg] = args;
    if (firstArg instanceof Date) {
      this.d = new Date(firstArg.getTime());
    } else if (isString_1(firstArg) && args.length === 1) {
      this.d = createFromDateString(firstArg);
    }
    if (!this.d) {
      this.d = new Date(...args);
    }
  }
  setTimezoneOffset() {
    throwNotSupported();
  }
  setTimezoneName() {
    throwNotSupported();
  }
  clone() {
    return new LocalDate(this.d);
  }
  toDate() {
    return new Date(this.d.getTime());
  }
  toString() {
    return this.d.toString();
  }
}
const getterMethods = [
  "getTime",
  "getTimezoneOffset",
  "getFullYear",
  "getMonth",
  "getDate",
  "getHours",
  "getMinutes",
  "getSeconds",
  "getMilliseconds",
  "getDay"
];
const setterMethods = [
  "setTime",
  "setFullYear",
  "setMonth",
  "setDate",
  "setHours",
  "setMinutes",
  "setSeconds",
  "setMilliseconds"
];
getterMethods.forEach((methodName) => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
setterMethods.forEach((methodName) => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
class UTCDate extends LocalDate {
  clone() {
    return new UTCDate(this.d);
  }
  getTimezoneOffset() {
    return 0;
  }
}
const getterProperties = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds",
  "Day"
];
const setterProperties = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds"
];
getterProperties.forEach((prop) => {
  const methodName = `get${prop}`;
  UTCDate.prototype[methodName] = function(...args) {
    return this.d[`getUTC${prop}`](...args);
  };
});
setterProperties.forEach((prop) => {
  const methodName = `set${prop}`;
  UTCDate.prototype[methodName] = function(...args) {
    return this.d[`setUTC${prop}`](...args);
  };
});
const INVALID_DATETIME_FORMAT = "Invalid DateTime Format";
const INVALID_TIMEZONE_NAME = "Invalid IANA Timezone Name";
const INVALID_VIEW_TYPE = "Invalid View Type";
const MESSAGE_PREFIX = "@toast-ui/calendar: ";
class InvalidTimezoneNameError extends Error {
  constructor(timezoneName) {
    super(`${MESSAGE_PREFIX}${INVALID_TIMEZONE_NAME} - ${timezoneName}`);
    this.name = "InvalidTimezoneNameError";
  }
}
class InvalidDateTimeFormatError extends Error {
  constructor(dateTimeString) {
    super(`${MESSAGE_PREFIX}${INVALID_DATETIME_FORMAT} - ${dateTimeString}`);
    this.name = "InvalidDateTimeFormatError";
  }
}
class InvalidViewTypeError extends Error {
  constructor(viewType) {
    super(`${MESSAGE_PREFIX}${INVALID_VIEW_TYPE} - ${viewType}`);
    this.name = "InvalidViewTypeError";
  }
}
const logger = {
  error: (firstArg, ...restArgs) => {
    console.error(`${MESSAGE_PREFIX}${firstArg}`, ...restArgs);
  },
  warn: (firstArg, ...restArgs) => {
    console.warn(`${MESSAGE_PREFIX}${firstArg}`, ...restArgs);
  }
};
let Constructor = LocalDate;
function date(...args) {
  return new Constructor(...args);
}
function getLocalTimezoneOffset() {
  return -new Date().getTimezoneOffset();
}
function calculateTimezoneOffset(timezoneName, targetDate = new TZDate()) {
  if (!isIntlDateTimeFormatSupported()) {
    logger.warn("Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.\nYou can use a polyfill to fix this issue.");
    return -targetDate.toDate().getTimezoneOffset();
  }
  validateIANATimezoneName(timezoneName);
  const token = tokenizeTZDate(targetDate, timezoneName);
  const utcDate = tokenToUtcDate(token);
  return Math.round((utcDate.getTime() - targetDate.getTime()) / 60 / 1e3);
}
function isUsingDST(targetDate, timezoneName) {
  if (timezoneName) {
    validateIANATimezoneName(timezoneName);
  }
  const jan = new TZDate(targetDate.getFullYear(), 0, 1);
  const jul = new TZDate(targetDate.getFullYear(), 6, 1);
  if (timezoneName) {
    return Math.max(-calculateTimezoneOffset(timezoneName, jan), -calculateTimezoneOffset(timezoneName, jul)) !== -calculateTimezoneOffset(timezoneName, targetDate);
  }
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) !== targetDate.toDate().getTimezoneOffset();
}
const dtfCache = {};
const timezoneNameValidationCache = {};
function isIntlDateTimeFormatSupported() {
  var _a2, _b;
  return isFunction$2((_b = (_a2 = Intl == null ? void 0 : Intl.DateTimeFormat) == null ? void 0 : _a2.prototype) == null ? void 0 : _b.formatToParts);
}
function validateIANATimezoneName(timezoneName) {
  if (timezoneNameValidationCache[timezoneName]) {
    return true;
  }
  try {
    Intl.DateTimeFormat("en-US", { timeZone: timezoneName });
    timezoneNameValidationCache[timezoneName] = true;
    return true;
  } catch (e2) {
    throw new InvalidTimezoneNameError(timezoneName);
  }
}
function getDateTimeFormat(timezoneName) {
  if (dtfCache[timezoneName]) {
    return dtfCache[timezoneName];
  }
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: timezoneName,
    hourCycle: "h23",
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  dtfCache[timezoneName] = dtf;
  return dtf;
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function tokenizeTZDate(tzDate, timezoneName) {
  const dtf = getDateTimeFormat(timezoneName);
  const formatted = dtf.formatToParts(tzDate.toDate());
  return formatted.reduce((result, cur) => {
    const pos = typeToPos[cur.type];
    if (isPresent(pos)) {
      result[pos] = parseInt(cur.value, 10);
    }
    return result;
  }, []);
}
function tokenToUtcDate(token) {
  const [year, monthPlusOne, day, hour, minute, second] = token;
  const month = monthPlusOne - 1;
  return new Date(Date.UTC(year, month, day, hour % 24, minute, second));
}
function getTZOffsetMSDifference(offset) {
  return (getLocalTimezoneOffset() - offset) * MS_PER_MINUTES;
}
class TZDate {
  constructor(...args) {
    this.tzOffset = null;
    if (args[0] instanceof TZDate) {
      this.d = date(args[0].getTime());
    } else {
      this.d = date(...args);
    }
  }
  toString() {
    return this.d.toString();
  }
  addFullYear(y2) {
    this.setFullYear(this.getFullYear() + y2);
    return this;
  }
  addMonth(m2) {
    this.setMonth(this.getMonth() + m2);
    return this;
  }
  addDate(d2) {
    this.setDate(this.getDate() + d2);
    return this;
  }
  addHours(h2) {
    this.setHours(this.getHours() + h2);
    return this;
  }
  addMinutes(M2) {
    this.setMinutes(this.getMinutes() + M2);
    return this;
  }
  addSeconds(s2) {
    this.setSeconds(this.getSeconds() + s2);
    return this;
  }
  addMilliseconds(ms) {
    this.setMilliseconds(this.getMilliseconds() + ms);
    return this;
  }
  setWithRaw(y2, m2, d2, h2, M2, s2, ms) {
    this.setFullYear(y2, m2, d2);
    this.setHours(h2, M2, s2, ms);
    return this;
  }
  toDate() {
    return this.d.toDate();
  }
  valueOf() {
    return this.getTime();
  }
  getTimezoneOffset() {
    var _a2;
    return (_a2 = this.tzOffset) != null ? _a2 : this.d.getTimezoneOffset();
  }
  getTime() {
    return this.d.getTime();
  }
  getFullYear() {
    return this.d.getFullYear();
  }
  getMonth() {
    return this.d.getMonth();
  }
  getDate() {
    return this.d.getDate();
  }
  getHours() {
    return this.d.getHours();
  }
  getMinutes() {
    return this.d.getMinutes();
  }
  getSeconds() {
    return this.d.getSeconds();
  }
  getMilliseconds() {
    return this.d.getMilliseconds();
  }
  getDay() {
    return this.d.getDay();
  }
  setTime(t2) {
    return this.d.setTime(t2);
  }
  setFullYear(y2, m2 = this.getMonth(), d2 = this.getDate()) {
    return this.d.setFullYear(y2, m2, d2);
  }
  setMonth(m2, d2 = this.getDate()) {
    return this.d.setMonth(m2, d2);
  }
  setDate(d2) {
    return this.d.setDate(d2);
  }
  setHours(h2, M2 = this.getMinutes(), s2 = this.getSeconds(), ms = this.getMilliseconds()) {
    return this.d.setHours(h2, M2, s2, ms);
  }
  setMinutes(M2, s2 = this.getSeconds(), ms = this.getMilliseconds()) {
    return this.d.setMinutes(M2, s2, ms);
  }
  setSeconds(s2, ms = this.getMilliseconds()) {
    return this.d.setSeconds(s2, ms);
  }
  setMilliseconds(ms) {
    return this.d.setMilliseconds(ms);
  }
  tz(tzValue) {
    if (tzValue === "Local") {
      return new TZDate(this.getTime());
    }
    const tzOffset = isString_1(tzValue) ? calculateTimezoneOffset(tzValue, this) : tzValue;
    const newTZDate = new TZDate(this.getTime() - getTZOffsetMSDifference(tzOffset));
    newTZDate.tzOffset = tzOffset;
    return newTZDate;
  }
  local(tzValue) {
    if (isPresent(tzValue)) {
      const tzOffset = isString_1(tzValue) ? calculateTimezoneOffset(tzValue, this) : tzValue;
      return new TZDate(this.getTime() + getTZOffsetMSDifference(tzOffset));
    }
    return new TZDate(this.getTime() + (isPresent(this.tzOffset) ? getTZOffsetMSDifference(this.tzOffset) : 0));
  }
}
function pick(obj, ...propNames) {
  return propNames.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function clone$1(source) {
  return Object.assign(Object.create(Object.getPrototypeOf(source)), source);
}
function mergeObject(target, source = {}) {
  if (!isObject_1(source)) {
    return target;
  }
  Object.keys(source).forEach((k2) => {
    const targetKey = k2;
    const sourceKey = k2;
    if (!Array.isArray(source[sourceKey]) && isObject_1(target[targetKey]) && isObject_1(source[sourceKey]) && !(source[sourceKey] instanceof TZDate)) {
      target[targetKey] = mergeObject(target[targetKey], source[sourceKey]);
    } else {
      target[targetKey] = source[sourceKey];
    }
  });
  return target;
}
const eventUIPropsKey = [
  "top",
  "left",
  "width",
  "height",
  "exceedLeft",
  "exceedRight",
  "croppedStart",
  "croppedEnd",
  "goingDurationHeight",
  "modelDurationHeight",
  "comingDurationHeight",
  "duplicateEvents",
  "duplicateEventIndex",
  "duplicateStarts",
  "duplicateEnds",
  "duplicateLeft",
  "duplicateWidth",
  "collapse",
  "isMain"
];
class EventUIModel {
  constructor(event) {
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.exceedLeft = false;
    this.exceedRight = false;
    this.croppedStart = false;
    this.croppedEnd = false;
    this.goingDurationHeight = 0;
    this.modelDurationHeight = 100;
    this.comingDurationHeight = 0;
    this.duplicateEvents = [];
    this.duplicateEventIndex = -1;
    this.duplicateLeft = "";
    this.duplicateWidth = "";
    this.collapse = false;
    this.isMain = false;
    this.model = event;
  }
  getUIProps() {
    return pick(this, ...eventUIPropsKey);
  }
  setUIProps(props) {
    Object.assign(this, props);
  }
  getStarts() {
    if (this.renderStarts) {
      return this.renderStarts;
    }
    return this.model.getStarts();
  }
  getEnds() {
    if (this.renderEnds) {
      return this.renderEnds;
    }
    return this.model.getEnds();
  }
  cid() {
    return this.model.cid();
  }
  valueOf() {
    return this.model;
  }
  duration() {
    return this.model.duration();
  }
  collidesWith(uiModel, usingTravelTime = true) {
    const infos = [];
    [this, uiModel].forEach((event) => {
      const isDuplicateEvent = event instanceof EventUIModel && event.duplicateEvents.length > 0;
      if (isDuplicateEvent) {
        infos.push({
          start: event.duplicateStarts,
          end: event.duplicateEnds,
          goingDuration: 0,
          comingDuration: 0
        });
      } else {
        infos.push({
          start: event.getStarts(),
          end: event.getEnds(),
          goingDuration: event.valueOf().goingDuration,
          comingDuration: event.valueOf().comingDuration
        });
      }
    });
    const [thisInfo, targetInfo] = infos;
    return collidesWith({
      start: thisInfo.start.getTime(),
      end: thisInfo.end.getTime(),
      targetStart: targetInfo.start.getTime(),
      targetEnd: targetInfo.end.getTime(),
      goingDuration: thisInfo.goingDuration,
      comingDuration: thisInfo.comingDuration,
      targetGoingDuration: targetInfo.goingDuration,
      targetComingDuration: targetInfo.comingDuration,
      usingTravelTime
    });
  }
  clone() {
    const eventUIModelProps = this.getUIProps();
    const clonedEventUIModel = new EventUIModel(this.model);
    clonedEventUIModel.setUIProps(eventUIModelProps);
    if (this.renderStarts) {
      clonedEventUIModel.renderStarts = new TZDate(this.renderStarts);
    }
    if (this.renderEnds) {
      clonedEventUIModel.renderEnds = new TZDate(this.renderEnds);
    }
    return clonedEventUIModel;
  }
}
function compareBooleansASC(a2, b2) {
  if (a2 !== b2) {
    return a2 ? -1 : 1;
  }
  return 0;
}
function compareNumbersASC(a2, b2) {
  return Number(a2) - Number(b2);
}
function compareStringsASC(_a2, _b) {
  const a2 = String(_a2);
  const b2 = String(_b);
  if (a2 === b2) {
    return 0;
  }
  return a2 > b2 ? 1 : -1;
}
function compareEventsASC(a2, b2) {
  const modelA = a2 instanceof EventUIModel ? a2.model : a2;
  const modelB = b2 instanceof EventUIModel ? b2.model : b2;
  const alldayCompare = compareBooleansASC(modelA.isAllday || modelA.hasMultiDates, modelB.isAllday || modelB.hasMultiDates);
  if (alldayCompare) {
    return alldayCompare;
  }
  const startsCompare = compare(a2.getStarts(), b2.getStarts());
  if (startsCompare) {
    return startsCompare;
  }
  const durationA = a2.duration();
  const durationB = b2.duration();
  if (durationA < durationB) {
    return 1;
  }
  if (durationA > durationB) {
    return -1;
  }
  return modelA.cid() - modelB.cid();
}
function bsearch(arr, search, fn2, compareFn) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let value;
  let comp;
  compareFn = compareFn || compareStringsASC;
  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    value = fn2 ? fn2(arr[currentIndex]) : arr[currentIndex];
    comp = compareFn(value, search);
    if (comp < 0) {
      minIndex = currentIndex + 1;
    } else if (comp > 0) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return ~maxIndex;
}
var array = {
  bsearch,
  compare: {
    event: {
      asc: compareEventsASC
    },
    num: {
      asc: compareNumbersASC
    }
  }
};
function first(array2) {
  return array2[0];
}
function last(array2) {
  return array2[array2.length - 1];
}
function findLastIndex(array2, predicate) {
  for (let i2 = array2.length - 1; i2 >= 0; i2 -= 1) {
    if (predicate(array2[i2])) {
      return i2;
    }
  }
  return -1;
}
function fill(length, value) {
  if (length > 0) {
    return Array.from({ length }, () => {
      if (Array.isArray(value)) {
        return value.slice();
      }
      return value;
    });
  }
  return [];
}
var Day$2 = /* @__PURE__ */ ((Day2) => {
  Day2[Day2["SUN"] = 0] = "SUN";
  Day2[Day2["MON"] = 1] = "MON";
  Day2[Day2["TUE"] = 2] = "TUE";
  Day2[Day2["WED"] = 3] = "WED";
  Day2[Day2["THU"] = 4] = "THU";
  Day2[Day2["FRI"] = 5] = "FRI";
  Day2[Day2["SAT"] = 6] = "SAT";
  return Day2;
})(Day$2 || {});
const WEEK_DAYS = 7;
const dateFormatRx = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/;
const memo = {
  millisecondsTo: {},
  millisecondsFrom: {}
};
const convByTimeUnit = [24, 60, 60, 1e3];
function leadingZero(number, length) {
  let zero = "";
  let i2 = 0;
  if (String(number).length > length) {
    return String(number);
  }
  for (; i2 < length - 1; i2 += 1) {
    zero += "0";
  }
  return (zero + number).slice(length * -1);
}
function getHourForMeridiem(date2) {
  let hour = date2.getHours();
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour % 12;
  }
  return hour;
}
const tokenFunc = {
  YYYYMMDD(date2) {
    return [
      date2.getFullYear(),
      leadingZero(date2.getMonth() + 1, 2),
      leadingZero(date2.getDate(), 2)
    ].join("");
  },
  YYYY(date2) {
    return String(date2.getFullYear());
  },
  MM(date2) {
    return leadingZero(date2.getMonth() + 1, 2);
  },
  DD(date2) {
    return leadingZero(date2.getDate(), 2);
  },
  "HH:mm": function(date2) {
    const hour = date2.getHours();
    const minutes = date2.getMinutes();
    return `${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  "hh:mm": function(date2) {
    const hour = getHourForMeridiem(date2);
    const minutes = date2.getMinutes();
    return `${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  hh(date2) {
    const hour = getHourForMeridiem(date2);
    return String(hour);
  },
  tt(date2) {
    const hour = date2.getHours();
    return hour < 12 ? "am" : "pm";
  }
};
const MS_PER_DAY = 864e5;
const MS_PER_MINUTES = 6e4;
const MS_EVENT_MIN_DURATION = 20 * MS_PER_MINUTES;
const MS_PER_THIRTY_MINUTES = 30 * 60 * 1e3;
function toFormat(date2, strFormat) {
  let result = strFormat;
  Object.entries(tokenFunc).forEach(([token, converter]) => {
    result = result.replace(token, converter(date2));
  });
  return result;
}
function convMilliseconds(type, value, iteratee) {
  const index = {
    date: 0,
    hour: 1,
    minute: 2,
    second: 3
  };
  if (!(type in index) || isNaN(value)) {
    return 0;
  }
  return [value].concat(convByTimeUnit.slice(index[type])).reduce(iteratee);
}
function millisecondsFrom(type, value) {
  const cache = memo.millisecondsFrom;
  const key = type + value;
  if (cache[key]) {
    return cache[key];
  }
  const result = convMilliseconds(type, value, (m2, v2) => m2 * v2);
  if (!result) {
    return 0;
  }
  cache[key] = result;
  return cache[key];
}
function toStartOfDay(date2) {
  const d2 = date2 ? new TZDate(date2) : new TZDate();
  d2.setHours(0, 0, 0, 0);
  return d2;
}
function makeDateRange(startDate, endDate, step) {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const date2 = new TZDate(startDate);
  const result = [];
  let cursor = startTime;
  while (cursor <= endTime && endTime >= date2.getTime()) {
    result.push(new TZDate(date2));
    cursor = cursor + step;
    date2.addMilliseconds(step);
  }
  return result;
}
function clone(date2) {
  return new TZDate(date2);
}
function compare(d1, d2) {
  const _d1 = d1.getTime();
  const _d2 = d2.getTime();
  if (_d1 < _d2) {
    return -1;
  }
  if (_d1 > _d2) {
    return 1;
  }
  return 0;
}
function isSameYear(d1, d2) {
  return d1.getFullYear() === d2.getFullYear();
}
function isSameMonth(d1, d2) {
  return isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
}
function isSameDate(d1, d2) {
  return isSameMonth(d1, d2) && d1.getDate() === d2.getDate();
}
function max(d1, d2) {
  return compare(d1, d2) === 1 ? d1 : d2;
}
function min(d1, d2) {
  return compare(d1, d2) === -1 ? d1 : d2;
}
function parse(str, fixMonth = -1) {
  const matches = str.match(dateFormatRx);
  let separator;
  let ymd;
  let hms;
  if (!matches) {
    throw new InvalidDateTimeFormatError(str);
  }
  if (str.length > 8) {
    separator = ~str.indexOf("/") ? "/" : "-";
    const result = matches.splice(1);
    ymd = result[0].split(separator);
    hms = result[1] ? result[1].split(":") : [0, 0, 0];
  } else {
    const [result] = matches;
    ymd = [result.substr(0, 4), result.substr(4, 2), result.substr(6, 2)];
    hms = [0, 0, 0];
  }
  return new TZDate().setWithRaw(Number(ymd[0]), Number(ymd[1]) + fixMonth, Number(ymd[2]), Number(hms[0]), Number(hms[1]), Number(hms[2]), 0);
}
function toEndOfDay(date2) {
  const d2 = date2 ? new TZDate(date2) : new TZDate();
  d2.setHours(23, 59, 59, 999);
  return d2;
}
function isWeekend(day) {
  return day === 0 || day === 6;
}
function isSunday(day) {
  return day === 0;
}
function isSaturday(day) {
  return day === 6;
}
function toStartOfMonth(date2) {
  const startDate = new TZDate(date2);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}
function toEndOfMonth(date2) {
  const endDate = toStartOfMonth(date2);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(endDate.getDate() - 1);
  endDate.setHours(23, 59, 59, 999);
  return endDate;
}
function getRowStyleInfo(days, narrowWeekend, startDayOfWeek, workweek) {
  const limitDaysToApplyNarrowWeekend = 5;
  const uniformWidth = 100 / days;
  const wideWidth = days > limitDaysToApplyNarrowWeekend ? 100 / (days - 1) : uniformWidth;
  let accumulatedWidth = 0;
  const dates = range_1(startDayOfWeek, WEEK_DAYS).concat(range_1(days)).slice(0, WEEK_DAYS);
  narrowWeekend = workweek ? false : narrowWeekend;
  const rowStyleInfo = dates.map((day) => {
    let width = narrowWeekend ? wideWidth : uniformWidth;
    if (days > limitDaysToApplyNarrowWeekend && narrowWeekend && isWeekend(day)) {
      width = wideWidth / 2;
    }
    const model = {
      width,
      left: accumulatedWidth
    };
    accumulatedWidth += width;
    return model;
  });
  const { length } = rowStyleInfo;
  const cellWidthMap = fill(length, fill(length, 0));
  rowStyleInfo.forEach(({ width }, index) => {
    for (let i2 = 0; i2 <= index; i2 += 1) {
      for (let j2 = index; j2 < length; j2 += 1) {
        cellWidthMap[i2][j2] += width;
      }
    }
  });
  cellWidthMap[0][length - 1] = 100;
  return {
    rowStyleInfo,
    cellWidthMap: cellWidthMap.map((widthList) => widthList.map(toPercent))
  };
}
function addMilliseconds(d2, step) {
  const date2 = clone(d2);
  date2.setMilliseconds(d2.getMilliseconds() + step);
  return date2;
}
function addMinutes(d2, step) {
  const date2 = clone(d2);
  date2.setMinutes(d2.getMinutes() + step);
  return date2;
}
function setTimeStrToDate(d2, timeStr) {
  const date2 = clone(d2);
  date2.setHours(...timeStr.split(":").map(Number));
  return date2;
}
function addDate(d2, step) {
  const date2 = clone(d2);
  date2.setDate(d2.getDate() + step);
  return date2;
}
function subtractDate(d2, steps) {
  const date2 = clone(d2);
  date2.setDate(d2.getDate() - steps);
  return date2;
}
function addMonths(d2, step = 1) {
  const date2 = clone(d2);
  if (step !== 0) {
    const dayOfMonth = date2.getDate();
    const endOfDesiredMonth = new TZDate(date2.getTime());
    endOfDesiredMonth.setMonth(date2.getMonth() + step + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
      return endOfDesiredMonth;
    }
    date2.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
  }
  return date2;
}
function getDateDifference(d1, d2) {
  const _d1 = new TZDate(d1.getFullYear(), d1.getMonth(), d1.getDate()).getTime();
  const _d2 = new TZDate(d2.getFullYear(), d2.getMonth(), d2.getDate()).getTime();
  return Math.round((_d1 - _d2) / MS_PER_DAY);
}
function hasCollision(start, end, targetStart, targetEnd) {
  return targetStart > start && targetStart < end || targetEnd > start && targetEnd < end || targetStart <= start && targetEnd >= end;
}
function collidesWith({
  start,
  end,
  targetStart,
  targetEnd,
  goingDuration,
  comingDuration,
  targetGoingDuration,
  targetComingDuration,
  usingTravelTime
}) {
  if (Math.abs(end - start) < MS_EVENT_MIN_DURATION) {
    end += MS_EVENT_MIN_DURATION;
  }
  if (Math.abs(end - start) < MS_EVENT_MIN_DURATION) {
    end += MS_EVENT_MIN_DURATION;
  }
  if (usingTravelTime) {
    start -= millisecondsFrom("minute", goingDuration);
    end += millisecondsFrom("minute", comingDuration);
    targetStart -= millisecondsFrom("minute", targetGoingDuration);
    targetEnd += millisecondsFrom("minute", targetComingDuration);
  }
  return hasCollision(start, end, targetStart, targetEnd);
}
function isSameEvent(event, eventId, calendarId) {
  return event.id === eventId && event.calendarId === calendarId;
}
function idGenerator() {
  let id = 0;
  return {
    next() {
      id += 1;
      return id;
    }
  };
}
const getId = function() {
  const generator = idGenerator();
  return () => generator.next();
}();
function stamp(obj) {
  if (!obj.__fe_id) {
    obj.__fe_id = getId();
  }
  return obj.__fe_id;
}
class EventModel {
  constructor(event = {}) {
    this.id = "";
    this.calendarId = "";
    this.title = "";
    this.body = "";
    this.isAllday = false;
    this.start = new TZDate();
    this.end = new TZDate();
    this.goingDuration = 0;
    this.comingDuration = 0;
    this.location = "";
    this.attendees = [];
    this.category = "time";
    this.dueDateClass = "";
    this.recurrenceRule = "";
    this.state = "Busy";
    this.isVisible = true;
    this.isPending = false;
    this.isFocused = false;
    this.isReadOnly = false;
    this.isPrivate = false;
    this.customStyle = {};
    this.raw = null;
    this.hasMultiDates = false;
    stamp(this);
    this.init(event);
  }
  init({
    id = "",
    calendarId = "",
    title = "",
    body = "",
    isAllday: isAllday2 = false,
    start = new TZDate(),
    end = new TZDate(),
    goingDuration = 0,
    comingDuration = 0,
    location: location2 = "",
    attendees = [],
    category = "time",
    dueDateClass = "",
    recurrenceRule = "",
    state = "Busy",
    isVisible = true,
    isPending = false,
    isFocused = false,
    isReadOnly = false,
    isPrivate = false,
    color,
    backgroundColor,
    dragBackgroundColor,
    borderColor,
    customStyle = {},
    raw = null
  } = {}) {
    this.id = id;
    this.calendarId = calendarId;
    this.title = title;
    this.body = body;
    this.isAllday = category === "allday" ? true : isAllday2;
    this.goingDuration = goingDuration;
    this.comingDuration = comingDuration;
    this.location = location2;
    this.attendees = attendees;
    this.category = category;
    this.dueDateClass = dueDateClass;
    this.recurrenceRule = recurrenceRule;
    this.state = state;
    this.isVisible = isVisible;
    this.isPending = isPending;
    this.isFocused = isFocused;
    this.isReadOnly = isReadOnly;
    this.isPrivate = isPrivate;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.dragBackgroundColor = dragBackgroundColor;
    this.borderColor = borderColor;
    this.customStyle = customStyle;
    this.raw = raw;
    if (this.isAllday) {
      this.setAlldayPeriod(start, end);
    } else {
      this.setTimePeriod(start, end);
    }
    if (category === "milestone" || category === "task") {
      this.start = new TZDate(this.end);
    }
  }
  setAlldayPeriod(start, end) {
    let startedAt;
    let endedAt;
    if (isString_1(start)) {
      startedAt = parse(start.substring(0, 10));
    } else {
      startedAt = new TZDate(start || Date.now());
    }
    if (isString_1(end)) {
      endedAt = parse(end.substring(0, 10));
    } else {
      endedAt = new TZDate(end || this.start);
    }
    this.start = startedAt;
    this.start.setHours(0, 0, 0);
    this.end = endedAt || new TZDate(this.start);
    this.end.setHours(23, 59, 59);
  }
  setTimePeriod(start, end) {
    this.start = new TZDate(start || Date.now());
    this.end = new TZDate(end || this.start);
    if (!end) {
      this.end.setMinutes(this.end.getMinutes() + 30);
    }
    this.hasMultiDates = this.end.getTime() - this.start.getTime() > MS_PER_DAY;
  }
  getStarts() {
    return this.start;
  }
  getEnds() {
    return this.end;
  }
  cid() {
    return stamp(this);
  }
  equals(event) {
    if (this.id !== event.id) {
      return false;
    }
    if (this.title !== event.title) {
      return false;
    }
    if (this.body !== event.body) {
      return false;
    }
    if (this.isAllday !== event.isAllday) {
      return false;
    }
    if (compare(this.getStarts(), event.getStarts()) !== 0) {
      return false;
    }
    if (compare(this.getEnds(), event.getEnds()) !== 0) {
      return false;
    }
    if (this.color !== event.color) {
      return false;
    }
    if (this.backgroundColor !== event.backgroundColor) {
      return false;
    }
    if (this.dragBackgroundColor !== event.dragBackgroundColor) {
      return false;
    }
    if (this.borderColor !== event.borderColor) {
      return false;
    }
    return true;
  }
  duration() {
    const start = Number(this.getStarts());
    const end = Number(this.getEnds());
    let duration;
    if (this.isAllday) {
      duration = Number(toEndOfDay(end)) - Number(toStartOfDay(start));
    } else {
      duration = end - start;
    }
    return duration;
  }
  valueOf() {
    return this;
  }
  collidesWith(event, usingTravelTime = true) {
    event = event instanceof EventUIModel ? event.model : event;
    return collidesWith({
      start: Number(this.getStarts()),
      end: Number(this.getEnds()),
      targetStart: Number(event.getStarts()),
      targetEnd: Number(event.getEnds()),
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      targetGoingDuration: event.goingDuration,
      targetComingDuration: event.comingDuration,
      usingTravelTime
    });
  }
  toEventObject() {
    return {
      id: this.id,
      calendarId: this.calendarId,
      __cid: this.cid(),
      title: this.title,
      body: this.body,
      isAllday: this.isAllday,
      start: this.start,
      end: this.end,
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      location: this.location,
      attendees: this.attendees,
      category: this.category,
      dueDateClass: this.dueDateClass,
      recurrenceRule: this.recurrenceRule,
      state: this.state,
      isVisible: this.isVisible,
      isPending: this.isPending,
      isFocused: this.isFocused,
      isReadOnly: this.isReadOnly,
      isPrivate: this.isPrivate,
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor,
      customStyle: this.customStyle,
      raw: this.raw
    };
  }
  getColors() {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor
    };
  }
}
EventModel.schema = {
  required: ["title"],
  dateRange: ["start", "end"]
};
function isTimeEvent({ model }) {
  const { category, isAllday: isAllday2, hasMultiDates } = model;
  return category === "time" && !isAllday2 && !hasMultiDates;
}
class Collection {
  constructor(getItemIDFn) {
    this.internalMap = /* @__PURE__ */ new Map();
    if (isFunction$2(getItemIDFn)) {
      this.getItemID = getItemIDFn;
    }
  }
  static and(...filterFns) {
    const { length } = filterFns;
    return (item) => {
      for (let i2 = 0; i2 < length; i2 += 1) {
        if (!filterFns[i2].call(null, item)) {
          return false;
        }
      }
      return true;
    };
  }
  static or(...filterFns) {
    const { length } = filterFns;
    if (!length) {
      return () => false;
    }
    return (item) => {
      let result = filterFns[0].call(null, item);
      for (let i2 = 1; i2 < length; i2 += 1) {
        result = result || filterFns[i2].call(null, item);
      }
      return result;
    };
  }
  getItemID(item) {
    var _a2;
    return (_a2 = item == null ? void 0 : item._id) != null ? _a2 : "";
  }
  getFirstItem() {
    const iterator = this.internalMap.values();
    return iterator.next().value;
  }
  add(...items) {
    items.forEach((item) => {
      const id = this.getItemID(item);
      this.internalMap.set(id, item);
    });
    return this;
  }
  remove(...items) {
    const removeResult = [];
    items.forEach((item) => {
      const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
      if (!this.internalMap.has(id)) {
        return;
      }
      removeResult.push(this.internalMap.get(id));
      this.internalMap["delete"](id);
    });
    return removeResult.length === 1 ? removeResult[0] : removeResult;
  }
  has(item) {
    const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
    return this.internalMap.has(id);
  }
  get(item) {
    var _a2;
    const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
    return (_a2 = this.internalMap.get(id)) != null ? _a2 : null;
  }
  doWhenHas(id, callback) {
    const item = this.internalMap.get(id);
    if (isNil(item)) {
      return;
    }
    callback(item);
  }
  filter(filterFn) {
    const result = new Collection();
    if (this.hasOwnProperty("getItemID")) {
      result.getItemID = this.getItemID;
    }
    this.internalMap.forEach((item) => {
      if (filterFn(item) === true) {
        result.add(item);
      }
    });
    return result;
  }
  groupBy(groupByFn) {
    const result = {};
    this.internalMap.forEach((item) => {
      var _a2;
      let key = isFunction$2(groupByFn) ? groupByFn(item) : item[groupByFn];
      if (isFunction$2(key)) {
        key = key.call(item);
      }
      (_a2 = result[key]) != null ? _a2 : result[key] = new Collection(this.getItemID);
      result[key].add(item);
    });
    return result;
  }
  find(findFn) {
    let result = null;
    const items = this.internalMap.values();
    let next = items.next();
    while (next.done === false) {
      if (findFn(next.value)) {
        result = next.value;
        break;
      }
      next = items.next();
    }
    return result;
  }
  sort(compareFn) {
    return this.toArray().sort(compareFn);
  }
  each(iteratee) {
    const entries = this.internalMap.entries();
    let next = entries.next();
    while (next.done === false) {
      const [key, value] = next.value;
      if (iteratee(value, key) === false) {
        break;
      }
      next = entries.next();
    }
  }
  clear() {
    this.internalMap.clear();
  }
  toArray() {
    return Array.from(this.internalMap.values());
  }
  get size() {
    return this.internalMap.size;
  }
}
function createEventCollection(...initItems) {
  const collection = new Collection((event) => event.cid());
  if (initItems.length) {
    collection.add(...initItems);
  }
  return collection;
}
function getDateRange(start, end) {
  return makeDateRange(toStartOfDay(start), toEndOfDay(end), MS_PER_DAY);
}
function isAllday(event) {
  return event.isAllday || event.category === "time" && Number(event.end) - Number(event.start) > MS_PER_DAY;
}
function filterByCategory(uiModel) {
  const { model } = uiModel;
  if (isAllday(model)) {
    return "allday";
  }
  return model.category;
}
function addToMatrix(idsOfDay, event) {
  const containDates = getDateRange(event.getStarts(), event.getEnds());
  containDates.forEach((date2) => {
    const ymd = toFormat(date2, "YYYYMMDD");
    const matrix = idsOfDay[ymd] = idsOfDay[ymd] || [];
    matrix.push(event.cid());
  });
}
function removeFromMatrix(idsOfDay, event) {
  const modelID = event.cid();
  Object.values(idsOfDay).forEach((ids) => {
    const index = ids.indexOf(modelID);
    if (~index) {
      ids.splice(index, 1);
    }
  });
}
function addEvent(calendarData, event) {
  calendarData.events.add(event);
  addToMatrix(calendarData.idsOfDay, event);
  return event;
}
function createEvent(calendarData, eventData) {
  const event = new EventModel(eventData);
  return addEvent(calendarData, event);
}
function createEvents(calendarData, events = []) {
  return events.map((eventData) => createEvent(calendarData, eventData));
}
function updateEvent(calendarData, eventId, calendarId, eventData) {
  const { idsOfDay } = calendarData;
  const event = calendarData.events.find((item) => isSameEvent(item, eventId, calendarId));
  if (!event) {
    return false;
  }
  event.init(__spreadValues$1(__spreadValues$1({}, event), eventData));
  removeFromMatrix(idsOfDay, event);
  addToMatrix(idsOfDay, event);
  return true;
}
function deleteEvent(calendarData, event) {
  removeFromMatrix(calendarData.idsOfDay, event);
  calendarData.events.remove(event);
  return event;
}
function clearEvents(calendarData) {
  calendarData.idsOfDay = {};
  calendarData.events.clear();
}
function createCalendarSlice(calendars = []) {
  return {
    calendar: {
      calendars,
      events: createEventCollection(),
      idsOfDay: {}
    }
  };
}
function createCalendarDispatchers(set) {
  return {
    createEvents: (events) => set(produce((state) => {
      createEvents(state.calendar, events);
    })),
    updateEvent: ({ event, eventData }) => set(produce((state) => {
      updateEvent(state.calendar, event.id, event.calendarId, eventData);
    })),
    deleteEvent: (event) => set(produce((state) => {
      deleteEvent(state.calendar, event);
    })),
    clearEvents: () => set(produce((state) => {
      clearEvents(state.calendar);
    })),
    setCalendars: (calendars) => set(produce((state) => {
      state.calendar.calendars = calendars;
    })),
    setCalendarColor: (calendarId, colorOptions) => set(produce((state) => {
      const calendars = state.calendar.calendars.map((calendar) => {
        if (calendar.id === calendarId) {
          return __spreadValues$1(__spreadValues$1({}, calendar), colorOptions);
        }
        return calendar;
      });
      const events = state.calendar.events.toArray().map((event) => {
        var _a2, _b, _c, _d;
        if (event.calendarId === calendarId) {
          event.color = (_a2 = colorOptions.color) != null ? _a2 : event.color;
          event.backgroundColor = (_b = colorOptions.backgroundColor) != null ? _b : event.backgroundColor;
          event.borderColor = (_c = colorOptions.borderColor) != null ? _c : event.borderColor;
          event.dragBackgroundColor = (_d = colorOptions.dragBackgroundColor) != null ? _d : event.dragBackgroundColor;
        }
        return event;
      });
      const collection = createEventCollection(...events);
      state.calendar.calendars = calendars;
      state.calendar.events = collection;
    })),
    setCalendarVisibility: (calendarIds, isVisible) => set(produce((state) => {
      const events = state.calendar.events.toArray();
      state.calendar.events = createEventCollection(...events.map((event) => {
        if (calendarIds.includes(event.calendarId)) {
          event.isVisible = isVisible;
        }
        return event;
      }));
    }))
  };
}
var DraggingState = /* @__PURE__ */ ((DraggingState2) => {
  DraggingState2[DraggingState2["IDLE"] = 0] = "IDLE";
  DraggingState2[DraggingState2["INIT"] = 1] = "INIT";
  DraggingState2[DraggingState2["DRAGGING"] = 2] = "DRAGGING";
  DraggingState2[DraggingState2["CANCELED"] = 3] = "CANCELED";
  return DraggingState2;
})(DraggingState || {});
function createDndSlice() {
  return {
    dnd: {
      draggingItemType: null,
      draggingState: 0,
      initX: null,
      initY: null,
      x: null,
      y: null,
      draggingEventUIModel: null
    }
  };
}
function createDndDispatchers(set) {
  return {
    initDrag: (initState) => {
      set(produce((state) => {
        state.dnd = __spreadProps(__spreadValues$1(__spreadValues$1({}, state.dnd), initState), {
          draggingState: 1
        });
      }));
    },
    setDragging: (newState) => {
      set(produce((state) => {
        state.dnd = __spreadProps(__spreadValues$1(__spreadValues$1({}, state.dnd), newState), {
          draggingState: 2
        });
      }));
    },
    cancelDrag: () => {
      set(produce((state) => {
        state.dnd = createDndSlice().dnd;
        state.dnd.draggingState = 3;
      }));
    },
    reset: () => {
      set(produce((state) => {
        state.dnd = createDndSlice().dnd;
      }));
    },
    setDraggingEventUIModel: (eventUIModel) => {
      set(produce((state) => {
        var _a2;
        state.dnd.draggingEventUIModel = (_a2 = eventUIModel == null ? void 0 : eventUIModel.clone()) != null ? _a2 : null;
      }));
    }
  };
}
function createGridSelectionSlice() {
  return {
    gridSelection: {
      dayGridMonth: null,
      dayGridWeek: null,
      timeGrid: null,
      accumulated: {
        dayGridMonth: []
      }
    }
  };
}
function createGridSelectionDispatchers(set) {
  return {
    setGridSelection: (type, gridSelection) => {
      set(produce((state) => {
        state.gridSelection[type] = gridSelection;
      }));
    },
    addGridSelection: (type, gridSelection) => {
      set(produce((state) => {
        if (type === "dayGridMonth" && gridSelection) {
          state.gridSelection.accumulated[type] = [
            ...state.gridSelection.accumulated[type],
            gridSelection
          ];
          state.gridSelection.dayGridMonth = null;
        }
      }));
    },
    clearAll: () => set(produce((state) => {
      state.gridSelection = createGridSelectionSlice().gridSelection;
    }))
  };
}
const DEFAULT_RESIZER_LENGTH = 3;
const DEFAULT_DUPLICATE_EVENT_CID = -1;
function getRestPanelHeight(dayGridRowsState, lastPanelType, initHeight) {
  return Object.keys(dayGridRowsState).reduce((acc, rowName) => {
    if (rowName === lastPanelType) {
      return acc;
    }
    return acc - dayGridRowsState[rowName].height - DEFAULT_RESIZER_LENGTH;
  }, initHeight);
}
function createWeekViewLayoutSlice() {
  return {
    layout: 500,
    weekViewLayout: {
      lastPanelType: null,
      dayGridRows: {},
      selectedDuplicateEventCid: DEFAULT_DUPLICATE_EVENT_CID
    }
  };
}
function createWeekViewLayoutDispatchers(set) {
  return {
    setLastPanelType: (type) => {
      set(produce((state) => {
        state.weekViewLayout.lastPanelType = type;
        if (type) {
          state.weekViewLayout.dayGridRows[type].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, type, state.layout);
        }
      }));
    },
    updateLayoutHeight: (height) => set(produce((state) => {
      const { lastPanelType } = state.weekViewLayout;
      state.layout = height;
      if (lastPanelType) {
        state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, lastPanelType, height);
      }
    })),
    updateDayGridRowHeight: ({ rowName, height }) => set(produce((state) => {
      const { lastPanelType } = state.weekViewLayout;
      state.weekViewLayout.dayGridRows[rowName] = { height };
      if (lastPanelType) {
        state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, lastPanelType, state.layout);
      }
    })),
    updateDayGridRowHeightByDiff: ({ rowName, diff }) => set(produce((state) => {
      var _a2, _b, _c;
      const { lastPanelType } = state.weekViewLayout;
      const height = (_c = (_b = (_a2 = state.weekViewLayout.dayGridRows) == null ? void 0 : _a2[rowName]) == null ? void 0 : _b.height) != null ? _c : DEFAULT_PANEL_HEIGHT;
      state.weekViewLayout.dayGridRows[rowName] = { height: height + diff };
      if (lastPanelType) {
        state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, lastPanelType, state.layout);
      }
    })),
    setSelectedDuplicateEventCid: (cid) => set(produce((state) => {
      state.weekViewLayout.selectedDuplicateEventCid = cid != null ? cid : DEFAULT_DUPLICATE_EVENT_CID;
    }))
  };
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const DEFAULT_DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const getDayName = (dayIndex) => {
  return DEFAULT_DAY_NAMES[dayIndex];
};
function getDayNames(days, weekDayNamesOption) {
  return days.map((day) => {
    const dayIndex = day.getDay();
    const dayName = weekDayNamesOption.length > 0 ? weekDayNamesOption[dayIndex] : capitalize(getDayName(dayIndex));
    return {
      date: day.getDate(),
      day: day.getDay(),
      dayName,
      isToday: true,
      renderDate: "date",
      dateInstance: day
    };
  });
}
function initializeCollapseDuplicateEvents(options) {
  if (!options) {
    return false;
  }
  const initialCollapseDuplicateEvents = {
    getDuplicateEvents: (targetEvent, events) => events.filter((event) => event.title === targetEvent.title && compare(event.start, targetEvent.start) === 0 && compare(event.end, targetEvent.end) === 0).sort((a2, b2) => a2.calendarId > b2.calendarId ? 1 : -1),
    getMainEvent: (events) => last(events)
  };
  if (isBoolean_1(options)) {
    return initialCollapseDuplicateEvents;
  }
  return __spreadValues$1(__spreadValues$1({}, initialCollapseDuplicateEvents), options);
}
function initializeWeekOptions(weekOptions = {}) {
  const week = __spreadValues$1({
    startDayOfWeek: Day$2.SUN,
    dayNames: [],
    narrowWeekend: false,
    workweek: false,
    showNowIndicator: true,
    showTimezoneCollapseButton: false,
    timezonesCollapsed: false,
    hourStart: 0,
    hourEnd: 24,
    eventView: true,
    taskView: true,
    collapseDuplicateEvents: false
  }, weekOptions);
  week.collapseDuplicateEvents = initializeCollapseDuplicateEvents(week.collapseDuplicateEvents);
  return week;
}
function initializeTimezoneOptions(timezoneOptions = {}) {
  return __spreadValues$1({
    zones: []
  }, timezoneOptions);
}
function initializeMonthOptions(monthOptions = {}) {
  const month = __spreadValues$1({
    dayNames: [],
    visibleWeeksCount: 0,
    workweek: false,
    narrowWeekend: false,
    startDayOfWeek: Day$2.SUN,
    isAlways6Weeks: true,
    visibleEventCount: 6
  }, monthOptions);
  if (month.dayNames.length === 0) {
    month.dayNames = DEFAULT_DAY_NAMES.slice();
  }
  return month;
}
function initializeGridSelectionOptions(options) {
  if (isBoolean_1(options)) {
    return {
      enableDblClick: options,
      enableClick: options
    };
  }
  return __spreadValues$1({
    enableDblClick: true,
    enableClick: true
  }, options);
}
const initialEventFilter = (event) => !!event.isVisible;
function createOptionsSlice(options = {}) {
  var _a2, _b, _c, _d, _e, _f;
  return {
    options: {
      defaultView: (_a2 = options.defaultView) != null ? _a2 : "week",
      useFormPopup: (_b = options.useFormPopup) != null ? _b : false,
      useDetailPopup: (_c = options.useDetailPopup) != null ? _c : false,
      isReadOnly: (_d = options.isReadOnly) != null ? _d : false,
      week: initializeWeekOptions(options.week),
      month: initializeMonthOptions(options.month),
      gridSelection: initializeGridSelectionOptions(options.gridSelection),
      usageStatistics: (_e = options.usageStatistics) != null ? _e : true,
      eventFilter: (_f = options.eventFilter) != null ? _f : initialEventFilter,
      timezone: initializeTimezoneOptions(options.timezone)
    }
  };
}
function createOptionsDispatchers(set) {
  return {
    setOptions: (newOptions = {}) => set(produce((state) => {
      var _a2;
      if (newOptions.gridSelection) {
        newOptions.gridSelection = initializeGridSelectionOptions(newOptions.gridSelection);
      }
      if ((_a2 = newOptions.week) == null ? void 0 : _a2.collapseDuplicateEvents) {
        newOptions.week.collapseDuplicateEvents = initializeCollapseDuplicateEvents(newOptions.week.collapseDuplicateEvents);
      }
      mergeObject(state.options, newOptions);
    }))
  };
}
var PopupType = /* @__PURE__ */ ((PopupType2) => {
  PopupType2["SeeMore"] = "seeMore";
  PopupType2["Form"] = "form";
  PopupType2["Detail"] = "detail";
  return PopupType2;
})(PopupType || {});
function createPopupSlice() {
  return {
    popup: {
      ["seeMore"]: null,
      ["form"]: null,
      ["detail"]: null
    }
  };
}
function createPopupDispatchers(set) {
  return {
    showSeeMorePopup: (param) => set(produce((state) => {
      state.popup["seeMore"] = param;
      state.popup["form"] = null;
      state.popup["detail"] = null;
    })),
    showFormPopup: (param) => set(produce((state) => {
      state.popup["form"] = param;
      state.popup["seeMore"] = null;
      state.popup["detail"] = null;
    })),
    showDetailPopup: (param, isOpenedInSeeMorePopup) => set(produce((state) => {
      state.popup["detail"] = param;
      state.popup["form"] = null;
      if (!isOpenedInSeeMorePopup) {
        state.popup["seeMore"] = null;
      }
    })),
    hideSeeMorePopup: () => set(produce((state) => {
      state.popup["seeMore"] = null;
    })),
    hideFormPopup: () => set(produce((state) => {
      state.popup["form"] = null;
    })),
    hideDetailPopup: () => set(produce((state) => {
      state.popup["detail"] = null;
    })),
    hideAllPopup: () => set(produce((state) => {
      state.popup["seeMore"] = null;
      state.popup["form"] = null;
      state.popup["detail"] = null;
    }))
  };
}
const noop = () => {
};
const CSS_AUTO_REGEX = /^auto$|^$|%/;
function getStyle(el, style) {
  let value = el.style[style];
  if ((!value || value === "auto") && document.defaultView) {
    const css = document.defaultView.getComputedStyle(el, null);
    value = css ? css[style] : null;
  }
  return value === "auto" ? null : value;
}
function invalidateSizeValue(value) {
  if (isString_1(value)) {
    return CSS_AUTO_REGEX.test(value);
  }
  return value === null;
}
function getSize(el) {
  const w2 = getStyle(el, "width");
  const h2 = getStyle(el, "height");
  if ((invalidateSizeValue(w2) || invalidateSizeValue(h2)) && el.getBoundingClientRect) {
    const { width, height } = el.getBoundingClientRect();
    return {
      width: width || el.offsetWidth,
      height: height || el.offsetHeight
    };
  }
  return {
    width: parseFloat(w2 != null ? w2 : "0"),
    height: parseFloat(h2 != null ? h2 : "0")
  };
}
const ElementClass = typeof Element === "undefined" ? noop : Element;
const elProto = ElementClass.prototype;
elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || function(selector) {
  return Array.from(document.querySelectorAll(selector)).includes(this);
};
function stripTags(str) {
  return str.replace(/<([^>]+)>/gi, "");
}
const SIXTY_MINUTES = 60;
const templates = {
  milestone(model) {
    const classNames2 = cls("icon", "ic-milestone");
    return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("span", {
      className: classNames2
    }), /* @__PURE__ */ h$3("span", {
      style: {
        backgroundColor: model.backgroundColor
      }
    }, stripTags(model.title)));
  },
  milestoneTitle() {
    return /* @__PURE__ */ h$3("span", {
      className: cls("left-content")
    }, "Milestone");
  },
  task(model) {
    return `#${model.title}`;
  },
  taskTitle() {
    return /* @__PURE__ */ h$3("span", {
      className: cls("left-content")
    }, "Task");
  },
  alldayTitle() {
    return /* @__PURE__ */ h$3("span", {
      className: cls("left-content")
    }, "All Day");
  },
  allday(model) {
    return stripTags(model.title);
  },
  time(model) {
    const { start, title } = model;
    if (start) {
      return /* @__PURE__ */ h$3("span", null, /* @__PURE__ */ h$3("strong", null, toFormat(start, "HH:mm")), "\xA0", /* @__PURE__ */ h$3("span", null, stripTags(title)));
    }
    return stripTags(title);
  },
  goingDuration(model) {
    const { goingDuration } = model;
    const hour = Math.floor(goingDuration / SIXTY_MINUTES);
    const minutes = goingDuration % SIXTY_MINUTES;
    return `GoingTime ${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  comingDuration(model) {
    const { comingDuration } = model;
    const hour = Math.floor(comingDuration / SIXTY_MINUTES);
    const minutes = comingDuration % SIXTY_MINUTES;
    return `ComingTime ${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  monthMoreTitleDate(moreTitle) {
    const { date: date2, day } = moreTitle;
    const classNameDay = cls("more-title-date");
    const classNameDayLabel = cls("more-title-day");
    const dayName = capitalize(getDayName(day));
    return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("span", {
      className: classNameDay
    }, date2), /* @__PURE__ */ h$3("span", {
      className: classNameDayLabel
    }, dayName));
  },
  monthMoreClose() {
    return "";
  },
  monthGridHeader(model) {
    const date2 = parseInt(model.date.split("-")[2], 10);
    const classNames2 = cls("weekday-grid-date", { "weekday-grid-date-decorator": model.isToday });
    return /* @__PURE__ */ h$3("span", {
      className: classNames2
    }, date2);
  },
  monthGridHeaderExceed(hiddenEvents) {
    const className2 = cls("weekday-grid-more-events");
    return /* @__PURE__ */ h$3("span", {
      className: className2
    }, hiddenEvents, " more");
  },
  monthGridFooter(_model) {
    return "";
  },
  monthGridFooterExceed(_hiddenEvents) {
    return "";
  },
  monthDayName(model) {
    return model.label;
  },
  weekDayName(model) {
    const classDate = cls("day-name__date");
    const className2 = cls("day-name__name");
    return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("span", {
      className: classDate
    }, model.date), "\xA0\xA0", /* @__PURE__ */ h$3("span", {
      className: className2
    }, model.dayName));
  },
  weekGridFooterExceed(hiddenEvents) {
    return `+${hiddenEvents}`;
  },
  collapseBtnTitle() {
    const className2 = cls("collapse-btn-icon");
    return /* @__PURE__ */ h$3("span", {
      className: className2
    });
  },
  timezoneDisplayLabel({ displayLabel, timezoneOffset }) {
    if (isNil(displayLabel) && isPresent(timezoneOffset)) {
      const sign = timezoneOffset < 0 ? "-" : "+";
      const hours = Math.abs(timezoneOffset / SIXTY_MINUTES);
      const minutes = Math.abs(timezoneOffset % SIXTY_MINUTES);
      return `GMT${sign}${leadingZero(hours, 2)}:${leadingZero(minutes, 2)}`;
    }
    return displayLabel;
  },
  timegridDisplayPrimaryTime(props) {
    const { time } = props;
    return toFormat(time, "hh tt");
  },
  timegridDisplayTime(props) {
    const { time } = props;
    return toFormat(time, "HH:mm");
  },
  timegridNowIndicatorLabel(timezone) {
    const { time, format = "HH:mm" } = timezone;
    return toFormat(time, format);
  },
  popupIsAllday() {
    return "All day";
  },
  popupStateFree() {
    return "Free";
  },
  popupStateBusy() {
    return "Busy";
  },
  titlePlaceholder() {
    return "Subject";
  },
  locationPlaceholder() {
    return "Location";
  },
  startDatePlaceholder() {
    return "Start date";
  },
  endDatePlaceholder() {
    return "End date";
  },
  popupSave() {
    return "Save";
  },
  popupUpdate() {
    return "Update";
  },
  popupEdit() {
    return "Edit";
  },
  popupDelete() {
    return "Delete";
  },
  popupDetailTitle({ title }) {
    return title;
  },
  popupDetailDate({ isAllday: isAllday2, start, end }) {
    const dayFormat = "YYYY.MM.DD";
    const timeFormat = "hh:mm tt";
    const detailFormat = `${dayFormat} ${timeFormat}`;
    const startDate = toFormat(start, isAllday2 ? dayFormat : timeFormat);
    const endDateFormat = isSameDate(start, end) ? timeFormat : detailFormat;
    if (isAllday2) {
      return `${startDate}${isSameDate(start, end) ? "" : ` - ${toFormat(end, dayFormat)}`}`;
    }
    return `${toFormat(start, detailFormat)} - ${toFormat(end, endDateFormat)}`;
  },
  popupDetailLocation({ location: location2 }) {
    return location2;
  },
  popupDetailAttendees({ attendees = [] }) {
    return attendees.join(", ");
  },
  popupDetailState({ state }) {
    return state || "Busy";
  },
  popupDetailRecurrenceRule({ recurrenceRule }) {
    return recurrenceRule;
  },
  popupDetailBody({ body }) {
    return body;
  }
};
function createTemplateSlice(templateConfig = {}) {
  return {
    template: __spreadValues$1(__spreadValues$1({}, templates), templateConfig)
  };
}
function createTemplateDispatchers(set) {
  return {
    setTemplate: (template) => set(produce((state) => {
      state.template = __spreadValues$1(__spreadValues$1({}, state.template), template);
    }))
  };
}
function createViewSlice(initialView = "week") {
  const renderDate = new TZDate();
  renderDate.setHours(0, 0, 0, 0);
  return {
    view: {
      currentView: initialView,
      renderDate
    }
  };
}
function createViewDispatchers(set) {
  return {
    changeView: (nextView) => set(produce((state) => {
      state.view.currentView = nextView;
    })),
    setRenderDate: (date2) => set(produce((state) => {
      state.view.renderDate = toStartOfDay(date2);
    }))
  };
}
const isSSR = isUndefined_1(window) || !window.navigator;
const useIsomorphicLayoutEffect = isSSR ? _$2 : h$2;
function createStoreContext() {
  const StoreContext = B$1(null);
  function StoreProvider2({
    children,
    store
  }) {
    return h$3(StoreContext.Provider, { value: store, children });
  }
  const useStore2 = (selector, equalityFn = Object.is) => {
    const storeCtx = q$2(StoreContext);
    if (isNil(storeCtx)) {
      throw new Error("StoreProvider is not found");
    }
    const [, notify] = d$2((notifyCount) => notifyCount + 1, 0);
    const state = storeCtx.getState();
    const stateRef = s$2(state);
    const selectorRef = s$2(selector);
    const equalityFnRef = s$2(equalityFn);
    const hasErrorRef = s$2(false);
    const currentSliceRef = s$2();
    if (isUndefined_1(currentSliceRef.current)) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    const shouldGetNewSlice = stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || hasErrorRef.current;
    if (shouldGetNewSlice) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      hasErrorRef.current = false;
    });
    const stateBeforeSubscriptionRef = s$2(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = storeCtx.getState();
          const nextStateSlice = selectorRef.current(nextState);
          const shouldUpdateState = !equalityFnRef.current(currentSliceRef.current, nextStateSlice);
          if (shouldUpdateState) {
            stateRef.current = nextState;
            currentSliceRef.current = newStateSlice;
            notify();
          }
        } catch (e2) {
          console.error("[toastui-calendar] failed to update state", e2 == null ? void 0 : e2.message);
          hasErrorRef.current = true;
          notify();
        }
      };
      const unsubscribe = storeCtx.subscribe(listener);
      if (storeCtx.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
  };
  const useInternalStore2 = () => {
    const storeCtx = q$2(StoreContext);
    if (isNil(storeCtx)) {
      throw new Error("StoreProvider is not found");
    }
    return F$2(() => storeCtx, [storeCtx]);
  };
  return {
    StoreProvider: StoreProvider2,
    useStore: useStore2,
    useInternalStore: useInternalStore2
  };
}
function createStore(storeCreator2) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partialStateCreator) => {
    const nextState = partialStateCreator(state);
    if (nextState !== state) {
      const previousState = state;
      state = __spreadValues$1(__spreadValues$1({}, state), nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener, selector, equalityFn) => {
    let _listener = listener;
    if (selector) {
      let currentSlice = selector(state);
      const _equalityFn = equalityFn != null ? equalityFn : Object.is;
      _listener = () => {
        const nextSlice = selector(state);
        if (!_equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          currentSlice = nextSlice;
          listener(currentSlice, previousSlice);
        }
      };
    }
    listeners.add(_listener);
    return () => listeners.delete(_listener);
  };
  const clearListeners = () => listeners.clear();
  const internal = { setState, getState, subscribe, clearListeners };
  state = storeCreator2(setState, getState, internal);
  return internal;
}
const storeCreator = (options) => (set) => {
  return __spreadProps(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, createOptionsSlice(options)), createTemplateSlice(options.template)), createPopupSlice()), createWeekViewLayoutSlice()), createCalendarSlice(options.calendars)), createViewSlice(options.defaultView)), createDndSlice()), createGridSelectionSlice()), {
    dispatch: {
      options: createOptionsDispatchers(set),
      popup: createPopupDispatchers(set),
      weekViewLayout: createWeekViewLayoutDispatchers(set),
      calendar: createCalendarDispatchers(set),
      view: createViewDispatchers(set),
      dnd: createDndDispatchers(set),
      gridSelection: createGridSelectionDispatchers(set),
      template: createTemplateDispatchers(set)
    }
  });
};
const initCalendarStore = (options = {}) => createStore(storeCreator(options));
const { StoreProvider, useStore, useInternalStore } = createStoreContext();
function useDispatch(group) {
  return useStore(T$1((state) => {
    if (!group) {
      return state.dispatch;
    }
    return state.dispatch[group];
  }, [group]));
}
function topLevelStateSelector(group) {
  return (state) => state[group];
}
const calendarSelector = topLevelStateSelector("calendar");
const weekViewLayoutSelector = topLevelStateSelector("weekViewLayout");
const templateSelector = topLevelStateSelector("template");
const viewSelector = topLevelStateSelector("view");
const optionsSelector = topLevelStateSelector("options");
const dndSelector = topLevelStateSelector("dnd");
var purify = { exports: {} };
/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _setPrototypeOf(o2, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
        o3.__proto__ = p3;
        return o3;
      };
      return _setPrototypeOf(o2, p2);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a2 = [null];
          a2.push.apply(a2, args2);
          var Constructor2 = Function.bind.apply(Parent2, a2);
          var instance = new Constructor2();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o2, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var freeze = Object.freeze, seal = Object.seal, create = Object.create;
    var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
    if (!apply) {
      apply = function apply2(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }
    if (!freeze) {
      freeze = function freeze2(x2) {
        return x2;
      };
    }
    if (!seal) {
      seal = function seal2(x2) {
        return x2;
      };
    }
    if (!construct) {
      construct = function construct2(Func, args) {
        return _construct(Func, _toConsumableArray(args));
      };
    }
    var arrayForEach = unapply(Array.prototype.forEach);
    var arrayPop = unapply(Array.prototype.pop);
    var arrayPush = unapply(Array.prototype.push);
    var stringToLowerCase = unapply(String.prototype.toLowerCase);
    var stringMatch = unapply(String.prototype.match);
    var stringReplace = unapply(String.prototype.replace);
    var stringIndexOf = unapply(String.prototype.indexOf);
    var stringTrim = unapply(String.prototype.trim);
    var regExpTest = unapply(RegExp.prototype.test);
    var typeErrorCreate = unconstruct(TypeError);
    function unapply(func) {
      return function(thisArg) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return apply(func, thisArg, args);
      };
    }
    function unconstruct(func) {
      return function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return construct(func, args);
      };
    }
    function addToSet(set, array2) {
      if (setPrototypeOf) {
        setPrototypeOf(set, null);
      }
      var l2 = array2.length;
      while (l2--) {
        var element = array2[l2];
        if (typeof element === "string") {
          var lcElement = stringToLowerCase(element);
          if (lcElement !== element) {
            if (!isFrozen(array2)) {
              array2[l2] = lcElement;
            }
            element = lcElement;
          }
        }
        set[element] = true;
      }
      return set;
    }
    function clone2(object) {
      var newObject = create(null);
      var property;
      for (property in object) {
        if (apply(hasOwnProperty, object, [property])) {
          newObject[property] = object[property];
        }
      }
      return newObject;
    }
    function lookupGetter(object, prop) {
      while (object !== null) {
        var desc = getOwnPropertyDescriptor(object, prop);
        if (desc) {
          if (desc.get) {
            return unapply(desc.get);
          }
          if (typeof desc.value === "function") {
            return unapply(desc.value);
          }
        }
        object = getPrototypeOf(object);
      }
      function fallbackValue(element) {
        console.warn("fallback value for", element);
        return null;
      }
      return fallbackValue;
    }
    var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
    var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
    var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
    var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
    var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
    var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
    var text = freeze(["#text"]);
    var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
    var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
    var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
    var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
    var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
    var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
    var DOCTYPE_NAME = seal(/^html$/i);
    var getGlobal = function getGlobal2() {
      return typeof window === "undefined" ? null : window;
    };
    var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
      if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
        return null;
      }
      var suffix = null;
      var ATTR_NAME = "data-tt-policy-suffix";
      if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
        suffix = document2.currentScript.getAttribute(ATTR_NAME);
      }
      var policyName = "dompurify" + (suffix ? "#" + suffix : "");
      try {
        return trustedTypes.createPolicy(policyName, {
          createHTML: function createHTML(html2) {
            return html2;
          }
        });
      } catch (_2) {
        console.warn("TrustedTypes policy " + policyName + " could not be created.");
        return null;
      }
    };
    function createDOMPurify() {
      var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
      var DOMPurify = function DOMPurify2(root) {
        return createDOMPurify(root);
      };
      DOMPurify.version = "2.3.8";
      DOMPurify.removed = [];
      if (!window2 || !window2.document || window2.document.nodeType !== 9) {
        DOMPurify.isSupported = false;
        return DOMPurify;
      }
      var originalDocument = window2.document;
      var document2 = window2.document;
      var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element2 = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
      var ElementPrototype = Element2.prototype;
      var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
      var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
      var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
      var getParentNode = lookupGetter(ElementPrototype, "parentNode");
      if (typeof HTMLTemplateElement === "function") {
        var template = document2.createElement("template");
        if (template.content && template.content.ownerDocument) {
          document2 = template.content.ownerDocument;
        }
      }
      var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
      var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
      var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
      var importNode = originalDocument.importNode;
      var documentMode = {};
      try {
        documentMode = clone2(document2).documentMode ? document2.documentMode : {};
      } catch (_2) {
      }
      var hooks = {};
      DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
      var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
      var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
      var ALLOWED_TAGS = null;
      var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
      var ALLOWED_ATTR = null;
      var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
      var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
        tagNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null
        },
        attributeNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null
        },
        allowCustomizedBuiltInElements: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: false
        }
      }));
      var FORBID_TAGS = null;
      var FORBID_ATTR = null;
      var ALLOW_ARIA_ATTR = true;
      var ALLOW_DATA_ATTR = true;
      var ALLOW_UNKNOWN_PROTOCOLS = false;
      var SAFE_FOR_TEMPLATES = false;
      var WHOLE_DOCUMENT = false;
      var SET_CONFIG = false;
      var FORCE_BODY = false;
      var RETURN_DOM = false;
      var RETURN_DOM_FRAGMENT = false;
      var RETURN_TRUSTED_TYPE = false;
      var SANITIZE_DOM = true;
      var KEEP_CONTENT = true;
      var IN_PLACE = false;
      var USE_PROFILES = {};
      var FORBID_CONTENTS = null;
      var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
      var DATA_URI_TAGS = null;
      var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
      var URI_SAFE_ATTRIBUTES = null;
      var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
      var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
      var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
      var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
      var NAMESPACE = HTML_NAMESPACE;
      var IS_EMPTY_INPUT = false;
      var PARSER_MEDIA_TYPE;
      var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
      var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
      var transformCaseFunc;
      var CONFIG = null;
      var formElement = document2.createElement("form");
      var isRegexOrFunction = function isRegexOrFunction2(testValue) {
        return testValue instanceof RegExp || testValue instanceof Function;
      };
      var _parseConfig = function _parseConfig2(cfg) {
        if (CONFIG && CONFIG === cfg) {
          return;
        }
        if (!cfg || _typeof(cfg) !== "object") {
          cfg = {};
        }
        cfg = clone2(cfg);
        ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone2(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone2(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
        FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
        FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
        USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
        RETURN_DOM = cfg.RETURN_DOM || false;
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
        FORCE_BODY = cfg.FORCE_BODY || false;
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
        IN_PLACE = cfg.IN_PLACE || false;
        IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
        NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
          CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
          CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
          CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
        transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? function(x2) {
          return x2;
        } : stringToLowerCase;
        if (SAFE_FOR_TEMPLATES) {
          ALLOW_DATA_ATTR = false;
        }
        if (RETURN_DOM_FRAGMENT) {
          RETURN_DOM = true;
        }
        if (USE_PROFILES) {
          ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
          ALLOWED_ATTR = [];
          if (USE_PROFILES.html === true) {
            addToSet(ALLOWED_TAGS, html$1);
            addToSet(ALLOWED_ATTR, html);
          }
          if (USE_PROFILES.svg === true) {
            addToSet(ALLOWED_TAGS, svg$1);
            addToSet(ALLOWED_ATTR, svg);
            addToSet(ALLOWED_ATTR, xml);
          }
          if (USE_PROFILES.svgFilters === true) {
            addToSet(ALLOWED_TAGS, svgFilters);
            addToSet(ALLOWED_ATTR, svg);
            addToSet(ALLOWED_ATTR, xml);
          }
          if (USE_PROFILES.mathMl === true) {
            addToSet(ALLOWED_TAGS, mathMl$1);
            addToSet(ALLOWED_ATTR, mathMl);
            addToSet(ALLOWED_ATTR, xml);
          }
        }
        if (cfg.ADD_TAGS) {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone2(ALLOWED_TAGS);
          }
          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }
        if (cfg.ADD_ATTR) {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone2(ALLOWED_ATTR);
          }
          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
          addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }
        if (cfg.FORBID_CONTENTS) {
          if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
            FORBID_CONTENTS = clone2(FORBID_CONTENTS);
          }
          addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
        }
        if (KEEP_CONTENT) {
          ALLOWED_TAGS["#text"] = true;
        }
        if (WHOLE_DOCUMENT) {
          addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
        }
        if (ALLOWED_TAGS.table) {
          addToSet(ALLOWED_TAGS, ["tbody"]);
          delete FORBID_TAGS.tbody;
        }
        if (freeze) {
          freeze(cfg);
        }
        CONFIG = cfg;
      };
      var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
      var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
      var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
      var ALL_SVG_TAGS = addToSet({}, svg$1);
      addToSet(ALL_SVG_TAGS, svgFilters);
      addToSet(ALL_SVG_TAGS, svgDisallowed);
      var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
      addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
      var _checkValidNamespace = function _checkValidNamespace2(element) {
        var parent = getParentNode(element);
        if (!parent || !parent.tagName) {
          parent = {
            namespaceURI: HTML_NAMESPACE,
            tagName: "template"
          };
        }
        var tagName = stringToLowerCase(element.tagName);
        var parentTagName = stringToLowerCase(parent.tagName);
        if (element.namespaceURI === SVG_NAMESPACE) {
          if (parent.namespaceURI === HTML_NAMESPACE) {
            return tagName === "svg";
          }
          if (parent.namespaceURI === MATHML_NAMESPACE) {
            return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
          }
          return Boolean(ALL_SVG_TAGS[tagName]);
        }
        if (element.namespaceURI === MATHML_NAMESPACE) {
          if (parent.namespaceURI === HTML_NAMESPACE) {
            return tagName === "math";
          }
          if (parent.namespaceURI === SVG_NAMESPACE) {
            return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
          }
          return Boolean(ALL_MATHML_TAGS[tagName]);
        }
        if (element.namespaceURI === HTML_NAMESPACE) {
          if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
            return false;
          }
          if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
            return false;
          }
          return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
        }
        return false;
      };
      var _forceRemove = function _forceRemove2(node) {
        arrayPush(DOMPurify.removed, {
          element: node
        });
        try {
          node.parentNode.removeChild(node);
        } catch (_2) {
          try {
            node.outerHTML = emptyHTML;
          } catch (_3) {
            node.remove();
          }
        }
      };
      var _removeAttribute = function _removeAttribute2(name, node) {
        try {
          arrayPush(DOMPurify.removed, {
            attribute: node.getAttributeNode(name),
            from: node
          });
        } catch (_2) {
          arrayPush(DOMPurify.removed, {
            attribute: null,
            from: node
          });
        }
        node.removeAttribute(name);
        if (name === "is" && !ALLOWED_ATTR[name]) {
          if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
            try {
              _forceRemove(node);
            } catch (_2) {
            }
          } else {
            try {
              node.setAttribute(name, "");
            } catch (_2) {
            }
          }
        }
      };
      var _initDocument = function _initDocument2(dirty) {
        var doc;
        var leadingWhitespace;
        if (FORCE_BODY) {
          dirty = "<remove></remove>" + dirty;
        } else {
          var matches = stringMatch(dirty, /^[\r\n\t ]+/);
          leadingWhitespace = matches && matches[0];
        }
        if (PARSER_MEDIA_TYPE === "application/xhtml+xml") {
          dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
        }
        var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        if (NAMESPACE === HTML_NAMESPACE) {
          try {
            doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
          } catch (_2) {
          }
        }
        if (!doc || !doc.documentElement) {
          doc = implementation.createDocument(NAMESPACE, "template", null);
          try {
            doc.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
          } catch (_2) {
          }
        }
        var body = doc.body || doc.documentElement;
        if (dirty && leadingWhitespace) {
          body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
        }
        if (NAMESPACE === HTML_NAMESPACE) {
          return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
        }
        return WHOLE_DOCUMENT ? doc.documentElement : body;
      };
      var _createIterator = function _createIterator2(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
      };
      var _isClobbered = function _isClobbered2(elm) {
        return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function");
      };
      var _isNode = function _isNode2(object) {
        return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
      };
      var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
          return;
        }
        arrayForEach(hooks[entryPoint], function(hook) {
          hook.call(DOMPurify, currentNode, data, CONFIG);
        });
      };
      var _sanitizeElements = function _sanitizeElements2(currentNode) {
        var content;
        _executeHook("beforeSanitizeElements", currentNode, null);
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }
        if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
          _forceRemove(currentNode);
          return true;
        }
        var tagName = transformCaseFunc(currentNode.nodeName);
        _executeHook("uponSanitizeElement", currentNode, {
          tagName,
          allowedTags: ALLOWED_TAGS
        });
        if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
          _forceRemove(currentNode);
          return true;
        }
        if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
            if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
              return false;
            if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
              return false;
          }
          if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
            var parentNode = getParentNode(currentNode) || currentNode.parentNode;
            var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
            if (childNodes && parentNode) {
              var childCount = childNodes.length;
              for (var i2 = childCount - 1; i2 >= 0; --i2) {
                parentNode.insertBefore(cloneNode(childNodes[i2], true), getNextSibling(currentNode));
              }
            }
          }
          _forceRemove(currentNode);
          return true;
        }
        if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }
        if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
          content = currentNode.textContent;
          content = stringReplace(content, MUSTACHE_EXPR$1, " ");
          content = stringReplace(content, ERB_EXPR$1, " ");
          if (currentNode.textContent !== content) {
            arrayPush(DOMPurify.removed, {
              element: currentNode.cloneNode()
            });
            currentNode.textContent = content;
          }
        }
        _executeHook("afterSanitizeElements", currentNode, null);
        return false;
      };
      var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
        if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
          return false;
        }
        if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName))
          ;
        else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName))
          ;
        else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          if (_basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
            ;
          else {
            return false;
          }
        } else if (URI_SAFE_ATTRIBUTES[lcName])
          ;
        else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
          ;
        else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
          ;
        else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
          ;
        else if (!value)
          ;
        else {
          return false;
        }
        return true;
      };
      var _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
        return tagName.indexOf("-") > 0;
      };
      var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
        var attr;
        var value;
        var lcName;
        var l2;
        _executeHook("beforeSanitizeAttributes", currentNode, null);
        var attributes = currentNode.attributes;
        if (!attributes) {
          return;
        }
        var hookEvent = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: ALLOWED_ATTR
        };
        l2 = attributes.length;
        while (l2--) {
          attr = attributes[l2];
          var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
          value = name === "value" ? attr.value : stringTrim(attr.value);
          lcName = transformCaseFunc(name);
          hookEvent.attrName = lcName;
          hookEvent.attrValue = value;
          hookEvent.keepAttr = true;
          hookEvent.forceKeepAttr = void 0;
          _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
          value = hookEvent.attrValue;
          if (hookEvent.forceKeepAttr) {
            continue;
          }
          _removeAttribute(name, currentNode);
          if (!hookEvent.keepAttr) {
            continue;
          }
          if (regExpTest(/\/>/i, value)) {
            _removeAttribute(name, currentNode);
            continue;
          }
          if (SAFE_FOR_TEMPLATES) {
            value = stringReplace(value, MUSTACHE_EXPR$1, " ");
            value = stringReplace(value, ERB_EXPR$1, " ");
          }
          var lcTag = transformCaseFunc(currentNode.nodeName);
          if (!_isValidAttribute(lcTag, lcName, value)) {
            continue;
          }
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              currentNode.setAttribute(name, value);
            }
            arrayPop(DOMPurify.removed);
          } catch (_2) {
          }
        }
        _executeHook("afterSanitizeAttributes", currentNode, null);
      };
      var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);
        _executeHook("beforeSanitizeShadowDOM", fragment, null);
        while (shadowNode = shadowIterator.nextNode()) {
          _executeHook("uponSanitizeShadowNode", shadowNode, null);
          if (_sanitizeElements(shadowNode)) {
            continue;
          }
          if (shadowNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM2(shadowNode.content);
          }
          _sanitizeAttributes(shadowNode);
        }
        _executeHook("afterSanitizeShadowDOM", fragment, null);
      };
      DOMPurify.sanitize = function(dirty, cfg) {
        var body;
        var importedNode;
        var currentNode;
        var oldNode;
        var returnNode;
        IS_EMPTY_INPUT = !dirty;
        if (IS_EMPTY_INPUT) {
          dirty = "<!-->";
        }
        if (typeof dirty !== "string" && !_isNode(dirty)) {
          if (typeof dirty.toString !== "function") {
            throw typeErrorCreate("toString is not a function");
          } else {
            dirty = dirty.toString();
            if (typeof dirty !== "string") {
              throw typeErrorCreate("dirty is not a string, aborting");
            }
          }
        }
        if (!DOMPurify.isSupported) {
          if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
            if (typeof dirty === "string") {
              return window2.toStaticHTML(dirty);
            }
            if (_isNode(dirty)) {
              return window2.toStaticHTML(dirty.outerHTML);
            }
          }
          return dirty;
        }
        if (!SET_CONFIG) {
          _parseConfig(cfg);
        }
        DOMPurify.removed = [];
        if (typeof dirty === "string") {
          IN_PLACE = false;
        }
        if (IN_PLACE) {
          if (dirty.nodeName) {
            var tagName = transformCaseFunc(dirty.nodeName);
            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
            }
          }
        } else if (dirty instanceof Node) {
          body = _initDocument("<!---->");
          importedNode = body.ownerDocument.importNode(dirty, true);
          if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
            body = importedNode;
          } else if (importedNode.nodeName === "HTML") {
            body = importedNode;
          } else {
            body.appendChild(importedNode);
          }
        } else {
          if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
          }
          body = _initDocument(dirty);
          if (!body) {
            return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
          }
        }
        if (body && FORCE_BODY) {
          _forceRemove(body.firstChild);
        }
        var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
        while (currentNode = nodeIterator.nextNode()) {
          if (currentNode.nodeType === 3 && currentNode === oldNode) {
            continue;
          }
          if (_sanitizeElements(currentNode)) {
            continue;
          }
          if (currentNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(currentNode.content);
          }
          _sanitizeAttributes(currentNode);
          oldNode = currentNode;
        }
        oldNode = null;
        if (IN_PLACE) {
          return dirty;
        }
        if (RETURN_DOM) {
          if (RETURN_DOM_FRAGMENT) {
            returnNode = createDocumentFragment.call(body.ownerDocument);
            while (body.firstChild) {
              returnNode.appendChild(body.firstChild);
            }
          } else {
            returnNode = body;
          }
          if (ALLOWED_ATTR.shadowroot) {
            returnNode = importNode.call(originalDocument, returnNode, true);
          }
          return returnNode;
        }
        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
          serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
        }
        if (SAFE_FOR_TEMPLATES) {
          serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
          serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
        }
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
      };
      DOMPurify.setConfig = function(cfg) {
        _parseConfig(cfg);
        SET_CONFIG = true;
      };
      DOMPurify.clearConfig = function() {
        CONFIG = null;
        SET_CONFIG = false;
      };
      DOMPurify.isValidAttribute = function(tag, attr, value) {
        if (!CONFIG) {
          _parseConfig({});
        }
        var lcTag = transformCaseFunc(tag);
        var lcName = transformCaseFunc(attr);
        return _isValidAttribute(lcTag, lcName, value);
      };
      DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== "function") {
          return;
        }
        hooks[entryPoint] = hooks[entryPoint] || [];
        arrayPush(hooks[entryPoint], hookFunction);
      };
      DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
          return arrayPop(hooks[entryPoint]);
        }
      };
      DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint] = [];
        }
      };
      DOMPurify.removeAllHooks = function() {
        hooks = {};
      };
      return DOMPurify;
    }
    var purify2 = createDOMPurify();
    return purify2;
  });
})(purify);
var browser = window.DOMPurify || (window.DOMPurify = purify.exports.default || purify.exports);
const TEMP_TARGET_ATTRIBUTE = "data-target-temp";
function addAttributeHooks() {
  browser.addHook("beforeSanitizeAttributes", (node) => {
    if (node.tagName === "A") {
      const targetValue = node.getAttribute("target");
      if (targetValue) {
        node.setAttribute(TEMP_TARGET_ATTRIBUTE, targetValue);
      } else {
        node.setAttribute("target", "_self");
      }
    }
  });
  browser.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute(TEMP_TARGET_ATTRIBUTE)) {
      node.setAttribute("target", node.getAttribute(TEMP_TARGET_ATTRIBUTE));
      node.removeAttribute(TEMP_TARGET_ATTRIBUTE);
      if (node.getAttribute("target") === "_blank") {
        node.setAttribute("rel", "noopener");
      }
    }
  });
}
function removeAttributeHooks() {
  browser.removeAllHooks();
}
function sanitize(str) {
  return browser.sanitize(str);
}
function Template({ template, param, as: tagName = "div" }) {
  var _a2;
  const templates2 = useStore(templateSelector);
  const templateFunc = templates2[template];
  if (isNil(templateFunc)) {
    return null;
  }
  const htmlOrVnode = templateFunc(param);
  return isString_1(htmlOrVnode) ? h$3(tagName, {
    className: cls(`template-${template}`),
    dangerouslySetInnerHTML: {
      __html: sanitize(htmlOrVnode)
    }
  }) : q$3(htmlOrVnode, {
    className: `${(_a2 = htmlOrVnode.props.className) != null ? _a2 : ""} ${cls(`template-${template}`)}`
  });
}
const EventBusContext = B$1(null);
const EventBusProvider = EventBusContext.Provider;
const useEventBus = () => {
  const eventBus = q$2(EventBusContext);
  if (!eventBus) {
    throw new Error("useEventBus must be used within a EventBusProvider");
  }
  return eventBus;
};
const primaryTimezoneSelector = (state) => {
  var _a2, _b, _c, _d, _e;
  return (_e = (_d = (_c = (_b = (_a2 = state.options) == null ? void 0 : _a2.timezone) == null ? void 0 : _b.zones) == null ? void 0 : _c[0]) == null ? void 0 : _d.timezoneName) != null ? _e : "Local";
};
const customOffsetCalculatorSelector = (state) => {
  var _a2, _b;
  return (_b = (_a2 = state.options) == null ? void 0 : _a2.timezone) == null ? void 0 : _b.customOffsetCalculator;
};
const timezonesSelector = (state) => {
  var _a2;
  return (_a2 = state.options.timezone.zones) != null ? _a2 : [];
};
function useTZConverter() {
  const customOffsetCalculator = useStore(customOffsetCalculatorSelector);
  const hasCustomOffsetCalculator = isPresent(customOffsetCalculator);
  return T$1((timezoneName, tzDate = new TZDate()) => tzDate.tz(hasCustomOffsetCalculator ? customOffsetCalculator(timezoneName, tzDate.getTime()) : timezoneName), [customOffsetCalculator, hasCustomOffsetCalculator]);
}
function usePrimaryTimezone() {
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const tzConverter = useTZConverter();
  const getNow = T$1(() => tzConverter(primaryTimezoneName), [primaryTimezoneName, tzConverter]);
  return [primaryTimezoneName, getNow];
}
function isWeekDayName(type, dayName) {
  return type === "week";
}
function getWeekDayNameColor({
  dayName,
  theme,
  today
}) {
  var _a2, _b;
  const { day, dateInstance } = dayName;
  const isToday = isSameDate(today, dateInstance);
  const isPastDay = !isToday && dateInstance < today;
  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isPastDay) {
    return (_a2 = theme.week) == null ? void 0 : _a2.pastDay.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  if (isToday) {
    return (_b = theme.week) == null ? void 0 : _b.today.color;
  }
  return theme.common.dayName.color;
}
function getMonthDayNameColor({
  dayName,
  theme
}) {
  const { day } = dayName;
  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  return theme.common.dayName.color;
}
function DayName({ dayName, style, type, theme }) {
  const eventBus = useEventBus();
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const { day } = dayName;
  const color = type === "week" ? getWeekDayNameColor({ dayName, theme, today }) : getMonthDayNameColor({ dayName, theme });
  const templateType = `${type}DayName`;
  const handleClick = () => {
    if (isWeekDayName(type)) {
      eventBus.fire("clickDayName", { date: toFormat(dayName.dateInstance, "YYYY-MM-DD") });
    }
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("day-name-item", type),
    style
  }, /* @__PURE__ */ h$3("span", {
    className: cls({ [`holiday-${getDayName(day)}`]: isWeekend(day) }),
    style: { color },
    onClick: handleClick,
    "data-testid": `dayName-${type}-${getDayName(day)}`
  }, /* @__PURE__ */ h$3(Template, {
    template: templateType,
    param: dayName
  })));
}
const commonThemeSelector = topLevelStateSelector("common");
const monthThemeSelector = topLevelStateSelector("month");
const weekDayGridLeftSelector = (theme) => theme.week.dayGridLeft;
const weekTimeGridLeftSelector = (theme) => theme.week.timeGridLeft;
const monthMoreViewSelector = (theme) => theme.month.moreView;
const monthGridCellSelector = (theme) => theme.month.gridCell;
const DEFAULT_COMMON_THEME = {
  border: "1px solid #e5e5e5",
  backgroundColor: "white",
  holiday: {
    color: "#ff4040"
  },
  saturday: {
    color: "#333"
  },
  dayName: {
    color: "#333"
  },
  today: {
    color: "#fff"
  },
  gridSelection: {
    backgroundColor: "rgba(81, 92, 230, 0.05)",
    border: "1px solid #515ce6"
  }
};
const DEFAULT_WEEK_THEME = {
  dayName: {
    borderLeft: "none",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  today: {
    color: "inherit",
    backgroundColor: "rgba(81, 92, 230, 0.05)"
  },
  pastDay: {
    color: "#bbb"
  },
  panelResizer: {
    border: "1px solid #e5e5e5"
  },
  dayGrid: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  dayGridLeft: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit",
    width: "72px"
  },
  timeGrid: {
    borderRight: "1px solid #e5e5e5"
  },
  timeGridLeft: {
    backgroundColor: "inherit",
    borderRight: "1px solid #e5e5e5",
    width: "72px"
  },
  timeGridLeftAdditionalTimezone: {
    backgroundColor: "white"
  },
  timeGridHalfHourLine: {
    borderBottom: "none"
  },
  timeGridHourLine: {
    borderBottom: "1px solid #e5e5e5"
  },
  nowIndicatorLabel: {
    color: "#515ce6"
  },
  nowIndicatorPast: {
    border: "1px dashed #515ce6"
  },
  nowIndicatorBullet: {
    backgroundColor: "#515ce6"
  },
  nowIndicatorToday: {
    border: "1px solid #515ce6"
  },
  nowIndicatorFuture: {
    border: "none"
  },
  pastTime: {
    color: "#bbb"
  },
  futureTime: {
    color: "#333"
  },
  gridSelection: {
    color: "#515ce6"
  }
};
const DEFAULT_MONTH_THEME = {
  dayName: {
    borderLeft: "none",
    backgroundColor: "inherit"
  },
  holidayExceptThisMonth: {
    color: "rgba(255, 64, 64, 0.4)"
  },
  dayExceptThisMonth: {
    color: "rgba(51, 51, 51, 0.4)"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  moreView: {
    border: "1px solid #d5d5d5",
    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    width: null,
    height: null
  },
  gridCell: {
    headerHeight: 31,
    footerHeight: null
  },
  moreViewTitle: {
    backgroundColor: "inherit"
  }
};
function createCommonTheme(commonTheme = {}) {
  return {
    common: mergeObject(DEFAULT_COMMON_THEME, commonTheme)
  };
}
function createThemeDispatch(set) {
  return {
    setTheme: (theme) => {
      set(produce((state) => {
        state.common = mergeObject(state.common, theme.common);
        state.week = mergeObject(state.week, theme.week);
        state.month = mergeObject(state.month, theme.month);
      }));
    },
    setCommonTheme: (commonTheme) => {
      set(produce((state) => {
        state.common = mergeObject(state.common, commonTheme);
      }));
    },
    setWeekTheme: (weekTheme) => {
      set(produce((state) => {
        state.week = mergeObject(state.week, weekTheme);
      }));
    },
    setMonthTheme: (monthTheme) => {
      set(produce((state) => {
        state.month = mergeObject(state.month, monthTheme);
      }));
    }
  };
}
function createMonthTheme(monthTheme = {}) {
  return {
    month: mergeObject(DEFAULT_MONTH_THEME, monthTheme)
  };
}
function createWeekTheme(weekTheme = {}) {
  return {
    week: mergeObject(DEFAULT_WEEK_THEME, weekTheme)
  };
}
const themeStoreCreator = (themeOptions = {}) => (set) => {
  return __spreadProps(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, createCommonTheme(themeOptions == null ? void 0 : themeOptions.common)), createWeekTheme(themeOptions == null ? void 0 : themeOptions.week)), createMonthTheme(themeOptions == null ? void 0 : themeOptions.month)), {
    dispatch: __spreadValues$1({}, createThemeDispatch(set))
  });
};
const initThemeStore = (themeOptions = {}) => createStore(themeStoreCreator(themeOptions));
const {
  StoreProvider: ThemeProvider,
  useInternalStore: useInternalThemeStore,
  useStore: useTheme
} = createStoreContext();
function useCommonTheme() {
  return useTheme(commonThemeSelector);
}
function useMonthTheme() {
  return useTheme(monthThemeSelector);
}
function weekDayNameSelector(theme) {
  return {
    common: {
      saturday: theme.common.saturday,
      holiday: theme.common.holiday,
      today: theme.common.today,
      dayName: theme.common.dayName
    },
    week: {
      pastDay: theme.week.pastDay,
      today: theme.week.today,
      dayName: theme.week.dayName
    }
  };
}
function monthDayNameSelector(theme) {
  return {
    common: {
      saturday: theme.common.saturday,
      holiday: theme.common.holiday,
      today: theme.common.today,
      dayName: theme.common.dayName
    },
    month: {
      dayName: theme.month.dayName
    }
  };
}
function GridHeader({
  dayNames,
  marginLeft = DEFAULT_DAY_NAME_MARGIN_LEFT,
  rowStyleInfo,
  type = "month"
}) {
  var _a2, _b;
  const theme = useTheme(type === "month" ? monthDayNameSelector : weekDayNameSelector);
  const _c = (_b = (_a2 = theme[type]) == null ? void 0 : _a2.dayName) != null ? _b : {}, { backgroundColor = "white", borderLeft = null } = _c, rest = __objRest(_c, ["backgroundColor", "borderLeft"]);
  const { borderTop = null, borderBottom = null } = rest;
  return /* @__PURE__ */ h$3("div", {
    "data-testid": `grid-header-${type}`,
    className: cls("day-names", type),
    style: {
      backgroundColor,
      borderTop,
      borderBottom
    }
  }, /* @__PURE__ */ h$3("div", {
    className: cls("day-name-container"),
    style: { marginLeft }
  }, dayNames.map((dayName, index) => /* @__PURE__ */ h$3(DayName, {
    type,
    key: `dayNames-${dayName.day}`,
    dayName,
    style: {
      width: toPercent(rowStyleInfo[index].width),
      left: toPercent(rowStyleInfo[index].left),
      borderLeft
    },
    theme
  }))));
}
const DEFAULT_VISIBLE_WEEKS = 6;
var CellBarType = /* @__PURE__ */ ((CellBarType2) => {
  CellBarType2["header"] = "header";
  CellBarType2["footer"] = "footer";
  return CellBarType2;
})(CellBarType || {});
function getCollisionGroup(events, usingTravelTime = true) {
  const collisionGroups = [];
  let previousEventList;
  if (!events.length) {
    return collisionGroups;
  }
  collisionGroups[0] = [events[0].cid()];
  events.slice(1).forEach((event, index) => {
    previousEventList = events.slice(0, index + 1).reverse();
    const found = previousEventList.find((previous) => event.collidesWith(previous, usingTravelTime));
    if (!found) {
      collisionGroups.push([event.cid()]);
    } else {
      collisionGroups.slice().reverse().some((group) => {
        if (~group.indexOf(found.cid())) {
          group.push(event.cid());
          return true;
        }
        return false;
      });
    }
  });
  return collisionGroups;
}
function getLastRowInColumn(matrix, col) {
  let { length: row } = matrix;
  while (row > 0) {
    row -= 1;
    if (!isUndefined_1(matrix[row][col])) {
      return row;
    }
  }
  return -1;
}
function getMatrices(collection, collisionGroups, usingTravelTime = true) {
  const result = [];
  collisionGroups.forEach((group) => {
    const matrix = [[]];
    group.forEach((eventID) => {
      const event = collection.get(eventID);
      let col = 0;
      let found = false;
      let nextRow;
      let lastRowInColumn;
      while (!found) {
        lastRowInColumn = getLastRowInColumn(matrix, col);
        if (lastRowInColumn === -1) {
          matrix[0].push(event);
          found = true;
        } else if (!event.collidesWith(matrix[lastRowInColumn][col], usingTravelTime)) {
          nextRow = lastRowInColumn + 1;
          if (isUndefined_1(matrix[nextRow])) {
            matrix[nextRow] = [];
          }
          matrix[nextRow][col] = event;
          found = true;
        }
        col += 1;
      }
    });
    result.push(matrix);
  });
  return result;
}
function getEventInDateRangeFilter(start, end) {
  return (model) => {
    const ownStarts = model.getStarts();
    const ownEnds = model.getEnds();
    return !(ownEnds < start || ownStarts > end);
  };
}
function positionUIModels(start, end, matrices, iteratee) {
  const ymdListToRender = makeDateRange(start, end, MS_PER_DAY).map((date2) => toFormat(date2, "YYYYMMDD"));
  matrices.forEach((matrix) => {
    matrix.forEach((column) => {
      column.forEach((uiModel, index) => {
        if (!uiModel) {
          return;
        }
        const ymd = toFormat(uiModel.getStarts(), "YYYYMMDD");
        const dateLength = makeDateRange(toStartOfDay(uiModel.getStarts()), toEndOfDay(uiModel.getEnds()), MS_PER_DAY).length;
        uiModel.top = index;
        uiModel.left = ymdListToRender.indexOf(ymd);
        uiModel.width = dateLength;
        iteratee == null ? void 0 : iteratee(uiModel);
      });
    });
  });
}
function limit$1(start, end, uiModel) {
  if (uiModel.getStarts() < start) {
    uiModel.exceedLeft = true;
    uiModel.renderStarts = new TZDate(start);
  }
  if (uiModel.getEnds() > end) {
    uiModel.exceedRight = true;
    uiModel.renderEnds = new TZDate(end);
  }
  return uiModel;
}
function limitRenderRange(start, end, uiModelColl) {
  if (uiModelColl instanceof Collection) {
    uiModelColl.each((uiModel) => {
      limit$1(start, end, uiModel);
      return true;
    });
    return null;
  }
  return limit$1(start, end, uiModelColl);
}
function convertToUIModel(eventCollection) {
  const uiModelColl = new Collection((uiModel) => {
    return uiModel.cid();
  });
  eventCollection.each(function(event) {
    uiModelColl.add(new EventUIModel(event));
  });
  return uiModelColl;
}
function _isAllday({ model }) {
  return model.isAllday || model.hasMultiDates;
}
function _isNotAllday(uiModel) {
  return !_isAllday(uiModel);
}
function _weightTopValue(uiModel) {
  uiModel.top = uiModel.top || 0;
  uiModel.top += 1;
}
function _adjustRenderRange(start, end, uiModelColl) {
  uiModelColl.each((uiModel) => {
    if (uiModel.model.isAllday || uiModel.model.hasMultiDates) {
      limitRenderRange(toStartOfDay(start), toEndOfDay(end), uiModel);
    }
  });
}
function _getAlldayMaxTopIndexAtYMD(idsOfDay, ymd, uiModelAlldayColl) {
  const topIndexesInDate = [];
  idsOfDay[ymd].forEach((cid) => {
    uiModelAlldayColl.doWhenHas(cid, (uiModel) => {
      topIndexesInDate.push(uiModel.top);
    });
  });
  if (topIndexesInDate.length > 0) {
    return Math.max(...topIndexesInDate);
  }
  return 0;
}
function _adjustTimeTopIndex(idsOfDay, uiModelColl) {
  const vAlldayColl = uiModelColl.filter(_isAllday);
  const sortedTimeEvents = uiModelColl.filter(_isNotAllday).sort(array.compare.event.asc);
  const maxIndexInYMD = {};
  sortedTimeEvents.forEach((timeUIModel) => {
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let alldayMaxTopInYMD = maxIndexInYMD[eventYMD];
    if (isUndefined_1(alldayMaxTopInYMD)) {
      alldayMaxTopInYMD = maxIndexInYMD[eventYMD] = _getAlldayMaxTopIndexAtYMD(idsOfDay, eventYMD, vAlldayColl);
    }
    maxIndexInYMD[eventYMD] = timeUIModel.top = alldayMaxTopInYMD + 1;
  });
}
function _stackTimeFromTop(idsOfDay, uiModelColl) {
  const uiModelAlldayColl = uiModelColl.filter(_isAllday);
  const sortedTimeEvents = uiModelColl.filter(_isNotAllday).sort(array.compare.event.asc);
  const indiceInYMD = {};
  sortedTimeEvents.forEach((timeUIModel) => {
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let topArrayInYMD = indiceInYMD[eventYMD];
    if (isUndefined_1(topArrayInYMD)) {
      topArrayInYMD = indiceInYMD[eventYMD] = [];
      idsOfDay[eventYMD].forEach((cid) => {
        uiModelAlldayColl.doWhenHas(cid, (uiModel) => {
          topArrayInYMD.push(uiModel.top);
        });
      });
    }
    if (topArrayInYMD.indexOf(timeUIModel.top) >= 0) {
      const maxTopInYMD = Math.max(...topArrayInYMD) + 1;
      for (let i2 = 1; i2 <= maxTopInYMD; i2 += 1) {
        timeUIModel.top = i2;
        if (topArrayInYMD.indexOf(timeUIModel.top) < 0) {
          break;
        }
      }
    }
    topArrayInYMD.push(timeUIModel.top);
  });
}
function _addMultiDatesInfo$1(uiModelColl) {
  uiModelColl.each((uiModel) => {
    const { model } = uiModel;
    const start = model.getStarts();
    const end = model.getEnds();
    model.hasMultiDates = !isSameDate(start, end);
    if (!model.isAllday && model.hasMultiDates) {
      uiModel.renderStarts = toStartOfDay(start);
      uiModel.renderEnds = toEndOfDay(end);
    }
  });
}
function findByDateRange$1(calendarData, condition) {
  const { start, end, andFilters = [], alldayFirstMode = false } = condition;
  const { events, idsOfDay } = calendarData;
  const filterFn = Collection.and(...[getEventInDateRangeFilter(start, end)].concat(andFilters));
  const coll = events.filter(filterFn);
  const uiModelColl = convertToUIModel(coll);
  _addMultiDatesInfo$1(uiModelColl);
  _adjustRenderRange(start, end, uiModelColl);
  const vList = uiModelColl.sort(array.compare.event.asc);
  const usingTravelTime = false;
  const collisionGroup = getCollisionGroup(vList, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroup, usingTravelTime);
  positionUIModels(start, end, matrices, _weightTopValue);
  if (alldayFirstMode) {
    _adjustTimeTopIndex(idsOfDay, uiModelColl);
  } else {
    _stackTimeFromTop(idsOfDay, uiModelColl);
  }
  return matrices;
}
function _makeHourRangeFilter(hStart, hEnd) {
  return (uiModel) => {
    const ownHourStart = uiModel.getStarts();
    const ownHourEnd = uiModel.getEnds();
    const ownHourStartTime = ownHourStart.getTime();
    const ownHourEndTime = ownHourEnd.getTime();
    const yyyy = ownHourStart.getFullYear();
    const mm = ownHourStart.getMonth();
    const dd = ownHourStart.getDate();
    const hourStart = new TZDate(yyyy, mm, dd).setHours(hStart);
    const hourEnd = new TZDate(yyyy, mm, dd).setHours(hEnd);
    return ownHourStartTime >= hourStart && ownHourStartTime < hourEnd || ownHourEndTime > hourStart && ownHourEndTime <= hourEnd || ownHourStartTime < hourStart && ownHourEndTime > hourStart || ownHourEndTime > hourEnd && ownHourStartTime < hourEnd;
  };
}
function _makeGetUIModelFuncForTimeView(hourStart, hourEnd) {
  if (hourStart === 0 && hourEnd === 24) {
    return (uiModelColl) => {
      return uiModelColl.sort(array.compare.event.asc);
    };
  }
  return (uiModelColl) => {
    return uiModelColl.filter(_makeHourRangeFilter(hourStart, hourEnd)).sort(array.compare.event.asc);
  };
}
function splitEventByDateRange(idsOfDay, start, end, uiModelColl) {
  const result = {};
  const range2 = getDateRange(start, end);
  range2.forEach((date2) => {
    const ymd = toFormat(date2, "YYYYMMDD");
    const ids = idsOfDay[ymd];
    const collection = result[ymd] = new Collection((event) => {
      return event.cid();
    });
    if (ids && ids.length) {
      ids.forEach((id) => {
        uiModelColl.doWhenHas(id, (event) => {
          collection.add(event);
        });
      });
    }
  }, {});
  return result;
}
function getUIModelForTimeView(idsOfDay, condition) {
  const { start, end, uiModelTimeColl, hourStart, hourEnd } = condition;
  const ymdSplitted = splitEventByDateRange(idsOfDay, start, end, uiModelTimeColl);
  const result = {};
  const _getUIModel = _makeGetUIModelFuncForTimeView(hourStart, hourEnd);
  const usingTravelTime = true;
  Object.entries(ymdSplitted).forEach(([ymd, uiModelColl]) => {
    const uiModels = _getUIModel(uiModelColl);
    const collisionGroups = getCollisionGroup(uiModels, usingTravelTime);
    const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
    result[ymd] = matrices;
  });
  return result;
}
function _addMultiDatesInfo(uiModelColl) {
  uiModelColl.each((uiModel) => {
    const { model } = uiModel;
    model.hasMultiDates = true;
    uiModel.renderStarts = toStartOfDay(model.getStarts());
    uiModel.renderEnds = toEndOfDay(model.getEnds());
  });
}
function getUIModelForAlldayView(start, end, uiModelColl) {
  if (!uiModelColl || !uiModelColl.size) {
    return [];
  }
  _addMultiDatesInfo(uiModelColl);
  limitRenderRange(start, end, uiModelColl);
  const uiModels = uiModelColl.sort(array.compare.event.asc);
  const usingTravelTime = true;
  const collisionGroups = getCollisionGroup(uiModels, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
  positionUIModels(start, end, matrices);
  return matrices;
}
function findByDateRange(calendarData, condition) {
  var _a2, _b;
  const { start, end, panels, andFilters = [], options } = condition;
  const { events, idsOfDay } = calendarData;
  const hourStart = (_a2 = options == null ? void 0 : options.hourStart) != null ? _a2 : 0;
  const hourEnd = (_b = options == null ? void 0 : options.hourEnd) != null ? _b : 24;
  const filterFn = Collection.and(...[getEventInDateRangeFilter(start, end)].concat(andFilters));
  const uiModelColl = convertToUIModel(events.filter(filterFn));
  const group = uiModelColl.groupBy(filterByCategory);
  return panels.reduce((acc, cur) => {
    const { name, type } = cur;
    if (isNil(group[name])) {
      return acc;
    }
    return __spreadProps(__spreadValues$1({}, acc), {
      [name]: type === "daygrid" ? getUIModelForAlldayView(start, end, group[name]) : getUIModelForTimeView(idsOfDay, {
        start,
        end,
        uiModelTimeColl: group[name],
        hourStart,
        hourEnd
      })
    });
  }, {
    milestone: [],
    task: [],
    allday: [],
    time: {}
  });
}
function limit(value, minArr, maxArr) {
  const v2 = Math.max(value, ...minArr);
  return Math.min(v2, ...maxArr);
}
function ratio(a2, b2, y2) {
  return b2 * y2 / a2;
}
function isBetween$1(value, min2, max2) {
  return min2 <= value && value <= max2;
}
const EVENT_HEIGHT = 22;
const TOTAL_WIDTH = 100;
function forEachMatrix3d(matrices, iteratee) {
  matrices.forEach((matrix) => {
    matrix.forEach((row) => {
      row.forEach((value, index) => {
        iteratee(value, index);
      });
    });
  });
}
function isWithinHeight(containerHeight, eventHeight) {
  return ({ top }) => containerHeight >= top * eventHeight;
}
function isExceededHeight(containerHeight, eventHeight) {
  return ({ top }) => containerHeight < top * eventHeight;
}
function getExceedCount(uiModel, containerHeight, eventHeight) {
  return uiModel.filter(isExceededHeight(containerHeight, eventHeight)).length;
}
const getWeekendCount = (row) => row.filter((cell) => isWeekend(cell.getDay())).length;
function getGridWidthAndLeftPercentValues(row, narrowWeekend, totalWidth) {
  const weekendCount = getWeekendCount(row);
  const gridCellCount = row.length;
  const isAllWeekend = weekendCount === gridCellCount;
  const widthPerDay = totalWidth / (narrowWeekend && !isAllWeekend ? gridCellCount * 2 - weekendCount : gridCellCount);
  const widthList = row.map((cell) => {
    const day = cell.getDay();
    if (!narrowWeekend || isAllWeekend) {
      return widthPerDay;
    }
    return isWeekend(day) ? widthPerDay : widthPerDay * 2;
  });
  const leftList = widthList.reduce((acc, _2, index) => index ? [...acc, acc[index - 1] + widthList[index - 1]] : [0], []);
  return {
    widthList,
    leftList
  };
}
function getWidth(widthList, start, end) {
  return widthList.reduce((acc, width, index) => {
    if (start <= index && index <= end) {
      return acc + width;
    }
    return acc;
  }, 0);
}
const isInGrid = (gridDate) => {
  return (uiModel) => {
    const eventStart = toStartOfDay(uiModel.getStarts());
    const eventEnd = toStartOfDay(uiModel.getEnds());
    return eventStart <= gridDate && gridDate <= eventEnd;
  };
};
function getGridDateIndex(date2, row) {
  return row.findIndex((cell) => date2 >= toStartOfDay(cell) && date2 <= toEndOfDay(cell));
}
const getLeftAndWidth = (startIndex, endIndex, row, narrowWeekend) => {
  const { widthList } = getGridWidthAndLeftPercentValues(row, narrowWeekend, TOTAL_WIDTH);
  return {
    left: !startIndex ? 0 : getWidth(widthList, 0, startIndex - 1),
    width: getWidth(widthList, startIndex != null ? startIndex : 0, endIndex < 0 ? row.length - 1 : endIndex)
  };
};
const getEventLeftAndWidth = (start, end, row, narrowWeekend) => {
  const { widthList } = getGridWidthAndLeftPercentValues(row, narrowWeekend, TOTAL_WIDTH);
  let gridStartIndex = 0;
  let gridEndIndex = row.length - 1;
  row.forEach((cell, index) => {
    if (cell <= start) {
      gridStartIndex = index;
    }
    if (cell <= end) {
      gridEndIndex = index;
    }
  });
  return {
    width: getWidth(widthList, gridStartIndex, gridEndIndex),
    left: !gridStartIndex ? 0 : getWidth(widthList, 0, gridStartIndex - 1)
  };
};
function getEventUIModelWithPosition(uiModel, row, narrowWeekend = false) {
  const modelStart = uiModel.getStarts();
  const modelEnd = uiModel.getEnds();
  const { width, left } = getEventLeftAndWidth(modelStart, modelEnd, row, narrowWeekend);
  uiModel.width = width;
  uiModel.left = left;
  return uiModel;
}
function getRenderedEventUIModels(row, calendarData, narrowWeekend) {
  const { idsOfDay } = calendarData;
  const eventUIModels = findByDateRange$1(calendarData, {
    start: row[0],
    end: toEndOfDay(row[row.length - 1])
  });
  const idEventModelMap = [];
  forEachMatrix3d(eventUIModels, (uiModel) => {
    const cid = uiModel.model.cid();
    idEventModelMap[cid] = getEventUIModelWithPosition(uiModel, row, narrowWeekend);
  });
  const gridDateEventModelMap = Object.keys(idsOfDay).reduce((acc, ymd) => {
    const ids = idsOfDay[ymd];
    acc[ymd] = ids.map((cid) => idEventModelMap[cid]).filter((vm) => !!vm);
    return acc;
  }, {});
  return {
    uiModels: Object.values(idEventModelMap),
    gridDateEventModelMap
  };
}
const getDayGridEventModels = (eventModels, row, narrowWeekend = false) => {
  forEachMatrix3d(eventModels, (uiModel) => {
    const modelStart = uiModel.getStarts();
    const modelEnd = uiModel.getEnds();
    const { width, left } = getEventLeftAndWidth(modelStart, modelEnd, row, narrowWeekend);
    uiModel.width = width;
    uiModel.left = left;
    uiModel.top += 1;
  });
  return flattenMatrix3d(eventModels);
};
const getModels = (models) => models.filter((model) => !!model);
function flattenMatrix3d(matrices) {
  return matrices.flatMap((matrix) => matrix.flatMap((models) => getModels(models)));
}
const getTimeGridEventModels = (eventMatrix) => Array.from(new Set(Object.values(eventMatrix).reduce((result, matrix3d) => result.concat(...flattenMatrix3d(matrix3d)), [])));
const getWeekViewEvents = (row, calendarData, {
  narrowWeekend,
  hourStart,
  hourEnd,
  weekStartDate,
  weekEndDate
}) => {
  const panels = [
    {
      name: "milestone",
      type: "daygrid",
      show: true
    },
    {
      name: "task",
      type: "daygrid",
      show: true
    },
    {
      name: "allday",
      type: "daygrid",
      show: true
    },
    {
      name: "time",
      type: "timegrid",
      show: true
    }
  ];
  const eventModels = findByDateRange(calendarData, {
    start: weekStartDate,
    end: weekEndDate,
    panels,
    andFilters: [],
    options: {
      hourStart,
      hourEnd
    }
  });
  return Object.keys(eventModels).reduce((acc, cur) => {
    const events = eventModels[cur];
    return __spreadProps(__spreadValues$1({}, acc), {
      [cur]: Array.isArray(events) ? getDayGridEventModels(events, row, narrowWeekend) : getTimeGridEventModels(events)
    });
  }, {
    milestone: [],
    allday: [],
    task: [],
    time: []
  });
};
function createDateMatrixOfMonth(renderTargetDate, {
  workweek = false,
  visibleWeeksCount = 0,
  startDayOfWeek = 0,
  isAlways6Weeks = true
}) {
  const targetDate = new TZDate(renderTargetDate);
  const shouldApplyVisibleWeeksCount = visibleWeeksCount > 0;
  const baseDate = shouldApplyVisibleWeeksCount ? targetDate : toStartOfMonth(targetDate);
  const firstDateOfMatrix = subtractDate(baseDate, baseDate.getDay() - startDayOfWeek + (baseDate.getDay() < startDayOfWeek ? WEEK_DAYS : 0));
  const dayOfFirstDateOfMatrix = firstDateOfMatrix.getDay();
  const totalDatesCountOfMonth = toEndOfMonth(targetDate).getDate();
  const initialDifference = getDateDifference(firstDateOfMatrix, baseDate);
  const totalDatesOfMatrix = totalDatesCountOfMonth + Math.abs(initialDifference);
  let totalWeeksOfMatrix = DEFAULT_VISIBLE_WEEKS;
  if (shouldApplyVisibleWeeksCount) {
    totalWeeksOfMatrix = visibleWeeksCount;
  } else if (isAlways6Weeks === false) {
    totalWeeksOfMatrix = Math.ceil(totalDatesOfMatrix / WEEK_DAYS);
  }
  return range_1(0, totalWeeksOfMatrix).map((weekIndex) => range_1(0, WEEK_DAYS).reduce((weekRow, dayOfWeek) => {
    const steps = weekIndex * WEEK_DAYS + dayOfWeek;
    const currentDay = (steps + dayOfFirstDateOfMatrix) % WEEK_DAYS;
    if (!workweek || workweek && !isWeekend(currentDay)) {
      const date2 = addDate(firstDateOfMatrix, steps);
      weekRow.push(date2);
    }
    return weekRow;
  }, []));
}
function getWeekDates(renderDate, { startDayOfWeek = Day$2.SUN, workweek }) {
  const now = toStartOfDay(renderDate);
  const nowDay = now.getDay();
  const prevDateCount = nowDay - startDayOfWeek;
  const weekDayList = prevDateCount >= 0 ? range_1(-prevDateCount, WEEK_DAYS - prevDateCount) : range_1(-WEEK_DAYS - prevDateCount, -prevDateCount);
  return weekDayList.reduce((acc, day) => {
    const date2 = addDate(now, day);
    if (workweek && isWeekend(date2.getDay())) {
      return acc;
    }
    acc.push(date2);
    return acc;
  }, []);
}
function getColumnsData(datesOfWeek, narrowWeekend = false) {
  const datesCount = datesOfWeek.length;
  const shouldApplyNarrowWeekend = datesCount > 5 && narrowWeekend;
  const defaultWidthByColumns = shouldApplyNarrowWeekend ? 100 / (datesCount - 1) : 100 / datesCount;
  return datesOfWeek.map((date2) => {
    const width = shouldApplyNarrowWeekend && isWeekend(date2.getDay()) ? defaultWidthByColumns / 2 : defaultWidthByColumns;
    return {
      date: date2,
      width
    };
  }).reduce((result, currentDateAndWidth, index) => {
    const prev = result[index - 1];
    result.push(__spreadProps(__spreadValues$1({}, currentDateAndWidth), {
      left: index === 0 ? 0 : prev.left + prev.width
    }));
    return result;
  }, []);
}
function createTimeGridData(datesOfWeek, options) {
  var _a2;
  const columns = getColumnsData(datesOfWeek, (_a2 = options.narrowWeekend) != null ? _a2 : false);
  const steps = (options.hourEnd - options.hourStart) * 2;
  const baseHeight = 100 / steps;
  const rows = range_1(steps).map((step, index) => {
    const isOdd = index % 2 === 1;
    const hour = options.hourStart + Math.floor(step / 2);
    const startTime = `${hour}:${isOdd ? "30" : "00"}`.padStart(5, "0");
    const endTime = (isOdd ? `${hour + 1}:00` : `${hour}:30`).padStart(5, "0");
    return {
      top: baseHeight * index,
      height: baseHeight,
      startTime,
      endTime
    };
  });
  return {
    columns,
    rows
  };
}
function getRelativeMousePosition({ clientX, clientY }, { left, top, clientLeft, clientTop }) {
  return [clientX - left - clientLeft, clientY - top - clientTop];
}
function getIndexFromPosition(arrayLength, maxRange, currentPosition) {
  const calculatedIndex = Math.floor(ratio(maxRange, arrayLength, currentPosition));
  return limit(calculatedIndex, [0], [arrayLength - 1]);
}
function createGridPositionFinder({
  rowsCount,
  columnsCount,
  container,
  narrowWeekend = false,
  startDayOfWeek = Day$2.SUN
}) {
  if (isNil(container)) {
    return () => null;
  }
  const dayRange = range_1(startDayOfWeek, startDayOfWeek + columnsCount).map((day) => day % WEEK_DAYS);
  const narrowColumnCount = narrowWeekend ? dayRange.filter((day) => isWeekend(day)).length : 0;
  return function gridPositionFinder(mousePosition) {
    const {
      left: containerLeft,
      top: containerTop,
      width: containerWidth,
      height: containerHeight
    } = container.getBoundingClientRect();
    const [left, top] = getRelativeMousePosition(mousePosition, {
      left: containerLeft,
      top: containerTop,
      clientLeft: container.clientLeft,
      clientTop: container.clientTop
    });
    if (left < 0 || top < 0 || left > containerWidth || top > containerHeight) {
      return null;
    }
    const unitWidth = narrowWeekend ? containerWidth / (columnsCount - narrowColumnCount + 1) : containerWidth / columnsCount;
    const columnWidthList = dayRange.map((dayOfWeek) => narrowWeekend && isWeekend(dayOfWeek) ? unitWidth / 2 : unitWidth);
    const columnLeftList = [];
    columnWidthList.forEach((width, index) => {
      if (index === 0) {
        columnLeftList.push(0);
      } else {
        columnLeftList.push(columnLeftList[index - 1] + columnWidthList[index - 1]);
      }
    });
    const columnIndex = findLastIndex(columnLeftList, (columnLeft) => left >= columnLeft);
    return {
      columnIndex,
      rowIndex: getIndexFromPosition(rowsCount, containerHeight, top)
    };
  };
}
function commonGridSelectionSelector(theme) {
  return theme.common.gridSelection;
}
function GridSelection$1({ type, gridSelectionData, weekDates, narrowWeekend }) {
  const { backgroundColor, border } = useTheme(commonGridSelectionSelector);
  const { startCellIndex, endCellIndex } = gridSelectionData;
  const { left, width } = getLeftAndWidth(Math.min(startCellIndex, endCellIndex), Math.max(startCellIndex, endCellIndex), weekDates, narrowWeekend);
  const style = {
    left: toPercent(left),
    width: toPercent(width),
    height: toPercent(100),
    backgroundColor,
    border
  };
  return width > 0 ? /* @__PURE__ */ h$3("div", {
    className: cls(type, "grid-selection"),
    style
  }) : null;
}
function createSortedGridSelection(initPos, currentPos, isReversed) {
  return {
    startColumnIndex: isReversed ? currentPos.columnIndex : initPos.columnIndex,
    startRowIndex: isReversed ? currentPos.rowIndex : initPos.rowIndex,
    endColumnIndex: isReversed ? initPos.columnIndex : currentPos.columnIndex,
    endRowIndex: isReversed ? initPos.rowIndex : currentPos.rowIndex
  };
}
function calculateTimeGridSelectionByCurrentIndex(timeGridSelection, columnIndex, maxRowIndex) {
  if (isNil(timeGridSelection)) {
    return null;
  }
  const { startColumnIndex, endColumnIndex, endRowIndex, startRowIndex } = timeGridSelection;
  if (!isBetween$1(columnIndex, startColumnIndex, endColumnIndex)) {
    return null;
  }
  const hasMultipleColumns = startColumnIndex !== endColumnIndex;
  const isStartingColumn = columnIndex === startColumnIndex;
  const resultGridSelection = {
    startRowIndex,
    endRowIndex,
    isSelectingMultipleColumns: hasMultipleColumns,
    isStartingColumn
  };
  if (startColumnIndex < columnIndex && columnIndex < endColumnIndex) {
    resultGridSelection.startRowIndex = 0;
    resultGridSelection.endRowIndex = maxRowIndex;
  } else if (startColumnIndex !== endColumnIndex) {
    if (startColumnIndex === columnIndex) {
      resultGridSelection.endRowIndex = maxRowIndex;
    } else if (endColumnIndex === columnIndex) {
      resultGridSelection.startRowIndex = 0;
    }
  }
  return resultGridSelection;
}
const timeGridSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.columnIndex > currentPos.columnIndex || initPos.columnIndex === currentPos.columnIndex && initPos.rowIndex > currentPos.rowIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const timeGridData = dateCollection;
    const startDate = setTimeStrToDate(timeGridData.columns[gridSelection.startColumnIndex].date, timeGridData.rows[gridSelection.startRowIndex].startTime);
    const endDate = setTimeStrToDate(timeGridData.columns[gridSelection.endColumnIndex].date, timeGridData.rows[gridSelection.endRowIndex].endTime);
    return [startDate, endDate];
  },
  calculateSelection: calculateTimeGridSelectionByCurrentIndex
};
function calculateDayGridMonthSelectionByCurrentIndex(gridSelection, currentIndex, weekLength) {
  if (!(isPresent(gridSelection) && isPresent(currentIndex) && isPresent(weekLength))) {
    return null;
  }
  const { startRowIndex, startColumnIndex, endRowIndex, endColumnIndex } = gridSelection;
  if (!isBetween$1(currentIndex, Math.min(startRowIndex, endRowIndex), Math.max(startRowIndex, endRowIndex))) {
    return null;
  }
  let startCellIndex = startColumnIndex;
  let endCellIndex = endColumnIndex;
  if (startRowIndex < currentIndex) {
    startCellIndex = 0;
  }
  if (endRowIndex > currentIndex) {
    endCellIndex = weekLength - 1;
  }
  return { startCellIndex, endCellIndex };
}
const dayGridMonthSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.rowIndex > currentPos.rowIndex || initPos.rowIndex === currentPos.rowIndex && initPos.columnIndex > currentPos.columnIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const dateMatrix = dateCollection;
    return [
      dateMatrix[gridSelection.startRowIndex][gridSelection.startColumnIndex],
      dateMatrix[gridSelection.endRowIndex][gridSelection.endColumnIndex]
    ];
  },
  calculateSelection: calculateDayGridMonthSelectionByCurrentIndex
};
function calculateAlldayGridRowSelectionByCurrentIndex(gridSelection) {
  return isPresent(gridSelection) ? {
    startCellIndex: gridSelection.startColumnIndex,
    endCellIndex: gridSelection.endColumnIndex
  } : null;
}
const alldayGridRowSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.columnIndex > currentPos.columnIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const weekDates = dateCollection;
    return [weekDates[gridSelection.startColumnIndex], weekDates[gridSelection.endColumnIndex]];
  },
  calculateSelection: calculateAlldayGridRowSelectionByCurrentIndex
};
function dayGridWeekSelectionSelector(state) {
  return alldayGridRowSelectionHelper.calculateSelection(state.gridSelection.dayGridWeek);
}
function AlldayGridSelection({ weekDates, narrowWeekend }) {
  const calculatedGridSelection = useStore(dayGridWeekSelectionSelector);
  if (isNil(calculatedGridSelection)) {
    return null;
  }
  return /* @__PURE__ */ h$3(GridSelection$1, {
    type: "allday",
    gridSelectionData: calculatedGridSelection,
    weekDates,
    narrowWeekend
  });
}
function S(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if (e2 !== "__source" && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2) {
  this.props = n2;
}
function g$1(n2, t2) {
  function e2(n3) {
    var e3 = this.props.ref, r3 = e3 == n3.ref;
    return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t2 ? !t2(this.props, n3) || !r3 : C(this.props, n3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = e2, h$3(n2, t3);
  }
  return r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(E.prototype = new d$3()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var w = l$3.__b;
l$3.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w && w(n2);
};
var x$1 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function R(n2) {
  function t2(t3) {
    var e2 = S({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = x$1, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var A = l$3.__e;
l$3.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return t2.__e == null && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  A(n2, t2, e2, r2);
};
var O = l$3.unmount;
function T() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function D() {
  this.u = null, this.o = null;
}
l$3.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && n2.__h === true && (n2.type = null), O && O(n2);
}, (T.prototype = new d$3()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(e2);
  var u2 = L(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = function n4(t4, e3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n4(t5, e3, r3);
          }), t4.__c && t4.__c.__P === e3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, f2 = t2.__h === true;
  r2.__u++ || f2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, T.prototype.componentWillUnmount = function() {
  this.t = [];
}, T.prototype.render = function(n2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var e2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t3, e3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(n4) {
          typeof n4.__c == "function" && n4.__c();
        }), t3.__c.__H = null), (t3 = S({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = e3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return n3(t4, e3, r3);
        })), t3;
      }(this.__b, e2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var u2 = t2.__a && h$3(p$3, null, n2.fallback);
  return u2 && (u2.__h = null), [h$3(p$3, null, t2.__a ? null : n2.children), u2];
};
var F = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function I(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function M(n2) {
  var t2 = this, e2 = n2.i;
  t2.componentWillUnmount = function() {
    P$2(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== e2 && t2.componentWillUnmount(), n2.__v ? (t2.l || (t2.i = e2, t2.l = { nodeType: 1, parentNode: e2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, insertBefore: function(n3, e3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t2.i.removeChild(n3);
  } }), P$2(h$3(I, { context: t2.context }, n2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function V(n2, t2) {
  var e2 = h$3(M, { __v: n2, i: t2 });
  return e2.containerInfo = t2, e2;
}
(D.prototype = new d$3()).__a = function(n2) {
  var t2 = this, e2 = L(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), F(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, D.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = x$3(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    F(n2, e2, t2);
  });
};
var W = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $ = typeof document != "undefined", j = function(n2) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
d$3.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(d$3.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t2) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t2 });
  } });
});
var H = l$3.event;
function Z() {
}
function Y() {
  return this.cancelBubble;
}
function q() {
  return this.defaultPrevented;
}
l$3.event = function(n2) {
  return H && (n2 = H(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q, n2.nativeEvent = n2;
};
var J = { configurable: true, get: function() {
  return this.class;
} }, K = l$3.vnode;
l$3.vnode = function(n2) {
  var t2 = n2.type, e2 = n2.props, r2 = e2;
  if (typeof t2 == "string") {
    var u2 = t2.indexOf("-") === -1;
    for (var o2 in r2 = {}, e2) {
      var i2 = e2[o2];
      $ && o2 === "children" && t2 === "noscript" || o2 === "value" && "defaultValue" in e2 && i2 == null || (o2 === "defaultValue" && "value" in e2 && e2.value == null ? o2 = "value" : o2 === "download" && i2 === true ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !j(e2.type) ? o2 = "oninput" : /^onfocus$/i.test(o2) ? o2 = "onfocusin" : /^onblur$/i.test(o2) ? o2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o2) ? o2 = o2.toLowerCase() : u2 && P.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i2 === null && (i2 = void 0), /^oninput$/i.test(o2) && (o2 = o2.toLowerCase(), r2[o2] && (o2 = "oninputCapture")), r2[o2] = i2);
    }
    t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = x$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.value.indexOf(n3.props.value) != -1;
    })), t2 == "select" && r2.defaultValue != null && (r2.value = x$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.multiple ? r2.defaultValue.indexOf(n3.props.value) != -1 : r2.defaultValue == n3.props.value;
    })), n2.props = r2, e2.class != e2.className && (J.enumerable = "className" in e2, e2.className != null && (r2.class = e2.className), Object.defineProperty(r2, "className", J));
  }
  n2.$$typeof = W, K && K(n2);
};
var Q = l$3.__r;
l$3.__r = function(n2) {
  Q && Q(n2), n2.__c;
};
function un(n2) {
  return !!n2.__k && (P$2(null, n2), true);
}
function ExceedCount({ index, exceedCount, isClicked, onClickExceedCount }) {
  const clickExceedCount = () => onClickExceedCount(index);
  const style = { display: isClicked ? "none" : "" };
  return exceedCount && !isClicked ? /* @__PURE__ */ h$3("span", {
    className: cls("weekday-exceed-in-week"),
    onClick: clickExceedCount,
    style
  }, /* @__PURE__ */ h$3(Template, {
    template: "weekGridFooterExceed",
    param: exceedCount
  })) : null;
}
function CollapseButton({ isClicked, isClickedIndex, onClickCollapseButton }) {
  return isClicked && isClickedIndex ? /* @__PURE__ */ h$3("span", {
    className: cls("weekday-exceed-in-week"),
    onClick: onClickCollapseButton
  }, /* @__PURE__ */ h$3(Template, {
    template: "collapseBtnTitle"
  })) : null;
}
function GridCell$1({
  width,
  left,
  index,
  exceedCount,
  isClicked,
  onClickExceedCount,
  isClickedIndex,
  onClickCollapseButton,
  isLastCell
}) {
  const { borderRight, backgroundColor } = useTheme(T$1((theme) => theme.week.dayGrid, []));
  const style = {
    width,
    left,
    borderRight: isLastCell ? "none" : borderRight,
    backgroundColor
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("panel-grid"),
    style
  }, /* @__PURE__ */ h$3(ExceedCount, {
    index,
    exceedCount,
    isClicked,
    onClickExceedCount
  }), /* @__PURE__ */ h$3(CollapseButton, {
    isClickedIndex,
    isClicked,
    onClickCollapseButton
  }));
}
const GridCells = g$1(function GridCells2({
  uiModels,
  weekDates,
  narrowWeekend,
  height,
  clickedIndex,
  isClickedCount,
  onClickExceedCount,
  onClickCollapseButton
}) {
  const eventTopMargin = 2;
  const { widthList, leftList } = getGridWidthAndLeftPercentValues(weekDates, narrowWeekend, TOTAL_WIDTH);
  const lastCellIndex = weekDates.length - 1;
  return /* @__PURE__ */ h$3(p$3, null, weekDates.map((cell, index) => {
    const width = toPercent(widthList[index]);
    const left = toPercent(leftList[index]);
    const uiModelsInCell = uiModels.filter(isInGrid(cell));
    const exceedCount = getExceedCount(uiModelsInCell, height, EVENT_HEIGHT + eventTopMargin);
    const isClickedIndex = index === clickedIndex;
    const isLastCell = index === lastCellIndex;
    return /* @__PURE__ */ h$3(GridCell$1, {
      key: `panel-grid-${cell.getDate()}`,
      width,
      left,
      index,
      exceedCount,
      isClicked: isClickedCount,
      onClickExceedCount,
      isClickedIndex,
      onClickCollapseButton,
      isLastCell
    });
  }));
});
function HorizontalEventResizeIcon({ onMouseDown }) {
  return /* @__PURE__ */ h$3("span", {
    className: `${cls("weekday-resize-handle")} ${cls("handle-y")}`,
    onMouseDown,
    "data-testid": "horizontal-event-resize-icon"
  }, /* @__PURE__ */ h$3("i", {
    className: `${cls("icon")} ${cls("ic-handle-y")}`
  }));
}
const LayoutContainerContext = B$1(null);
const LayoutContainerProvider = LayoutContainerContext.Provider;
const useLayoutContainer = () => {
  const ref2 = q$2(LayoutContainerContext);
  if (isUndefined_1(ref2)) {
    throw new Error("LayoutContainerProvider is not found");
  }
  return ref2;
};
const DRAGGING_TYPE_CONSTANTS = {
  panelResizer: "panelResizer"
};
const DRAGGING_TYPE_CREATORS = {
  resizeEvent: (area, id) => `event/${area}/resize/${id}`,
  moveEvent: (area, id) => `event/${area}/move/${id}`,
  gridSelection: (type) => `gridSelection/${type}`
};
function useCalendarById(calendarId) {
  return useStore(T$1((state) => state.calendar.calendars.find((cal) => cal.id === calendarId), [calendarId]));
}
function useCalendarColor(model) {
  var _a2;
  const calendar = useCalendarById((_a2 = model == null ? void 0 : model.calendarId) != null ? _a2 : null);
  return F$2(() => ({
    color: calendar == null ? void 0 : calendar.color,
    borderColor: calendar == null ? void 0 : calendar.borderColor,
    backgroundColor: calendar == null ? void 0 : calendar.backgroundColor,
    dragBackgroundColor: calendar == null ? void 0 : calendar.dragBackgroundColor
  }), [calendar]);
}
var KEY = /* @__PURE__ */ ((KEY2) => {
  KEY2["ESCAPE"] = "Escape";
  return KEY2;
})(KEY || {});
const KEYCODE = {
  ["Escape"]: 27
};
const MINIMUM_DRAG_MOUSE_DISTANCE = 3;
function useTransientUpdate(selector, subscriber) {
  const store = useInternalStore();
  const selectorRef = s$2(selector);
  const subscriberRef = s$2(subscriber);
  _$2(() => {
    selectorRef.current = selector;
    subscriberRef.current = subscriber;
  }, [selector, subscriber]);
  _$2(() => store.subscribe((slice) => subscriberRef.current(slice), (state) => selectorRef.current(state)), [selector, store]);
}
function isKeyPressed(e2, key) {
  return e2.key ? e2.key === key : e2.keyCode === KEYCODE[key];
}
function isLeftClick(buttonNum) {
  return buttonNum === 0;
}
function isMouseMoved(initX, initY, x2, y2) {
  return Math.abs(initX - x2) >= MINIMUM_DRAG_MOUSE_DISTANCE || Math.abs(initY - y2) >= MINIMUM_DRAG_MOUSE_DISTANCE;
}
function useDrag(draggingItemType, { onInit, onDragStart, onDrag, onMouseUp, onPressESCKey } = {}) {
  const { initDrag, setDragging, cancelDrag, reset } = useDispatch("dnd");
  const store = useInternalStore();
  const dndSliceRef = s$2(store.getState().dnd);
  useTransientUpdate(dndSelector, (dndState) => {
    dndSliceRef.current = dndState;
  });
  const [isStarted, setStarted] = y$1(false);
  const handleMouseMoveRef = s$2(null);
  const handleMouseUpRef = s$2(null);
  const handleKeyDownRef = s$2(null);
  const handleMouseDown = T$1((e2) => {
    if (!isLeftClick(e2.button)) {
      return;
    }
    if (e2.currentTarget) {
      e2.currentTarget.ondragstart = function() {
        return false;
      };
    }
    e2.preventDefault();
    setStarted(true);
    initDrag({
      draggingItemType,
      initX: e2.clientX,
      initY: e2.clientY
    });
    onInit == null ? void 0 : onInit(e2, dndSliceRef.current);
  }, [onInit, draggingItemType, initDrag]);
  const handleMouseMove = T$1((e2) => {
    const {
      initX,
      initY,
      draggingState,
      draggingItemType: currentDraggingItemType
    } = dndSliceRef.current;
    if (currentDraggingItemType !== draggingItemType) {
      setStarted(false);
      reset();
      return;
    }
    if (isPresent(initX) && isPresent(initY) && !isMouseMoved(initX, initY, e2.clientX, e2.clientY)) {
      return;
    }
    if (draggingState <= DraggingState.INIT) {
      setDragging({ x: e2.clientX, y: e2.clientY });
      onDragStart == null ? void 0 : onDragStart(e2, dndSliceRef.current);
      return;
    }
    setDragging({ x: e2.clientX, y: e2.clientY });
    onDrag == null ? void 0 : onDrag(e2, dndSliceRef.current);
  }, [draggingItemType, onDrag, onDragStart, setDragging, reset]);
  const handleMouseUp = T$1((e2) => {
    e2.stopPropagation();
    if (isStarted) {
      onMouseUp == null ? void 0 : onMouseUp(e2, dndSliceRef.current);
      setStarted(false);
      reset();
    }
  }, [isStarted, onMouseUp, reset]);
  const handleKeyDown = T$1((e2) => {
    if (isKeyPressed(e2, KEY.ESCAPE)) {
      setStarted(false);
      cancelDrag();
      onPressESCKey == null ? void 0 : onPressESCKey(e2, dndSliceRef.current);
    }
  }, [onPressESCKey, cancelDrag]);
  _$2(() => {
    handleMouseMoveRef.current = handleMouseMove;
    handleMouseUpRef.current = handleMouseUp;
    handleKeyDownRef.current = handleKeyDown;
  }, [handleKeyDown, handleMouseMove, handleMouseUp]);
  _$2(() => {
    const wrappedHandleMouseMove = (e2) => {
      var _a2;
      return (_a2 = handleMouseMoveRef.current) == null ? void 0 : _a2.call(handleMouseMoveRef, e2);
    };
    const wrappedHandleMouseUp = (e2) => {
      var _a2;
      return (_a2 = handleMouseUpRef.current) == null ? void 0 : _a2.call(handleMouseUpRef, e2);
    };
    const wrappedHandleKeyDown = (e2) => {
      var _a2;
      return (_a2 = handleKeyDownRef.current) == null ? void 0 : _a2.call(handleKeyDownRef, e2);
    };
    if (isStarted) {
      document.addEventListener("mousemove", wrappedHandleMouseMove);
      document.addEventListener("mouseup", wrappedHandleMouseUp);
      document.addEventListener("keydown", wrappedHandleKeyDown);
      return () => {
        document.removeEventListener("mousemove", wrappedHandleMouseMove);
        document.removeEventListener("mouseup", wrappedHandleMouseUp);
        document.removeEventListener("keydown", wrappedHandleKeyDown);
      };
    }
    return noop;
  }, [isStarted, reset]);
  return handleMouseDown;
}
function passConditionalProp(condition, prop) {
  return condition ? prop : void 0;
}
function getMargins(flat) {
  return {
    vertical: flat ? 5 : 2,
    horizontal: 8
  };
}
function getBorderRadius(exceedLeft, exceedRight) {
  const leftBorderRadius = exceedLeft ? 0 : "2px";
  const rightBorderRadius = exceedRight ? 0 : "2px";
  return `${leftBorderRadius} ${rightBorderRadius} ${rightBorderRadius} ${leftBorderRadius}`;
}
function getEventItemStyle({
  uiModel,
  flat,
  eventHeight,
  isDraggingTarget,
  calendarColor
}) {
  const { exceedLeft, exceedRight } = uiModel;
  const { color, backgroundColor, dragBackgroundColor, borderColor } = getEventColors(uiModel, calendarColor);
  const defaultItemStyle = {
    color,
    backgroundColor: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    borderLeft: exceedLeft ? "none" : `3px solid ${borderColor}`,
    borderRadius: getBorderRadius(exceedLeft, exceedRight),
    overflow: "hidden",
    height: eventHeight,
    lineHeight: toPx(eventHeight),
    opacity: isDraggingTarget ? 0.5 : 1
  };
  const margins = getMargins(flat);
  return flat ? __spreadValues$1({
    marginTop: margins.vertical
  }, defaultItemStyle) : __spreadValues$1({
    marginLeft: exceedLeft ? 0 : margins.horizontal,
    marginRight: exceedRight ? 0 : margins.horizontal
  }, defaultItemStyle);
}
function getContainerStyle({
  flat,
  uiModel,
  resizingWidth,
  movingLeft,
  eventHeight,
  headerHeight
}) {
  const { top, left, width, model } = uiModel;
  const margins = getMargins(flat);
  const baseStyle = flat ? {} : {
    width: resizingWidth || toPercent(width),
    left: toPercent(movingLeft != null ? movingLeft : left),
    top: (top - 1) * (eventHeight + margins.vertical) + headerHeight,
    position: "absolute"
  };
  return Object.assign(baseStyle, model.customStyle);
}
function getTestId({ model }) {
  const calendarId = model.calendarId ? `${model.calendarId}-` : "";
  const id = model.id ? `${model.id}-` : "";
  return `${calendarId}${id}${model.title}`;
}
const classNames$k = {
  eventBody: cls("weekday-event"),
  eventTitle: cls("weekday-event-title"),
  eventDot: cls("weekday-event-dot"),
  moveEvent: cls("dragging--move-event"),
  resizeEvent: cls("dragging--resize-horizontal-event")
};
function HorizontalEvent({
  flat = false,
  uiModel,
  eventHeight,
  headerHeight,
  resizingWidth = null,
  movingLeft = null
}) {
  const { currentView } = useStore(viewSelector);
  const { useDetailPopup, isReadOnly: isReadOnlyCalendar } = useStore(optionsSelector);
  const { setDraggingEventUIModel } = useDispatch("dnd");
  const { showDetailPopup } = useDispatch("popup");
  const layoutContainer = useLayoutContainer();
  const eventBus = useEventBus();
  const calendarColor = useCalendarColor(uiModel.model);
  const [isDraggingTarget, setIsDraggingTarget] = y$1(false);
  const eventContainerRef = s$2(null);
  const { isReadOnly, id, calendarId } = uiModel.model;
  const isDraggableEvent2 = !isReadOnlyCalendar && !isReadOnly && isNil(resizingWidth) && isNil(movingLeft);
  const startDragEvent = (className2) => {
    setDraggingEventUIModel(uiModel);
    layoutContainer == null ? void 0 : layoutContainer.classList.add(className2);
  };
  const endDragEvent = (className2) => {
    setIsDraggingTarget(false);
    layoutContainer == null ? void 0 : layoutContainer.classList.remove(className2);
  };
  useTransientUpdate(dndSelector, ({ draggingEventUIModel, draggingState }) => {
    if (draggingState === DraggingState.DRAGGING && (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid()) === uiModel.cid() && isNil(resizingWidth) && isNil(movingLeft)) {
      setIsDraggingTarget(true);
    } else {
      setIsDraggingTarget(false);
    }
  });
  _$2(() => {
    if (isDraggableEvent2) {
      eventBus.fire("afterRenderEvent", uiModel.model.toEventObject());
    }
  }, []);
  const onResizeStart = useDrag(DRAGGING_TYPE_CREATORS.resizeEvent("dayGrid", `${uiModel.cid()}`), {
    onDragStart: () => startDragEvent(classNames$k.resizeEvent),
    onMouseUp: () => endDragEvent(classNames$k.resizeEvent),
    onPressESCKey: () => endDragEvent(classNames$k.resizeEvent)
  });
  const onMoveStart = useDrag(DRAGGING_TYPE_CREATORS.moveEvent("dayGrid", `${uiModel.cid()}`), {
    onDragStart: () => {
      if (isDraggableEvent2) {
        startDragEvent(classNames$k.moveEvent);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      endDragEvent(classNames$k.moveEvent);
      const isClick = draggingState <= DraggingState.INIT;
      if (isClick && useDetailPopup && eventContainerRef.current) {
        showDetailPopup({
          event: uiModel.model,
          eventRect: eventContainerRef.current.getBoundingClientRect()
        }, flat);
      }
      if (isClick) {
        eventBus.fire("clickEvent", { event: uiModel.model.toEventObject(), nativeEvent: e2 });
      }
    },
    onPressESCKey: () => endDragEvent(classNames$k.moveEvent)
  });
  const handleResizeStart = (e2) => {
    e2.stopPropagation();
    if (isDraggableEvent2) {
      onResizeStart(e2);
    }
  };
  const handleMoveStart = (e2) => {
    e2.stopPropagation();
    onMoveStart(e2);
  };
  const isDotEvent = !isDraggingTarget && currentView === "month" && uiModel.model.category === "time" && isSameDate(uiModel.model.start, uiModel.model.end);
  const shouldHideResizeHandler = !isDraggableEvent2 || flat || isDraggingTarget || uiModel.exceedRight;
  const containerStyle = getContainerStyle({
    uiModel,
    eventHeight,
    headerHeight,
    flat,
    movingLeft,
    resizingWidth
  });
  const eventItemStyle = getEventItemStyle({
    uiModel,
    flat,
    eventHeight,
    isDraggingTarget,
    calendarColor
  });
  return /* @__PURE__ */ h$3("div", {
    className: cls("weekday-event-block", {
      "weekday-exceed-left": uiModel.exceedLeft,
      "weekday-exceed-right": uiModel.exceedRight
    }),
    style: containerStyle,
    "data-testid": passConditionalProp(isDraggableEvent2, getTestId(uiModel)),
    "data-calendar-id": calendarId,
    "data-event-id": id,
    ref: eventContainerRef
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$k.eventBody,
    style: __spreadProps(__spreadValues$1({}, eventItemStyle), {
      backgroundColor: isDotEvent ? null : eventItemStyle.backgroundColor,
      borderLeft: isDotEvent ? null : eventItemStyle.borderLeft
    }),
    onMouseDown: handleMoveStart
  }, isDotEvent ? /* @__PURE__ */ h$3("span", {
    className: classNames$k.eventDot,
    style: { backgroundColor: eventItemStyle.backgroundColor }
  }) : null, /* @__PURE__ */ h$3("span", {
    className: classNames$k.eventTitle
  }, /* @__PURE__ */ h$3(Template, {
    template: uiModel.model.category,
    param: uiModel.model
  })), !shouldHideResizeHandler ? /* @__PURE__ */ h$3(HorizontalEventResizeIcon, {
    onMouseDown: handleResizeStart
  }) : null));
}
function useWhen(callback, condition) {
  const callbackRef = s$2(callback);
  _$2(() => {
    callbackRef.current = callback;
  }, [callback]);
  _$2(() => {
    const invoke = () => callbackRef.current();
    if (condition) {
      invoke();
    }
  }, [condition]);
}
function useCurrentPointerPositionInGrid(gridPositionFinder) {
  const [currentGridPos, setCurrentGridPos] = y$1(null);
  useTransientUpdate(dndSelector, (dndState) => {
    if (isPresent(dndState.x) && isPresent(dndState.y)) {
      const gridPosition = gridPositionFinder({
        clientX: dndState.x,
        clientY: dndState.y
      });
      if (gridPosition) {
        setCurrentGridPos(gridPosition);
      }
    }
  });
  const clearCurrentGridPos = T$1(() => setCurrentGridPos(null), []);
  return [currentGridPos, clearCurrentGridPos];
}
const getTargetEventId = (itemType, area, behavior) => {
  function isEventDraggingType(_itemType) {
    return new RegExp(`^event/${area}/${behavior}/\\d+$`).test(_itemType);
  }
  if (isNil(itemType)) {
    return null;
  }
  return isEventDraggingType(itemType) ? last(itemType.split("/")) : null;
};
function useDraggingEvent(area, behavior) {
  const [isDraggingEnd, setIsDraggingEnd] = y$1(false);
  const [isDraggingCanceled, setIsDraggingCanceled] = y$1(false);
  const [draggingEvent, setDraggingEvent] = y$1(null);
  useTransientUpdate(dndSelector, ({ draggingItemType, draggingEventUIModel, draggingState }) => {
    const targetEventId = getTargetEventId(draggingItemType, area, behavior);
    const hasMatchingTargetEvent = Number(targetEventId) === (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid());
    const isIdle = draggingState === DraggingState.IDLE;
    const isCanceled = draggingState === DraggingState.CANCELED;
    if (isNil(draggingEvent) && hasMatchingTargetEvent) {
      setDraggingEvent(draggingEventUIModel);
    }
    if (isPresent(draggingEvent) && (isIdle || isCanceled)) {
      setIsDraggingEnd(true);
      setIsDraggingCanceled(isCanceled);
    }
  });
  const clearDraggingEvent = () => {
    setDraggingEvent(null);
    setIsDraggingEnd(false);
    setIsDraggingCanceled(false);
  };
  return {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent,
    clearDraggingEvent
  };
}
function useAlldayGridRowEventMove({ rowStyleInfo, gridPositionFinder }) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: movingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "move");
  const startGridXRef = s$2(null);
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const { columnIndex } = currentGridPos != null ? currentGridPos : {};
  const targetEventStartGridX = F$2(() => isNil(movingEvent) ? null : rowStyleInfo.findIndex(({ left }) => left === movingEvent.left), [rowStyleInfo, movingEvent]);
  const currentMovingLeft = F$2(() => {
    if (isNil(columnIndex) || isNil(startGridXRef.current) || isNil(targetEventStartGridX)) {
      return null;
    }
    const newColumnIndex = targetEventStartGridX + columnIndex - startGridXRef.current;
    return newColumnIndex < 0 ? -rowStyleInfo[-newColumnIndex].left : rowStyleInfo[newColumnIndex].left;
  }, [columnIndex, rowStyleInfo, targetEventStartGridX]);
  _$2(() => {
    if (isNil(startGridXRef.current) && isPresent(columnIndex)) {
      startGridXRef.current = columnIndex;
    }
  }, [columnIndex]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(movingEvent) && isPresent(columnIndex) && isPresent(currentMovingLeft) && columnIndex !== startGridXRef.current;
    if (shouldUpdate && isPresent(startGridXRef.current)) {
      const dateOffset = columnIndex - startGridXRef.current;
      const newStartDate = new TZDate(movingEvent.model.getStarts());
      const newEndDate = new TZDate(movingEvent.model.getEnds());
      newStartDate.addDate(dateOffset);
      newEndDate.addDate(dateOffset);
      eventBus.fire("beforeUpdateEvent", {
        event: movingEvent.model.toEventObject(),
        changes: {
          start: newStartDate,
          end: newEndDate
        }
      });
    }
    clearDraggingEvent();
    clearCurrentGridPos();
    startGridXRef.current = null;
  }, isDraggingEnd);
  return F$2(() => ({
    movingEvent,
    movingLeft: currentMovingLeft
  }), [currentMovingLeft, movingEvent]);
}
function MovingEventShadow$2({
  rowStyleInfo,
  gridPositionFinder
}) {
  const { movingEvent, movingLeft } = useAlldayGridRowEventMove({
    rowStyleInfo,
    gridPositionFinder
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(HorizontalEvent, {
    uiModel: movingEvent,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0,
    movingLeft
  });
}
function getEventColIndex(uiModel, row) {
  const start = getGridDateIndex(uiModel.getStarts(), row);
  const end = getGridDateIndex(uiModel.getEnds(), row);
  return { start, end };
}
function useAlldayGridRowEventResize({
  weekDates,
  gridColWidthMap,
  gridPositionFinder
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const { columnIndex } = currentGridPos != null ? currentGridPos : {};
  const targetEventGridIndices = F$2(() => {
    if (resizingEvent) {
      return getEventColIndex(resizingEvent, weekDates);
    }
    return { start: -1, end: -1 };
  }, [weekDates, resizingEvent]);
  const resizingWidth = F$2(() => {
    if (targetEventGridIndices.start > -1 && isPresent(columnIndex)) {
      return gridColWidthMap[targetEventGridIndices.start][columnIndex];
    }
    return null;
  }, [columnIndex, gridColWidthMap, targetEventGridIndices.start]);
  useWhen(() => {
    const shouldUpdateEvent = !isDraggingCanceled && isPresent(resizingEvent) && isPresent(columnIndex) && targetEventGridIndices.start <= columnIndex && targetEventGridIndices.end !== columnIndex;
    if (shouldUpdateEvent) {
      const targetDate = weekDates[columnIndex];
      eventBus.fire("beforeUpdateEvent", {
        event: resizingEvent.model.toEventObject(),
        changes: { end: targetDate }
      });
    }
    clearCurrentGridPos();
    clearDraggingEvent();
  }, isDraggingEnd);
  return F$2(() => ({
    resizingEvent,
    resizingWidth
  }), [resizingWidth, resizingEvent]);
}
function ResizingEventShadow({ weekDates, gridColWidthMap, gridPositionFinder }) {
  const { resizingEvent, resizingWidth } = useAlldayGridRowEventResize({
    weekDates,
    gridColWidthMap,
    gridPositionFinder
  });
  if (isNil(resizingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(HorizontalEvent, {
    uiModel: resizingEvent,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0,
    resizingWidth
  });
}
function useDOMNode() {
  const [node, setNode] = y$1(null);
  const setNodeRef = T$1((ref2) => {
    if (ref2) {
      setNode(ref2);
    }
  }, []);
  return [node, setNodeRef];
}
function useGridRowHeightController(maxTop, category) {
  const [clickedIndex, setClickedIndex] = y$1(0);
  const [isClickedCount, setClickedCount] = y$1(false);
  const { updateDayGridRowHeight } = useDispatch("weekViewLayout");
  const onClickExceedCount = T$1((index) => {
    setClickedCount(true);
    setClickedIndex(index);
    updateDayGridRowHeight({
      rowName: category,
      height: (maxTop + 1) * EVENT_HEIGHT
    });
  }, [category, maxTop, updateDayGridRowHeight]);
  const onClickCollapseButton = T$1(() => {
    setClickedCount(false);
    updateDayGridRowHeight({
      rowName: category,
      height: DEFAULT_PANEL_HEIGHT
    });
  }, [category, updateDayGridRowHeight]);
  return {
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  };
}
function requestTimeout(fn2, delay, registerCancel) {
  let start;
  const loop = (timestamp) => {
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (elapsed >= delay) {
      fn2();
      registerCancel(noop);
      return;
    }
    const raf2 = requestAnimationFrame(loop);
    registerCancel(() => cancelAnimationFrame(raf2));
  };
  const raf = requestAnimationFrame(loop);
  registerCancel(() => cancelAnimationFrame(raf));
}
function useClickPrevention({
  onClick,
  onDblClick,
  delay = 300
}) {
  const cancelCallback = s$2(noop);
  const registerCancel = (fn2) => {
    cancelCallback.current = fn2;
  };
  const cancelScheduledWork = () => {
    cancelCallback.current();
  };
  _$2(() => cancelScheduledWork, []);
  const handleClick = (e2) => {
    cancelScheduledWork();
    requestTimeout(onClick.bind(null, e2), delay, registerCancel);
  };
  const handleDblClick = (e2) => {
    cancelScheduledWork();
    onDblClick(e2);
  };
  return [handleClick, handleDblClick];
}
const GRID_SELECTION_TYPE_MAP = {
  dayGridMonth: "month",
  dayGridWeek: "allday",
  timeGrid: "time"
};
function sortDates(a2, b2) {
  const isIncreased = a2 < b2;
  return isIncreased ? [a2, b2] : [b2, a2];
}
function useGridSelection({
  type,
  selectionSorter,
  dateGetter,
  dateCollection,
  gridPositionFinder
}) {
  const { useFormPopup, gridSelection: gridSelectionOptions } = useStore(optionsSelector);
  const { enableDblClick, enableClick } = gridSelectionOptions;
  const { setGridSelection, addGridSelection, clearAll } = useDispatch("gridSelection");
  const { hideAllPopup, showFormPopup } = useDispatch("popup");
  const eventBus = useEventBus();
  const layoutContainer = useLayoutContainer();
  const [initMousePosition, setInitMousePosition] = y$1(null);
  const [initGridPosition, setInitGridPosition] = y$1(null);
  const isSelectingGridRef = s$2(false);
  const gridSelectionRef = s$2(null);
  useTransientUpdate(T$1((state) => state.gridSelection[type], [type]), (gridSelection) => {
    gridSelectionRef.current = gridSelection;
  });
  useTransientUpdate(dndSelector, ({ draggingState, draggingItemType }) => {
    isSelectingGridRef.current = draggingItemType === currentGridSelectionType && draggingState >= DraggingState.INIT;
  });
  const currentGridSelectionType = DRAGGING_TYPE_CREATORS.gridSelection(type);
  const setGridSelectionByPosition = (e2) => {
    const gridPosition = gridPositionFinder(e2);
    if (isPresent(initGridPosition) && isPresent(gridPosition)) {
      setGridSelection(type, selectionSorter(initGridPosition, gridPosition));
    }
  };
  const [handleClickWithDebounce, handleDblClickPreventingClick] = useClickPrevention({
    onClick: (e2) => {
      if (enableClick) {
        onMouseUp(e2, true);
      }
    },
    onDblClick: (e2) => {
      if (enableDblClick) {
        onMouseUp(e2, true);
      }
    },
    delay: 250
  });
  const onMouseUpWithClick = (e2) => {
    const isClick = e2.detail <= 1;
    if (!enableClick && (!enableDblClick || isClick)) {
      return;
    }
    if (enableClick) {
      if (isClick) {
        handleClickWithDebounce(e2);
      } else {
        handleDblClickPreventingClick(e2);
      }
      return;
    }
    onMouseUp(e2, true);
  };
  const onMouseUp = (e2, isClickEvent) => {
    var _a2;
    if (isClickEvent) {
      setGridSelectionByPosition(e2);
    }
    if (isPresent(gridSelectionRef.current)) {
      const [startDate, endDate] = sortDates(...dateGetter(dateCollection, gridSelectionRef.current));
      if (useFormPopup && isPresent(initMousePosition)) {
        const popupArrowPointPosition = {
          top: (e2.clientY + initMousePosition.y) / 2,
          left: (e2.clientX + initMousePosition.x) / 2
        };
        showFormPopup({
          isCreationPopup: true,
          title: "",
          location: "",
          start: startDate,
          end: endDate,
          isAllday: type !== "timeGrid",
          isPrivate: false,
          popupArrowPointPosition,
          close: clearAll
        });
      }
      const gridSelectionSelector = `.${cls(GRID_SELECTION_TYPE_MAP[type])}.${cls("grid-selection")}`;
      const gridSelectionElements = Array.from((_a2 = layoutContainer == null ? void 0 : layoutContainer.querySelectorAll(gridSelectionSelector)) != null ? _a2 : []);
      eventBus.fire("selectDateTime", {
        start: startDate.toDate(),
        end: endDate.toDate(),
        isAllday: type !== "timeGrid",
        nativeEvent: e2,
        gridSelectionElements
      });
    }
  };
  const clearGridSelection = T$1(() => {
    setInitMousePosition(null);
    setInitGridPosition(null);
    setGridSelection(type, null);
  }, [setGridSelection, type]);
  const onMouseDown = useDrag(currentGridSelectionType, {
    onInit: (e2) => {
      if (useFormPopup) {
        setInitMousePosition({
          x: e2.clientX,
          y: e2.clientY
        });
        hideAllPopup();
      }
      const gridPosition = gridPositionFinder(e2);
      if (isPresent(gridPosition)) {
        setInitGridPosition(gridPosition);
      }
      if (!useFormPopup) {
        addGridSelection(type, gridSelectionRef.current);
      }
    },
    onDragStart: (e2) => {
      setGridSelectionByPosition(e2);
    },
    onDrag: (e2) => {
      if (isSelectingGridRef.current) {
        setGridSelectionByPosition(e2);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      e2.stopPropagation();
      const isClickEvent = draggingState <= DraggingState.INIT;
      if (isClickEvent) {
        onMouseUpWithClick(e2);
      } else {
        onMouseUp(e2, isClickEvent);
      }
    },
    onPressESCKey: clearGridSelection
  });
  _$2(() => clearGridSelection, [clearGridSelection]);
  return onMouseDown;
}
const rowTitleTemplate = `alldayTitle`;
function AlldayGridRow({
  events,
  weekDates,
  height = DEFAULT_PANEL_HEIGHT,
  options = {},
  rowStyleInfo,
  gridColWidthMap
}) {
  const { isReadOnly } = useStore(optionsSelector);
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const [panelContainer, setPanelContainerRef] = useDOMNode();
  const { narrowWeekend = false, startDayOfWeek = Day$2.SUN } = options;
  const maxTop = F$2(() => Math.max(0, ...events.map(({ top }) => top)), [events]);
  const gridPositionFinder = F$2(() => createGridPositionFinder({
    container: panelContainer,
    rowsCount: 1,
    columnsCount: weekDates.length,
    narrowWeekend,
    startDayOfWeek
  }), [panelContainer, weekDates.length, narrowWeekend, startDayOfWeek]);
  const { clickedIndex, isClickedCount, onClickExceedCount, onClickCollapseButton } = useGridRowHeightController(maxTop, "allday");
  const horizontalEvents = F$2(() => events.filter(isWithinHeight(height, EVENT_HEIGHT + WEEK_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `allday-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0
  })), [events, height]);
  const startGridSelection = useGridSelection({
    type: "dayGridWeek",
    gridPositionFinder,
    dateCollection: weekDates,
    selectionSorter: alldayGridRowSelectionHelper.sortSelection,
    dateGetter: alldayGridRowSelectionHelper.getDateFromCollection
  });
  const onMouseDown = (e2) => {
    const target = e2.target;
    if (isReadOnly || !target.classList.contains(cls("panel-grid"))) {
      return;
    }
    startGridSelection(e2);
  };
  return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("div", {
    className: cls("panel-title"),
    style: dayGridLeftTheme
  }, /* @__PURE__ */ h$3(Template, {
    template: rowTitleTemplate,
    param: "alldayTitle"
  })), /* @__PURE__ */ h$3("div", {
    className: cls("allday-panel"),
    ref: setPanelContainerRef,
    onMouseDown
  }, /* @__PURE__ */ h$3("div", {
    className: cls("panel-grid-wrapper")
  }, /* @__PURE__ */ h$3(GridCells, {
    uiModels: events,
    weekDates,
    narrowWeekend,
    height,
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  })), /* @__PURE__ */ h$3("div", {
    className: cls(`panel-allday-events`)
  }, horizontalEvents), /* @__PURE__ */ h$3(ResizingEventShadow, {
    weekDates,
    gridPositionFinder,
    gridColWidthMap
  }), /* @__PURE__ */ h$3(MovingEventShadow$2, {
    rowStyleInfo,
    gridPositionFinder
  }), /* @__PURE__ */ h$3(AlldayGridSelection, {
    weekDates,
    narrowWeekend
  })));
}
function OtherGridRow({
  events,
  weekDates,
  category,
  height = DEFAULT_PANEL_HEIGHT,
  options = {}
}) {
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const maxTop = F$2(() => Math.max(0, ...events.map(({ top }) => top)), [events]);
  const { narrowWeekend = false } = options;
  const rowTitleTemplate2 = `${category}Title`;
  const { clickedIndex, isClickedCount, onClickExceedCount, onClickCollapseButton } = useGridRowHeightController(maxTop, category);
  const horizontalEvents = F$2(() => events.filter(isWithinHeight(height, EVENT_HEIGHT + WEEK_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `${category}-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0
  })), [category, events, height]);
  return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("div", {
    className: cls("panel-title"),
    style: dayGridLeftTheme
  }, /* @__PURE__ */ h$3(Template, {
    template: rowTitleTemplate2,
    param: category
  })), /* @__PURE__ */ h$3("div", {
    className: cls("allday-panel")
  }, /* @__PURE__ */ h$3("div", {
    className: cls("panel-grid-wrapper")
  }, /* @__PURE__ */ h$3(GridCells, {
    uiModels: events,
    weekDates,
    narrowWeekend,
    height,
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  })), /* @__PURE__ */ h$3("div", {
    className: cls(`panel-${category}-events`)
  }, horizontalEvents)));
}
const classNames$j = {
  detailItem: cls("detail-item"),
  detailItemIndent: cls("detail-item", "detail-item-indent"),
  detailItemSeparate: cls("detail-item", "detail-item-separate"),
  sectionDetail: cls("popup-section", "section-detail"),
  content: cls("content"),
  locationIcon: cls("icon", "ic-location-b"),
  repeatIcon: cls("icon", "ic-repeat-b"),
  userIcon: cls("icon", "ic-user-b"),
  stateIcon: cls("icon", "ic-state-b"),
  calendarDotIcon: cls("icon", "calendar-dot")
};
function EventDetailSectionDetail({ event }) {
  var _a2, _b;
  const { location: location2, recurrenceRule, attendees, state, calendarId, body } = event;
  const calendar = useCalendarById(calendarId);
  return /* @__PURE__ */ h$3("div", {
    className: classNames$j.sectionDetail
  }, location2 && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.locationIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailLocation",
    param: event,
    as: "span"
  }))), recurrenceRule && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.repeatIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailRecurrenceRule",
    param: event,
    as: "span"
  }))), attendees && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItemIndent
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.userIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailAttendees",
    param: event,
    as: "span"
  }))), state && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.stateIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailState",
    param: event,
    as: "span"
  }))), calendar && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.calendarDotIcon,
    style: {
      backgroundColor: (_a2 = calendar == null ? void 0 : calendar.backgroundColor) != null ? _a2 : ""
    }
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, (_b = calendar == null ? void 0 : calendar.name) != null ? _b : "")), body && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItemSeparate
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailBody",
    param: event,
    as: "span"
  }))));
}
const classNames$i = {
  sectionHeader: cls("popup-section", "section-header"),
  content: cls("content"),
  eventTitle: cls("event-title")
};
function EventDetailSectionHeader({ event }) {
  return /* @__PURE__ */ h$3("div", {
    className: classNames$i.sectionHeader
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$i.eventTitle
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailTitle",
    param: event,
    as: "span"
  })), /* @__PURE__ */ h$3("div", {
    className: classNames$i.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailDate",
    param: event,
    as: "span"
  })));
}
const SEE_MORE_POPUP_SLOT_CLASS_NAME = cls("see-more-popup-slot");
const EVENT_FORM_POPUP_SLOT_CLASS_NAME = cls("event-form-popup-slot");
const EVENT_DETAIL_POPUP_SLOT_CLASS_NAME = cls("event-detail-popup-slot");
const HALF_OF_POPUP_ARROW_HEIGHT = 8;
const BOOLEAN_KEYS_OF_EVENT_MODEL_DATA = [
  "isPrivate",
  "isAllday",
  "isPending",
  "isFocused",
  "isVisible",
  "isReadOnly"
];
var DetailPopupArrowDirection = /* @__PURE__ */ ((DetailPopupArrowDirection2) => {
  DetailPopupArrowDirection2["right"] = "right";
  DetailPopupArrowDirection2["left"] = "left";
  return DetailPopupArrowDirection2;
})(DetailPopupArrowDirection || {});
var FormPopupArrowDirection = /* @__PURE__ */ ((FormPopupArrowDirection2) => {
  FormPopupArrowDirection2["top"] = "top";
  FormPopupArrowDirection2["bottom"] = "bottom";
  return FormPopupArrowDirection2;
})(FormPopupArrowDirection || {});
const FloatingLayerContext = B$1(null);
function FloatingLayerProvider({ children }) {
  const [containerRef, containerRefCallback] = useDOMNode();
  const [seeMorePopupSlotRef, seeMorePopupSlotRefCallback] = useDOMNode();
  const [formPopupSlotRef, formPopupSlotRefCallback] = useDOMNode();
  const [detailPopupSlotRef, detailPopupSlotRefCallback] = useDOMNode();
  const floatingLayer = {
    container: containerRef,
    seeMorePopupSlot: seeMorePopupSlotRef,
    formPopupSlot: formPopupSlotRef,
    detailPopupSlot: detailPopupSlotRef
  };
  return /* @__PURE__ */ h$3(FloatingLayerContext.Provider, {
    value: floatingLayer
  }, children, /* @__PURE__ */ h$3("div", {
    ref: containerRefCallback,
    className: cls("floating-layer")
  }, /* @__PURE__ */ h$3("div", {
    ref: seeMorePopupSlotRefCallback,
    className: SEE_MORE_POPUP_SLOT_CLASS_NAME
  }), /* @__PURE__ */ h$3("div", {
    ref: formPopupSlotRefCallback,
    className: EVENT_FORM_POPUP_SLOT_CLASS_NAME
  }), /* @__PURE__ */ h$3("div", {
    ref: detailPopupSlotRefCallback,
    className: EVENT_DETAIL_POPUP_SLOT_CLASS_NAME
  })));
}
const useFloatingLayer = (floatingLayerType) => {
  var _a2;
  const floatingLayers = q$2(FloatingLayerContext);
  if (isUndefined_1(floatingLayers)) {
    throw new Error("FloatingLayerProvider is not found");
  }
  return (_a2 = floatingLayers == null ? void 0 : floatingLayers[floatingLayerType]) != null ? _a2 : null;
};
function isTopOutOfLayout(top, layoutRect, popupRect) {
  return top + popupRect.height > layoutRect.top + layoutRect.height;
}
function isLeftOutOfLayout(left, layoutRect, popupRect) {
  return left + popupRect.width > layoutRect.left + layoutRect.width;
}
const eventFormPopupParamSelector = (state) => {
  return state.popup[PopupType.Form];
};
const eventDetailPopupParamSelector = (state) => {
  return state.popup[PopupType.Detail];
};
const seeMorePopupParamSelector = (state) => {
  return state.popup[PopupType.SeeMore];
};
const classNames$h = {
  popupContainer: cls("popup-container"),
  detailContainer: cls("detail-container"),
  topLine: cls("popup-top-line"),
  border: cls("popup-arrow-border"),
  fill: cls("popup-arrow-fill"),
  sectionButton: cls("popup-section", "section-button"),
  content: cls("content"),
  editIcon: cls("icon", "ic-edit"),
  deleteIcon: cls("icon", "ic-delete"),
  editButton: cls("edit-button"),
  deleteButton: cls("delete-button"),
  verticalLine: cls("vertical-line")
};
function calculatePopupPosition$1(eventRect, layoutRect, popupRect) {
  let top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
  let left = eventRect.left + eventRect.width;
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  if (isLeftOutOfLayout(left, layoutRect, popupRect)) {
    left = eventRect.left - popupRect.width;
  }
  return [
    Math.max(top, layoutRect.top) + window.scrollY,
    Math.max(left, layoutRect.left) + window.scrollX
  ];
}
function calculatePopupArrowPosition(eventRect, layoutRect, popupRect) {
  const top = eventRect.top + eventRect.height / 2 + window.scrollY;
  const popupLeft = eventRect.left + eventRect.width;
  const isOutOfLayout = popupLeft + popupRect.width > layoutRect.left + layoutRect.width;
  const direction = isOutOfLayout ? DetailPopupArrowDirection.right : DetailPopupArrowDirection.left;
  return { top, direction };
}
function EventDetailPopup() {
  const { useFormPopup } = useStore(optionsSelector);
  const popupParams = useStore(eventDetailPopupParamSelector);
  const { event, eventRect } = popupParams != null ? popupParams : {};
  const { showFormPopup, hideDetailPopup } = useDispatch("popup");
  const calendarColor = useCalendarColor(event);
  const layoutContainer = useLayoutContainer();
  const detailPopupSlot = useFloatingLayer("detailPopupSlot");
  const eventBus = useEventBus();
  const popupContainerRef = s$2(null);
  const [style, setStyle] = y$1({});
  const [arrowTop, setArrowTop] = y$1(0);
  const [arrowDirection, setArrowDirection] = y$1(DetailPopupArrowDirection.left);
  const popupArrowClassName = F$2(() => {
    const right = arrowDirection === DetailPopupArrowDirection.right;
    const left = arrowDirection === DetailPopupArrowDirection.left;
    return cls("popup-arrow", { right, left });
  }, [arrowDirection]);
  h$2(() => {
    if (popupContainerRef.current && eventRect && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();
      const [top, left] = calculatePopupPosition$1(eventRect, layoutRect, popupRect);
      const { top: arrowTopPosition, direction } = calculatePopupArrowPosition(eventRect, layoutRect, popupRect);
      setStyle({ top, left });
      setArrowTop(arrowTopPosition - top - HALF_OF_POPUP_ARROW_HEIGHT);
      setArrowDirection(direction);
    }
  }, [eventRect, layoutContainer]);
  if (isNil(event) || isNil(eventRect) || isNil(detailPopupSlot)) {
    return null;
  }
  const {
    title = "",
    isAllday: isAllday2 = false,
    start = new TZDate(),
    end = new TZDate(),
    location: location2,
    state,
    isReadOnly,
    isPrivate
  } = event;
  const popupArrowPointPosition = {
    top: eventRect.top + eventRect.height / 2,
    left: eventRect.left + eventRect.width / 2
  };
  const onClickEditButton = () => {
    if (useFormPopup) {
      showFormPopup({
        isCreationPopup: false,
        event,
        title,
        location: location2,
        start,
        end,
        isAllday: isAllday2,
        isPrivate,
        eventState: state,
        popupArrowPointPosition
      });
    } else {
      eventBus.fire("beforeUpdateEvent", { event: event.toEventObject(), changes: {} });
    }
  };
  const onClickDeleteButton = () => {
    eventBus.fire("beforeDeleteEvent", event.toEventObject());
    hideDetailPopup();
  };
  return V(/* @__PURE__ */ h$3("div", {
    role: "dialog",
    className: classNames$h.popupContainer,
    ref: popupContainerRef,
    style
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$h.detailContainer
  }, /* @__PURE__ */ h$3(EventDetailSectionHeader, {
    event
  }), /* @__PURE__ */ h$3(EventDetailSectionDetail, {
    event
  }), !isReadOnly && /* @__PURE__ */ h$3("div", {
    className: classNames$h.sectionButton
  }, /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$h.editButton,
    onClick: onClickEditButton
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$h.editIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$h.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupEdit",
    as: "span"
  }))), /* @__PURE__ */ h$3("div", {
    className: classNames$h.verticalLine
  }), /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$h.deleteButton,
    onClick: onClickDeleteButton
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$h.deleteIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$h.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDelete",
    as: "span"
  }))))), /* @__PURE__ */ h$3("div", {
    className: classNames$h.topLine,
    style: { backgroundColor: calendarColor.backgroundColor }
  }), /* @__PURE__ */ h$3("div", {
    className: popupArrowClassName
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$h.border,
    style: { top: arrowTop }
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$h.fill
  })))), detailPopupSlot);
}
const classNames$g = {
  dropdownMenu: cls("dropdown-menu"),
  dropdownMenuItem: cls("dropdown-menu-item"),
  dotIcon: cls("icon", "dot"),
  content: cls("content")
};
function DropdownMenuItem({ index, name, backgroundColor, onClick }) {
  return /* @__PURE__ */ h$3("li", {
    className: classNames$g.dropdownMenuItem,
    onClick: (e2) => onClick(e2, index)
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$g.dotIcon,
    style: { backgroundColor }
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$g.content
  }, name));
}
function CalendarDropdownMenu({ calendars, setOpened, onChangeIndex }) {
  const handleDropdownMenuItemClick = (e2, index) => {
    e2.stopPropagation();
    setOpened(false);
    onChangeIndex(index);
  };
  return /* @__PURE__ */ h$3("ul", {
    className: classNames$g.dropdownMenu
  }, calendars.map(({ name, backgroundColor = "000" }, index) => /* @__PURE__ */ h$3(DropdownMenuItem, {
    key: `dropdown-${name}-${index}`,
    index,
    name,
    backgroundColor,
    onClick: handleDropdownMenuItemClick
  })));
}
function PopupSection({
  children,
  classNames: classNames2 = [],
  onClick = noop
}) {
  return /* @__PURE__ */ h$3("div", {
    className: cls("popup-section", ...classNames2),
    onClick
  }, children);
}
function useDropdownState() {
  const [isOpened, setOpened] = y$1(false);
  const toggleDropdown = () => setOpened((prev) => !prev);
  return { isOpened, setOpened, toggleDropdown };
}
var FormStateActionType = /* @__PURE__ */ ((FormStateActionType2) => {
  FormStateActionType2["init"] = "init";
  FormStateActionType2["setCalendarId"] = "setCalendarId";
  FormStateActionType2["setTitle"] = "setTitle";
  FormStateActionType2["setLocation"] = "setLocation";
  FormStateActionType2["setPrivate"] = "setPrivate";
  FormStateActionType2["setAllday"] = "setAllday";
  FormStateActionType2["setState"] = "setState";
  FormStateActionType2["reset"] = "reset";
  return FormStateActionType2;
})(FormStateActionType || {});
const defaultFormState = {
  title: "",
  location: "",
  isAllday: false,
  isPrivate: false,
  state: "Busy"
};
function formStateReducer(state, action) {
  switch (action.type) {
    case "init":
      return __spreadValues$1(__spreadValues$1({}, defaultFormState), action.event);
    case "setCalendarId":
      return __spreadProps(__spreadValues$1({}, state), { calendarId: action.calendarId });
    case "setTitle":
      return __spreadProps(__spreadValues$1({}, state), { title: action.title });
    case "setLocation":
      return __spreadProps(__spreadValues$1({}, state), { location: action.location });
    case "setPrivate":
      return __spreadProps(__spreadValues$1({}, state), { isPrivate: action.isPrivate });
    case "setAllday":
      return __spreadProps(__spreadValues$1({}, state), { isAllday: action.isAllday });
    case "setState":
      return __spreadProps(__spreadValues$1({}, state), { state: action.state });
    case "reset":
      return __spreadValues$1(__spreadValues$1({}, state), defaultFormState);
    default:
      return state;
  }
}
function useFormState(initCalendarId) {
  return d$2(formStateReducer, __spreadValues$1({ calendarId: initCalendarId }, defaultFormState));
}
const classNames$f = {
  popupSection: ["dropdown-section", "calendar-section"],
  popupSectionItem: cls("popup-section-item", "popup-button"),
  dotIcon: cls("icon", "dot"),
  content: cls("content", "event-calendar")
};
function CalendarSelector({ calendars, selectedCalendarId, formStateDispatch }) {
  const { isOpened, setOpened, toggleDropdown } = useDropdownState();
  const selectedCalendar = calendars.find((calendar) => calendar.id === selectedCalendarId);
  const { backgroundColor = "", name = "" } = selectedCalendar != null ? selectedCalendar : {};
  const changeIndex = (index) => formStateDispatch({ type: FormStateActionType.setCalendarId, calendarId: calendars[index].id });
  return /* @__PURE__ */ h$3(PopupSection, {
    onClick: toggleDropdown,
    classNames: classNames$f.popupSection
  }, /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$f.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$f.dotIcon,
    style: { backgroundColor }
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$f.content
  }, name), /* @__PURE__ */ h$3("span", {
    className: cls("icon", "ic-dropdown-arrow", { open: isOpened })
  })), isOpened && /* @__PURE__ */ h$3(CalendarDropdownMenu, {
    calendars,
    setOpened,
    onChangeIndex: changeIndex
  }));
}
const classNames$e = {
  closeButton: cls("popup-button", "popup-close"),
  closeIcon: cls("icon", "ic-close")
};
function ClosePopupButton({ type, close }) {
  const { hideAllPopup } = useDispatch("popup");
  const onClickHandler = () => {
    hideAllPopup();
    if (isFunction$2(close)) {
      close();
    }
  };
  return /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$e.closeButton,
    onClick: onClickHandler
  }, type === "moreEvents" ? /* @__PURE__ */ h$3(Template, {
    template: "monthMoreClose"
  }) : /* @__PURE__ */ h$3("i", {
    className: classNames$e.closeIcon
  }));
}
const classNames$d = {
  confirmButton: cls("popup-button", "popup-confirm")
};
function ConfirmPopupButton({ children }) {
  return /* @__PURE__ */ h$3("button", {
    type: "submit",
    className: classNames$d.confirmButton
  }, /* @__PURE__ */ h$3("span", null, children));
}
function useStringOnlyTemplate({
  template,
  model,
  defaultValue = ""
}) {
  const templates2 = useStore(templateSelector);
  const templateFunc = templates2[template];
  if (isNil(templateFunc)) {
    return defaultValue;
  }
  let result = templateFunc(model);
  if (!isString_1(result)) {
    result = defaultValue;
  }
  return result;
}
const classNames$c = {
  datePickerContainer: cls("datepicker-container"),
  datePicker: cls("popup-section-item", "popup-date-picker"),
  allday: cls("popup-section-item", "popup-section-allday"),
  dateIcon: cls("icon", "ic-date"),
  dateDash: cls("popup-date-dash"),
  content: cls("content")
};
const DateSelector = R(function DateSelector2({ start, end, isAllday: isAllday2 = false, formStateDispatch }, ref2) {
  const { usageStatistics } = useStore(optionsSelector);
  const startPickerContainerRef = s$2(null);
  const startPickerInputRef = s$2(null);
  const endPickerContainerRef = s$2(null);
  const endPickerInputRef = s$2(null);
  const startDatePlaceholder = useStringOnlyTemplate({
    template: "startDatePlaceholder",
    defaultValue: "Start Date"
  });
  const endDatePlaceholder = useStringOnlyTemplate({
    template: "endDatePlaceholder",
    defaultValue: "End Date"
  });
  const toggleAllday = () => formStateDispatch({ type: FormStateActionType.setAllday, isAllday: !isAllday2 });
  _$2(() => {
    if (startPickerContainerRef.current && startPickerInputRef.current && endPickerContainerRef.current && endPickerInputRef.current) {
      const startDate = new TZDate(start);
      const endDate = new TZDate(end);
      if (isAllday2) {
        startDate.setHours(12, 0, 0);
        endDate.setHours(13, 0, 0);
      }
      ref2.current = DatePicker.createRangePicker({
        startpicker: {
          date: startDate.toDate(),
          input: startPickerInputRef.current,
          container: startPickerContainerRef.current
        },
        endpicker: {
          date: endDate.toDate(),
          input: endPickerInputRef.current,
          container: endPickerContainerRef.current
        },
        format: isAllday2 ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
        timePicker: isAllday2 ? false : {
          showMeridiem: false,
          usageStatistics
        },
        usageStatistics
      });
    }
  }, [start, end, isAllday2, usageStatistics, ref2]);
  return /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePicker
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$c.dateIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "start",
    className: classNames$c.content,
    placeholder: startDatePlaceholder,
    ref: startPickerInputRef
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePickerContainer,
    ref: startPickerContainerRef
  })), /* @__PURE__ */ h$3("span", {
    className: classNames$c.dateDash
  }, "-"), /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePicker
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$c.dateIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "end",
    className: classNames$c.content,
    placeholder: endDatePlaceholder,
    ref: endPickerInputRef
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePickerContainer,
    ref: endPickerContainerRef
  })), /* @__PURE__ */ h$3("div", {
    className: classNames$c.allday,
    onClick: toggleAllday
  }, /* @__PURE__ */ h$3("span", {
    className: cls("icon", {
      "ic-checkbox-normal": !isAllday2,
      "ic-checkbox-checked": isAllday2
    })
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$c.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupIsAllday"
  })), /* @__PURE__ */ h$3("input", {
    name: "isAllday",
    type: "checkbox",
    className: cls("hidden-input"),
    value: isAllday2 ? "true" : "false",
    checked: isAllday2
  })));
});
const EVENT_STATES = ["Busy", "Free"];
const classNames$b = {
  popupSectionItem: cls("popup-section-item", "dropdown-menu-item"),
  dropdownMenu: cls("dropdown-menu"),
  icon: cls("icon"),
  content: cls("content")
};
function StateDropdownMenu({ setOpened, setEventState }) {
  const onClickDropdown = (e2, state) => {
    e2.stopPropagation();
    setOpened(false);
    setEventState(state);
  };
  return /* @__PURE__ */ h$3("ul", {
    className: classNames$b.dropdownMenu
  }, EVENT_STATES.map((state) => /* @__PURE__ */ h$3("li", {
    key: state,
    className: classNames$b.popupSectionItem,
    onClick: (e2) => onClickDropdown(e2, state)
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$b.icon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$b.content
  }, state === "Busy" ? /* @__PURE__ */ h$3(Template, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ h$3(Template, {
    template: "popupStateFree"
  })))));
}
const classNames$a = {
  popupSection: ["dropdown-section", "state-section"],
  popupSectionItem: cls("popup-section-item", "popup-button"),
  stateIcon: cls("icon", "ic-state"),
  arrowIcon: cls("icon", "ic-dropdown-arrow"),
  content: cls("content", "event-state")
};
function EventStateSelector({ eventState = "Busy", formStateDispatch }) {
  const { isOpened, setOpened, toggleDropdown } = useDropdownState();
  const handleChangeEventState = (state) => formStateDispatch({ type: FormStateActionType.setState, state });
  return /* @__PURE__ */ h$3(PopupSection, {
    onClick: toggleDropdown,
    classNames: classNames$a.popupSection
  }, /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$a.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$a.stateIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$a.content
  }, eventState === "Busy" ? /* @__PURE__ */ h$3(Template, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ h$3(Template, {
    template: "popupStateFree"
  })), /* @__PURE__ */ h$3("span", {
    className: classNames$a.arrowIcon
  })), isOpened && /* @__PURE__ */ h$3(StateDropdownMenu, {
    setOpened,
    setEventState: handleChangeEventState
  }));
}
const classNames$9 = {
  popupSectionItem: cls("popup-section-item", "popup-section-location"),
  locationIcon: cls("icon", "ic-location"),
  content: cls("content")
};
function LocationInputBox({ location: location2, formStateDispatch }) {
  const locationPlaceholder = useStringOnlyTemplate({
    template: "locationPlaceholder",
    defaultValue: "Location"
  });
  const handleLocationChange = (e2) => {
    formStateDispatch({ type: FormStateActionType.setLocation, location: e2.currentTarget.value });
  };
  return /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3("div", {
    className: classNames$9.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$9.locationIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "location",
    className: classNames$9.content,
    placeholder: locationPlaceholder,
    value: location2,
    onChange: handleLocationChange
  })));
}
const classNames$8 = {
  popupSectionItem: cls("popup-section-item", "popup-section-title"),
  privateButton: cls("popup-section-item", "popup-section-private", "popup-button"),
  titleIcon: cls("icon", "ic-title"),
  content: cls("content")
};
function TitleInputBox({ title, isPrivate = false, formStateDispatch }) {
  const titlePlaceholder = useStringOnlyTemplate({
    template: "titlePlaceholder",
    defaultValue: "Subject"
  });
  const togglePrivate = () => formStateDispatch({ type: FormStateActionType.setPrivate, isPrivate: !isPrivate });
  const handleInputChange = (e2) => {
    formStateDispatch({ type: FormStateActionType.setTitle, title: e2.currentTarget.value });
  };
  return /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3("div", {
    className: classNames$8.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$8.titleIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "title",
    className: classNames$8.content,
    placeholder: titlePlaceholder,
    value: title,
    onChange: handleInputChange,
    required: true
  })), /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$8.privateButton,
    onClick: togglePrivate
  }, /* @__PURE__ */ h$3("span", {
    className: cls("icon", { "ic-private": isPrivate, "ic-public": !isPrivate })
  }), /* @__PURE__ */ h$3("input", {
    name: "isPrivate",
    type: "checkbox",
    className: cls("hidden-input"),
    value: isPrivate ? "true" : "false",
    checked: isPrivate
  })));
}
const classNames$7 = {
  popupContainer: cls("popup-container"),
  formContainer: cls("form-container"),
  popupArrowBorder: cls("popup-arrow-border"),
  popupArrowFill: cls("popup-arrow-fill")
};
function calculatePopupPosition(popupArrowPointPosition, layoutRect, popupRect) {
  let top = popupArrowPointPosition.top - popupRect.height - HALF_OF_POPUP_ARROW_HEIGHT;
  let left = popupArrowPointPosition.left - popupRect.width / 2;
  let direction = FormPopupArrowDirection.bottom;
  if (top < layoutRect.top) {
    direction = FormPopupArrowDirection.top;
    top = popupArrowPointPosition.top + HALF_OF_POPUP_ARROW_HEIGHT;
  }
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  if (isLeftOutOfLayout(left, layoutRect, popupRect)) {
    left = layoutRect.left + layoutRect.width - popupRect.width;
  }
  return {
    top: top + window.scrollY,
    left: Math.max(left, layoutRect.left) + window.scrollX,
    direction
  };
}
function isBooleanKey(key) {
  return BOOLEAN_KEYS_OF_EVENT_MODEL_DATA.indexOf(key) !== -1;
}
function getChanges(event, eventObject) {
  return Object.entries(eventObject).reduce((changes, [key, value]) => {
    const eventObjectKey = key;
    if (event[eventObjectKey] instanceof TZDate) {
      if (compare(event[eventObjectKey], value) !== 0) {
        changes[eventObjectKey] = value;
      }
    } else if (event[eventObjectKey] !== value) {
      changes[eventObjectKey] = value;
    }
    return changes;
  }, {});
}
function EventFormPopup() {
  var _a2;
  const { calendars } = useStore(calendarSelector);
  const { hideAllPopup } = useDispatch("popup");
  const popupParams = useStore(eventFormPopupParamSelector);
  const { start, end, popupArrowPointPosition, close, isCreationPopup, event } = popupParams != null ? popupParams : {};
  const eventBus = useEventBus();
  const formPopupSlot = useFloatingLayer("formPopupSlot");
  const [formState, formStateDispatch] = useFormState((_a2 = calendars[0]) == null ? void 0 : _a2.id);
  const datePickerRef = s$2(null);
  const popupContainerRef = s$2(null);
  const [style, setStyle] = y$1({});
  const [arrowLeft, setArrowLeft] = y$1(0);
  const [arrowDirection, setArrowDirection] = y$1(FormPopupArrowDirection.bottom);
  const layoutContainer = useLayoutContainer();
  const popupArrowClassName = F$2(() => {
    const top = arrowDirection === FormPopupArrowDirection.top;
    const bottom = arrowDirection === FormPopupArrowDirection.bottom;
    return cls("popup-arrow", { top, bottom });
  }, [arrowDirection]);
  h$2(() => {
    if (popupContainerRef.current && popupArrowPointPosition && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();
      const { top, left, direction } = calculatePopupPosition(popupArrowPointPosition, layoutRect, popupRect);
      const arrowLeftPosition = popupArrowPointPosition.left - left;
      setStyle({ left, top });
      setArrowLeft(arrowLeftPosition);
      setArrowDirection(direction);
    }
  }, [layoutContainer, popupArrowPointPosition]);
  _$2(() => {
    if (isPresent(popupParams) && isPresent(event)) {
      formStateDispatch({
        type: FormStateActionType.init,
        event: {
          title: popupParams.title,
          location: popupParams.location,
          isAllday: popupParams.isAllday,
          isPrivate: popupParams.isPrivate,
          calendarId: event.calendarId,
          state: popupParams.eventState
        }
      });
    }
  }, [calendars, event, formStateDispatch, popupParams]);
  _$2(() => {
    if (isNil(popupParams)) {
      formStateDispatch({ type: FormStateActionType.reset });
    }
  }, [formStateDispatch, popupParams]);
  if (isNil(start) || isNil(end) || isNil(formPopupSlot)) {
    return null;
  }
  const onSubmit = (e2) => {
    var _a22, _b;
    e2.preventDefault();
    const formData = new FormData(e2.target);
    const eventData = __spreadValues$1({}, formState);
    formData.forEach((data, key) => {
      eventData[key] = isBooleanKey(key) ? data === "true" : data;
    });
    eventData.start = new TZDate((_a22 = datePickerRef.current) == null ? void 0 : _a22.getStartDate());
    eventData.end = new TZDate((_b = datePickerRef.current) == null ? void 0 : _b.getEndDate());
    if (isCreationPopup) {
      eventBus.fire("beforeCreateEvent", eventData);
    } else if (event) {
      const changes = getChanges(event, eventData);
      eventBus.fire("beforeUpdateEvent", { event: event.toEventObject(), changes });
    }
    hideAllPopup();
  };
  return V(/* @__PURE__ */ h$3("div", {
    role: "dialog",
    className: classNames$7.popupContainer,
    ref: popupContainerRef,
    style
  }, /* @__PURE__ */ h$3("form", {
    onSubmit
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$7.formContainer
  }, (calendars == null ? void 0 : calendars.length) ? /* @__PURE__ */ h$3(CalendarSelector, {
    selectedCalendarId: formState.calendarId,
    calendars,
    formStateDispatch
  }) : /* @__PURE__ */ h$3(PopupSection, null), /* @__PURE__ */ h$3(TitleInputBox, {
    title: formState.title,
    isPrivate: formState.isPrivate,
    formStateDispatch
  }), /* @__PURE__ */ h$3(LocationInputBox, {
    location: formState.location,
    formStateDispatch
  }), /* @__PURE__ */ h$3(DateSelector, {
    start,
    end,
    isAllday: formState.isAllday,
    formStateDispatch,
    ref: datePickerRef
  }), /* @__PURE__ */ h$3(EventStateSelector, {
    eventState: formState.state,
    formStateDispatch
  }), /* @__PURE__ */ h$3(ClosePopupButton, {
    type: "form",
    close
  }), /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3(ConfirmPopupButton, null, isCreationPopup ? /* @__PURE__ */ h$3(Template, {
    template: "popupSave"
  }) : /* @__PURE__ */ h$3(Template, {
    template: "popupUpdate"
  })))), /* @__PURE__ */ h$3("div", {
    className: popupArrowClassName
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$7.popupArrowBorder,
    style: { left: arrowLeft }
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$7.popupArrowFill
  }))))), formPopupSlot);
}
function shownPopupParamSelector(state) {
  return Object.values(state.popup).find((popup) => isPresent(popup));
}
function PopupOverlay() {
  const shownPopupParam = useStore(shownPopupParamSelector);
  const { hideAllPopup } = useDispatch("popup");
  const isPopupShown = isPresent(shownPopupParam);
  const onClick = (ev) => {
    var _a2;
    ev.stopPropagation();
    (_a2 = shownPopupParam == null ? void 0 : shownPopupParam.close) == null ? void 0 : _a2.call(shownPopupParam);
    hideAllPopup();
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("popup-overlay"),
    style: { display: isPopupShown ? "block" : "none" },
    onClick
  });
}
const classNames$6 = {
  container: cls("see-more-container"),
  seeMore: cls("see-more"),
  header: cls("see-more-header"),
  list: cls("month-more-list")
};
function SeeMoreEventsPopup() {
  const popupParams = useStore(seeMorePopupParamSelector);
  const { date: date2, events = [], popupPosition } = popupParams != null ? popupParams : {};
  const { moreView, moreViewTitle } = useMonthTheme();
  const seeMorePopupSlot = useFloatingLayer("seeMorePopupSlot");
  const eventBus = useEventBus();
  const moreEventsPopupContainerRef = s$2(null);
  const isHidden = isNil(date2) || isNil(popupPosition) || isNil(seeMorePopupSlot);
  _$2(() => {
    if (!isHidden && moreEventsPopupContainerRef.current) {
      eventBus.fire("clickMoreEventsBtn", {
        date: date2.toDate(),
        target: moreEventsPopupContainerRef.current
      });
    }
  }, [date2, eventBus, isHidden]);
  if (isHidden) {
    return null;
  }
  const style = {
    height: MONTH_MORE_VIEW_HEADER_HEIGHT,
    marginBottom: MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM,
    padding: MONTH_MORE_VIEW_HEADER_PADDING,
    backgroundColor: moreViewTitle.backgroundColor
  };
  const moreTitle = {
    ymd: toFormat(date2, "YYYY-MM-DD"),
    day: date2.getDay(),
    date: date2.getDate().toString().padStart(2, "0")
  };
  const moreViewListStyle = {
    height: `calc(100% - ${MONTH_MORE_VIEW_HEADER_HEIGHT + MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM + MONTH_MORE_VIEW_HEADER_PADDING_TOP}px)`
  };
  return V(/* @__PURE__ */ h$3("div", {
    role: "dialog",
    className: classNames$6.container,
    style: popupPosition,
    ref: moreEventsPopupContainerRef
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$6.seeMore,
    style: moreView
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$6.header,
    style
  }, /* @__PURE__ */ h$3(Template, {
    template: "monthMoreTitleDate",
    param: moreTitle
  }), /* @__PURE__ */ h$3(ClosePopupButton, {
    type: "moreEvents"
  })), /* @__PURE__ */ h$3("div", {
    className: classNames$6.list,
    style: moreViewListStyle
  }, events.map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `see-more-event-item-${uiModel.cid()}`,
    uiModel,
    eventHeight: MONTH_EVENT_HEIGHT,
    headerHeight: MONTH_MORE_VIEW_HEADER_HEIGHT,
    flat: true
  }))))), seeMorePopupSlot);
}
function getLayoutStylesFromInfo(width, height) {
  const styles = { height: toPercent(100) };
  if (width) {
    styles.width = width;
  }
  if (height) {
    styles.height = height;
  }
  return styles;
}
function Layout({
  children,
  width,
  height,
  className: className2 = "",
  autoAdjustPanels = false
}) {
  const { backgroundColor } = useTheme(commonThemeSelector);
  const [container, containerRefCallback] = useDOMNode();
  const { setLastPanelType, updateLayoutHeight } = useDispatch("weekViewLayout");
  const layoutClassName = F$2(() => `${cls("layout")} ${className2}`, [className2]);
  h$2(() => {
    if (container) {
      const onResizeWindow = () => updateLayoutHeight(container.offsetHeight);
      onResizeWindow();
      window.addEventListener("resize", onResizeWindow);
      return () => window.removeEventListener("resize", onResizeWindow);
    }
    return noop;
  }, [container, updateLayoutHeight]);
  h$2(() => {
    if (container && autoAdjustPanels) {
      const childArray = x$3(children);
      const lastChild = childArray[childArray.length - 1];
      if (!isString_1(lastChild) && !isNumber_1(lastChild) && !isNil(lastChild)) {
        setLastPanelType(lastChild.props.name);
      }
    }
  }, [children, setLastPanelType, autoAdjustPanels, container]);
  return /* @__PURE__ */ h$3(LayoutContainerProvider, {
    value: container
  }, /* @__PURE__ */ h$3("div", {
    ref: containerRefCallback,
    className: layoutClassName,
    style: __spreadProps(__spreadValues$1({}, getLayoutStylesFromInfo(width, height)), { backgroundColor })
  }, container ? children : null), /* @__PURE__ */ h$3(EventFormPopup, null), /* @__PURE__ */ h$3(EventDetailPopup, null), /* @__PURE__ */ h$3(SeeMoreEventsPopup, null), /* @__PURE__ */ h$3(PopupOverlay, null));
}
function getDefaultStyle(height, border) {
  return {
    height,
    width: "100%",
    cursor: "row-resize",
    borderTop: border,
    borderBottom: border
  };
}
function PanelResizer({ name, height }) {
  const border = useTheme(T$1((theme) => theme.week.panelResizer.border, []));
  const style = getDefaultStyle(height, border);
  const defaultGuideStyle = __spreadProps(__spreadValues$1({}, style), {
    display: "none",
    border: "none",
    backgroundColor: "#999"
  });
  const [guideStyle, setGuideStyle] = y$1(defaultGuideStyle);
  const startPos = s$2(null);
  const { updateDayGridRowHeightByDiff } = useDispatch("weekViewLayout");
  const onMouseDown = useDrag(DRAGGING_TYPE_CONSTANTS.panelResizer, {
    onDragStart: (e2) => {
      startPos.current = { left: e2.pageX, top: e2.pageY };
    },
    onDrag: (e2) => {
      if (startPos.current) {
        const top = e2.pageY - startPos.current.top;
        setGuideStyle((prev) => __spreadProps(__spreadValues$1({}, prev), { top, display: null }));
      }
    },
    onMouseUp: (e2) => {
      if (startPos.current) {
        const diff = e2.pageY - startPos.current.top;
        startPos.current = null;
        setGuideStyle(defaultGuideStyle);
        updateDayGridRowHeightByDiff({ rowName: name, diff });
      }
    }
  });
  return /* @__PURE__ */ h$3("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ h$3("div", {
    className: cls("panel-resizer"),
    style,
    onMouseDown
  }), /* @__PURE__ */ h$3("div", {
    className: cls("panel-resizer-guide"),
    style: guideStyle
  }));
}
function getPanelSide(side, maxExpandableSide) {
  return maxExpandableSide ? Math.min(maxExpandableSide, side) : side;
}
function getPanelStyle({
  initialHeight,
  initialWidth,
  overflowX,
  overflowY,
  maxExpandableWidth,
  maxExpandableHeight,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth
}) {
  const style = {};
  if (initialWidth) {
    style.width = getPanelSide(initialWidth, maxExpandableWidth);
    style.height = "100%";
  }
  if (initialHeight) {
    style.width = "100%";
    style.height = getPanelSide(initialHeight, maxExpandableHeight);
  }
  if (overflowX) {
    style.overflowX = "auto";
  }
  if (overflowY) {
    style.overflowY = "auto";
  }
  return __spreadProps(__spreadValues$1({}, style), { minHeight, maxHeight, minWidth, maxWidth });
}
const Panel = R(function Panel2({
  name,
  initialWidth = DEFAULT_PANEL_HEIGHT,
  initialHeight = DEFAULT_PANEL_HEIGHT,
  overflowX,
  overflowY,
  maxExpandableWidth,
  maxExpandableHeight,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  resizerWidth = DEFAULT_RESIZER_LENGTH,
  resizerHeight = DEFAULT_RESIZER_LENGTH,
  resizable,
  children
}, ref2) {
  const { updateDayGridRowHeight } = useDispatch("weekViewLayout");
  const { height: dayGridRowHeight } = useStore(T$1((state) => {
    var _a2;
    return (_a2 = state.weekViewLayout.dayGridRows[name]) != null ? _a2 : {};
  }, [name]));
  const height = dayGridRowHeight != null ? dayGridRowHeight : initialHeight;
  h$2(() => {
    updateDayGridRowHeight({ rowName: name, height: initialHeight });
  }, [initialHeight, name, updateDayGridRowHeight]);
  const styles = getPanelStyle({
    initialWidth,
    initialHeight: height,
    overflowX,
    overflowY,
    maxExpandableWidth,
    maxExpandableHeight,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth
  });
  const isResizable = F$2(() => {
    if (isNil(resizable) || isBoolean_1(resizable)) {
      return !!resizable;
    }
    return resizable.includes(name);
  }, [resizable, name]);
  return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("div", {
    className: cls("panel", name),
    style: styles,
    ref: ref2
  }, children), isResizable ? /* @__PURE__ */ h$3(PanelResizer, {
    name,
    width: resizerWidth,
    height: resizerHeight
  }) : null);
});
const className = "timegrid";
const addTimeGridPrefix = (selector) => `${className}-${selector}`;
const timeFormats = {
  second: "HH:mm:ss",
  minute: "HH:mm",
  hour: "HH:mm",
  date: "HH:mm",
  month: "MM.DD",
  year: "YYYY.MM.DD"
};
const classNames$5 = {
  time: cls("event-time"),
  content: cls("event-time-content"),
  travelTime: cls("travel-time"),
  resizeHandleX: cls("resize-handler-x"),
  moveEvent: cls("dragging--move-event"),
  resizeEvent: cls("dragging--resize-vertical-event")
};
function getMarginLeft(left) {
  const { percent, px } = extractPercentPx(`${left}`);
  return left > 0 || percent > 0 || px > 0 ? TIME_EVENT_CONTAINER_MARGIN_LEFT : 0;
}
function getContainerWidth(width, marginLeft) {
  if (isString_1(width)) {
    return width;
  }
  if (width >= 0) {
    return `calc(${toPercent(width)} - ${marginLeft}px)`;
  }
  return "";
}
function getStyles({
  uiModel,
  isDraggingTarget,
  hasNextStartTime,
  calendarColor,
  minHeight
}) {
  const {
    top,
    left,
    height,
    width,
    duplicateLeft,
    duplicateWidth,
    goingDurationHeight,
    modelDurationHeight,
    comingDurationHeight,
    croppedStart,
    croppedEnd
  } = uiModel;
  const travelBorderColor = "white";
  const borderRadius = 2;
  const defaultMarginBottom = 2;
  const marginLeft = getMarginLeft(left);
  const { color, backgroundColor, borderColor, dragBackgroundColor } = getEventColors(uiModel, calendarColor);
  const containerStyle = {
    width: getContainerWidth(duplicateWidth || width, marginLeft),
    height: `calc(${toPercent(Math.max(height, minHeight))} - ${defaultMarginBottom}px)`,
    top: toPercent(top),
    left: duplicateLeft || toPercent(left),
    borderRadius,
    borderLeft: `3px solid ${borderColor}`,
    marginLeft,
    color,
    backgroundColor: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    opacity: isDraggingTarget ? 0.5 : 1,
    zIndex: hasNextStartTime ? 1 : 0
  };
  const goingDurationStyle = {
    height: toPercent(goingDurationHeight),
    borderBottom: `1px dashed ${travelBorderColor}`
  };
  const modelDurationStyle = {
    height: toPercent(modelDurationHeight)
  };
  const comingDurationStyle = {
    height: toPercent(comingDurationHeight),
    borderTop: `1px dashed ${travelBorderColor}`
  };
  if (croppedStart) {
    containerStyle.borderTopLeftRadius = 0;
    containerStyle.borderTopRightRadius = 0;
  }
  if (croppedEnd) {
    containerStyle.borderBottomLeftRadius = 0;
    containerStyle.borderBottomRightRadius = 0;
  }
  return {
    containerStyle,
    goingDurationStyle,
    modelDurationStyle,
    comingDurationStyle
  };
}
function isDraggableEvent({
  uiModel,
  isReadOnlyCalendar,
  isDraggingTarget,
  hasNextStartTime
}) {
  const { model } = uiModel;
  return !isReadOnlyCalendar && !model.isReadOnly && !isDraggingTarget && !hasNextStartTime;
}
function TimeEvent({
  uiModel,
  nextStartTime,
  isResizingGuide = false,
  minHeight = 0
}) {
  const {
    useDetailPopup,
    isReadOnly: isReadOnlyCalendar,
    week: weekOptions
  } = useStore(optionsSelector);
  const calendarColor = useCalendarColor(uiModel.model);
  const { collapseDuplicateEvents } = weekOptions;
  const layoutContainer = useLayoutContainer();
  const { showDetailPopup } = useDispatch("popup");
  const { setDraggingEventUIModel } = useDispatch("dnd");
  const { setSelectedDuplicateEventCid } = useDispatch("weekViewLayout");
  const eventBus = useEventBus();
  const eventContainerRef = s$2(null);
  const [isDraggingTarget, setIsDraggingTarget] = y$1(false);
  const { model, goingDurationHeight, modelDurationHeight, comingDurationHeight, croppedEnd } = uiModel;
  const { id, calendarId, customStyle } = model;
  const hasNextStartTime = isPresent(nextStartTime);
  const { containerStyle, goingDurationStyle, modelDurationStyle, comingDurationStyle } = getStyles({ uiModel, isDraggingTarget, hasNextStartTime, calendarColor, minHeight });
  const isGuide = hasNextStartTime || isResizingGuide;
  useTransientUpdate(dndSelector, ({ draggingEventUIModel, draggingState }) => {
    if (draggingState === DraggingState.DRAGGING && (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid()) === uiModel.cid() && !hasNextStartTime && !isResizingGuide) {
      setIsDraggingTarget(true);
    } else {
      setIsDraggingTarget(false);
    }
  });
  _$2(() => {
    if (!isResizingGuide) {
      eventBus.fire("afterRenderEvent", uiModel.model.toEventObject());
    }
  }, []);
  const startDragEvent = (className2) => {
    setDraggingEventUIModel(uiModel);
    layoutContainer == null ? void 0 : layoutContainer.classList.add(className2);
  };
  const endDragEvent = (className2) => {
    setIsDraggingTarget(false);
    layoutContainer == null ? void 0 : layoutContainer.classList.remove(className2);
  };
  const onMoveStart = useDrag(DRAGGING_TYPE_CREATORS.moveEvent("timeGrid", `${uiModel.cid()}`), {
    onDragStart: () => {
      if (isDraggable) {
        startDragEvent(classNames$5.moveEvent);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      endDragEvent(classNames$5.moveEvent);
      const isClick = draggingState <= DraggingState.INIT;
      if (isClick && collapseDuplicateEvents) {
        const selectedDuplicateEventCid = uiModel.duplicateEvents.length > 0 ? uiModel.cid() : DEFAULT_DUPLICATE_EVENT_CID;
        setSelectedDuplicateEventCid(selectedDuplicateEventCid);
      }
      if (isClick && useDetailPopup && eventContainerRef.current) {
        showDetailPopup({
          event: uiModel.model,
          eventRect: eventContainerRef.current.getBoundingClientRect()
        }, false);
      }
      if (isClick) {
        eventBus.fire("clickEvent", { event: uiModel.model.toEventObject(), nativeEvent: e2 });
      }
    },
    onPressESCKey: () => endDragEvent(classNames$5.moveEvent)
  });
  const handleMoveStart = (e2) => {
    e2.stopPropagation();
    onMoveStart(e2);
  };
  const onResizeStart = useDrag(DRAGGING_TYPE_CREATORS.resizeEvent("timeGrid", `${uiModel.cid()}`), {
    onDragStart: () => startDragEvent(classNames$5.resizeEvent),
    onMouseUp: () => endDragEvent(classNames$5.resizeEvent),
    onPressESCKey: () => endDragEvent(classNames$5.resizeEvent)
  });
  const handleResizeStart = (e2) => {
    e2.stopPropagation();
    onResizeStart(e2);
  };
  const isDraggable = isDraggableEvent({
    uiModel,
    isReadOnlyCalendar,
    isDraggingTarget,
    hasNextStartTime
  });
  const shouldShowResizeHandle = isDraggable && !croppedEnd;
  return /* @__PURE__ */ h$3("div", {
    "data-testid": `${isGuide ? "guide-" : ""}time-event-${model.title}-${uiModel.cid()}`,
    "data-calendar-id": calendarId,
    "data-event-id": id,
    className: classNames$5.time,
    style: __spreadValues$1(__spreadValues$1({}, containerStyle), customStyle),
    onMouseDown: handleMoveStart,
    ref: eventContainerRef
  }, goingDurationHeight ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.travelTime,
    style: goingDurationStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: "goingDuration",
    param: model
  })) : null, modelDurationHeight ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.content,
    style: modelDurationStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: "time",
    param: __spreadProps(__spreadValues$1({}, model.toEventObject()), {
      start: hasNextStartTime ? nextStartTime : model.start
    })
  })) : null, comingDurationHeight ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.travelTime,
    style: comingDurationStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: "comingDuration",
    param: model
  })) : null, shouldShowResizeHandle ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.resizeHandleX,
    onMouseDown: handleResizeStart
  }) : null);
}
function GridSelection({ top, height, text }) {
  const { backgroundColor, border } = useTheme(T$1((theme) => theme.common.gridSelection, []));
  const color = useTheme(T$1((theme) => theme.week.gridSelection.color, []));
  const style = {
    top: toPercent(top),
    height: toPercent(height),
    backgroundColor,
    border
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("time", "grid-selection"),
    style,
    "data-testid": `time-grid-selection-${top}-${height}`
  }, text.length > 0 ? /* @__PURE__ */ h$3("span", {
    className: cls("grid-selection-label"),
    style: { color }
  }, text) : null);
}
function GridSelectionByColumn({ columnIndex, timeGridRows }) {
  const gridSelectionData = useStore(T$1((state) => timeGridSelectionHelper.calculateSelection(state.gridSelection.timeGrid, columnIndex, timeGridRows.length - 1), [columnIndex, timeGridRows]));
  const gridSelectionProps = F$2(() => {
    if (!gridSelectionData) {
      return null;
    }
    const { startRowIndex, endRowIndex, isStartingColumn, isSelectingMultipleColumns } = gridSelectionData;
    const { top: startRowTop, startTime: startRowStartTime } = timeGridRows[startRowIndex];
    const {
      top: endRowTop,
      height: endRowHeight,
      endTime: endRowEndTime
    } = timeGridRows[endRowIndex];
    const gridSelectionHeight = endRowTop + endRowHeight - startRowTop;
    let text = `${startRowStartTime} - ${endRowEndTime}`;
    if (isSelectingMultipleColumns) {
      text = isStartingColumn ? startRowStartTime : "";
    }
    return {
      top: startRowTop,
      height: gridSelectionHeight,
      text
    };
  }, [gridSelectionData, timeGridRows]);
  if (isNil(gridSelectionProps)) {
    return null;
  }
  return /* @__PURE__ */ h$3(GridSelection, __spreadValues$1({}, gridSelectionProps));
}
function useTimeGridEventResize({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingStartUIModel,
    clearDraggingEvent
  } = useDraggingEvent("timeGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideUIModel, setGuideUIModel] = y$1(null);
  const clearStates = T$1(() => {
    setGuideUIModel(null);
    clearDraggingEvent();
    clearCurrentGridPos();
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const baseResizingInfo = F$2(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }
    const { columns, rows } = timeGridData;
    const resizeTargetUIModelColumns = totalUIModels.map((uiModels) => uiModels.filter((uiModel) => uiModel.cid() === resizingStartUIModel.cid()));
    const findRowIndexOf = (targetDate, targetColumnIndex) => (row) => {
      const rowStartTZDate = setTimeStrToDate(columns[targetColumnIndex].date, row.startTime);
      const rowEndTZDate = setTimeStrToDate(timeGridData.columns[targetColumnIndex].date, row.endTime);
      return rowStartTZDate <= targetDate && targetDate < rowEndTZDate;
    };
    const eventStartDateColumnIndex = resizeTargetUIModelColumns.findIndex((row) => row.length > 0);
    const resizingStartEventUIModel = resizeTargetUIModelColumns[eventStartDateColumnIndex][0];
    const { goingDuration = 0 } = resizingStartEventUIModel.model;
    const renderStart = addMinutes(resizingStartEventUIModel.getStarts(), -goingDuration);
    const eventStartDateRowIndex = Math.max(rows.findIndex(findRowIndexOf(renderStart, eventStartDateColumnIndex)), 0);
    const eventEndDateColumnIndex = findLastIndex(resizeTargetUIModelColumns, (row) => row.length > 0);
    const resizingEndEventUIModel = resizeTargetUIModelColumns[eventEndDateColumnIndex][0];
    const { comingDuration = 0 } = resizingEndEventUIModel.model;
    const renderEnd = addMinutes(resizingEndEventUIModel.getStarts(), comingDuration);
    let eventEndDateRowIndex = rows.findIndex(findRowIndexOf(renderEnd, eventEndDateColumnIndex));
    eventEndDateRowIndex = eventEndDateRowIndex >= 0 ? eventEndDateRowIndex : rows.length - 1;
    return {
      eventStartDateColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelColumns
    };
  }, [resizingStartUIModel, timeGridData, totalUIModels]);
  const canCalculateGuideUIModel = isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);
  const oneRowHeight = F$2(() => baseResizingInfo ? timeGridData.rows[0].height : 0, [baseResizingInfo, timeGridData.rows]);
  _$2(() => {
    if (canCalculateGuideUIModel) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex, eventEndDateColumnIndex } = baseResizingInfo;
      if (columnIndex === eventEndDateColumnIndex && eventStartDateColumnIndex === eventEndDateColumnIndex) {
        const clonedUIModel = resizingStartUIModel.clone();
        const { height, goingDurationHeight, comingDurationHeight } = clonedUIModel;
        const newHeight = Math.max(oneRowHeight + goingDurationHeight * height / 100 + comingDurationHeight * height / 100, timeGridData.rows[currentGridPos.rowIndex].top - timeGridData.rows[eventStartDateRowIndex].top + oneRowHeight);
        const newGoingDurationHeight = goingDurationHeight * height / newHeight;
        const newComingDurationHeight = comingDurationHeight * height / newHeight;
        clonedUIModel.setUIProps({
          height: newHeight,
          goingDurationHeight: newGoingDurationHeight,
          comingDurationHeight: newComingDurationHeight,
          modelDurationHeight: 100 - (newGoingDurationHeight + newComingDurationHeight)
        });
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    oneRowHeight
  ]);
  _$2(() => {
    if (canCalculateGuideUIModel) {
      const { resizeTargetUIModelColumns, eventStartDateColumnIndex, eventEndDateColumnIndex } = baseResizingInfo;
      if ((columnIndex === eventStartDateColumnIndex || columnIndex === eventEndDateColumnIndex) && eventStartDateColumnIndex !== eventEndDateColumnIndex) {
        let clonedUIModel;
        if (columnIndex === eventStartDateColumnIndex) {
          clonedUIModel = resizeTargetUIModelColumns[columnIndex][0].clone();
        } else {
          clonedUIModel = resizingStartUIModel.clone();
          clonedUIModel.setUIProps({
            height: timeGridData.rows[currentGridPos.rowIndex].top + oneRowHeight
          });
        }
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    oneRowHeight
  ]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(baseResizingInfo) && isPresent(currentGridPos) && isPresent(resizingStartUIModel) && baseResizingInfo.eventEndDateColumnIndex === columnIndex;
    if (shouldUpdate) {
      const { comingDuration = 0 } = resizingStartUIModel.model;
      const targetEndDate = addMinutes(setTimeStrToDate(timeGridData.columns[columnIndex].date, timeGridData.rows[currentGridPos.rowIndex].endTime), -comingDuration);
      const minEndDate = addMinutes(resizingStartUIModel.getStarts(), 30);
      eventBus.fire("beforeUpdateEvent", {
        event: resizingStartUIModel.model.toEventObject(),
        changes: {
          end: max(minEndDate, targetEndDate)
        }
      });
    }
    clearStates();
  }, isDraggingEnd);
  return guideUIModel;
}
function ResizingGuideByColumn({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData
}) {
  const guideUIModel = useTimeGridEventResize({
    gridPositionFinder,
    totalUIModels,
    columnIndex,
    timeGridData
  });
  if (isNil(guideUIModel)) {
    return null;
  }
  return /* @__PURE__ */ h$3(TimeEvent, {
    uiModel: guideUIModel,
    isResizingGuide: true
  });
}
const classNames$4 = {
  column: cls("column"),
  backgrounds: cls("background-events"),
  events: cls("events")
};
function VerticalEvents({
  eventUIModels,
  minEventHeight
}) {
  const style = { marginRight: 8 };
  return /* @__PURE__ */ h$3("div", {
    className: classNames$4.events,
    style
  }, eventUIModels.map((eventUIModel) => /* @__PURE__ */ h$3(TimeEvent, {
    key: `${eventUIModel.valueOf()}-${eventUIModel.cid()}`,
    uiModel: eventUIModel,
    minHeight: minEventHeight
  })));
}
function backgroundColorSelector$1(theme) {
  return {
    defaultBackgroundColor: theme.week.dayGrid.backgroundColor,
    todayBackgroundColor: theme.week.today.backgroundColor,
    weekendBackgroundColor: theme.week.weekend.backgroundColor
  };
}
function getBackgroundColor({
  today,
  columnDate,
  defaultBackgroundColor,
  todayBackgroundColor,
  weekendBackgroundColor
}) {
  const isTodayColumn = isSameDate(today, columnDate);
  const isWeekendColumn = isWeekend(columnDate.getDay());
  if (isTodayColumn) {
    return todayBackgroundColor;
  }
  if (isWeekendColumn) {
    return weekendBackgroundColor;
  }
  return defaultBackgroundColor;
}
const Column = g$1(function Column2({
  columnDate,
  columnWidth,
  columnIndex,
  totalUIModels,
  gridPositionFinder,
  timeGridData,
  isLastColumn
}) {
  const { rows: timeGridRows } = timeGridData;
  const borderRight = useTheme(T$1((theme) => theme.week.timeGrid.borderRight, []));
  const backgroundColorTheme = useTheme(backgroundColorSelector$1);
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const backgroundColor = getBackgroundColor(__spreadValues$1({ today, columnDate }, backgroundColorTheme));
  const style = {
    width: columnWidth,
    backgroundColor,
    borderRight: isLastColumn ? "none" : borderRight
  };
  const uiModelsByColumn = totalUIModels[columnIndex];
  const minEventHeight = timeGridRows[0].height;
  return /* @__PURE__ */ h$3("div", {
    className: classNames$4.column,
    style,
    "data-testid": `timegrid-column-${columnDate.getDay()}`
  }, /* @__PURE__ */ h$3(VerticalEvents, {
    eventUIModels: uiModelsByColumn,
    minEventHeight
  }), /* @__PURE__ */ h$3(ResizingGuideByColumn, {
    gridPositionFinder,
    totalUIModels,
    columnIndex,
    timeGridData
  }), /* @__PURE__ */ h$3(GridSelectionByColumn, {
    columnIndex,
    timeGridRows
  }));
});
function gridLineBorderSelector(theme) {
  return {
    halfHourLineBorder: theme.week.timeGridHalfHourLine.borderBottom,
    hourLineBorder: theme.week.timeGridHourLine.borderBottom
  };
}
const GridLines = g$1(function GridLines2({
  timeGridRows
}) {
  const { halfHourLineBorder, hourLineBorder } = useTheme(gridLineBorderSelector);
  return /* @__PURE__ */ h$3("div", {
    className: cls("gridlines")
  }, timeGridRows.map((time, index) => {
    const isUpperLine = index % 2 === 0;
    return /* @__PURE__ */ h$3("div", {
      key: `gridline-${time.startTime}-${time.endTime}`,
      className: cls("gridline-half"),
      style: {
        top: toPercent(time.top),
        height: toPercent(time.height),
        borderBottom: isUpperLine ? halfHourLineBorder : hourLineBorder
      },
      "data-testid": `gridline-${time.startTime}-${time.endTime}`
    });
  }));
});
const THIRTY_MINUTES = 30;
function getCurrentIndexByTime(time, hourStart) {
  const hour = time.getHours() - hourStart;
  const minutes = time.getMinutes();
  return hour * 2 + Math.floor(minutes / THIRTY_MINUTES);
}
function getMovingEventPosition({
  draggingEvent,
  columnDiff,
  rowDiff,
  timeGridDataRows,
  currentDate
}) {
  const rowHeight = timeGridDataRows[0].height;
  const maxHeight = rowHeight * timeGridDataRows.length;
  const millisecondsDiff = rowDiff * MS_PER_THIRTY_MINUTES + columnDiff * MS_PER_DAY;
  const hourStart = Number(timeGridDataRows[0].startTime.split(":")[0]);
  const { goingDuration = 0, comingDuration = 0 } = draggingEvent.model;
  const goingStart = addMinutes(draggingEvent.getStarts(), -goingDuration);
  const comingEnd = addMinutes(draggingEvent.getEnds(), comingDuration);
  const nextStart = addMilliseconds(goingStart, millisecondsDiff);
  const nextEnd = addMilliseconds(comingEnd, millisecondsDiff);
  const startIndex = Math.max(getCurrentIndexByTime(nextStart, hourStart), 0);
  const endIndex = Math.min(getCurrentIndexByTime(nextEnd, hourStart), timeGridDataRows.length - 1);
  const isStartAtPrevDate = nextStart.getFullYear() < currentDate.getFullYear() || nextStart.getMonth() < currentDate.getMonth() || nextStart.getDate() < currentDate.getDate();
  const isEndAtNextDate = nextEnd.getFullYear() > currentDate.getFullYear() || nextEnd.getMonth() > currentDate.getMonth() || nextEnd.getDate() > currentDate.getDate();
  const indexDiff = endIndex - (isStartAtPrevDate ? 0 : startIndex);
  const top = isStartAtPrevDate ? 0 : timeGridDataRows[startIndex].top;
  const height = isEndAtNextDate ? maxHeight : Math.max(indexDiff, 1) * rowHeight;
  return { top, height };
}
const initXSelector = (state) => state.dnd.initX;
const initYSelector = (state) => state.dnd.initY;
function useTimeGridEventMove({
  gridPositionFinder,
  timeGridData
}) {
  const initX = useStore(initXSelector);
  const initY = useStore(initYSelector);
  const eventBus = useEventBus();
  const { isDraggingEnd, isDraggingCanceled, draggingEvent, clearDraggingEvent } = useDraggingEvent("timeGrid", "move");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const initGridPosRef = s$2(null);
  _$2(() => {
    if (isPresent(initX) && isPresent(initY)) {
      initGridPosRef.current = gridPositionFinder({
        clientX: initX,
        clientY: initY
      });
    }
  }, [gridPositionFinder, initX, initY]);
  const gridDiff = F$2(() => {
    if (isNil(initGridPosRef.current) || isNil(currentGridPos)) {
      return null;
    }
    return {
      columnDiff: currentGridPos.columnIndex - initGridPosRef.current.columnIndex,
      rowDiff: currentGridPos.rowIndex - initGridPosRef.current.rowIndex
    };
  }, [currentGridPos]);
  const startDateTime = F$2(() => {
    if (isNil(draggingEvent)) {
      return null;
    }
    return draggingEvent.getStarts();
  }, [draggingEvent]);
  const clearState = T$1(() => {
    clearCurrentGridPos();
    clearDraggingEvent();
    initGridPosRef.current = null;
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const nextStartTime = F$2(() => {
    if (isNil(gridDiff) || isNil(startDateTime)) {
      return null;
    }
    return addMilliseconds(startDateTime, gridDiff.rowDiff * MS_PER_THIRTY_MINUTES + gridDiff.columnDiff * MS_PER_DAY);
  }, [gridDiff, startDateTime]);
  const movingEvent = F$2(() => {
    if (isNil(draggingEvent) || isNil(currentGridPos) || isNil(gridDiff)) {
      return null;
    }
    const clonedEvent = draggingEvent.clone();
    const { top, height } = getMovingEventPosition({
      draggingEvent: clonedEvent,
      columnDiff: gridDiff.columnDiff,
      rowDiff: gridDiff.rowDiff,
      timeGridDataRows: timeGridData.rows,
      currentDate: timeGridData.columns[currentGridPos.columnIndex].date
    });
    clonedEvent.setUIProps({
      left: timeGridData.columns[currentGridPos.columnIndex].left,
      width: timeGridData.columns[currentGridPos.columnIndex].width,
      top,
      height
    });
    return clonedEvent;
  }, [currentGridPos, draggingEvent, gridDiff, timeGridData.columns, timeGridData.rows]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(draggingEvent) && isPresent(currentGridPos) && isPresent(gridDiff) && isPresent(nextStartTime) && (gridDiff.rowDiff !== 0 || gridDiff.columnDiff !== 0);
    if (shouldUpdate) {
      const duration = draggingEvent.duration();
      const nextEndTime = addMilliseconds(nextStartTime, duration);
      eventBus.fire("beforeUpdateEvent", {
        event: draggingEvent.model.toEventObject(),
        changes: {
          start: nextStartTime,
          end: nextEndTime
        }
      });
    }
    clearState();
  }, isDraggingEnd);
  return {
    movingEvent,
    nextStartTime
  };
}
function MovingEventShadow$1({
  gridPositionFinder,
  timeGridData
}) {
  const { movingEvent, nextStartTime } = useTimeGridEventMove({
    gridPositionFinder,
    timeGridData
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(TimeEvent, {
    uiModel: movingEvent,
    nextStartTime
  });
}
const TEST_IDS = {
  NOW_INDICATOR: "timegrid-now-indicator",
  NOW_INDICATOR_LABEL: "timegrid-now-indicator-label"
};
const classNames$3 = {
  line: cls(addTimeGridPrefix("now-indicator")),
  left: cls(addTimeGridPrefix("now-indicator-left")),
  marker: cls(addTimeGridPrefix("now-indicator-marker")),
  today: cls(addTimeGridPrefix("now-indicator-today")),
  right: cls(addTimeGridPrefix("now-indicator-right"))
};
function nowIndicatorTheme(theme) {
  return {
    pastBorder: theme.week.nowIndicatorPast.border,
    todayBorder: theme.week.nowIndicatorToday.border,
    futureBorder: theme.week.nowIndicatorFuture.border,
    bulletBackgroundColor: theme.week.nowIndicatorBullet.backgroundColor
  };
}
function NowIndicator({ top, columnWidth, columnCount, columnIndex }) {
  const { pastBorder, todayBorder, futureBorder, bulletBackgroundColor } = useTheme(nowIndicatorTheme);
  const layoutContainer = useLayoutContainer();
  const eventBus = useEventBus();
  const indicatorRef = s$2(null);
  const leftLine = {
    left: toPercent(columnWidth * columnIndex),
    width: toPercent(columnWidth * columnIndex)
  };
  const rightLine = {
    left: toPercent(columnWidth * (columnIndex + 1)),
    width: toPercent(columnWidth * (columnCount - columnIndex + 1))
  };
  _$2(() => {
    const scrollToNow = (behavior) => {
      var _a2;
      const scrollArea = (_a2 = layoutContainer == null ? void 0 : layoutContainer.querySelector(`.${cls("panel")}.${cls("time")}`)) != null ? _a2 : null;
      if (scrollArea && indicatorRef.current) {
        const { offsetHeight: scrollAreaOffsetHeight } = scrollArea;
        const { offsetTop: targetOffsetTop } = indicatorRef.current;
        const newScrollTop = targetOffsetTop - scrollAreaOffsetHeight / 2;
        if (scrollArea.scrollTo) {
          scrollArea.scrollTo({ top: newScrollTop, behavior });
        } else {
          scrollArea.scrollTop = newScrollTop;
        }
      }
    };
    eventBus.on("scrollToNow", scrollToNow);
    return () => eventBus.off("scrollToNow", scrollToNow);
  }, [eventBus, layoutContainer]);
  _$2(() => {
    eventBus.fire("scrollToNow", "smooth");
  }, [eventBus]);
  return /* @__PURE__ */ h$3("div", {
    ref: indicatorRef,
    className: classNames$3.line,
    style: { top: toPercent(top) },
    "data-testid": TEST_IDS.NOW_INDICATOR
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$3.left,
    style: { width: leftLine.width, borderTop: pastBorder }
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$3.marker,
    style: { left: leftLine.left, backgroundColor: bulletBackgroundColor }
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$3.today,
    style: {
      left: leftLine.left,
      width: toPercent(columnWidth),
      borderTop: todayBorder
    }
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$3.right,
    style: {
      left: rightLine.left,
      borderTop: futureBorder
    }
  }));
}
const classNames$2 = {
  now: addTimeGridPrefix("current-time"),
  dayDifference: addTimeGridPrefix("day-difference")
};
function NowIndicatorLabel({ unit, top, now, zonedNow }) {
  const color = useTheme(T$1((theme) => theme.week.nowIndicatorLabel.color, []));
  const dateDifference = F$2(() => {
    return getDateDifference(zonedNow, now);
  }, [zonedNow, now]);
  const model = {
    unit,
    time: zonedNow,
    format: timeFormats[unit]
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls(classNames$2.now),
    style: { top: toPercent(top), color },
    "data-testid": TEST_IDS.NOW_INDICATOR_LABEL
  }, dateDifference !== 0 && /* @__PURE__ */ h$3("span", {
    className: cls(classNames$2.dayDifference)
  }, `[${dateDifference > 0 ? "+" : "-"}${Math.abs(dateDifference)}]`), /* @__PURE__ */ h$3(Template, {
    template: "timegridNowIndicatorLabel",
    param: model,
    as: "span"
  }));
}
const monthVisibleEventCountSelector = (state) => {
  var _a2;
  return (_a2 = state.options.month.visibleEventCount) != null ? _a2 : 6;
};
const showNowIndicatorOptionSelector = (state) => state.options.week.showNowIndicator;
const showTimezoneCollapseButtonOptionSelector = (state) => {
  var _a2;
  return (_a2 = state.options.week.showTimezoneCollapseButton) != null ? _a2 : false;
};
const timezonesCollapsedOptionSelector = (state) => {
  var _a2;
  return (_a2 = state.options.week.timezonesCollapsed) != null ? _a2 : false;
};
const classNames$1 = {
  timeColumn: addTimeGridPrefix("time-column"),
  hourRows: addTimeGridPrefix("hour-rows"),
  time: addTimeGridPrefix("time"),
  timeLabel: addTimeGridPrefix("time-label"),
  first: addTimeGridPrefix("time-first"),
  last: addTimeGridPrefix("time-last"),
  hidden: addTimeGridPrefix("time-hidden")
};
function backgroundColorSelector(theme) {
  return {
    primaryTimezoneBackgroundColor: theme.week.timeGridLeft.backgroundColor,
    subTimezoneBackgroundColor: theme.week.timeGridLeftAdditionalTimezone.backgroundColor
  };
}
function timeColorSelector(theme) {
  return {
    pastTimeColor: theme.week.pastTime.color,
    futureTimeColor: theme.week.futureTime.color
  };
}
function HourRows({ rowsInfo, isPrimary, borderRight, width, nowIndicatorState }) {
  var _a2;
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const { primaryTimezoneBackgroundColor, subTimezoneBackgroundColor } = useTheme(backgroundColorSelector);
  const { pastTimeColor, futureTimeColor } = useTheme(timeColorSelector);
  const zonedNow = isPresent(nowIndicatorState) ? addMinutes(nowIndicatorState.now, (_a2 = rowsInfo[0].diffFromPrimaryTimezone) != null ? _a2 : 0) : null;
  const backgroundColor = isPrimary ? primaryTimezoneBackgroundColor : subTimezoneBackgroundColor;
  return /* @__PURE__ */ h$3("div", {
    role: "rowgroup",
    className: cls(classNames$1.hourRows),
    style: { width: toPercent(width), borderRight, backgroundColor }
  }, rowsInfo.map(({ date: date2, top, className: className2 }) => {
    const isPast = isPresent(zonedNow) && date2 < zonedNow;
    const color = isPast ? pastTimeColor : futureTimeColor;
    return /* @__PURE__ */ h$3("div", {
      key: date2.getTime(),
      className: className2,
      style: {
        top: toPercent(top),
        color
      },
      role: "row"
    }, /* @__PURE__ */ h$3(Template, {
      template: `timegridDisplay${isPrimary ? "Primary" : ""}Time`,
      param: { time: date2 },
      as: "span"
    }));
  }), showNowIndicator && isPresent(nowIndicatorState) && isPresent(zonedNow) && /* @__PURE__ */ h$3(NowIndicatorLabel, {
    unit: "hour",
    top: nowIndicatorState.top,
    now: nowIndicatorState.now,
    zonedNow
  }));
}
const TimeColumn = g$1(function TimeColumn2({ timeGridRows, nowIndicatorState }) {
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const timezones = useStore(timezonesSelector);
  const timezonesCollapsed = useStore(timezonesCollapsedOptionSelector);
  const tzConverter = useTZConverter();
  const { width, borderRight } = useTheme(weekTimeGridLeftSelector);
  const rowsByHour = F$2(() => timeGridRows.filter((_2, index) => index % 2 === 0 || index === timeGridRows.length - 1), [timeGridRows]);
  const hourRowsPropsMapper = T$1((row, index, diffFromPrimaryTimezone) => {
    const shouldHideRow = ({ top: rowTop, height: rowHeight }) => {
      if (!showNowIndicator || isNil(nowIndicatorState)) {
        return false;
      }
      const indicatorTop = nowIndicatorState.top;
      return rowTop - rowHeight <= indicatorTop && indicatorTop <= rowTop + rowHeight;
    };
    const isFirst = index === 0;
    const isLast = index === rowsByHour.length - 1;
    const className2 = cls(classNames$1.time, {
      [classNames$1.first]: isFirst,
      [classNames$1.last]: isLast,
      [classNames$1.hidden]: shouldHideRow(row)
    });
    let date2 = setTimeStrToDate(new TZDate(), isLast ? row.endTime : row.startTime);
    if (isPresent(diffFromPrimaryTimezone)) {
      date2 = addMinutes(date2, diffFromPrimaryTimezone);
    }
    return {
      date: date2,
      top: row.top,
      className: className2,
      diffFromPrimaryTimezone
    };
  }, [rowsByHour, nowIndicatorState, showNowIndicator]);
  const [primaryTimezone, ...otherTimezones] = timezones;
  const hourRowsWidth = otherTimezones.length > 0 ? 100 / (otherTimezones.length + 1) : 100;
  const primaryTimezoneHourRowsProps = rowsByHour.map((row, index) => hourRowsPropsMapper(row, index));
  const otherTimezoneHourRowsProps = F$2(() => {
    if (otherTimezones.length === 0) {
      return [];
    }
    return otherTimezones.reverse().map((timezone) => {
      const { timezoneName } = timezone;
      const primaryTimezoneOffset = tzConverter(primaryTimezone.timezoneName).getTimezoneOffset();
      const currentTimezoneOffset = tzConverter(timezoneName).getTimezoneOffset();
      const diffFromPrimaryTimezone = currentTimezoneOffset - primaryTimezoneOffset;
      return rowsByHour.map((row, index) => hourRowsPropsMapper(row, index, diffFromPrimaryTimezone));
    });
  }, [hourRowsPropsMapper, otherTimezones, primaryTimezone, rowsByHour, tzConverter]);
  return /* @__PURE__ */ h$3("div", {
    className: cls(classNames$1.timeColumn),
    style: { width },
    "data-testid": "timegrid-time-column"
  }, !timezonesCollapsed && otherTimezoneHourRowsProps.map((rowsInfo) => /* @__PURE__ */ h$3(HourRows, {
    key: rowsInfo[0].diffFromPrimaryTimezone,
    rowsInfo,
    isPrimary: false,
    borderRight,
    width: hourRowsWidth,
    nowIndicatorState
  })), /* @__PURE__ */ h$3(HourRows, {
    rowsInfo: primaryTimezoneHourRowsProps,
    isPrimary: true,
    borderRight,
    width: timezonesCollapsed ? 100 : hourRowsWidth,
    nowIndicatorState
  }));
});
function getTopPercentByTime(date2, start, end) {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const time = limit(date2.getTime(), [startTime], [endTime]) - startTime;
  const max2 = endTime - startTime;
  const topPercent = ratio(max2, 100, time);
  return limit(topPercent, [0], [100]);
}
function getTopHeightByTime(start, end, minTime, maxTime) {
  const top = getTopPercentByTime(start, minTime, maxTime);
  const bottom = getTopPercentByTime(end, minTime, maxTime);
  const height = bottom - top;
  return {
    top,
    height
  };
}
const MIN_HEIGHT_PERCENT = 1;
function isBetween(startColumnTime, endColumnTime) {
  return (uiModel) => {
    const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
    const ownStarts = addMinutes(uiModel.getStarts(), -goingDuration);
    const ownEnds = addMinutes(uiModel.getEnds(), comingDuration);
    return !(ownEnds <= startColumnTime || ownStarts >= endColumnTime);
  };
}
function setInnerHeights(uiModel, options) {
  const { renderStart, renderEnd, modelStart, modelEnd } = options;
  const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
  let modelDurationHeight = 100;
  if (goingDuration > 0) {
    const { height: goingDurationHeight } = getTopHeightByTime(renderStart, modelStart, renderStart, renderEnd);
    uiModel.goingDurationHeight = goingDurationHeight;
    modelDurationHeight -= goingDurationHeight;
  }
  if (comingDuration > 0) {
    const { height: comingDurationHeight } = getTopHeightByTime(modelEnd, renderEnd, renderStart, renderEnd);
    uiModel.comingDurationHeight = comingDurationHeight;
    modelDurationHeight -= comingDurationHeight;
  }
  uiModel.modelDurationHeight = modelDurationHeight;
}
function setCroppedEdges(uiModel, options) {
  const { goingStart, comingEnd, startColumnTime, endColumnTime } = options;
  if (goingStart < startColumnTime) {
    uiModel.croppedStart = true;
  }
  if (comingEnd > endColumnTime) {
    uiModel.croppedEnd = true;
  }
}
function getDuplicateLeft(uiModel, baseLeft) {
  const { duplicateEvents, duplicateEventIndex } = uiModel;
  const prevEvent = duplicateEvents[duplicateEventIndex - 1];
  let left = baseLeft;
  if (prevEvent) {
    const { percent: leftPercent, px: leftPx } = extractPercentPx(`${prevEvent.duplicateLeft}`);
    const { percent: widthPercent, px: widthPx } = extractPercentPx(`${prevEvent.duplicateWidth}`);
    const percent = leftPercent + widthPercent;
    const px = leftPx + widthPx + TIME_EVENT_CONTAINER_MARGIN_LEFT;
    if (percent !== 0) {
      left = `calc(${toPercent(percent)} ${px > 0 ? "+" : "-"} ${toPx(Math.abs(px))})`;
    } else {
      left = toPx(px);
    }
  } else {
    left = toPercent(left);
  }
  return left;
}
function getDuplicateWidth(uiModel, baseWidth) {
  const { collapse } = uiModel;
  return collapse ? `${COLLAPSED_DUPLICATE_EVENT_WIDTH_PX}px` : `calc(${toPercent(baseWidth)} - ${toPx((COLLAPSED_DUPLICATE_EVENT_WIDTH_PX + TIME_EVENT_CONTAINER_MARGIN_LEFT) * (uiModel.duplicateEvents.length - 1) + TIME_EVENT_CONTAINER_MARGIN_LEFT)})`;
}
function setDimension(uiModel, options) {
  const { startColumnTime, endColumnTime, baseWidth, columnIndex, renderStart, renderEnd } = options;
  const { duplicateEvents } = uiModel;
  const { top, height } = getTopHeightByTime(renderStart, renderEnd, startColumnTime, endColumnTime);
  const dimension = {
    top,
    left: baseWidth * columnIndex,
    width: baseWidth,
    height: Math.max(MIN_HEIGHT_PERCENT, height),
    duplicateLeft: "",
    duplicateWidth: ""
  };
  if (duplicateEvents.length > 0) {
    dimension.duplicateLeft = getDuplicateLeft(uiModel, dimension.left);
    dimension.duplicateWidth = getDuplicateWidth(uiModel, dimension.width);
  }
  uiModel.setUIProps(dimension);
}
function getRenderInfoOptions(uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime) {
  const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
  const modelStart = uiModel.getStarts();
  const modelEnd = uiModel.getEnds();
  const goingStart = addMinutes(modelStart, -goingDuration);
  const comingEnd = addMinutes(modelEnd, comingDuration);
  const renderStart = max(goingStart, startColumnTime);
  const renderEnd = min(comingEnd, endColumnTime);
  return {
    baseWidth,
    columnIndex,
    modelStart,
    modelEnd,
    renderStart,
    renderEnd,
    goingStart,
    comingEnd,
    startColumnTime,
    endColumnTime,
    duplicateEvents: uiModel.duplicateEvents
  };
}
function setRenderInfo({
  uiModel,
  columnIndex,
  baseWidth,
  startColumnTime,
  endColumnTime,
  isDuplicateEvent = false
}) {
  if (!isDuplicateEvent && uiModel.duplicateEvents.length > 0) {
    uiModel.duplicateEvents.forEach((event) => {
      setRenderInfo({
        uiModel: event,
        columnIndex,
        baseWidth,
        startColumnTime,
        endColumnTime,
        isDuplicateEvent: true
      });
    });
    return;
  }
  const renderInfoOptions = getRenderInfoOptions(uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime);
  setDimension(uiModel, renderInfoOptions);
  setInnerHeights(uiModel, renderInfoOptions);
  setCroppedEdges(uiModel, renderInfoOptions);
}
function setDuplicateEvents(uiModels, options, selectedDuplicateEventCid) {
  const { getDuplicateEvents, getMainEvent } = options;
  const eventObjects = uiModels.map((uiModel) => uiModel.model.toEventObject());
  uiModels.forEach((targetUIModel) => {
    if (targetUIModel.collapse || targetUIModel.duplicateEvents.length > 0) {
      return;
    }
    const duplicateEvents = getDuplicateEvents(targetUIModel.model.toEventObject(), eventObjects);
    if (duplicateEvents.length <= 1) {
      return;
    }
    const mainEvent = getMainEvent(duplicateEvents);
    const duplicateEventUIModels = duplicateEvents.map((event) => uiModels.find((uiModel) => uiModel.cid() === event.__cid));
    const isSelectedGroup = !!(selectedDuplicateEventCid > DEFAULT_DUPLICATE_EVENT_CID && duplicateEvents.find((event) => event.__cid === selectedDuplicateEventCid));
    const duplicateStarts = duplicateEvents.reduce((acc, { start, goingDuration }) => {
      const renderStart = addMinutes(start, -goingDuration);
      return min(acc, renderStart);
    }, duplicateEvents[0].start);
    const duplicateEnds = duplicateEvents.reduce((acc, { end, comingDuration }) => {
      const renderEnd = addMinutes(end, comingDuration);
      return max(acc, renderEnd);
    }, duplicateEvents[0].end);
    duplicateEventUIModels.forEach((event, index) => {
      const isMain = event.cid() === mainEvent.__cid;
      const collapse = !(isSelectedGroup && event.cid() === selectedDuplicateEventCid || !isSelectedGroup && isMain);
      event.setUIProps({
        duplicateEvents: duplicateEventUIModels,
        duplicateEventIndex: index,
        collapse,
        isMain,
        duplicateStarts,
        duplicateEnds
      });
    });
  });
  return uiModels;
}
function setRenderInfoOfUIModels(events, startColumnTime, endColumnTime, selectedDuplicateEventCid, collapseDuplicateEventsOptions) {
  const uiModels = events.filter(isTimeEvent).filter(isBetween(startColumnTime, endColumnTime)).sort(array.compare.event.asc);
  if (collapseDuplicateEventsOptions) {
    setDuplicateEvents(uiModels, collapseDuplicateEventsOptions, selectedDuplicateEventCid);
  }
  const expandedEvents = uiModels.filter((uiModel) => !uiModel.collapse);
  const uiModelColl = createEventCollection(...expandedEvents);
  const usingTravelTime = true;
  const collisionGroups = getCollisionGroup(expandedEvents, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
  matrices.forEach((matrix) => {
    const maxRowLength = Math.max(...matrix.map((row) => row.length));
    const baseWidth = Math.round(100 / maxRowLength);
    matrix.forEach((row) => {
      row.forEach((uiModel, columnIndex) => {
        setRenderInfo({ uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime });
      });
    });
  });
  return uiModels;
}
function useInterval(callback, delay) {
  const savedCallback = s$2(callback);
  _$2(() => {
    savedCallback.current = callback;
  }, [callback]);
  _$2(() => {
    const tick = () => savedCallback.current();
    const intervalDelay = delay != null ? delay : -1;
    if (intervalDelay > 0) {
      const id = setInterval(tick, intervalDelay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
function useIsMounted() {
  const isMountedRef = s$2(true);
  _$2(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return T$1(() => isMountedRef.current, []);
}
const classNames = {
  timegrid: cls(className),
  scrollArea: cls(addTimeGridPrefix("scroll-area"))
};
function TimeGrid({ timeGridData, events }) {
  const {
    isReadOnly,
    week: { narrowWeekend, startDayOfWeek, collapseDuplicateEvents }
  } = useStore(optionsSelector);
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const selectedDuplicateEventCid = useStore((state) => state.weekViewLayout.selectedDuplicateEventCid);
  const [, getNow] = usePrimaryTimezone();
  const isMounted = useIsMounted();
  const { width: timeGridLeftWidth } = useTheme(weekTimeGridLeftSelector);
  const [nowIndicatorState, setNowIndicatorState] = y$1(null);
  const { columns, rows } = timeGridData;
  const lastColumnIndex = columns.length - 1;
  const totalUIModels = F$2(() => columns.map(({ date: date2 }) => events.filter(isBetween(toStartOfDay(date2), toEndOfDay(date2))).map((uiModel) => uiModel.clone())).map((uiModelsByColumn, columnIndex) => setRenderInfoOfUIModels(uiModelsByColumn, setTimeStrToDate(columns[columnIndex].date, first(rows).startTime), setTimeStrToDate(columns[columnIndex].date, last(rows).endTime), selectedDuplicateEventCid, collapseDuplicateEvents)), [columns, rows, events, selectedDuplicateEventCid, collapseDuplicateEvents]);
  const currentDateData = F$2(() => {
    const now = getNow();
    const currentDateIndexInColumns = columns.findIndex((column) => isSameDate(column.date, now));
    if (currentDateIndexInColumns < 0) {
      return null;
    }
    const startTime = setTimeStrToDate(columns[currentDateIndexInColumns].date, timeGridData.rows[0].startTime);
    const endTime = setTimeStrToDate(columns[currentDateIndexInColumns].date, last(timeGridData.rows).endTime);
    return {
      startTime,
      endTime,
      currentDateIndex: currentDateIndexInColumns
    };
  }, [columns, getNow, timeGridData.rows]);
  const [columnsContainer, setColumnsContainer] = useDOMNode();
  const gridPositionFinder = F$2(() => createGridPositionFinder({
    rowsCount: rows.length,
    columnsCount: columns.length,
    container: columnsContainer,
    narrowWeekend,
    startDayOfWeek
  }), [columns.length, columnsContainer, narrowWeekend, rows.length, startDayOfWeek]);
  const onMouseDown = useGridSelection({
    type: "timeGrid",
    gridPositionFinder,
    selectionSorter: timeGridSelectionHelper.sortSelection,
    dateGetter: timeGridSelectionHelper.getDateFromCollection,
    dateCollection: timeGridData
  });
  const updateTimeGridIndicator = T$1(() => {
    if (isPresent(currentDateData)) {
      const { startTime, endTime } = currentDateData;
      const now = getNow();
      if (startTime <= now && now <= endTime) {
        setNowIndicatorState({
          top: getTopPercentByTime(now, startTime, endTime),
          now
        });
      }
    }
  }, [currentDateData, getNow]);
  h$2(() => {
    var _a2;
    if (isMounted()) {
      if (((_a2 = currentDateData == null ? void 0 : currentDateData.currentDateIndex) != null ? _a2 : -1) >= 0) {
        updateTimeGridIndicator();
      } else {
        setNowIndicatorState(null);
      }
    }
  }, [currentDateData, isMounted, updateTimeGridIndicator]);
  useInterval(updateTimeGridIndicator, isPresent(currentDateData) ? MS_PER_MINUTES : null);
  return /* @__PURE__ */ h$3("div", {
    className: classNames.timegrid
  }, /* @__PURE__ */ h$3("div", {
    className: classNames.scrollArea
  }, /* @__PURE__ */ h$3(TimeColumn, {
    timeGridRows: rows,
    nowIndicatorState
  }), /* @__PURE__ */ h$3("div", {
    className: cls("columns"),
    style: { left: timeGridLeftWidth },
    ref: setColumnsContainer,
    onMouseDown: passConditionalProp(!isReadOnly, onMouseDown)
  }, /* @__PURE__ */ h$3(GridLines, {
    timeGridRows: rows
  }), /* @__PURE__ */ h$3(MovingEventShadow$1, {
    gridPositionFinder,
    timeGridData
  }), columns.map((column, index) => /* @__PURE__ */ h$3(Column, {
    key: column.date.toString(),
    timeGridData,
    columnDate: column.date,
    columnWidth: toPercent(column.width),
    columnIndex: index,
    totalUIModels,
    gridPositionFinder,
    isLastColumn: index === lastColumnIndex
  })), showNowIndicator && isPresent(currentDateData) && isPresent(nowIndicatorState) ? /* @__PURE__ */ h$3(NowIndicator, {
    top: nowIndicatorState.top,
    columnWidth: columns[0].width,
    columnCount: columns.length,
    columnIndex: currentDateData.currentDateIndex
  }) : null)));
}
function TimezoneCollapseButton({ isCollapsed }) {
  const eventBus = useEventBus();
  const iconClassName = cls("icon", {
    "ic-arrow-right": isCollapsed,
    "ic-arrow-left": !isCollapsed
  });
  return /* @__PURE__ */ h$3("button", {
    className: cls(addTimeGridPrefix("timezone-collapse-button")),
    "aria-expanded": !isCollapsed,
    onClick: () => eventBus.fire("clickTimezonesCollapseBtn", isCollapsed)
  }, /* @__PURE__ */ h$3("span", {
    className: iconClassName,
    role: "img"
  }));
}
function TimezoneLabel({ label, offset, tooltip, width = 100, left }) {
  return /* @__PURE__ */ h$3("div", {
    title: tooltip,
    className: cls(addTimeGridPrefix("timezone-label")),
    style: {
      width: toPercent(width),
      height: toPercent(100),
      left: toPercent(left)
    },
    role: "gridcell"
  }, /* @__PURE__ */ h$3(Template, {
    template: "timezoneDisplayLabel",
    param: { displayLabel: label, timezoneOffset: offset },
    as: "span"
  }));
}
function useTimezoneCollapseOptions() {
  const showTimezoneCollapseButton = useStore(showTimezoneCollapseButtonOptionSelector);
  const timezonesCollapsed = useStore(timezonesCollapsedOptionSelector);
  return F$2(() => {
    return {
      showTimezoneCollapseButton,
      timezonesCollapsed
    };
  }, [showTimezoneCollapseButton, timezonesCollapsed]);
}
function TimezoneLabels({ top }) {
  const timezones = useStore(timezonesSelector);
  const { width } = useTheme(weekTimeGridLeftSelector);
  const tzConverter = useTZConverter();
  const { showTimezoneCollapseButton, timezonesCollapsed } = useTimezoneCollapseOptions();
  if (timezones.length <= 1) {
    return null;
  }
  const timezoneLabelProps = timezones.map(({ displayLabel, timezoneName, tooltip }) => {
    return !isUndefined_1(displayLabel) ? { label: displayLabel, offset: null, tooltip: tooltip != null ? tooltip : timezoneName } : {
      label: null,
      offset: tzConverter(timezoneName).getTimezoneOffset(),
      tooltip: tooltip != null ? tooltip : timezoneName
    };
  });
  const [primaryTimezone, ...restTimezones] = timezoneLabelProps;
  const subTimezones = restTimezones.reverse();
  const timezonesCount = timezonesCollapsed ? 1 : timezones.length;
  const timezoneLabelWidth = 100 / timezonesCount;
  return /* @__PURE__ */ h$3("div", {
    style: {
      top,
      width
    },
    role: "columnheader",
    className: cls("timezone-labels-slot")
  }, !timezonesCollapsed && subTimezones.map((subTimezone, index) => {
    var _a2;
    return /* @__PURE__ */ h$3(TimezoneLabel, __spreadValues$1({
      key: `subTimezone-${(_a2 = subTimezone.label) != null ? _a2 : subTimezone.offset}`,
      width: timezoneLabelWidth,
      left: timezoneLabelWidth * index
    }, subTimezone));
  }), showTimezoneCollapseButton && /* @__PURE__ */ h$3(TimezoneCollapseButton, {
    isCollapsed: timezonesCollapsed
  }), /* @__PURE__ */ h$3(TimezoneLabel, __spreadValues$1({
    width: timezoneLabelWidth,
    left: timezoneLabelWidth * subTimezones.length
  }, primaryTimezone)));
}
const VIEW_TYPE = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day"
};
const DEFAULT_TASK_PANEL = ["milestone", "task"];
const DEFAULT_EVENT_PANEL = ["allday", "time"];
function getActivePanels(taskView, eventView) {
  const activePanels = [];
  if (taskView === true) {
    activePanels.push(...DEFAULT_TASK_PANEL);
  } else if (Array.isArray(taskView)) {
    activePanels.push(...taskView);
  }
  if (eventView === true) {
    activePanels.push(...DEFAULT_EVENT_PANEL);
  } else if (Array.isArray(eventView)) {
    activePanels.push(...eventView);
  }
  return activePanels;
}
function useEventsWithTimezone(events) {
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const tzConverter = useTZConverter();
  return F$2(() => {
    if (primaryTimezoneName === "Local") {
      return events;
    }
    const isSystemUsingDST = isUsingDST(new TZDate());
    const {
      timedEvents = createEventCollection(),
      totalEvents = createEventCollection()
    } = events.groupBy((eventModel) => eventModel.category === "time" ? "timedEvents" : "totalEvents");
    timedEvents.each((eventModel) => {
      const clonedEventModel = clone$1(eventModel);
      let zonedStart = tzConverter(primaryTimezoneName, clonedEventModel.start);
      let zonedEnd = tzConverter(primaryTimezoneName, clonedEventModel.end);
      if (isSystemUsingDST) {
        if (!isUsingDST(zonedStart)) {
          zonedStart = zonedStart.addHours(1);
        }
        if (!isUsingDST(zonedEnd)) {
          zonedEnd = zonedEnd.addHours(1);
        }
      } else {
        if (isUsingDST(zonedStart)) {
          zonedStart = zonedStart.addHours(-1);
        }
        if (isUsingDST(zonedEnd)) {
          zonedEnd = zonedEnd.addHours(-1);
        }
      }
      clonedEventModel.start = zonedStart;
      clonedEventModel.end = zonedEnd;
      totalEvents.add(clonedEventModel);
    });
    return totalEvents;
  }, [events, primaryTimezoneName, tzConverter]);
}
function useCalendarData(calendar, ...filters) {
  const filteredEvents = F$2(() => calendar.events.filter(Collection.and(...filters)), [calendar.events, filters]);
  const filteredEventsWithTimezone = useEventsWithTimezone(filteredEvents);
  return F$2(() => __spreadProps(__spreadValues$1({}, calendar), {
    events: filteredEventsWithTimezone
  }), [calendar, filteredEventsWithTimezone]);
}
function isTimeGridDraggingType(draggingItemType) {
  return /^(event|gridSelection)\/timeGrid/.test(draggingItemType != null ? draggingItemType : "");
}
function useTimeGridScrollSync(scrollArea, rowCount) {
  useTransientUpdate(dndSelector, ({ y: y2, draggingItemType, draggingState }) => {
    if (isPresent(scrollArea) && isTimeGridDraggingType(draggingItemType) && draggingState === DraggingState.DRAGGING && isPresent(y2)) {
      const { offsetTop, offsetHeight, scrollHeight } = scrollArea;
      const scrollBoundary = Math.floor(scrollHeight / rowCount);
      const layoutHeight = offsetTop + offsetHeight;
      if (y2 < offsetTop + scrollBoundary) {
        const scrollDiff = y2 - (offsetTop + scrollBoundary);
        scrollArea.scrollTop = Math.max(0, scrollArea.scrollTop + scrollDiff);
      } else if (y2 > layoutHeight - scrollBoundary) {
        const scrollDiff = y2 - (layoutHeight - scrollBoundary);
        scrollArea.scrollTop = Math.min(offsetHeight, scrollArea.scrollTop + scrollDiff);
      }
    }
  });
}
function timegridHeightSelector(state) {
  var _a2, _b, _c;
  return (_c = (_b = (_a2 = state.weekViewLayout) == null ? void 0 : _a2.dayGridRows) == null ? void 0 : _b.time) == null ? void 0 : _c.height;
}
function useTimezoneLabelsTop(timePanel) {
  const timeGridPanelHeight = useStore(timegridHeightSelector);
  const [stickyTop, setStickyTop] = y$1(null);
  h$2(() => {
    if (isPresent(timeGridPanelHeight) && timePanel) {
      setStickyTop(timePanel.offsetTop);
    }
  }, [timeGridPanelHeight, timePanel]);
  return stickyTop;
}
function useDayViewState() {
  const calendar = useStore(calendarSelector);
  const options = useStore(optionsSelector);
  const { dayGridRows: gridRowLayout, lastPanelType } = useStore(weekViewLayoutSelector);
  const { renderDate } = useStore(viewSelector);
  return F$2(() => ({
    calendar,
    options,
    gridRowLayout,
    lastPanelType,
    renderDate
  }), [calendar, options, gridRowLayout, lastPanelType, renderDate]);
}
function Day$1() {
  var _a2, _b;
  const { calendar, options, gridRowLayout, lastPanelType, renderDate } = useDayViewState();
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const gridHeaderMarginLeft = useTheme(T$1((theme) => theme.week.dayGridLeft.width, []));
  const [timePanel, setTimePanelRef] = useDOMNode();
  const weekOptions = options.week;
  const { narrowWeekend, startDayOfWeek, workweek, hourStart, hourEnd, eventView, taskView } = weekOptions;
  const days = F$2(() => [renderDate], [renderDate]);
  const dayNames = getDayNames(days, (_b = (_a2 = options.week) == null ? void 0 : _a2.dayNames) != null ? _b : []);
  const { rowStyleInfo, cellWidthMap } = getRowStyleInfo(days.length, narrowWeekend, startDayOfWeek, workweek);
  const calendarData = useCalendarData(calendar, options.eventFilter);
  const dayGridEvents = F$2(() => {
    const getFilterRange = () => {
      if (primaryTimezoneName === "Local") {
        return [toStartOfDay(days[0]), toEndOfDay(days[0])];
      }
      return [toStartOfDay(addDate(days[0], -1)), toEndOfDay(addDate(days[0], 1))];
    };
    const [weekStartDate, weekEndDate] = getFilterRange();
    return getWeekViewEvents(days, calendarData, {
      narrowWeekend,
      hourStart,
      hourEnd,
      weekStartDate,
      weekEndDate
    });
  }, [calendarData, days, hourEnd, hourStart, narrowWeekend, primaryTimezoneName]);
  const timeGridData = F$2(() => createTimeGridData(days, {
    hourStart,
    hourEnd,
    narrowWeekend
  }), [days, hourEnd, hourStart, narrowWeekend]);
  const activePanels = getActivePanels(taskView, eventView);
  const gridRows = activePanels.map((key) => {
    var _a22, _b2;
    if (key === "time") {
      return null;
    }
    const rowType = key;
    return /* @__PURE__ */ h$3(Panel, {
      key: rowType,
      name: rowType,
      resizable: rowType !== lastPanelType
    }, rowType === "allday" ? /* @__PURE__ */ h$3(AlldayGridRow, {
      events: dayGridEvents[rowType],
      rowStyleInfo,
      gridColWidthMap: cellWidthMap,
      weekDates: days,
      height: (_a22 = gridRowLayout[rowType]) == null ? void 0 : _a22.height,
      options: weekOptions
    }) : /* @__PURE__ */ h$3(OtherGridRow, {
      category: rowType,
      events: dayGridEvents[rowType],
      weekDates: days,
      height: (_b2 = gridRowLayout[rowType]) == null ? void 0 : _b2.height,
      options: weekOptions,
      gridColWidthMap: cellWidthMap
    }));
  });
  useTimeGridScrollSync(timePanel, timeGridData.rows.length);
  const stickyTop = useTimezoneLabelsTop(timePanel);
  return /* @__PURE__ */ h$3(Layout, {
    className: cls("day-view"),
    autoAdjustPanels: true
  }, /* @__PURE__ */ h$3(Panel, {
    name: "day-view-day-names",
    initialHeight: WEEK_DAY_NAME_HEIGHT + WEEK_DAY_NAME_BORDER
  }, /* @__PURE__ */ h$3(GridHeader, {
    type: "week",
    dayNames,
    marginLeft: gridHeaderMarginLeft,
    rowStyleInfo
  })), gridRows, activePanels.includes("time") ? /* @__PURE__ */ h$3(Panel, {
    name: "time",
    autoSize: 1,
    ref: setTimePanelRef
  }, /* @__PURE__ */ h$3(TimeGrid, {
    events: dayGridEvents.time,
    timeGridData
  }), /* @__PURE__ */ h$3(TimezoneLabels, {
    top: stickyTop
  })) : null);
}
function AccumulatedGridSelection({ rowIndex, weekDates, narrowWeekend }) {
  const gridSelectionDataByRow = useStore(T$1((state) => state.gridSelection.accumulated.dayGridMonth.map((gridSelection) => dayGridMonthSelectionHelper.calculateSelection(gridSelection, rowIndex, weekDates.length)), [rowIndex, weekDates]));
  return /* @__PURE__ */ h$3("div", {
    className: cls("accumulated-grid-selection")
  }, gridSelectionDataByRow.map((gridSelectionData) => gridSelectionData ? /* @__PURE__ */ h$3(GridSelection$1, {
    type: "accumulated",
    gridSelectionData,
    weekDates,
    narrowWeekend
  }) : null));
}
function MoreEventsButton({ type, number, onClickButton, className: className2 }) {
  const { reset } = useDispatch("dnd");
  const handleMouseDown = (e2) => {
    e2.stopPropagation();
  };
  const handleClick = () => {
    reset();
    onClickButton();
  };
  const exceedButtonTemplate = `monthGrid${type === CellBarType.header ? "Header" : "Footer"}Exceed`;
  return /* @__PURE__ */ h$3("button", {
    type: "button",
    onMouseDown: handleMouseDown,
    onClick: handleClick,
    className: className2
  }, /* @__PURE__ */ h$3(Template, {
    template: exceedButtonTemplate,
    param: number
  }));
}
function getDateColor({
  date: date2,
  theme,
  renderDate,
  isToday
}) {
  const dayIndex = date2.getDay();
  const thisMonth = renderDate.getMonth();
  const isSameMonth2 = thisMonth === date2.getMonth();
  const {
    common: { holiday, saturday, today, dayName },
    month: { dayExceptThisMonth, holidayExceptThisMonth }
  } = theme;
  if (isToday) {
    return today.color;
  }
  if (isSunday(dayIndex)) {
    return isSameMonth2 ? holiday.color : holidayExceptThisMonth.color;
  }
  if (isSaturday(dayIndex)) {
    return isSameMonth2 ? saturday.color : dayExceptThisMonth.color;
  }
  if (!isSameMonth2) {
    return dayExceptThisMonth.color;
  }
  return dayName.color;
}
function useCellHeaderTheme() {
  const common = useCommonTheme();
  const month = useMonthTheme();
  return F$2(() => ({ common, month }), [common, month]);
}
function CellHeader({
  type = CellBarType.header,
  exceedCount = 0,
  date: date2,
  onClickExceedCount
}) {
  const { renderDate } = useStore(viewSelector);
  const [, getNow] = usePrimaryTimezone();
  const theme = useCellHeaderTheme();
  const height = theme.month.gridCell[`${type}Height`];
  const ymd = toFormat(date2, "YYYYMMDD");
  const todayYmd = toFormat(getNow(), "YYYYMMDD");
  const isToday = ymd === todayYmd;
  const templateParam = {
    date: toFormat(date2, "YYYY-MM-DD"),
    day: date2.getDay(),
    hiddenEventCount: exceedCount,
    isOtherMonth: date2.getMonth() !== renderDate.getMonth(),
    isToday: ymd === todayYmd,
    month: date2.getMonth(),
    ymd
  };
  const gridCellDateStyle = { color: getDateColor({ date: date2, theme, isToday, renderDate }) };
  const monthGridTemplate = `monthGrid${capitalize(type)}`;
  if (isNil(height)) {
    return null;
  }
  return /* @__PURE__ */ h$3("div", {
    className: cls(`grid-cell-${type}`),
    style: { height }
  }, /* @__PURE__ */ h$3("span", {
    className: cls("grid-cell-date"),
    style: gridCellDateStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: monthGridTemplate,
    param: templateParam
  })), exceedCount ? /* @__PURE__ */ h$3(MoreEventsButton, {
    type,
    number: exceedCount,
    onClickButton: onClickExceedCount,
    className: cls("grid-cell-more-events")
  }) : null);
}
function getSeeMorePopupSize({
  grid,
  offsetWidth,
  eventLength,
  layerSize
}) {
  const minHeight = getSize(grid).height + MONTH_MORE_VIEW_PADDING * 2;
  let width = offsetWidth + MONTH_MORE_VIEW_PADDING * 2;
  const { width: moreViewWidth, height: moreViewHeight } = layerSize;
  const MAX_DISPLAY_EVENT_COUNT = 10;
  width = Math.max(width, MONTH_MORE_VIEW_MIN_WIDTH);
  let height = MONTH_MORE_VIEW_HEADER_HEIGHT + MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM + MONTH_MORE_VIEW_PADDING;
  const eventHeight = MONTH_EVENT_HEIGHT + MONTH_EVENT_MARGIN_TOP;
  if (eventLength <= MAX_DISPLAY_EVENT_COUNT) {
    height += eventHeight * eventLength;
  } else {
    height += eventHeight * MAX_DISPLAY_EVENT_COUNT;
  }
  if (moreViewWidth) {
    width = moreViewWidth;
  }
  if (moreViewHeight) {
    height = moreViewHeight;
  }
  if (isNaN(height) || height < minHeight) {
    height = minHeight;
  }
  return { width, height };
}
function getSeeMorePopupPosition(popupSize, appContainerSize, cellRect) {
  const {
    width: containerWidth,
    height: containerHeight,
    left: containerLeft,
    top: containerTop
  } = appContainerSize;
  const { width: popupWidth, height: popupHeight } = popupSize;
  const containerRight = containerLeft + containerWidth;
  const containerBottom = containerTop + containerHeight;
  let left = cellRect.left + cellRect.width / 2 - popupWidth / 2;
  let { top } = cellRect;
  const isLeftOutOfContainer = left < containerLeft;
  const isRightOutOfContainer = left + popupWidth > containerRight;
  const isUpperOutOfContainer = top < containerTop;
  const isLowerOutOfContainer = top + popupHeight > containerBottom;
  if (isLeftOutOfContainer) {
    left = containerLeft;
  }
  if (isRightOutOfContainer) {
    left = containerRight - popupWidth;
  }
  if (isUpperOutOfContainer) {
    top = containerTop;
  }
  if (isLowerOutOfContainer) {
    top = containerBottom - popupHeight;
  }
  return { top: top + window.scrollY, left: left + window.scrollX };
}
function getSeeMorePopupRect({
  layoutContainer,
  cell,
  popupSize
}) {
  const containerRect = layoutContainer.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const popupPosition = getSeeMorePopupPosition(popupSize, containerRect, cellRect);
  return __spreadValues$1(__spreadValues$1({}, popupSize), popupPosition);
}
function usePopupPosition(eventLength, parentContainer, layoutContainer) {
  const { width: moreViewWidth, height: moreViewHeight } = useTheme(monthMoreViewSelector);
  const [container, containerRefCallback] = useDOMNode();
  const [popupPosition, setPopupPosition] = y$1(null);
  _$2(() => {
    if (layoutContainer && parentContainer && container) {
      const popupSize = getSeeMorePopupSize({
        grid: parentContainer,
        offsetWidth: container.offsetWidth,
        eventLength,
        layerSize: {
          width: moreViewWidth,
          height: moreViewHeight
        }
      });
      const rect = getSeeMorePopupRect({
        cell: container,
        layoutContainer,
        popupSize
      });
      setPopupPosition(rect);
    }
  }, [layoutContainer, container, eventLength, parentContainer, moreViewWidth, moreViewHeight]);
  return { popupPosition, containerRefCallback };
}
function weekendBackgroundColorSelector(theme) {
  return theme.month.weekend.backgroundColor;
}
function GridCell({ date: date2, events = [], style, parentContainer, contentAreaHeight }) {
  const layoutContainer = useLayoutContainer();
  const { showSeeMorePopup } = useDispatch("popup");
  const backgroundColor = useTheme(weekendBackgroundColorSelector);
  const { popupPosition, containerRefCallback } = usePopupPosition(events.length, parentContainer, layoutContainer);
  const onOpenSeeMorePopup = T$1(() => {
    if (popupPosition) {
      showSeeMorePopup({
        date: date2,
        popupPosition,
        events
      });
    }
  }, [date2, events, popupPosition, showSeeMorePopup]);
  const exceedCount = getExceedCount(events, contentAreaHeight, MONTH_EVENT_HEIGHT + MONTH_EVENT_MARGIN_TOP);
  return /* @__PURE__ */ h$3("div", {
    className: cls("daygrid-cell"),
    style: __spreadProps(__spreadValues$1({}, style), { backgroundColor: isWeekend(date2.getDay()) ? backgroundColor : "inherit" }),
    ref: containerRefCallback
  }, /* @__PURE__ */ h$3(CellHeader, {
    type: CellBarType.header,
    exceedCount,
    date: date2,
    onClickExceedCount: onOpenSeeMorePopup
  }), /* @__PURE__ */ h$3(CellHeader, {
    type: CellBarType.footer,
    exceedCount,
    date: date2,
    onClickExceedCount: onOpenSeeMorePopup
  }));
}
const GridRow = g$1(function GridRow2({
  week,
  rowInfo,
  gridDateEventModelMap = {},
  contentAreaHeight
}) {
  const [container, containerRefCallback] = useDOMNode();
  const border = useTheme(T$1((theme) => theme.common.border, []));
  return /* @__PURE__ */ h$3("div", {
    className: cls("weekday-grid"),
    style: { borderTop: border },
    ref: containerRefCallback
  }, week.map((date2, columnIndex) => {
    const dayIndex = date2.getDay();
    const { width, left } = rowInfo[columnIndex];
    const ymd = toFormat(toStartOfDay(date2), "YYYYMMDD");
    return /* @__PURE__ */ h$3(GridCell, {
      key: `daygrid-cell-${dayIndex}`,
      date: date2,
      style: {
        width: toPercent(width),
        left: toPercent(left)
      },
      parentContainer: container,
      events: gridDateEventModelMap[ymd],
      contentAreaHeight
    });
  }));
});
function GridSelectionByRow({ weekDates, narrowWeekend, rowIndex }) {
  const gridSelectionDataByRow = useStore(T$1((state) => dayGridMonthSelectionHelper.calculateSelection(state.gridSelection.dayGridMonth, rowIndex, weekDates.length), [rowIndex, weekDates.length]));
  if (isNil(gridSelectionDataByRow)) {
    return null;
  }
  return /* @__PURE__ */ h$3(GridSelection$1, {
    type: "month",
    gridSelectionData: gridSelectionDataByRow,
    weekDates,
    narrowWeekend
  });
}
const MonthEvents = g$1(function MonthEvents2({
  contentAreaHeight,
  eventHeight = EVENT_HEIGHT,
  events,
  name,
  className: className2
}) {
  const { headerHeight } = useTheme(monthGridCellSelector);
  const dayEvents = events.filter(isWithinHeight(contentAreaHeight, eventHeight + MONTH_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `${name}-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight,
    headerHeight: headerHeight != null ? headerHeight : MONTH_CELL_BAR_HEIGHT
  }));
  return /* @__PURE__ */ h$3("div", {
    className: className2
  }, dayEvents);
});
function useDayGridMonthEventMove({
  dateMatrix,
  rowInfo,
  gridPositionFinder,
  rowIndex
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: movingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "move");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const movingEventUIModel = F$2(() => {
    var _a2, _b;
    let shadowEventUIModel = null;
    if (movingEvent && (currentGridPos == null ? void 0 : currentGridPos.rowIndex) === rowIndex) {
      shadowEventUIModel = movingEvent;
      shadowEventUIModel.left = rowInfo[(_a2 = currentGridPos == null ? void 0 : currentGridPos.columnIndex) != null ? _a2 : 0].left;
      shadowEventUIModel.width = rowInfo[(_b = currentGridPos == null ? void 0 : currentGridPos.columnIndex) != null ? _b : 0].width;
    }
    return shadowEventUIModel;
  }, [movingEvent, currentGridPos == null ? void 0 : currentGridPos.rowIndex, currentGridPos == null ? void 0 : currentGridPos.columnIndex, rowIndex, rowInfo]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(movingEventUIModel) && isPresent(currentGridPos);
    if (shouldUpdate) {
      const preStartDate = movingEventUIModel.model.getStarts();
      const eventDuration = movingEventUIModel.duration();
      const currentDate = dateMatrix[currentGridPos.rowIndex][currentGridPos.columnIndex];
      const timeOffsetPerDay = getDateDifference(currentDate, preStartDate) * MS_PER_DAY;
      const newStartDate = new TZDate(preStartDate.getTime() + timeOffsetPerDay);
      const newEndDate = new TZDate(newStartDate.getTime() + eventDuration);
      eventBus.fire("beforeUpdateEvent", {
        event: movingEventUIModel.model.toEventObject(),
        changes: {
          start: newStartDate,
          end: newEndDate
        }
      });
    }
    clearDraggingEvent();
    clearCurrentGridPos();
  }, isDraggingEnd);
  return movingEventUIModel;
}
function MovingEventShadow({ dateMatrix, gridPositionFinder, rowInfo, rowIndex }) {
  const movingEvent = useDayGridMonthEventMove({
    dateMatrix,
    rowInfo,
    gridPositionFinder,
    rowIndex
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(HorizontalEvent, {
    uiModel: movingEvent,
    movingLeft: movingEvent.left,
    eventHeight: EVENT_HEIGHT,
    headerHeight: MONTH_CELL_PADDING_TOP + MONTH_CELL_BAR_HEIGHT
  });
}
function getRowPosOfUIModel(uiModel, dateRow) {
  const startColumnIndex = Math.max(getGridDateIndex(uiModel.getStarts(), dateRow), 0);
  const endColumnIndex = getGridDateIndex(uiModel.getEnds(), dateRow);
  return {
    startColumnIndex,
    endColumnIndex
  };
}
function useDayGridMonthEventResize({
  dateMatrix,
  gridPositionFinder,
  renderedUIModels,
  cellWidthMap,
  rowIndex
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingStartUIModel,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideProps, setGuideProps] = y$1(null);
  const clearStates = T$1(() => {
    setGuideProps(null);
    clearCurrentGridPos();
    clearDraggingEvent();
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const baseResizingInfo = F$2(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }
    const resizeTargetUIModelRows = renderedUIModels.map(({ uiModels }) => uiModels.filter((uiModel) => uiModel.cid() === resizingStartUIModel.cid()));
    const eventStartDateRowIndex = resizeTargetUIModelRows.findIndex((row) => row.length > 0);
    const eventEndDateRowIndex = findLastIndex(resizeTargetUIModelRows, (row) => row.length > 0);
    const eventStartUIModelPos = getRowPosOfUIModel(resizeTargetUIModelRows[eventStartDateRowIndex][0], dateMatrix[eventStartDateRowIndex]);
    const eventEndUIModelPos = getRowPosOfUIModel(resizeTargetUIModelRows[eventEndDateRowIndex][0], dateMatrix[eventEndDateRowIndex]);
    return {
      eventStartDateColumnIndex: eventStartUIModelPos.startColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex: eventEndUIModelPos.endColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelRows
    };
  }, [dateMatrix, renderedUIModels, resizingStartUIModel]);
  const canCalculateProps = isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);
  _$2(() => {
    if (canCalculateProps && rowIndex === baseResizingInfo.eventStartDateRowIndex) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex } = baseResizingInfo;
      const clonedUIModel = baseResizingInfo.resizeTargetUIModelRows[eventStartDateRowIndex][0].clone();
      let height;
      if (eventStartDateRowIndex === currentGridPos.rowIndex) {
        height = cellWidthMap[eventStartDateColumnIndex][Math.max(eventStartDateColumnIndex, currentGridPos.columnIndex)];
      } else if (eventStartDateRowIndex > currentGridPos.rowIndex) {
        height = cellWidthMap[eventStartDateColumnIndex][eventStartDateColumnIndex];
      } else {
        height = cellWidthMap[eventStartDateColumnIndex][dateMatrix[rowIndex].length - 1];
        clonedUIModel.setUIProps({ exceedRight: true });
      }
      setGuideProps([clonedUIModel, height]);
    }
  }, [baseResizingInfo, canCalculateProps, cellWidthMap, currentGridPos, dateMatrix, rowIndex]);
  _$2(() => {
    if (canCalculateProps && baseResizingInfo.eventStartDateRowIndex < rowIndex && rowIndex < currentGridPos.rowIndex) {
      const clonedUIModel = resizingStartUIModel.clone();
      clonedUIModel.setUIProps({ left: 0, exceedLeft: true, exceedRight: true });
      setGuideProps([clonedUIModel, "100%"]);
    }
  }, [baseResizingInfo, canCalculateProps, currentGridPos, resizingStartUIModel, rowIndex]);
  _$2(() => {
    if (canCalculateProps && baseResizingInfo.eventStartDateRowIndex < currentGridPos.rowIndex && rowIndex === currentGridPos.rowIndex) {
      const clonedUIModel = resizingStartUIModel.clone();
      clonedUIModel.setUIProps({ left: 0, exceedLeft: true });
      setGuideProps([clonedUIModel, cellWidthMap[0][currentGridPos.columnIndex]]);
    }
  }, [
    baseResizingInfo,
    canCalculateProps,
    cellWidthMap,
    currentGridPos,
    resizingStartUIModel,
    rowIndex
  ]);
  _$2(() => {
    if (canCalculateProps && rowIndex > baseResizingInfo.eventStartDateRowIndex && rowIndex > currentGridPos.rowIndex) {
      setGuideProps(null);
    }
  }, [canCalculateProps, currentGridPos, baseResizingInfo, rowIndex]);
  useWhen(() => {
    if (canCalculateProps) {
      const { eventStartDateColumnIndex, eventStartDateRowIndex } = baseResizingInfo;
      const shouldUpdate = !isDraggingCanceled && (currentGridPos.rowIndex === eventStartDateRowIndex && currentGridPos.columnIndex >= eventStartDateColumnIndex || currentGridPos.rowIndex > eventStartDateRowIndex);
      if (shouldUpdate) {
        const targetEndDate = dateMatrix[currentGridPos.rowIndex][currentGridPos.columnIndex];
        eventBus.fire("beforeUpdateEvent", {
          event: resizingStartUIModel.model.toEventObject(),
          changes: {
            end: targetEndDate
          }
        });
      }
    }
    clearStates();
  }, isDraggingEnd);
  return guideProps;
}
function ResizingGuideByRow({
  dateMatrix,
  cellWidthMap,
  gridPositionFinder,
  renderedUIModels,
  rowIndex
}) {
  const resizingGuideProps = useDayGridMonthEventResize({
    dateMatrix,
    gridPositionFinder,
    cellWidthMap,
    renderedUIModels,
    rowIndex
  });
  if (isNil(resizingGuideProps)) {
    return null;
  }
  const [uiModel, resizingWidth] = resizingGuideProps;
  return /* @__PURE__ */ h$3("div", {
    className: cls("weekday-events")
  }, /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `resizing-event-${uiModel.cid()}`,
    uiModel,
    eventHeight: MONTH_EVENT_HEIGHT,
    headerHeight: MONTH_CELL_PADDING_TOP + MONTH_CELL_BAR_HEIGHT,
    resizingWidth
  }));
}
const TOTAL_PERCENT_HEIGHT = 100;
function useCellContentAreaHeight(eventHeight) {
  const visibleEventCount = useStore(monthVisibleEventCountSelector);
  const { headerHeight: themeHeaderHeight, footerHeight: themeFooterHeight } = useTheme(monthGridCellSelector);
  const ref2 = s$2(null);
  const [cellContentAreaHeight, setCellContentAreaHeight] = y$1(0);
  _$2(() => {
    if (ref2.current) {
      const rowHeight = getSize(ref2.current).height;
      const headerHeight = MONTH_CELL_PADDING_TOP + (themeHeaderHeight != null ? themeHeaderHeight : MONTH_CELL_BAR_HEIGHT);
      const footerHeight = themeFooterHeight != null ? themeFooterHeight : 0;
      const baseContentAreaHeight = rowHeight - headerHeight - footerHeight;
      const visibleEventCountHeight = visibleEventCount * (eventHeight + MONTH_EVENT_MARGIN_TOP);
      setCellContentAreaHeight(Math.min(baseContentAreaHeight, visibleEventCountHeight));
    }
  }, [themeFooterHeight, themeHeaderHeight, eventHeight, visibleEventCount]);
  return { ref: ref2, cellContentAreaHeight };
}
function DayGridMonth({ dateMatrix = [], rowInfo = [], cellWidthMap = [] }) {
  const [gridContainer, setGridContainerRef] = useDOMNode();
  const calendar = useStore(calendarSelector);
  const { ref: ref2, cellContentAreaHeight } = useCellContentAreaHeight(MONTH_EVENT_HEIGHT);
  const { eventFilter, month: monthOptions, isReadOnly } = useStore(optionsSelector);
  const { narrowWeekend, startDayOfWeek } = monthOptions;
  const rowHeight = TOTAL_PERCENT_HEIGHT / dateMatrix.length;
  const gridPositionFinder = F$2(() => createGridPositionFinder({
    container: gridContainer,
    rowsCount: dateMatrix.length,
    columnsCount: dateMatrix[0].length,
    narrowWeekend,
    startDayOfWeek
  }), [dateMatrix, gridContainer, narrowWeekend, startDayOfWeek]);
  const calendarData = useCalendarData(calendar, eventFilter);
  const renderedEventUIModels = F$2(() => dateMatrix.map((week) => getRenderedEventUIModels(week, calendarData, narrowWeekend)), [calendarData, dateMatrix, narrowWeekend]);
  const onMouseDown = useGridSelection({
    type: "dayGridMonth",
    gridPositionFinder,
    dateCollection: dateMatrix,
    dateGetter: dayGridMonthSelectionHelper.getDateFromCollection,
    selectionSorter: dayGridMonthSelectionHelper.sortSelection
  });
  return /* @__PURE__ */ h$3("div", {
    ref: setGridContainerRef,
    onMouseDown: passConditionalProp(!isReadOnly, onMouseDown),
    className: cls("month-daygrid")
  }, dateMatrix.map((week, rowIndex) => {
    const { uiModels, gridDateEventModelMap } = renderedEventUIModels[rowIndex];
    return /* @__PURE__ */ h$3("div", {
      key: `dayGrid-events-${rowIndex}`,
      className: cls("month-week-item"),
      style: { height: toPercent(rowHeight) },
      ref: ref2
    }, /* @__PURE__ */ h$3("div", {
      className: cls("weekday")
    }, /* @__PURE__ */ h$3(GridRow, {
      gridDateEventModelMap,
      week,
      rowInfo,
      contentAreaHeight: cellContentAreaHeight
    }), /* @__PURE__ */ h$3(MonthEvents, {
      name: "month",
      events: uiModels,
      contentAreaHeight: cellContentAreaHeight,
      eventHeight: MONTH_EVENT_HEIGHT,
      className: cls("weekday-events")
    }), /* @__PURE__ */ h$3(GridSelectionByRow, {
      weekDates: week,
      narrowWeekend,
      rowIndex
    }), /* @__PURE__ */ h$3(AccumulatedGridSelection, {
      rowIndex,
      weekDates: week,
      narrowWeekend
    })), /* @__PURE__ */ h$3(ResizingGuideByRow, {
      dateMatrix,
      gridPositionFinder,
      rowIndex,
      cellWidthMap,
      renderedUIModels: renderedEventUIModels
    }), /* @__PURE__ */ h$3(MovingEventShadow, {
      dateMatrix,
      gridPositionFinder,
      rowIndex,
      rowInfo
    }));
  }));
}
function getMonthDayNames(options) {
  const { dayNames, startDayOfWeek, workweek } = options.month;
  const dayIndices = [...Array(7)].map((_2, i2) => (startDayOfWeek + i2) % 7);
  const monthDayNames = dayIndices.map((i2) => ({
    day: i2,
    label: capitalize(dayNames[i2])
  }));
  return monthDayNames.filter((dayNameInfo) => workweek ? !isWeekend(dayNameInfo.day) : true);
}
function Month$1() {
  const options = useStore(optionsSelector);
  const { renderDate } = useStore(viewSelector);
  const dayNames = getMonthDayNames(options);
  const monthOptions = options.month;
  const { narrowWeekend, startDayOfWeek, workweek } = monthOptions;
  const dateMatrix = F$2(() => createDateMatrixOfMonth(renderDate, monthOptions), [monthOptions, renderDate]);
  const { rowStyleInfo, cellWidthMap } = F$2(() => getRowStyleInfo(dayNames.length, narrowWeekend, startDayOfWeek, workweek), [dayNames.length, narrowWeekend, startDayOfWeek, workweek]);
  const rowInfo = rowStyleInfo.map((cellStyleInfo, index) => __spreadProps(__spreadValues$1({}, cellStyleInfo), {
    date: dateMatrix[0][index]
  }));
  return /* @__PURE__ */ h$3(Layout, {
    className: cls("month")
  }, /* @__PURE__ */ h$3(GridHeader, {
    type: "month",
    dayNames,
    options: monthOptions,
    rowStyleInfo
  }), /* @__PURE__ */ h$3(DayGridMonth, {
    dateMatrix,
    rowInfo,
    cellWidthMap
  }));
}
function useWeekViewState() {
  const options = useStore(optionsSelector);
  const calendar = useStore(calendarSelector);
  const { dayGridRows: gridRowLayout, lastPanelType } = useStore(weekViewLayoutSelector);
  const { renderDate } = useStore(viewSelector);
  return F$2(() => ({
    options,
    calendar,
    gridRowLayout,
    lastPanelType,
    renderDate
  }), [calendar, gridRowLayout, lastPanelType, options, renderDate]);
}
function Week$1() {
  var _a2, _b;
  const { options, calendar, gridRowLayout, lastPanelType, renderDate } = useWeekViewState();
  const gridHeaderMarginLeft = useTheme(T$1((theme) => theme.week.dayGridLeft.width, []));
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const [timePanel, setTimePanelRef] = useDOMNode();
  const weekOptions = options.week;
  const { narrowWeekend, startDayOfWeek, workweek, hourStart, hourEnd, eventView, taskView } = weekOptions;
  const weekDates = F$2(() => getWeekDates(renderDate, weekOptions), [renderDate, weekOptions]);
  const dayNames = getDayNames(weekDates, (_b = (_a2 = options.week) == null ? void 0 : _a2.dayNames) != null ? _b : []);
  const { rowStyleInfo, cellWidthMap } = getRowStyleInfo(weekDates.length, narrowWeekend, startDayOfWeek, workweek);
  const calendarData = useCalendarData(calendar, options.eventFilter);
  const eventByPanel = F$2(() => {
    const getFilterRange = () => {
      if (primaryTimezoneName === "Local") {
        return [toStartOfDay(first(weekDates)), toEndOfDay(last(weekDates))];
      }
      return [toStartOfDay(addDate(first(weekDates), -1)), toEndOfDay(addDate(last(weekDates), 1))];
    };
    const [weekStartDate, weekEndDate] = getFilterRange();
    return getWeekViewEvents(weekDates, calendarData, {
      narrowWeekend,
      hourStart,
      hourEnd,
      weekStartDate,
      weekEndDate
    });
  }, [calendarData, hourEnd, hourStart, narrowWeekend, primaryTimezoneName, weekDates]);
  const timeGridData = F$2(() => createTimeGridData(weekDates, {
    hourStart,
    hourEnd,
    narrowWeekend
  }), [hourEnd, hourStart, narrowWeekend, weekDates]);
  const activePanels = getActivePanels(taskView, eventView);
  const dayGridRows = activePanels.map((key) => {
    var _a22, _b2;
    if (key === "time") {
      return null;
    }
    const rowType = key;
    return /* @__PURE__ */ h$3(Panel, {
      name: rowType,
      key: rowType,
      resizable: rowType !== lastPanelType
    }, rowType === "allday" ? /* @__PURE__ */ h$3(AlldayGridRow, {
      events: eventByPanel[rowType],
      rowStyleInfo,
      gridColWidthMap: cellWidthMap,
      weekDates,
      height: (_a22 = gridRowLayout[rowType]) == null ? void 0 : _a22.height,
      options: weekOptions
    }) : /* @__PURE__ */ h$3(OtherGridRow, {
      category: rowType,
      events: eventByPanel[rowType],
      weekDates,
      height: (_b2 = gridRowLayout[rowType]) == null ? void 0 : _b2.height,
      options: weekOptions,
      gridColWidthMap: cellWidthMap
    }));
  });
  const hasTimePanel = F$2(() => activePanels.includes("time"), [activePanels]);
  useTimeGridScrollSync(timePanel, timeGridData.rows.length);
  const stickyTop = useTimezoneLabelsTop(timePanel);
  return /* @__PURE__ */ h$3(Layout, {
    className: cls("week-view"),
    autoAdjustPanels: true
  }, /* @__PURE__ */ h$3(Panel, {
    name: "week-view-day-names",
    initialHeight: WEEK_DAY_NAME_HEIGHT + WEEK_DAY_NAME_BORDER * 2
  }, /* @__PURE__ */ h$3(GridHeader, {
    type: "week",
    dayNames,
    marginLeft: gridHeaderMarginLeft,
    options: weekOptions,
    rowStyleInfo
  })), dayGridRows, hasTimePanel ? /* @__PURE__ */ h$3(Panel, {
    name: "time",
    autoSize: 1,
    ref: setTimePanelRef
  }, /* @__PURE__ */ h$3(TimeGrid, {
    events: eventByPanel.time,
    timeGridData
  }), /* @__PURE__ */ h$3(TimezoneLabels, {
    top: stickyTop
  })) : null);
}
const views = {
  month: Month$1,
  week: Week$1,
  day: Day$1
};
function Main() {
  const { currentView } = useStore(viewSelector);
  const CurrentViewComponent = F$2(() => views[currentView] || (() => null), [currentView]);
  return /* @__PURE__ */ h$3(CurrentViewComponent, null);
}
var r = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, n = /[&<>"]/;
function o(e2) {
  var t2 = String(e2);
  return n.test(t2) ? t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t2;
}
var a = function(e2, t2) {
  return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
}, i = function(e2, t2, r2) {
  return String(e2).length > (t2 || 40) || !r2 && String(e2).indexOf("\n") !== -1 || String(e2).indexOf("<") !== -1;
}, l = {};
function s(e2) {
  var t2 = "";
  for (var n2 in e2) {
    var o2 = e2[n2];
    o2 != null && o2 !== "" && (t2 && (t2 += " "), t2 += n2[0] == "-" ? n2 : l[n2] || (l[n2] = n2.replace(/([A-Z])/g, "-$1").toLowerCase()), t2 += ": ", t2 += o2, typeof o2 == "number" && r.test(n2) === false && (t2 += "px"), t2 += ";");
  }
  return t2 || void 0;
}
function f(e2, t2) {
  for (var r2 in t2)
    e2[r2] = t2[r2];
  return e2;
}
function u(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(u, e2) : t2 != null && t2 !== false && e2.push(t2), e2;
}
var c = { shallow: true }, p = [], _ = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, d = /[\s\n\\/='"\0<>]/;
function v() {
  this.__d = true;
}
m.render = m;
var g = function(e2, t2) {
  return m(e2, t2, c);
}, h = [];
function m(t2, r2, n2) {
  r2 = r2 || {}, n2 = n2 || {};
  var o2 = l$3.__s;
  l$3.__s = true;
  var a2 = x(t2, r2, n2);
  return l$3.__c && l$3.__c(t2, h), h.length = 0, l$3.__s = o2, a2;
}
function x(r2, n2, l2, c2, g2, h2) {
  if (r2 == null || typeof r2 == "boolean")
    return "";
  if (typeof r2 != "object")
    return o(r2);
  var m2 = l2.pretty, y2 = m2 && typeof m2 == "string" ? m2 : "	";
  if (Array.isArray(r2)) {
    for (var b2 = "", S2 = 0; S2 < r2.length; S2++)
      m2 && S2 > 0 && (b2 += "\n"), b2 += x(r2[S2], n2, l2, c2, g2, h2);
    return b2;
  }
  var k2, w2 = r2.type, O2 = r2.props, C2 = false;
  if (typeof w2 == "function") {
    if (C2 = true, !l2.shallow || !c2 && l2.renderRootComponent !== false) {
      if (w2 === p$3) {
        var A2 = [];
        return u(A2, r2.props.children), x(A2, n2, l2, l2.shallowHighOrder !== false, g2, h2);
      }
      var H2, j2 = r2.__c = { __v: r2, context: n2, props: r2.props, setState: v, forceUpdate: v, __d: true, __h: [] };
      l$3.__b && l$3.__b(r2);
      var F2 = l$3.__r;
      if (w2.prototype && typeof w2.prototype.render == "function") {
        var M2 = w2.contextType, T2 = M2 && n2[M2.__c], $2 = M2 != null ? T2 ? T2.props.value : M2.__ : n2;
        (j2 = r2.__c = new w2(O2, $2)).__v = r2, j2._dirty = j2.__d = true, j2.props = O2, j2.state == null && (j2.state = {}), j2._nextState == null && j2.__s == null && (j2._nextState = j2.__s = j2.state), j2.context = $2, w2.getDerivedStateFromProps ? j2.state = f(f({}, j2.state), w2.getDerivedStateFromProps(j2.props, j2.state)) : j2.componentWillMount && (j2.componentWillMount(), j2.state = j2._nextState !== j2.state ? j2._nextState : j2.__s !== j2.state ? j2.__s : j2.state), F2 && F2(r2), H2 = j2.render(j2.props, j2.state, j2.context);
      } else
        for (var L2 = w2.contextType, E2 = L2 && n2[L2.__c], D2 = L2 != null ? E2 ? E2.props.value : L2.__ : n2, N2 = 0; j2.__d && N2++ < 25; )
          j2.__d = false, F2 && F2(r2), H2 = w2.call(r2.__c, O2, D2);
      return j2.getChildContext && (n2 = f(f({}, n2), j2.getChildContext())), l$3.diffed && l$3.diffed(r2), x(H2, n2, l2, l2.shallowHighOrder !== false, g2, h2);
    }
    w2 = (k2 = w2).displayName || k2 !== Function && k2.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r3 = -1, n3 = p.length; n3--; )
          if (p[n3] === e2) {
            r3 = n3;
            break;
          }
        r3 < 0 && (r3 = p.push(e2) - 1), t2 = "UnnamedComponent" + r3;
      }
      return t2;
    }(k2);
  }
  var P2, R2, U2 = "<" + w2;
  if (O2) {
    var W2 = Object.keys(O2);
    l2 && l2.sortAttributes === true && W2.sort();
    for (var q2 = 0; q2 < W2.length; q2++) {
      var z2 = W2[q2], I2 = O2[z2];
      if (z2 !== "children") {
        if (!d.test(z2) && (l2 && l2.allAttributes || z2 !== "key" && z2 !== "ref" && z2 !== "__self" && z2 !== "__source")) {
          if (z2 === "defaultValue")
            z2 = "value";
          else if (z2 === "defaultChecked")
            z2 = "checked";
          else if (z2 === "defaultSelected")
            z2 = "selected";
          else if (z2 === "className") {
            if (O2.class !== void 0)
              continue;
            z2 = "class";
          } else
            g2 && /^xlink:?./.test(z2) && (z2 = z2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if (z2 === "htmlFor") {
            if (O2.for)
              continue;
            z2 = "for";
          }
          z2 === "style" && I2 && typeof I2 == "object" && (I2 = s(I2)), z2[0] === "a" && z2[1] === "r" && typeof I2 == "boolean" && (I2 = String(I2));
          var V2 = l2.attributeHook && l2.attributeHook(z2, I2, n2, l2, C2);
          if (V2 || V2 === "")
            U2 += V2;
          else if (z2 === "dangerouslySetInnerHTML")
            R2 = I2 && I2.__html;
          else if (w2 === "textarea" && z2 === "value")
            P2 = I2;
          else if ((I2 || I2 === 0 || I2 === "") && typeof I2 != "function") {
            if (!(I2 !== true && I2 !== "" || (I2 = z2, l2 && l2.xml))) {
              U2 = U2 + " " + z2;
              continue;
            }
            if (z2 === "value") {
              if (w2 === "select") {
                h2 = I2;
                continue;
              }
              w2 === "option" && h2 == I2 && O2.selected === void 0 && (U2 += " selected");
            }
            U2 = U2 + " " + z2 + '="' + o(I2) + '"';
          }
        }
      } else
        P2 = I2;
    }
  }
  if (m2) {
    var Z2 = U2.replace(/\n\s*/, " ");
    Z2 === U2 || ~Z2.indexOf("\n") ? m2 && ~U2.indexOf("\n") && (U2 += "\n") : U2 = Z2;
  }
  if (U2 += ">", d.test(w2))
    throw new Error(w2 + " is not a valid HTML tag name in " + U2);
  var B2, G2 = _.test(w2) || l2.voidElements && l2.voidElements.test(w2), J2 = [];
  if (R2)
    m2 && i(R2) && (R2 = "\n" + y2 + a(R2, y2)), U2 += R2;
  else if (P2 != null && u(B2 = [], P2).length) {
    for (var K2 = m2 && ~U2.indexOf("\n"), Q2 = false, X2 = 0; X2 < B2.length; X2++) {
      var Y2 = B2[X2];
      if (Y2 != null && Y2 !== false) {
        var ee = x(Y2, n2, l2, true, w2 === "svg" || w2 !== "foreignObject" && g2, h2);
        if (m2 && !K2 && i(ee) && (K2 = true), ee)
          if (m2) {
            var te = ee.length > 0 && ee[0] != "<";
            Q2 && te ? J2[J2.length - 1] += ee : J2.push(ee), Q2 = te;
          } else
            J2.push(ee);
      }
    }
    if (m2 && K2)
      for (var re = J2.length; re--; )
        J2[re] = "\n" + y2 + a(J2[re], y2);
  }
  if (J2.length || R2)
    U2 += J2.join("");
  else if (l2 && l2.xml)
    return U2.substring(0, U2.length - 1) + " />";
  return !G2 || B2 || R2 ? (m2 && ~U2.indexOf("\n") && (U2 += "\n"), U2 = U2 + "</" + w2 + ">") : U2 = U2.replace(/>$/, " />"), U2;
}
m.shallowRender = g;
function forEachOwnProperties$2(obj, iteratee, context) {
  var key;
  context = context || null;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}
var forEachOwnProperties_1 = forEachOwnProperties$2;
var forEachOwnProperties$1 = forEachOwnProperties_1;
function imagePing$1(url, trackingInfo) {
  var trackingElement = document.createElement("img");
  var queryString = "";
  forEachOwnProperties$1(trackingInfo, function(value, key) {
    queryString += "&" + key + "=" + value;
  });
  queryString = queryString.substring(1);
  trackingElement.src = url + "?" + queryString;
  trackingElement.style.display = "none";
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);
  return trackingElement;
}
var imagePing_1 = imagePing$1;
var isUndefined$1 = isUndefined_1;
var imagePing = imagePing_1;
var ms7days = 7 * 24 * 60 * 60 * 1e3;
function isExpired(date2) {
  var now = new Date().getTime();
  return now - date2 > ms7days;
}
function sendHostname(appName, trackingId) {
  var url = "https://www.google-analytics.com/collect";
  var hostname = location.hostname;
  var hitType = "event";
  var eventCategory = "use";
  var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
  var date2 = window.localStorage.getItem(applicationKeyForStorage);
  if (!isUndefined$1(window.tui) && window.tui.usageStatistics === false) {
    return;
  }
  if (date2 && !isExpired(date2)) {
    return;
  }
  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
  setTimeout(function() {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1e3);
}
var sendHostname_1 = sendHostname;
function CalendarContainer({ theme, store, eventBus, children }) {
  return /* @__PURE__ */ h$3(EventBusProvider, {
    value: eventBus
  }, /* @__PURE__ */ h$3(ThemeProvider, {
    store: theme
  }, /* @__PURE__ */ h$3(StoreProvider, {
    store
  }, /* @__PURE__ */ h$3(FloatingLayerProvider, null, children))));
}
const GA_TRACKING_ID = "UA-129951699-1";
function extend$1(target, objects) {
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i2, len;
  for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
    source = arguments[i2];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
var extend_1 = extend$1;
function isNull$1(obj) {
  return obj === null;
}
var isNull_1 = isNull$1;
var isUndefined = isUndefined_1;
var isNull = isNull_1;
function isExisty$1(param) {
  return !isUndefined(param) && !isNull(param);
}
var isExisty_1 = isExisty$1;
function isArray$2(obj) {
  return obj instanceof Array;
}
var isArray_1 = isArray$2;
function isFunction$1(obj) {
  return obj instanceof Function;
}
var isFunction_1 = isFunction$1;
function forEachArray$1(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;
  context = context || null;
  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}
var forEachArray_1 = forEachArray$1;
var isArray$1 = isArray_1;
var forEachArray = forEachArray_1;
var forEachOwnProperties = forEachOwnProperties_1;
function forEach$1(obj, iteratee, context) {
  if (isArray$1(obj)) {
    forEachArray(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}
var forEach_1 = forEach$1;
var extend = extend_1;
var isExisty = isExisty_1;
var isString = isString_1;
var isObject = isObject_1;
var isArray = isArray_1;
var isFunction = isFunction_1;
var forEach = forEach_1;
var R_EVENTNAME_SPLIT = /\s+/g;
function CustomEvents() {
  this.events = null;
  this.contexts = null;
}
CustomEvents.mixin = function(func) {
  extend(func.prototype, CustomEvents.prototype);
};
CustomEvents.prototype._getHandlerItem = function(handler, context) {
  var item = { handler };
  if (context) {
    item.context = context;
  }
  return item;
};
CustomEvents.prototype._safeEvent = function(eventName) {
  var events = this.events;
  var byName;
  if (!events) {
    events = this.events = {};
  }
  if (eventName) {
    byName = events[eventName];
    if (!byName) {
      byName = [];
      events[eventName] = byName;
    }
    events = byName;
  }
  return events;
};
CustomEvents.prototype._safeContext = function() {
  var context = this.contexts;
  if (!context) {
    context = this.contexts = [];
  }
  return context;
};
CustomEvents.prototype._indexOfContext = function(ctx) {
  var context = this._safeContext();
  var index = 0;
  while (context[index]) {
    if (ctx === context[index][0]) {
      return index;
    }
    index += 1;
  }
  return -1;
};
CustomEvents.prototype._memorizeContext = function(ctx) {
  var context, index;
  if (!isExisty(ctx)) {
    return;
  }
  context = this._safeContext();
  index = this._indexOfContext(ctx);
  if (index > -1) {
    context[index][1] += 1;
  } else {
    context.push([ctx, 1]);
  }
};
CustomEvents.prototype._forgetContext = function(ctx) {
  var context, contextIndex;
  if (!isExisty(ctx)) {
    return;
  }
  context = this._safeContext();
  contextIndex = this._indexOfContext(ctx);
  if (contextIndex > -1) {
    context[contextIndex][1] -= 1;
    if (context[contextIndex][1] <= 0) {
      context.splice(contextIndex, 1);
    }
  }
};
CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
  var events = this._safeEvent(eventName);
  this._memorizeContext(context);
  events.push(this._getHandlerItem(handler, context));
};
CustomEvents.prototype.on = function(eventName, handler, context) {
  var self2 = this;
  if (isString(eventName)) {
    eventName = eventName.split(R_EVENTNAME_SPLIT);
    forEach(eventName, function(name) {
      self2._bindEvent(name, handler, context);
    });
  } else if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self2.on(name, func, context);
    });
  }
};
CustomEvents.prototype.once = function(eventName, handler, context) {
  var self2 = this;
  if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self2.once(name, func, context);
    });
    return;
  }
  function onceHandler() {
    handler.apply(context, arguments);
    self2.off(eventName, onceHandler, context);
  }
  this.on(eventName, onceHandler, context);
};
CustomEvents.prototype._spliceMatches = function(arr, predicate) {
  var i2 = 0;
  var len;
  if (!isArray(arr)) {
    return;
  }
  for (len = arr.length; i2 < len; i2 += 1) {
    if (predicate(arr[i2]) === true) {
      arr.splice(i2, 1);
      len -= 1;
      i2 -= 1;
    }
  }
};
CustomEvents.prototype._matchHandler = function(handler) {
  var self2 = this;
  return function(item) {
    var needRemove = handler === item.handler;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._matchContext = function(context) {
  var self2 = this;
  return function(item) {
    var needRemove = context === item.context;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
  var self2 = this;
  return function(item) {
    var matchHandler = handler === item.handler;
    var matchContext = context === item.context;
    var needRemove = matchHandler && matchContext;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._offByEventName = function(eventName, handler) {
  var self2 = this;
  var andByHandler = isFunction(handler);
  var matchHandler = self2._matchHandler(handler);
  eventName = eventName.split(R_EVENTNAME_SPLIT);
  forEach(eventName, function(name) {
    var handlerItems = self2._safeEvent(name);
    if (andByHandler) {
      self2._spliceMatches(handlerItems, matchHandler);
    } else {
      forEach(handlerItems, function(item) {
        self2._forgetContext(item.context);
      });
      self2.events[name] = [];
    }
  });
};
CustomEvents.prototype._offByHandler = function(handler) {
  var self2 = this;
  var matchHandler = this._matchHandler(handler);
  forEach(this._safeEvent(), function(handlerItems) {
    self2._spliceMatches(handlerItems, matchHandler);
  });
};
CustomEvents.prototype._offByObject = function(obj, handler) {
  var self2 = this;
  var matchFunc;
  if (this._indexOfContext(obj) < 0) {
    forEach(obj, function(func, name) {
      self2.off(name, func);
    });
  } else if (isString(handler)) {
    matchFunc = this._matchContext(obj);
    self2._spliceMatches(this._safeEvent(handler), matchFunc);
  } else if (isFunction(handler)) {
    matchFunc = this._matchHandlerAndContext(handler, obj);
    forEach(this._safeEvent(), function(handlerItems) {
      self2._spliceMatches(handlerItems, matchFunc);
    });
  } else {
    matchFunc = this._matchContext(obj);
    forEach(this._safeEvent(), function(handlerItems) {
      self2._spliceMatches(handlerItems, matchFunc);
    });
  }
};
CustomEvents.prototype.off = function(eventName, handler) {
  if (isString(eventName)) {
    this._offByEventName(eventName, handler);
  } else if (!arguments.length) {
    this.events = {};
    this.contexts = [];
  } else if (isFunction(eventName)) {
    this._offByHandler(eventName);
  } else if (isObject(eventName)) {
    this._offByObject(eventName, handler);
  }
};
CustomEvents.prototype.fire = function(eventName) {
  this.invoke.apply(this, arguments);
};
CustomEvents.prototype.invoke = function(eventName) {
  var events, args, index, item;
  if (!this.hasListener(eventName)) {
    return true;
  }
  events = this._safeEvent(eventName);
  args = Array.prototype.slice.call(arguments, 1);
  index = 0;
  while (events[index]) {
    item = events[index];
    if (item.handler.apply(item.context, args) === false) {
      return false;
    }
    index += 1;
  }
  return true;
};
CustomEvents.prototype.hasListener = function(eventName) {
  return this.getListenerLength(eventName) > 0;
};
CustomEvents.prototype.getListenerLength = function(eventName) {
  var events = this._safeEvent(eventName);
  return events.length;
};
var customEvents = CustomEvents;
class EventBusImpl extends customEvents {
  on(eventName, handler) {
    super.on(eventName, handler);
    return this;
  }
  off(eventName, handler) {
    super.off(eventName, handler);
    return this;
  }
  fire(eventName, ...args) {
    super.fire(eventName, ...args);
    return this;
  }
  once(eventName, handler) {
    super.once(eventName, handler);
    return this;
  }
}
class CalendarCore {
  constructor(container, options = {}) {
    var _a2;
    this.container = isString_1(container) ? (_a2 = document == null ? void 0 : document.querySelector(container)) != null ? _a2 : null : container;
    this.theme = initThemeStore(options.theme);
    this.eventBus = new EventBusImpl();
    this.store = initCalendarStore(options);
    this.renderRange = this.calculateRenderRange(toStartOfDay());
    addAttributeHooks();
    if (this.getStoreState().options.usageStatistics === true) {
      sendHostname_1("calendar", GA_TRACKING_ID);
    }
  }
  getStoreState(group) {
    const state = this.store.getState();
    return group ? state[group] : state;
  }
  getStoreDispatchers(group) {
    const dispatchers = this.store.getState().dispatch;
    return group ? dispatchers[group] : dispatchers;
  }
  destroy() {
    if (this.container) {
      un(this.container);
    }
    this.store.clearListeners();
    this.theme.clearListeners();
    this.eventBus.off();
    removeAttributeHooks();
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        delete this[key];
      }
    }
  }
  calculateMonthRenderDate({
    renderDate,
    offset,
    monthOptions
  }) {
    let newRenderDate = new TZDate(renderDate);
    const { visibleWeeksCount } = monthOptions;
    if (visibleWeeksCount > 0) {
      newRenderDate = addDate(newRenderDate, offset * 7 * visibleWeeksCount);
    } else {
      newRenderDate = addMonths(newRenderDate, offset);
    }
    const dateMatrix = createDateMatrixOfMonth(newRenderDate, monthOptions);
    const [[start]] = dateMatrix;
    const end = last(last(dateMatrix));
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  calculateWeekRenderDate({
    renderDate,
    offset,
    weekOptions
  }) {
    const newRenderDate = new TZDate(renderDate);
    newRenderDate.addDate(offset * 7);
    const weekDates = getWeekDates(newRenderDate, weekOptions);
    const [start] = weekDates;
    const end = last(weekDates);
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  calculateDayRenderDate({ renderDate, offset }) {
    const newRenderDate = new TZDate(renderDate);
    newRenderDate.addDate(offset);
    const start = toStartOfDay(newRenderDate);
    const end = toEndOfDay(newRenderDate);
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  move(offset) {
    if (isNil(offset)) {
      return;
    }
    const { currentView, renderDate } = this.getStoreState().view;
    const { options } = this.getStoreState();
    const { setRenderDate } = this.getStoreDispatchers().view;
    const newRenderDate = new TZDate(renderDate);
    let calculatedRenderDate = {
      renderDate: newRenderDate,
      renderRange: { start: new TZDate(newRenderDate), end: new TZDate(newRenderDate) }
    };
    if (currentView === "month") {
      calculatedRenderDate = this.calculateMonthRenderDate({
        renderDate,
        offset,
        monthOptions: options.month
      });
    } else if (currentView === "week") {
      calculatedRenderDate = this.calculateWeekRenderDate({
        renderDate,
        offset,
        weekOptions: options.week
      });
    } else if (currentView === "day") {
      calculatedRenderDate = this.calculateDayRenderDate({ renderDate, offset });
    }
    setRenderDate(calculatedRenderDate.renderDate);
    this.renderRange = calculatedRenderDate.renderRange;
  }
  createEvents(events) {
    const { createEvents: createEvents2 } = this.getStoreDispatchers("calendar");
    createEvents2(events);
  }
  getEventModel(eventId, calendarId) {
    const { events } = this.getStoreState("calendar");
    return events.find(({ id, calendarId: eventCalendarId }) => id === eventId && eventCalendarId === calendarId);
  }
  getEvent(eventId, calendarId) {
    var _a2, _b;
    return (_b = (_a2 = this.getEventModel(eventId, calendarId)) == null ? void 0 : _a2.toEventObject()) != null ? _b : null;
  }
  updateEvent(eventId, calendarId, changes) {
    const { updateEvent: updateEvent2 } = this.getStoreDispatchers("calendar");
    const event = this.getEventModel(eventId, calendarId);
    if (event) {
      updateEvent2({ event, eventData: changes });
    }
  }
  deleteEvent(eventId, calendarId) {
    const { deleteEvent: deleteEvent2 } = this.getStoreDispatchers("calendar");
    const event = this.getEventModel(eventId, calendarId);
    if (event) {
      deleteEvent2(event);
    }
  }
  setCalendarVisibility(calendarId, isVisible) {
    const { setCalendarVisibility } = this.getStoreDispatchers("calendar");
    const calendarIds = Array.isArray(calendarId) ? calendarId : [calendarId];
    setCalendarVisibility(calendarIds, isVisible);
  }
  render() {
    if (isPresent(this.container)) {
      P$2(/* @__PURE__ */ h$3(CalendarContainer, {
        theme: this.theme,
        store: this.store,
        eventBus: this.eventBus
      }, this.getComponent()), this.container);
    }
    return this;
  }
  renderToString() {
    return m(/* @__PURE__ */ h$3(CalendarContainer, {
      theme: this.theme,
      store: this.store,
      eventBus: this.eventBus
    }, this.getComponent()));
  }
  clear() {
    const { clearEvents: clearEvents2 } = this.getStoreDispatchers("calendar");
    clearEvents2();
  }
  scrollToNow(scrollBehavior = "auto") {
    this.eventBus.fire("scrollToNow", scrollBehavior);
  }
  calculateRenderRange(renderDate) {
    const { currentView } = this.getStoreState().view;
    const { options } = this.getStoreState();
    const newRenderDate = new TZDate(renderDate);
    let newRenderRange = { start: new TZDate(newRenderDate), end: new TZDate(newRenderDate) };
    if (currentView === "month") {
      newRenderRange = this.calculateMonthRenderDate({
        renderDate,
        offset: 0,
        monthOptions: options.month
      }).renderRange;
    } else if (currentView === "week") {
      newRenderRange = this.calculateWeekRenderDate({
        renderDate,
        offset: 0,
        weekOptions: options.week
      }).renderRange;
    } else if (currentView === "day") {
      newRenderRange = this.calculateDayRenderDate({ renderDate, offset: 0 }).renderRange;
    }
    return newRenderRange;
  }
  today() {
    const { setRenderDate } = this.getStoreDispatchers().view;
    const today = new TZDate();
    setRenderDate(today);
    this.renderRange = this.calculateRenderRange(today);
  }
  setDate(date2) {
    const { setRenderDate } = this.getStoreDispatchers("view");
    const dateToChange = new TZDate(date2);
    setRenderDate(dateToChange);
    this.renderRange = this.calculateRenderRange(dateToChange);
  }
  next() {
    this.move(1);
  }
  prev() {
    this.move(-1);
  }
  setCalendarColor(calendarId, colorOptions) {
    const { setCalendarColor } = this.getStoreDispatchers().calendar;
    setCalendarColor(calendarId, colorOptions);
  }
  changeView(viewName) {
    const { changeView } = this.getStoreDispatchers("view");
    changeView(viewName);
    this.renderRange = this.calculateRenderRange(this.getDate());
  }
  getElement(eventId, calendarId) {
    const event = this.getEvent(eventId, calendarId);
    if (event && this.container) {
      return this.container.querySelector(`[data-event-id="${eventId}"][data-calendar-id="${calendarId}"]`);
    }
    return null;
  }
  setTheme(theme) {
    const { setTheme } = this.theme.getState().dispatch;
    setTheme(theme);
  }
  getOptions() {
    const { options, template } = this.getStoreState();
    const _a2 = this.theme.getState(), theme = __objRest(_a2, ["dispatch"]);
    return __spreadProps(__spreadValues$1({}, options), {
      template,
      theme
    });
  }
  setOptions(options) {
    const _a2 = options, { theme, template } = _a2, restOptions = __objRest(_a2, ["theme", "template"]);
    const { setTheme } = this.theme.getState().dispatch;
    const {
      options: { setOptions },
      template: { setTemplate }
    } = this.getStoreDispatchers();
    if (isPresent(theme)) {
      setTheme(theme);
    }
    if (isPresent(template)) {
      setTemplate(template);
    }
    setOptions(restOptions);
  }
  getDate() {
    const { renderDate } = this.getStoreState().view;
    return renderDate;
  }
  getDateRangeStart() {
    return this.renderRange.start;
  }
  getDateRangeEnd() {
    return this.renderRange.end;
  }
  getViewName() {
    const { currentView } = this.getStoreState("view");
    return currentView;
  }
  setCalendars(calendars) {
    const { setCalendars } = this.getStoreDispatchers().calendar;
    setCalendars(calendars);
  }
  openFormPopup(event) {
    const { showFormPopup } = this.getStoreDispatchers().popup;
    const eventModel = new EventModel(event);
    const { title, location: location2, start, end, isAllday: isAllday2, isPrivate, state: eventState } = eventModel;
    showFormPopup({
      isCreationPopup: true,
      event: eventModel,
      title,
      location: location2,
      start,
      end,
      isAllday: isAllday2,
      isPrivate,
      eventState
    });
  }
  clearGridSelections() {
    const { clearAll } = this.getStoreDispatchers().gridSelection;
    clearAll();
  }
  fire(eventName, ...args) {
    this.eventBus.fire(eventName, ...args);
    return this;
  }
  off(eventName, handler) {
    this.eventBus.off(eventName, handler);
    return this;
  }
  on(eventName, handler) {
    this.eventBus.on(eventName, handler);
    return this;
  }
  once(eventName, handler) {
    this.eventBus.once(eventName, handler);
    return this;
  }
}
function isValidViewType(viewType) {
  return !!Object.values(VIEW_TYPE).find((type) => type === viewType);
}
class Calendar extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    const { defaultView = "week" } = options;
    if (!isValidViewType(defaultView)) {
      throw new InvalidViewTypeError(defaultView);
    }
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ h$3(Main, null);
  }
}
var _a;
const isClient = typeof window !== "undefined";
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function identity(arg) {
  return arg;
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array2, setter, iteratee, accumulator) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        var value = array2[index];
        setter(accumulator, value, iteratee(value), array2);
      }
      return accumulator;
    }
    function arrayEach(array2, iteratee) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (iteratee(array2[index], index, array2) === false) {
          break;
        }
      }
      return array2;
    }
    function arrayEachRight(array2, iteratee) {
      var length = array2 == null ? 0 : array2.length;
      while (length--) {
        if (iteratee(array2[length], length, array2) === false) {
          break;
        }
      }
      return array2;
    }
    function arrayEvery(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (!predicate(array2[index], index, array2)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array2[index];
        if (predicate(value, index, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array2, value) {
      var length = array2 == null ? 0 : array2.length;
      return !!length && baseIndexOf(array2, value, 0) > -1;
    }
    function arrayIncludesWith(array2, value, comparator) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (comparator(value, array2[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array2, iteratee) {
      var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array2[index], index, array2);
      }
      return result;
    }
    function arrayPush(array2, values) {
      var index = -1, length = values.length, offset = array2.length;
      while (++index < length) {
        array2[offset + index] = values[index];
      }
      return array2;
    }
    function arrayReduce(array2, iteratee, accumulator, initAccum) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      if (initAccum && length) {
        accumulator = array2[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array2[index], index, array2);
      }
      return accumulator;
    }
    function arrayReduceRight(array2, iteratee, accumulator, initAccum) {
      var length = array2 == null ? 0 : array2.length;
      if (initAccum && length) {
        accumulator = array2[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array2[length], length, array2);
      }
      return accumulator;
    }
    function arraySome(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (predicate(array2[index], index, array2)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array2[index], index, array2)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array2, value, fromIndex) {
      return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array2, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array2.length;
      while (++index < length) {
        if (comparator(array2[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array2, iteratee) {
      var length = array2 == null ? 0 : array2.length;
      return length ? baseSum(array2, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array2, comparer) {
      var length = array2.length;
      array2.sort(comparer);
      while (length--) {
        array2[length] = array2[length].value;
      }
      return array2;
    }
    function baseSum(array2, iteratee) {
      var result, index = -1, length = array2.length;
      while (++index < length) {
        var current = iteratee(array2[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n2, iteratee) {
      var index = -1, result = Array(n2);
      while (++index < n2) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array2, placeholder) {
      var length = array2.length, result = 0;
      while (length--) {
        if (array2[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array2, placeholder) {
      var index = -1, length = array2.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array2[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array2[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array2, value, fromIndex) {
      var index = fromIndex - 1, length = array2.length;
      while (++index < length) {
        if (array2[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array2, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array2[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e2) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array2 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array2), isRight = dir < 0, arrLength = isArr ? array2.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array2, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array2[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined$1 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array2) {
        var length = array2.length;
        return length ? array2[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array2, n2) {
        return shuffleSelf(copyArray(array2), baseClamp(n2, 0, array2.length));
      }
      function arrayShuffle(array2) {
        return shuffleSelf(copyArray(array2));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array2, key) {
        var length = array2.length;
        while (length--) {
          if (eq(array2[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index < length) {
          result2[index] = skip ? undefined$1 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array2, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array2.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array2[index], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array2, iteratee2, comparator) {
        var index = -1, length = array2.length;
        while (++index < length) {
          var value = array2[index], current = iteratee2(value);
          if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
            var computed = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array2, value, start, end) {
        var length = array2.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array2[start++] = value;
        }
        return array2;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array2, depth, predicate, isStrict, result2) {
        var index = -1, length = array2.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array2[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction2(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array2 = arrays[othIndex];
          if (othIndex && iteratee2) {
            array2 = arrayMap(array2, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array2.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array2.length >= 120) ? new SetCache(othIndex && array2) : undefined$1;
        }
        array2 = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last2(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject2(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject2(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array2, n2) {
        var length = array2.length;
        if (!length) {
          return;
        }
        n2 += n2 < 0 ? length : 0;
        return isIndex(n2, length) ? array2[n2] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity2];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array2, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array2;
        if (array2 === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array2, baseUnary(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array2) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array2, fromIndex, 1);
          }
        }
        return array2;
      }
      function basePullAt(array2, indexes) {
        var length = array2 ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array2, index, 1);
            } else {
              baseUnset(array2, index);
            }
          }
        }
        return array2;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n2) {
        var result2 = "";
        if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n2 % 2) {
            result2 += string;
          }
          n2 = nativeFloor(n2 / 2);
          if (n2) {
            string += string;
          }
        } while (n2);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity2), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n2) {
        var array2 = values(collection);
        return shuffleSelf(array2, baseClamp(n2, 0, array2.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity2 : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity2 : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array2, start, end) {
        var index = -1, length = array2.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array2[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array2, value, retHighest) {
        var low = 0, high = array2 == null ? low : array2.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array2[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array2, value, identity2, retHighest);
      }
      function baseSortedIndexBy(array2, value, iteratee2, retHighest) {
        var low = 0, high = array2 == null ? 0 : array2.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array2[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value : computed < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array2, iteratee2) {
        var index = -1, length = array2.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array2.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array2);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last2(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array2, predicate, isDrop, fromRight) {
        var length = array2.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array2[index], index, array2)) {
        }
        return isDrop ? baseSlice(array2, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array2, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array2 = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array2, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity2;
      }
      function castPath(value, object) {
        if (isArray2(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array2, start, end) {
        var length = array2.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array2 : baseSlice(array2, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array2) {
        var index = -1, length = source.length;
        array2 || (array2 = Array2(length));
        while (++index < length) {
          array2[index] = source[index];
        }
        return array2;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn2.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              undefined$1,
              args,
              holders,
              undefined$1,
              undefined$1,
              arity - length
            );
          }
          var fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn2, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray2(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              thisArg,
              args,
              newHolders,
              argPos,
              ary2,
              arity - length
            );
          }
          var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn2 = Ctor || createCtor(fn2);
          }
          return fn2.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn2, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array2);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array2;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array2, other);
        stack.set(other, array2);
        while (++index < arrLength) {
          var arrValue = array2[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array2);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop2 : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array2 = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array2.length : 0;
        while (length--) {
          var data = array2[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e2) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
      }
      function initCloneArray(array2) {
        var length = array2.length, result2 = new array2.constructor(length);
        if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
          result2.index = array2.index;
          result2.input = array2.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject2(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray2(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction2 : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject2(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array2 = Array2(length);
          while (++index < length) {
            array2[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array2);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array2, indexes) {
        var arrLength = array2.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array2);
        while (length--) {
          var index = indexes[length];
          array2[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array2;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp2 = nativeNow(), remaining = HOT_SPAN - (stamp2 - lastCalled);
          lastCalled = stamp2;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array2, size2) {
        var index = -1, length = array2.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array2[rand];
          array2[rand] = array2[index];
          array2[index] = value;
        }
        array2.length = size2;
        return array2;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e2) {
          }
          try {
            return func + "";
          } catch (e2) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array2, size2, guard) {
        if (guard ? isIterateeCall(array2, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array2 == null ? 0 : array2.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array2, index, index += size2);
        }
        return result2;
      }
      function compact(array2) {
        var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array2[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array2 = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray2(array2) ? copyArray(array2) : [array2], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array2, values2) {
        return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array2, values2) {
        var iteratee2 = last2(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array2, values2) {
        var comparator = last2(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array2, n2, guard) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array2, n2 < 0 ? 0 : n2, length);
      }
      function dropRight(array2, n2, guard) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length - n2;
        return baseSlice(array2, 0, n2 < 0 ? 0 : n2);
      }
      function dropRightWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true) : [];
      }
      function fill2(array2, value, start, end) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array2, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array2, value, start, end);
      }
      function findIndex(array2, predicate, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array2, getIteratee(predicate, 3), index);
      }
      function findLastIndex2(array2, predicate, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array2, getIteratee(predicate, 3), index, true);
      }
      function flatten(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseFlatten(array2, 1) : [];
      }
      function flattenDeep(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseFlatten(array2, INFINITY) : [];
      }
      function flattenDepth(array2, depth) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array2, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array2) {
        return array2 && array2.length ? array2[0] : undefined$1;
      }
      function indexOf(array2, value, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array2, value, index);
      }
      function initial(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSlice(array2, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last2(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last2(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last2(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array2, separator) {
        return array2 == null ? "" : nativeJoin.call(array2, separator);
      }
      function last2(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? array2[length - 1] : undefined$1;
      }
      function lastIndexOf(array2, value, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array2, value, index) : baseFindIndex(array2, baseIsNaN, index, true);
      }
      function nth(array2, n2) {
        return array2 && array2.length ? baseNth(array2, toInteger(n2)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array2, values2) {
        return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2) : array2;
      }
      function pullAllBy(array2, values2, iteratee2) {
        return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, getIteratee(iteratee2, 2)) : array2;
      }
      function pullAllWith(array2, values2, comparator) {
        return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, undefined$1, comparator) : array2;
      }
      var pullAt = flatRest(function(array2, indexes) {
        var length = array2 == null ? 0 : array2.length, result2 = baseAt(array2, indexes);
        basePullAt(array2, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array2, predicate) {
        var result2 = [];
        if (!(array2 && array2.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array2.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array2[index];
          if (predicate(value, index, array2)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array2, indexes);
        return result2;
      }
      function reverse(array2) {
        return array2 == null ? array2 : nativeReverse.call(array2);
      }
      function slice(array2, start, end) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array2, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array2, start, end);
      }
      function sortedIndex(array2, value) {
        return baseSortedIndex(array2, value);
      }
      function sortedIndexBy(array2, value, iteratee2) {
        return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        if (length) {
          var index = baseSortedIndex(array2, value);
          if (index < length && eq(array2[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array2, value) {
        return baseSortedIndex(array2, value, true);
      }
      function sortedLastIndexBy(array2, value, iteratee2) {
        return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        if (length) {
          var index = baseSortedIndex(array2, value, true) - 1;
          if (eq(array2[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array2) {
        return array2 && array2.length ? baseSortedUniq(array2) : [];
      }
      function sortedUniqBy(array2, iteratee2) {
        return array2 && array2.length ? baseSortedUniq(array2, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSlice(array2, 1, length) : [];
      }
      function take(array2, n2, guard) {
        if (!(array2 && array2.length)) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array2, 0, n2 < 0 ? 0 : n2);
      }
      function takeRight(array2, n2, guard) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length - n2;
        return baseSlice(array2, n2 < 0 ? 0 : n2, length);
      }
      function takeRightWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last2(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last2(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array2) {
        return array2 && array2.length ? baseUniq(array2) : [];
      }
      function uniqBy(array2, iteratee2) {
        return array2 && array2.length ? baseUniq(array2, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array2, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array2 && array2.length ? baseUniq(array2, undefined$1, comparator) : [];
      }
      function unzip(array2) {
        if (!(array2 && array2.length)) {
          return [];
        }
        var length = 0;
        array2 = arrayFilter(array2, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array2, baseProperty(index));
        });
      }
      function unzipWith(array2, iteratee2) {
        if (!(array2 && array2.length)) {
          return [];
        }
        var result2 = unzip(array2);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array2, values2) {
        return isArrayLikeObject(array2) ? baseDifference(array2, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last2(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last2(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array2) {
          if (length && !array2.length) {
            array2.push(undefined$1);
          }
          return array2;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone3 = wrapperClone(parent2);
          clone3.__index__ = 0;
          clone3.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone3;
          } else {
            result2 = clone3;
          }
          var previous = clone3;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex2);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach2(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n2, guard) {
        if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n2);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString2(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n2, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n2, guard) {
        n2 = guard ? undefined$1 : n2;
        n2 = func && n2 == null ? func.length : n2;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n2);
      }
      function before(n2, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n2 <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array2 = args[start], otherArgs = castSlice(args, 0, start);
          if (array2) {
            arrayPush(otherArgs, array2);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray2(value) ? value : [value];
      }
      function clone2(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction2(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean2(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber2(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull2(value) {
        return value === null;
      }
      function isNil2(value) {
        return value == null;
      }
      function isNumber2(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString2(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined2(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString2(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity2));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick2 = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index])];
          if (value === undefined$1) {
            index = length;
            value = defaultValue;
          }
          object = isFunction2(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray2(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object)) {
            accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
          return iteratee2(accumulator, value, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize2(word) : word);
      });
      function capitalize2(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n2, guard) {
        if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        return baseRepeat(toString(string), n2);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit2) {
        if (limit2 && typeof limit2 != "number" && isIterateeCall(string, separator, limit2)) {
          separator = limit2 = undefined$1;
        }
        limit2 = limit2 === undefined$1 ? MAX_ARRAY_LENGTH : limit2 >>> 0;
        if (!limit2) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit2);
          }
        }
        return string.split(separator, limit2);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2(
          (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
          "g"
        );
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e2) {
          return isError(e2) ? e2 : new Error2(e2);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity2(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop2() {
      }
      function nthArg(n2) {
        n2 = toInteger(n2);
        return baseRest(function(args) {
          return baseNth(args, n2);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range2 = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n2, iteratee2) {
        n2 = toInteger(n2);
        if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin(n2, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n2 -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index < n2) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray2(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max2(array2) {
        return array2 && array2.length ? baseExtremum(array2, identity2, baseGt) : undefined$1;
      }
      function maxBy(array2, iteratee2) {
        return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array2) {
        return baseMean(array2, identity2);
      }
      function meanBy(array2, iteratee2) {
        return baseMean(array2, getIteratee(iteratee2, 2));
      }
      function min2(array2) {
        return array2 && array2.length ? baseExtremum(array2, identity2, baseLt) : undefined$1;
      }
      function minBy(array2, iteratee2) {
        return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array2) {
        return array2 && array2.length ? baseSum(array2, identity2) : 0;
      }
      function sumBy(array2, iteratee2) {
        return array2 && array2.length ? baseSum(array2, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill2;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick2;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range2;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize2;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone2;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex2;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach2;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity2;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean2;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil2;
      lodash2.isNull = isNull2;
      lodash2.isNumber = isNumber2;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString2;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined2;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last2;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max2;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min2;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop2;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach2;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n2) {
          n2 = n2 === undefined$1 ? 1 : nativeMax(toInteger(n2), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n2, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n2) {
          return this.reverse()[methodName](n2).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity2);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray2(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray2(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _2 = runInContext();
    if (freeModule) {
      (freeModule.exports = _2)._ = _2;
      freeExports._ = _2;
    } else {
      root._ = _2;
    }
  }).call(commonjsGlobal$1);
})(lodash, lodash.exports);
var defaultTheme = {};
var tuiCalendar_vue_vue_type_style_index_0_lang = "";
var tuiCalendar_vue_vue_type_style_index_1_lang = "";
const _sfc_main = defineComponent({
  __name: "tui-calendar",
  props: {
    view: {},
    useFormPopup: { type: Boolean, default: false },
    useDetailPopup: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    usageStatistics: { type: Boolean, default: false },
    gridSelection: { type: [Object, Boolean], default: true },
    week: { default: () => ({}) },
    month: { default: () => ({}) },
    timezone: { default: () => ({
      zones: [{
        timezoneName: "Asia/Shanghai",
        displayLabel: "CN",
        tooltip: "UTC+08:00"
      }]
    }) },
    theme: { default: () => lodash.exports.cloneDeep(defaultTheme) },
    template: { default: () => ({}) },
    calendars: {},
    events: {},
    eventFilter: { type: Function, default: () => () => [] }
  },
  emits: [
    "selectDateTime",
    "beforeCreateEvent",
    "beforeUpdateEvent",
    "beforeDeleteEvent",
    "afterRenderEvent",
    "clickDayName",
    "clickEvent"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const Calendar$1 = markRaw(Calendar);
    const emitEvents = [
      "selectDateTime",
      "beforeCreateEvent",
      "beforeUpdateEvent",
      "beforeDeleteEvent",
      "afterRenderEvent",
      "clickDayName",
      "clickEvent"
    ];
    const emits = __emit;
    const attrs = useAttrs();
    const props = __props;
    const instance = ref();
    watchEffect(() => {
      if (!instance.value) {
        return;
      }
      instance.value.changeView(lodash.exports.cloneDeep(props.view));
    });
    watchEffect(() => {
      if (!instance.value) {
        return;
      }
      instance.value.setOptions({
        useFormPopup: lodash.exports.cloneDeep(props.useFormPopup),
        useDetailPopup: lodash.exports.cloneDeep(props.useDetailPopup),
        isReadOnly: lodash.exports.cloneDeep(props.isReadOnly),
        eventFilter: lodash.exports.cloneDeep(props.eventFilter),
        week: lodash.exports.cloneDeep(props.week),
        month: lodash.exports.cloneDeep(props.month),
        gridSelection: lodash.exports.cloneDeep(props.gridSelection),
        timezone: lodash.exports.cloneDeep(props.timezone),
        template: lodash.exports.cloneDeep(props.template)
      });
    });
    watchEffect(() => {
      if (!instance.value) {
        return;
      }
      instance.value.setTheme(lodash.exports.cloneDeep(props.theme));
    });
    watchEffect(() => {
      if (!instance.value) {
        return;
      }
      instance.value.setCalendars(lodash.exports.cloneDeep(props.calendars));
    });
    watchEffect(() => {
      if (!instance.value) {
        return;
      }
      instance.value.clear();
      instance.value.createEvents(lodash.exports.cloneDeep(props.events));
    });
    const containerRef = ref(null);
    onMounted(() => {
      instance.value = new Calendar$1(unrefElement(containerRef), {
        defaultView: lodash.exports.cloneDeep(props.view),
        useFormPopup: lodash.exports.cloneDeep(props.useFormPopup),
        useDetailPopup: lodash.exports.cloneDeep(props.useDetailPopup),
        isReadOnly: lodash.exports.cloneDeep(props.isReadOnly),
        usageStatistics: lodash.exports.cloneDeep(props.usageStatistics),
        week: lodash.exports.cloneDeep(props.week),
        month: lodash.exports.cloneDeep(props.month),
        gridSelection: lodash.exports.cloneDeep(props.gridSelection),
        timezone: lodash.exports.cloneDeep(props.timezone),
        theme: lodash.exports.cloneDeep(props.theme),
        template: lodash.exports.cloneDeep(props.template),
        calendars: lodash.exports.cloneDeep(props.calendars),
        eventFilter: props.eventFilter
      });
      console.info("[info] instance.value", instance.value);
      addEvtListeners();
      instance.value.createEvents(lodash.exports.cloneDeep(props.events));
    });
    onBeforeUnmount(() => {
      instance.value.off();
      instance.value.destroy();
    });
    function addEvtListeners() {
      Object.keys(attrs).forEach((eventName) => {
        if (emitEvents.find((x2) => x2 === eventName)) {
          instance.value.on(eventName, (...args) => emits(eventName, ...args));
        }
      });
    }
    __expose({
      getRootElement() {
        return unrefElement(containerRef);
      },
      getInstance() {
        return instance.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: "toastui-vue-calendar"
      }, null, 512);
    };
  }
});
const install = (app) => {
  app.component("TuiCalendar", _sfc_main);
};
const TuiCalendar = _sfc_main;
TuiCalendar.install = install;
export { TuiCalendar, TuiCalendar as default };
