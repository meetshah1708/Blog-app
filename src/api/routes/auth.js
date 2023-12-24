import express from 'express'
const router = express.Router();
import User from "../models/User.js";
//import bcrypt from 'bcrypt'

//REGISTER
router.post("/register", async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            // password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.statue(400).json("Wrong Credentials");
        // const validated = await bcrypt.compare(req.body.password, user.password);
        // !validated && res.status(400).json("Invalid Paasword");
        const { /*password, */ ...others } = user._doc;
        res.status(200).json(others);
    } catch (e) {
        res.status(500).json(e);
    }
})
export default router;