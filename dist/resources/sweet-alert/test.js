'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    <sweet-alert>\n      <div class="overlay"></div>\n      <div class="modal">\n        <div class="icon warning"></div>\n        <div class="title">some title</div>\n        <div class="content">some <b>html</b> content</div>\n        <button class="primary">close</button>\n      </div>\n    </sweet-alert>'], ['\n    <sweet-alert>\n      <div class="overlay"></div>\n      <div class="modal">\n        <div class="icon warning"></div>\n        <div class="title">some title</div>\n        <div class="content">some <b>html</b> content</div>\n        <button class="primary">close</button>\n      </div>\n    </sweet-alert>']);

require('utilise');

require('browserenv');

var _tap = require('tap');

var _tap2 = _interopRequireDefault(_tap);

var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

var _sweetAlert = require('./sweet-alert');

var _sweetAlert2 = _interopRequireDefault(_sweetAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var style = window.getComputedStyle,
    o = once(document.body)('.container', 1, null, ':first-child');

once(document.head)('style', 1).html((0, _cssscope2.default)(file(__dirname + '/sweet-alert.css'), 'sweet-alert'));

_tap2.default.test('basic state', function (t) {
  t.plan(1);

  var host = o('sweet-alert', 1).node();
  _sweetAlert2.default.call(host, {
    type: 'warning',
    title: 'some title',
    content: 'some <b>html</b> content',
    buttons: [{ text: 'close', type: 'primary' }]
  });

  t.equal(lo(host.outerHTML), stripws(_templateObject), 'basic structure');

  o.html('');
});