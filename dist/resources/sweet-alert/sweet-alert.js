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