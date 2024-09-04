const express = require("express");

const app = express();

// app.use(express.json());

app.get("/about", (req, res) => {
    res.send("<form method='post'><label>Username</label><input type='text'><label>Password</label><input type='password'></form>");
})

app.listen(3000, () => {
    console.log("Start @ 3000.");
})