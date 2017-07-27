'use strict';

var strip = require('strip-markdown');
var remark = require('remark');

var processor = remark().use(strip);

var $input = document.querySelector('[autofocus]');
var $output = document.querySelector('[readonly]');

$input.addEventListener('input', oninputchange);

oninputchange();

/* Handlers. */
function oninputchange() {
  $output.textContent = processor.processSync($input.value).toString();
}
