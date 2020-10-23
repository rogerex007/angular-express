const User = require('../models/User');
const {ROLES} = require('../utils/Constants');

const checkDuplicateUsernameOrEmail = async (req, res, next) =>{
    const user = await User.findOne({username: req.body.username});

    if(user) return res.json({message: 'The user already exists'});

    const email = await User.findOne({email: req.body.email});

    if(email) return res.json({message: 'The email already exists'});

    next();

}

const checkRolesExisted = async (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.json({
                    message: `Role ${req.body.roles[i]} does not extist`
                });
            }
        }
    }

    next();
}

module.exports = {
    checkRolesExisted,
    checkDuplicateUsernameOrEmail
}