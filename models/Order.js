const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  totalAmount: Number,
  shippingAddress: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  paymentMethod: {
    type: String,
    cardNumber: String
  },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);