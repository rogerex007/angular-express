require('dotenv').config();
const authCtr = {};
const jwt = require('jsonwebtoken');


const Role = require('../models/Role');

const User = require('../models/User');

authCtr.singnup = async (req, res) => {
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role => role._id);
    }else{
        const role = await Role.findOne({name: 'user'});
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser}, 'example', {
        expiresIn: 86400 // 24 hours
    });

    res.json({token});
};

authCtr.singnin = async (req, res) => {

};


module.exports = authCtr;

