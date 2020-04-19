const { omit } = require("lodash");

const Food = require("./food.model");

/**
 * Get food
 * @public
 */
exports.get = async (id) => Food.get(id);

/**
 * Get logged in food info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.food.transform());

/**
 * Create new food
 * @public
 */
exports.create = async (foodData) => {
  try {
    const food = new Food(foodData);
    const savedFood = await food.save();
    return savedFood.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Replace existing food
 * @public
 */
exports.replace = async (food, newFoodData) => {
  try {
    const newFood = new Food(newFoodData);
    const newFoodObject = omit(newFood.toObject(), "_id");

    await food.update(newFoodObject, { override: true, upsert: true });
    const savedFood = await Food.findById(food._id);

    return savedFood.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Update existing food
 * @public
 */
exports.update = async (food, updatedData) => {
  try {
    const savedFood = await updatedFood.save();
    return savedFood.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Get food list
 * @public
 */
exports.list = async (params) => {
  try {
    const foods = await Food.list(params);
    const transformedFoods = foods.map((food) => food.transform());
    return transformedFoods;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete food
 * @public
 */
exports.remove = async (food) => food.remove();
