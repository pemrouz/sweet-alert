window.swal = ({
  title = ''
, content = ''
, type = 'warning'
, buttons = [{ type: 'primary', text: 'Close' }]
}) => 
  once(window.document.body)('sweet-alert', { 
    title
  , content
  , type
  , buttons 
  }).node()