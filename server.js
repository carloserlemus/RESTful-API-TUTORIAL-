// All the code to use node.js server

/* Importing http package to give us the functionality
we require for using a server */
const http = require('http');
const app = require('./app');

// dynamic port constant.
const port = process.env.PORT || 3000;

/* in the createServer http command we need to pass a LISTENER
A FUNCTION which is executed every time we have a new request and
returns a Response. 

We pass app which is will use EXPRESS
*/
const server = http.createServer(app)

// Start the server.
server.listen(port, (err) => {
    if (err) {
        console.log('Something bad happened')
    } else {
        console.log('Connected to port: ', port)
    }
})