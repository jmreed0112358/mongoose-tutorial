'use strict';

var path = require('path'),
  mongoose = require('mongoose'),
  Kitten = require('./models/kitty.model');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  var silence = new Kitten({ name: 'Silence'});
  console.log('silence.name: ', silence.name);

  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak();

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);

    fluffy.speak();

    Kitten.find({}).remove().exec();

    mongoose.disconnect();
  });
});
