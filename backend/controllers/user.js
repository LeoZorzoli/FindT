const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User
        .find({});

    res.json(users.map(u => u.toJSON()));
});

module.exports = router;