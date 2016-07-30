export default function swal(state){
  const o = once(this)
      , m = o('.modal', 1)
      , { exit = false
        , title = ''
        , content = ''
        , type = 'warning'
        , buttons = [] } = state
      
  o(window)
    .on('keydown.escape', keydown)

  o.classed('exit', exit)
    ('.overlay', 1, null, '.modal')

  m('.icon', 1)
    .classed('question', type == 'question')
    .classed('success', type == 'success')
    .classed('working', type == 'working')
    .classed('warning', type == 'warning')
    .classed('loading', type == 'loading')
    .classed('error', type == 'error')
    .classed('info', type == 'info')

  m('.title', 1)
    .text(title)

  m('.content', 1)
    .html(content)

  m('button', buttons)
    .text(d => d.text)
    .attr('class', d => d.type)
    .on('click.default', (d, i, el, e) => (d.onClick || close)(d, i, el, e))

  function close() {
    state.exit = true
    o.draw()
    time(410, d => o.remove())
  }

  function keydown(d, i, el, e) {
    if (e.key == 'Escape') close()
  }
  
  def(this, close)
}

owner.swal = opts => once(document.body)
  ('sweet-alert', overwrite({
    type: ''
  , title: ''
  , content: ''
  , buttons: []
  })(opts))