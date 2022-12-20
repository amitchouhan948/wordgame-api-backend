const express = require("express");
var randomWords = require('random-words');


const app = express.Router();

app.get("/", async (req, res) => {

    let level=req.headers.token;

    console.log(level)
    try{
    if(level==="Low"){

        let word=(randomWords({exactly: 1, maxLength: 4}))
        res.send(word[0]);
    }
    else if(level==="Medium"){

        let word=(randomWords({exactly: 2,maxLength: 3, join: ''}))
        res.send(word);
    }
    else if(level==="High"){

        let word=(randomWords({exactly: 2,maxLength: 5 , join: ''}))
        res.send(word);
    }

    let word=(randomWords({exactly: 1,minLength: 4, maxLength: 8}))
    res.send(word);
}
catch(err){
    res.send(err)
}
   

});






module.exports = app;