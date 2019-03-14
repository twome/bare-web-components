;window.parcelRequire = undefined;
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"scripts/custom-el-reg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDOMNodesToCustomEls = void 0;

/*
	Custom element registry
*/

/* side-effects: true */
var d = document,
    w = window; // Get a reference to the "classed" version of every instance (DOM element) of each custom element we've made

var registerDOMNodesToCustomEls = function registerDOMNodesToCustomEls(customEls, existingInstances) {
  var customElInstances = existingInstances || new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var customEl = _step.value;
      if (!customElInstances.get(customEl)) customElInstances.set(customEl, []);
      var instancesForElType = customElInstances.get(customEl);
      d.querySelectorAll(customEl.selector).forEach(function (el) {
        var classedEl = new customEl(el);
        instancesForElType.push(classedEl);
        customElInstances.set(customEl, instancesForElType);
      });
    };

    for (var _iterator = customEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return customElInstances;
};

exports.registerDOMNodesToCustomEls = registerDOMNodesToCustomEls;
},{}],"../node_modules/lodash-es/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var _default = last;
exports.default = _default;
},{}],"../peers/luxon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = exports.LocalZone = exports.InvalidZone = exports.IANAZone = exports.FixedOffsetZone = exports.Zone = exports.Info = exports.Interval = exports.Duration = exports.DateTime = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/

/**
 * @private
 */
// TYPES
function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES


function hasIntl() {
  return typeof Intl !== "undefined" && Intl.DateTimeFormat;
}

function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}

function hasRelative() {
  return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
} // OBJECTS AND ARRAYS


function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
} // NUMBERS AND STRINGS


function numberBetween(thing, bottom, top) {
  return isNumber(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x


function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}

function parseMillis(fraction) {
  if (isUndefined(fraction)) {
    return NaN;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits) {
  var towardZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS


function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)


function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}

function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING


function parseZoneInfo(ts, offsetFormat, locale) {
  var timeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330


function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10) || 0,
      offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION


function normalizeObject(obj, normalizer) {
  var ignoreUnknown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var normalized = {};

  for (var u in obj) {
    if (obj.hasOwnProperty(u)) {
      var v = obj[u];
      var numericValue = Number(v);

      if (v !== null && !Number.isNaN(numericValue)) {
        var mapped = normalizer(u, ignoreUnknown);

        if (mapped) {
          normalized[mapped] = numericValue;
        }
      }
    }
  }

  return normalized;
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
/**
 * @private
 */

var n = "numeric",
    s = "short",
    l = "long",
    d2 = "2-digit";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: d2
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: d2,
  second: d2
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: d2,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: d2
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: d2,
  second: d2
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: d2
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: d2,
  second: d2
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: d2,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: d2,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: l
};

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function _months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}

var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function _weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}

var _meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];

