'use strict';

var assert = require('assert');
var simpleRandomEmoji = require('../');

// Is it really `emoji`? It is, when the first and the
// last characters are colons
// So:
// Draw emoji
var emoji = simpleRandomEmoji();
// check the first char
assert.equal(emoji.indexOf(':'), 0);
// and the last char
assert.equal(emoji.lastIndexOf(':'), emoji.length-1);
