// models/subscription.js
const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model("Subscription", subscriptionSchema);