function _eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return _meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return _weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return _months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return _eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count) {
  var numeric = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "always";
  var narrow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var units = {
    years: ["year", "yr."],
    quarters: ["quarer", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next ".concat(units[unit][0]);

      case -1:
        return isDay ? "yesterday" : "last ".concat(units[unit][0]);

      case 0:
        return isDay ? "today" : "this ".concat(units[unit][0]);

      default: // fall through

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      fmtUnit = narrow ? units[unit][1] : fmtValue === 1 ? units[unit][0] : unit;
  return isInPast ? "".concat(fmtValue, " ").concat(fmtUnit, " ago") : "in ".concat(fmtValue, " ").concat(fmtUnit);
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
} // these aren't really private, but nor are they really useful to document

/**
 * @private
 */


var LuxonError =
/*#__PURE__*/
function (_Error) {
  _inherits(LuxonError, _Error);

  function LuxonError() {
    _classCallCheck(this, LuxonError);

    return _possibleConstructorReturn(this, _getPrototypeOf(LuxonError).apply(this, arguments));
  }

  return LuxonError;
}(_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError =
/*#__PURE__*/
function (_LuxonError) {
  _inherits(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    _classCallCheck(this, InvalidDateTimeError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidDateTimeError).call(this, "Invalid DateTime: ".concat(reason.toMessage())));
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */


var InvalidIntervalError =
/*#__PURE__*/
function (_LuxonError2) {
  _inherits(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    _classCallCheck(this, InvalidIntervalError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidIntervalError).call(this, "Invalid Interval: ".concat(reason.toMessage())));
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */


var InvalidDurationError =
/*#__PURE__*/
function (_LuxonError3) {
  _inherits(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    _classCallCheck(this, InvalidDurationError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidDurationError).call(this, "Invalid Duration: ".concat(reason.toMessage())));
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */


var ConflictingSpecificationError =
/*#__PURE__*/
function (_LuxonError4) {
  _inherits(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    _classCallCheck(this, ConflictingSpecificationError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConflictingSpecificationError).apply(this, arguments));
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */


var InvalidUnitError =
/*#__PURE__*/
function (_LuxonError5) {
  _inherits(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    _classCallCheck(this, InvalidUnitError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidUnitError).call(this, "Invalid unit ".concat(unit)));
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */


var InvalidArgumentError =
/*#__PURE__*/
function (_LuxonError6) {
  _inherits(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    _classCallCheck(this, InvalidArgumentError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentError).apply(this, arguments));
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */


var ZoneIsAbstractError =
/*#__PURE__*/
function (_LuxonError7) {
  _inherits(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    _classCallCheck(this, ZoneIsAbstractError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZoneIsAbstractError).call(this, "Zone is an abstract class"));
  }

  return ZoneIsAbstractError;
}(LuxonError);
/* eslint no-unused-vars: "off" */

/**
 * @interface
 */


var Zone =
/*#__PURE__*/
function () {
  function Zone() {
    _classCallCheck(this, Zone);
  }

  _createClass(Zone, [{
    key: "offsetName",

    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    value: function offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */

  }, {
    key: "offset",
    value: function offset(ts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */

  }, {
    key: "equals",
    value: function equals(otherZone) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

exports.Zone = Zone;
var singleton = null;

var LocalZone =
/*#__PURE__*/
function (_Zone) {
  _inherits(LocalZone, _Zone);

  function LocalZone() {
    _classCallCheck(this, LocalZone);

    return _possibleConstructorReturn(this, _getPrototypeOf(LocalZone).apply(this, arguments));
  }

  _createClass(LocalZone, [{
    key: "offsetName",
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;
      return parseZoneInfo(ts, format, locale);
    }
  }, {
    key: "offset",
    value: function offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }
  }, {
    key: "equals",
    value: function equals(otherZone) {
      return otherZone.type === "local";
    }
  }, {
    key: "type",
    get: function get() {
      return "local";
    }
  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

exports.LocalZone = LocalZone;
var matchingRegex = RegExp("^".concat(ianaRegex.source, "$"));
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      _parsed = _slicedToArray(parsed, 7),
      fMonth = _parsed[1],
      fDay = _parsed[2],
      fYear = _parsed[3],
      fHour = _parsed[4],
      fMinute = _parsed[5],
      fSecond = _parsed[6];

  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var IANAZone =
/*#__PURE__*/
function (_Zone2) {
  _inherits(IANAZone, _Zone2);

  _createClass(IANAZone, null, [{
    key: "isValidSpecifier",
    value: function isValidSpecifier(s) {
      return s && s.match(matchingRegex);
    }
  }, {
    key: "isValidZone",
    value: function isValidZone(zone) {
      try {
        new Intl.DateTimeFormat("en-US", {
          timeZone: zone
        }).format();
        return true;
      } catch (e) {
        return false;
      }
    } // Etc/GMT+8 -> -480

  }, {
    key: "parseGMTOffset",
    value: function parseGMTOffset(specifier) {
      if (specifier) {
        var _match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

        if (_match) {
          return -60 * parseInt(_match[1]);
        }
      }

      return null;
    }
  }]);

  function IANAZone(name) {
    var _this;

    _classCallCheck(this, IANAZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IANAZone).call(this));
    _this.zoneName = name;
    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }

  _createClass(IANAZone, [{
    key: "offsetName",
    value: function offsetName(ts, _ref2) {
      var format = _ref2.format,
          locale = _ref2.locale;
      return parseZoneInfo(ts, format, locale, this.zoneName);
    }
  }, {
    key: "offset",
    value: function offset(ts) {
      var date = new Date(ts),
          dtf = makeDTF(this.zoneName),
          _ref3 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
          _ref4 = _slicedToArray(_ref3, 6),
          year = _ref4[0],
          month = _ref4[1],
          day = _ref4[2],
          hour = _ref4[3],
          minute = _ref4[4],
          second = _ref4[5];

      var asUTC = objToLocalTS({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: 0
      });
      var asTS = date.valueOf();
      asTS -= asTS % 1000;
      return (asUTC - asTS) / (60 * 1000);
    }
  }, {
    key: "equals",
    value: function equals(otherZone) {
      return otherZone.type === "iana" && otherZone.zoneName === this.zoneName;
    }
  }, {
    key: "type",
    get: function get() {
      return "iana";
    }
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

exports.IANAZone = IANAZone;
var singleton$1 = null;

function hoursMinutesOffset(z) {
  var hours = Math.trunc(z.fixed / 60),
      minutes = Math.abs(z.fixed % 60),
      sign = hours > 0 ? "+" : "-",
      base = sign + Math.abs(hours);
  return minutes > 0 ? "".concat(base, ":").concat(padStart(minutes, 2)) : base;
}

var FixedOffsetZone =
/*#__PURE__*/
function (_Zone3) {
  _inherits(FixedOffsetZone, _Zone3);

  _createClass(FixedOffsetZone, null, [{
    key: "instance",
    value: function instance(offset) {
      return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }
  }, {
    key: "parseSpecifier",
    value: function parseSpecifier(s) {
      if (s) {
        var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

        if (r) {
          return new FixedOffsetZone(signedOffset(r[1], r[2]));
        }
      }

      return null;
    }
  }, {
    key: "utcInstance",
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this2;

    _classCallCheck(this, FixedOffsetZone);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FixedOffsetZone).call(this));
    _this2.fixed = offset;
    return _this2;
  }

  _createClass(FixedOffsetZone, [{
    key: "offsetName",
    value: function offsetName() {
      return this.name;
    }
  }, {
    key: "offset",
    value: function offset() {
      return this.fixed;
    }
  }, {
    key: "equals",
    value: function equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
  }, {
    key: "type",
    get: function get() {
      return "fixed";
    }
  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC".concat(hoursMinutesOffset(this));
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

exports.FixedOffsetZone = FixedOffsetZone;

var InvalidZone =
/*#__PURE__*/
function (_Zone4) {
  _inherits(InvalidZone, _Zone4);

  function InvalidZone(zoneName) {
    var _this3;

    _classCallCheck(this, InvalidZone);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidZone).call(this));
    _this3.zoneName = zoneName;
    return _this3;
  }

  _createClass(InvalidZone, [{
    key: "offsetName",
    value: function offsetName() {
      return null;
    }
  }, {
    key: "offset",
    value: function offset() {
      return NaN;
    }
  }, {
    key: "equals",
    value: function equals() {
      return false;
    }
  }, {
    key: "type",
    get: function get() {
      return "invalid";
    }
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);
/**
 * @private
 */


exports.InvalidZone = InvalidZone;

function _normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return LocalZone.instance;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return new IANAZone(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (_typeof(input) === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings =
/*#__PURE__*/
function () {
  function Settings() {
    _classCallCheck(this, Settings);
  }

  _createClass(Settings, null, [{
    key: "resetCaches",

    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    value: function resetCaches() {
      Locale.resetCache();
    }
  }, {
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return (defaultZone || LocalZone.instance).name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = _normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

exports.Settings = Settings;

function stringifyTokens(splits, tokenToString) {
  var s = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = splits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var token = _step.value;

      if (token.literal) {
        s += token.val;
      } else {
        s += tokenToString(token.val);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return s;
}

var tokenToObject = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter =
/*#__PURE__*/
function () {
  _createClass(Formatter, null, [{
    key: "create",
    value: function create(locale) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Formatter(locale, opts);
    }
  }, {
    key: "parseFormat",
    value: function parseFormat(fmt) {
      var current = null,
          currentFull = "",
          bracketed = false;
      var splits = [];

      for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);

        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }

          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({
              literal: false,
              val: currentFull
            });
          }

          currentFull = c;
          current = c;
        }
      }

      if (currentFull.length > 0) {
        splits.push({
          literal: bracketed,
          val: currentFull
        });
      }

      return splits;
    }
  }]);

  function Formatter(locale, formatOpts) {
    _classCallCheck(this, Formatter);

    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  _createClass(Formatter, [{
    key: "formatWithSystemDefault",
    value: function formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }

      var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    }
  }, {
    key: "formatDateTimeParts",
    value: function formatDateTimeParts(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.formatToParts();
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.resolvedOptions();
    }
  }, {
    key: "num",
    value: function num(n) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // we get some perf out of doing this here, annoyingly
      if (this.opts.forceSimple) {
        return padStart(n, p);
      }

      var opts = Object.assign({}, this.opts);

      if (p > 0) {
        opts.padTo = p;
      }

      return this.loc.numberFormatter(opts).format(n);
    }
  }, {
    key: "formatDateTimeFromString",
    value: function formatDateTimeFromString(dt, fmt) {
      var _this4 = this;

      var knownEnglish = this.loc.listingMode() === "en";

      var string = function string(opts, extract) {
        return _this4.loc.extract(dt, opts, extract);
      },
          formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        var hours = Math.trunc(dt.offset / 60),
            minutes = Math.abs(dt.offset % 60),
            sign = hours >= 0 ? "+" : "-",
            base = "".concat(sign).concat(Math.abs(hours));

        switch (opts.format) {
          case "short":
            return "".concat(sign).concat(_this4.num(Math.abs(hours), 2), ":").concat(_this4.num(minutes, 2));

          case "narrow":
            return minutes > 0 ? "".concat(base, ":").concat(minutes) : base;

          case "techie":
            return "".concat(sign).concat(_this4.num(Math.abs(hours), 2)).concat(_this4.num(minutes, 2));

          default:
            throw new RangeError("Value format ".concat(opts.format, " is out of range for property format"));
        }
      },
          meridiem = function meridiem() {
        return knownEnglish ? meridiemForDateTime(dt) : string({
          hour: "numeric",
          hour12: true
        }, "dayperiod");
      },
          month = function month(length, standalone) {
        return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
          month: length
        } : {
          month: length,
          day: "numeric"
        }, "month");
      },
          weekday = function weekday(length, standalone) {
        return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
          weekday: length
        } : {
          weekday: length,
          month: "long",
          day: "numeric"
        }, "weekday");
      },
          maybeMacro = function maybeMacro(token) {
        var macro = tokenToObject[token];

        if (macro) {
          return _this4.formatWithSystemDefault(dt, macro);
        } else {
          return token;
        }
      },
          era = function era(length) {
        return knownEnglish ? eraForDateTime(dt, length) : string({
          era: length
        }, "era");
      },
          tokenToString = function tokenToString(token) {
        var outputCal = _this4.loc.outputCalendar; // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles

        switch (token) {
          // ms
          case "S":
            return _this4.num(dt.millisecond);

          case "u": // falls through

          case "SSS":
            return _this4.num(dt.millisecond, 3);
          // seconds

          case "s":
            return _this4.num(dt.second);

          case "ss":
            return _this4.num(dt.second, 2);
          // minutes

          case "m":
            return _this4.num(dt.minute);

          case "mm":
            return _this4.num(dt.minute, 2);
          // hours

          case "h":
            return _this4.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

          case "hh":
            return _this4.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

          case "H":
            return _this4.num(dt.hour);

          case "HH":
            return _this4.num(dt.hour, 2);
          // offset

          case "Z":
            // like +6
            return formatOffset({
              format: "narrow",
              allowZ: _this4.opts.allowZ
            });

          case "ZZ":
            // like +06:00
            return formatOffset({
              format: "short",
              allowZ: _this4.opts.allowZ
            });

          case "ZZZ":
            // like +0600
            return formatOffset({
              format: "techie",
              allowZ: false
            });

          case "ZZZZ":
            // like EST
            return dt.offsetNameShort;

          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.offsetNameLong;
          // zone

          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems

          case "a":
            return meridiem();
          // dates

          case "d":
            return outputCal ? string({
              day: "numeric"
            }, "day") : _this4.num(dt.day);

          case "dd":
            return outputCal ? string({
              day: "2-digit"
            }, "day") : _this4.num(dt.day, 2);
          // weekdays - standalone

          case "c":
            // like 1
            return _this4.num(dt.weekday);

          case "ccc":
            // like 'Tues'
            return weekday("short", true);

          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);

          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format

          case "E":
            // like 1
            return _this4.num(dt.weekday);

          case "EEE":
            // like 'Tues'
            return weekday("short", false);

          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);

          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone

          case "L":
            // like 1
            return outputCal ? string({
              month: "numeric",
              day: "numeric"
            }, "month") : _this4.num(dt.month);

          case "LL":
            // like 01, doesn't seem to work
            return outputCal ? string({
              month: "2-digit",
              day: "numeric"
            }, "month") : _this4.num(dt.month, 2);

          case "LLL":
            // like Jan
            return month("short", true);

          case "LLLL":
            // like January
            return month("long", true);

          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format

          case "M":
            // like 1
            return outputCal ? string({
              month: "numeric"
            }, "month") : _this4.num(dt.month);

          case "MM":
            // like 01
            return outputCal ? string({
              month: "2-digit"
            }, "month") : _this4.num(dt.month, 2);

          case "MMM":
            // like Jan
            return month("short", false);

          case "MMMM":
            // like January
            return month("long", false);

          case "MMMMM":
            // like J
            return month("narrow", false);
          // years

          case "y":
            // like 2014
            return outputCal ? string({
              year: "numeric"
            }, "year") : _this4.num(dt.year);

          case "yy":
            // like 14
            return outputCal ? string({
              year: "2-digit"
            }, "year") : _this4.num(dt.year.toString().slice(-2), 2);

          case "yyyy":
            // like 0012
            return outputCal ? string({
              year: "numeric"
            }, "year") : _this4.num(dt.year, 4);

          case "yyyyyy":
            // like 000012
            return outputCal ? string({
              year: "numeric"
            }, "year") : _this4.num(dt.year, 6);
          // eras

          case "G":
            // like AD
            return era("short");

          case "GG":
            // like Anno Domini
            return era("long");

          case "GGGGG":
            return era("narrow");

          case "kk":
            return _this4.num(dt.weekYear.toString().slice(-2), 2);

          case "kkkk":
            return _this4.num(dt.weekYear, 4);

          case "W":
            return _this4.num(dt.weekNumber);

          case "WW":
            return _this4.num(dt.weekNumber, 2);

          case "o":
            return _this4.num(dt.ordinal);

          case "ooo":
            return _this4.num(dt.ordinal, 3);

          case "q":
            // like 1
            return _this4.num(dt.quarter);

          case "qq":
            // like 01
            return _this4.num(dt.quarter, 2);

          case "X":
            return _this4.num(Math.floor(dt.ts / 1000));

          case "x":
            return _this4.num(dt.ts);

          default:
            return maybeMacro(token);
        }
      };

      return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    }
  }, {
    key: "formatDurationFromString",
    value: function formatDurationFromString(dur, fmt) {
      var _this5 = this;

      var tokenToField = function tokenToField(token) {
        switch (token[0]) {
          case "S":
            return "millisecond";

          case "s":
            return "second";

          case "m":
            return "minute";

          case "h":
            return "hour";

          case "d":
            return "day";

          case "M":
            return "month";

          case "y":
            return "year";

          default:
            return null;
        }
      },
          tokenToString = function tokenToString(lildur) {
        return function (token) {
          var mapped = tokenToField(token);

          if (mapped) {
            return _this5.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      },
          tokens = Formatter.parseFormat(fmt),
          realTokens = tokens.reduce(function (found, _ref5) {
        var literal = _ref5.literal,
            val = _ref5.val;
        return literal ? found : found.concat(val);
      }, []),
          collapsed = dur.shiftTo.apply(dur, _toConsumableArray(realTokens.map(tokenToField).filter(function (t) {
        return t;
      })));

      return stringifyTokens(tokens, tokenToString(collapsed));
    }
  }]);

  return Formatter;
}();

var intlDTCache = {};

function getCachedDTF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachendINF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachendRTF(locString) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = JSON.stringify([locString, opts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-".concat(outputCalendar);
      }

      if (numberingSystem) {
        localeStr += "-nu-".concat(numberingSystem);
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter =
/*#__PURE__*/
function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    _classCallCheck(this, PolyNumberFormatter);

    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachendINF(intl, intlOpts);
    }
  }

  _createClass(PolyNumberFormatter, [{
    key: "format",
    value: function format(i) {
      if (this.inf) {
        var fixed = this.floor ? Math.floor(i) : i;
        return this.inf.format(fixed);
      } else {
        // to match the browser's numberformatter defaults
        var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

        return padStart(_fixed, this.padTo);
      }
    }
  }]);

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter =
/*#__PURE__*/
function () {
  function PolyDateFormatter(dt, intl, opts) {
    _classCallCheck(this, PolyDateFormatter);

    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  _createClass(PolyDateFormatter, [{
    key: "format",
    value: function format() {
      if (this.hasIntl) {
        return this.dtf.format(this.dt.toJSDate());
      } else {
        var tokenFormat = formatString(this.opts),
            loc = Locale.create("en-US");
        return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
      }
    }
  }, {
    key: "formatToParts",
    value: function formatToParts() {
      if (this.hasIntl && hasFormatToParts()) {
        return this.dtf.formatToParts(this.dt.toJSDate());
      } else {
        // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
        // and IMO it's too weird to have an uncanny valley like that
        return [];
      }
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      if (this.hasIntl) {
        return this.dtf.resolvedOptions();
      } else {
        return {
          locale: "en-US",
          numberingSystem: "latn",
          outputCalendar: "gregory"
        };
      }
    }
  }]);

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter =
/*#__PURE__*/
function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    _classCallCheck(this, PolyRelFormatter);

    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachendRTF(intl, opts);
    }
  }

  _createClass(PolyRelFormatter, [{
    key: "format",
    value: function format(count, unit) {
      if (this.rtf) {
        return this.rtf.format(count, unit);
      } else {
        return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
      }
    }
  }, {
    key: "formatToParts",
    value: function formatToParts(count, unit) {
      if (this.rtf) {
        return this.rtf.formatToParts(count, unit);
      } else {
        return [];
      }
    }
  }]);

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale =
/*#__PURE__*/
function () {
  _createClass(Locale, null, [{
    key: "fromOpts",
    value: function fromOpts(opts) {
      return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    }
  }, {
    key: "create",
    value: function create(locale, numberingSystem, outputCalendar) {
      var defaultToEN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var specifiedLocale = locale || Settings.defaultLocale,
          // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
      localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
          numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
          outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
      return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    }
  }, {
    key: "resetCache",
    value: function resetCache() {
      sysLocaleCache = null;
      intlDTCache = {};
      intlNumCache = {};
    }
  }, {
    key: "fromObject",
    value: function fromObject() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref6.locale,
          numberingSystem = _ref6.numberingSystem,
          outputCalendar = _ref6.outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar);
    }
  }]);

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    _classCallCheck(this, Locale);

    var _parseLocaleString = parseLocaleString(locale),
        _parseLocaleString2 = _slicedToArray(_parseLocaleString, 3),
        parsedLocale = _parseLocaleString2[0],
        parsedNumberingSystem = _parseLocaleString2[1],
        parsedOutputCalendar = _parseLocaleString2[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  _createClass(Locale, [{
    key: "listingMode",
    value: function listingMode() {
      var defaultOK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var intl = hasIntl(),
          hasFTP = intl && hasFormatToParts(),
          isActuallyEn = this.isEnglish(),
          hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

      if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
        return "error";
      } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
        return "en";
      } else {
        return "intl";
      }
    }
  }, {
    key: "clone",
    value: function clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
      }
    }
  }, {
    key: "redefaultToEN",
    value: function redefaultToEN() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.clone(Object.assign({}, alts, {
        defaultToEN: true
      }));
    }
  }, {
    key: "redefaultToSystem",
    value: function redefaultToSystem() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.clone(Object.assign({}, alts, {
        defaultToEN: false
      }));
    }
  }, {
    key: "months",
    value: function months(length) {
      var _this6 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return listStuff(this, length, defaultOK, _months, function () {
        var intl = format ? {
          month: length,
          day: "numeric"
        } : {
          month: length
        },
            formatStr = format ? "format" : "standalone";

        if (!_this6.monthsCache[formatStr][length]) {
          _this6.monthsCache[formatStr][length] = mapMonths(function (dt) {
            return _this6.extract(dt, intl, "month");
          });
        }

        return _this6.monthsCache[formatStr][length];
      });
    }
  }, {
    key: "weekdays",
    value: function weekdays(length) {
      var _this7 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return listStuff(this, length, defaultOK, _weekdays, function () {
        var intl = format ? {
          weekday: length,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: length
        },
            formatStr = format ? "format" : "standalone";

        if (!_this7.weekdaysCache[formatStr][length]) {
          _this7.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
            return _this7.extract(dt, intl, "weekday");
          });
        }

        return _this7.weekdaysCache[formatStr][length];
      });
    }
  }, {
    key: "meridiems",
    value: function meridiems() {
      var _this8 = this;

      var defaultOK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return listStuff(this, undefined, defaultOK, function () {
        return _meridiems;
      }, function () {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!_this8.meridiemCache) {
          var intl = {
            hour: "numeric",
            hour12: true
          };
          _this8.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
            return _this8.extract(dt, intl, "dayperiod");
          });
        }

        return _this8.meridiemCache;
      });
    }
  }, {
    key: "eras",
    value: function eras(length) {
      var _this9 = this;

      var defaultOK = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return listStuff(this, length, defaultOK, _eras, function () {
        var intl = {
          era: length
        }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
        // to definitely enumerate them.

        if (!_this9.eraCache[length]) {
          _this9.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
            return _this9.extract(dt, intl, "era");
          });
        }

        return _this9.eraCache[length];
      });
    }
  }, {
    key: "extract",
    value: function extract(dt, intlOpts, field) {
      var df = this.dtFormatter(dt, intlOpts),
          results = df.formatToParts(),
          matching = results.find(function (m) {
        return m.type.toLowerCase() === field;
      });
      return matching ? matching.value : null;
    }
  }, {
    key: "numberFormatter",
    value: function numberFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
      // (in contrast, the rest of the condition is used heavily)
      return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
  }, {
    key: "dtFormatter",
    value: function dtFormatter(dt) {
      var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
  }, {
    key: "relFormatter",
    value: function relFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    }
  }, {
    key: "isEnglish",
    value: function isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
  }, {
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */


function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^".concat(full, "$"));
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref7, ex) {
      var _ref8 = _slicedToArray(_ref7, 3),
          mergedVals = _ref8[0],
          mergedZone = _ref8[1],
          cursor = _ref8[2];

      var _ex = ex(m, cursor),
          _ex2 = _slicedToArray(_ex, 3),
          val = _ex2[0],
          zone = _ex2[1],
          next = _ex2[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i2 = 0; _i2 < patterns.length; _i2++) {
    var _patterns$_i = _slicedToArray(patterns[_i2], 2),
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];

    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInt(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("".concat(isoTimeBaseRegex.source).concat(offsetRegex.source, "?")),
    isoTimeExtensionRegex = RegExp("(?:T".concat(isoTimeRegex.source, ")?")),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp("".concat(isoTimeBaseRegex.source, " ?(?:").concat(offsetRegex.source, "|(").concat(ianaRegex.source, "))?")),
    sqlTimeExtensionRegex = RegExp("(?: ".concat(sqlTimeRegex.source, ")?"));

function extractISOYmd(match, cursor) {
  var item = {
    year: parseInt(match[cursor]),
    month: parseInt(match[cursor + 1]) || 1,
    day: parseInt(match[cursor + 2]) || 1
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: parseInt(match[cursor]) || 0,
    minute: parseInt(match[cursor + 1]) || 0,
    second: parseInt(match[cursor + 2]) || 0,
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? new IANAZone(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?|(-?\d{1,9})W)$/;

function extractISODuration(match) {
  var _match2 = _slicedToArray(match, 9),
      yearStr = _match2[1],
      monthStr = _match2[2],
      dayStr = _match2[3],
      hourStr = _match2[4],
      minuteStr = _match2[5],
      secondStr = _match2[6],
      millisecondsStr = _match2[7],
      weekStr = _match2[8];

  return [{
    years: parseInt(yearStr),
    months: parseInt(monthStr),
    weeks: parseInt(weekStr),
    days: parseInt(dayStr),
    hours: parseInt(hourStr),
    minutes: parseInt(minuteStr),
    seconds: parseInt(secondStr),
    milliseconds: parseMillis(millisecondsStr)
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInt(yearStr)) : parseInt(yearStr),
    month: monthStr.length === 2 ? parseInt(monthStr, 10) : monthsShort.indexOf(monthStr) + 1,
    day: parseInt(dayStr),
    hour: parseInt(hourStr),
    minute: parseInt(minuteStr)
  };
  if (secondStr) result.second = parseInt(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var _match3 = _slicedToArray(match, 12),
      weekdayStr = _match3[1],
      dayStr = _match3[2],
      monthStr = _match3[3],
      yearStr = _match3[4],
      hourStr = _match3[5],
      minuteStr = _match3[6],
      secondStr = _match3[7],
      obsOffset = _match3[8],
      milOffset = _match3[9],
      offHourStr = _match3[10],
      offMinuteStr = _match3[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var _match4 = _slicedToArray(match, 8),
      weekdayStr = _match4[1],
      dayStr = _match4[2],
      monthStr = _match4[3],
      yearStr = _match4[4],
      hourStr = _match4[5],
      minuteStr = _match4[6],
      secondStr = _match4[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var _match5 = _slicedToArray(match, 8),
      weekdayStr = _match5[1],
      monthStr = _match5[2],
      dayStr = _match5[3],
      hourStr = _match5[4],
      minuteStr = _match5[5],
      secondStr = _match5[6],
      yearStr = _match5[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}
/**
 * @private
 */


function parseISODate(s) {
  return parse(s, [combineRegexes(isoYmdRegex, isoTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset)], [combineRegexes(isoWeekRegex, isoTimeExtensionRegex), combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset)], [combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex), combineExtractors(extractISOOrdinalData, extractISOTime)], [combineRegexes(isoTimeRegex), combineExtractors(extractISOTime, extractISOOffset)]);
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

function parseSQL(s) {
  return parse(s, [combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone)], [combineRegexes(sqlTimeRegex), combineExtractors(extractISOTime, extractISOOffset, extractIANAZone)]);
}

var Invalid =
/*#__PURE__*/
function () {
  function Invalid(reason, explanation) {
    _classCallCheck(this, Invalid);

    this.reason = reason;
    this.explanation = explanation;
  }

  _createClass(Invalid, [{
    key: "toMessage",
    value: function toMessage() {
      if (this.explanation) {
        return "".concat(this.reason, ": ").concat(this.explanation);
      } else {
        return this.reason;
      }
    }
  }]);

  return Invalid;
}();

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts) {
  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration =
/*#__PURE__*/
function () {
  /**
   * @private
   */
  function Duration(config) {
    _classCallCheck(this, Duration);

    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  _createClass(Duration, [{
    key: "toFormat",

    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @return {string}
     */
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // reverse-compat since 1.2; we always round down now, never up, and we do it by default
      var fmtOpts = Object.assign({}, opts, {
        floor: opts.round !== false && opts.floor !== false
      });
      return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    }
    /**
     * Returns a Javascript object with this Duration's values.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */

  }, {
    key: "toObject",
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return {};
      var base = Object.assign({}, this.values);

      if (opts.includeConfig) {
        base.conversionAccuracy = this.conversionAccuracy;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }

      return base;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */

  }, {
    key: "toISO",
    value: function toISO() {
      // we could use the formatter, but this is an easier way to get the minimum string
      if (!this.isValid) return null;
      var s = "P";
      if (this.years !== 0) s += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
      if (this.days !== 0 || this.weeks !== 0) s += this.days + this.weeks * 7 + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
      if (this.hours !== 0) s += this.hours + "H";
      if (this.minutes !== 0) s += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0) s += this.seconds + this.milliseconds / 1000 + "S";
      if (s === "P") s += "T0S";
      return s;
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toISO();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.toISO();
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.as("milliseconds");
    }
    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */

  }, {
    key: "plus",
    value: function plus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration),
          result = {};

      for (var _i3 = 0; _i3 < orderedUnits.length; _i3++) {
        var k = orderedUnits[_i3];

        if (dur.values.hasOwnProperty(k) || this.values.hasOwnProperty(k)) {
          result[k] = dur.get(k) + this.get(k);
        }
      }

      return clone(this, {
        values: result
      }, true);
    }
    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */

  }, {
    key: "minus",
    value: function minus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration);
      return this.plus(dur.negate());
    }
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
     * @return {number}
     */

  }, {
    key: "get",
    value: function get(unit) {
      return this[Duration.normalizeUnit(unit)];
    }
    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */

  }, {
    key: "set",
    value: function set(values) {
      var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit));
      return clone(this, {
        values: mixed
      });
    }
    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */

  }, {
    key: "reconfigure",
    value: function reconfigure() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref9.locale,
          numberingSystem = _ref9.numberingSystem,
          conversionAccuracy = _ref9.conversionAccuracy;

      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem
      }),
          opts = {
        loc: loc
      };

      if (conversionAccuracy) {
        opts.conversionAccuracy = conversionAccuracy;
      }

      return clone(this, opts);
    }
    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */

  }, {
    key: "as",
    value: function as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @return {Duration}
     */

  }, {
    key: "normalize",
    value: function normalize() {
      if (!this.isValid) return this;
      var vals = this.toObject();
      normalizeValues(this.matrix, vals);
      return Duration.fromObject(vals);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */

  }, {
    key: "shiftTo",
    value: function shiftTo() {
      for (var _len5 = arguments.length, units = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        units[_key5] = arguments[_key5];
      }

      if (!this.isValid) return this;

      if (units.length === 0) {
        return this;
      }

      units = units.map(function (u) {
        return Duration.normalizeUnit(u);
      });
      var built = {},
          accumulated = {},
          vals = this.toObject();
      var lastUnit;
      normalizeValues(this.matrix, vals);

      for (var _i4 = 0; _i4 < orderedUnits.length; _i4++) {
        var k = orderedUnits[_i4];

        if (units.indexOf(k) >= 0) {
          lastUnit = k;
          var own = 0; // anything we haven't boiled down yet should get boiled to this unit

          for (var ak in accumulated) {
            if (accumulated.hasOwnProperty(ak)) {
              own += this.matrix[ak][k] * accumulated[ak];
              accumulated[ak] = 0;
            }
          } // plus anything that's already in this unit


          if (isNumber(vals[k])) {
            own += vals[k];
          }

          var i = Math.trunc(own);
          built[k] = i;
          accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
          // plus anything further down the chain that should be rolled up in to this

          for (var down in vals) {
            if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
              convert(this.matrix, vals, down, built, k);
            }
          } // otherwise, keep it in the wings to boil it later

        } else if (isNumber(vals[k])) {
          accumulated[k] = vals[k];
        }
      } // anything leftover becomes the decimal for the last unit


      if (lastUnit) {
        for (var key in accumulated) {
          if (accumulated.hasOwnProperty(key)) {
            if (accumulated[key] !== 0) {
              built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
          }
        }
      }

      return clone(this, {
        values: built
      }, true);
    }
    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */

  }, {
    key: "negate",
    value: function negate() {
      if (!this.isValid) return this;
      var negated = {};

      var _arr2 = Object.keys(this.values);

      for (var _i5 = 0; _i5 < _arr2.length; _i5++) {
        var k = _arr2[_i5];
        negated[k] = -this.values[k];
      }

      return clone(this, {
        values: negated
      }, true);
    }
    /**
     * Get the years.
     * @type {number}
     */

  }, {
    key: "equals",

    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    value: function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }

      if (!this.loc.equals(other.loc)) {
        return false;
      }

      for (var _i6 = 0; _i6 < orderedUnits.length; _i6++) {
        var u = orderedUnits[_i6];

        if (this.values[u] !== other.values[u]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "locale",

    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }], [{
    key: "fromMillis",
    value: function fromMillis(count, opts) {
      return Duration.fromObject(Object.assign({
        milliseconds: count
      }, opts));
    }
    /**
     * Create a Duration from a Javascript object with keys like 'years' and 'hours.
     * If this object is empty then zero  milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {string} [obj.locale='en-US'] - the locale to use
     * @param {string} obj.numberingSystem - the numbering system to use
     * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */

  }, {
    key: "fromObject",
    value: function fromObject(obj) {
      if (obj == null || _typeof(obj) !== "object") {
        throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got ".concat(_typeof(obj)));
      }

      return new Duration({
        values: normalizeObject(obj, Duration.normalizeUnit, true),
        loc: Locale.fromObject(obj),
        conversionAccuracy: obj.conversionAccuracy
      });
    }
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M4DT12H30M5S').toObject() //=> { years: 3, months: 6, day: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */

  }, {
    key: "fromISO",
    value: function fromISO(text, opts) {
      var _parseISODuration = parseISODuration(text),
          _parseISODuration2 = _slicedToArray(_parseISODuration, 1),
          parsed = _parseISODuration2[0];

      if (parsed) {
        var obj = Object.assign(parsed, opts);
        return Duration.fromObject(obj);
      } else {
        return Duration.invalid("unparsable", "the input \"".concat(text, "\" can't be parsed as ISO 8601"));
      }
    }
    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */

  }, {
    key: "invalid",
    value: function invalid(reason) {
      var explanation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
      }

      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(invalid);
      } else {
        return new Duration({
          invalid: invalid
        });
      }
    }
    /**
     * @private
     */

  }, {
    key: "normalizeUnit",
    value: function normalizeUnit(unit) {
      var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var normalized = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[unit ? unit.toLowerCase() : unit];
      if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);
      return normalized;
    }
    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */

  }, {
    key: "isDuration",
    value: function isDuration(o) {
      return o && o.isLuxonDuration || false;
    }
  }]);

  return Duration;
}();
/**
 * @private
 */


exports.Duration = Duration;

function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (_typeof(durationish) === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument ".concat(durationish, " of type ").concat(_typeof(durationish)));
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return new Invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return new Invalid("missing or invalid end");
  } else if (end < start) {
    return new Invalid("end before start", "The end of an interval must be after its start, but you had start=".concat(start.toISO(), " and end=").concat(end.toISO()));
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output*** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toFormat}, and {@link toDuration}.
 */


var Interval =
/*#__PURE__*/
function () {
  /**
   * @private
   */
  function Interval(config) {
    _classCallCheck(this, Interval);

    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  _createClass(Interval, [{
    key: "length",

    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    value: function length() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
    }
    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @return {number}
     */

  }, {
    key: "count",
    value: function count() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      if (!this.isValid) return NaN;
      var start = this.start.startOf(unit),
          end = this.end.startOf(unit);
      return Math.floor(end.diff(start, unit).get(unit)) + 1;
    }
    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */

  }, {
    key: "hasSame",
    value: function hasSame(unit) {
      return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
    }
    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: "isAfter",
    value: function isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: "isBefore",
    value: function isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e <= dateTime;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: "contains",
    value: function contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    }
    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */

  }, {
    key: "set",
    value: function set() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          start = _ref10.start,
          end = _ref10.end;

      if (!this.isValid) return this;
      return Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...[DateTime]} dateTimes - the unit of time to count.
     * @return {[Interval]}
     */

  }, {
    key: "splitAt",
    value: function splitAt() {
      if (!this.isValid) return [];

      for (var _len6 = arguments.length, dateTimes = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        dateTimes[_key6] = arguments[_key6];
      }

      var sorted = dateTimes.map(friendlyDateTime).sort(),
          results = [];
      var s = this.s,
          i = 0;

      while (s < this.e) {
        var added = sorted[i] || this.e,
            next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        i += 1;
      }

      return results;
    }
    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {[Interval]}
     */

  }, {
    key: "splitBy",
    value: function splitBy(duration) {
      var dur = friendlyDuration(duration);

      if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
        return [];
      }

      var s = this.s,
          added,
          next;
      var results = [];

      while (s < this.e) {
        added = s.plus(dur);
        next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
      }

      return results;
    }
    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {[Interval]}
     */

  }, {
    key: "divideEqually",
    value: function divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }
    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: "overlaps",
    value: function overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }
    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: "abutsStart",
    value: function abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: "abutsEnd",
    value: function abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }
    /**
     * Return whether this Interval engulfs the start and end of the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: "engulfs",
    value: function engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    }
    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: "equals",
    value: function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }

      return this.s.equals(other.s) && this.e.equals(other.e);
    }
    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, i.e., the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */

  }, {
    key: "intersection",
    value: function intersection(other) {
      if (!this.isValid) return this;
      var s = this.s > other.s ? this.s : other.s,
          e = this.e < other.e ? this.e : other.e;

      if (s > e) {
        return null;
      } else {
        return Interval.fromDateTimes(s, e);
      }
    }
    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */

  }, {
    key: "union",
    value: function union(other) {
      if (!this.isValid) return this;
      var s = this.s < other.s ? this.s : other.s,
          e = this.e > other.e ? this.e : other.e;
      return Interval.fromDateTimes(s, e);
    }
    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */

  }, {
    key: "difference",

    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {[Interval]}
     */
    value: function difference() {
      var _this10 = this;

      for (var _len7 = arguments.length, intervals = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        intervals[_key7] = arguments[_key7];
      }

      return Interval.xor([this].concat(intervals)).map(function (i) {
        return _this10.intersection(i);
      }).filter(function (i) {
        return i && !i.isEmpty();
      });
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!this.isValid) return INVALID$1;
      return "[".concat(this.s.toISO(), " \u2013 ").concat(this.e.toISO(), ")");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime.toISO}
     * @return {string}
     */

  }, {
    key: "toISO",
    value: function toISO(opts) {
      if (!this.isValid) return INVALID$1;
      return "".concat(this.s.toISO(opts), "/").concat(this.e.toISO(opts));
    }
    /**
     * Returns a string representation of this Interval formatted according to the specified format string.
     * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
     * @param {Object} opts - options
     * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
     * @return {string}
     */

  }, {
    key: "toFormat",
    value: function toFormat(dateFormat) {
      var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref11$separator = _ref11.separator,
          separator = _ref11$separator === void 0 ? " – " : _ref11$separator;

      if (!this.isValid) return INVALID$1;
      return "".concat(this.s.toFormat(dateFormat)).concat(separator).concat(this.e.toFormat(dateFormat));
    }
    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */

  }, {
    key: "toDuration",
    value: function toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }

      return this.e.diff(this.s, unit, opts);
    }
    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */

  }, {
    key: "mapEndpoints",
    value: function mapEndpoints(mapFn) {
      return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    }
  }, {
    key: "start",

    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, i.e. that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }], [{
    key: "invalid",
    value: function invalid(reason) {
      var explanation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
      }

      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(invalid);
      } else {
        return new Interval({
          invalid: invalid
        });
      }
    }
    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */

  }, {
    key: "fromDateTimes",
    value: function fromDateTimes(start, end) {
      var builtStart = friendlyDateTime(start),
          builtEnd = friendlyDateTime(end);
      return new Interval({
        start: builtStart,
        end: builtEnd,
        invalid: validateStartEnd(builtStart, builtEnd)
      });
    }
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */

  }, {
    key: "after",
    value: function after(start, duration) {
      var dur = friendlyDuration(duration),
          dt = friendlyDateTime(start);
      return Interval.fromDateTimes(dt, dt.plus(dur));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */

  }, {
    key: "before",
    value: function before(end, duration) {
      var dur = friendlyDuration(duration),
          dt = friendlyDateTime(end);
      return Interval.fromDateTimes(dt.minus(dur), dt);
    }
    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */

  }, {
    key: "fromISO",
    value: function fromISO(text, opts) {
      var _split = (text || "").split("/", 2),
          _split2 = _slicedToArray(_split, 2),
          s = _split2[0],
          e = _split2[1];

      if (s && e) {
        var start = DateTime.fromISO(s, opts),
            end = DateTime.fromISO(e, opts);

        if (start.isValid && end.isValid) {
          return Interval.fromDateTimes(start, end);
        }

        if (start.isValid) {
          var dur = Duration.fromISO(e, opts);

          if (dur.isValid) {
            return Interval.after(start, dur);
          }
        } else if (end.isValid) {
          var _dur = Duration.fromISO(s, opts);

          if (_dur.isValid) {
            return Interval.before(end, _dur);
          }
        }
      }

      return Interval.invalid("unparsable", "the input \"".concat(text, "\" can't be parsed asISO 8601"));
    }
    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */

  }, {
    key: "isInterval",
    value: function isInterval(o) {
      return o && o.isLuxonInterval || false;
    }
  }, {
    key: "merge",
    value: function merge(intervals) {
      var _intervals$sort$reduc = intervals.sort(function (a, b) {
        return a.s - b.s;
      }).reduce(function (_ref12, item) {
        var _ref13 = _slicedToArray(_ref12, 2),
            sofar = _ref13[0],
            current = _ref13[1];

        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      }, [[], null]),
          _intervals$sort$reduc2 = _slicedToArray(_intervals$sort$reduc, 2),
          found = _intervals$sort$reduc2[0],
          final = _intervals$sort$reduc2[1];

      if (final) {
        found.push(final);
      }

      return found;
    }
    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */

  }, {
    key: "xor",
    value: function xor(intervals) {
      var _Array$prototype;

      var start = null,
          currentCount = 0;

      var results = [],
          ends = intervals.map(function (i) {
        return [{
          time: i.s,
          type: "s"
        }, {
          time: i.e,
          type: "e"
        }];
      }),
          flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(ends)),
          arr = flattened.sort(function (a, b) {
        return a.time - b.time;
      });

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;
          currentCount += i.type === "s" ? 1 : -1;

          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval.fromDateTimes(start, i.time));
            }

            start = null;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return Interval.merge(results);
    }
  }]);

  return Interval;
}();
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */


