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

    const token = jwt.sign({id: savedUser}, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
    });

    res.json({token});
};

authCtr.singnin = async (req, res) => {
    const {email, password} = req.body;

    const userFound = await await User.findOne({email: email}).populate('roles');


    if(!userFound) return res.json({message: 'User not found'});

    const matchPassword = await User.comparePassword(password, userFound.password);

    if(!matchPassword) return res.json({token: null, message: 'Invalid password'});

    const token = jwt.sign({id: userFound}, process.env.SECRET, {
        expiresIn: 86400
    });

    res.json({token});
};


module.exports = authCtr;

