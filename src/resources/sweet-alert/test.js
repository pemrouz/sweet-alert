import 'utilise'
import 'browserenv'
import scope from 'cssscope'
import swal from './sweet-alert'

const style = window.getComputedStyle
    , o = once(document.body)('.container', 1, null, ':first-child')
    , test = require('tap').test
    
once(document.head)
  ('style', 1)
    .html(scope(file(__dirname + '/sweet-alert.css'), 'sweet-alert'))

test('basic state', t => {
  t.plan(1)

  const host = o('sweet-alert', 1).node()
  swal.call(host, { 
    type: 'warning'
  , title: 'some title'
  , content: 'some <b>html</b> content'
  , buttons: [{ text: 'close', type: 'primary' }] 
  })

  t.equal(lo(host.outerHTML), stripws`
    <sweet-alert>
      <div class="overlay"></div>
      <div class="modal">
        <div class="icon warning"></div>
        <div class="title">some title</div>
        <div class="content">some <b>html</b> content</div>
        <button class="primary">close</button>
      </div>
    </sweet-alert>`, 'basic structure')

  o.html('')
})