exports.Interval = Interval;

var Info =
/*#__PURE__*/
function () {
  function Info() {
    _classCallCheck(this, Info);
  }

  _createClass(Info, null, [{
    key: "hasDST",

    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    value: function hasDST() {
      var zone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Settings.defaultZone;
      var proto = DateTime.local().setZone(zone).set({
        month: 12
      });
      return !zone.universal && proto.offset !== proto.set({
        month: 6
      }).offset;
    }
    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */

  }, {
    key: "isValidIANAZone",
    value: function isValidIANAZone(zone) {
      return !!IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
    }
    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone.isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */

  }, {
    key: "normalizeZone",
    value: function normalizeZone(input) {
      return _normalizeZone(input, Settings.defaultZone);
    }
    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {[string]}
     */

  }, {
    key: "months",
    value: function months() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref14$locale = _ref14.locale,
          locale = _ref14$locale === void 0 ? null : _ref14$locale,
          _ref14$numberingSyste = _ref14.numberingSystem,
          numberingSystem = _ref14$numberingSyste === void 0 ? null : _ref14$numberingSyste,
          _ref14$outputCalendar = _ref14.outputCalendar,
          outputCalendar = _ref14$outputCalendar === void 0 ? "gregory" : _ref14$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length);
    }
    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {[string]}
     */

  }, {
    key: "monthsFormat",
    value: function monthsFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref15$locale = _ref15.locale,
          locale = _ref15$locale === void 0 ? null : _ref15$locale,
          _ref15$numberingSyste = _ref15.numberingSystem,
          numberingSystem = _ref15$numberingSyste === void 0 ? null : _ref15$numberingSyste,
          _ref15$outputCalendar = _ref15.outputCalendar,
          outputCalendar = _ref15$outputCalendar === void 0 ? "gregory" : _ref15$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
    }
    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {[string]}
     */

  }, {
    key: "weekdays",
    value: function weekdays() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref16$locale = _ref16.locale,
          locale = _ref16$locale === void 0 ? null : _ref16$locale,
          _ref16$numberingSyste = _ref16.numberingSystem,
          numberingSystem = _ref16$numberingSyste === void 0 ? null : _ref16$numberingSyste;

      return Locale.create(locale, numberingSystem, null).weekdays(length);
    }
    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @return {[string]}
     */

  }, {
    key: "weekdaysFormat",
    value: function weekdaysFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref17$locale = _ref17.locale,
          locale = _ref17$locale === void 0 ? null : _ref17$locale,
          _ref17$numberingSyste = _ref17.numberingSystem,
          numberingSystem = _ref17$numberingSyste === void 0 ? null : _ref17$numberingSyste;

      return Locale.create(locale, numberingSystem, null).weekdays(length, true);
    }
    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {[string]}
     */

  }, {
    key: "meridiems",
    value: function meridiems() {
      var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref18$locale = _ref18.locale,
          locale = _ref18$locale === void 0 ? null : _ref18$locale;

      return Locale.create(locale).meridiems();
    }
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {[string]}
     */

  }, {
    key: "eras",
    value: function eras() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "short";

      var _ref19 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref19$locale = _ref19.locale,
          locale = _ref19$locale === void 0 ? null : _ref19$locale;

      return Locale.create(locale, null, "gregory").eras(length);
    }
    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `zones`: whether this environment supports IANA timezones
     * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
     * * `intl`: whether this environment supports general internationalization
     * * `relative`: whether this environment supports relative time formatting
     * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
     * @return {Object}
     */

  }, {
    key: "features",
    value: function features() {
      var intl = false,
          intlTokens = false,
          zones = false,
          relative = hasRelative();

      if (hasIntl()) {
        intl = true;
        intlTokens = hasFormatToParts();

        try {
          zones = new Intl.DateTimeFormat("en", {
            timeZone: "America/New_York"
          }).resolvedOptions().timeZone === "America/New_York";
        } catch (e) {
          zones = false;
        }
      }

      return {
        intl: intl,
        intlTokens: intlTokens,
        zones: zones,
        relative: relative
      };
    }
  }]);

  return Info;
}();

exports.Info = Info;

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i7 = 0; _i7 < differs.length; _i7++) {
    var _differs$_i = _slicedToArray(differs[_i7], 2),
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus(_defineProperty({}, unit, delta));

      if (highWater > later) {
        cursor = highWater.minus(_defineProperty({}, unit, 1));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff(earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      _highOrderDiffs2 = _slicedToArray(_highOrderDiffs, 4),
      cursor = _highOrderDiffs2[0],
      results = _highOrderDiffs2[1],
      highWater = _highOrderDiffs2[2],
      lowestOrder = _highOrderDiffs2[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus(_defineProperty({}, lowestOrder, 1));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, _toConsumableArray(lowerOrderUnits)).plus(duration);
  } else {
    return duration;
  }
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex) {
  var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
    return i;
  };
  return {
    regex: regex,
    deser: function deser(_ref20) {
      var _ref21 = _slicedToArray(_ref20, 1),
          s = _ref21[0];

      return post(parseInt(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref22) {
        var _ref23 = _slicedToArray(_ref22, 1),
            s = _ref23[0];

        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref24) {
      var _ref25 = _slicedToArray(_ref24, 3),
          h = _ref25[1],
          m = _ref25[2];

      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref26) {
      var _ref27 = _slicedToArray(_ref26, 1),
          s = _ref27[0];

      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = /\d/,
      two = /\d{2}/,
      three = /\d{3}/,
      four = /\d{4}/,
      oneOrTwo = /\d{1,2}/,
      oneToThree = /\d{1,3}/,
      twoToFour = /\d{2,4}/,
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref28) {
        var _ref29 = _slicedToArray(_ref28, 1),
            s = _ref29[0];

        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(/\d{1,6}/);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(/\d{4,6}/);

      case "yyyyyy":
        return intUnit(/\d{6}/);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", false, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", false, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", true, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", true, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(/\d{1,9}/);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(/([+-]\d{1,2})(?::(\d{2}))?/, 2);

      case "ZZZ":
        return offset(/([+-]\d{1,2})(\d{2})?/, 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-]{1,256}(\/[a-z_+-]{1,256}(\/[a-z_+-]{1,256})?)?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return "".concat(f, "(").concat(r.source, ")");
  }, "");
  return ["^".concat(re, "$"), units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = new IANAZone(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = Formatter.parseFormat(format),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        _buildRegex2 = _slicedToArray(_buildRegex, 2),
        regexString = _buildRegex2[0],
        handlers = _buildRegex2[1],
        regex = RegExp(regexString, "i"),
        _match6 = match(input, regex, handlers),
        _match7 = _slicedToArray(_match6, 2),
        rawMatches = _match7[0],
        matches = _match7[1],
        _ref30 = matches ? dateTimeFromMatches(matches) : [null, null],
        _ref31 = _slicedToArray(_ref30, 2),
        result = _ref31[0],
        zone = _ref31[1];

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}

function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified ".concat(value, " (of type ").concat(_typeof(value), ") as a ").concat(unit, ", which is invalid"));
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}

function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}

function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}

function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}

