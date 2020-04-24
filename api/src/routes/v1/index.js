const express = require("express");

const userRoutes = require("../../services/user/user.route");
const authRoutes = require("../../services/auth/auth.route");
const foodRoutes = require("../../services/food/food.route");
const donationRoutes = require("../../services/donation/donation.route");
const requestRoutes = require("../../services/request/request.route");
const FOOD_STORAGE_DATA = require("../../utils/MOCK_PRODUCT_DATA.json");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.status(200).send("OK"));

/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

/**
 * GET v1/____
 */
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/food", foodRoutes);
router.use("/donation", donationRoutes);
router.use("/request", requestRoutes);

/**
 * GET Food Storage Data
 */
router.get("/food-storage", (req, res) => {
  res.status(200).send(FOOD_STORAGE_DATA)
});

module.exports = router;
