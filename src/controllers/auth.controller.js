const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const { username, email, password, role } = req.body;

  const isAlreadyRegister = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isAlreadyRegister) {
    return res.status(400).json({
      message: "User with same username, email already exists",
    });
  }

  const safeRole = "user";

  const user = await userModel.create({
    username,
    email,
    password,
    role: safeRole,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "user Register successfully.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

const loginController = async (req, res) => {
  const { email, password, username } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "User logged successfully.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

const profileController = async( req, res) => {
    
    const user = await userModel.findById(req.user.id)

    res.status(201).json({
        message: "Profile fetched successfully.",
        user
    })
}

const logOutControllers = async ( req, res) => {
   
}

module.exports = {
  registerController,
  loginController,
  profileController,
  logOutControllers
};