function hasInvalidWeekData(obj) {
  var validYear = isNumber(obj.weekYear),
      validWeek = numberBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = numberBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  var validYear = isNumber(obj.year),
      validOrdinal = numberBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  var validYear = isNumber(obj.year),
      validMonth = numberBetween(obj.month, 1, 12),
      validDay = numberBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = numberBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = numberBetween(minute, 0, 59),
      validSecond = numberBetween(second, 0, 59),
      validMillisecond = numberBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"".concat(zone.name, "\" is not supported"));
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      _fixOffset2 = _slicedToArray(_fixOffset, 2),
      ts = _fixOffset2[0],
      o = _fixOffset2[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"".concat(text, "\" can't be parsed as ").concat(format)));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: true,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref32) {
  var _ref32$suppressSecond = _ref32.suppressSeconds,
      suppressSeconds = _ref32$suppressSecond === void 0 ? false : _ref32$suppressSecond,
      _ref32$suppressMillis = _ref32.suppressMilliseconds,
      suppressMilliseconds = _ref32$suppressMillis === void 0 ? false : _ref32$suppressMillis,
      _ref32$includeOffset = _ref32.includeOffset,
      includeOffset = _ref32$includeOffset === void 0 ? true : _ref32$includeOffset,
      _ref32$includeZone = _ref32.includeZone,
      includeZone = _ref32$includeZone === void 0 ? false : _ref32$includeZone,
      _ref32$spaceZone = _ref32.spaceZone,
      spaceZone = _ref32$spaceZone === void 0 ? false : _ref32$spaceZone;
  var fmt = "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit ? unit.toLowerCase() : unit];
  if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _i8 = 0; _i8 < orderedUnits$1.length; _i8++) {
    var u = orderedUnits$1[_i8];

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      _objToTS2 = _slicedToArray(_objToTS, 2),
      ts = _objToTS2[0],
      o = _objToTS2[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = opts.units[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var unit = _step3.value;
      var count = differ(unit);

      if (Math.abs(count) >= 1) {
        return format(count, unit);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime =
/*#__PURE__*/
function () {
  /**
   * @access private
   */
  function DateTime(config) {
    _classCallCheck(this, DateTime);

    var zone = config.zone || Settings.defaultZone,
        invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      c = unchanged ? config.old.c : tsToObj(this.ts, zone.offset(this.ts));
      o = unchanged ? config.old.o : zone.offset(this.ts);
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} year - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  _createClass(DateTime, [{
    key: "get",
    // INFO

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    value: function get(unit) {
      return this[unit];
    }
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */

  }, {
    key: "resolvedLocaleOpts",

    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */
    value: function resolvedLocaleOpts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
          locale = _Formatter$create$res.locale,
          numberingSystem = _Formatter$create$res.numberingSystem,
          calendar = _Formatter$create$res.calendar;

      return {
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: calendar
      };
    } // TRANSFORM

    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */

  }, {
    key: "toUTC",
    value: function toUTC() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.setZone(FixedOffsetZone.instance(offset), opts);
    }
    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */

  }, {
    key: "toLocal",
    value: function toLocal() {
      return this.setZone(Settings.defaultZone || new LocalZone());
    }
    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same UTC timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'utc+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */

  }, {
    key: "setZone",
    value: function setZone(zone) {
      var _ref33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref33$keepLocalTime = _ref33.keepLocalTime,
          keepLocalTime = _ref33$keepLocalTime === void 0 ? false : _ref33$keepLocalTime,
          _ref33$keepCalendarTi = _ref33.keepCalendarTime,
          keepCalendarTime = _ref33$keepCalendarTi === void 0 ? false : _ref33$keepCalendarTi;

      zone = _normalizeZone(zone, Settings.defaultZone);

      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return DateTime.invalid(unsupportedZone(zone));
      } else {
        var newTS = keepLocalTime || keepCalendarTime // keepCalendarTime is the deprecated name for keepLocalTime
        ? this.ts + (this.o - zone.offset(this.ts)) * 60 * 1000 : this.ts;
        return clone$1(this, {
          ts: newTS,
          zone: zone
        });
      }
    }
    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */

  }, {
    key: "reconfigure",
    value: function reconfigure() {
      var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref34.locale,
          numberingSystem = _ref34.numberingSystem,
          outputCalendar = _ref34.outputCalendar;

      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: outputCalendar
      });
      return clone$1(this, {
        loc: loc
      });
    }
    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */

  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      return this.reconfigure({
        locale: locale
      });
    }
    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */

  }, {
    key: "set",
    value: function set(values) {
      if (!this.isValid) return this;
      var normalized = normalizeObject(values, normalizeUnit),
          settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
      var mixed;

      if (settingWeekStuff) {
        mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
      } else if (!isUndefined(normalized.ordinal)) {
        mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
      } else {
        mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
        // use the last day of the right month

        if (isUndefined(normalized.day)) {
          mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }

      var _objToTS3 = objToTS(mixed, this.o, this.zone),
          _objToTS4 = _slicedToArray(_objToTS3, 2),
          ts = _objToTS4[0],
          o = _objToTS4[1];

      return clone$1(this, {
        ts: ts,
        o: o
      });
    }
    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.local().plus(123) //~> in 123 milliseconds
     * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 1 hr, 13 min
     * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 1 hr, 13 min
     * @return {DateTime}
     */

  }, {
    key: "plus",
    value: function plus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration);
      return clone$1(this, adjustTime(this, dur));
    }
    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
    */

  }, {
    key: "minus",
    value: function minus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration).negate();
      return clone$1(this, adjustTime(this, dur));
    }
    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */

  }, {
    key: "startOf",
    value: function startOf(unit) {
      if (!this.isValid) return this;
      var o = {},
          normalizedUnit = Duration.normalizeUnit(unit);

      switch (normalizedUnit) {
        case "years":
          o.month = 1;
        // falls through

        case "quarters":
        case "months":
          o.day = 1;
        // falls through

        case "weeks":
        case "days":
          o.hour = 0;
        // falls through

        case "hours":
          o.minute = 0;
        // falls through

        case "minutes":
          o.second = 0;
        // falls through

        case "seconds":
          o.millisecond = 0;
          break;

        case "milliseconds":
          break;

        default:
          throw new InvalidUnitError(unit);
      }

      if (normalizedUnit === "weeks") {
        o.weekday = 1;
      }

      if (normalizedUnit === "quarters") {
        var q = Math.ceil(this.month / 3);
        o.month = (q - 1) * 3 + 1;
      }

      return this.set(o);
    }
    /**
     * "Set" this DateTime to the end (i.e. the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */

  }, {
    key: "endOf",
    value: function endOf(unit) {
      return this.isValid ? this.plus(_defineProperty({}, unit, 1)).startOf(unit).minus(1) : this;
    } // OUTPUT

    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options
     * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */

  }, {
    key: "toFormat",
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
    }
    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation.
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @example DateTime.local().toLocaleString(); //=> 4/20/2017
     * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
     * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
     * @return {string}
     */

  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATE_SHORT;
      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
    }
    /**
     * Returns an array of format "parts", i.e. individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.local().toLocaleString(); //=> [
     *                                    //=>   { type: 'day', value: '25' },
     *                                    //=>   { type: 'literal', value: '/' },
     *                                    //=>   { type: 'month', value: '05' },
     *                                    //=>   { type: 'literal', value: '/' },
     *                                    //=>   { type: 'year', value: '1982' }
     *                                    //=> ]
     */

  }, {
    key: "toLocaleParts",
    value: function toLocaleParts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @return {string}
     */

  }, {
    key: "toISO",
    value: function toISO() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) {
        return null;
      }

      return "".concat(this.toISODate(), "T").concat(this.toISOTime(opts));
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @return {string}
     */

  }, {
    key: "toISODate",
    value: function toISODate() {
      return toTechFormat(this, "yyyy-MM-dd");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */

  }, {
    key: "toISOWeekDate",
    value: function toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc().hour(7).minute(34).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().hour(7).minute(34).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @return {string}
     */

  }, {
    key: "toISOTime",
    value: function toISOTime() {
      var _ref35 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref35$suppressMillis = _ref35.suppressMilliseconds,
          suppressMilliseconds = _ref35$suppressMillis === void 0 ? false : _ref35$suppressMillis,
          _ref35$suppressSecond = _ref35.suppressSeconds,
          suppressSeconds = _ref35$suppressSecond === void 0 ? false : _ref35$suppressSecond,
          _ref35$includeOffset = _ref35.includeOffset,
          includeOffset = _ref35$includeOffset === void 0 ? true : _ref35$includeOffset;

      return toTechTimeFormat(this, {
        suppressSeconds: suppressSeconds,
        suppressMilliseconds: suppressMilliseconds,
        includeOffset: includeOffset
      });
    }
    /**
     * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */

  }, {
    key: "toRFC2822",
    value: function toRFC2822() {
      return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */

  }, {
    key: "toHTTP",
    value: function toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string}
     */

  }, {
    key: "toSQLDate",
    value: function toSQLDate() {
      return toTechFormat(this, "yyyy-MM-dd");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */

  }, {
    key: "toSQLTime",
    value: function toSQLTime() {
      var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref36$includeOffset = _ref36.includeOffset,
          includeOffset = _ref36$includeOffset === void 0 ? true : _ref36$includeOffset,
          _ref36$includeZone = _ref36.includeZone,
          includeZone = _ref36$includeZone === void 0 ? false : _ref36$includeZone;

      return toTechTimeFormat(this, {
        includeOffset: includeOffset,
        includeZone: includeZone,
        spaceZone: true
      });
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */

  }, {
    key: "toSQL",
    value: function toSQL() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) {
        return null;
      }

      return "".concat(this.toSQLDate(), " ").concat(this.toSQLTime(opts));
    }
    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.isValid ? this.toISO() : INVALID$2;
    }
    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
     * @return {number}
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toMillis();
    }
    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */

  }, {
    key: "toMillis",
    value: function toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    /**
     * Returns the epoch seconds of this DateTime.
     * @return {number}
     */

  }, {
    key: "toSeconds",
    value: function toSeconds() {
      return this.isValid ? this.ts / 1000 : NaN;
    }
    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toISO();
    }
    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */

  }, {
    key: "toBSON",
    value: function toBSON() {
      return this.toJSDate();
    }
    /**
     * Returns a Javascript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */

  }, {
    key: "toObject",
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return {};
      var base = Object.assign({}, this.c);

      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }

      return base;
    }
    /**
     * Returns a Javascript Date equivalent to this DateTime.
     * @return {Date}
     */

  }, {
    key: "toJSDate",
    value: function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    } // COMPARE

    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */

  }, {
    key: "diff",
    value: function diff(otherDateTime) {
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "milliseconds";
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!this.isValid || !otherDateTime.isValid) {
        return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
      }

      var durOpts = Object.assign({
        locale: this.locale,
        numberingSystem: this.numberingSystem
      }, opts);

      var units = maybeArray(unit).map(Duration.normalizeUnit),
          otherIsLater = otherDateTime.valueOf() > this.valueOf(),
          earlier = otherIsLater ? this : otherDateTime,
          later = otherIsLater ? otherDateTime : this,
          diffed = _diff(earlier, later, units, durOpts);

      return otherIsLater ? diffed.negate() : diffed;
    }
    /**
     * Return the difference between this DateTime and right now.
     * See {@link diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */

  }, {
    key: "diffNow",
    value: function diffNow() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.diff(DateTime.local(), unit, opts);
    }
    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval}
     */

  }, {
    key: "until",
    value: function until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }
    /**
     * Return whether this DateTime is in the same unit of time as another DateTime
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
     * @return {boolean}
     */

  }, {
    key: "hasSame",
    value: function hasSame(otherDateTime, unit) {
      if (!this.isValid) return false;

      if (unit === "millisecond") {
        return this.valueOf() === otherDateTime.valueOf();
      } else {
        var inputMs = otherDateTime.valueOf();
        return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
      }
    }
    /**
     * Equality check
     * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === ~dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */

  }, {
    key: "equals",
    value: function equals(other) {
      return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }
    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeDateFormat, **which it probably doesn't yet!** (As of this writing, only Chrome supports that). Rounds down by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "year", "quarter", "month", "week", "day", "hour", "minute", or "second"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */

  }, {
    key: "toRelative",
    value: function toRelative() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      var base = options.base || DateTime.fromObject({
        zone: this.zone
      }),
          padding = options.padding ? this < base ? -options.padding : options.padding : 0;
      return diffRelative(base, this.plus(padding), Object.assign(options, {
        numeric: "always",
        units: ["years", "months", "days", "hours", "minutes", "seconds"]
      }));
    }
    /**
     * Returns a string representation this date relative to today, such as "yesterday" or "next month"
     * platform supports Intl.RelativeDateFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "year", "quarter", "month", "week", or "day"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */

  }, {
    key: "toRelativeCalendar",
    value: function toRelativeCalendar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      return diffRelative(options.base || DateTime.fromObject({
        zone: this.zone
      }), this, Object.assign(options, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: true
      }));
    }
    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (i.e. the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? this.zone.offset(this.ts) : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "local",
    value: function local(year, month, day, hour, minute, second, millisecond) {
      if (isUndefined(year)) {
        return new DateTime({
          ts: Settings.now()
        });
      } else {
        return quickDT({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond
        }, Settings.defaultZone);
      }
    }
    /**
     * Create a DateTime in UTC
     * @param {number} year - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
     * @example DateTime.utc()                            //~> now
     * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
     * @return {DateTime}
     */

  }, {
    key: "utc",
    value: function utc(year, month, day, hour, minute, second, millisecond) {
      if (isUndefined(year)) {
        return new DateTime({
          ts: Settings.now(),
          zone: FixedOffsetZone.utcInstance
        });
      } else {
        return quickDT({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond
        }, FixedOffsetZone.utcInstance);
      }
    }
    /**
     * Create a DateTime from a Javascript Date object. Uses the default zone.
     * @param {Date} date - a Javascript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */

  }, {
    key: "fromJSDate",
    value: function fromJSDate(date) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new DateTime({
        ts: isDate(date) ? date.valueOf() : NaN,
        zone: _normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
    /**
     * Create a DateTime from a number of milliseconds since the epoch (i.e. since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: "fromMillis",
    value: function fromMillis(milliseconds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isNumber(milliseconds)) {
        throw new InvalidArgumentError("fromMillis requires a numerical input");
      } else {
        return new DateTime({
          ts: milliseconds,
          zone: _normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a number of seconds since the epoch (i.e. since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: "fromSeconds",
    value: function fromSeconds(seconds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isNumber(seconds)) {
        throw new InvalidArgumentError("fromSeconds requires a numerical input");
      } else {
        return new DateTime({
          ts: seconds * 1000,
          zone: _normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [obj.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01T00'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @return {DateTime}
     */

  }, {
    key: "fromObject",
    value: function fromObject(obj) {
      var zoneToUse = _normalizeZone(obj.zone, Settings.defaultZone);

      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }

      var tsNow = Settings.now(),
          offsetProvis = zoneToUse.offset(tsNow),
          normalized = normalizeObject(obj, normalizeUnit, true),
          containsOrdinal = !isUndefined(normalized.ordinal),
          containsGregorYear = !isUndefined(normalized.year),
          containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
          containsGregor = containsGregorYear || containsGregorMD,
          definiteWeekDef = normalized.weekYear || normalized.weekNumber,
          loc = Locale.fromObject(obj); // cases:
      // just a weekday -> this week's instance of that weekday, no worries
      // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
      // (gregorian month or day) + ordinal -> error
      // otherwise just use weeks or ordinals or gregorian, depending on what's specified

      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }

      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }

      var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

      var units,
          defaultValues,
          objNow = tsToObj(tsNow, offsetProvis);

      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = gregorianToWeek(objNow);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits$1;
        defaultValues = defaultUnitValues;
      } // set default values for missing stuff


      var foundFirst = false;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = units[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var u = _step4.value;
          var v = normalized[u];

          if (!isUndefined(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        } // make sure the values we have are in range

      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
          invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

      if (invalid) {
        return DateTime.invalid(invalid);
      } // compute the actual time


      var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
          _objToTS5 = objToTS(gregorian, offsetProvis, zoneToUse),
          _objToTS6 = _slicedToArray(_objToTS5, 2),
          tsFinal = _objToTS6[0],
          offsetFinal = _objToTS6[1],
          inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc
      }); // gregorian data + weekday serves only to validate


      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of ".concat(normalized.weekday, " and a date of ").concat(inst.toISO()));
      }

      return inst;
    }
    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */

  }, {
    key: "fromISO",
    value: function fromISO(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _parseISODate = parseISODate(text),
          _parseISODate2 = _slicedToArray(_parseISODate, 2),
          vals = _parseISODate2[0],
          parsedZone = _parseISODate2[1];

      return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }
    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Tue, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */

  }, {
    key: "fromRFC2822",
    value: function fromRFC2822(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _parseRFC2822Date = parseRFC2822Date(text),
          _parseRFC2822Date2 = _slicedToArray(_parseRFC2822Date, 2),
          vals = _parseRFC2822Date2[0],
          parsedZone = _parseRFC2822Date2[1];

      return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }
    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */

  }, {
    key: "fromHTTP",
    value: function fromHTTP(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _parseHTTPDate = parseHTTPDate(text),
          _parseHTTPDate2 = _slicedToArray(_parseHTTPDate, 2),
          vals = _parseHTTPDate2[0],
          parsedZone = _parseHTTPDate2[1];

      return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }
    /**
     * Create a DateTime from an input string and format string
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: "fromFormat",
    value: function fromFormat(text, fmt) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (isUndefined(text) || isUndefined(fmt)) {
        throw new InvalidArgumentError("fromFormat requires an input string and a format");
      }

      var _opts$locale = opts.locale,
          locale = _opts$locale === void 0 ? null : _opts$locale,
          _opts$numberingSystem = opts.numberingSystem,
          numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
          localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      }),
          _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
          _parseFromTokens2 = _slicedToArray(_parseFromTokens, 3),
          vals = _parseFromTokens2[0],
          parsedZone = _parseFromTokens2[1],
          invalid = _parseFromTokens2[2];

      if (invalid) {
        return DateTime.invalid(invalid);
      } else {
        return parseDataToDateTime(vals, parsedZone, opts, "format ".concat(fmt), text);
      }
    }
    /**
     * @deprecated use fromFormat instead
     */

  }, {
    key: "fromString",
    value: function fromString(text, fmt) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return DateTime.fromFormat(text, fmt, opts);
    }
    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */

  }, {
    key: "fromSQL",
    value: function fromSQL(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _parseSQL = parseSQL(text),
          _parseSQL2 = _slicedToArray(_parseSQL, 2),
          vals = _parseSQL2[0],
          parsedZone = _parseSQL2[1];

      return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }
    /**
     * Create an invalid DateTime.
     * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */

  }, {
    key: "invalid",
    value: function invalid(reason) {
      var explanation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
      }

      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(invalid);
      } else {
        return new DateTime({
          invalid: invalid
        });
      }
    }
    /**
     * Check if an object is a DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */

  }, {
    key: "isDateTime",
    value: function isDateTime(o) {
      return o && o.isLuxonDateTime || false;
    }
  }, {
    key: "min",
    value: function min() {
      for (var _len8 = arguments.length, dateTimes = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        dateTimes[_key8] = arguments[_key8];
      }

      return bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.min);
    }
    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */

  }, {
    key: "max",
    value: function max() {
      for (var _len9 = arguments.length, dateTimes = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        dateTimes[_key9] = arguments[_key9];
      }

      return bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.max);
    } // MISC

    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */

  }, {
    key: "fromFormatExplain",
    value: function fromFormatExplain(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$locale = options.locale,
          locale = _options$locale === void 0 ? null : _options$locale,
          _options$numberingSys = options.numberingSystem,
          numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
          localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      });
      return explainFromTokens(localeToUse, text, fmt);
    }
    /**
     * @deprecated use fromFormatExplain instead
     */

  }, {
    key: "fromStringExplain",
    value: function fromStringExplain(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return DateTime.fromFormatExplain(text, fmt, options);
    } // FORMAT PRESETS

    /**
     * {@link toLocaleString} format like 10/14/1983
     * @type {Object}
     */

  }, {
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
/**
 * @private
 */


exports.DateTime = DateTime;

function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && _typeof(dateTimeish) === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: ".concat(dateTimeish, ", of type ").concat(_typeof(dateTimeish)));
  }
}
},{}],"scripts/util-iso.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcIsoStringToDateObj = exports.filenameFromUri = exports.strSplice = exports.Stack = exports.isValidURL = void 0;

var _last = _interopRequireDefault(require("../../node_modules/lodash-es/last.js"));

var _luxon = require("../../peers/luxon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Isomorphic utilities (do not depend on objects specifically available in Node OR browsers)
// Any global-object dependencies must be included as arguments
var isValidURL = function isValidURL(str, URI) {
  try {
    new URL(str);
    return true;
  } catch (err) {
    return false;
  }
}; // Last in, first out stack. This is basically just an array, but provides a clearer interface when 
// you're supposed to be interacting with *only* the topmost element of an array


exports.isValidURL = isValidURL;

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this._stack = [];
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(newItem) {
      this._stack.push(newItem);
    }
  }, {
    key: "pop",
    value: function pop() {
      this._stack.pop();
    }
  }, {
    key: "current",
    get: function get() {
      var top = (0, _last.default)(this._stack);
      return top === undefined ? null : top;
    }
  }]);

  return Stack;
}();

exports.Stack = Stack;

var strSplice = function strSplice(str, insertionIndex, deleteLength) {
  var arr = str.split('');

  for (var _len = arguments.length, newItems = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    newItems[_key - 3] = arguments[_key];
  }

  arr.splice.apply(arr, [insertionIndex, deleteLength].concat(newItems));
  var newStr = arr.join('');
  return newStr;
};

exports.strSplice = strSplice;

var filenameFromUri = function filenameFromUri(uri) {
  return uri.substring(uri.lastIndexOf('/') + 1);
};

exports.filenameFromUri = filenameFromUri;

var utcIsoStringToDateObj = function utcIsoStringToDateObj(utcIsoString) {
  return _luxon.DateTime.fromISO(utcIsoString).toJSDate();
};

exports.utcIsoStringToDateObj = utcIsoStringToDateObj;
},{"../../node_modules/lodash-es/last.js":"../node_modules/lodash-es/last.js","../../peers/luxon.js":"../peers/luxon.js"}],"../node_modules/lodash-es/_listCacheClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _default = listCacheClear;
exports.default = _default;
},{}],"../node_modules/lodash-es/eq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var _default = eq;
exports.default = _default;
},{}],"../node_modules/lodash-es/_assocIndexOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eq = _interopRequireDefault(require("./eq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if ((0, _eq.default)(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _default = assocIndexOf;
exports.default = _default;
},{"./eq.js":"../node_modules/lodash-es/eq.js"}],"../node_modules/lodash-es/_listCacheDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = (0, _assocIndexOf.default)(data, key);

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

var _default = listCacheDelete;
exports.default = _default;
},{"./_assocIndexOf.js":"../node_modules/lodash-es/_assocIndexOf.js"}],"../node_modules/lodash-es/_listCacheGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0, _assocIndexOf.default)(data, key);
  return index < 0 ? undefined : data[index][1];
}

