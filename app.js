        // Require Express creating a const. Then create a
        // const app that will use Express with patenthesis.    
        // Then, let's config a port.
        
const express = require('express');
const app = express();
const port = 3000;

        // Serving static files in Express
        // (https://expressjs.com/en/starter/static-files.html)
        // Now we'll configure an static file, a middleware.
        // In the beggining we'll configure our static files
        // to the public folder where the css stylesheet,
        // javascript, images, etc. Static files goes before
        // the routes. It is called middleware because we're
        // executing a function before the requests.

app.use(express.static(__dirname + "/public"))

        // Basic routing
        // (https://expressjs.com/en/starter/basic-routing.html)
        // Now we'll use that app and we'll response to a
        // request that makes the client through the 'get'.
        // That request is visualized at the root url ('/').
        // We'll recieve a response from that request; so
        // we introduce a callback function with an arrow
        // function expression that will recieve a request
        // and a response.

app.get('/', (req, res) => {
    res.end('My response from express')
})

app.get('/services', (req, res) => {
        res.end('You are in service webpage')
})

        // Serving static files in Express
        // (https://expressjs.com/en/starter/static-files.html)
        // This other static file goes after the routes, coz
        // if doesn't finds a configured route

app.use ((req, res, next) => {
        res.status(404).sendFile(__dirname + "/public/404.html")
})

        // It is important that the server it'll be listening
        // to that requests.

app.listen(port, () => {
    console.log('server serving in the port', port);
})