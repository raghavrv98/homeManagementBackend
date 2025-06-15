const express = require("express");
const router = express.Router();
const User = require("../../models/users");

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Optional: Add validation here
    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Username and password are required." });
    }

    // Optional: Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password, // use hashedPassword instead if hashing
    });

    const savedUser = await newUser.save();
    res.status(201).json({ data: savedUser, msg: "User created successfully" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) throw Error("No users found");
    res.status(200).json({ data: users, msg: "Users fetched successfully" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Get user by username (partial match)
router.get("/users/:name", async (req, res) => {
  try {
    const users = await User.find({
      username: { $regex: req.params.name, $options: "i" },
    });
    if (!users.length) throw Error("No users found");
    res.status(200).json({ data: users, msg: "Users fetched successfully" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Add a money category entry (vegetables, milk, etc.)
router.post("/user/:username/:category", async (req, res) => {
  const { username, category } = req.params;
  const entry = req.body;

  const validCategories = [
    "vegetablesFruits",
    "milk",
    "kiranaStore",
    "fastFood",
    "homeNeeds",
    "petrol",
    "houseRent",
    "wifi",
    "outing",
    "electricity",
    "gas",
  ];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ msg: "Invalid category name" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ msg: "User not found" });

    user.money[category].push(entry);
    await user.save();

    res.status(200).json({
      data: user.money[category],
      msg: `${category} updated successfully for ${username}`,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Get all entries for a category
router.get("/user/:username/:category", async (req, res) => {
  const { username, category } = req.params;

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const entries = user.money[category];

    if (!entries) return res.status(400).json({ msg: "Invalid category" });

    res.status(200).json({ data: entries, msg: `${category} entries fetched` });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;

router.get("/user/:username/:category/filter", async (req, res) => {
  const { username, category } = req.params;
  const { date } = req.query;

  const validCategories = [
    "vegetablesFruits",
    "milk",
    "kiranaStore",
    "fastFood",
    "homeNeeds",
    "petrol",
    "houseRent",
    "wifi",
    "outing",
    "electricity",
    "gas",
  ];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ msg: "Invalid category name" });
  }

  if (!date) {
    return res.status(400).json({ msg: "Date is required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const selectedDate = new Date(date);
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1); // end of that day

    const filteredData = user.money[category].filter((entry) => {
      const entryDate = new Date(entry.timestamp);
      return entryDate >= selectedDate && entryDate < nextDate;
    });

    res.status(200).json({
      data: filteredData,
      msg: `Filtered ${category} entries for ${date}`,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//Edit entry API
router.put("/user/:username/:category/:entryId", async (req, res) => {
  const { username, category, entryId } = req.params;
  const updatedData = req.body;

  const validCategories = [
    "vegetablesFruits",
    "milk",
    "kiranaStore",
    "fastFood",
    "homeNeeds",
    "petrol",
    "houseRent",
    "wifi",
    "outing",
    "electricity",
    "gas",
  ];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ msg: "Invalid category name" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const categoryArray = user.money[category];
    const entryIndex = categoryArray.findIndex(
      (entry) => entry._id.toString() === entryId
    );

    if (entryIndex === -1) {
      return res.status(404).json({ msg: "Entry not found" });
    }

    user.money[category][entryIndex] = {
      ...categoryArray[entryIndex],
      ...updatedData,
    };

    await user.save();

    res.status(200).json({
      data: user.money[category][entryIndex],
      msg: `Entry updated successfully`,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Delete entry API

router.delete("/user/:username/:category/:entryId", async (req, res) => {
  const { username, category, entryId } = req.params;

  const validCategories = [
    "vegetablesFruits",
    "milk",
    "kiranaStore",
    "fastFood",
    "homeNeeds",
    "petrol",
    "houseRent",
    "wifi",
    "outing",
    "electricity",
    "gas",
  ];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ msg: "Invalid category name" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const originalLength = user.money[category].length;

    user.money[category] = user.money[category].filter(
      (entry) => entry._id.toString() !== entryId
    );

    if (user.money[category].length === originalLength) {
      return res.status(404).json({ msg: "Entry not found" });
    }

    await user.save();

    res.status(200).json({
      data: user.money[category],
      msg: `Entry deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
