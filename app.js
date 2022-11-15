const express = require("express");
const app = express()


app.get("/", (req, res) => {
    res.json({
        message : "this server is a test server for testing NGINX functionality and does not do anything"
    })
})

const PORT = 3000 
const server = app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
})