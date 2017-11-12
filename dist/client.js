(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sweetalert = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = swal;
function swal(node, state) {
  var o = once(node),
      m = o('.modal', 1),
      _state$exit = state.exit,
      exit = _state$exit === undefined ? false : _state$exit,
      _state$title = state.title,
      title = _state$title === undefined ? '' : _state$title,
      _state$content = state.content,
      content = _state$content === undefined ? '' : _state$content,
      _state$type = state.type,
      type = _state$type === undefined ? 'warning' : _state$type,
      _state$buttons = state.buttons,
      buttons = _state$buttons === undefined ? [] : _state$buttons;


  o(window).on('keydown.escape', keydown);

  o.classed('exit', exit)('.overlay', 1, null, '.modal');

  m('.icon', 1).classed('question', type == 'question').classed('success', type == 'success').classed('working', type == 'working').classed('warning', type == 'warning').classed('loading', type == 'loading').classed('error', type == 'error').classed('info', type == 'info');

  m('.title', 1).text(title);

  m('.content', 1).html(content);

  m('button', buttons).text(function (d) {
    return d.text;
  }).attr('class', function (d) {
    return d.type;
  }).on('click.default', function (d, i, el, e) {
    return (d.onClick || close)(d, i, el, e);
  });

  function close() {
    state.exit = true;
    o.draw();
    time(410, function (d) {
      return o.remove();
    });
  }

  function keydown(d, i, el, e) {
    if (e.key == 'Escape') close();
  }

  def(node, close);
}
},{}],2:[function(require,module,exports){
module.exports = {
    "sweet-alert.css": {
        "name": "sweet-alert.css",
        "body": "*, \r\n*::before, \r\n*::after {\r\n  box-sizing: border-box;  }\r\n\r\n:host {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1000;\r\n  animation: sweet-alert-filter-in 400ms;\r\n  animation-fill-mode: forwards;\r\n  font-family: inherit; }\r\n\r\n:host(.exit) {\r\n  animation: sweet-alert-filter-out 400ms; }\r\n\r\n.overlay {\r\n  display: block; \r\n  opacity: 0.5;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: black;\r\n  z-index: 1000; }\r\n\r\n.modal {\r\n  position: fixed;\r\n  display: block;\r\n  width: 500px;\r\n  min-height: 313px;\r\n  background: white;\r\n  padding: 20px;\r\n  margin-left: -250px;\r\n  margin-top: -156px;\r\n  left: 50%;\r\n  top: 50%;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  border: 1px solid rgba(0,0,0,0.25);\r\n  box-shadow: 0 0 18px rgba(0,0,0,0.4);\r\n  z-index: 2000; }\r\n\r\n  .icon {\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 4px solid grey;\r\n    border-radius: 50%;\r\n    margin: 20px auto;\r\n    box-sizing: content-box;\r\n    cursor: default;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none; }\r\n\r\n    .icon::before,\r\n    .icon::after {\r\n      opacity: 1;\r\n      content: ''; \r\n      display: block;\r\n      position: absolute; \r\n      transition: 200ms all;\r\n      border-radius: 10px; }\r\n\r\n  .icon.warning {\r\n    border-color: #f8bb86; }\r\n\r\n    .icon.warning::before {\r\n      width: 5px;\r\n      height: 45px;\r\n      background: #f8bb86;\r\n      top: 10px;\r\n      left: 38px;}\r\n\r\n    .icon.warning::after {\r\n      width: 7px;\r\n      height: 7px;\r\n      background: #f8bb86;\r\n      top: 60px;\r\n      left: 37px; }\r\n\r\n  .icon.error {\r\n    border-color: #f27474; }\r\n\r\n    .icon.error::before {\r\n      width: 5px;\r\n      height: 50px;\r\n      background: #f27474;\r\n      top: 17px;\r\n      left: 38px;\r\n      transform: rotate(-45deg); }\r\n\r\n    .icon.error::after {\r\n      width: 5px;\r\n      height: 50px;\r\n      background: #f27474;\r\n      top: 17px;\r\n      left: 38px; \r\n      transform: rotate(45deg); }\r\n\r\n  .icon.success {\r\n    border-color: #a5dc86; }\r\n\r\n    .icon.success::before {\r\n      width: 5px;\r\n      height: 45px;\r\n      background: #a5dc86;\r\n      top: 18px;\r\n      left: 46px;\r\n      transform: rotate(45deg); }\r\n\r\n    .icon.success::after {\r\n      width: 25px;\r\n      height: 5px;\r\n      background: #a5dc86;\r\n      top: 46px;\r\n      left: 14px;\r\n      transform: rotate(45deg); }\r\n\r\n  .icon.working {\r\n    animation: sweet-alert-spin 1000ms linear infinite;\r\n    border-color: transparent;\r\n    border-top-color: #f8bb86; }\r\n\r\n  .title {\r\n    line-height: 50px;\r\n    font-family: inherit;\r\n    font-size: 20px;\r\n    font-weight: bold; }\r\n\r\n  .content {\r\n    line-height: 30px;\r\n    font-size: 16px; }\r\n\r\n  button {\r\n    border-radius: 3px;\r\n    background: #298eea;\r\n    cursor: pointer;\r\n    color: white;\r\n    padding: 10px;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    margin: 20px 7px 0px;\r\n    line-height: 1em;\r\n    display: inline-block;\r\n    border: none; }\r\n\r\n  button:hover {\r\n    background: #2180d7; }\r\n\r\n  button.primary {\r\n    background: #15CD72; }\r\n\r\n  button.primary:hover {\r\n    background: #0CB863; }\r\n\r\n@keyframes sweet-alert-filter-in {\r\n  0% { \r\n    opacity: 0; \r\n    filter: blur(60px); \r\n    transform: scale(2); \r\n    -webkit-filter: blur(60px);\r\n  }\r\n  100% { \r\n    opacity: 1; \r\n    filter: blur(0px);\r\n    transform: scale(1); \r\n    -webkit-filter: blur(0px); \r\n  }\r\n}\r\n\r\n@keyframes sweet-alert-filter-out {\r\n  0% { \r\n    opacity: 1; \r\n    filter: blur(0px);\r\n    transform: scale(1); \r\n    -webkit-filter: blur(0px); \r\n  }\r\n  100% { \r\n    opacity: 0; \r\n    filter: blur(60px);\r\n    transform: scale(2); \r\n    -webkit-filter: blur(60px);  \r\n  }\r\n}\r\n\r\n@keyframes sweet-alert-spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}"
    },
    "sweet-alert": {
        "name": "sweet-alert",
        "body": require('./sweet-alert/sweet-alert.js').default || require('./sweet-alert/sweet-alert.js'),
        "headers": {
            "needs": "[css]"
        }
    }
}
},{"./sweet-alert/sweet-alert.js":1}]},{},[2])(2)
});