const express = require("express"); // import the express server
const cors = require("cors");
const server = express(); // creates the server



// watch for connections on port 5000
server.listen(5000, () =>
    console.log("Server running on http://localhost:5000")
);

server.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// handle requests to the root of the api, the / route (endpoint))
server.get('/', (req, res) => {
    res.send("Hello from Express");
});

server.post("/clientValues", (req, res) => {
    res.send("ok")
});