/* global app, database */

// Try it out at /hi/Suzy
app.get( '/hi', function( request, response ) {
  response.send('Hello')
})

// The following is an example of a route with a request parameter

// Try it out at /hi/Suzy
app.get( '/hi/:name', function( request, response ) {
  var name = request.params.name;
  response.send('Hello ' + name)
})