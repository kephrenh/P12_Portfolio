const { hashPassword, comparePassword } = require("../helpers/auth.helper");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

// Register Endpoint
module.exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Check if fist name was entered
    if (!firstName) {
      return res.json({
        error: "First name is required",
      });
    }

    // Check sur,name was entered
    if (!lastName) {
      return res.json({
        error: "Last name is required",
      });
    }
    // Check is password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and shoud be at least 6 characters",
      });
    }

    // Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);
    // Create user in database
    const user = await User.create({ firstName, lastName, email, password: hashedPassword });

    return res.json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

// Login Endpoint
module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, firstName: user.firstName, lastName: user.lastName },
        JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Password does not match",
      });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

// Profile Endpoint
module.exports.getProfile = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};
