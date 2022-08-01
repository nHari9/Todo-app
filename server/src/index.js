const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./configs/db");

const PORT = 2345;

const todoController = require("./controllers/todo.controller");

app.use("/hi", todoController);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Connected to db at ${PORT}`);
    } catch (e) {
        console.log("error", e);
    }
});


/*
https://shielded-headland-23335.herokuapp.com/ 
https://git.heroku.com/shielded-headland-23335.git
*/