var _default = listCacheGet;
exports.default = _default;
},{"./_assocIndexOf.js":"../node_modules/lodash-es/_assocIndexOf.js"}],"../node_modules/lodash-es/_listCacheHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0, _assocIndexOf.default)(this.__data__, key) > -1;
}

var _default = listCacheHas;
exports.default = _default;
},{"./_assocIndexOf.js":"../node_modules/lodash-es/_assocIndexOf.js"}],"../node_modules/lodash-es/_listCacheSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0, _assocIndexOf.default)(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _default = listCacheSet;
exports.default = _default;
},{"./_assocIndexOf.js":"../node_modules/lodash-es/_assocIndexOf.js"}],"../node_modules/lodash-es/_ListCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _listCacheClear = _interopRequireDefault(require("./_listCacheClear.js"));

var _listCacheDelete = _interopRequireDefault(require("./_listCacheDelete.js"));

var _listCacheGet = _interopRequireDefault(require("./_listCacheGet.js"));

var _listCacheHas = _interopRequireDefault(require("./_listCacheHas.js"));

var _listCacheSet = _interopRequireDefault(require("./_listCacheSet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear.default;
ListCache.prototype['delete'] = _listCacheDelete.default;
ListCache.prototype.get = _listCacheGet.default;
ListCache.prototype.has = _listCacheHas.default;
ListCache.prototype.set = _listCacheSet.default;
var _default = ListCache;
exports.default = _default;
},{"./_listCacheClear.js":"../node_modules/lodash-es/_listCacheClear.js","./_listCacheDelete.js":"../node_modules/lodash-es/_listCacheDelete.js","./_listCacheGet.js":"../node_modules/lodash-es/_listCacheGet.js","./_listCacheHas.js":"../node_modules/lodash-es/_listCacheHas.js","./_listCacheSet.js":"../node_modules/lodash-es/_listCacheSet.js"}],"../node_modules/lodash-es/_stackClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListCache = _interopRequireDefault(require("./_ListCache.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache.default();
  this.size = 0;
}

var _default = stackClear;
exports.default = _default;
},{"./_ListCache.js":"../node_modules/lodash-es/_ListCache.js"}],"../node_modules/lodash-es/_stackDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

var _default = stackDelete;
exports.default = _default;
},{}],"../node_modules/lodash-es/_stackGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _default = stackGet;
exports.default = _default;
},{}],"../node_modules/lodash-es/_stackHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _default = stackHas;
exports.default = _default;
},{}],"../node_modules/lodash-es/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
var _default = freeGlobal;
exports.default = _default;
},{}],"../node_modules/lodash-es/_root.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeGlobal = _interopRequireDefault(require("./_freeGlobal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal.default || freeSelf || Function('return this')();
var _default = root;
exports.default = _default;
},{"./_freeGlobal.js":"../node_modules/lodash-es/_freeGlobal.js"}],"../node_modules/lodash-es/_Symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var Symbol = _root.default.Symbol;
var _default = Symbol;
exports.default = _default;
},{"./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_getRawTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol.default ? _Symbol.default.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _default = getRawTag;
exports.default = _default;
},{"./_Symbol.js":"../node_modules/lodash-es/_Symbol.js"}],"../node_modules/lodash-es/_objectToString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _default = objectToString;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseGetTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

var _getRawTag = _interopRequireDefault(require("./_getRawTag.js"));

var _objectToString = _interopRequireDefault(require("./_objectToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol.default ? _Symbol.default.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag.default)(value) : (0, _objectToString.default)(value);
}

var _default = baseGetTag;
exports.default = _default;
},{"./_Symbol.js":"../node_modules/lodash-es/_Symbol.js","./_getRawTag.js":"../node_modules/lodash-es/_getRawTag.js","./_objectToString.js":"../node_modules/lodash-es/_objectToString.js"}],"../node_modules/lodash-es/isObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var _default = isObject;
exports.default = _default;
},{}],"../node_modules/lodash-es/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _isObject = _interopRequireDefault(require("./isObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!(0, _isObject.default)(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = (0, _baseGetTag.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var _default = isFunction;
exports.default = _default;
},{"./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./isObject.js":"../node_modules/lodash-es/isObject.js"}],"../node_modules/lodash-es/_coreJsData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect overreaching core-js shims. */
var coreJsData = _root.default['__core-js_shared__'];
var _default = coreJsData;
exports.default = _default;
},{"./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_isMasked.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _coreJsData = _interopRequireDefault(require("./_coreJsData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData.default && _coreJsData.default.keys && _coreJsData.default.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _default = isMasked;
exports.default = _default;
},{"./_coreJsData.js":"../node_modules/lodash-es/_coreJsData.js"}],"../node_modules/lodash-es/_toSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _default = toSource;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseIsNative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFunction = _interopRequireDefault(require("./isFunction.js"));

var _isMasked = _interopRequireDefault(require("./_isMasked.js"));

var _isObject = _interopRequireDefault(require("./isObject.js"));

var _toSource = _interopRequireDefault(require("./_toSource.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!(0, _isObject.default)(value) || (0, _isMasked.default)(value)) {
    return false;
  }

  var pattern = (0, _isFunction.default)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0, _toSource.default)(value));
}

var _default = baseIsNative;
exports.default = _default;
},{"./isFunction.js":"../node_modules/lodash-es/isFunction.js","./_isMasked.js":"../node_modules/lodash-es/_isMasked.js","./isObject.js":"../node_modules/lodash-es/isObject.js","./_toSource.js":"../node_modules/lodash-es/_toSource.js"}],"../node_modules/lodash-es/_getValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _default = getValue;
exports.default = _default;
},{}],"../node_modules/lodash-es/_getNative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsNative = _interopRequireDefault(require("./_baseIsNative.js"));

var _getValue = _interopRequireDefault(require("./_getValue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0, _getValue.default)(object, key);
  return (0, _baseIsNative.default)(value) ? value : undefined;
}

var _default = getNative;
exports.default = _default;
},{"./_baseIsNative.js":"../node_modules/lodash-es/_baseIsNative.js","./_getValue.js":"../node_modules/lodash-es/_getValue.js"}],"../node_modules/lodash-es/_Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Map = (0, _getNative.default)(_root.default, 'Map');
var _default = Map;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js","./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_nativeCreate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var nativeCreate = (0, _getNative.default)(Object, 'create');
var _default = nativeCreate;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js"}],"../node_modules/lodash-es/_hashClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate.default ? (0, _nativeCreate.default)(null) : {};
  this.size = 0;
}

var _default = hashClear;
exports.default = _default;
},{"./_nativeCreate.js":"../node_modules/lodash-es/_nativeCreate.js"}],"../node_modules/lodash-es/_hashDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _default = hashDelete;
exports.default = _default;
},{}],"../node_modules/lodash-es/_hashGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate.default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

var _default = hashGet;
exports.default = _default;
},{"./_nativeCreate.js":"../node_modules/lodash-es/_nativeCreate.js"}],"../node_modules/lodash-es/_hashHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate.default ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

var _default = hashHas;
exports.default = _default;
},{"./_nativeCreate.js":"../node_modules/lodash-es/_nativeCreate.js"}],"../node_modules/lodash-es/_hashSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate.default && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

var _default = hashSet;
exports.default = _default;
},{"./_nativeCreate.js":"../node_modules/lodash-es/_nativeCreate.js"}],"../node_modules/lodash-es/_Hash.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hashClear = _interopRequireDefault(require("./_hashClear.js"));

var _hashDelete = _interopRequireDefault(require("./_hashDelete.js"));

var _hashGet = _interopRequireDefault(require("./_hashGet.js"));

var _hashHas = _interopRequireDefault(require("./_hashHas.js"));

var _hashSet = _interopRequireDefault(require("./_hashSet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear.default;
Hash.prototype['delete'] = _hashDelete.default;
Hash.prototype.get = _hashGet.default;
Hash.prototype.has = _hashHas.default;
Hash.prototype.set = _hashSet.default;
var _default = Hash;
exports.default = _default;
},{"./_hashClear.js":"../node_modules/lodash-es/_hashClear.js","./_hashDelete.js":"../node_modules/lodash-es/_hashDelete.js","./_hashGet.js":"../node_modules/lodash-es/_hashGet.js","./_hashHas.js":"../node_modules/lodash-es/_hashHas.js","./_hashSet.js":"../node_modules/lodash-es/_hashSet.js"}],"../node_modules/lodash-es/_mapCacheClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Hash = _interopRequireDefault(require("./_Hash.js"));

var _ListCache = _interopRequireDefault(require("./_ListCache.js"));

var _Map = _interopRequireDefault(require("./_Map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash.default(),
    'map': new (_Map.default || _ListCache.default)(),
    'string': new _Hash.default()
  };
}

var _default = mapCacheClear;
exports.default = _default;
},{"./_Hash.js":"../node_modules/lodash-es/_Hash.js","./_ListCache.js":"../node_modules/lodash-es/_ListCache.js","./_Map.js":"../node_modules/lodash-es/_Map.js"}],"../node_modules/lodash-es/_isKeyable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _default = isKeyable;
exports.default = _default;
},{}],"../node_modules/lodash-es/_getMapData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isKeyable = _interopRequireDefault(require("./_isKeyable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0, _isKeyable.default)(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _default = getMapData;
exports.default = _default;
},{"./_isKeyable.js":"../node_modules/lodash-es/_isKeyable.js"}],"../node_modules/lodash-es/_mapCacheDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getMapData = _interopRequireDefault(require("./_getMapData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0, _getMapData.default)(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _default = mapCacheDelete;
exports.default = _default;
},{"./_getMapData.js":"../node_modules/lodash-es/_getMapData.js"}],"../node_modules/lodash-es/_mapCacheGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getMapData = _interopRequireDefault(require("./_getMapData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0, _getMapData.default)(this, key).get(key);
}

var _default = mapCacheGet;
exports.default = _default;
},{"./_getMapData.js":"../node_modules/lodash-es/_getMapData.js"}],"../node_modules/lodash-es/_mapCacheHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getMapData = _interopRequireDefault(require("./_getMapData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0, _getMapData.default)(this, key).has(key);
}

var _default = mapCacheHas;
exports.default = _default;
},{"./_getMapData.js":"../node_modules/lodash-es/_getMapData.js"}],"../node_modules/lodash-es/_mapCacheSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getMapData = _interopRequireDefault(require("./_getMapData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0, _getMapData.default)(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _default = mapCacheSet;
exports.default = _default;
},{"./_getMapData.js":"../node_modules/lodash-es/_getMapData.js"}],"../node_modules/lodash-es/_MapCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapCacheClear = _interopRequireDefault(require("./_mapCacheClear.js"));

var _mapCacheDelete = _interopRequireDefault(require("./_mapCacheDelete.js"));

var _mapCacheGet = _interopRequireDefault(require("./_mapCacheGet.js"));

var _mapCacheHas = _interopRequireDefault(require("./_mapCacheHas.js"));

var _mapCacheSet = _interopRequireDefault(require("./_mapCacheSet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear.default;
MapCache.prototype['delete'] = _mapCacheDelete.default;
MapCache.prototype.get = _mapCacheGet.default;
MapCache.prototype.has = _mapCacheHas.default;
MapCache.prototype.set = _mapCacheSet.default;
var _default = MapCache;
exports.default = _default;
},{"./_mapCacheClear.js":"../node_modules/lodash-es/_mapCacheClear.js","./_mapCacheDelete.js":"../node_modules/lodash-es/_mapCacheDelete.js","./_mapCacheGet.js":"../node_modules/lodash-es/_mapCacheGet.js","./_mapCacheHas.js":"../node_modules/lodash-es/_mapCacheHas.js","./_mapCacheSet.js":"../node_modules/lodash-es/_mapCacheSet.js"}],"../node_modules/lodash-es/_stackSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListCache = _interopRequireDefault(require("./_ListCache.js"));

var _Map = _interopRequireDefault(require("./_Map.js"));

var _MapCache = _interopRequireDefault(require("./_MapCache.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof _ListCache.default) {
    var pairs = data.__data__;

    if (!_Map.default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new _MapCache.default(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

var _default = stackSet;
exports.default = _default;
},{"./_ListCache.js":"../node_modules/lodash-es/_ListCache.js","./_Map.js":"../node_modules/lodash-es/_Map.js","./_MapCache.js":"../node_modules/lodash-es/_MapCache.js"}],"../node_modules/lodash-es/_Stack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListCache = _interopRequireDefault(require("./_ListCache.js"));

var _stackClear = _interopRequireDefault(require("./_stackClear.js"));

var _stackDelete = _interopRequireDefault(require("./_stackDelete.js"));

var _stackGet = _interopRequireDefault(require("./_stackGet.js"));

var _stackHas = _interopRequireDefault(require("./_stackHas.js"));

var _stackSet = _interopRequireDefault(require("./_stackSet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache.default(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = _stackClear.default;
Stack.prototype['delete'] = _stackDelete.default;
Stack.prototype.get = _stackGet.default;
Stack.prototype.has = _stackHas.default;
Stack.prototype.set = _stackSet.default;
var _default = Stack;
exports.default = _default;
},{"./_ListCache.js":"../node_modules/lodash-es/_ListCache.js","./_stackClear.js":"../node_modules/lodash-es/_stackClear.js","./_stackDelete.js":"../node_modules/lodash-es/_stackDelete.js","./_stackGet.js":"../node_modules/lodash-es/_stackGet.js","./_stackHas.js":"../node_modules/lodash-es/_stackHas.js","./_stackSet.js":"../node_modules/lodash-es/_stackSet.js"}],"../node_modules/lodash-es/_arrayEach.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

var _default = arrayEach;
exports.default = _default;
},{}],"../node_modules/lodash-es/_defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineProperty = function () {
  try {
    var func = (0, _getNative.default)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _default = defineProperty;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js"}],"../node_modules/lodash-es/_baseAssignValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty = _interopRequireDefault(require("./_defineProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty.default) {
    (0, _defineProperty.default)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _default = baseAssignValue;
exports.default = _default;
},{"./_defineProperty.js":"../node_modules/lodash-es/_defineProperty.js"}],"../node_modules/lodash-es/_assignValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseAssignValue = _interopRequireDefault(require("./_baseAssignValue.js"));

var _eq = _interopRequireDefault(require("./eq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && (0, _eq.default)(objValue, value)) || value === undefined && !(key in object)) {
    (0, _baseAssignValue.default)(object, key, value);
  }
}

var _default = assignValue;
exports.default = _default;
},{"./_baseAssignValue.js":"../node_modules/lodash-es/_baseAssignValue.js","./eq.js":"../node_modules/lodash-es/eq.js"}],"../node_modules/lodash-es/_copyObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assignValue = _interopRequireDefault(require("./_assignValue.js"));

var _baseAssignValue = _interopRequireDefault(require("./_baseAssignValue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      (0, _baseAssignValue.default)(object, key, newValue);
    } else {
      (0, _assignValue.default)(object, key, newValue);
    }
  }

  return object;
}

var _default = copyObject;
exports.default = _default;
},{"./_assignValue.js":"../node_modules/lodash-es/_assignValue.js","./_baseAssignValue.js":"../node_modules/lodash-es/_baseAssignValue.js"}],"../node_modules/lodash-es/_baseTimes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

var _default = baseTimes;
exports.default = _default;
},{}],"../node_modules/lodash-es/isObjectLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var _default = isObjectLike;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseIsArguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return (0, _isObjectLike.default)(value) && (0, _baseGetTag.default)(value) == argsTag;
}

var _default = baseIsArguments;
exports.default = _default;
},{"./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/isArguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsArguments = _interopRequireDefault(require("./_baseIsArguments.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = (0, _baseIsArguments.default)(function () {
  return arguments;
}()) ? _baseIsArguments.default : function (value) {
  return (0, _isObjectLike.default)(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var _default = isArguments;
exports.default = _default;
},{"./_baseIsArguments.js":"../node_modules/lodash-es/_baseIsArguments.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/isArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var _default = isArray;
exports.default = _default;
},{}],"../node_modules/lodash-es/stubFalse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var _default = stubFalse;
exports.default = _default;
},{}],"../node_modules/lodash-es/isBuffer.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = _interopRequireDefault(require("./_root.js"));

var _stubFalse = _interopRequireDefault(require("./stubFalse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? _root.default.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || _stubFalse.default;
var _default = isBuffer;
exports.default = _default;
},{"./_root.js":"../node_modules/lodash-es/_root.js","./stubFalse.js":"../node_modules/lodash-es/stubFalse.js"}],"../node_modules/lodash-es/_isIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _default = isIndex;
exports.default = _default;
},{}],"../node_modules/lodash-es/isLength.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var _default = isLength;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseIsTypedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _isLength = _interopRequireDefault(require("./isLength.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return (0, _isObjectLike.default)(value) && (0, _isLength.default)(value.length) && !!typedArrayTags[(0, _baseGetTag.default)(value)];
}

var _default = baseIsTypedArray;
exports.default = _default;
},{"./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./isLength.js":"../node_modules/lodash-es/isLength.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/_baseUnary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _default = baseUnary;
exports.default = _default;
},{}],"../node_modules/lodash-es/_nodeUtil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeGlobal = _interopRequireDefault(require("./_freeGlobal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && _freeGlobal.default.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

var _default = nodeUtil;
exports.default = _default;
},{"./_freeGlobal.js":"../node_modules/lodash-es/_freeGlobal.js"}],"../node_modules/lodash-es/isTypedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsTypedArray = _interopRequireDefault(require("./_baseIsTypedArray.js"));

var _baseUnary = _interopRequireDefault(require("./_baseUnary.js"));

var _nodeUtil = _interopRequireDefault(require("./_nodeUtil.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil.default && _nodeUtil.default.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? (0, _baseUnary.default)(nodeIsTypedArray) : _baseIsTypedArray.default;
var _default = isTypedArray;
exports.default = _default;
},{"./_baseIsTypedArray.js":"../node_modules/lodash-es/_baseIsTypedArray.js","./_baseUnary.js":"../node_modules/lodash-es/_baseUnary.js","./_nodeUtil.js":"../node_modules/lodash-es/_nodeUtil.js"}],"../node_modules/lodash-es/_arrayLikeKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseTimes = _interopRequireDefault(require("./_baseTimes.js"));

var _isArguments = _interopRequireDefault(require("./isArguments.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

var _isBuffer = _interopRequireDefault(require("./isBuffer.js"));

var _isIndex = _interopRequireDefault(require("./_isIndex.js"));

var _isTypedArray = _interopRequireDefault(require("./isTypedArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = (0, _isArray.default)(value),
      isArg = !isArr && (0, _isArguments.default)(value),
      isBuff = !isArr && !isArg && (0, _isBuffer.default)(value),
      isType = !isArr && !isArg && !isBuff && (0, _isTypedArray.default)(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0, _baseTimes.default)(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    (0, _isIndex.default)(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

var _default = arrayLikeKeys;
exports.default = _default;
},{"./_baseTimes.js":"../node_modules/lodash-es/_baseTimes.js","./isArguments.js":"../node_modules/lodash-es/isArguments.js","./isArray.js":"../node_modules/lodash-es/isArray.js","./isBuffer.js":"../node_modules/lodash-es/isBuffer.js","./_isIndex.js":"../node_modules/lodash-es/_isIndex.js","./isTypedArray.js":"../node_modules/lodash-es/isTypedArray.js"}],"../node_modules/lodash-es/_isPrototype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

var _default = isPrototype;
exports.default = _default;
},{}],"../node_modules/lodash-es/_overArg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _default = overArg;
exports.default = _default;
},{}],"../node_modules/lodash-es/_nativeKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _overArg = _interopRequireDefault(require("./_overArg.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0, _overArg.default)(Object.keys, Object);
var _default = nativeKeys;
exports.default = _default;
},{"./_overArg.js":"../node_modules/lodash-es/_overArg.js"}],"../node_modules/lodash-es/_baseKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPrototype = _interopRequireDefault(require("./_isPrototype.js"));

