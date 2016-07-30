# `sweet-alert`

[![image](https://img.shields.io/badge/component-vanilla-green.svg?style=flat-square)](https://github.com/pemrouz/vanilla/#vanilla)

[![Browser Results](https://saucelabs.com/browser-matrix/sweet-alert.svg)](https://saucelabs.com/u/sweet-alert)

A beautiful replacement for JavaScript's `alert`

<img src="https://raw.githubusercontent.com/pemrouz/sweet-alert/master/demo.gif">

### [Usage](https://github.com/pemrouz/vanilla/#using)

In addition, there is a global `swal` helper since you mostly only want one instance.

### State

* **`title = ''`**: The main heading to display

* **`content = ''`**: Extra HTML to display below the icon

* **`type = 'warning'`**: The icon type, can be `warning | error | success | working`

* **`buttons = []`**: An array of objects representing the buttons to display, in the form of: `{ text, onClick, type }`. `onClick` is the function to be invoked on clicked (closes the dialog if none omitted) and `type` is used to make the button `primary` (different colour).

<br>
### API

* **`close`**: Closes the dialog