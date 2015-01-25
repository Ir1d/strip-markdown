'use strict';

/*
 * Dependencies.
 */

var stripMarkdown = require('wooorm/strip-markdown@0.1.0');
var mdast = require('wooorm/mdast@0.1.11').use(stripMarkdown);

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

$input.addEventListener('input', oninputchange);

/*
 * Initial answer.
 */

oninputchange();
