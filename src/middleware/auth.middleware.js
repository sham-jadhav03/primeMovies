const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklist.model');

const authUser = async (req, res, next) => {
  const token =  req.cookies.token;  

  if(!token){
    return res.status(401).json({
        message: "Token not provided"
    })
  }

  const isTokenBlacklist = await blacklistModel.findOne({
    token
  })

  if(isTokenBlacklist) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }

  let decoded = null 
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)

  } catch (err) {
    return res.status(401).json({
        message: "user not authorized",
        err
    })
  }

  req.user = decoded

  next();
}

module.exports = authUser