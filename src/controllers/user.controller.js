const express = require("express");

const User = require("../model/user.model");

const uploads = require("../middlewares/upload");

const router = express.Router();

router.get("" , async (req,res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    }
    catch(err)
    {
        return res.status(500).send({message : err.message});
    }
});

router.post("" ,uploads.any("profile_pic"), async (req,res) => {
    try {
        const user = await User.create();
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message : err.message});
    }
});

module.exports = router;