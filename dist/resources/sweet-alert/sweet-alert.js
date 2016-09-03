'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = swal;
function swal(node, state) {
  var o = once(node);
  var m = o('.modal', 1);
  var _state$exit = state.exit;
  var exit = _state$exit === undefined ? false : _state$exit;
  var _state$title = state.title;
  var title = _state$title === undefined ? '' : _state$title;
  var _state$content = state.content;
  var content = _state$content === undefined ? '' : _state$content;
  var _state$type = state.type;
  var type = _state$type === undefined ? 'warning' : _state$type;
  var _state$buttons = state.buttons;
  var buttons = _state$buttons === undefined ? [] : _state$buttons;


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

owner.swal = function (opts) {
  return once(document.body)('sweet-alert', overwrite({
    type: '',
    title: '',
    content: '',
    buttons: []
  })(opts));
};