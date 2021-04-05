// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"build.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.latin.woff2":[["FiraGO-SemiBold.latin.d3fdbea2.woff2","fonts/FiraGO-SemiBold.latin.woff2"],"fonts/FiraGO-SemiBold.latin.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.latin-ext.woff2":[["FiraGO-SemiBold.latin-ext.3df2403c.woff2","fonts/FiraGO-SemiBold.latin-ext.woff2"],"fonts/FiraGO-SemiBold.latin-ext.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.cyrillic.woff2":[["FiraGO-SemiBold.cyrillic.33fc610a.woff2","fonts/FiraGO-SemiBold.cyrillic.woff2"],"fonts/FiraGO-SemiBold.cyrillic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.special.woff2":[["FiraGO-SemiBold.special.89cd79ba.woff2","fonts/FiraGO-SemiBold.special.woff2"],"fonts/FiraGO-SemiBold.special.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.greek.woff2":[["FiraGO-SemiBold.greek.b626dad6.woff2","fonts/FiraGO-SemiBold.greek.woff2"],"fonts/FiraGO-SemiBold.greek.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.hebrew.woff2":[["FiraGO-SemiBold.hebrew.d2bb3280.woff2","fonts/FiraGO-SemiBold.hebrew.woff2"],"fonts/FiraGO-SemiBold.hebrew.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.arabic.woff2":[["FiraGO-SemiBold.arabic.88d698fd.woff2","fonts/FiraGO-SemiBold.arabic.woff2"],"fonts/FiraGO-SemiBold.arabic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.devanagari.woff2":[["FiraGO-SemiBold.devanagari.61c7f9f5.woff2","fonts/FiraGO-SemiBold.devanagari.woff2"],"fonts/FiraGO-SemiBold.devanagari.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.thai.woff2":[["FiraGO-SemiBold.thai.bcf5f460.woff2","fonts/FiraGO-SemiBold.thai.woff2"],"fonts/FiraGO-SemiBold.thai.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.georgian.woff2":[["FiraGO-SemiBold.georgian.2bc38aaf.woff2","fonts/FiraGO-SemiBold.georgian.woff2"],"fonts/FiraGO-SemiBold.georgian.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-SemiBold.shared.woff2":[["FiraGO-SemiBold.shared.df845833.woff2","fonts/FiraGO-SemiBold.shared.woff2"],"fonts/FiraGO-SemiBold.shared.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.latin.woff2":[["FiraGO-Bold.latin.d461db47.woff2","fonts/FiraGO-Bold.latin.woff2"],"fonts/FiraGO-Bold.latin.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.latin-ext.woff2":[["FiraGO-Bold.latin-ext.3f6f1a6d.woff2","fonts/FiraGO-Bold.latin-ext.woff2"],"fonts/FiraGO-Bold.latin-ext.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.cyrillic.woff2":[["FiraGO-Bold.cyrillic.cdb3c47f.woff2","fonts/FiraGO-Bold.cyrillic.woff2"],"fonts/FiraGO-Bold.cyrillic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.special.woff2":[["FiraGO-Bold.special.05d2718f.woff2","fonts/FiraGO-Bold.special.woff2"],"fonts/FiraGO-Bold.special.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.greek.woff2":[["FiraGO-Bold.greek.41dfe85e.woff2","fonts/FiraGO-Bold.greek.woff2"],"fonts/FiraGO-Bold.greek.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.hebrew.woff2":[["FiraGO-Bold.hebrew.dbdfaad3.woff2","fonts/FiraGO-Bold.hebrew.woff2"],"fonts/FiraGO-Bold.hebrew.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.arabic.woff2":[["FiraGO-Bold.arabic.d6a527a6.woff2","fonts/FiraGO-Bold.arabic.woff2"],"fonts/FiraGO-Bold.arabic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.devanagari.woff2":[["FiraGO-Bold.devanagari.b6d0ea34.woff2","fonts/FiraGO-Bold.devanagari.woff2"],"fonts/FiraGO-Bold.devanagari.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.thai.woff2":[["FiraGO-Bold.thai.3afe0622.woff2","fonts/FiraGO-Bold.thai.woff2"],"fonts/FiraGO-Bold.thai.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.georgian.woff2":[["FiraGO-Bold.georgian.fc834296.woff2","fonts/FiraGO-Bold.georgian.woff2"],"fonts/FiraGO-Bold.georgian.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Bold.shared.woff2":[["FiraGO-Bold.shared.13609f0b.woff2","fonts/FiraGO-Bold.shared.woff2"],"fonts/FiraGO-Bold.shared.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.latin.woff2":[["FiraGO-Book.latin.4b2b0f82.woff2","fonts/FiraGO-Book.latin.woff2"],"fonts/FiraGO-Book.latin.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.latin-ext.woff2":[["FiraGO-Book.latin-ext.2a45431b.woff2","fonts/FiraGO-Book.latin-ext.woff2"],"fonts/FiraGO-Book.latin-ext.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.cyrillic.woff2":[["FiraGO-Book.cyrillic.30f979fa.woff2","fonts/FiraGO-Book.cyrillic.woff2"],"fonts/FiraGO-Book.cyrillic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.special.woff2":[["FiraGO-Book.special.e353acac.woff2","fonts/FiraGO-Book.special.woff2"],"fonts/FiraGO-Book.special.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.greek.woff2":[["FiraGO-Book.greek.8680400e.woff2","fonts/FiraGO-Book.greek.woff2"],"fonts/FiraGO-Book.greek.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.hebrew.woff2":[["FiraGO-Book.hebrew.fb47c59a.woff2","fonts/FiraGO-Book.hebrew.woff2"],"fonts/FiraGO-Book.hebrew.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.arabic.woff2":[["FiraGO-Book.arabic.71ce8af8.woff2","fonts/FiraGO-Book.arabic.woff2"],"fonts/FiraGO-Book.arabic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.devanagari.woff2":[["FiraGO-Book.devanagari.ba75f9f3.woff2","fonts/FiraGO-Book.devanagari.woff2"],"fonts/FiraGO-Book.devanagari.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.thai.woff2":[["FiraGO-Book.thai.0045afa8.woff2","fonts/FiraGO-Book.thai.woff2"],"fonts/FiraGO-Book.thai.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.georgian.woff2":[["FiraGO-Book.georgian.184afa67.woff2","fonts/FiraGO-Book.georgian.woff2"],"fonts/FiraGO-Book.georgian.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Book.shared.woff2":[["FiraGO-Book.shared.4925ebed.woff2","fonts/FiraGO-Book.shared.woff2"],"fonts/FiraGO-Book.shared.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.latin.woff2":[["FiraGO-Medium.latin.cd76c0ef.woff2","fonts/FiraGO-Medium.latin.woff2"],"fonts/FiraGO-Medium.latin.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.latin-ext.woff2":[["FiraGO-Medium.latin-ext.d109f70f.woff2","fonts/FiraGO-Medium.latin-ext.woff2"],"fonts/FiraGO-Medium.latin-ext.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.cyrillic.woff2":[["FiraGO-Medium.cyrillic.9d7ecb28.woff2","fonts/FiraGO-Medium.cyrillic.woff2"],"fonts/FiraGO-Medium.cyrillic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.special.woff2":[["FiraGO-Medium.special.ff041582.woff2","fonts/FiraGO-Medium.special.woff2"],"fonts/FiraGO-Medium.special.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.greek.woff2":[["FiraGO-Medium.greek.f19862ab.woff2","fonts/FiraGO-Medium.greek.woff2"],"fonts/FiraGO-Medium.greek.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.hebrew.woff2":[["FiraGO-Medium.hebrew.ae1fb169.woff2","fonts/FiraGO-Medium.hebrew.woff2"],"fonts/FiraGO-Medium.hebrew.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.arabic.woff2":[["FiraGO-Medium.arabic.e0368da1.woff2","fonts/FiraGO-Medium.arabic.woff2"],"fonts/FiraGO-Medium.arabic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.devanagari.woff2":[["FiraGO-Medium.devanagari.9e790cd0.woff2","fonts/FiraGO-Medium.devanagari.woff2"],"fonts/FiraGO-Medium.devanagari.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.thai.woff2":[["FiraGO-Medium.thai.ac014a76.woff2","fonts/FiraGO-Medium.thai.woff2"],"fonts/FiraGO-Medium.thai.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.georgian.woff2":[["FiraGO-Medium.georgian.7c85ae65.woff2","fonts/FiraGO-Medium.georgian.woff2"],"fonts/FiraGO-Medium.georgian.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Medium.shared.woff2":[["FiraGO-Medium.shared.8336010d.woff2","fonts/FiraGO-Medium.shared.woff2"],"fonts/FiraGO-Medium.shared.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.latin.woff2":[["FiraGO-Regular.latin.abdfe1ca.woff2","fonts/FiraGO-Regular.latin.woff2"],"fonts/FiraGO-Regular.latin.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.latin-ext.woff2":[["FiraGO-Regular.latin-ext.9625d1e2.woff2","fonts/FiraGO-Regular.latin-ext.woff2"],"fonts/FiraGO-Regular.latin-ext.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.cyrillic.woff2":[["FiraGO-Regular.cyrillic.287af775.woff2","fonts/FiraGO-Regular.cyrillic.woff2"],"fonts/FiraGO-Regular.cyrillic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.special.woff2":[["FiraGO-Regular.special.d524dbef.woff2","fonts/FiraGO-Regular.special.woff2"],"fonts/FiraGO-Regular.special.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.greek.woff2":[["FiraGO-Regular.greek.056e928d.woff2","fonts/FiraGO-Regular.greek.woff2"],"fonts/FiraGO-Regular.greek.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.hebrew.woff2":[["FiraGO-Regular.hebrew.6701b489.woff2","fonts/FiraGO-Regular.hebrew.woff2"],"fonts/FiraGO-Regular.hebrew.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.arabic.woff2":[["FiraGO-Regular.arabic.f81fd1a5.woff2","fonts/FiraGO-Regular.arabic.woff2"],"fonts/FiraGO-Regular.arabic.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.devanagari.woff2":[["FiraGO-Regular.devanagari.bd6b4313.woff2","fonts/FiraGO-Regular.devanagari.woff2"],"fonts/FiraGO-Regular.devanagari.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.thai.woff2":[["FiraGO-Regular.thai.b014f297.woff2","fonts/FiraGO-Regular.thai.woff2"],"fonts/FiraGO-Regular.thai.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.georgian.woff2":[["FiraGO-Regular.georgian.320a77a3.woff2","fonts/FiraGO-Regular.georgian.woff2"],"fonts/FiraGO-Regular.georgian.woff2"],"/home/lucas/Área de Trabalho/Meu/Projetos Pessoais/Resume/resume/docs/fonts/FiraGO-Regular.shared.woff2":[["FiraGO-Regular.shared.e4395f0d.woff2","fonts/FiraGO-Regular.shared.woff2"],"fonts/FiraGO-Regular.shared.woff2"],"_css_loader":"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36897" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/build.js.map