const express = require('express');
const router = express.Router();
const {Posts} = require('../models');
const fs = require('fs');

router.get("/", async (req,res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts);
});

router.post("/", async (req,res) => {
    // const post = req.body
    console.log(req.body);
    /*try {
        if (req.file == undefined){
            Posts.create(post)
            .then(() => {
                return res.status(200).json({msg : "annonce créer avec succes"})
            })
        } else {
            Posts.create({
                ...post,
                type: req.file.mimetype,
                name: req.file.originalname,
                filename: req.filename, 
                data: fs.readFileSync(
                    "../backend/images/uploads/" + req.file.filename
                ),
            }).then((image) => {
                fs.writeFileSync(
                    "../backend/images/TMP" + image.name,
                    image.data
                );
                return res.status(200).json({msg : "annonce créer avec succes"})

            } )
        }
    } catch (error) {
        return(
            res.status(200).json({msg : "echec de la requête"})
        )
    }*/
    res.status(200).json({msg : "echec de la requête"})
});

module.exports = router