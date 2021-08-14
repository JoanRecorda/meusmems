## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)

## General Info
***
This is a node.js exercise for my Full Stack Development Bootcamp.
Project status: work in progress.

I've been following the instructions from the following Bluuweb tutorial:

https://bluuweb.github.io/node/

01 - https://www.youtube.com/watch?v=mG4U9t5nWG8 - Fundamentos
02 - https://www.youtube.com/watch?v=eyFlEH6cwFQ - Exports y Require
03 - https://www.youtube.com/watch?v=w-hKkMQR5O8 - Package.json y NPM
04 - https://www.youtube.com/watch?v=gXFS4OQ34UI - Servidor HTTP
05 - https://www.youtube.com/watch?v=VmH4tPbbDsM - Express.js Intro
06 - https://www.youtube.com/watch?v=1cHUZQFb4bo - Template Engines EJS
07 - https://www.youtube.com/watch?v=a_hdvhq1KBs - Navbar Responsive Bootsrtrap
08 - https://www.youtube.com/watch?v=6WcBSNxEow8 - Deploy Heroku CLI
09 - https://www.youtube.com/watch?v=bab8b2Ix4K0 - Router Express
10 - https://www.youtube.com/watch?v=IpQSsb-1N1g - Conexión a MongoDB
11 - https://www.youtube.com/watch?v=jywsdGzwcyg - Variables de Entorno - dotenv
12 - https://www.youtube.com/watch?v=arvX_TitsCY - CRUD - Crear
13 - https://www.youtube.com/watch?v=3Vjlj1tiVDQ - CRUD - Leer
14 - https://www.youtube.com/watch?v=UriO6-rZ56Y - CRUD - Eliminar


### Screenshot


## Technologies
***
This project is based in a JavaScript Node.js back-end JavaScript runtime environment that runs on the V8 engine. 

Just a little reminder about Node.js: "(Node.js) lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
Node.js is a tool in the Frameworks (Full Stack) category of a tech stack. Check this.

Once everything has been installed run the app with the following command:

nodemon app.js

nodemon app



## Installation
***
Download from nodejs.org and install node.js. Check version with:

node -v

Once installed add the following command and execute to create package.json:

npm init -y

Then, install the cowsay NPM Package (Node Package Manager, https://www.npmjs.com/package/cowsay) executing following command:

npm i cowsay

Then, install the Nodemon packaje

npm install -g nodemon

Once is installed then indicate Nodemon to which file is gonna be listening.

nodemon app.js

We have also to install Express (http://www.expressjs.com) which will allow us to make the server more easily.npm

npm install express --save

Then use a template engine to create a dinamic webpage (http://expressjs.com/en/resources/template-engines.html) because we won't develope with the typical html. In this case, we'll use EJS template (https://ejs.co/#install).

NOTE: the equivalent framework for Vue could be nuxtjs.org and for example for React would be nextjs.org framework that is so useful to make SPA webpages who renders from the server-side.

npm install ejs

We'll also download Bootstrap (https://getbootstrap.com/docs/5.1/getting-started/download/) and put its css and js files in the public folder. Then we enable the css access at the head.ejs template with the href="./css/bootstrap.css".




# nodejscounter
Node.js exercise based in a counter




# Headline H1
## Headline H2
### Headline H3
#### Headline H4 
##### Headline H5
###### Headline H6