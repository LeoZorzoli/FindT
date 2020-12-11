const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const body = req.body;

    const user = await User.findOne({ username: body.username });

    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash);

    if(!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'Invalid username or password'
        });
    }

    const userForToken = {
        username: user.username,
        id: user._id
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    res
        .status(200)
        .send({ token, username: user.username, firstName: user.firstName, lastName: user.lastName });
});

module.exports = router;