const express = require("express"); // import the express server

const server = express(); // creates the server

// handle requests to the root of the api, the / route (endpoint))
server.get('/', (req, res) => {
    res.send("Hello from Express");
});

// watch for connections on port 5000
server.listen(5000, () =>
    console.log("Server running on http://localhost:5000")
);

// small change for deploy