const mongoose = require("mongoose");

// Vegetables/Fruits schema
const vegetableFruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grams: { type: Number, required: true },
  costPerKg: { type: Number, required: true },
  costWePaid: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Milk schema
const milkSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  costWePaid: { type: Number, required: true },
  litre: { type: Number, required: true },
  mrp: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Kirana Store schema
const kiranaStoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grams: { type: Number, required: true },
  cost: { type: Number, required: true },
  brand: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Fast Food schema
const fastFoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  piecePlate: { type: String, required: true },
  place: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Home Needs schema
const homeNeedsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  piece: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Petrol schema
const petrolSchema = new mongoose.Schema({
  litre: { type: Number, required: true },
  kmDriven: { type: Number, required: true },
  cost: { type: Number, required: true },
  costPerLitre: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// House Rent schema
const houseRentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// WiFi schema
const wifiSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// OutingSchema
const outingSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now, // Automatically set current date if not provided
  },
  place: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
});

// Money schema
const moneySchema = new mongoose.Schema({
  vegetablesFruits: { type: [vegetableFruitSchema], default: [] },
  milk: { type: [milkSchema], default: [] },
  kiranaStore: { type: [kiranaStoreSchema], default: [] },
  fastFood: { type: [fastFoodSchema], default: [] },
  homeNeeds: { type: [homeNeedsSchema], default: [] },
  petrol: { type: [petrolSchema], default: [] },
  houseRent: { type: [houseRentSchema], default: [] },
  wifi: { type: [wifiSchema], default: [] },
  outing: { type: [outingSchema], default: [] },
});

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  money: { type: moneySchema, default: () => ({}) },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
