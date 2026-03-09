const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Username is required'],
        unique: [true, 'username must be unique']
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: [true, 'email must be unique']
    },
    password: {
        type: String,
        require:[true, 'Password is required'],
        select: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

//hash password before saving 
userSchema.pre("save", function (next) {

    if (!this.isModified("password")) return next();

    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash;
        next();
    });

});

userSchema.methods.comparePassword = async function (password) {
    if(!this.password) return false;
    const hash = bcrypt.compare(password, this.password)
    return hash;
}



const userModel = mongoose.model('user', userSchema);

module.exports = userModel;