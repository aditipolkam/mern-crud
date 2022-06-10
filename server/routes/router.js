const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');


router.get("/", (req, res) => {
    console.log("GET request received");
});


router.get("/view", async (req, res) => {
    try{
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    }
    catch(err){
        res.status(400).json(err);
    }
});

router.post("/register", async (req, res) => {
    console.log("POST request received");
    console.log(req.body);
    const { userName,userEmail,userAge,userContact,userWork,userAddress,description} = req.body; 

    if( !userName || !userEmail || !userAge || !userContact || !userWork || !userAddress || !description){
        res.status(400).json("Please fill all the fields");
    }

    try{
        const preUser = await users.findOne({userEmail});
        console.log(preUser);
        if(preUser){
            res.status(400).send("User already exists");
        }
        else{
            const addUser = new users({
                userName,userEmail,userAge,userContact,userWork,userAddress,description
            })
            await addUser.save();
            console.log("User added");
            res.status(201).json(addUser)
        }
    }
    catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;