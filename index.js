const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

const db = require("./config/db");

const routes = require("./routes");

db.authenticate()
    .then(() => {
        console.log("Connection database has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

app.use(express.urlencoded({ extended: true }));
app.use(routes());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
