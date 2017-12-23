const mongoose = require('mongoose');
const db = mongoose.connection;
const User = require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/word4word', {
  useMongoClient: true
});

db.on('error', console.error.bind(console, 'connection error!:'));
db.once('open', () => { console.log('db connected!') });

exports.User = User;
