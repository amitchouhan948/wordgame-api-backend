const express = require("express");
// const port = 8000;
const cors=require("cors")
const dbConnect = require("../src/config/db");
const userscoreRoute=require("./Routes/User.route")
const randomRoute=require("./Routes/Randomword.route")

require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", (req, res) => {
  res.send("server is active for word-gameplay");
});


app.use("/users",userscoreRoute)

app.use("/random",randomRoute)


app.listen(PORT, async () => {
  await dbConnect()
  console.log(`server started at http://localhost:${PORT}`);
});
