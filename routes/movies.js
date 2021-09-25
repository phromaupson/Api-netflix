const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");


//CREATE

router.put("/", verify, async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});


module.exports = router