var _nativeKeys = _interopRequireDefault(require("./_nativeKeys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!(0, _isPrototype.default)(object)) {
    return (0, _nativeKeys.default)(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _default = baseKeys;
exports.default = _default;
},{"./_isPrototype.js":"../node_modules/lodash-es/_isPrototype.js","./_nativeKeys.js":"../node_modules/lodash-es/_nativeKeys.js"}],"../node_modules/lodash-es/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFunction = _interopRequireDefault(require("./isFunction.js"));

var _isLength = _interopRequireDefault(require("./isLength.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0, _isLength.default)(value.length) && !(0, _isFunction.default)(value);
}

var _default = isArrayLike;
exports.default = _default;
},{"./isFunction.js":"../node_modules/lodash-es/isFunction.js","./isLength.js":"../node_modules/lodash-es/isLength.js"}],"../node_modules/lodash-es/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayLikeKeys = _interopRequireDefault(require("./_arrayLikeKeys.js"));

var _baseKeys = _interopRequireDefault(require("./_baseKeys.js"));

var _isArrayLike = _interopRequireDefault(require("./isArrayLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0, _isArrayLike.default)(object) ? (0, _arrayLikeKeys.default)(object) : (0, _baseKeys.default)(object);
}

var _default = keys;
exports.default = _default;
},{"./_arrayLikeKeys.js":"../node_modules/lodash-es/_arrayLikeKeys.js","./_baseKeys.js":"../node_modules/lodash-es/_baseKeys.js","./isArrayLike.js":"../node_modules/lodash-es/isArrayLike.js"}],"../node_modules/lodash-es/_baseAssign.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copyObject = _interopRequireDefault(require("./_copyObject.js"));

var _keys = _interopRequireDefault(require("./keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0, _copyObject.default)(source, (0, _keys.default)(source), object);
}

var _default = baseAssign;
exports.default = _default;
},{"./_copyObject.js":"../node_modules/lodash-es/_copyObject.js","./keys.js":"../node_modules/lodash-es/keys.js"}],"../node_modules/lodash-es/_nativeKeysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

var _default = nativeKeysIn;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseKeysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isObject = _interopRequireDefault(require("./isObject.js"));

var _isPrototype = _interopRequireDefault(require("./_isPrototype.js"));

var _nativeKeysIn = _interopRequireDefault(require("./_nativeKeysIn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!(0, _isObject.default)(object)) {
    return (0, _nativeKeysIn.default)(object);
  }

  var isProto = (0, _isPrototype.default)(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

var _default = baseKeysIn;
exports.default = _default;
},{"./isObject.js":"../node_modules/lodash-es/isObject.js","./_isPrototype.js":"../node_modules/lodash-es/_isPrototype.js","./_nativeKeysIn.js":"../node_modules/lodash-es/_nativeKeysIn.js"}],"../node_modules/lodash-es/keysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayLikeKeys = _interopRequireDefault(require("./_arrayLikeKeys.js"));

var _baseKeysIn = _interopRequireDefault(require("./_baseKeysIn.js"));

var _isArrayLike = _interopRequireDefault(require("./isArrayLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0, _isArrayLike.default)(object) ? (0, _arrayLikeKeys.default)(object, true) : (0, _baseKeysIn.default)(object);
}

var _default = keysIn;
exports.default = _default;
},{"./_arrayLikeKeys.js":"../node_modules/lodash-es/_arrayLikeKeys.js","./_baseKeysIn.js":"../node_modules/lodash-es/_baseKeysIn.js","./isArrayLike.js":"../node_modules/lodash-es/isArrayLike.js"}],"../node_modules/lodash-es/_baseAssignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copyObject = _interopRequireDefault(require("./_copyObject.js"));

var _keysIn = _interopRequireDefault(require("./keysIn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0, _copyObject.default)(source, (0, _keysIn.default)(source), object);
}

var _default = baseAssignIn;
exports.default = _default;
},{"./_copyObject.js":"../node_modules/lodash-es/_copyObject.js","./keysIn.js":"../node_modules/lodash-es/keysIn.js"}],"../node_modules/lodash-es/_cloneBuffer.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? _root.default.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

var _default = cloneBuffer;
exports.default = _default;
},{"./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_copyArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _default = copyArray;
exports.default = _default;
},{}],"../node_modules/lodash-es/_arrayFilter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var _default = arrayFilter;
exports.default = _default;
},{}],"../node_modules/lodash-es/stubArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var _default = stubArray;
exports.default = _default;
},{}],"../node_modules/lodash-es/_getSymbols.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayFilter = _interopRequireDefault(require("./_arrayFilter.js"));

var _stubArray = _interopRequireDefault(require("./stubArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? _stubArray.default : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return (0, _arrayFilter.default)(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _default = getSymbols;
exports.default = _default;
},{"./_arrayFilter.js":"../node_modules/lodash-es/_arrayFilter.js","./stubArray.js":"../node_modules/lodash-es/stubArray.js"}],"../node_modules/lodash-es/_copySymbols.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copyObject = _interopRequireDefault(require("./_copyObject.js"));

var _getSymbols = _interopRequireDefault(require("./_getSymbols.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0, _copyObject.default)(source, (0, _getSymbols.default)(source), object);
}

var _default = copySymbols;
exports.default = _default;
},{"./_copyObject.js":"../node_modules/lodash-es/_copyObject.js","./_getSymbols.js":"../node_modules/lodash-es/_getSymbols.js"}],"../node_modules/lodash-es/_arrayPush.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _default = arrayPush;
exports.default = _default;
},{}],"../node_modules/lodash-es/_getPrototype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _overArg = _interopRequireDefault(require("./_overArg.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg.default)(Object.getPrototypeOf, Object);
var _default = getPrototype;
exports.default = _default;
},{"./_overArg.js":"../node_modules/lodash-es/_overArg.js"}],"../node_modules/lodash-es/_getSymbolsIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayPush = _interopRequireDefault(require("./_arrayPush.js"));

var _getPrototype = _interopRequireDefault(require("./_getPrototype.js"));

var _getSymbols = _interopRequireDefault(require("./_getSymbols.js"));

var _stubArray = _interopRequireDefault(require("./stubArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? _stubArray.default : function (object) {
  var result = [];

  while (object) {
    (0, _arrayPush.default)(result, (0, _getSymbols.default)(object));
    object = (0, _getPrototype.default)(object);
  }

  return result;
};
var _default = getSymbolsIn;
exports.default = _default;
},{"./_arrayPush.js":"../node_modules/lodash-es/_arrayPush.js","./_getPrototype.js":"../node_modules/lodash-es/_getPrototype.js","./_getSymbols.js":"../node_modules/lodash-es/_getSymbols.js","./stubArray.js":"../node_modules/lodash-es/stubArray.js"}],"../node_modules/lodash-es/_copySymbolsIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copyObject = _interopRequireDefault(require("./_copyObject.js"));

var _getSymbolsIn = _interopRequireDefault(require("./_getSymbolsIn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0, _copyObject.default)(source, (0, _getSymbolsIn.default)(source), object);
}

var _default = copySymbolsIn;
exports.default = _default;
},{"./_copyObject.js":"../node_modules/lodash-es/_copyObject.js","./_getSymbolsIn.js":"../node_modules/lodash-es/_getSymbolsIn.js"}],"../node_modules/lodash-es/_baseGetAllKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayPush = _interopRequireDefault(require("./_arrayPush.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0, _isArray.default)(object) ? result : (0, _arrayPush.default)(result, symbolsFunc(object));
}

var _default = baseGetAllKeys;
exports.default = _default;
},{"./_arrayPush.js":"../node_modules/lodash-es/_arrayPush.js","./isArray.js":"../node_modules/lodash-es/isArray.js"}],"../node_modules/lodash-es/_getAllKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetAllKeys = _interopRequireDefault(require("./_baseGetAllKeys.js"));

var _getSymbols = _interopRequireDefault(require("./_getSymbols.js"));

var _keys = _interopRequireDefault(require("./keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0, _baseGetAllKeys.default)(object, _keys.default, _getSymbols.default);
}

var _default = getAllKeys;
exports.default = _default;
},{"./_baseGetAllKeys.js":"../node_modules/lodash-es/_baseGetAllKeys.js","./_getSymbols.js":"../node_modules/lodash-es/_getSymbols.js","./keys.js":"../node_modules/lodash-es/keys.js"}],"../node_modules/lodash-es/_getAllKeysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetAllKeys = _interopRequireDefault(require("./_baseGetAllKeys.js"));

var _getSymbolsIn = _interopRequireDefault(require("./_getSymbolsIn.js"));

var _keysIn = _interopRequireDefault(require("./keysIn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0, _baseGetAllKeys.default)(object, _keysIn.default, _getSymbolsIn.default);
}

var _default = getAllKeysIn;
exports.default = _default;
},{"./_baseGetAllKeys.js":"../node_modules/lodash-es/_baseGetAllKeys.js","./_getSymbolsIn.js":"../node_modules/lodash-es/_getSymbolsIn.js","./keysIn.js":"../node_modules/lodash-es/keysIn.js"}],"../node_modules/lodash-es/_DataView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var DataView = (0, _getNative.default)(_root.default, 'DataView');
var _default = DataView;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js","./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_Promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Promise = (0, _getNative.default)(_root.default, 'Promise');
var _default = Promise;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js","./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_Set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Set = (0, _getNative.default)(_root.default, 'Set');
var _default = Set;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js","./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_WeakMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNative = _interopRequireDefault(require("./_getNative.js"));

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var WeakMap = (0, _getNative.default)(_root.default, 'WeakMap');
var _default = WeakMap;
exports.default = _default;
},{"./_getNative.js":"../node_modules/lodash-es/_getNative.js","./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_getTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DataView = _interopRequireDefault(require("./_DataView.js"));

var _Map = _interopRequireDefault(require("./_Map.js"));

var _Promise = _interopRequireDefault(require("./_Promise.js"));

var _Set = _interopRequireDefault(require("./_Set.js"));

var _WeakMap = _interopRequireDefault(require("./_WeakMap.js"));

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _toSource = _interopRequireDefault(require("./_toSource.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = (0, _toSource.default)(_DataView.default),
    mapCtorString = (0, _toSource.default)(_Map.default),
    promiseCtorString = (0, _toSource.default)(_Promise.default),
    setCtorString = (0, _toSource.default)(_Set.default),
    weakMapCtorString = (0, _toSource.default)(_WeakMap.default);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = _baseGetTag.default; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView.default && getTag(new _DataView.default(new ArrayBuffer(1))) != dataViewTag || _Map.default && getTag(new _Map.default()) != mapTag || _Promise.default && getTag(_Promise.default.resolve()) != promiseTag || _Set.default && getTag(new _Set.default()) != setTag || _WeakMap.default && getTag(new _WeakMap.default()) != weakMapTag) {
  getTag = function (value) {
    var result = (0, _baseGetTag.default)(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0, _toSource.default)(Ctor) : '';

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

    return result;
  };
}

var _default = getTag;
exports.default = _default;
},{"./_DataView.js":"../node_modules/lodash-es/_DataView.js","./_Map.js":"../node_modules/lodash-es/_Map.js","./_Promise.js":"../node_modules/lodash-es/_Promise.js","./_Set.js":"../node_modules/lodash-es/_Set.js","./_WeakMap.js":"../node_modules/lodash-es/_WeakMap.js","./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./_toSource.js":"../node_modules/lodash-es/_toSource.js"}],"../node_modules/lodash-es/_initCloneArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

var _default = initCloneArray;
exports.default = _default;
},{}],"../node_modules/lodash-es/_Uint8Array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var Uint8Array = _root.default.Uint8Array;
var _default = Uint8Array;
exports.default = _default;
},{"./_root.js":"../node_modules/lodash-es/_root.js"}],"../node_modules/lodash-es/_cloneArrayBuffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Uint8Array = _interopRequireDefault(require("./_Uint8Array.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array.default(result).set(new _Uint8Array.default(arrayBuffer));
  return result;
}

var _default = cloneArrayBuffer;
exports.default = _default;
},{"./_Uint8Array.js":"../node_modules/lodash-es/_Uint8Array.js"}],"../node_modules/lodash-es/_cloneDataView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cloneArrayBuffer = _interopRequireDefault(require("./_cloneArrayBuffer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0, _cloneArrayBuffer.default)(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _default = cloneDataView;
exports.default = _default;
},{"./_cloneArrayBuffer.js":"../node_modules/lodash-es/_cloneArrayBuffer.js"}],"../node_modules/lodash-es/_cloneRegExp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _default = cloneRegExp;
exports.default = _default;
},{}],"../node_modules/lodash-es/_cloneSymbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol.default ? _Symbol.default.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _default = cloneSymbol;
exports.default = _default;
},{"./_Symbol.js":"../node_modules/lodash-es/_Symbol.js"}],"../node_modules/lodash-es/_cloneTypedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cloneArrayBuffer = _interopRequireDefault(require("./_cloneArrayBuffer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0, _cloneArrayBuffer.default)(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _default = cloneTypedArray;
exports.default = _default;
},{"./_cloneArrayBuffer.js":"../node_modules/lodash-es/_cloneArrayBuffer.js"}],"../node_modules/lodash-es/_initCloneByTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cloneArrayBuffer = _interopRequireDefault(require("./_cloneArrayBuffer.js"));

var _cloneDataView = _interopRequireDefault(require("./_cloneDataView.js"));

var _cloneRegExp = _interopRequireDefault(require("./_cloneRegExp.js"));

var _cloneSymbol = _interopRequireDefault(require("./_cloneSymbol.js"));

var _cloneTypedArray = _interopRequireDefault(require("./_cloneTypedArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return (0, _cloneArrayBuffer.default)(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0, _cloneDataView.default)(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0, _cloneTypedArray.default)(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0, _cloneRegExp.default)(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return (0, _cloneSymbol.default)(object);
  }
}

var _default = initCloneByTag;
exports.default = _default;
},{"./_cloneArrayBuffer.js":"../node_modules/lodash-es/_cloneArrayBuffer.js","./_cloneDataView.js":"../node_modules/lodash-es/_cloneDataView.js","./_cloneRegExp.js":"../node_modules/lodash-es/_cloneRegExp.js","./_cloneSymbol.js":"../node_modules/lodash-es/_cloneSymbol.js","./_cloneTypedArray.js":"../node_modules/lodash-es/_cloneTypedArray.js"}],"../node_modules/lodash-es/_baseCreate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isObject = _interopRequireDefault(require("./isObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!(0, _isObject.default)(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _default = baseCreate;
exports.default = _default;
},{"./isObject.js":"../node_modules/lodash-es/isObject.js"}],"../node_modules/lodash-es/_initCloneObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCreate = _interopRequireDefault(require("./_baseCreate.js"));

var _getPrototype = _interopRequireDefault(require("./_getPrototype.js"));

var _isPrototype = _interopRequireDefault(require("./_isPrototype.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0, _isPrototype.default)(object) ? (0, _baseCreate.default)((0, _getPrototype.default)(object)) : {};
}

var _default = initCloneObject;
exports.default = _default;
},{"./_baseCreate.js":"../node_modules/lodash-es/_baseCreate.js","./_getPrototype.js":"../node_modules/lodash-es/_getPrototype.js","./_isPrototype.js":"../node_modules/lodash-es/_isPrototype.js"}],"../node_modules/lodash-es/_baseIsMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getTag = _interopRequireDefault(require("./_getTag.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return (0, _isObjectLike.default)(value) && (0, _getTag.default)(value) == mapTag;
}

var _default = baseIsMap;
exports.default = _default;
},{"./_getTag.js":"../node_modules/lodash-es/_getTag.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/isMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsMap = _interopRequireDefault(require("./_baseIsMap.js"));

var _baseUnary = _interopRequireDefault(require("./_baseUnary.js"));

var _nodeUtil = _interopRequireDefault(require("./_nodeUtil.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsMap = _nodeUtil.default && _nodeUtil.default.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? (0, _baseUnary.default)(nodeIsMap) : _baseIsMap.default;
var _default = isMap;
exports.default = _default;
},{"./_baseIsMap.js":"../node_modules/lodash-es/_baseIsMap.js","./_baseUnary.js":"../node_modules/lodash-es/_baseUnary.js","./_nodeUtil.js":"../node_modules/lodash-es/_nodeUtil.js"}],"../node_modules/lodash-es/_baseIsSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getTag = _interopRequireDefault(require("./_getTag.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return (0, _isObjectLike.default)(value) && (0, _getTag.default)(value) == setTag;
}

