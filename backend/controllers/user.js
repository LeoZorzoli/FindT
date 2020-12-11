const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User
        .find({});

    res.json(users.map(u => u.toJSON()));
});

router.post('/', async (req, res) => {
    const {
        password,
        firstName,
        lastName,
        username,
        email,
        country
    } = req.body;

    if(!password || password.length < 3) {
        return res.status(400).send({
            error: 'Password must min length 3'
        });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        firstName,
        lastName,
        email,
        country,
        passwordHash
    });

    const savedUser = await user.save();

    res.json(savedUser);
});

module.exports = router;