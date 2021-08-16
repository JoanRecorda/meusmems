        // Require Express creating a const. Then create a
        // const app that will use Express with patenthesis.    
        // Then, let's config a port.
        
const express = require('express');
const simpleIcons = require('simple-icons');
const app = express();

        // That's an environment variable that has to search
        // variable called PORT in our server, but in case
        // that doesn't exists it'll use the port 3000.

const port = process.env.PORT || 3000;

        // Then we add the EJS templates engine for express
        // and also specify the views directory. With this we
        // are telling to Express that we'll use a template
        // engine called EJS and those templates will be at
        // the views directory.

app.set('view engine', 'ejs');
app.set('views', './views');

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
        // and a response. When you're going to render your
        // web you use 'res.render' instead of 'res.send'.

app.get('/', (req, res) => {
        res.render('index', {dinamictitle: "my dinamic title"})
})

app.get('/services', (req, res) => {
        res.render('services', {dinamicsevicetitle: "my dinamic service title"})
})

        // Serving static files in Express
        // (https://expressjs.com/en/starter/static-files.html)
        // This other static file goes after the routes, coz
        // if doesn't finds a configured route

app.use ((req, res, next) => {
        res.status(404).render('404')
})

        // It is important that the server it'll be listening
        // to that requests.

app.listen(port, () => {
    console.log('server serving in the port', port);
})