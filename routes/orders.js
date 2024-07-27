const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more order-related routes as needed

module.exports = router;