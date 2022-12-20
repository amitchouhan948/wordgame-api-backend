const express = require("express");
const UserModel = require("../Models/User.model");

const app = express.Router();

app.get("/", async (req, res) => {


  let userList = await UserModel.find();
  res.send(userList);

});



app.post("/", async (req, res) => {

  // let {} = req.body;

  console.log(req.body)
  try {
    let userData = await UserModel.create(req.body);

    res.send(userData._id);
  } catch (e) {
    res.status(500).send(e.message);
  }
});




module.exports = app;