var _default = baseIsSet;
exports.default = _default;
},{"./_getTag.js":"../node_modules/lodash-es/_getTag.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/isSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsSet = _interopRequireDefault(require("./_baseIsSet.js"));

var _baseUnary = _interopRequireDefault(require("./_baseUnary.js"));

var _nodeUtil = _interopRequireDefault(require("./_nodeUtil.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsSet = _nodeUtil.default && _nodeUtil.default.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? (0, _baseUnary.default)(nodeIsSet) : _baseIsSet.default;
var _default = isSet;
exports.default = _default;
},{"./_baseIsSet.js":"../node_modules/lodash-es/_baseIsSet.js","./_baseUnary.js":"../node_modules/lodash-es/_baseUnary.js","./_nodeUtil.js":"../node_modules/lodash-es/_nodeUtil.js"}],"../node_modules/lodash-es/_baseClone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Stack = _interopRequireDefault(require("./_Stack.js"));

var _arrayEach = _interopRequireDefault(require("./_arrayEach.js"));

var _assignValue = _interopRequireDefault(require("./_assignValue.js"));

var _baseAssign = _interopRequireDefault(require("./_baseAssign.js"));

var _baseAssignIn = _interopRequireDefault(require("./_baseAssignIn.js"));

var _cloneBuffer = _interopRequireDefault(require("./_cloneBuffer.js"));

var _copyArray = _interopRequireDefault(require("./_copyArray.js"));

var _copySymbols = _interopRequireDefault(require("./_copySymbols.js"));

var _copySymbolsIn = _interopRequireDefault(require("./_copySymbolsIn.js"));

var _getAllKeys = _interopRequireDefault(require("./_getAllKeys.js"));

var _getAllKeysIn = _interopRequireDefault(require("./_getAllKeysIn.js"));

var _getTag = _interopRequireDefault(require("./_getTag.js"));

var _initCloneArray = _interopRequireDefault(require("./_initCloneArray.js"));

var _initCloneByTag = _interopRequireDefault(require("./_initCloneByTag.js"));

var _initCloneObject = _interopRequireDefault(require("./_initCloneObject.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

var _isBuffer = _interopRequireDefault(require("./isBuffer.js"));

var _isMap = _interopRequireDefault(require("./isMap.js"));

var _isObject = _interopRequireDefault(require("./isObject.js"));

var _isSet = _interopRequireDefault(require("./isSet.js"));

var _keys = _interopRequireDefault(require("./keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!(0, _isObject.default)(value)) {
    return value;
  }

  var isArr = (0, _isArray.default)(value);

  if (isArr) {
    result = (0, _initCloneArray.default)(value);

    if (!isDeep) {
      return (0, _copyArray.default)(value, result);
    }
  } else {
    var tag = (0, _getTag.default)(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0, _isBuffer.default)(value)) {
      return (0, _cloneBuffer.default)(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0, _initCloneObject.default)(value);

      if (!isDeep) {
        return isFlat ? (0, _copySymbolsIn.default)(value, (0, _baseAssignIn.default)(result, value)) : (0, _copySymbols.default)(value, (0, _baseAssign.default)(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = (0, _initCloneByTag.default)(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack.default());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if ((0, _isSet.default)(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    return result;
  }

  if ((0, _isMap.default)(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn.default : _getAllKeys.default : isFlat ? keysIn : _keys.default;
  var props = isArr ? undefined : keysFunc(value);
  (0, _arrayEach.default)(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    (0, _assignValue.default)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _default = baseClone;
exports.default = _default;
},{"./_Stack.js":"../node_modules/lodash-es/_Stack.js","./_arrayEach.js":"../node_modules/lodash-es/_arrayEach.js","./_assignValue.js":"../node_modules/lodash-es/_assignValue.js","./_baseAssign.js":"../node_modules/lodash-es/_baseAssign.js","./_baseAssignIn.js":"../node_modules/lodash-es/_baseAssignIn.js","./_cloneBuffer.js":"../node_modules/lodash-es/_cloneBuffer.js","./_copyArray.js":"../node_modules/lodash-es/_copyArray.js","./_copySymbols.js":"../node_modules/lodash-es/_copySymbols.js","./_copySymbolsIn.js":"../node_modules/lodash-es/_copySymbolsIn.js","./_getAllKeys.js":"../node_modules/lodash-es/_getAllKeys.js","./_getAllKeysIn.js":"../node_modules/lodash-es/_getAllKeysIn.js","./_getTag.js":"../node_modules/lodash-es/_getTag.js","./_initCloneArray.js":"../node_modules/lodash-es/_initCloneArray.js","./_initCloneByTag.js":"../node_modules/lodash-es/_initCloneByTag.js","./_initCloneObject.js":"../node_modules/lodash-es/_initCloneObject.js","./isArray.js":"../node_modules/lodash-es/isArray.js","./isBuffer.js":"../node_modules/lodash-es/isBuffer.js","./isMap.js":"../node_modules/lodash-es/isMap.js","./isObject.js":"../node_modules/lodash-es/isObject.js","./isSet.js":"../node_modules/lodash-es/isSet.js","./keys.js":"../node_modules/lodash-es/keys.js"}],"../node_modules/lodash-es/cloneDeep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseClone = _interopRequireDefault(require("./_baseClone.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return (0, _baseClone.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

var _default = cloneDeep;
exports.default = _default;
},{"./_baseClone.js":"../node_modules/lodash-es/_baseClone.js"}],"../node_modules/lodash-es/_setCacheAdd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

var _default = setCacheAdd;
exports.default = _default;
},{}],"../node_modules/lodash-es/_setCacheHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _default = setCacheHas;
exports.default = _default;
},{}],"../node_modules/lodash-es/_SetCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MapCache = _interopRequireDefault(require("./_MapCache.js"));

var _setCacheAdd = _interopRequireDefault(require("./_setCacheAdd.js"));

var _setCacheHas = _interopRequireDefault(require("./_setCacheHas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache.default();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd.default;
SetCache.prototype.has = _setCacheHas.default;
var _default = SetCache;
exports.default = _default;
},{"./_MapCache.js":"../node_modules/lodash-es/_MapCache.js","./_setCacheAdd.js":"../node_modules/lodash-es/_setCacheAdd.js","./_setCacheHas.js":"../node_modules/lodash-es/_setCacheHas.js"}],"../node_modules/lodash-es/_arraySome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

var _default = arraySome;
exports.default = _default;
},{}],"../node_modules/lodash-es/_cacheHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _default = cacheHas;
exports.default = _default;
},{}],"../node_modules/lodash-es/_equalArrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SetCache = _interopRequireDefault(require("./_SetCache.js"));

var _arraySome = _interopRequireDefault(require("./_arraySome.js"));

var _cacheHas = _interopRequireDefault(require("./_cacheHas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache.default() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!(0, _arraySome.default)(other, function (othValue, othIndex) {
        if (!(0, _cacheHas.default)(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _default = equalArrays;
exports.default = _default;
},{"./_SetCache.js":"../node_modules/lodash-es/_SetCache.js","./_arraySome.js":"../node_modules/lodash-es/_arraySome.js","./_cacheHas.js":"../node_modules/lodash-es/_cacheHas.js"}],"../node_modules/lodash-es/_mapToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _default = mapToArray;
exports.default = _default;
},{}],"../node_modules/lodash-es/_setToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

var _default = setToArray;
exports.default = _default;
},{}],"../node_modules/lodash-es/_equalByTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

var _Uint8Array = _interopRequireDefault(require("./_Uint8Array.js"));

var _eq = _interopRequireDefault(require("./eq.js"));

var _equalArrays = _interopRequireDefault(require("./_equalArrays.js"));

var _mapToArray = _interopRequireDefault(require("./_mapToArray.js"));

var _setToArray = _interopRequireDefault(require("./_setToArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol.default ? _Symbol.default.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array.default(object), new _Uint8Array.default(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0, _eq.default)(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = _mapToArray.default;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray.default);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = (0, _equalArrays.default)(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

var _default = equalByTag;
exports.default = _default;
},{"./_Symbol.js":"../node_modules/lodash-es/_Symbol.js","./_Uint8Array.js":"../node_modules/lodash-es/_Uint8Array.js","./eq.js":"../node_modules/lodash-es/eq.js","./_equalArrays.js":"../node_modules/lodash-es/_equalArrays.js","./_mapToArray.js":"../node_modules/lodash-es/_mapToArray.js","./_setToArray.js":"../node_modules/lodash-es/_setToArray.js"}],"../node_modules/lodash-es/_equalObjects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getAllKeys = _interopRequireDefault(require("./_getAllKeys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = (0, _getAllKeys.default)(object),
      objLength = objProps.length,
      othProps = (0, _getAllKeys.default)(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _default = equalObjects;
exports.default = _default;
},{"./_getAllKeys.js":"../node_modules/lodash-es/_getAllKeys.js"}],"../node_modules/lodash-es/_baseIsEqualDeep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Stack = _interopRequireDefault(require("./_Stack.js"));

var _equalArrays = _interopRequireDefault(require("./_equalArrays.js"));

var _equalByTag = _interopRequireDefault(require("./_equalByTag.js"));

var _equalObjects = _interopRequireDefault(require("./_equalObjects.js"));

var _getTag = _interopRequireDefault(require("./_getTag.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

var _isBuffer = _interopRequireDefault(require("./isBuffer.js"));

var _isTypedArray = _interopRequireDefault(require("./isTypedArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0, _isArray.default)(object),
      othIsArr = (0, _isArray.default)(other),
      objTag = objIsArr ? arrayTag : (0, _getTag.default)(object),
      othTag = othIsArr ? arrayTag : (0, _getTag.default)(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && (0, _isBuffer.default)(object)) {
    if (!(0, _isBuffer.default)(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack.default());
    return objIsArr || (0, _isTypedArray.default)(object) ? (0, _equalArrays.default)(object, other, bitmask, customizer, equalFunc, stack) : (0, _equalByTag.default)(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack.default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new _Stack.default());
  return (0, _equalObjects.default)(object, other, bitmask, customizer, equalFunc, stack);
}

var _default = baseIsEqualDeep;
exports.default = _default;
},{"./_Stack.js":"../node_modules/lodash-es/_Stack.js","./_equalArrays.js":"../node_modules/lodash-es/_equalArrays.js","./_equalByTag.js":"../node_modules/lodash-es/_equalByTag.js","./_equalObjects.js":"../node_modules/lodash-es/_equalObjects.js","./_getTag.js":"../node_modules/lodash-es/_getTag.js","./isArray.js":"../node_modules/lodash-es/isArray.js","./isBuffer.js":"../node_modules/lodash-es/isBuffer.js","./isTypedArray.js":"../node_modules/lodash-es/isTypedArray.js"}],"../node_modules/lodash-es/_baseIsEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsEqualDeep = _interopRequireDefault(require("./_baseIsEqualDeep.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !(0, _isObjectLike.default)(value) && !(0, _isObjectLike.default)(other)) {
    return value !== value && other !== other;
  }

  return (0, _baseIsEqualDeep.default)(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _default = baseIsEqual;
exports.default = _default;
},{"./_baseIsEqualDeep.js":"../node_modules/lodash-es/_baseIsEqualDeep.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/isEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseIsEqual = _interopRequireDefault(require("./_baseIsEqual.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return (0, _baseIsEqual.default)(value, other);
}

var _default = isEqual;
exports.default = _default;
},{"./_baseIsEqual.js":"../node_modules/lodash-es/_baseIsEqual.js"}],"../node_modules/lodash-es/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var _default = identity;
exports.default = _default;
},{}],"../node_modules/lodash-es/_apply.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
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

var _default = apply;
exports.default = _default;
},{}],"../node_modules/lodash-es/_overRest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apply = _interopRequireDefault(require("./_apply.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return (0, _apply.default)(func, this, otherArgs);
  };
}

var _default = overRest;
exports.default = _default;
},{"./_apply.js":"../node_modules/lodash-es/_apply.js"}],"../node_modules/lodash-es/constant.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

var _default = constant;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseSetToString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constant = _interopRequireDefault(require("./constant.js"));

var _defineProperty = _interopRequireDefault(require("./_defineProperty.js"));

var _identity = _interopRequireDefault(require("./identity.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty.default ? _identity.default : function (func, string) {
  return (0, _defineProperty.default)(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': (0, _constant.default)(string),
    'writable': true
  });
};
var _default = baseSetToString;
exports.default = _default;
},{"./constant.js":"../node_modules/lodash-es/constant.js","./_defineProperty.js":"../node_modules/lodash-es/_defineProperty.js","./identity.js":"../node_modules/lodash-es/identity.js"}],"../node_modules/lodash-es/_shortOut.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

var _default = shortOut;
exports.default = _default;
},{}],"../node_modules/lodash-es/_setToString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseSetToString = _interopRequireDefault(require("./_baseSetToString.js"));

var _shortOut = _interopRequireDefault(require("./_shortOut.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = (0, _shortOut.default)(_baseSetToString.default);
var _default = setToString;
exports.default = _default;
},{"./_baseSetToString.js":"../node_modules/lodash-es/_baseSetToString.js","./_shortOut.js":"../node_modules/lodash-es/_shortOut.js"}],"../node_modules/lodash-es/_baseRest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _identity = _interopRequireDefault(require("./identity.js"));

var _overRest = _interopRequireDefault(require("./_overRest.js"));

var _setToString = _interopRequireDefault(require("./_setToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0, _setToString.default)((0, _overRest.default)(func, start, _identity.default), func + '');
}

var _default = baseRest;
exports.default = _default;
},{"./identity.js":"../node_modules/lodash-es/identity.js","./_overRest.js":"../node_modules/lodash-es/_overRest.js","./_setToString.js":"../node_modules/lodash-es/_setToString.js"}],"../node_modules/lodash-es/_isIterateeCall.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eq = _interopRequireDefault(require("./eq.js"));

var _isArrayLike = _interopRequireDefault(require("./isArrayLike.js"));

var _isIndex = _interopRequireDefault(require("./_isIndex.js"));

var _isObject = _interopRequireDefault(require("./isObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0, _isObject.default)(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? (0, _isArrayLike.default)(object) && (0, _isIndex.default)(index, object.length) : type == 'string' && index in object) {
    return (0, _eq.default)(object[index], value);
  }

  return false;
}

var _default = isIterateeCall;
exports.default = _default;
},{"./eq.js":"../node_modules/lodash-es/eq.js","./isArrayLike.js":"../node_modules/lodash-es/isArrayLike.js","./_isIndex.js":"../node_modules/lodash-es/_isIndex.js","./isObject.js":"../node_modules/lodash-es/isObject.js"}],"../node_modules/lodash-es/_createAssigner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseRest = _interopRequireDefault(require("./_baseRest.js"));

var _isIterateeCall = _interopRequireDefault(require("./_isIterateeCall.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0, _baseRest.default)(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && (0, _isIterateeCall.default)(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

var _default = createAssigner;
exports.default = _default;
},{"./_baseRest.js":"../node_modules/lodash-es/_baseRest.js","./_isIterateeCall.js":"../node_modules/lodash-es/_isIterateeCall.js"}],"../node_modules/lodash-es/assignInWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copyObject = _interopRequireDefault(require("./_copyObject.js"));

var _createAssigner = _interopRequireDefault(require("./_createAssigner.js"));

var _keysIn = _interopRequireDefault(require("./keysIn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = (0, _createAssigner.default)(function (object, source, srcIndex, customizer) {
  (0, _copyObject.default)(source, (0, _keysIn.default)(source), object, customizer);
});
var _default = assignInWith;
exports.default = _default;
},{"./_copyObject.js":"../node_modules/lodash-es/_copyObject.js","./_createAssigner.js":"../node_modules/lodash-es/_createAssigner.js","./keysIn.js":"../node_modules/lodash-es/keysIn.js"}],"../node_modules/lodash-es/isPlainObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _getPrototype = _interopRequireDefault(require("./_getPrototype.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!(0, _isObjectLike.default)(value) || (0, _baseGetTag.default)(value) != objectTag) {
    return false;
  }

  var proto = (0, _getPrototype.default)(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var _default = isPlainObject;
exports.default = _default;
},{"./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./_getPrototype.js":"../node_modules/lodash-es/_getPrototype.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/isError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

var _isPlainObject = _interopRequireDefault(require("./isPlainObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';
/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */

function isError(value) {
  if (!(0, _isObjectLike.default)(value)) {
    return false;
  }

  var tag = (0, _baseGetTag.default)(value);
  return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !(0, _isPlainObject.default)(value);
}

var _default = isError;
exports.default = _default;
},{"./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js","./isPlainObject.js":"../node_modules/lodash-es/isPlainObject.js"}],"../node_modules/lodash-es/attempt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apply = _interopRequireDefault(require("./_apply.js"));

var _baseRest = _interopRequireDefault(require("./_baseRest.js"));

var _isError = _interopRequireDefault(require("./isError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = (0, _baseRest.default)(function (func, args) {
  try {
    return (0, _apply.default)(func, undefined, args);
  } catch (e) {
    return (0, _isError.default)(e) ? e : new Error(e);
  }
});
var _default = attempt;
exports.default = _default;
},{"./_apply.js":"../node_modules/lodash-es/_apply.js","./_baseRest.js":"../node_modules/lodash-es/_baseRest.js","./isError.js":"../node_modules/lodash-es/isError.js"}],"../node_modules/lodash-es/_arrayMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _default = arrayMap;
exports.default = _default;
},{}],"../node_modules/lodash-es/_baseValues.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayMap = _interopRequireDefault(require("./_arrayMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0, _arrayMap.default)(props, function (key) {
    return object[key];
  });
}

var _default = baseValues;
exports.default = _default;
},{"./_arrayMap.js":"../node_modules/lodash-es/_arrayMap.js"}],"../node_modules/lodash-es/_customDefaultsAssignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eq = _interopRequireDefault(require("./eq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */

function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined || (0, _eq.default)(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }

  return objValue;
}

var _default = customDefaultsAssignIn;
exports.default = _default;
},{"./eq.js":"../node_modules/lodash-es/eq.js"}],"../node_modules/lodash-es/_escapeStringChar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};
/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

var _default = escapeStringChar;
exports.default = _default;
},{}],"../node_modules/lodash-es/_reInterpolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;
var _default = reInterpolate;
exports.default = _default;
},{}],"../node_modules/lodash-es/_basePropertyOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

var _default = basePropertyOf;
exports.default = _default;
},{}],"../node_modules/lodash-es/_escapeHtmlChar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _basePropertyOf = _interopRequireDefault(require("./_basePropertyOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

var escapeHtmlChar = (0, _basePropertyOf.default)(htmlEscapes);
var _default = escapeHtmlChar;
exports.default = _default;
},{"./_basePropertyOf.js":"../node_modules/lodash-es/_basePropertyOf.js"}],"../node_modules/lodash-es/isSymbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || (0, _isObjectLike.default)(value) && (0, _baseGetTag.default)(value) == symbolTag;
}

var _default = isSymbol;
exports.default = _default;
},{"./_baseGetTag.js":"../node_modules/lodash-es/_baseGetTag.js","./isObjectLike.js":"../node_modules/lodash-es/isObjectLike.js"}],"../node_modules/lodash-es/_baseToString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

var _arrayMap = _interopRequireDefault(require("./_arrayMap.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

var _isSymbol = _interopRequireDefault(require("./isSymbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol.default ? _Symbol.default.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if ((0, _isArray.default)(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0, _arrayMap.default)(value, baseToString) + '';
  }

  if ((0, _isSymbol.default)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _default = baseToString;
exports.default = _default;
},{"./_Symbol.js":"../node_modules/lodash-es/_Symbol.js","./_arrayMap.js":"../node_modules/lodash-es/_arrayMap.js","./isArray.js":"../node_modules/lodash-es/isArray.js","./isSymbol.js":"../node_modules/lodash-es/isSymbol.js"}],"../node_modules/lodash-es/toString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseToString = _interopRequireDefault(require("./_baseToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0, _baseToString.default)(value);
}

var _default = toString;
exports.default = _default;
},{"./_baseToString.js":"../node_modules/lodash-es/_baseToString.js"}],"../node_modules/lodash-es/escape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _escapeHtmlChar = _interopRequireDefault(require("./_escapeHtmlChar.js"));

var _toString = _interopRequireDefault(require("./toString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */

function escape(string) {
  string = (0, _toString.default)(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, _escapeHtmlChar.default) : string;
}

var _default = escape;
exports.default = _default;
},{"./_escapeHtmlChar.js":"../node_modules/lodash-es/_escapeHtmlChar.js","./toString.js":"../node_modules/lodash-es/toString.js"}],"../node_modules/lodash-es/_reEscape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g;
var _default = reEscape;
exports.default = _default;
},{}],"../node_modules/lodash-es/_reEvaluate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used to match template delimiters. */
var reEvaluate = /<%([\s\S]+?)%>/g;
var _default = reEvaluate;
exports.default = _default;
},{}],"../node_modules/lodash-es/templateSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _escape = _interopRequireDefault(require("./escape.js"));

var _reEscape = _interopRequireDefault(require("./_reEscape.js"));

