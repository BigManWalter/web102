Welcome to Web 102
---------------

We'll begin today's workshop by looking into backend JavaScript using Node, Express and other libraries. After learning the fundamentals of backend, we will see how they fit together to create our web platform [CatBnB](//catbnb.glitch.me)

Why Glitch?
---------------

We use Glitch for this workshop because it's the easiest way to run our own Node servers and you can "Remix" this project and follow along!

Hosting Your Own Projects
------------------------------

Besides hosting with Glitch, you can run Node servers with Platform-as-a-Service (PaaS) providers such as [Heroku](http://heroku.com) or Virtual Private Servers (VPS) such as [Digital Ocean](http://digitalocean.com).

While both are affordable, PaaS are simpler to set up and VPS are cheaper.

Both will let you use custom domains as well as setup SSL and they include plenty of great of documentation to help you get started.

Fullstack What's Up?
-----------------------

Code that runs on the server is responsible for dynamically shaping the HTML that gets sent to the client.

The code that is sent to the client is referred to as the "frontend" and the code running on the server is the "backend". Together they form the mighty "fullstack".

All Your Database are Belong to Us
----------------------------------

Many pages display information stored in some sort of database. There are many kinds of databases

- SQL
- No-SQL
- Files

For Web 102 and CatBnb we use a very simple form of database, a single file called `database.json`.

What is Node.js?
-------------

*Node.js* is a JavaScript runtime environment. It executes JavaScript programs on a server instead of a web browser. This means you can program your backend in the same language you use for your frontend.

Node.js executes the JavaScript that runs CatBnB.

HTTP, or Hyper-Text Transfer Protocol is the protocol that runs the internet and is why every URL begins with http! HTTP communication between client and server follows the *Request Response* model.

Servers are special programs that know how to listen. While listening, other computers, called clients, can request information from the server. The server responds to the clients' requests.

Using Node.js, a server that simply replies to all requests with the text, "Hello, World!" might look like this:

```
const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World!');
});

server.listen();  // Start listening for requests
```

Each time the server receives a request, the `handleRequest()` function is called. It's passed a `request` object, which has information about the request from the browser. For example, `request.url` will tell you which page the browser requested.  You use the `response` object to send data back to the browser.

What is Express?
------------

Writing web apps directly in Node.js is tedious and messy. *Express* is a JavaScript library for Node.js that makes writing web servers easier. Express helps with handling routing, templating engines and other common web server features (we'll explain what these mean soon).

How is our Web Application Structured?
----------------------------

When a user accesses the URL [web102.glitch.me](web102.glitch.me) their request is directed toward the file `server.js`. 

The different requests that our server is listening for are defined in *controller* files located in the `controllers/` directory.

Response HTML is generated using the *views* defined the the `views/` directory.

What's in a Controller?
-------------------------

The first controller we will look at is in the file `controllers/hi.js`
```
app.get( '/hi', function( request, response ) {
  response.send('Hello')
})
```

This controller listens to the url [web102.glitch.me/hi](//web102.glitch.me/hi) and responds with the text `Hello`

A controller may have input parameters. An example of a controller with parameters is
```
app.get( '/hi/:name', function( request, response ) {
  var name = request.params.name;
  response.send('Hello ' + name)
})
```
Here we listen to the same url as above, followed by a `/` and then a name. The server responds by sending back the message `Hello` followed by the inputted name. Handling different urls with different functions is called *routing*. 

Try it out [web102.glitch.me/hi/Santa](//web102.glitch.me/hi/Santa).

`app.get()` is one of Express's routing functions. It listens for GET requests. There are 2 types of requests defined in HTTP

- GET requests are the standard request issued by your browser

- POST requests, which we'll see later, are usually used to submit *forms* and can carry additional parameters

What's in a View?
-----------------------------

Views generate HTML using a templating language. For CatBnB, we are using the EJS templating language. An EJS file is similar to an HTML file, except that it is also programmable.

We render a view by setting that view's name as the parameter to `response.render` in a controller
```
app.get( '/simple', function( request, response ) {
  response.render( 'simple' )
})
```
Which renders the view from the file `views/simple.ejs` ([web102.glitch.me/simple](//web102.glitch.me/simple))

View Logic
----------------------------

The major benefit to using a templating language over plain HTML files is that they are programmable.

A more complex view which contains some logic can be found at `views/complex.ejs` ([web102.glitch.me/complex/Elmo](//web102.glitch.me/complex/Elmo))
```
<!DOCTYPE html>
<html>
<body>
  <p>Hey there <%= name %>!</p>
</body>
</html>
```
This view gets passed the variable `name` which is then inserted between the `<%= ` `%>` tags.

The controller for this is in the file `controllers/complex.js`
```
app.get( '/complex/:name', function( request, response ) {
  response.render( 'complex', { name: request.params.name } )
})
```
Which passes the view the `name` parameter from the request URL