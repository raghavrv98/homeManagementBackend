const mongoose = require("mongoose");

// amishaIncomeSchema
const amishaIncomeSchema = new mongoose.Schema({
  source: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// amishaInvestmentSchema
const amishaInvestmentSchema = new mongoose.Schema({
  cost: { type: Number, required: true },
  fromIncome: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// amishaExpenseSchema
const amishaExpenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// amishaRepaySchema
const amishaRepaySchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// amishaGiftCostSchema
const amishaGiftCostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

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

// Electricity schema
const electricitySchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Gas schema
const gasSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// OutingSchema
const outingSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  place: { type: String, required: true },
  cost: { type: Number, required: true },
  numberOfDays: { type: Number, required: true },
});

// IncomeSchema
const incomeSchema = new mongoose.Schema({
  source: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// InvestmentSchema
const investmentSchema = new mongoose.Schema({
  cost: { type: Number, required: true },
  type: { type: String, required: true }, // e.g., mutual fund, stock, SIP
  timestamp: { type: Date, default: Date.now },
});

// LicSchema
const licSchema = new mongoose.Schema({
  policyNumber: { type: String, required: true },
  memberName: { type: String, required: false },
  cost: { type: Number, required: true },
  maturityDate: { type: Date, required: true },
  maturityAmount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// ParentsSchema
const parentsSchema = new mongoose.Schema({
  reason: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// HomeloanSchema
const homeloanSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  policyNumber: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// personalExpenseSchema
const personalExpenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// advityaFlatCostSchema
const advityaFlatCostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// mumbaiHomeSetupCostSchema
const mumbaiHomeSetupCostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  place: { type: String },
  howOld: { type: String },
  timestamp: { type: Date, default: Date.now },
});

// Cred Loan Repay schema
const credLoanRepaySchema = new mongoose.Schema({
  cost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Money schema with all categories
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
  electricity: { type: [electricitySchema], default: [] },
  gas: { type: [gasSchema], default: [] },
  credLoanRepay: { type: [credLoanRepaySchema], default: [] },
  income: { type: [incomeSchema], default: [] },
  investment: { type: [investmentSchema], default: [] },
  lic: { type: [licSchema], default: [] },
  parents: { type: [parentsSchema], default: [] },
  homeloan: { type: [homeloanSchema], default: [] },
  personalExpense: { type: [personalExpenseSchema], default: [] },
  advityaFlatCost: { type: [advityaFlatCostSchema], default: [] },
  mumbaiHomeSetupCost: { type: [mumbaiHomeSetupCostSchema], default: [] },
  amishaIncome: { type: [amishaIncomeSchema], default: [] },
  amishaInvestment: { type: [amishaInvestmentSchema], default: [] },
  amishaExpenses: { type: [amishaExpenseSchema], default: [] },
  amishaRepay: { type: [amishaRepaySchema], default: [] },
  amishaGiftCost: { type: [amishaGiftCostSchema], default: [] },
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