var _reEvaluate = _interopRequireDefault(require("./_reEvaluate.js"));

var _reInterpolate = _interopRequireDefault(require("./_reInterpolate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */
var templateSettings = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': _reEscape.default,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': _reEvaluate.default,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': _reInterpolate.default,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': {
      'escape': _escape.default
    }
  }
};
var _default = templateSettings;
exports.default = _default;
},{"./escape.js":"../node_modules/lodash-es/escape.js","./_reEscape.js":"../node_modules/lodash-es/_reEscape.js","./_reEvaluate.js":"../node_modules/lodash-es/_reEvaluate.js","./_reInterpolate.js":"../node_modules/lodash-es/_reInterpolate.js"}],"../node_modules/lodash-es/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assignInWith = _interopRequireDefault(require("./assignInWith.js"));

var _attempt = _interopRequireDefault(require("./attempt.js"));

var _baseValues = _interopRequireDefault(require("./_baseValues.js"));

var _customDefaultsAssignIn = _interopRequireDefault(require("./_customDefaultsAssignIn.js"));

var _escapeStringChar = _interopRequireDefault(require("./_escapeStringChar.js"));

var _isError = _interopRequireDefault(require("./isError.js"));

var _isIterateeCall = _interopRequireDefault(require("./_isIterateeCall.js"));

var _keys = _interopRequireDefault(require("./keys.js"));

var _reInterpolate = _interopRequireDefault(require("./_reInterpolate.js"));

var _templateSettings = _interopRequireDefault(require("./templateSettings.js"));

var _toString = _interopRequireDefault(require("./toString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */

var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
/** Used to ensure capturing order of template delimiters. */

var reNoMatch = /($^)/;
/** Used to match unescaped characters in compiled string literals. */

var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */

function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = _templateSettings.default.imports._.templateSettings || _templateSettings.default;

  if (guard && (0, _isIterateeCall.default)(string, options, guard)) {
    options = undefined;
  }

  string = (0, _toString.default)(string);
  options = (0, _assignInWith.default)({}, options, settings, _customDefaultsAssignIn.default);
  var imports = (0, _assignInWith.default)({}, options.imports, settings.imports, _customDefaultsAssignIn.default),
      importsKeys = (0, _keys.default)(imports),
      importsValues = (0, _baseValues.default)(imports, importsKeys);
  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '"; // Compile the regexp to match each delimiter.

  var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === _reInterpolate.default ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g'); // Use a sourceURL for easier debugging.

  var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';
  string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue); // Escape characters that can't be included in string literals.

    source += string.slice(index, offset).replace(reUnescapedString, _escapeStringChar.default); // Replace delimiters with snippets.

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

    index = offset + match.length; // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.

    return match;
  });
  source += "';\n"; // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.

  var variable = options.variable;

  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  } // Cleanup code by stripping empty strings.


  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;'); // Frame code as the function body.

  source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
  var result = (0, _attempt.default)(function () {
    return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
  }); // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.

  result.source = source;

  if ((0, _isError.default)(result)) {
    throw result;
  }

  return result;
}

var _default = template;
exports.default = _default;
},{"./assignInWith.js":"../node_modules/lodash-es/assignInWith.js","./attempt.js":"../node_modules/lodash-es/attempt.js","./_baseValues.js":"../node_modules/lodash-es/_baseValues.js","./_customDefaultsAssignIn.js":"../node_modules/lodash-es/_customDefaultsAssignIn.js","./_escapeStringChar.js":"../node_modules/lodash-es/_escapeStringChar.js","./isError.js":"../node_modules/lodash-es/isError.js","./_isIterateeCall.js":"../node_modules/lodash-es/_isIterateeCall.js","./keys.js":"../node_modules/lodash-es/keys.js","./_reInterpolate.js":"../node_modules/lodash-es/_reInterpolate.js","./templateSettings.js":"../node_modules/lodash-es/templateSettings.js","./toString.js":"../node_modules/lodash-es/toString.js"}],"scripts/reactive-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watcher = exports.ReactiveProxy = void 0;

var _cloneDeep = _interopRequireDefault(require("../../node_modules/lodash-es/cloneDeep.js"));

var _last = _interopRequireDefault(require("../../node_modules/lodash-es/last.js"));

var _isEqual = _interopRequireDefault(require("../../node_modules/lodash-es/isEqual.js"));

var _template = _interopRequireDefault(require("../../node_modules/lodash-es/template.js"));

var _utilIso = require("./util-iso.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var c = console.debug;
var ce = console.error;
var ci = console.info;
var cw = console.warn;
var info2 = console.info; // TODO delete

var info3 = console.info; // TODO delete
// This is the meta-information for the value of a reactive object's property. It has its own list of Watchers 
// (much like a Publisher) which it notifies whenever its internal value changes.

var KeyMeta =
/*#__PURE__*/
function () {
  function KeyMeta(key) {
    _classCallCheck(this, KeyMeta);

    this.previousValue = undefined;
    this.value = undefined;
    this.key = key;
    this.dependants = new Set();
    this.preExisting = null; // Whether or not there are pre-existing values on the target at this key (such as inherited or inbuilt properties)
  }

  _createClass(KeyMeta, [{
    key: "set",
    value: function set(value) {
      this.previousValue = this.value;
      this.value = value;
      this.notifyDependants();
      return this;
    }
  }, {
    key: "subscribeCurrentWatcher",
    value: function subscribeCurrentWatcher(watcherStack) {
      // The watcher must make sure it has added itself to this watcher list before trying to 
      // `get` any reactive properties, if it wants to be automatically registered as a dependency.
      if ((0, _last.default)(watcherStack)) {
        this.dependants.add((0, _last.default)(watcherStack)); // Add this dependency to the current target watcher
      } else {
        info3('[KeyMeta] Accessed property at $key without having any active watchers.', this.key);
      }
    }
  }, {
    key: "unsubscribeWatcher",
    value: function unsubscribeWatcher(watcher, keyMeta) {
      keyMeta.dependants.remove(watcher);
    }
  }, {
    key: "notifyDependants",
    value: function notifyDependants() {
      info2("[KeyMeta] Property has changed value at key:", this.key);
      var renderOutputs = Object.entries(this.dependants).map(function (dependant, key) {
        // Allow the dependants to tell us when they're done (if they're asynchronous),
        // so we can choose to perform something
        return Promise.resolve(dependant.update());
      });
      return Promise.all(renderOutputs);
    }
  }]);

  return KeyMeta;
}();
/*
	Each ReactiveProxy only stores reactive properties one level deep (its own direct children). 
	It recursively makes its extensible (property-having) children ReactiveProxies before adding them it its own properties.
*/


var ReactiveProxy =
/*#__PURE__*/
function () {
  function ReactiveProxy(targetObj, watchersToAssign) {
    _classCallCheck(this, ReactiveProxy);

    this.watchersToAssign = watchersToAssign || Watcher.stack;
    this.metas = {};
    this.originalObj = targetObj;
    ReactiveProxy.metasNamespace = '_reactiveVmNamespace_';
    return this.walk(targetObj); // Because we don't return an instance, all instance ("this") references are essentially private
  }
  /*
  	Recursively interate through a plain javascript object's properties to replace all its 
  	simple properties with proxies
  */


  _createClass(ReactiveProxy, [{
    key: "walk",
    value: function walk(target) {
      var _arr = Object.entries(target);

      for (var _i = 0; _i < _arr.length; _i++) {
        var _arr$_i = _slicedToArray(_arr[_i], 2),
            key = _arr$_i[0],
            child = _arr$_i[1];

        if (typeof child === 'function') {// TODO - how do we deal with functions?
        }

        if (key.match(/^\$/)) {
          // Special prefix to make plain objects/functions
          // TODO - do nothing?
          console.debug('plain $ prefix:', key);
        } else if (Object.isExtensible(child)) {
          // Anything that *can* have properties, we want to shim with a proxy so we can track those properties 
          // with a KeyMeta
          // Deep-recurse from the bottom up, overwriting any objects with Proxies
          target[key] = new ReactiveProxy(child);
        }
      }

      return this.makeProxy(target);
    }
  }, {
    key: "makeProxy",
    value: function makeProxy(target) {
      var _this = this;

      var _arr2 = Object.entries(target);

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
            key = _arr2$_i[0],
            val = _arr2$_i[1];

        this.metas[key] = new KeyMeta(key).set(val);
      }

      var handler = {
        get: function get(target, key, receiver) {
          /*
          	Affects:
          		`[]` accessor operator
          		`.` accessor operator
          */
          // info3(`TRAP --- get. getting key:`, key)
          var retrievedValue = _this.getKeyValue(target, key);

          return retrievedValue;
        },
        set: function set(target, key, value)
        /*receiver*/
        {
          /*
          	Affects:
          		`=` operator
          		Array.push()
          */
          // info3(`TRAP --- set. setting $key to $value:`, key, value)
          _this.setKeyValue(target, key, value, _this.getMeta(key, target));

          return true;
        },
        defineProperty: function defineProperty(target, key, descriptor) {
          /*
          	Affects:
          		Object.defineProperty()
          */
          // info3('TRAP --- defineProperty. descriptor:', descriptor)
          if ('value' in descriptor) {
            // Data descriptor
            _this.setKeyValue(target, key, descriptor.value, _this.getMeta(key, target), descriptor);

            return true;
          } else if (descriptor.get || descriptor.set) {
            // Accessor descriptor
            // We probably shouldn't let user interfere with accessors here
            return false;
          } else {
            // Value hasn't changed, so just update the descriptor attributes.
            // We're not changing the value so we probably don't need to call setKeyValue()
            Object.defineProperty(target, key, descriptor);
            return true;
          }
        },
        deleteProperty: function deleteProperty(target, key) {
          /*
          	Affects:
          		`delete` operator
          		Array.pop() ?
          */
          // info3('TRAP --- deleteProperty. key:', key)
          _this.deleteKey(target, key, _this.getMeta(key, target));
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, key) {
          // TODO: does this do anything different to the default? can we just remove this?

          /*
          	Affects:
          		Object.getOwnPropertyDescriptor(),
          		Object.keys(),
          		anObject.hasOwnProperty(),
          */
          // info3('TRAP --- getOwnPropertyDescriptor', key)
          var originalDescriptor = Object.getOwnPropertyDescriptor(target, key);
          return originalDescriptor;
        }
      };
      target = new Proxy(target, handler); // Write over target with its Proxy

      return target;
    }
  }, {
    key: "getMeta",
    value: function getMeta(key, target) {
      if (!key) throw Error('[getMeta] Key needed for method .getMeta(key)');
      var metasKey = key;

      if (typeof key === 'string' && key in this.metas) {
        // Need this to stop clashing with pre-existing properties of the this.metas object like Array.length or .push()
        metasKey = ReactiveProxy.metasNamespace + key;
      }

      if (!(metasKey in this.metas)) {
        // Consumer is trying to get a value of a property which doesn't (or rather, shouldn't) already exist, because 
        // none of the traps that should have been fired when someone added a value to this property's key have created 
        // a KeyMeta for this key
        this.addMeta(key, metasKey, target);
      } else if (!(this.metas[metasKey] instanceof KeyMeta)) {
        throw Error('[getMeta] this.metas already has this property on it, the value of which is *not* a KeyMeta');
      }

      return this.metas[metasKey];
    }
  }, {
    key: "addMeta",
    value: function addMeta(key, metasKey, target) {
      this.metas[metasKey] = new KeyMeta(key);

      if (key in target) {
        // This key shares a name with a property / method of these inbuilt objects
        if ([Object, Array, Function].some(function (inbuilt) {
          return key in inbuilt.prototype;
        })) {
          // This is a preexisting property, so we need to be cautious about our ability to track it
          this.metas[metasKey].preExisting = true;
        } else if (!target.hasOwnProperty(key)) {// This key is only present on the prototype chain
        }
      }

      if (typeof target !== 'undefined' && target[key]) {
        this.metas[metasKey].set(target[key]);
      }
    }
  }, {
    key: "getKeyValue",
    value: function getKeyValue(target, key) {
      var targetVal = target[key]; // Remember, this access could have gone through a proxy before returning to us

      var keyMeta = this.getMeta(key, target);

      if (!(0, _isEqual.default)(target[key], keyMeta.value) && typeof targetVal !== 'function') {
        info3("[ReactiveProxy] Target property \"".concat(key, "\" was changed without updating its KeyMeta (or notifying its dependants)"));
      }

      keyMeta.subscribeCurrentWatcher(this.watchersToAssign);
      return target[key];
    }
  }, {
    key: "setKeyValue",
    value: function setKeyValue(target, key, value, keyMeta, descriptor) {
      if (value !== keyMeta.value) {
        // Prevent unnecessary update runs
        if (Object.isExtensible(value)) {
          value = new ReactiveProxy(value); // We want to recurse to the bottom of the tree before starting to set values
        }

        keyMeta.set(value); // This is the part that actually informs watchers 

        if (keyMeta.preExisting) {
          info3("[ReactiveProxy:setKeyValue] Tried to set a preexisting property on the target, such as \"length\". Silently failing.");
        } else {
          var descriptorToAssign = Object.assign({
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          }, descriptor);
          Object.defineProperty(target, key, descriptorToAssign); // Touch the actual internal property
        }
      }
    }
  }, {
    key: "deleteKey",
    value: function deleteKey(target, key, keyMeta) {
      delete target[key];
      keyMeta.set(undefined);
    }
  }]);

  return ReactiveProxy;
}();
/*
	dependentProcess(oldOutput): a function which returns a value. This function can *depend on* the properties of a reactive object, and so
	each time those reactive properties change, this function is run again to "refresh" its output value. This is basically like
	a "render" function for a template, (and was made for that purpose), but can be used more abstractly.

	watcherStack: this is a global-like array of potential watchers that are added to each reactive property's *internal* list of
	subscribers as that reactive property is running its *getter* function. The watcher stack is filled up emphemerally and then 
	depleted for each individual reactive property.
*/


exports.ReactiveProxy = ReactiveProxy;

var Watcher =
/*#__PURE__*/
function () {
  function Watcher(dependentProcess, watcherStack) {
    _classCallCheck(this, Watcher);

    this.dependentProcess = dependentProcess; // Static properties

    Watcher.stack = Watcher.stack || new _utilIso.Stack();
    watcherStack = watcherStack || Watcher.stack;
    this.dependentOutput = null;
    this.update(); // Runs the process using initial values
  }

  _createClass(Watcher, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      var oldOutput = this.dependentOutput;
      this.watcherStack.push(this); // We add this watcher as the current target for the active Dep instance
      // Call the dependentProcess, which uses reactive properties to output something (like a component's HTML)

      this.dependentOutput = this.dependentProcess(oldOutput);

      if (this.dependentOutput instanceof Promise) {
        this.dependentOutput.then(function (val) {
          _this2.dependentOutput = val;

          _this2.watcherStack.pop();
        });
      } else {
        // We've stopped accessing reactive properties, so tell KeyMetas to stop looking for this watcher
        this.watcherStack.pop();
      }
    }
  }]);

  return Watcher;
}();

exports.Watcher = Watcher;
},{"../../node_modules/lodash-es/cloneDeep.js":"../node_modules/lodash-es/cloneDeep.js","../../node_modules/lodash-es/last.js":"../node_modules/lodash-es/last.js","../../node_modules/lodash-es/isEqual.js":"../node_modules/lodash-es/isEqual.js","../../node_modules/lodash-es/template.js":"../node_modules/lodash-es/template.js","./util-iso.js":"scripts/util-iso.js"}],"scripts/reactive-vm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactiveVm = void 0;

var _utilIso = require("./util-iso.js");

var _reactiveObject = require("./reactive-object.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
	Wrapper around ReactiveProxy which binds it to a DOM element, in order to use the ReactiveProxy as a "viewmodel"

	TODO: This basically acts as a factory rather than a normal class
	instance, because the constructor returns a non-instance object (the user
	cannot ever access the instance itself with `this`). Should we refactor/rename this?
*/
var ReactiveVm = function ReactiveVm() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$el = _ref.el,
      el = _ref$el === void 0 ? {} : _ref$el,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$methods = _ref.methods,
      methods = _ref$methods === void 0 ? {} : _ref$methods;

  _classCallCheck(this, ReactiveVm);

  var opt = {
    el: el,
    data: data,
    methods: methods // Save initial args into options object

  };

  if (typeof el === 'string') {
    var foundEls = document.querySelectorAll(el);
    el = foundEls[0];

    if (foundEls.length >= 2) {
      console.error('[ReactiveVm] Matched elements:', foundEls);
      throw Error('[ReactiveVm] Needs a *unique* selector; you provided a selector that matches >1 page elements.');
    }
  }

  if (el instanceof HTMLElement) {
    this.el = el;
  } else {
    throw Error('[ReactiveVm] needs an active HTMLElement object or a selector string which identifies to a unique HTMLElement as its `el` property.');
  }

  var watcherStack = new _utilIso.Stack();
  var vm = new _reactiveObject.ReactiveProxy(data, watcherStack); // Attach methods with '$' prefix to root of reactive vm object

  for (var key in opt.methods) {
    var fn = opt.methods[key];

    if (vm[key] === undefined) {
      vm['$' + key] = fn;
    } else {
      throw Error("[ReactiveVm] Property ".concat(key, " already exists; can't attach method of same name."));
    }
  } // Helper properties for user


  vm['$data'] = data;
  vm['$el'] = el;
  return vm;
};

exports.ReactiveVm = ReactiveVm;
},{"./util-iso.js":"scripts/util-iso.js","./reactive-object.js":"scripts/reactive-object.js"}],"scripts/entry.js":[function(require,module,exports) {
"use strict";

var _customElReg = require("./custom-el-reg.js");

var _reactiveVm = require("./reactive-vm.js");

var _reactiveObject = require("./reactive-object.js");

// Import globals to module-scope
var _window = window,
    document = _window.document,
    navigator = _window.navigator,
    location = _window.location; // Convenience

var $ = document.querySelector,
    $a = document.querySelectorAll;
var d = document; // Test

var objA = {
  aPropertyName: 'aValue',
  aDeeperObject: {
    aNumericalProp: 2
  }
};
var watcher = new _reactiveObject.Watcher(function (oldOutput) {
  var value = objA.aDeeperObject.aNumericalProp;
  console.debug('Watcher noticed a change in the value it was watching!', value);
});
document.addEventListener('DOMContentLoaded', function () {
  var reactiveDom = new _reactiveVm.ReactiveVm({
    data: objA,
    el: d.querySelector('[data-vm-target]'),
    methods: {
      sayChungus: function sayBungus() {
        console.debug('Chungus. This is:', this);
        console.debug("We're going to modify a reactive property...");
        this.aDeeperObject.aNumericalProp = 5;
        console.debug("...and then take a look at it:", this.aDeeperObject.aNumericalProp);
        return 'sup folks';
      }
    }
  });
  console.debug('say chungus please', reactiveDom.$sayChungus());
}); // DOMContentLoaded
// Bind to window for REPL use

window.r = reactiveDom;
},{"./custom-el-reg.js":"scripts/custom-el-reg.js","./reactive-vm.js":"scripts/reactive-vm.js","./reactive-object.js":"scripts/reactive-object.js"}]},{},["scripts/entry.js"], null)
//# sourceMappingURL=/entry.795e6af2.map