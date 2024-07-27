const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  paymentMethods: [{
    type: String,
    cardNumber: String,
    expirationDate: String,
    cvv: String
  }]
});

module.exports = mongoose.model('User', UserSchema);