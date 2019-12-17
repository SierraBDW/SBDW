const express = require("express");
const router = express.Router();

const knex = require("knex");
const config = require("../knexfile.js");

// we must select the development object from our knexfile
const db = knex(config.development);

router.get("/", (req, res) => {
    const client = [
        {
            id: 1,
            name: ""
        },
        {
           id: 2,
           phone: "" 
        },
        {
            id: 3,
            petName: ""
        },
        {
            id: 4,
            emergencyContact: ""
        },{
            id: 5,
            email: ""
        }
    ];
    res.status(200).json(client);
});

router.post("/", (req, res) => {
     
}

module.exports = router;