'use strict';

const mongoose = require('mongoose'),
  Kitten = require('./models/kitty.model');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  var silence = new Kitten({ name: 'Silence'});
  console.log('silence.name: ', silence.name);

  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak();
});
