'use strict';

var list = require('emoji-list');

var simpleRandomEmoji = function(){
  return list[Math.floor(Math.random()*list.length)];
};

module.exports = simpleRandomEmoji;
