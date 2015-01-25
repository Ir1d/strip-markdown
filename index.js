'use strict';

/*
 * Dependencies.
 */

var stripMarkdown = require('wooorm/strip-markdown@0.1.0');
var mdast = require('wooorm/mdast@0.1.10').use(stripMarkdown);
var debounce = require('component/debounce@1.0.0');

/*
 * DOM nodes.
 */

var $input = document.querySelector('[autofocus]');
var $output = document.querySelector('[readonly]');

/*
 * Handlers.
 */

function oninputchange() {
    $output.textContent = mdast.stringify(mdast.parse($input.value));
}

/*
 * Listen.
 */

$input.addEventListener('input', debounce(oninputchange, 200));

/*
 * Initial answer.
 */

oninputchange();
