'use strict';

/* Dependencies. */
var strip = require('strip-markdown');
var remark = require('remark');

var processor = remark().use(strip);

/* Nodes. */
var $input = document.querySelector('[autofocus]');
var $output = document.querySelector('[readonly]');

/* Listen. */
$input.addEventListener('input', oninputchange);

/* Initial answer. */
oninputchange();

/* Handlers. */
function oninputchange() {
  console.log('$input: ', $input.value);
  $output.textContent = processor.process($input.value).toString();
  console.log('$output: ', $output.value);
}
